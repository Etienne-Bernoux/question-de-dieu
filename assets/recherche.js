(function (racine) {
  function normaliser(s) {
    return s.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();
  }

  function normaliserAvecCarte(s) {
    var sortie = "";
    var carte = [];
    for (var i = 0; i < s.length; i++) {
      var n = normaliser(s[i]);
      for (var k = 0; k < n.length; k++) {
        sortie += n[k];
        carte.push(i);
      }
    }
    carte.push(s.length);
    return { texte: sortie, carte: carte };
  }

  function termes(requete) {
    var liste = [];
    var motif = /"([^"]+)"|«\s*([^»]+?)\s*»|(\S+)/g;
    var m;
    while ((m = motif.exec(requete)) !== null) {
      var t = normaliser((m[1] || m[2] || m[3]).trim());
      if (t) liste.push(t);
    }
    return liste;
  }

  function compter(texte, terme) {
    var n = 0;
    var i = texte.indexOf(terme);
    while (i !== -1) {
      n++;
      i = texte.indexOf(terme, i + terme.length);
    }
    return n;
  }

  function preparer(index) {
    return index.map(function (d) {
      return {
        titre: d.titre,
        url: d.url,
        texte: d.texte,
        titreNorm: normaliser(d.titre),
        corps: normaliserAvecCarte(d.texte)
      };
    });
  }

  function chercher(prepare, requete) {
    var ts = termes(requete);
    if (!ts.length) return [];
    var resultats = [];
    prepare.forEach(function (d) {
      var score = 0;
      for (var i = 0; i < ts.length; i++) {
        var dansTitre = compter(d.titreNorm, ts[i]);
        var dansCorps = compter(d.corps.texte, ts[i]);
        if (!dansTitre && !dansCorps) return;
        score += 10 * dansTitre + dansCorps;
      }
      resultats.push({ doc: d, score: score, termes: ts });
    });
    resultats.sort(function (a, b) { return b.score - a.score; });
    return resultats;
  }

  function echapper(s) {
    return s.replace(/[&<>"]/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c];
    });
  }

  function surligner(fragment, ts) {
    var n = normaliserAvecCarte(fragment);
    var marques = [];
    ts.forEach(function (t) {
      var i = n.texte.indexOf(t);
      while (i !== -1) {
        marques.push([n.carte[i], n.carte[i + t.length]]);
        i = n.texte.indexOf(t, i + t.length);
      }
    });
    marques.sort(function (a, b) { return a[0] - b[0]; });
    var html = "";
    var pos = 0;
    marques.forEach(function (m) {
      if (m[0] < pos) return;
      html += echapper(fragment.slice(pos, m[0])) + "<mark>" + echapper(fragment.slice(m[0], m[1])) + "</mark>";
      pos = m[1];
    });
    return html + echapper(fragment.slice(pos));
  }

  function extrait(r) {
    var d = r.doc;
    var premier = -1;
    var longueur = 0;
    r.termes.forEach(function (t) {
      var i = d.corps.texte.indexOf(t);
      if (i !== -1 && (premier === -1 || i < premier)) {
        premier = i;
        longueur = t.length;
      }
    });
    if (premier === -1) return surligner(d.texte.slice(0, 200), r.termes) + (d.texte.length > 200 ? " …" : "");
    var debut = d.corps.carte[premier];
    var fin = d.corps.carte[premier + longueur];
    var a = Math.max(0, debut - 90);
    var b = Math.min(d.texte.length, fin + 160);
    return (a > 0 ? "… " : "") + surligner(d.texte.slice(a, b), r.termes) + (b < d.texte.length ? " …" : "");
  }

  function afficher(resultats, requete) {
    var etat = document.getElementById("recherche-etat");
    var liste = document.getElementById("recherche-resultats");
    liste.innerHTML = "";
    if (!termes(requete).length) return;
    etat.textContent = resultats.length
      ? resultats.length + " page" + (resultats.length > 1 ? "s" : "") + " pour « " + requete + " »."
      : "Aucune page ne contient « " + requete + " ».";
    resultats.slice(0, 60).forEach(function (r) {
      var li = document.createElement("li");
      li.innerHTML = '<a href="' + echapper(r.doc.url) + '">' + echapper(r.doc.titre) + "</a>" +
        '<span class="extrait">' + extrait(r) + "</span>";
      liste.appendChild(li);
    });
  }

  function demarrer(urlIndex) {
    var champ = document.querySelector(".recherche-champ input");
    var requete = new URLSearchParams(window.location.search).get("q") || "";
    if (champ) champ.value = requete;
    fetch(urlIndex).then(function (r) { return r.json(); }).then(function (index) {
      var prepare = preparer(index);
      var lancer = function (q) { afficher(chercher(prepare, q), q); };
      lancer(requete);
      if (champ) {
        var minuterie;
        champ.addEventListener("input", function () {
          clearTimeout(minuterie);
          minuterie = setTimeout(function () {
            var q = champ.value;
            history.replaceState(null, "", q ? "?q=" + encodeURIComponent(q) : window.location.pathname);
            lancer(q);
          }, 200);
        });
      }
    }).catch(function () {
      document.getElementById("recherche-etat").textContent = "L'index de recherche n'a pas pu être chargé.";
    });
  }

  var api = { normaliser: normaliser, termes: termes, preparer: preparer, chercher: chercher, extrait: extrait, demarrer: demarrer };
  if (typeof module !== "undefined" && module.exports) module.exports = api;
  else racine.RechercheQDD = api;
})(this);
