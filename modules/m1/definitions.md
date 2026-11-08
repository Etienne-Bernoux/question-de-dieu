---
title: "Question de Dieu : M1, définitions"
type: knowledge
scope: perso
projet: []
domaine: [philosophie, logique]
tags: [question-de-dieu, raison, definitions, propositions]
status: draft
updated: 2026-11-08
---

# Définitions de M1

Clauses proposées en M1 et décisions de l'utilisateur (2026-11-07 ; [bilan](bilan.md)) : Circ, Circ′ et la clause d'identité étendue ne sont pas adoptés, aucun critère de cercle ne l'étant ; la lecture de « par la seule identité », les parties admises, Loi_n et Pert sont admises et reportées au [cadre](../../socle/cadre/4-definitions.md) (D18). Deux textes, rédigés ensuite, sont admis par l'utilisateur (2026-11-08) et reportés au cadre : le retrait d'AO pour un ensemble contradictoire (§4, clause (2 bis) d'AO) et l'asymétrie du comment par une cause (D18). Chaque clause a son énoncé, sa provenance, ce qu'elle donne d'après les [résultats](resultats.md), et son paragraphe « si tu la nies », classé (contrainte 3 du [protocole](../../methode/protocole.md)), qui dit si elle sert G ou ¬G. Aucune ne rend G ou ¬G vrai par définition : chacune porte sur les bases d'intelligibilité, D1 et D2 se règlent par la seule cause (T12 (e), T13 (iii)), et les modèles 1 et 2 de T6 restent, sous chacune, des modèles du socle et de `∃x (x = x)`, l'un avec G, l'autre avec ¬G (contrainte 9).

## Cercle déguisé, pour une base d'existence

Le cadre bloque deux cercles et laisse « les autres cercles déguisés à traquer au cas par cas » (D18, limites) ; M0 met à la charge de chaque valeur sélective du paramètre « raisons de soi retenues » de montrer qu'elle n'en est pas un. Deux critères sont proposés, et la clause d'identité de D18 étendue à l'existence est mise en regard ; Circ′ et la clause reçoivent le même traitement.

### Circ

Énoncé : une base M pour P est circulaire si P, joint au socle et aux identités de M, entraîne chaque partie de M.

Provenance : le théiste, en réplique au passage de M0 devant la population ([m0-solidite](../m0/solidite.md)) ; transmis à M1 ([m0-bilan](../m0/bilan.md), « Transmis »).

Ce qu'il donne : toute raison de soi par identité est un cercle ; ni une base par une cause, ni une base `{□E(t)} ∪ C` n'en est un (T14). Ne restent hors du cercle que « aucune retenue » et l'écriture modale de « retenues pour les seuls inévitables ». Les bases de « toutes retenues » sont des cercles, mais cette valeur ne porte pas de charge : sans clause qui écarte les bases circulaires, elle reste ouverte. Il range aussi parmi les cercles le renommage hors existence, que la clause d'identité bloque déjà.

**Si tu le nies**, tu admets qu'une base M pour P ne soit pas un cercle alors même que P, le socle et les identités de M entraînent chacune de ses parties. Aucune contradiction n'en est démontrée : la clause d'identité de D18 bloque le renommage hors existence sans ce critère. Le coût est épistémique : les raisons de soi par identité ne sont plus rangées parmi les cercles par ce test, et la charge des valeurs sélectives reste sans test, à moins qu'un autre critère ne soit admis. Circ est **signalé** : sous la liste actuelle des parties admises (`□E(t)` seule, sans partie composée), il sert G : il laisse sans appui la seule valeur sélective qui sert ¬G et garde l'écriture modale de celle qui sert G ; si la partie miroir `E(t) ∧ ◇¬E(t)` est admise, chacune des quatre valeurs a une écriture hors du cercle (`□E(t)` pour un inévitable, la partie miroir pour un contingent), Circ ne départage plus aucune valeur et ne sert ni G ni ¬G. L'écart entre les deux valeurs sélectives tient à trois choses, chacune démontrée et nécessaire. (1) T15 : parmi les formes modales de `E` sur un seul nom, seule `□E(t)` donne l'existence. (2) La liste des parties admises : une partie composée `E(t) ∧ ◇¬E(t)` donnerait aux seuls contingents une base que Circ ne range pas parmi les cercles (T15, conséquence). (3) La forme du test : une base est hors du cercle selon Circ si et seulement si elle est strictement plus forte que P, aux identités près ; `{□E(t)} ∪ C`, chaîne non vide, entraîne par T et sans FE la raison de soi `{E(t)} ∪ C`, que Circ range parmi les cercles (T14 (a)). Clos par conséquence, Circ rend les verdicts de Circ′ sur les bases à chaîne non vide ; `{□E(x)}` (T13 (ii)) n'entraîne aucune raison de soi et reste hors du cercle, sauf à clore par M ∪ {`a = x`}, `a` nom nouveau, sans FE, ce qui rend exactement les verdicts de Circ′ ; avec FE, la clôture fait dépendre le verdict du nom employé (`{Cause(u, t), t = x}` circulaire, `{Cause(u, x)}` non). Admettre `□E(t)` sans partie composée est un choix, signalé (sous Circ, il sert G), soumis avec la décision sur le critère.

Décision : non adopté (point 4.3). Aucun critère de cercle n'est adopté ; la charge des deux valeurs sélectives reste écrite comme non remplie.

### Circ′

Énoncé : une base minimale M pour `E(x)` dans `s` est circulaire si elle entraîne `E(x)` dans tout modèle (§1), et non seulement dans tout modèle du socle.

Provenance : formalisateur (M1), pour mettre en regard de Circ un critère qui ne distingue pas les écritures (contrainte 4).

Motif : une base qui donne `E(x)` par le seul sens des mots, sans FE, est rangée parmi les cercles.

Ce qu'il donne (RC et modèle, par T11 à T13 et §1) : `{E(t)} ∪ C` entraîne `E(x)` dans tout modèle (sens de `=`, D8) ; `{□E(t)} ∪ C` aussi (sens de `□`, puis de `=`) ; `{Cause(u, t)} ∪ C` ne l'entraîne que par FE : sans elle, une seule situation, `x` et `t` désignant un objet hors du domaine, `u` un autre, et `Cause(u, t)` vrai, la rend vraie avec `E(x)` faux. Pour toute liste dont chaque partie donne `E(x)` sans FE ou est une base par une cause (aucune partie modale, `□E(t)`, partie miroir), les bases que Circ′ ne range pas parmi les cercles sont exactement celles de « aucune retenue » : Circ′ ne départage pas les valeurs ; employé pour exclure, il a l'effet de « aucune retenue ». Clos par M ∪ {`a = x`}, `a` nom nouveau, sans FE, Circ rend les mêmes verdicts. Admettre Circ′ laisse sans appui les deux valeurs sélectives, dont la charge n'est pas remplie ; restent « toutes retenues », qui ne porte pas de charge, et « aucune retenue » ; avec une clause qui écarte les bases circulaires, la valeur est fixée à « aucune retenue ».

**Si tu le nies**, tu admets qu'une base qui donne `E(x)` par le seul sens des mots, sans FE, ne soit pas un cercle. Aucune contradiction ; le coût est épistémique : « `x` existe parce qu'il existe dans toute situation » et, sous ce seul test, « `x` existe parce qu'il existe » peuvent compter comme raisons d'exister, et le choix entre les valeurs reste ouvert. Circ′ **ne sert ni G ni ¬G** quant aux routes : il écarte une valeur sélective de chaque camp, et la valeur qu'il laisse garde L7 et la route de Pr vers ¬G. Il n'est pas neutre pour qui pose Pr : sous la seule valeur qu'il laisse, un être nécessaire, s'il existe, n'a pas de raison d'exister (T16), et Pr entraîne ¬G (M0). Coût de l'acceptation : pour l'existence, avoir une raison d'exister non circulaire et avoir une cause ont la même extension (T12 (e), T13).

Décision : non adopté (point 4.3).

### Clause d'identité étendue

La clause d'identité de D18, étendue à l'existence : si aucune partie modale n'est admise dans une base, elle a l'effet de « aucune retenue » ; si `□E(t)` (ou la partie miroir) est admise et que « par la seule identité » se lit « par le seul sens de `=` », elle ne bloque ni la base modale ni la base miroir et rend sur les formes admises les verdicts de Circ ; si la lecture comprend T, elle a l'effet de « aucune retenue ». Parties admises et lecture : décision de l'utilisateur.

Décision : non adoptée comme critère (point 4.3), au même titre que Circ′ ; les parties admises et la lecture sont fixées ci-dessous.

### Sens non retenus

- Un critère indexé sur la classe (« circulaire, sauf pour les inévitables », ou « sauf pour les contingents ») : il redit une valeur sélective au lieu de l'éprouver. Le formalisateur n'a trouvé aucun critère qui range parmi les cercles l'écriture modale de « retenues pour les seuls inévitables » sans y ranger aussi la raison de soi des contingents ; qu'il n'en existe pas n'est pas démontré.

## Lecture de « par la seule identité » et parties admises

Lecture (décision du point 4.2) : dans D18, « par la seule identité » se lit au sens étroit, par le seul sens de `=`, avec D8, sans le calcul des connecteurs ni le sens de `□`.

**Si tu la nies**, tu lis « par la seule identité » plus largement, avec le calcul des connecteurs, ou avec lui et T. Aucune contradiction ; le coût est épistémique et porte sur ce que la clause d'identité bloque : avec le calcul des connecteurs, elle bloque aussi la base miroir ; avec T, aussi la base modale, et, étendue à l'existence, elle a l'effet de « aucune retenue ». Hors existence, les lectures diffèrent pour un énoncé composé : sous la lecture étroite, `{F(a)}` donne le comment de `F(a) ∨ H(b)`, qu'elle n'entraîne que par le calcul des connecteurs ; les lectures larges l'excluent. Le coût de la lecture étroite est épistémique : un énoncé composé peut recevoir un comment qui n'apprend rien. La lecture **ne sert ni G ni ¬G** : sous la valeur fixée, aucune base qui ne porte que sur l'objet de `x` ne donne de raison d'exister, quelle que soit la lecture.

Parties admises (décision du point 4.1) : dans une base pour `E(x)`, outre les parties que D18 énumère, sont admis les énoncés `□E(t)` et `E(t) ∧ ◇¬E(t)`, `t` un nom. Avec une chaîne d'identités, ils forment les bases `{□E(t)} ∪ C` et `{E(t) ∧ ◇¬E(t)} ∪ C`, qui ne portent que sur l'objet de `x` (T13 et son extension). Comme les raisons de soi, ces bases ne rendent `E(x)` intelligible que si la valeur du paramètre « raisons de soi retenues » les retient : la base modale sous « retenues pour les seuls inévitables », la base miroir sous « retenues pour les seuls contingents ». Sous la valeur fixée, « aucune retenue », aucune ne donne de raison d'exister.

**Si tu la nies**, tu n'admets dans une base pour l'existence ni `□E(t)` ni la partie miroir, ou l'une sans l'autre. Aucune contradiction. Sous la valeur fixée, la négation ne change aucune raison d'exister ; son coût n'apparaît que si la valeur change, et il est épistémique : les deux valeurs sélectives perdent leur écriture hors de la raison de soi par identité, ou l'une d'elles seulement, et, sous Circ, l'écart entre elles reparaît (Circ, ci-dessus). La clause **ne sert ni G ni ¬G** : elle donne une écriture à chacune des deux valeurs sélectives, qui servent l'une G, l'autre ¬G, et les modèles 1 et 2 de T6 restent des modèles du socle sous elle, l'un avec G, l'autre avec ¬G.

## Loi : clause Loi_n

Énoncé : un universel clos sans nom compte comme loi, dans une base d'intelligibilité, s'il est vrai dans toute situation possible.

Provenance : formalisateur, sur la question transmise « distinguer loi et coïncidence » ([m0-bilan](../m0/bilan.md), « Transmis » ; D18, limites).

Ce qu'elle donne : un universel vrai dans `s` et faux dans une autre situation ne donne aucun comment. Un universel (O) n'est une loi que sous une seconde hypothèse, sa vérité dans toute situation, qu'aucune observation n'établit (§4 : une observation n'établit pas `□P`). Un universel (R) est vrai dans toute situation de tout modèle du socle (correction) ; qu'il soit vrai dans toute situation possible demande que le socle y vaille, ce qui se démontre par la récurrence de la correction lue sur les situations possibles : les axiomes du socle écrits dans le langage objet y sont posés pour toute situation (FE, irréflexivité de D4, identité entre situations), les définitions y valent, R et RC conservent la vérité dans chaque situation ; le complément, AO et Ac ne donnent rien sans observation. Même extension de la correction qu'en T17, admise par l'utilisateur (2026-11-07, point 1).

**Si tu la nies**, tu admets qu'un universel vrai dans `s` et faux dans une autre situation possible compte comme loi : une coïncidence de `s` donne le comment d'un fait. Aucune contradiction ; le coût est épistémique : le comment ne distingue plus une coïncidence (D18, limites) d'une loi. Accepter la clause coûte aussi : une régularité propre à la situation réelle ne donne plus de comment, et toute loi tirée de l'observation porte deux hypothèses au lieu d'une. La clause **ne sert ni G ni ¬G** : aucun universel n'entre dans une base minimale pour l'existence (T12 (a), T13).

Sens non retenu : « une loi est un universel qui resterait vrai si les faits étaient autres » : le cadre n'a pas de terme pour cette supposition, hors les situations possibles, que la clause emploie (règle 1 de la [population](../../population/population.md)).

Décision : admise (point 6), reportée au cadre (D18). Coût écrit : toute loi tirée de l'observation porte deux hypothèses, sa vérité dans la situation considérée et sa vérité dans toute situation possible.

## Pertinence : clause Pert

Énoncé : une base M pour un énoncé autre que `E(x)`, qui contient un universel `∀y ((A1(y) ∧ … ∧ An(y)) → H(y))`, n ≥ 2, n'est pas pertinente, et ne donne pas de comment, si l'universel obtenu en retirant l'une des conditions `Ai(y)` est vrai dans `s`. Les autres formes d'universel restent traitées au cas par cas.

Provenance : formalisateur, sur la question transmise « condition de pertinence » (D18, limites : une condition inerte d'une loi vraie entre dans une base minimale).

Ce qu'elle donne : la base `{∀y ((F(y) ∧ K(y)) → H(y)), F(a), K(a), E(a)}` ne donne pas le comment de `H(a)` quand `∀y (F(y) → H(y))` est vrai dans `s` ; la base sans `K` le donne.

**Si tu la nies**, tu admets qu'une base donne le comment d'un fait par une loi dont une condition est inerte, une loi plus générale, sans elle, étant vraie aussi. Aucune contradiction ; le coût est épistémique : le comment peut contenir une condition qui n'y joue aucun rôle. Accepter la clause coûte aussi : ce qu'une base donne dépend d'universels qui n'y figurent pas, alors que D18 ne compare pas aujourd'hui les universels d'une base à d'autres ; avec des universels (O), la pertinence elle-même devient une hypothèse. La clause **ne sert ni G ni ¬G** : elle ne porte que sur les bases qui contiennent un universel, et aucune base minimale pour l'existence n'en contient (T12 (a), T13).

Décision : admise (point 7), reportée au cadre (D18).

## Retrait d'AO pour un ensemble contradictoire (admis par l'utilisateur (2026-11-08))

Provenance : décision de l'utilisateur du 2026-11-07, point 2, option (b) ; texte du formalisateur, admis par l'utilisateur (2026-11-08) et reporté au [cadre](../../socle/cadre/4-termes-premiers.md) (§4). Il prolonge le critère de reproduction de la clause (2) d'AO ([cadre](../../socle/cadre/4-termes-premiers.md), §4).

Texte admis, clause (2 bis) d'AO :

- (i) Quand des enregistrements admis, deux ou plus, se contredisent ensemble, leur conjonction, avec ce que le complément d'« observation » et Ac en tirent (lemme de réduction), jointe au seul socle, se contredisant, on détermine, avant tout retrait, chaque ensemble minimal d'enregistrements admis qui se contredit ainsi, aucune de ses parties strictes ne se contredisant ; pour deux enregistrements, c'est la clause (2) ; dans chacun, sont retirés en même temps ceux qu'aucun autre sens, instrument ou observateur ne reproduit, ou tous s'ils sont dans le même cas. Après ce retrait, aucun ensemble minimal n'est entier, et ce qui reste ne se contredit plus.
- (ii) Un enregistrement admis dont le contenu, avec ce que le complément en tire, joint au seul socle, se contredit, ou contredit ce que Ac donne d'un enregistrement fait, est retiré quant à ce contenu, qu'il soit reproduit ou non : ni le socle ni Ac ne se retirent.
- (iii) La clause (3) vaut pour ces retraits : seuls les énoncés atomiques en cause sont retirés, avec ce qui n'a plus de démonstration à partir des enregistrements restés admis ; l'occurrence d'un enregistrement n'est jamais retirée (Ac).

Exemple. Trois enregistrements admis, `a = b`, `F(a)` et `¬F(b)`, compatibles deux à deux, forment un ensemble minimal contradictoire. Si `F(a)` seul n'est reproduit par aucun autre sens, instrument ou observateur, il est retiré, et les deux autres restent ; si aucun n'est reproduit, ou si tous le sont, les trois sont retirés. Un enregistrement de contenu `¬E(e)`, où `e` est un enregistrement fait, contredit Ac : ce contenu est retiré, et l'occurrence de `e` reste établie.

**Si tu la nies**, tu nies l'une de ses clauses. Nier (i), c'est, devant un ensemble minimal d'enregistrements admis qui se contredit, soit garder tous ses énoncés, et tenir ensemble des énoncés dont la conjonction, jointe au socle, se contredit : une contradiction (A2), dont tout se démontre sous réserve, G et ¬G compris ; soit retirer selon un autre critère que la reproduction, sans motif démontré : le coût est épistémique, et le choix reporte la charge sur qui garde l'autre enregistrement (contrainte 7). Nier (ii), c'est garder un contenu qui contredit le socle ou Ac : une contradiction (A2) si l'on garde aussi le socle ; sinon, retirer un axiome sur la foi d'un enregistrement admis sous réserve, alors qu'un axiome ne s'admet ou ne se retire que par l'utilisateur (contrainte 8) : coût épistémique. Nier (iii) a les coûts du refus de la clause (3) d'AO ([cadre](../../socle/cadre/4-termes-premiers.md), §4). Accepter la règle coûte aussi : un enregistrement reproduit par plusieurs sens, instruments et observateurs, qui contredit le socle, est retiré, si bien que le socle n'est jamais révisé par l'observation ; à égalité, des enregistrements que rien ne contredit pris deux à deux sont retirés ensemble. La règle **ne sert ni G ni ¬G** : elle vaut pour tout enregistrement, quel que soit le camp qui s'en sert.

Ce qui restait à démontrer, que tout ensemble d'enregistrements admis qui subsiste après ces retraits ait un modèle du socle, l'est par le lemme suivant, réciproque de la correction pour les ensembles `Ω` ; il est écrit avec la règle ; le vérificateur l'a jugé valide.

**Lemme du modèle canonique.** Si un ensemble `Ω` d'énoncés atomiques et de négations d'énoncés atomiques, joint au socle, ne se contredit pas, il existe un modèle du socle où `Ω` et `∃x (x = x)` sont vrais dans la situation désignée.

Preuve. Modèle. Deux noms de `Ω` sont reliés s'ils le sont par une chaîne d'identités de `Ω` ; les objets sont les classes de noms ainsi reliés, plus un objet nouveau `d`. Deux situations : `s`, désignée, et `s0`, vide. Le domaine de `s` contient `d`, la classe de chaque `t` dont `E(t)` est dans `Ω`, et la classe de chaque effet d'un énoncé positif de cause de `Ω`. Dans `s`, l'extension de chaque propriété et celle de la cause sont celles que posent les énoncés positifs de `Ω`, prises sur les classes ; dans `s0`, elles sont vides. Chaque nom désigne sa classe dans les deux situations, un nom absent de `Ω` désignant `d`. FE vaut, chaque effet étant dans le domaine ; la rigidité aussi ; `∃x (x = x)` est vrai dans `s` par `d`, et les énoncés positifs de `Ω` sont vrais par construction. Le modèle n'échoue que dans quatre cas, dont chacun donne une contradiction démontrable de `Ω` et du socle (RC sur le sens de `=`, §1) : `¬(a = b)` avec `a` et `b` reliés, chaîne vide comprise, contre A1 et A2 ; `F(a)`, une chaîne de `a` à `b` et `¬F(b)` (de même pour `E` et pour la cause), contre A2 ; `Cause(a, b)`, une chaîne de `b` à `b′` et `¬E(b′)`, contre FE ; `Cause(a, b)` avec `a` et `b` reliés, contre l'irréflexivité de D4. Un `Ω` qui ne se contredit pas n'est dans aucun de ces cas : le modèle est un modèle du socle où `Ω` est vrai dans `s`.

Avec la règle admise, ce qui subsiste des enregistrements admis après retrait ne se contredit plus, et le lemme de réduction en fait un ensemble `Ω` : la condition de T17 et de T18 tombe pour tout ensemble d'observations admises.

## Asymétrie du comment par une cause (admis par l'utilisateur (2026-11-08))

Provenance : décision de l'utilisateur du 2026-11-07, point 8, et sa remarque : le mât arrête les photons et cause l'ombre, alors que l'ombre ne permet que de calculer la hauteur du mât ; calculer n'est pas expliquer. Texte du formalisateur, admis par l'utilisateur (2026-11-08) et reporté au [cadre](../../socle/cadre/4-definitions.md) (D18).

Texte admis, clause d'asymétrie de D18 : dans `s`, une base M qui contient un universel (O) ne donne le comment d'un énoncé atomique `F(a)`, ou de sa négation, que si chaque nom d'un énoncé atomique de M, ou d'une négation d'énoncé atomique de M, identités exceptées, désigne l'objet de `a` ou une chose qui est, dans `s`, cause de l'existence de cet objet (D4). Une base dont tous les universels sont (R) n'est pas soumise à la clause.

Exemple du mât. Dans `s`, un mât `m` et une ombre `o` ; `m` est cause de l'existence de `o` : il arrête la lumière là où l'ombre se trouve. `Haut_h` et `Long_l` sont des prédicats de valeur (D14), la direction de la lumière étant fixée. Deux universels (O), vrais dans toute situation possible (Loi_n) : la loi `∀y ∀z ((Mât(y) ∧ Haut_h(y) ∧ Cause(y, z) ∧ Ombre(z)) → Long_l(z))`, et sa réciproque `∀y ∀z ((Ombre(z) ∧ Long_l(z) ∧ Cause(y, z) ∧ Mât(y)) → Haut_h(y))`.

- La base `{loi, Mât(m), Haut_h(m), Cause(m, o), Ombre(o), E(m)}` donne le comment de `Long_l(o)` : ses noms désignent `o` ou `m`, cause de l'existence de `o`.
- La base `{réciproque, Ombre(o), Long_l(o), Cause(m, o), Mât(m), E(m)}` permet de démontrer `Haut_h(m)`, mais n'en donne pas le comment : `o` n'est pas cause de l'existence de `m`. Sans la clause, D18 la compte comme comment (D18, limites : sous une loi réciproque, deux faits sont le comment l'un de l'autre).

`E(o)` suit de `Cause(m, o)` par FE ; `E(m)` ne suit de rien et doit figurer dans la base.

**Si tu la nies**, tu admets qu'une base qui contient un universel (O) donne le comment d'un fait par des faits qui portent sur une chose qui n'en est pas cause : la longueur de l'ombre donne le comment de la hauteur du mât. Aucune contradiction ; le coût est épistémique : le comment se réduit à ce qui permet de calculer, et il s'inverse sous une loi réciproque. La clause ne règle pas le comment d'un universel : le cycle de lois de T21 reste possible sous elle. Accepter la clause coûte aussi : le comment par une loi tirée de l'observation exige de savoir, dans `s`, quelle chose est cause de l'existence de quelle autre, alors qu'une observation `Cause(a, b)` ne donne pas l'existence de `a` (complément) et qu'une cause peut n'être pas observée ; le comment d'une propriété d'une chose sans cause ne passe que par des faits sur elle-même ; seule la cause directe compte, faute d'une définition de la cause par intermédiaires, proposée pour M2 ([m0-bilan](../m0/bilan.md), « Transmis », H2). L'exemption des universels (R) est un choix : une loi démontrée du seul socle n'a pas de direction de cause à suivre, et ses deux sens restent des comment. La clause **ne sert ni G ni ¬G** : elle ne porte que sur les bases qui contiennent un universel, et aucune base minimale pour l'existence n'en contient (T12 (a), T13).

Rouvre-t-elle la décision du 2026-11-01 « séparer cause et raison » ? Pas à la lettre : cette décision (D4, D5) porte sur la raison, et la raison ne désigne plus que le pourquoi de l'existence depuis le 2026-11-04 ; la clause ne fait pas du comment une cause, elle en oriente le sens par la cause, et la phrase de D18 « le comment n'en est pas une » reste vraie. Elle modifie D18, donc une définition, que l'utilisateur décide.
