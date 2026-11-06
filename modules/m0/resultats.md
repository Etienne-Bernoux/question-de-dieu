---
title: Question de Dieu : M0, résultats démontrés
type: knowledge
scope: perso
projet: []
domaine: [philosophie, logique]
tags: [question-de-dieu, modalite, existence, demonstration]
status: draft
updated: 2026-11-06
---

# Résultats démontrés

Tous sont établis sans observation (D15). Niveau : « dérivation », par les règles de R ; « RC », par le raisonnement par cas (R) ; « modèle », par la construction d'un modèle ou d'un contre-modèle (§1). Les hypothèses citées sont dans la section suivante ; aucune n'est admise.

## T0. La double négation ne se dérive pas des règles seules

`¬¬P ⊢ P` ne se dérive pas de A1, A2, A4 et des règles de R autres que RC. Dans la matrice 1 ([verifications](../../annexes/verifications.md)), tous ceux-ci valent sous toute attribution et les règles ne mènent jamais d'un vrai à un non-vrai ; or pour la valeur intermédiaire `P = 1`, `¬P` vaut 0 et `¬¬P` vaut 2, désigné, tandis que `P` ne l'est pas. Sous B et S, `¬¬P ⊢ P` vaut (matrice 0). Conclure qu'une chose existe parce que sa non-existence est absurde repose donc sur B et S, pas sur les seules règles.

## T1. Une définition de la forme « F et E » ne livre qu'un conditionnel

Soit `X(x) ≝ F(x) ∧ E(x)`.

1. `∀x (X(x) ↔ F(x) ∧ E(x))` (définition).
2. `∀x (X(x) → E(x))` : dans tout modèle où 1 est vraie, chaque objet qui a X a F et E, donc E (RC : sens de `∧` et de `→`, S ; de `∀`, §1).

`∃x X(x)` ne suit pas. Contre-modèle : un seul objet `a`, sans F ; 1 et 2 sont vraies, `∃x X(x)` est faux ; par la correction ([cadre](../../socle/cadre/1-notation.md), §1), `∃x X(x)` ne se démontre donc pas de 1. Appliqué à D1 : la définition dit ce qu'il faudrait pour être Dieu, jamais qu'une telle chose existe ; contre-modèle : le modèle 2 de T6.

## T2. « Quelque chose existe » n'est pas une vérité logique

1. Si tout modèle a, dans sa situation désignée, au moins un objet `d`, alors `d = d` (A1), donc `∃x (x = x)` y est vrai (§1, sens de `∃`).
2. Si un domaine vide est admis (§1), `∃x (x = x)` y est faux et `∀x F(x)` vrai ; chaque formule sans nom y reçoit une valeur et une seule. Une formule avec un nom exige que le modèle ait un objet, hors du domaine de cette situation (§1).
3. Par la correction (§1), la logique n'établit donc « quelque chose existe » qu'en excluant par décision le domaine vide, que le §1 admet. E1 est démontré autrement, avec observation ([cadre](../../socle/cadre/5-constat-existence.md), §5).

## L1. `□(P → Q) → (◇P → ◇Q)`

Dérivation.

1. `(P → Q) → (¬Q → ¬P)` (contraposition)
2. `□((P → Q) → (¬Q → ¬P))` (N)
3. `□(P → Q) → □(¬Q → ¬P)` (K, MP)
4. `□(¬Q → ¬P) → (□¬Q → □¬P)` (K)
5. `□(P → Q) → (□¬Q → □¬P)` (3, 4, enchaînement)
6. `(□¬Q → □¬P) → (¬□¬P → ¬□¬Q)` (contraposition), soit `(□¬Q → □¬P) → (◇P → ◇Q)` (définition de `◇`, §1)
7. `□(P → Q) → (◇P → ◇Q)` (5, 6, enchaînement)

## L2. `◇¬G → ¬□G`

Dérivation.

1. `G → ¬¬G` (A4)
2. `□G → □¬¬G` (N appliquée à A4, K, MP)
3. `¬□¬¬G → ¬□G` (2, contraposition, MP), soit `◇¬G → ¬□G` (définition de `◇`, §1)

## L5. `P → ◇P`

Dérivation.

1. `□¬P → ¬P` (T, pour `¬P`)
2. `¬¬P → ¬□¬P` (1, contraposition, MP)
3. `¬¬P → ◇P` (2, définition de `◇`, §1)
4. `P → ¬¬P` (A4)
5. `P → ◇P` (4, 3, enchaînement)

Repose sur T, A4, R, §1.

## L3. P1 découle de D2

P1 : `□(G → □G)`, « s'il existe un être nécessaire, il est nécessaire qu'il en existe un ». RC.

1. Soit `s` une situation possible où `G` est vrai, et `x` un être nécessaire qui existe en `s` (D1).
2. `x` est inévitable : il existe dans toute situation possible (D20), et par U cet ensemble ne dépend pas de `s`.
3. Dans toute situation possible, `x` ne dépend de rien (D2, D19).
4. Dans toute situation possible `s′`, le même `x` existe (2, identité entre situations, §1) et est nécessaire (2, 3, D2) : `G` est vrai en `s′` (D1). Donc `□G` est vrai en `s` (§1).
5. Le cas où `G` est faux en `s` rend `G → □G` vrai en `s` (S). `G → □G` est donc vrai dans toute situation possible : P1 (§1).

Repose sur D1, D2, D19, D20, U, §1 (identité entre situations), B, S, RC. P1 découle d'une définition et vaut pour les deux camps : la refuser, c'est refuser D2 telle qu'elle est écrite, l'identité entre situations ou U.

## L4. Un être inévitable mène à un être nécessaire, sous Pn_i, Pc et (b_L4)

Énoncé : s'il existe un être inévitable (D20), alors `G`. RC, avec A3 pour les cas. Pn_i, Pc et (b_L4) sont des hypothèses signalées : elles servent la conclusion `G`.

1. Soit `x` qui existe dans toute situation possible.
2. Premier cas : dans toute situation possible, `x` ne dépend de rien (D19). Alors `x` est nécessaire (D2) : `G` (D1).
3. Second cas, négation du premier : dans une situation `s`, `x` dépend d'un être. Par (b_L4), il existe dans `s` une suite finie `x = z0, z1, …, zn` où chaque `zi` dépend de `zi+1` dans `s`, et où `zn` ne dépend de rien dans `s`.
4. Chaque `zi` est inévitable, par récurrence sur `i` : `z0` l'est (1) ; si `zi` l'est, il dépend de `zi+1` dans `s`, donc dans toute situation possible (Pn_i) ; dans chacune, `zi+1` est cause ou raison de l'existence de `zi` (D19), donc y existe (Pc) : `zi+1` est inévitable (D20).
5. `zn` est inévitable (4) et ne dépend de rien dans `s` ; par Pn_i, il ne dépend de rien dans aucune situation possible : un `y` dont `zn` dépendrait dans `s′` y existerait (Pc), et `zn` en dépendrait dans `s` ; `zn` est nécessaire (D2) : `G` (D1).

Repose sur Pn_i, Pc, (b_L4) (Pn_i sous la portée écrite au paragraphe de Pn_i) ; D1, D2, D19, D20, §1 (identité entre situations), A3, B, S, RC. Le second cas range aussi l'inévitable qui ne dépend de quelque chose que dans certaines situations, inévitable dépendant au sens de D20 ; sous Pn_i, cette classe est vide. Une suite construite pas à pas pourrait suivre un cycle de dépendance, que D4 et D19 n'excluent pas : (b_L4) donne directement une suite qui aboutit.

Lue sur le seul domaine de la situation d'évaluation, Pn_i ne suffit pas : `s` désignée de domaine {`z`}, `s′` de domaine {`z`, `w`}, `w` cause de l'existence de `z` en `s′` ; Pn_i ainsi lue, FE, Pc et (b_L4) sont vraies, `z` est inévitable et non nécessaire, `G` est faux. Une variante plus forte, sur tous les objets du modèle, dispense de Pc à l'étape 5.

Sans Pn_i, l'étape 4 échoue : contre-modèle à deux situations `s1`, `s2`, où `x` existe dans les deux, causé dans `s1` par `a` qui n'existe que dans `s1`, et dans `s2` par `b` qui n'existe que dans `s2` ; rien n'est cause de `a` ni de `b`, qui ne dépendent donc de rien (T12 : la raison de l'existence d'une chose en un autre être est sa cause) ; `G` est faux dans les deux situations. Chacun de `a` et `b` peut manquer, mais jamais les deux ensemble : de « `a` peut ne pas exister » et « `b` peut ne pas exister », on ne tire pas « il est possible que ni l'un ni l'autre n'existe » (glissement de quantificateur). L4 ne prouve pas `G` : E1 seul ne donne qu'un être qui existe dans la situation réelle, pas un être inévitable. Trois routes signalées en donneraient un : Nec, avec E1 ; (c′_tot), avec ¬Sv (L6) ; Pr_c, avec Pc, (b) et E1 (L7).

## L6. (c′_tot) et ¬Sv donnent un être inévitable

RC. Par (c′_tot), il existe une situation possible `s` où n'existe aucun objet contingent. Par ¬Sv, `s` n'est pas vide : une chose y existe, qui n'est pas contingente, donc inévitable (D3, D20 ; B, S). Repose sur (c′_tot), ¬Sv, D3, D20, B, S, RC. Avec L4, (c′_tot) et ¬Sv donnent `G` sous Pn_i, Pc et (b_L4). (c′) n'entraîne (c′_tot) que si sa portée comprend l'ensemble de tous les objets contingents, infini compris. Lue sur les ensembles finis, ou sur les contingents de la seule situation d'évaluation, (c′) et ¬Sv ne donnent aucun inévitable : des situations `s_n`, `n` entier, de domaine {`c_k` : `k ≥ n`}, sans cause, rendent vraies (c′) sur les ensembles finis et ¬Sv, sans inévitable ; `s0` désignée de domaine {`a`} et `s1` de domaine {`b`}, sans cause, rendent vraies (c′) sur les contingents de la situation d'évaluation et ¬Sv, sans inévitable. La portée de (c′) reste à définir (M2).

## L7. Pr_c, Pc et (b), avec E1, donnent un être inévitable

Énoncé : sous « aucune retenue » ou « retenues pour les seuls inévitables », valeurs sous lesquelles Pr_c équivaut à « tout contingent qui existe a une cause » (T12), E1, Pr_c, Pc dans la situation réelle et (b) dans la situation réelle entraînent qu'un être inévitable existe ; avec, de plus, Pc dans toute situation et Pn_i, `G`. Pr_c, Pc, (b) et Pn_i sont des hypothèses signalées : elles servent la conclusion. Statut : DÉMONTRÉ SOUS HYPOTHÈSES, établi avec observation (D16). RC.

1. Par E1, une chose `x0` existe dans la situation réelle `r`. Si elle est inévitable, la conclusion est atteinte.
2. Sinon, elle est contingente (D3) ; par Pr_c et T12, elle a dans `r` une cause `u`, distincte d'elle (D4), dont elle dépend (D19), et qui existe dans `r` (Pc).
3. Prolonger dans `r` la suite `x0, u, …` tant que son dernier terme dépend de quelque chose ; chaque terme ajouté existe dans `r` (Pc). Par (b), la suite s'arrête sur un être `z` qui ne dépend de rien dans `r` et y existe.
4. Si `z` était contingent, Pr_c lui donnerait dans `r` une cause distincte de lui (D4), dont il dépendrait (D19) : `z` est inévitable (D3, D20).
5. Avec Pc dans toute situation et Pn_i : si `z` dépendait d'un `y` dans une situation `s′`, `y` existerait dans `s′` (Pc), et `z` dépendrait de `y` dans `r` (Pn_i), contre 3 ; `z` ne dépend de rien dans aucune situation, il est nécessaire (D2) : `G` (D1).

Repose sur E1, Pr_c, Pc, (b), T12, FE, D3, D4, D19, D20, A3, B, S, RC ; pour `G`, Pn_i, D1, D2. Contre-modèles : les trois premiers sont des modèles du socle ; le dernier, où l'irréflexivité est fausse, est le témoin de son refus (§1), non un modèle du socle. Sans (b) : `s1` désignée de domaine {`a`, `b`}, chacun cause de l'existence de l'autre, `s2` vide ; Pr_c, Pc et E1 sont vrais, aucun être n'est inévitable. Sous « toutes retenues » ou « retenues pour les seuls contingents » : le modèle 2 de T6 rend vrais Pr_c, Pc, (b) et E1 sans inévitable. Pc dans la seule situation réelle ne suffit pas à l'étape 5 : `r` désignée et `s′`, de domaine {`z`} chacune, un objet `y` hors de tout domaine, cause de l'existence de `z` en `s′` ; Pc vaut en `r` et non en `s′`, Pn_i, Pr_c, (b) et E1 sont vrais, `z` est inévitable et dépend de `y` en `s′`, `G` est faux. L'irréflexivité de la cause (D4) sert aux étapes 2 et 4 : sans elle, `s1` désignée de domaine {`a`}, `Cause(a, a)`, `s2` vide, rendrait vrais Pr_c, Pc, (b) et E1 sans inévitable.

## T3. La question se ramène à une prémisse de possibilité

P1 est démontrée (L3).

1. `G → □G` (P1, T, MP)
2. `¬□G → ¬G` (1, contraposition, MP)
3. `◇¬G → ¬G` (L2, 2, enchaînement) : **T3a**
4. `◇G → ◇□G` (P1, L1 avec Q := `□G`, MP)
5. `◇G → □G` (4, AM, enchaînement)
6. `◇G → G` (5, T, enchaînement) : **T3b**
7. `¬G → ¬◇G` (6, contraposition, MP)
8. `◇¬G → ¬◇G` (3, 7, enchaînement) : **T3c**
9. `G → ◇G` (L5)
10. `¬G → ◇¬G` (L5)

**T3d** : `◇G` et `G` s'entraînent (lignes 6 et 9) ; `◇¬G` et `¬G` s'entraînent (lignes 3 et 10). Écrit en paires de conditionnels, il ne demande que R ; l'écrire avec `↔` demande RC. De plus, `¬G`, `◇¬G` et `¬◇G` s'entraînent (lignes 10, 8, et la contraposée de 9) ; seules `¬G → ◇¬G` et `¬◇G → ¬G` valent sans P1 parmi les prémisses (L5).

| Résultat | Énoncé | Repose sur |
|---|---|---|
| T3a | « Dieu peut ne pas exister » entraîne « Dieu n'existe pas » | P1 (L3) ; N, K, T, A4, R, §1 ; ni A3 ni U hors de L3 |
| T3b | « Dieu peut exister » entraîne « Dieu existe » | P1 (L3) ; N, K, T, U (via AM), R, §1, S, B ; ni A3 ni A4 |
| T3c | « Dieu peut ne pas exister » entraîne « Dieu ne peut pas exister » | P1 (L3) ; N, K, T, A4, U (via AM), R, §1, S, B |
| T3d | « Dieu peut exister » et « Dieu existe » s'entraînent ; de même « Dieu peut ne pas exister » et « Dieu n'existe pas » | P1 (L3) ; N, K, T, U (via AM), A4, R, §1, S, B |
| T3e | « Dieu est nécessaire ou Dieu est impossible » : `□G ∨ □¬G` | P1 (L3 : D1, D2, D19, D20, U, §1 identité) ; L1 (N, K), AM, §1, B, S, RC |

**T3e**, RC. Par B, `◇G` est vrai ou faux. S'il est vrai, `□G` (ligne 5). S'il est faux, `¬◇G`, soit `¬¬□¬G`, donc `□¬G` (B, S). Dans les deux cas, `□G ∨ □¬G` (S). Le socle établit donc sans observation que `G` est nécessaire ou impossible, sans dire lequel.

Symétrie : échanger `G` et `¬G` envoie T3b sur T3a littéralement, T3a sur T3b et T3c sur sa contraposée seulement à `¬¬G ≡ G` près (B, S). Les énoncés sont symétriques ; leurs bases ne le sont pas : T3a repose sur A4, T3b sur U.

## T7. P1 et « non (Dieu peut exister et Dieu peut ne pas exister) » s'entraînent

`P1` et `¬(◇G ∧ ◇¬G)` s'entraînent. RC.

1. Sens direct : si P1 et `◇G` sont vrais, soit `s` une situation où `G` est vrai ; P1 y donne `□G` (§1, S), donc `G` est vrai dans toute situation possible (U), et `◇¬G` est faux (§1). Donc `¬(◇G ∧ ◇¬G)`.
2. Sens réciproque : si P1 est fausse, il existe une situation `s` où `G` est vrai et `□G` faux (§1, S), donc une situation `s′` où `G` est faux ; par U, `s` et `s′` sont possibles de partout : `◇G` et `◇¬G`. Par contraposition, `¬(◇G ∧ ◇¬G)` donne P1 (B, S).

Repose sur B, S, §1, U, RC. T7 vaut pour toute lettre à la place de `G` ; il ne dépend ni de D19, ni de l'identité entre situations, ni de la situation réelle. Sans U, il tombe entier ([cadre](../../socle/cadre/index.md), U).

P1 étant démontrée (L3), `◇G ∧ ◇¬G` est faux dans tout modèle.

## T5. La lecture matérielle d'une dépendance ne distingue rien

Soit `Dép(x) ≝ ¬E(x) → ¬L`, où L est une vérité logique ; par N, L est vraie dans toute situation. Calcul sous B et S (RC) :

1. Si `E(x)` est vrai, `¬E(x)` est faux, donc `Dép(x)` est vrai.
2. Si `E(x)` est faux, `Dép(x)` exigerait `¬L`, qui est faux, donc `Dép(x)` est faux.
3. Dans tous les cas, `Dép(x)` a la valeur de `E(x)` : tout ce qui existe « dépendrait ».

## T8. La lecture stricte d'une dépendance se ramène à l'inévitabilité

`□(¬E(x) → ¬L)` et `□E(x)` s'entraînent. RC.

1. Si `□(¬E(x) → ¬L)`, dans toute situation `¬E(x) → ¬L` est vrai et L aussi (N) ; `¬E(x)` y est donc faux (S), `E(x)` vrai (B) : `□E(x)` (§1).
2. Si `□E(x)`, dans toute situation `¬E(x)` est faux, donc `¬E(x) → ¬L` vrai (S) : `□(¬E(x) → ¬L)`.

Repose sur B, S, §1, N, RC ; `x` est le même objet dans toutes les situations (§1), et `E(x)` en `s` signifie que `x` appartient au domaine de `s`. T8 ne distingue pas un être nécessaire d'un inévitable dépendant : sous la lecture stricte, H1 se ramène à l'existence d'un inévitable (M6). H1 exige donc une relation autre que la lecture matérielle.

## T6. Le principe « tout concevable est possible » mène à une contradiction

RC, avec deux modèles.

1. `G` est concevable : une seule situation, désignée, un seul objet `a`, qui y existe et ne dépend de rien. `a` existe dans toute situation possible et, dans chacune, ne dépend de rien : il est nécessaire. Le socle et E1 y sont vrais.
2. `¬G` est concevable : deux situations `s1` et `s2`, `s1` désignée ; un seul objet `a`, qui existe en `s1` et pas en `s2`. `a` n'existe pas dans toute situation possible : il n'est pas nécessaire, et rien d'autre n'existe. Le socle est vrai dans ce modèle ; E1 est vrai en `s1`.
3. Si tout concevable était possible : `◇G` (de 1) et `◇¬G` (de 2).
4. T3c : de `◇¬G`, `¬◇G`. On affirme `◇G` et `¬◇G` : A et non-A.

La relation de cause est vide dans les deux modèles ; dans le modèle 1, aucune chose distincte de `a` n'existe ni n'est nommée, si bien que `a` ne dépend de rien (D19), quelle que soit la valeur des paramètres de D18. Ce sont des modèles du socle : FE et l'irréflexivité de la cause y valent. Repose sur P1 (L3), T3c, D1, D2, D17, D19, D20, A2, A4, N, K, T, U, R, B. Conséquence : aucun camp ne peut fonder sa prémisse de possibilité sur la seule concevabilité.

## T9. Le sens logique de « nécessaire » est vide

Aucune chose n'est nécessaire au sens logique, tant que la base de concevabilité (le socle et `∃x (x = x)`, D17) n'entraîne `E(a)` pour aucun nom `a`. Une chose est jugée par le nom que lui donne cette base. Modèle.

1. Soit `t` un terme absent de la base. Prendre le modèle 2 de T6 et y ajouter un objet, désigné par `t`, qui n'appartient au domaine d'aucune situation (§1 le permet).
2. La base y reste vraie : aucun de ses énoncés ne contient `t` (1). `∃x (x = x)` est vrai en `s1`, désignée, où `a` existe.
3. `¬E(t)` est vrai en `s1` : `¬E(t)` est concevable, la non-existence de ce que désigne `t` n'est pas contradictoire.
4. Une chose que la base ne nomme pas peut recevoir un nom nouveau, donc absent de la base ([cadre](../../socle/cadre/1-notation.md), §1, « Nommer ») : par 1 à 3, sa non-existence est concevable.
5. Une chose que la base nomme `a` : la base n'entraîne pas `E(a)` (condition), donc un modèle de la base rend `E(a)` faux, et `¬E(a)` est concevable (D17).
6. Aucune chose n'est donc nécessaire au sens logique.

La condition porte sur ce que la base entraîne, non sur ce qu'elle affirme : `∀x (x = a)`, joint à `∃x (x = x)`, entraînerait `E(a)` sans l'affirmer. Elle est remplie : A1, D8 et FE sont des schémas, et aucun autre axiome n'entraîne l'existence d'une chose nommée (le complément et Ac ne s'évaluent pas dans un modèle, et ne donnent l'existence que d'une chose observée ou d'un enregistrement fait, qu'aucun énoncé du socle ne donne). Prendre ce sens trancherait `¬G` par définition. Si au contraire tout nom désignait un objet de chaque domaine, `∃x (x = t)` serait une vérité logique et toute chose nommée serait nécessaire en ce sens, qui ne distinguerait plus rien. Repose sur §1 (modèle du socle, identité, noms, règle « Nommer »), D8, D17 ; la preuve vaut aussi sous la négation de l'axiome du langage d'analyse ([cadre](../../socle/cadre/1-notation.md), §1). Ce résultat est le motif qui écarte le sens logique par la règle de symétrie (contrainte 9 du [protocole](../../methode/protocole.md) ; [cadre](../../socle/cadre/4-definitions.md), D2) ; il ne le réfute pas.

## T10. Une situation vide possible entraîne `□¬G`

Si une situation possible a un domaine vide, `□¬G`, sans P1. RC.

1. Soit `s0` une situation possible dont le domaine est vide : rien n'y existe (D8).
2. Par U, `s0` compte parmi les situations possibles de partout : aucun être n'existe dans toute situation possible, aucun n'est inévitable (D20), aucun n'est nécessaire (D2).
3. Dans toute situation possible, `G` est donc faux : `□¬G` (§1) ; par T, `¬G`.

Repose sur U, D1, D2, D8, D20, T, B, S, §1, RC ; ni l'identité entre situations ni D19. Une situation vide dans un modèle de concevabilité (§1) n'affirme rien de tel : elle ne témoigne que de ce que `¬◇G` est concevable.

## T11. Ce qui donne l'existence d'une chose nommée

Soit M une base d'intelligibilité dans `s` (D18). Une **chaîne d'identités** de `t` à `x` est une suite d'énoncés `t = u1`, `u1 = u2`, …, `un = x` de M, chacun pris dans un sens ou dans l'autre ; elle est vide quand `t` est `x`. Énoncé : `E(x)` se démontre de M et du socle si et seulement si M contient, pour un nom `t`, une chaîne d'identités de `t` à `x` et l'un des énoncés `E(t)` ou `Cause(u, t)`. RC pour le sens « si », modèle pour le sens « seulement si ».

**Sens « si »** (RC). Si M contient `E(t)` et la chaîne, `t` et `x` désignent dans `s` le même objet (§1, sens de `=`), qui appartient au domaine de `s` (D8) : `E(x)` est vrai dans `s`. Si M contient `Cause(u, t)`, FE donne `E(t)` dans `s`, et l'on conclut de même.

**Sens « seulement si »** (modèle). Supposons que, pour aucun nom `t` relié à `x` par une chaîne d'identités de M, M ne contienne `E(t)` ni un énoncé `Cause(u, t)`. Soit un modèle où le socle et M sont vrais dans `s`, `o` l'objet que désigne `x`, et N l'ensemble des noms reliés à `x` par une chaîne d'identités de M, `x` compris.

1. Ajouter au modèle un objet nouveau `o*`, qui n'appartient au domaine d'aucune situation (§1 le permet), et faire désigner `o*`, dans toute situation, par chaque nom de N ; les autres noms gardent leur objet.
2. Dans toute situation, donner à `o*` les extensions de `o`, à chaque place de chaque propriété et de la relation de cause : un n-uplet où figure `o*` appartient à une extension exactement quand le n-uplet où `o*` est remplacé par `o` y appartient, sauf à la place de l'effet de la relation de cause, où `o*` ne figure jamais.
3. Le modèle reste un modèle du socle : FE vaut, `o*` n'étant l'effet de rien et les autres couples de la relation de cause étant inchangés ; l'irréflexivité aussi, aucun couple `(o*, o*)` n'étant cause, `o*` n'étant jamais à la place de l'effet ; chaque nom désigne le même objet dans toute situation (identité entre situations) ; les définitions se calculent comme avant.
4. Les énoncés de M gardent leur valeur dans `s`. (a) Un universel clos sans nom ne porte que sur les objets des domaines (§1) ; ni les domaines ni les extensions entre leurs objets ne changent, et `□`, `◇` parcourent les mêmes situations. (b) Un énoncé atomique, ou sa négation, dont aucun nom n'est dans N ne change pas. (c) Pour `t` dans N : `F(t)`, et `Cause(t, b)` avec `b` hors de N, gardent leur valeur (2) ; `E(t)` et `Cause(u, t)` ne sont pas dans M (hypothèse), et leurs négations sont vraies, `o*` n'étant ni dans un domaine ni l'effet de rien ; une identité entre deux noms de N est vraie, les deux désignant `o*`, et sa négation n'est pas dans M, qui est vraie dans `s` et les relie par une chaîne ; une identité `t = b` avec `b` hors de N n'est pas dans M (sinon `b` serait dans N), et sa négation est vraie, `o*` étant distinct de tout autre objet. (d) Les définitions de M et ses axiomes écrits dans le langage objet sont vrais dans tout modèle du socle. Un axiome de M qui ne s'évalue pas dans un modèle (cadre, §1) ne donne à M aucun énoncé du langage objet que les autres parties de M et le socle ne donnent déjà : le complément, AO et Ac n'y ajoutent rien ([cadre](../../socle/cadre/4-definitions.md), D18, énoncé atomique et son « Effet »), « Nommer », F1 et le statut des quantifications du langage d'analyse ne portent que sur les noms et le langage, et la caractérisation de la situation réelle ne donne que T, vrai dans tout modèle. On le retire de M sans changer ce que M démontre, ni ses énoncés `E(t)`, `Cause(u, t)` et ses identités.
5. `E(x)` est faux dans `s`, `x` désignant `o*`, hors du domaine de `s`. Une démonstration de `E(x)` à partir de M et du socle n'a pas à employer le complément, AO ni Ac (étape 4 (d) ; [cadre](../../socle/cadre/4-definitions.md), D18, énoncé atomique et son « Effet ») ; la correction ([cadre](../../socle/cadre/1-notation.md), §1) couvre celle qui s'en passe : `E(x)` ne se démontre donc pas de M et du socle.

Repose sur FE, §1 (modèles du socle, sémantique des énoncés atomiques, noms hors domaine, extensions, identité entre situations, correction), énoncé atomique (D18 : prédicats admis), D8, D18, B, S, RC. Sans FE, l'étape 2 se fait sans exception à la place de l'effet, et seules les bases qui contiennent `E(t)` et une chaîne donnent `E(x)` ([cadre](../../socle/cadre/index.md), FE).

## T12. Les bases minimales pour l'existence d'une chose

Énoncé : dans `s`, les bases minimales pour `E(x)` (D18 : aucune partie stricte ne suffit) sont exactement les ensembles `{A} ∪ C`, où C est une chaîne d'identités de `t` à `x` dont aucune partie stricte ne relie `t` à `x`, et A est `E(t)`, avec `t` distinct de `x` (D18 excluant `E(x)` de la base), ou `Cause(u, t)`. RC.

1. Un tel ensemble suffit (T11, sens « si »). Aucune de ses parties strictes ne suffit : sans A, il ne reste que des identités, qui ne contiennent ni `E` ni `Cause` (T11) ; sans l'une des identités de C, plus aucune partie de C ne relie `t` à `x`, et `t` est le seul nom auquel A s'applique (T11).
2. Une base M qui suffit contient un tel ensemble (T11, sens « seulement si », en prenant pour C une partie minimale de la chaîne), qui suffit déjà ; si M est minimale, elle lui est égale.

Conséquences, toutes dans `s` :

- (a) Aucun universel n'entre dans une base minimale pour `E(x)` : un universel donne le comment de ce qu'une chose soit ainsi, jamais le pourquoi de son existence.
- (b) Les bases `{E(t)} ∪ C` entraînent `E(x)` par la seule identité (A1, D8) : ce sont les raisons de soi, admises selon le paramètre « raisons de soi retenues » (D18). Leurs énoncés non axiomatiques ne portent que sur l'objet de `x` : les noms de la chaîne le désignent tous, ses identités étant vraies dans `s`.
- (c) Les bases `{Cause(u, t)} ∪ C` n'entraînent `E(x)` qu'avec FE : elles valent quel que soit le paramètre, et portent sur l'objet de `u`, distinct de celui de `x`, une chose étant cause d'autre chose (D4).
- (d) L'existence de x a sa raison en un être y distinct de x (pont de D18) si et seulement si y est cause de l'existence de x. Si y l'est, des noms (« Nommer ») donnent la base `{Cause(y, x)}`, vraie dans `s`, sans `E(x)`, minimale (1), qui n'entraîne pas `E(x)` par la seule identité et porte sur y. Réciproquement, une base minimale qui porte sur un y distinct de x est de la forme (c), et y est l'objet de `u`, cause de l'existence de l'objet de `t`, qui est celui de x.
- (e) La part « raison » de D19 a donc la même extension que sa part « cause », et D2 se règle par la seule cause. La part « raison » de Pc équivaut à sa part « cause » pour un y distinct de x ; pour une raison de soi, elle est démontrée : la base est vraie dans `s` et entraîne `E(x)`, donc x existe dans `s`.

Repose sur T11, FE, D4, D18, D19, §1 (sémantique des énoncés atomiques, identité entre situations, « Nommer »), énoncé atomique (D18 : prédicats admis), B, S, RC. Condition d'usage : T12 vaut tant que le socle ne contient, hors `E` et FE, aucun axiome qui fasse entraîner l'existence par un énoncé atomique d'une base ; à revérifier à l'admission de tout axiome de ce type. Ac donne l'existence à tout enregistrement fait, et la condition reste remplie parce qu'aucun prédicat d'un énoncé atomique d'une base ne porte sur une observation ou un enregistrement comme tel ([cadre](../../socle/cadre/4-definitions.md), D18, énoncé atomique). L'inclusion de la raison en un autre être dans la cause vient de D18 et de cette sémantique ; FE donne l'inclusion inverse.
