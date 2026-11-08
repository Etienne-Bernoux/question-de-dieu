---
title: "Question de Dieu : M1, débat"
type: knowledge
scope: perso
projet: []
domaine: [philosophie, logique]
tags: [question-de-dieu, debat, objections, verdicts]
status: draft
updated: 2026-11-07
---

# M1, débat

Passage du brouillon de M1 ([index](index.md)) devant la [population](../../population/population.md) : premier tour à l'aveugle, réplique, recontrôle du vérificateur, verdicts définitifs du synthétiseur, décisions renvoyées à l'utilisateur. Les contributions brutes ne sont pas conservées. Les décisions et leurs mots sont au [journal](../../methode/journal.md) ; leur contenu est dans [cadre](../../socle/cadre/index.md), [registre](../../socle/registre.md) et les notes de M1.

R : retenue. J : rejetée. T : transmise à l'utilisateur. H : hors module. Les numéros d'objection sont ceux de chaque contribution (théiste O1 à O4, nécessitariste O1 à O3, naturaliste O1 à O5, sceptique O1 à O7).

## Objections par cible

| Cible | Auteurs | Verdict | Raison | Effet |
|---|---|---|---|---|
| Circ, source de l'écart entre les valeurs sélectives | théiste O1 ; nécessitariste O1 ; naturaliste O3 ; sceptique O4 ; vérificateur | R (constat), T (partie miroir), J (clôture telle qu'énoncée, « biais », « surplus inerte ») | l'écart tient à trois choses, chacune nécessaire : T15, la liste des parties admises (la partie `E(t) ∧ ◇¬E(t)` donnerait aux seuls contingents une base hors du cercle), la forme du test (une base strictement plus forte que P y échappe). La clôture par conséquence laisse `{□E(x)}` hors du cercle ; close par un nom nouveau sans FE, elle rend les verdicts de Circ′ | définitions, Circ (signalement conditionnel, trois sources) ; T15, conséquence ; paramètres, symétrie ; question des parties admises transmise |
| Circ′ et « aucune retenue » | théiste O2 ; sceptique O1 | R (constat, égalité de traitement), T (sort de Circ′ et de la clause d'identité étendue) | pour toute liste dont chaque partie donne `E(x)` sans FE ou est une base par une cause, Circ′ garde exactement les bases de « aucune retenue » ; le brouillon écartait la clause d'identité étendue pour ce motif et gardait Circ′ | définitions, Circ′ ; clause d'identité étendue mise en regard ; critère et valeur réunis en une décision |
| Clause d'identité étendue à l'existence | théiste O3 | R sous condition, T (lecture de « par la seule identité ») | sous la lecture « par le seul sens de `=` », la clause ne bloque ni la base modale ni la base miroir et rend les verdicts de Circ | définitions ; question de lecture transmise |
| Effet d'un critère sur « toutes retenues » | nécessitariste O2 ; sceptique O3 | R, T (clause d'exclusion) | la charge transmise par M0 ne vise que les deux valeurs sélectives ; passer de « bases circulaires » à « valeur écartée » demande une clause non écrite | définitions, Circ et Circ′, effets conditionnels ; clause d'exclusion transmise |
| Motif de Circ′ | théiste O4 ; sceptique O2 | R (« redit » ; coût de coextension), J (« la fusion que D4 écarte ») | `□E(t)` entraîne `E(x)` sans lui être équivalent ; sous « aucune retenue », raison et cause ont la même extension pour l'existence, théorème indexé par la valeur (T12 (e)) et non définition : sous « toutes retenues », le modèle 1 de T6 a un objet qui a une raison et pas de cause | Circ′, motif formel seul ; coût ajouté à Circ′ (raison non circulaire) et à « aucune retenue » |
| T20 | nécessitariste O3 | R | T20 n'écrivait valeur par valeur que la route par Pr ; avec Pr_c, Pc, (b), Pn_i et E1, G sous « retenues pour les seuls inévitables » et sous « aucune retenue », ni G ni ¬G sous les deux autres | T20, seconde liste ; camp de « aucune retenue » |
| T17 et T18, réduction des observations | naturaliste O1, O2 ; sceptique O5 ; vérificateur | R ; J (prémisse « `E(a)` contient un quantificateur ») | réduction démontrée, restreinte aux ensembles qui ont un modèle du socle avec `∃x (x = x)` ; `E(a)` est atomique (D18), mais sa valeur dépend du domaine : le préambule doit dire qu'aucun objet n'est ôté et qu'aucun nom ne désigne un objet ajouté | lemme de réduction ; préambule de T17 ; portée de T17 et T18 ; index, bilan, « Transmis » ; lacune d'AO transmise |
| Index, (b) | naturaliste O4 ; sceptique O7 | R | la réserve d'AO manquait | index |
| T21, comment des lois | sceptique O6 ; vérificateur | R | « plus générale » non démontré ; faux dilemme : le cycle de lois reste possible sans condition d'asymétrie | T21, conséquence 2 ; bilan ; index |
| Critère positif du naturaliste | naturaliste O5 | R (a), J (b), H (c) | le journal renvoie le critère à M1 ; sa généralisation ne tient que du socle actuel (un axiome `◇G` établirait G sans observation, T3b) ; le corollaire sur G et ¬G relève de M2 ou M3 | bilan, « Non traités » remplacé ; « Transmis », nouvelle ligne |
| Correction pour les énoncés sur un modèle | vérificateur | T | T17, L7 en M0 et la clause (R) de Loi_n emploient une extension de la correction que le cadre n'écrit pas | question transmise |
| Sens de « être » dans (b) | vérificateur ; théiste et nécessitariste en réplique | T (consignation) | trois lectures, (b), (b_∃), (b_s) ; le témoin 2 de T19 (b) est invalide sous (b_∃) ; sous FE et Pc les trois portent sur les mêmes suites | prémisses ; remarque après T19 ; T18 (d), T19 (b) ; lecture (b) proposée par les tenants |
| « Forme modale nommée » | vérificateur | appliqué | équivoque : « nommée par D18 » ou forme sur un nom | T15, index, bilan, paramètres |
| Contrôles mécaniques, tableau des prémisses, vocabulaire, T16 | vérificateur | appliqué | contrôle de T16 presque tautologique ; `count_premises.py` ne testait rien ; U et L4 absents ; « régularité de hasard » ; motif de T16, conséquence 3 | vérification mécanique (trois scripts du vérificateur) ; prémisses ; Loi_n ; T16 |

Contrôle de symétrie : trois asymétries du brouillon sont levées (clause d'identité étendue et Circ′ traitées autrement pour le même motif ; écart de Circ attribué à T seul ; T20 limité à la route par Pr) ; un coût manquait du côté de l'acceptation de « aucune retenue » et de Circ′. La charge de Circ est au théiste, celle de la clause d'exclusion à ses proposants, celle des deux valeurs sélectives à leurs tenants : le théiste pour la valeur réservée aux inévitables, personne pour la valeur réservée aux contingents. Hypothèses signalées nouvelles : (b_∃) et (b_s) servent G ; l'admission de `□E(t)` seule sert G sous Circ.

## Répliques

Trois membres ont répondu aux objections qui visaient leur position ; le sceptique n'était visé par aucune. Affirmations invalidées par le vérificateur :

- le théiste : « sans FE, la fermeture de Circ rend sur les trois formes les verdicts de Circ′ » ; faux pour `{□E(x)}`, qui n'entraîne aucune raison de soi ; son pas (a), « avec FE, la fermeture dépend du nom », est valide ;
- le nécessitariste : « Circ amendé a lui aussi l'extension de « aucune retenue » », même faille ; et, dans son contre-modèle sur Sc-O2, valide, la prémisse « D5 et D18 sont fixés sans le paramètre », inexacte ;
- au premier tour, le naturaliste : la clôture de Circ (O3 (iv)) telle qu'énoncée, et la prémisse « `E(a)` contient un quantificateur » (O1).

Concessions : le constat du groupe Circ et Sc-O4 entière, l'effet conditionnel de Circ sur « toutes retenues », le retrait de la justification « lecture des preuves de M0 » (théiste) ; Th-O2, Sc-O1, « redit », le retrait de « surplus inerte » et de Circ′ comme appui de sa valeur, le coût de coextension (nécessitariste) ; Th-O2, Sc-O1, Ne-O2, Sc-O3, le coût de coextension, la dérivation de « aucune retenue » réécrite (naturaliste). Engagement nouveau : le théiste soutient la clause d'exclusion des bases circulaires, avec la perte, déclarée, de la raison qu'il donne à Dieu sous Circ′.

Lecture de (b) : les deux tenants proposent (b), « des objets, sans condition d'existence » ; le vérificateur valide qu'avec Pc les trois lectures portent sur les mêmes suites.

## Décisions de l'utilisateur

À consigner au [journal](../../methode/journal.md). Objets, dans l'ordre où ils sont soumis : extension de la correction aux énoncés sur un modèle (point 1) ; ensembles d'enregistrements contradictoires et AO (point 2) ; lecture de (b) (point 3) ; pourquoi de l'existence, réunissant les parties admises dans une base, la lecture de « par la seule identité », le critère de cercle, la clause d'exclusion et la valeur du paramètre « raisons de soi retenues » (point 4) ; universels employables (point 5) ; Loi_n (point 6) ; Pert (point 7) ; asymétrie du comment (point 8).

## Décompte

| Membre | Objections | Retenues | Rejetées | Transmises | Mixtes |
|---|---|---|---|---|---|
| Théiste | 4 | 1 (O4) | 0 | 0 | 3 (O1 R/T, O2 R/T, O3 R/T) |
| Nécessitariste | 3 | 1 (O3) | 0 | 0 | 2 (O1 R/J, O2 R/T) |
| Naturaliste | 5 | 2 (O2, O4) | 0 | 0 | 3 (O1 R/J, O3 R/J, O5 R/J/H) |
| Sceptique | 7 | 4 (O4, O5, O6, O7) | 0 | 0 | 3 (O1 R/T, O2 R/J, O3 R/T) |
| **Total** | **19** | **8** | **0** | **0** | **11** |

Parts rejetées à l'intérieur d'objections mixtes, 5 objections : nécessitariste O1 (« Circ amendé », invalide pour `{□E(x)}` ; « biais du critère » ; « surplus inerte ») ; naturaliste O1 (prémisse « `E(a)` contient un quantificateur ») ; naturaliste O3 ((iv), clôture telle qu'énoncée) ; naturaliste O5 (généralisation du critère positif) ; sceptique O2 (« la fusion que D4 écarte »).

Le vérificateur ne rend pas d'objections : ses verdicts de validité sont appliqués (C1 à C20), ou transmis quand la réparation touche une décision (U1 à U4).

Critère de bascule (population, « Modèles ») : failles vues du seul vérificateur dans ce passage : les trois lectures de (b) et le témoin invalide de T19 (b) ; la condition « `Ω` a un modèle » et la lacune d'AO ; l'équivoque « forme modale nommée » ; les défauts des contrôles mécaniques ; la base `{□E(x)}`, qui invalide la clôture de Circ chez trois membres. Failles vues des seuls philosophes : Circ′ coextensif à « aucune retenue », l'absence de charge de « toutes retenues », la forme du test de Circ, le motif de Circ′, la clause d'identité étendue, la seconde liste de T20, la sémantique de `E(t)` dans T17. La base miroir a été vue des deux côtés.

## Points ouverts

- Fiches, à résoudre au prochain passage : le théiste, la raison « par sa nature » (D11) contre sa ligne Paramètre, contradiction par équivoque non traitée ; la lecture de « par la seule identité » qu'il tient ; la phrase de clôture de Circ et « base de nature ». Le nécessitariste, la même phrase de clôture et « objets du modèle ». Les quatre, le report de leurs engagements de M1 après les décisions.
- Certification croisée : les lignes révisées de chaque fiche attendent la certification d'un membre opposé, sauf, déjà certifiées, les lignes Circ et Pr du théiste et les lignes E1, `¬G`, `◇¬G` et Pc du naturaliste.
- Transmis : le corollaire du naturaliste sur G et ¬G sous des observations (M2, M3).
