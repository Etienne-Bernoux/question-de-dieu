---
title: "Question de Dieu : M1, résultats démontrés"
type: knowledge
scope: perso
projet: []
domaine: [philosophie, logique]
tags: [question-de-dieu, raison, existence, demonstration]
status: draft
updated: 2026-11-08
---

# Résultats démontrés

Tous sont établis sans observation (D15). Niveaux : « dérivation », « RC », « modèle », comme en M0. Les prémisses sont numérotées dans [prémisses](premisses.md) ; aucune hypothèse n'est admise.

Conventions. Les quatre valeurs du paramètre « raisons de soi retenues » sont nommées comme au [cadre](../../socle/cadre/4-definitions.md) (D18, paramètres) : « toutes retenues », « retenues pour les seuls inévitables », « retenues pour les seuls contingents », « aucune retenue ». « x a une raison d'exister dans s » : une base d'intelligibilité vraie dans s, admise sous la valeur considérée, donne `E(x)` (D5, D18). `Ω` désigne un ensemble d'énoncés atomiques au sens de D18, `E(t)` compris, ou de négations d'énoncés atomiques, sans universel ; la valeur de `E(t)` dépend du domaine (D8). Sauf mention, chaque modèle écrit ici est un modèle du socle (§1) : FE et l'irréflexivité de la cause y valent, et chaque nom y désigne le même objet dans toute situation.

## T13. Les bases pour l'existence sous l'écriture modale

La valeur « retenues pour les seuls inévitables » s'écrit de deux façons : une raison de soi `{E(t)} ∪ C` admise pour un inévitable seulement, ou une base `{□E(t)} ∪ C` (cadre, D18, parties admises). Sous l'écriture modale, une base peut contenir, outre les parties que D18 énumère, des énoncés `□E(t)`, `t` un nom. T11 et T12 ont été démontrés sans cette forme ; T13 les étend.

Énoncé. Sous l'écriture modale, dans `s` :

- (i) `E(x)` se démontre d'une base M et du socle si et seulement si M contient, pour un nom `t`, une chaîne d'identités C de `t` à `x` et l'un des énoncés `E(t)`, `Cause(u, t)`, `□E(t)` ;
- (ii) les bases minimales pour `E(x)` sont celles de T12 et les ensembles `{□E(t)} ∪ C`, où aucune partie stricte de C ne relie `t` à `x` ; `t` peut être `x`, la chaîne étant alors vide, D18 n'excluant de la base que `E(x)` ;
- (iii) une base `{□E(t)} ∪ C` ne porte que sur l'objet de `x`, et elle est vraie dans `s` si et seulement si `x` est inévitable (D20) ; T12 (d) et (e) restent vrais : D19, D2 et la part « raison » de Pc ne changent pas.

Preuve. (i), sens « si » (RC) : `□E(t)` vrai dans `s` rend `E(t)` vrai dans toute situation du modèle, `s` comprise (§1, sens de `□`) ; la chaîne donne `E(x)` (§1, sens de `=` ; D8). Les deux autres cas sont ceux de T11. Sens « seulement si » (modèle) : la construction de T11, étapes 1 à 5, avec un cas de plus à l'étape 4 : (e) un énoncé `□E(t′)` de M dont le nom `t′` n'est pas dans N garde sa valeur, l'objet que désigne `t′` et les domaines étant inchangés ; si `t′` est dans N, `□E(t′)` n'est pas dans M (hypothèse) ; la négation de `□E(t′)` n'est pas une partie admise d'une base. `E(x)` est faux dans `s`, M vraie : `E(x)` ne se démontre pas (correction).
(ii) Comme T12, étapes 1 et 2 : `{□E(t)} ∪ C` suffit (i) ; sans `□E(t)`, il ne reste que des identités ; sans une identité de C, plus aucune partie de C ne relie `t` à `x`, et `t` est le seul nom auquel `□E(t)` s'applique (i).
(iii) Les identités de C étant vraies dans `s`, ses noms désignent l'objet de `x` (§1) ; chaque nom désigne le même objet dans toute situation (identité entre situations), si bien que `□E(t)` est vrai si et seulement si cet objet appartient au domaine de toute situation : `x` est inévitable (D20). Une base minimale qui porte sur un `y` distinct de `x` reste donc de la forme `{Cause(u, t)} ∪ C` (ii), d'où T12 (d), puis (e).

Repose sur T11, T12, §1 (modèle du socle, sens de `□` et de `=`, identité entre situations, correction), D8, D18 (écriture modale), D20, FE, B, S, RC.

Conséquence. Les deux écritures ont la même extension pour « avoir une raison d'exister » : sous l'une comme sous l'autre, `x` a une raison d'exister dans `s` si et seulement s'il y a une cause ou s'il est inévitable. Ce que le cadre affirme sur ce point est ainsi démontré. Sous l'écriture modale, T11 et T12 changent d'énoncé ([bilan](bilan.md), « Reports au socle »).

Extension à la partie miroir (décision du 2026-11-07, point 4.1). Le cadre admet aussi dans une base les énoncés `E(t) ∧ ◇¬E(t)`, écriture de « retenues pour les seuls contingents ». Par le même pas : (i′) `E(x)` se démontre d'une base M et du socle si et seulement si M contient, pour un nom `t`, une chaîne C de `t` à `x` et l'un des énoncés `E(t)`, `Cause(u, t)`, `□E(t)`, `E(t) ∧ ◇¬E(t)` ; sens « si » : `E(t)` suit de la conjonction (S), puis la chaîne ; sens « seulement si » : à l'étape 4 de T11, un énoncé `E(t′) ∧ ◇¬E(t′)` de M dont le nom `t′` n'est pas dans N garde sa valeur, et, pour `t′` dans N, il n'est pas dans M (hypothèse). (ii′) Les bases minimales comprennent en outre les ensembles `{E(t) ∧ ◇¬E(t)} ∪ C` ; `t` peut être `x` : la partie contient alors `E(x)` comme membre d'une conjonction, ce que la lettre de D18, qui n'exclut que la partie `E(x)`, admet ; sans effet sous la valeur fixée. (iii′) Une telle base ne porte que sur l'objet de `x` et est vraie dans `s` si et seulement si `x` existe dans `s` et est contingent ; T12 (d) et (e) restent vrais. Sous « retenues pour les seuls contingents », elle a la même extension que la raison de soi réservée aux contingents, et T16 vaut sous l'une et l'autre écriture. Sous « aucune retenue », valeur retenue, ni les bases `{□E(t)} ∪ C` ni les bases `{E(t) ∧ ◇¬E(t)} ∪ C`, écritures de valeurs non retenues, ne donnent de raison d'exister (cadre, D18, paramètres).

## T14. Le critère Circ et les trois formes de base

Circ ([définitions](definitions.md)) : une base M pour P est circulaire si P, joint au socle et aux identités de M, entraîne chaque partie de M.

Énoncé. Pour `P = E(x)` dans `s` : (a) toute raison de soi `{E(t)} ∪ C` est circulaire selon Circ ; (b) aucune base `{Cause(u, t)} ∪ C` ne l'est ; (c) aucune base `{□E(t)} ∪ C` ne l'est.

Preuve. (a) RC. Dans toute situation d'un modèle du socle où `E(x)` et les identités de C sont vrais, `t` et `x` désignent le même objet, qui appartient au domaine (§1, sens de `=` ; D8) : `E(t)` y est vrai, et les identités de C le sont par hypothèse.
(b) et (c) Modèle. Deux situations, `s1` désignée, de domaine {`a`}, et `s2`, vide ; un objet `b` qui n'appartient à aucun domaine ; relation de cause vide dans les deux. `x` et `t` désignent `a`, et C est `{t = x}` (pour une chaîne vide, `t` est `x`) ; `u` désigne `b`. Dans `s1`, `E(x)` et C sont vrais, `Cause(u, t)` est faux (relation vide) et `□E(t)` est faux (`a` manque en `s2`). Ni `Cause(u, t)` ni `□E(t)` n'est donc entraîné par `E(x)`, le socle et C (§1, entraîner).

Repose sur §1 (sens de `=` et de `□`, modèle du socle, correction), D8, T12, T13, B, S, RC.

Conséquences, sous Circ. « Toutes retenues » admet des raisons de soi : elles sont circulaires. « Retenues pour les seuls contingents » ne s'écrit que par une raison de soi : circulaire. « Retenues pour les seuls inévitables » est circulaire sous l'écriture par identité, non sous l'écriture modale. « Aucune retenue » n'admet que des bases par une cause : aucune n'est circulaire. Hors existence, Circ range parmi les cercles le renommage `{F(a), a = e}` pour `F(e)`, que `F(e)` et `a = e` entraînent, et que la clause d'identité de D18 bloque déjà.

## T15. Aucune forme modale de `E` portant sur un seul nom ne donne l'existence aux seuls contingents

Énoncé. Soient `t` et `x` deux noms et C une chaîne d'identités de `t` à `x`. (a) `{□E(t)} ∪ C` entraîne `E(x)`. (b) Aucun des ensembles `{◇E(t)} ∪ C`, `{◇¬E(t)} ∪ C`, `{□¬E(t)} ∪ C` n'entraîne `E(x)`. (c) `{E(t), ◇¬E(t)} ∪ C` n'est pas minimale : `{E(t)} ∪ C` suffit.

Preuve. (a) T13 (i). (b) Modèle. Deux situations, `s1` désignée et vide, `s2` de domaine {`a`} ; relation de cause vide ; `t` et `x` désignent `a`, C est `{t = x}`. Dans `s1`, `◇E(t)` est vrai (`a` existe en `s2`), `◇¬E(t)` aussi (`a` manque en `s1`), C aussi, et `E(x)` est faux. Pour `□¬E(t)` : une seule situation, vide ; un objet `a` hors du domaine, que désignent `t` et `x` ; `□¬E(t)` et C sont vrais, `E(x)` faux. (c) T11.

Repose sur §1 (sens de `□` et de `◇`, modèle du socle, correction), D8, T11, T13, B, S, RC.

Conséquence. Parmi les bases faites d'une chaîne d'identités et d'une forme modale de `E` sur un seul nom, seule `□E(t)` donne l'existence, et elle n'est vraie que des inévitables (T13). La valeur « retenues pour les seuls contingents » n'a donc, parmi ces formes, aucune écriture autre que la raison de soi par identité, que Circ range parmi les cercles (T14). Parmi ces formes, que seule `□E(t)` donne l'existence tient à T, `□P → P`, qui n'a pas de pendant pour `◇¬P`. Hors de ces formes, la base `{E(t) ∧ ◇¬E(t)} ∪ C`, à partie composée, est vraie dans `s` si et seulement si `x` y existe et est contingent ; elle entraîne `E(x)`, est minimale, et Circ ne la range pas parmi les cercles (`E(x)` et C n'entraînent pas `◇¬E(t)` : modèle 1 de T6). Elle n'était exclue que parce que le cadre n'admettait aucune partie composée dans une base ; la décision du 2026-11-07 (point 4.1) l'admet, comme écriture de « retenues pour les seuls contingents » (T13, extension), et, sous la valeur retenue, « aucune retenue », elle ne donne aucune raison d'exister. Limite : l'énoncé ne couvre ni les bases qui mêlent plusieurs formes modales, ni une autre forme modale sur un énoncé composé, que le cadre n'admet pas (une forme qui donne une raison en un autre être ferait tomber T12 (e) : D18, paramètres).

## T16. La raison d'un être nécessaire se fixe par la valeur du paramètre

Énoncé. Soit `x` qui existe dans `s`.

- (a) Si `x` est nécessaire (D2), il a une raison d'exister dans `s` sous « toutes retenues » et sous « retenues pour les seuls inévitables », dans l'une et l'autre écriture ; il n'en a aucune sous « retenues pour les seuls contingents » et sous « aucune retenue ».
- (b) Si `x` est contingent (D3), il a une raison d'exister dans `s` sous « toutes retenues » et sous « retenues pour les seuls contingents » ; sous les deux autres valeurs, si et seulement s'il a une cause dans `s`.
- (c) Si `x` est inévitable dépendant (D20), il a une raison d'exister dans `s` sous « toutes retenues » et sous « retenues pour les seuls inévitables » ; sous les deux autres valeurs, si et seulement s'il a une cause dans `s`.

Preuve. RC. Par T12, et par T13 sous l'écriture modale, une base minimale pour `E(x)` est une raison de soi `{E(t)} ∪ C`, une base `{Cause(u, t)} ∪ C`, ou, sous l'écriture modale, une base `{□E(t)} ∪ C`. Une base par une cause vraie dans `s` existe si et seulement si `x` a une cause dans `s` : l'objet de `u` est alors cause de l'existence de celui de `x` (§1, sens de `=`) ; réciproquement, « Nommer » donne la base `{Cause(y, x)}` (T12 (d)).
(a) Dans `s`, aucun `y` distinct de `x` n'est cause de l'existence de `x` (D2, D19), et `x` ne l'est pas de la sienne (D4, irréflexivité) : seule une raison de soi ou une base modale peut donner `E(x)`. Sous « toutes retenues », `{E(a), a = x}`, où `a` est un nom nouveau (« Nommer »), est retenue. Sous « retenues pour les seuls inévitables », `x` est inévitable (D2) : la raison de soi est retenue ; sous l'écriture modale, `{□E(x)}` est vraie dans `s` (T13 (iii)). Sous « retenues pour les seuls contingents », `x` n'est pas contingent (D3) : aucune raison de soi n'est retenue pour lui, et la base miroir est fausse pour lui (T13, extension, (iii′)). Sous « aucune retenue », aucune raison de soi n'est retenue.
(b) La raison de soi est retenue pour un contingent sous « toutes retenues » et « retenues pour les seuls contingents » ; sous « retenues pour les seuls inévitables », elle ne l'est pas, et `□E(t)` est faux pour lui (T13 (iii)) ; restent alors, comme sous « aucune retenue », les seules bases par une cause.
(c) La raison de soi est retenue pour un inévitable sous « toutes retenues » et « retenues pour les seuls inévitables », et `{□E(x)}` est vraie sous l'écriture modale ; sous les deux autres valeurs, seules restent les bases par une cause.

Repose sur T12, T13, D2, D3, D4 (irréflexivité), D18, D19, D20, §1 (« Nommer », sens de `=`), B, S, RC. Vérification mécanique bornée : section finale.

| Valeur | Être nécessaire | Contingent | Inévitable dépendant |
|---|---|---|---|
| Toutes retenues | a une raison, par définition | a une raison, par définition | a une raison, par définition |
| Retenues pour les seuls inévitables | a une raison, par définition | a une raison s'il a une cause | a une raison, par définition |
| Retenues pour les seuls contingents | n'en a aucune, par définition | a une raison, par définition | a une raison s'il a une cause |
| Aucune retenue | n'en a aucune, par définition | a une raison s'il a une cause | a une raison s'il a une cause |

Conséquences.

- « L'existence d'un être nécessaire a-t-elle une raison ? » ([m0-bilan](../m0/bilan.md), « Transmis », M1 et M2) se tranche par définition sous chaque valeur : oui sous les deux premières ; non sous les deux autres, où un être nécessaire qui existe est un fait brut quant à son existence (D6). Aucune valeur ne laisse cette question à une thèse.
- « Tout contingent qui existe a-t-il une raison ? » se tranche par définition sous « toutes retenues » et « retenues pour les seuls contingents », où Pr_c est démontrée ; sous les deux autres valeurs, c'est Pr_c, thèse sur la cause (T17).
- Ni l'une ni l'autre ne rend G ou ¬G vrai par définition : les modèles 1 et 2 de T6 rendent vrais le socle et `∃x (x = x)` sous chaque valeur, l'un avec G, l'autre avec ¬G (contrainte 9 non déclenchée).

## Lemme de réduction

Énoncé. Ce que des observations admises donnent dans le langage objet est un ensemble `Ω` : leurs contenus, énoncés atomiques ou négations (§4) ; `E(a)` pour une observation positive `F(a)` (complément) ; `E(b)` pour une observation `Cause(a, b)` (FE) ; `E(e)` pour un enregistrement fait `e` (Ac).

Preuve. RC, sur les seules clauses du cadre qui portent sur une observation ou un enregistrement. (1) Caractérisation d'« observation » (§4) : le contenu d'une observation est un énoncé atomique ou sa négation, qui va dans `Ω`. (2) Complément : une observation positive `F(a)` donne `E(a)` ; une observation `Cause(a, b)` donne `E(b)` par FE, et rien sur `a` ; une observation négative ne donne rien. (3) AO : la clause (1) admet un contenu, qui relève de (1) ; les clauses (2) et (3) retirent des énoncés, ce qui n'ajoute rien ; la phrase « l'enregistrement est fait » se range dans `Ω` si on la lit comme un énoncé atomique, et ne compte pas sinon. (4) Ac : `E(e)` pour chaque enregistrement fait `e`, et rien d'autre dans le langage objet (cadre, D18, « Effet » ; T11, étape 4 (d)). (5) E1 : `∃x (x = x)`, qui suit de n'importe quel `E(t)`. Aucune autre clause du socle ne porte sur une observation : la correction (§1) les met toutes hors des modèles, et D18 exclut des bases les prédicats qui portent sur une observation ou un enregistrement.

Portée. Ce que T17 et T18 en tirent ne vaut que pour un `Ω` qui a un modèle du socle avec `∃x (x = x)` ; depuis la clause (2 bis) d'AO (2026-11-08), tout `Ω` tiré d'observations admises en a un (lemme du modèle canonique, [cadre](../../socle/cadre/4-termes-premiers.md), §4).

## T17. Pr et Pr_c, quand ce sont des thèses sur la cause, ne se tranchent par aucune observation

Énoncé. Soit `Ω` tel qu'il existe un modèle du socle où `Ω` et `∃x (x = x)` sont vrais dans la situation désignée `s`. Sous chaque valeur où elles sont des thèses sur la cause (Pr sous « retenues pour les seuls inévitables », « retenues pour les seuls contingents » et « aucune retenue » ; Pr_c sous la première et la dernière), il existe un modèle du socle où `Ω` et `∃x (x = x)` sont vrais dans `s` et la thèse fausse, et un autre où ils sont vrais et la thèse vraie.

Preuve. Modèle. Soit 𝔐 un modèle du socle où `Ω` et `∃x (x = x)` sont vrais dans `s`. Dans chaque construction, les objets ajoutés sont nouveaux : aucune construction n'ôte d'objet à un domaine (T17 (i) à (iv), T18 (b), T21 et la construction ajoutée à T18 (d) ajoutent des objets ; T18 (d) ne retire que des couples de cause) : chaque `E(t)` vrai dans `s` le reste ; aucun nom ne désigne un objet ajouté : chaque `¬E(t)` et chaque autre énoncé atomique de `Ω`, ou sa négation, garde sa valeur dans `s` ; `∃x (x = x)` reste vrai dans `s`.

- (i), thèse fausse sous « retenues pour les seuls inévitables » et sous « aucune retenue » : ajouter un objet `v` au seul domaine de `s`, cause de rien et effet de rien ; si 𝔐 n'a qu'une situation, lui ajouter une situation vide, où chaque nom désigne le même objet et où la relation de cause est vide. FE, l'irréflexivité et la rigidité des noms valent. `v` est contingent (D3, D20), existe dans `s` et n'y a pas de cause : il n'a pas de raison d'exister (T16 (b)). Pr_c est fausse, et Pr, qui l'entraîne, aussi.
- (ii), thèse fausse sous « retenues pour les seuls contingents » : ajouter un objet `v` au domaine de chaque situation, cause de rien et effet de rien. Mêmes vérifications. `v` est inévitable, sans cause dans aucune situation, donc nécessaire (D2) : il n'a pas de raison d'exister (T16 (a)), et Pr est fausse.
- (iii), thèse vraie : ajouter un objet `w` qui n'appartient à aucun domaine et, dans chaque situation, faire de `w` la cause de l'existence de chaque objet du domaine. FE vaut (chaque effet est dans le domaine), l'irréflexivité aussi (`w` n'est dans aucun domaine, donc distinct de chaque effet), la rigidité aussi ; les couples de cause de 𝔐 sont gardés. Toute chose qui existe dans une situation y a une cause : Pr et Pr_c sont vraies sous chaque valeur (T16).
- (iv), thèse vraie avec Pc, si 𝔐 vérifie Pc : ajouter deux objets `w1` et `w2` au domaine de chaque situation ; dans chacune, `w1` est cause de l'existence de `w2`, `w2` de celle de `w1`, et `w1` de celle de chaque autre objet du domaine. FE, l'irréflexivité et la rigidité valent ; Pc vaut pour les couples ajoutés, `w1` et `w2` existant partout. Pr et Pr_c sont vraies sous chaque valeur.

Pr et Pr_c portent sur les situations et les objets d'un modèle : comme M0 le fait pour L7 et pour Pr_c, ces modèles établissent, par la correction lue pour les énoncés que RC établit cas par cas, que ni la thèse ni sa négation ne se démontre du socle, de `∃x (x = x)` et de `Ω`. La correction s'étend à ces énoncés : Pr et Pr_c ont une valeur dans chaque modèle, fixée par ses situations, ses objets et sa relation de cause (T16) ; une démonstration par R et RC, à partir du socle et de prémisses du langage objet, sans le complément, AO ni Ac, n'établit que ce qui est vrai dans chaque modèle du socle où ces prémisses sont vraies, par la récurrence de la correction, RC n'établissant que ce qui est vrai dans chaque cas. M0 l'emploie pour L7 ; elle est écrite au cadre (§1), par la décision de l'utilisateur du 2026-11-07.

Repose sur §1 (modèle, modèle du socle, sémantique des énoncés atomiques, rigidité des noms, correction), FE, D2, D3, D4, D20, T16, B, S, RC.

Portée. Ce que des observations admises donnent dans le langage objet est un ensemble de la forme `Ω` (lemme de réduction). Par le lemme de réduction, la clause (2 bis) d'AO et le lemme du modèle canonique, tout ensemble d'observations admises est vrai avec `∃x (x = x)` dans la situation désignée d'au moins un modèle du socle, et aucun ensemble d'observations admises, sans universel (O), n'établit ni ne réfute Pr ou Pr_c quand ce sont des thèses sur la cause ; avec un universel (O), ce qui s'en tire est sous hypothèse (D18, statut). Les constructions montrent pourquoi : qu'une chose n'ait pas de cause porte sur tout objet, nommé ou non (construction (iii)) ; qu'elle soit contingente ou inévitable porte sur toutes les situations (constructions (i) et (ii)), et une observation n'établit pas `□P` (§4). Trois enregistrements deux à deux compatibles et contradictoires ensemble (`a = b`, `F(a)`, `¬F(b)`) n'ont pas de modèle ; depuis la clause (2 bis) d'AO, un tel ensemble ne reste pas admis entier, et la portée couvre toute observation admise.

## T18. (b) se réfute par un cycle observé et ne s'établit par aucune observation

Énoncé. (a) (b) ne dépend pas du paramètre « raisons de soi retenues ». (b) Pour tout `Ω` comme en T17, il existe un modèle du socle où `Ω` et `∃x (x = x)` sont vrais dans `s` et (b) fausse dans `s`. (c) Si `Ω` contient `Cause(a, b)` et `Cause(b, a)`, (b) est fausse dans `s` dans tout modèle du socle où `Ω` est vrai dans `s`. (d) Si `Ω` est fini et qu'il existe un modèle du socle où `Ω` et `∃x (x = x)` sont vrais dans `s` et où les couples que les énoncés positifs de cause de `Ω` rendent vrais dans `s` ne forment aucun cycle, il existe un modèle du socle où `Ω` et `∃x (x = x)` sont vrais dans `s` et (b) vraie dans toute situation.

Preuve. (a) (b) ne parle que de dépendance (D19), dont l'extension est celle de la cause sous chaque valeur (T12 (e) ; T13 (iii) pour l'écriture modale).
(b) Modèle. Ajouter des objets nouveaux `c1`, `c2`, …, un pour chaque entier, au domaine de `s`, et, dans `s`, faire de chaque `c(n+1)` la cause de l'existence de `cn`. FE (chaque `cn` est dans le domaine), l'irréflexivité et la rigidité valent ; `Ω` garde sa valeur (T17, préambule de la preuve). La suite `c1, c2, …`, dont chaque terme dépend du suivant dans `s` (D19), est infinie : on ne peut plus la prolonger, et elle n'a pas de dernier terme. (b) est fausse.
(c) RC. `a` et `b` désignent des objets distincts : sinon un couple `(o, o)` serait dans la relation de cause (D4, irréflexivité). Dans `s`, `b` dépend de `a` et `a` de `b` (D19), et tous deux existent (FE). La suite `b, a, b, a, …` est infinie, sans dernier terme : (b) est fausse.
(d) Modèle. Dans le modèle supposé, réduire la relation de cause de `s` aux couples que rendent vrais les énoncés positifs de cause de `Ω`, et la vider dans les autres situations. FE et l'irréflexivité valent, seuls des couples ayant été retirés ; les énoncés positifs de `Ω` restent vrais, ses négations d'énoncés de cause aussi, les autres énoncés ne changent pas. Dans `s`, la dépendance est finie et sans cycle : toute suite dont chaque terme dépend du suivant est finie, et quand on ne peut plus la prolonger, son dernier terme n'a pas de cause, donc ne dépend de rien (D19) ; ailleurs, rien ne dépend de rien. (b) est vraie. Sous (b_∃) ou (b_s), ajouter de plus au domaine de `s`, pour chaque effet d'un énoncé positif de cause de `Ω` dont aucune cause gardée n'existe dans `s`, un objet nouveau, désigné par aucun nom et sans cause, cause de son existence ; FE, l'irréflexivité et l'absence de cycle sont gardées, `Ω` aussi, et la lecture choisie est vraie.

Repose sur D4 (irréflexivité), D19, T12, T13, FE, §1, B, S, RC.

Conséquences. Admises sous réserve (AO), deux observations qui forment un cycle de cause rendent (b) fausse dans la situation réelle, sous la même réserve. Aucun ensemble d'observations admises n'établit (b) (clause (2 bis) d'AO, lemme du modèle canonique), et un ensemble fini ne la réfute que par un cycle : une régression sans fin ne se constate pas en un nombre fini d'observations.

## T19. Sous « aucune retenue », E1 rend Pr, Pc et (b) incompatibles ensemble

Énoncé. (a) Sous « aucune retenue », Pr, Pc et (b), chacune dans toute situation, ne sont vraies ensemble dans aucun modèle du socle où `∃x (x = x)` est vrai dans la situation désignée. (b) Deux quelconques d'entre elles sont vraies ensemble, avec `∃x (x = x)`, dans un modèle du socle. (c) Sous chacune des trois autres valeurs, Pr, Pc, (b) et `∃x (x = x)` sont vrais ensemble dans un modèle du socle.

Preuve. (a) RC ; c'est l'argument du paragraphe de Pr en M0 ([m0-hypotheses](../m0/hypotheses.md)). `x0` existe dans `s` ; Pr lui donne une cause `u1`, distincte de lui (D4), dont il dépend (D19) ; par Pc, `u1` existe dans `s`, et Pr lui donne une cause `u2` ; et ainsi de suite. La suite `x0, u1, u2, …` ne s'arrête jamais : infinie, on ne peut plus la prolonger, et elle n'a pas de dernier terme, contre (b).
(b) Trois modèles.

- Pr et Pc, sans (b) : une seule situation, de domaine {`a`, `b`} ; `a` est cause de l'existence de `b`, `b` de celle de `a`.
- Pr et (b), sans Pc : une seule situation, de domaine {`x`} ; un objet `a` qui n'appartient à aucun domaine est cause de l'existence de `x` ; rien n'est cause de `a`. La seule suite de dépendance, `x, a`, s'arrête sur `a`, qui ne dépend de rien. Ce témoin ne vaut pas sous (b_∃), `a` n'existant nulle part. Témoin pour (b_∃) : `s` désignée de domaine {`x`}, `s′` de domaine {`a`} ; `a` cause de l'existence de `x` en `s`, `x` de celle de `a` en `s′` ; Pr, (b) et (b_∃) vraies, Pc fausse. Sous (b_s), Pr et (b_s) sont incompatibles avec `∃x (x = x)` (remarque).
- Pc et (b), sans Pr : le modèle 2 de T6, où `a` existe sans cause.

(c) Le modèle 1 de T6 sous « toutes retenues » et « retenues pour les seuls inévitables » : `a`, inévitable et sans cause, a une raison de soi ; Pc et (b) sont vraies, la relation de cause étant vide. Le modèle 2 de T6 sous « retenues pour les seuls contingents » : `a`, contingent, a une raison de soi, et aucun inévitable n'existe.

Repose sur T12, T16, D4, D19, FE, §1, B, S, RC ; modèles 1 et 2 de T6.

**Remarque sur la lecture de (b).** Si les termes d'une suite doivent exister dans la situation considérée, lecture notée (b_s), alors, sous « aucune retenue », Pr et (b_s) sont incompatibles avec `∃x (x = x)` sans Pc : la suite des termes qui existent, partie de `x0`, ou bien ne s'arrête jamais, ou bien s'arrête sur un terme dont aucune cause n'existe et qui dépend pourtant d'une cause (Pr) ; dans les deux cas, (b_s) est fausse. Le deuxième modèle de (b) ci-dessus rend (b) vraie et (b_s) fausse : sous FE, les termes d'une suite infinie existent dans `s` ; (b_s) équivaut à (b) jointe à « toute chose qui existe dans `s` et y dépend d'un être y dépend d'un être qui existe dans `s` ». Entre les deux, la lecture (b_∃) : les termes existent dans au moins une situation possible ; (b_s) entraîne (b_∃), qui entraîne (b). Sous (b_s), L4 et L7 restent démontrés, Pc y donnant déjà l'existence de chaque terme. (b_s) est signalée, sert G : elle garde L7 et, sous « aucune retenue », ferme sans Pc la route de Pr vers ¬G. (b_∃) est signalée, sert G comme (b) ; sous « aucune retenue », Pr, (b_∃) et E1 sont compatibles : elle ne ferme pas cette route. Sous FE et Pc, les trois lectures portent sur les mêmes suites. La lecture suivie est (b), proposée par ses tenants ; elle est consignée par la décision de l'utilisateur (2026-11-07, point 3), (b_∃) et (b_s) restant des variantes signalées.

## T20. Mêmes hypothèses, quatre issues selon la valeur

Énoncé. Soient Pr, Pc et (b), chacune dans toute situation, et Pn_i ; E1 donne `∃x (x = x)` dans la situation réelle `r`.

- Sous « retenues pour les seuls inévitables », Pr, Pc, (b), Pn_i et E1 entraînent G.
- Sous « retenues pour les seuls contingents », Pr seule entraîne ¬G.
- Sous « aucune retenue », Pr, Pc, (b) et E1 se contredisent (T19 (a)), et Pr seule entraîne ¬G.
- Sous « toutes retenues », Pr, Pc, (b), Pn_i et E1 n'entraînent ni G ni ¬G.

Soient Pr_c, Pc et (b), chacune dans toute situation, et Pn_i, avec E1 : G sous « retenues pour les seuls inévitables » et sous « aucune retenue » (L7) ; ni G ni ¬G sous les deux autres valeurs (modèles 1 et 2 de T6).

Preuve. Première ligne : sous cette valeur, Pr équivaut à Pr_c (T16 (a) et (c) : tout inévitable qui existe a une raison) ; L7, avec E1, Pr_c, Pc dans `r` et partout, (b) dans `r` et Pn_i, donne G. Deuxième et troisième : « Pr entraîne ¬G » (prémisse 25) et T19 (a). Quatrième (modèle) : sous « toutes retenues », Pr est démontrée (M0) ; dans les modèles 1 et 2 de T6, Pc et (b) sont vraies, la relation de cause étant vide, et Pn_i aussi, rien ne dépendant de rien ; G est vrai dans le premier, faux dans le second. Seconde liste : sous les deux premières valeurs nommées, L7 ; sous « toutes retenues » et « retenues pour les seuls contingents », le modèle 1 de T6 n'a aucun contingent, Pr_c y est vraie à vide, Pc, (b) et Pn_i aussi, et G est vrai ; dans le modèle 2, Pr_c est vraie par définition, Pc et (b) aussi, Pn_i à vide, E1 aussi, et G est faux.

Repose sur L7, T16, T19, prémisse 25, modèles 1 et 2 de T6, B, S, RC.

Conséquence. Pour qui pose Pr, Pc, (b) et Pn_i, la valeur du paramètre donne G, ¬G, une contradiction ou rien ; pour qui pose Pr_c, Pc, (b) et Pn_i, elle donne G sous « retenues pour les seuls inévitables » et « aucune retenue », rien sous les deux autres. La contrainte 9 n'est pas déclenchée : sans ces hypothèses, aucune valeur ne tranche G (modèles 1 et 2 de T6). Le choix de la valeur n'est pourtant pas neutre pour les tenants de ces hypothèses : le signalement de chaque valeur est repris dans [paramètres](parametres.md).

## T21. Le comment d'une loi ne vient que de lois tirées de l'observation

Énoncé. Soient `F` et `H` deux propriétés distinctes dont le modèle stipule l'extension, et P l'universel `∀y (F(y) → H(y))`. Aucune base d'intelligibilité sans universel (O) ne donne P : toute base qui en donne le comment contient un universel (O).

Preuve. Modèle. Soit M une base sans universel (O) et un modèle du socle où M est vraie dans `s`. Ajouter un objet nouveau `o′` au domaine de `s`, dans l'extension de `F` et hors de celle de `H` en `s`, cause de rien et effet de rien. C'est un modèle du socle : aucun axiome ne porte sur `F` ni sur `H`, et FE, l'irréflexivité et la rigidité valent. Les énoncés atomiques de M et leurs négations gardent leur valeur, aucun nom ne désignant `o′` ; de même un énoncé `□E(t)` sous l'écriture modale ; un universel (R), démontré du seul socle, est vrai dans toute situation de tout modèle du socle (correction) ; les axiomes et définitions écrits dans le langage objet aussi. P est faux dans `s`, par `o′`. Par la correction, P ne se démontre pas de M et du socle.

Repose sur §1 (modèle du socle, sémantique des énoncés atomiques, correction), D18, FE, D4, B, S, RC.

Conséquences.

- Sous les valeurs « aucun universel » et « universels (R) seuls » du paramètre « universels employables dans une base » ([paramètres](parametres.md)), une telle loi n'a pas de comment ; sous « universels (R) et (O) », elle n'en a que par d'autres lois (O), et ce comment est sous hypothèse (D18, statut).
- La question de l'utilisateur, « pourquoi les lois sont-elles ce qu'elles sont ? », porte, dans le vocabulaire du cadre, sur le comment d'un universel : un universel est un énoncé, que quantifier n'engage pas à faire exister (axiome du langage d'analyse, §1), et le pourquoi (D5) ne porte que sur l'existence d'une chose. Sous D18, la réponse passe par une base qui contient un ou plusieurs autres universels (O), ou il n'y en a pas ; T21 ne dit pas que ces universels sont plus généraux. En remontant, trois cas restent ouverts : une régression sans fin (suite ou arbre de lois), un cycle de lois qui se donnent le comment l'une de l'autre, que D18 n'exclut pas, sa clause d'asymétrie ne portant que sur le comment d'un fait singulier, ou une loi sans comment. Aucun n'est démontré. Si une loi était une chose, ce que Abs envisage (« proposition, propriété, ensemble, loi ») et qui relève de M6, le pourquoi de son existence se poserait.

## Vérification mécanique

Script `check_m1.py`, exécuté par le formalisateur (code de sortie 0), versé dans [verifications](../../annexes/verifications.md), section M1, avec les scripts du vérificateur, `check_t16_bases.py`, `count_premises_strict.py`, `check_closure.py`, `check_t16_miroir.py` (T13 étendu, T16 sous l'écriture miroir et sous « aucune retenue » avec le lien) et `check_tie.py`. Il contrôle :

- chaque modèle écrit dans cette note (T14, T15, T17, T18 (c) et (d), T19 (b) et (c), la remarque sur (b_s), T20 sous « toutes retenues ») : c'est un modèle du socle, et les énoncés ont les valeurs annoncées ; les constructions de T17 et T18 sont contrôlées sur un exemple fini ; la construction infinie de T18 (b) ne l'est pas ;
- sur tous les modèles finis du socle d'au plus trois objets et trois situations (1 969 708 modèles) : T16, quant au découpage par classe, la raison d'exister étant codée comme une cause ou une raison de soi retenue ; « Pr entraîne ¬G » sous « retenues pour les seuls contingents » et « aucune retenue » ; T19 (a) ; l'incompatibilité de Pr, (b_s) et `∃x (x = x)` sous « aucune retenue » ; L7 sous ses deux valeurs ; la première ligne de T20. Un contrôle borné n'est pas une preuve : il cherche un contre-exemple et n'en trouve aucun.
- T12, T13 et T16 calculés à partir de D18 par `check_t16_bases.py` (vérificateur).
- `count_premises_strict.py` (vérificateur) compte l'antécédent de chaque contrôle conditionnel, tailles (1, 3) et (3, 3) comprises, et sort en 1 sur un effectif nul : aucun n'est nul.
- Non couvert : modèles infinis, noms au-delà de trois, universels, généralité en `Ω`.
