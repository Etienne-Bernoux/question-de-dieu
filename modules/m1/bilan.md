---
title: "Question de Dieu : M1, bilan, décisions et reports"
type: knowledge
scope: perso
projet: []
domaine: [philosophie, logique]
tags: [question-de-dieu, raison, existence, decisions]
status: draft
updated: 2026-11-08
---

# M1, bilan, décisions et reports

## État

M1 est clos (2026-11-08), sous les décisions de l'utilisateur (section « Décisions »). Il reste aux philosophes les points « À résoudre au passage suivant » de leurs fiches de position, pour le passage suivant.

## Validité

Le vérificateur a contrôlé les 34 pas du brouillon : 27 VALIDE, 6 SOUS RÉSERVE, levés par les corrections K1 à K16, 1 INVALIDE (T21, conséquence 2), corrigé par K14 ; recontrôle et contrôle des répliques : [débat](debat.md). Deux pas reposaient sur des lectures désormais écrites : la correction appliquée à Pr et Pr_c, énoncés sur un modèle entier, étendue au cadre par la décision du point 1 ; le lemme de réduction, démontré avant T17, dont la conclusion sur Pr et Pr_c dépend de cette extension. Au contrôle avant soumission, le vérificateur ne relève dans M1 aucun pas INVALIDE ni SOUS RÉSERVE ; il juge valide le lemme du modèle canonique. Le contrôle mécanique borné ne trouve aucun contre-exemple ([résultats](resultats.md), « Vérification mécanique »).

## Ce que le module établit

Sous les décisions de l'utilisateur (2026-11-07, section suivante), la valeur du paramètre « raisons de soi retenues » est « aucune retenue », et M1 répond ainsi à sa question, « toute chose qui existe a-t-elle une raison d'exister, une cause ou une raison de soi ? » :

- une chose qui existe dans `s` y a une raison d'exister si et seulement si elle y a une cause (T12, T16) : pour l'existence, raison et cause ont la même extension, coût écrit de la valeur ; les parties `□E(t)` et `E(t) ∧ ◇¬E(t)`, admises dans une base, n'y donnent aucune raison d'exister sous cette valeur (décision de l'utilisateur, 2026-11-07) ; cela ne dit rien de l'existence d'une cause, qui relève de Pr_c pour un contingent et de Pr pour un inévitable, toutes deux des hypothèses ;
- Pr équivaut à « toute chose qui existe a une cause » : hypothèse, signalée, qui sert ¬G, qu'elle entraîne ; Pr_c équivaut à « tout contingent qui existe a une cause » : hypothèse, signalée, qui sert G (L7) ; ni l'une ni l'autre, ni leur négation, ne se démontre du socle, de E1 et d'un ensemble d'observations admises sans universel (O) (T17, lemme de réduction, correction étendue, clause (2 bis) d'AO) ;
- un être nécessaire, s'il en existe un, n'a pas de raison d'exister : c'est un fait brut quant à son existence (D6, T16) ; cela ne dit pas qu'il en existe un ;
- avec E1, Pr, Pc et (b) ne sont pas vraies ensemble, deux quelconques d'entre elles le restant (T19) ; Pr_c, Pc, (b), Pn_i et E1 entraînent G (T20, L7) ;
- la charge des deux valeurs sélectives, montrer qu'elles ne sont pas un cercle déguisé, reste écrite comme non remplie : aucun critère de cercle n'est adopté ;
- pour le comment : les universels (R) et (O) entrent dans une base ; un universel n'y compte comme loi que s'il est vrai dans toute situation possible (Loi_n) ; une base dont un universel `∀y ((A1(y) ∧ … ∧ An(y)) → H(y))` a une condition inerte ne donne pas de comment (Pert) ; le comment d'une loi ne vient que d'autres lois tirées de l'observation (T21).

M1 n'établit ni G ni ¬G, ni Pr, ni Pr_c, ni (b).

Résultats de l'épreuve, valeur par valeur :

1. Sous « toutes retenues » : oui, par définition (M0). Sous chacune des trois autres valeurs, la question se ramène à une thèse sur la cause : Pr équivaut à « tout contingent qui existe a une cause », à « tout inévitable qui existe a une cause » ou à « toute chose qui existe a une cause » ; ni cette thèse ni sa négation ne se démontre du socle, de E1 et d'un ensemble d'observations admises sans universel (O) (T17, lemme de réduction, clause (2 bis) d'AO). Il en va de même de Pr_c sous « retenues pour les seuls inévitables » et « aucune retenue ».
2. Que l'existence d'un être nécessaire ait une raison se tranche par définition sous chaque valeur : oui sous « toutes retenues » et « retenues pour les seuls inévitables », non sous les deux autres ; que celle d'un contingent en ait une se tranche par définition sous « toutes retenues » et « retenues pour les seuls contingents » (T16).
3. Les deux écritures de « retenues pour les seuls inévitables » ont la même extension ; sous l'écriture modale, T11 et T12 s'étendent à la forme `□E(t)` sans changer D19, D2 ni Pc (T13).
4. Le critère Circ range parmi les cercles toute raison de soi par identité, non les bases par une cause ni les bases `{□E(t)} ∪ C` (T14). Aucune forme modale de `E` portant sur un seul nom ne donne l'existence aux seuls contingents, faute de pendant à `□P → P` pour `◇¬P` (T15). L'écart entre les deux valeurs sélectives sous Circ tient à T15, à la liste des parties admises et à la forme du test. Circ′ ne range hors du cercle que les bases de « aucune retenue » (pour les parties admissibles examinées).
5. (b) ne dépend pas du paramètre ; deux observations qui forment un cycle de cause la réfutent, sous réserve ; aucune observation ne l'établit (T18).
6. Sous « aucune retenue », E1 rend Pr, Pc et (b) incompatibles ensemble, et deux quelconques d'entre elles restent compatibles ; sous les trois autres valeurs, les trois le sont (T19). Sous la lecture (b_s) de (b), Pr et (b_s) suffisent, avec E1, à l'incompatibilité ; sous (b_∃), deux quelconques restent compatibles (témoin de T19 (b)).
7. Pour qui pose Pr, Pc, (b) et Pn_i, la valeur donne G, ¬G, une contradiction ou rien (T20) ; pour qui pose Pr_c, Pc, (b) et Pn_i, G sous « retenues pour les seuls inévitables » et « aucune retenue », rien sous les deux autres.
8. Le comment d'une loi `∀y (F(y) → H(y))` ne vient que d'autres lois tirées de l'observation ; « pourquoi les lois sont-elles ce qu'elles sont ? » est, dans le vocabulaire du cadre, une question de comment, sans réponse démontrée (T21).

## Décisions de l'utilisateur (2026-11-07)

Huit points, posés un par un dans cet ordre, puis deux décisions venues ensuite (points 9 et 10) ; les mots de l'utilisateur sont à consigner au [journal](../../methode/journal.md). Le critère de cercle et la valeur du paramètre forment un seul point (4) : sous plusieurs options, choisir le critère, c'est choisir la valeur. Pour chaque point : la question, les options et leurs suites, le camp, puis la décision.

### Point 1. Les preuves d'impossibilité valent-elles pour les énoncés sur tout un modèle ?

- Question : le cadre dit qu'un contre-modèle prouve qu'une démonstration est impossible. Cela vaut-il aussi pour les énoncés qui parlent de toutes les situations et de tous les objets d'un modèle (Pr, Pr_c, Pc, (b), Pn_i), et pour les situations possibles ?
- Options et suites. (a) Oui pour les deux : T17 conclut que ni Pr ni Pr_c ne se démontrent ; la clause (R) de Loi_n est démontrée ; l'usage que M0 en fait pour L7 est écrit. (b) Oui pour les seuls modèles : la clause (R) de Loi_n reste non démontrée. (c) Non : T17 ne dit plus que « il existe des modèles où… », sans conclure à l'impossibilité d'une démonstration ; les contre-modèles de L7 en M0 perdent le même pas.
- Camp : aucun ; l'extension porte des résultats des deux côtés (L7, route vers G ; Pr, route vers ¬G).
- **Décision : (a).** La correction est étendue aux énoncés sur un modèle entier et aux situations possibles ([cadre](../../socle/cadre/1-notation.md), §1). T17 conclut ; la clause (R) de Loi_n est démontrée.

### Point 2. Que faire de trois observations qui se contredisent ensemble ?

- Question : AO retire un enregistrement quand deux se contredisent. Rien ne règle trois enregistrements compatibles deux à deux et contradictoires ensemble (`a = b`, `F(a)`, `¬F(b)`), ni un enregistrement qui contredit Ac.
- Options et suites. (a) Garder AO : T17 et T18 ne valent que pour les ensembles d'observations qui ont un modèle ; un ensemble contradictoire admis reste admis, et tout s'en démontre sous réserve, G et ¬G compris. (b) Étendre le retrait à tout ensemble admis contradictoire avec le socle, et à l'enregistrement qui contredit Ac, avec une règle qui désigne ce qui est retiré : la condition de T17 et T18 se rapproche de toute observation admise ; que tout ensemble non contradictoire de cette forme ait un modèle reste à démontrer.
- Camp : aucun signalé ; la règle porte sur tout enregistrement.
- **Décision : (b).** La règle est rédigée, puis soumise pour admission ([définitions](definitions.md), « Retrait d'AO pour un ensemble contradictoire »). Elle est admise par l'utilisateur (2026-11-08), avec le lemme du modèle canonique, et reportée au [cadre](../../socle/cadre/4-termes-premiers.md) (§4, AO) ; la condition de T17 et de T18 tombe. Coûts écrits : le socle n'est jamais révisé par l'observation, sa révision relevant de l'utilisateur ; à égalité, des enregistrements compatibles deux à deux sont retirés ensemble.

### Point 3. Dans l'hypothèse (b), les termes d'une suite doivent-ils exister ?

- Question : les termes sont-ils de simples objets (b), des objets qui existent dans au moins une situation (b_∃), ou des objets qui existent dans la situation considérée (b_s) ? (b_s) entraîne (b_∃), qui entraîne (b).
- Les deux tenants de (b), le théiste et le nécessitariste, proposent la lecture (b) ; avec Pc, qu'ils tiennent, les trois lectures sont équivalentes.
- Options et suites. (a) Consigner (b) : T19 (b) tel qu'écrit ; (b_∃) et (b_s) restent des variantes signalées. (b) (b_∃) : T19 (b) avec le témoin pour (b_∃) ; T18 (d) avec sa construction ajoutée. (c) (b_s) : sous « aucune retenue », Pr, (b_s) et E1 sont incompatibles sans Pc ; « deux quelconques compatibles » ne vaut plus. Sous les trois : L4, L7, T18 (b), (c) et T19 (a) restent démontrés.
- Camp : (b) sert G ; (b_∃) sert G, sans fermer la route de Pr vers ¬G ; (b_s) sert G et ferme cette route sous « aucune retenue ».
- **Décision : (a).** Lecture consignée : les termes de la suite sont des objets, sans condition d'existence ; (b_∃) et (b_s) sont gardées comme variantes signalées, qui servent G.

### Point 4. Le pourquoi de l'existence : critère de cercle et valeur du paramètre

Question d'ensemble : une chose peut-elle avoir en elle-même la raison de son existence, et pour quelles choses ? Les deux valeurs sélectives doivent montrer qu'elles ne sont pas un cercle déguisé ; c'est à cela que sert un critère.

**4.1. Quelles parties une base pour l'existence peut-elle contenir ?** (a) `□E(t)` seule, « il existe dans toute situation », écriture modale de la valeur réservée aux inévitables. (b) En outre la partie miroir `E(t) ∧ ◇¬E(t)`, « il existe ici et pourrait manquer », écriture de la valeur réservée aux contingents (Th-O1) ; T11 à T13 s'étendent par le même pas. (c) Aucune partie modale. Camp : sous Circ, (a) sert G ; (b) et (c) ne servent ni G ni ¬G. Sous Circ et (b), chacune des quatre valeurs a une écriture hors du cercle, et Circ ne départage plus rien. Jugement du formalisateur : choisir l'écriture modale seule pour la valeur réservée aux inévitables ne rouvre pas la décision du 2026-11-05 quant à la valeur (même extension, T13) ; c'est un choix sur les parties admises (D18), qui revient à l'utilisateur et se pose ici.
**Décision : (b)**, `□E(t)` et la partie miroir. Sous la valeur retenue en 4.5, ni l'une ni l'autre ne donne de raison d'exister : elles sont les écritures de valeurs non retenues. Ce lien des bases à la valeur qui les retient est confirmé par décision de l'utilisateur (2026-11-07) ; cela ne dit rien de l'existence d'une cause, qui relève de Pr_c pour un contingent et de Pr pour un inévitable, toutes deux des hypothèses.

**4.2. Que veut dire « par la seule identité » dans D18 ?** (a) Par le seul sens de `=` ; (b) par `=` et le calcul des connecteurs ; (c) par ceux-ci et T. Suites : la clause d'identité étendue à l'existence bloque, sous (a), la seule raison de soi (verdicts de Circ) ; sous (b), aussi la partie miroir ; sous (c), aussi la base modale, et elle a l'effet de « aucune retenue ». Camp : non établi en général.
**Décision : (a)**, au sens étroit : par le seul sens de `=` (et D8).

**4.3. Le critère.**

| Option | Bases hors du cercle | Coûts | Camp |
|---|---|---|---|
| Circ | causes ; partie modale ; partie miroir si 4.1 (b) | laisse passer toute base strictement plus forte que P (Sc-O4) ; sous 4.1 (a), la valeur réservée aux contingents n'a aucune écriture hors du cercle ; sous 4.1 (b), ne départage plus rien | sous 4.1 (a), sert G ; sous 4.1 (b) ou (c), ni G ni ¬G |
| Circ′ (mêmes verdicts : Circ clos par un nom nouveau, sans FE) | causes seules | pour l'existence, raison non circulaire et cause ont la même extension (Sc-O2) ; un être nécessaire, s'il existe, n'a pas de raison (T16) ; Pr entraîne ¬G | ni G ni ¬G quant aux routes ; pour qui pose Pr, Pr et G incompatibles |
| Clause d'identité étendue à l'existence | selon 4.1 et 4.2 : verdicts de Circ, ou causes seules | ceux de Circ, ou de Circ′ ; c'est une condition d'être une base, donc elle exclut par elle-même | selon le cas |
| Aucun critère | toutes | la charge des deux valeurs sélectives reste sans test | ni G ni ¬G |

Circ′ ne départage pas les valeurs : les bases qu'il garde sont celles de « aucune retenue » (Th-O2, Sc-O1) ; il n'a de rôle propre que comme motif écrit de cette valeur. La clause d'identité étendue reçoit le même traitement que Circ′.
**Décision : aucun critère.** La charge des deux valeurs sélectives, montrer qu'elles ne sont pas un cercle déguisé, reste écrite comme non remplie.

**4.4. Une base circulaire est-elle écartée ?** (a) Non : un critère ne règle que la charge des deux valeurs sélectives. (b) Oui, par une clause « une base circulaire n'est pas une base d'intelligibilité » (Ne-O2, Sc-O3).
**Sans objet**, faute de critère.

**4.5. La valeur.** Options : les quatre valeurs, avec leurs suites et leur camp ([paramètres](parametres.md)) ; sans critère, les deux valeurs sélectives restent ouvertes, leur charge non remplie. « Aucune retenue » donne G par L7 avec Pr_c, Pc, (b), Pn_i et E1, et ¬G par Pr : elle garde une route de chaque côté (Ne-O3) ; sous elle, raison et cause ont la même extension pour l'existence (Sc-O2). « Retenues pour les seuls inévitables », relativement à « aucune retenue », ne ferme que la route de Pr vers ¬G. Écarter « retenues pour les seuls contingents » parce que Pr_c y est vraie par définition rouvrirait la décision du 2026-11-06 ; l'écarter comme cercle, sous un critère et une clause admis, ne la rouvre pas.
Choix déclarés des membres, pour information : le théiste, Circ, partie modale seule, clause d'exclusion, valeur réservée aux inévitables en écriture modale ; le nécessitariste, « aucune retenue » comme choix de définition ; le naturaliste, « aucune retenue », Circ′ tenu comme choix de méthode coextensif ; le sceptique, aucun critère général, la valeur que l'utilisateur fixe.
**Décision : « aucune retenue ».** Motif de l'utilisateur : un être nécessaire n'a pas besoin de raison ; « il n'a aucune raison » et « il est sa propre raison » sont tous deux cohérents, mais le second affirme une explication non établie et ferme la route de Pr vers ¬G. Coût écrit : pour l'existence, raison et cause ont la même extension (T12 (e), T16). Le théiste révise sa thèse 3 (règle 7 de la [population](../../population/population.md)).

### Point 5. Quelles lois peuvent expliquer comment une chose est ?

- Options : « aucun universel » ; « universels (R) seuls » ; « universels (R) et (O) » (texte actuel). Suites et coûts : [paramètres](parametres.md). Camp : aucun (T12 (a), T21). Sous la troisième, le comment d'une loi passe par d'autres lois (O), non nécessairement plus générales ; en remontant, régression, cycle ou loi sans comment.
- **Décision : « universels (R) et (O) »**, texte actuel de D18.

### Point 6. Une loi doit-elle valoir dans toute situation possible ?

- Options : admettre Loi_n ; ne rien ajouter. Suites et coûts : [définitions](definitions.md). Camp : aucun. La clause (R) est démontrée sous la décision du point 1.
- **Décision : Loi_n admise.** Coût écrit : toute loi tirée de l'observation porte deux hypothèses, sa vérité dans la situation considérée et sa vérité dans toute situation possible.

### Point 7. Une condition inutile dans une loi peut-elle faire partie d'une explication ?

- Options : admettre Pert ; ne rien ajouter. Suites et coûts : [définitions](definitions.md). Camp : aucun. Pert ne vise que les universels ; elle ne fonde pas un test d'inertie pour les bases d'existence.
- **Décision : Pert admise.**

### Point 8. L'explication d'un fait a-t-elle un sens ?

- Options : ne rien ajouter ; faire passer le comment par une cause ; un terme premier orienté, non rédigé. Camp : aucun (T12 (a)). Le cas « cycle de lois » (T21) n'est pas réglé par la variante proposée, qui ne porte que sur le comment d'un fait singulier.
- Jugement du formalisateur : l'option par la cause ne rouvre pas à la lettre la décision du 2026-11-01 (« séparer cause et raison », D4, D5), qui porte sur la raison, et la raison ne désigne plus que le pourquoi de l'existence depuis le 2026-11-04 ; elle modifie D18, donc une définition, décidée par l'utilisateur.
- **Décision : une variante à rédiger et à soumettre.** Remarque de l'utilisateur : le mât arrête les photons et cause l'ombre, alors que l'ombre ne permet que de calculer la hauteur du mât ; calculer n'est pas expliquer. Texte : [définitions](definitions.md), « Asymétrie du comment par une cause ». Elle est admise par l'utilisateur (2026-11-08) et reportée au [cadre](../../socle/cadre/4-definitions.md) (D18). Coût écrit : il faut connaître les causes pour expliquer par une loi observée ; le cycle de lois reste ouvert.

### Point 9. Le lien de D18 entre parties admises et valeur

- Question : sous « aucune retenue », les bases modale (`{□E(t)} ∪ C`) et miroir (`{E(t) ∧ ◇¬E(t)} ∪ C`) comptent-elles comme une raison d'exister ? Sous la lecture étroite, ni l'une ni l'autre n'est une raison de soi, et le paramètre ne les règle que si elles sont liées à la valeur dont elles sont l'écriture.
- Options et suites. (a) Confirmer le lien : ces bases ne donnent une raison d'exister que sous la valeur qui les retient ; sous « aucune retenue », raison et cause ont la même extension pour l'existence (T16). (b) Ne pas lier : sous « aucune retenue », tout inévitable aurait une raison par la base modale et tout contingent par la base miroir, et la valeur aurait l'extension de « toutes retenues » (contrôle mécanique : 8 modèles sur 8).
- Camp : aucun ; le lien ne rend ni G ni ¬G vrai par définition (modèles 1 et 2 de T6).
- **Décision : (a), lien confirmé.** Cela ne dit rien de l'existence d'une cause, qui relève de Pr_c pour un contingent et de Pr pour un inévitable, toutes deux des hypothèses.

### Point 10. Le pourquoi de D5 et le dessein

- Question : le « pourquoi » de D5 s'entend-il de ce qui rend intelligible qu'une chose existe, ou de ce en vue de quoi elle existe ?
- Options et suites. Le cadre distingue trois questions : la cause (qu'est-ce qui l'a produite ?), la raison (qu'est-ce qui rend compréhensible qu'elle existe ?), le dessein (en vue de quoi existe-t-elle ?). Garder un seul mot pour la raison et le dessein serait une équivoque (contrainte 5). La glose « à cause de quoi », proposée par l'orchestrateur, faisait entrer la cause dans la définition de la raison.
- Camp : aucun ; la précision ne change aucune base d'intelligibilité.
- **Décision : précision ajoutée à D5**, mot pour mot : « Le pourquoi s'entend ici de ce qui rend intelligible qu'une chose existe, non de ce en vue de quoi elle existe ; ce second sens est le dessein, transmis à M4. » La glose « à cause de quoi » est écartée. La question du dessein est transmise à M4, avec ses deux thèses, la providence (par une intention) et le hasard (sans intention, ce qui ne veut pas dire sans cause), chacune avec son paragraphe de refus.

## Transmis à la suite

| Énoncé | Contenu | Module |
|---|---|---|
| Pr, Pr_c | sous « aucune retenue », Pr équivaut à « toute chose qui existe a une cause » (signalée, sert ¬G) et Pr_c à « tout contingent qui existe a une cause » (signalée, sert G : L7) : thèses sur la cause, que ni le socle, ni E1, ni des observations admises sans universel (O) ne tranchent (T17, lemme de réduction, clause (2 bis) d'AO) ; L7 et « Pr entraîne ¬G » | M2 |
| (b) | réfutable par un cycle observé, jamais établie par observation (T18) ; avec Pr et Pc, voir T19 ; lecture (b) proposée par ses tenants ; (b_∃) et (b_s), variantes signalées (remarque après T19) | M2, M3 |
| Raison de l'être nécessaire | tranchée par la valeur fixée (T16) : sous « aucune retenue », un être nécessaire, s'il en existe un, n'a pas de raison d'exister ; M2 n'a plus à la traiter comme thèse | M2 |
| Prémisse de possibilité | M1 n'ajoute aucune route vers `◇G` ou `◇¬G` qui ne passe par des hypothèses : T20 en donne une de chaque côté selon la valeur | M2, M3 |
| G et ¬G sous des observations | ni G ni ¬G ne se démontre du socle et d'un `Ω` qui a un modèle du socle avec `∃x (x = x)`, donc de tout ensemble d'observations admises (clause (2 bis) d'AO), sous l'extension de la correction (corollaire proposé par le naturaliste au premier tour de M1, à démontrer dans le module qui l'emploie) | M2, M3 |
| Dessein | définir le dessein, ce en vue de quoi une chose existe, que D5 distingue de la raison (décision de l'utilisateur, 2026-11-07), et examiner ses deux thèses : la providence (une chose existe par une intention) et le hasard (elle existe sans intention, ce qui ne veut pas dire sans cause), chacune avec son paragraphe de refus | M4 |
| Comment des lois | réponse sous D18 : d'autres lois (O), ou rien : régression, cycle ou loi sans comment (T21) ; une loi qui serait une chose (Abs) rouvrirait le pourquoi | M6 |

Critère positif du naturaliste (thèses 1 et 3 de sa fiche) : son engagement de M1 le fixe, une existence est établie si elle se démontre du socle et de ce que donnent des observations admises ; c'est une position, non un résultat du module ; T17, T18 et le lemme de réduction en sont des données. Les engagements des philosophes sont dans leurs fiches.

## Reports au socle (2026-11-07)

Faits sur les verdicts du synthétiseur et les décisions ci-dessus :

- [cadre](../../socle/cadre/1-notation.md), §1 : extension de la correction aux énoncés sur un modèle entier et aux situations possibles (point 1).
- [cadre](../../socle/cadre/4-definitions.md), §4 : D5 et D6, ramenées à la valeur « aucune retenue » ; D1, colonne « Sens non retenus », valeur fixée ; D18, définition et colonne « Sens non retenus » (valeurs et critères non retenus) ; sous-section de la base d'intelligibilité : pont, lecture de « par la seule identité » (point 4.2), parties admises (point 4.1), paramètres fixés (points 4.5 et 5), absence de critère de cercle et charge non remplie (point 4.3), limites, clauses Loi_n et Pert avec leur paragraphe de refus (points 6 et 7), paragraphe de refus de la clause d'identité ; lien des parties admises à la valeur, avec sa provenance (point 9) ; D5, précision sur le pourquoi et sens non retenu « ce en vue de quoi » (point 10) ; clause d'asymétrie du comment, avec l'exemple du mât et son paragraphe de refus, et limite de la loi réciproque (point 8, admise le 2026-11-08).
- [cadre](../../socle/cadre/4-termes-premiers.md), §4 : clause (2 bis) d'AO, lemme du modèle canonique, paragraphe de refus d'AO complété (point 2, admise le 2026-11-08).
- [registre](../../socle/registre.md) : correction ; Pr, Pr_c, (b), et les variantes (b_∃), (b_s) ; D5, D6, D18 ; Loi_n, Pert, parties admises, lecture de « par la seule identité » ; contestés : Circ, Circ′, clause d'identité étendue, valeurs non retenues ; lemme de réduction, T13 à T21 ; provenance du lien des parties admises (point 9) ; D5, précision sur le dessein (point 10) ; AO, clause (2 bis) ; modèle canonique ; D18, asymétrie ; T17, T18 sans condition sur les observations admises.
- [lexique](../../lexique.md) : `Ω` et les objets des constructions ; lemme de réduction, T13 à T21 ; Circ, Circ′, (b_∃), (b_s) ; Loi_n, Pert, parties admises, lecture de « par la seule identité » ; les valeurs des deux paramètres ; les deux textes proposés ; provenance du lien sous « Partie modale, partie miroir » (point 9) ; D5 et l'entrée « Dessein », à définir en M4 (point 10) ; AO et ses clauses, lemme du modèle canonique, asymétrie du comment, admis.

- Fiches de position : les points « À résoudre au passage suivant » de chaque philosophe, tirés des verdicts du synthétiseur et du vérificateur ; aucun choix n'y est fait à la place d'un philosophe.
- [verifications](../../annexes/verifications.md) : section M1.

Restent, hors du mandat du formalisateur : la consignation des décisions au [journal](../../methode/journal.md) ; la ligne M1 du [sommaire](../../sommaire.md).
