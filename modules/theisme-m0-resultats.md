---
title: Examen du théisme — M0, ce que le socle établit sans observation
type: knowledge
scope: perso
projet: []
domaine: [philosophie, logique]
tags: [theisme, modalite, existence, demonstration]
status: draft
updated: 2026-11-05
---

# M0 — Ce que le socle établit sans observation (D15)

Question : que peut établir le socle (axiomes, définitions, termes premiers : [[theisme-cadre]], §4), sans observation, sur l'existence de quoi que ce soit ? Débat et verdicts : [[theisme-m0-debat]].

Le socle n'établit ni G ni ¬G : les modèles 1 et 2 de T6 le rendent vrai, E1 compris, l'un avec G, l'autre avec ¬G. « Dieu » s'entend au sens de D1, un être nécessaire, rien de plus (règle de lecture du cadre). Le socle établit que :

- une définition de la forme « F et E » ne produit qu'un « si... alors » (T1 ; principes logiques, §2) ;
- « quelque chose existe » n'est pas une vérité logique (T2 ; principes logiques, §2) ;
- s'il existe un être nécessaire, il est nécessaire qu'il en existe un (P1, L3) : cela découle de D2 ;
- la question se ramène donc à une prémisse de possibilité, qui pèse autant que la conclusion (T3d), et `G` est nécessaire ou impossible (T3e) ; T3 emploie de plus les principes modaux (§3) ;
- la raison de l'existence d'une chose en un autre être est sa cause, et aucune loi n'en donne le pourquoi (T11, T12, sous FE).

T5 écarte la lecture matérielle de la dépendance ; sa lecture stricte se ramène à l'inévitabilité (T8). Le sens logique de « nécessaire » est vide (T9). La suite doit instruire `◇G` et `◇¬G` par d'autres voies que le socle seul.

## Résultats démontrés

Tous sont établis sans observation (D15). Niveau : « dérivation », par les règles de R ; « RC », par le raisonnement par cas (R) ; « modèle », par la construction d'un modèle ou d'un contre-modèle (§1). Les hypothèses citées sont dans la section suivante ; aucune n'est admise.

### T0. La double négation ne se dérive pas des règles seules

`¬¬P ⊢ P` ne se dérive pas de A1, A2, A4 et des règles de R autres que RC. Dans la matrice 1 ([[theisme-verifications]]), tous ceux-ci valent sous toute attribution et les règles ne mènent jamais d'un vrai à un non-vrai ; or pour la valeur intermédiaire `P = 1`, `¬P` vaut 0 et `¬¬P` vaut 2, désigné, tandis que `P` ne l'est pas. Sous B et S, `¬¬P ⊢ P` vaut (matrice 0). Conclure qu'une chose existe parce que sa non-existence est absurde repose donc sur B et S, pas sur les seules règles.

### T1. Une définition de la forme « F et E » ne livre qu'un conditionnel

Soit `X(x) ≝ F(x) ∧ E(x)`.

1. `∀x (X(x) ↔ F(x) ∧ E(x))` (définition).
2. `∀x (X(x) → E(x))` : dans tout modèle où 1 est vraie, chaque objet qui a X a F et E, donc E (RC : sens de `∧` et de `→`, S ; de `∀`, §1).

`∃x X(x)` ne suit pas. Contre-modèle : un seul objet `a`, sans F ; 1 et 2 sont vraies, `∃x X(x)` est faux ; par la correction ([[theisme-cadre]], §1), `∃x X(x)` ne se démontre donc pas de 1. Appliqué à D1 : la définition dit ce qu'il faudrait pour être Dieu, jamais qu'une telle chose existe ; contre-modèle : le modèle 2 de T6.

### T2. « Quelque chose existe » n'est pas une vérité logique

1. Si tout modèle a, dans sa situation désignée, au moins un objet `d`, alors `d = d` (A1), donc `∃x (x = x)` y est vrai (§1, sens de `∃`).
2. Si un domaine vide est admis (§1), `∃x (x = x)` y est faux et `∀x F(x)` vrai ; chaque formule sans nom y reçoit une valeur et une seule. Une formule avec un nom exige que le modèle ait un objet, hors du domaine de cette situation (§1).
3. Par la correction (§1), la logique n'établit donc « quelque chose existe » qu'en excluant par décision le domaine vide, que le §1 admet. E1 est démontré autrement, avec observation ([[theisme-cadre]], §5).

### L1. `□(P → Q) → (◇P → ◇Q)`

Dérivation.

1. `(P → Q) → (¬Q → ¬P)` (contraposition)
2. `□((P → Q) → (¬Q → ¬P))` (N)
3. `□(P → Q) → □(¬Q → ¬P)` (K, MP)
4. `□(¬Q → ¬P) → (□¬Q → □¬P)` (K)
5. `□(P → Q) → (□¬Q → □¬P)` (3, 4, enchaînement)
6. `(□¬Q → □¬P) → (¬□¬P → ¬□¬Q)` (contraposition), soit `(□¬Q → □¬P) → (◇P → ◇Q)` (définition de `◇`, §1)
7. `□(P → Q) → (◇P → ◇Q)` (5, 6, enchaînement)

### L2. `◇¬G → ¬□G`

Dérivation.

1. `G → ¬¬G` (A4)
2. `□G → □¬¬G` (N appliquée à A4, K, MP)
3. `¬□¬¬G → ¬□G` (2, contraposition, MP), soit `◇¬G → ¬□G` (définition de `◇`, §1)

### L5. `P → ◇P`

Dérivation.

1. `□¬P → ¬P` (T, pour `¬P`)
2. `¬¬P → ¬□¬P` (1, contraposition, MP)
3. `¬¬P → ◇P` (2, définition de `◇`, §1)
4. `P → ¬¬P` (A4)
5. `P → ◇P` (4, 3, enchaînement)

Repose sur T, A4, R, §1.

### L3. P1 découle de D2

P1 : `□(G → □G)`, « s'il existe un être nécessaire, il est nécessaire qu'il en existe un ». RC.

1. Soit `s` une situation possible où `G` est vrai, et `x` un être nécessaire qui existe en `s` (D1).
2. `x` est inévitable : il existe dans toute situation possible (D20), et par U cet ensemble ne dépend pas de `s`.
3. Dans toute situation possible, `x` ne dépend de rien (D2, D19).
4. Dans toute situation possible `s′`, le même `x` existe (2, identité entre situations, §1) et est nécessaire (2, 3, D2) : `G` est vrai en `s′` (D1). Donc `□G` est vrai en `s` (§1).
5. Le cas où `G` est faux en `s` rend `G → □G` vrai en `s` (S). `G → □G` est donc vrai dans toute situation possible : P1 (§1).

Repose sur D1, D2, D19, D20, U, §1 (identité entre situations), B, S, RC. P1 découle d'une définition et vaut pour les deux camps : la refuser, c'est refuser D2 telle qu'elle est écrite, l'identité entre situations ou U.

### L4. Un être inévitable mène à un être nécessaire, sous Pn_i, Pc et (b_L4)

Énoncé : s'il existe un être inévitable (D20), alors `G`. RC, avec A3 pour les cas. Pn_i, Pc et (b_L4) sont des hypothèses signalées : elles servent la conclusion `G`.

1. Soit `x` qui existe dans toute situation possible.
2. Premier cas : dans toute situation possible, `x` ne dépend de rien (D19). Alors `x` est nécessaire (D2) : `G` (D1).
3. Second cas, négation du premier : dans une situation `s`, `x` dépend d'un être. Par (b_L4), il existe dans `s` une suite finie `x = z0, z1, …, zn` où chaque `zi` dépend de `zi+1` dans `s`, et où `zn` ne dépend de rien dans `s`.
4. Chaque `zi` est inévitable, par récurrence sur `i` : `z0` l'est (1) ; si `zi` l'est, il dépend de `zi+1` dans `s`, donc dans toute situation possible (Pn_i) ; dans chacune, `zi+1` est cause ou raison de l'existence de `zi` (D19), donc y existe (Pc) : `zi+1` est inévitable (D20).
5. `zn` est inévitable (4) et ne dépend de rien dans `s` ; par Pn_i, il ne dépend de rien dans aucune situation possible : un `y` dont `zn` dépendrait dans `s′` y existerait (Pc), et `zn` en dépendrait dans `s` ; `zn` est nécessaire (D2) : `G` (D1).

Repose sur Pn_i, Pc, (b_L4) (Pn_i sous la portée écrite au paragraphe de Pn_i) ; D1, D2, D19, D20, §1 (identité entre situations), A3, B, S, RC. Le second cas range aussi l'inévitable qui ne dépend de quelque chose que dans certaines situations, inévitable dépendant au sens de D20 ; sous Pn_i, cette classe est vide. Une suite construite pas à pas pourrait suivre un cycle de dépendance, que D4 et D19 n'excluent pas : (b_L4) donne directement une suite qui aboutit.

Lue sur le seul domaine de la situation d'évaluation, Pn_i ne suffit pas : `s` désignée de domaine {`z`}, `s′` de domaine {`z`, `w`}, `w` cause de l'existence de `z` en `s′` ; Pn_i ainsi lue, FE, Pc et (b_L4) sont vraies, `z` est inévitable et non nécessaire, `G` est faux. Une variante plus forte, sur tous les objets du modèle, dispense de Pc à l'étape 5.

Sans Pn_i, l'étape 4 échoue : contre-modèle à deux situations `s1`, `s2`, où `x` existe dans les deux, causé dans `s1` par `a` qui n'existe que dans `s1`, et dans `s2` par `b` qui n'existe que dans `s2` ; rien n'est cause de `a` ni de `b`, qui ne dépendent donc de rien (T12 : la raison de l'existence d'une chose en un autre être est sa cause) ; `G` est faux dans les deux situations. Chacun de `a` et `b` peut manquer, mais jamais les deux ensemble : de « `a` peut ne pas exister » et « `b` peut ne pas exister », on ne tire pas « il est possible que ni l'un ni l'autre n'existe » (glissement de quantificateur). L4 ne prouve pas `G` : E1 seul ne donne qu'un être qui existe dans la situation réelle, pas un être inévitable. Trois routes signalées en donneraient un : Nec, avec E1 ; (c′_tot), avec ¬Sv (L6) ; Pr_c, avec Pc, (b) et E1 (L7).

### L6. (c′_tot) et ¬Sv donnent un être inévitable

RC. Par (c′_tot), il existe une situation possible `s` où n'existe aucun objet contingent. Par ¬Sv, `s` n'est pas vide : une chose y existe, qui n'est pas contingente, donc inévitable (D3, D20 ; B, S). Repose sur (c′_tot), ¬Sv, D3, D20, B, S, RC. Avec L4, (c′_tot) et ¬Sv donnent `G` sous Pn_i, Pc et (b_L4). (c′) n'entraîne (c′_tot) que si sa portée comprend l'ensemble de tous les objets contingents, infini compris. Lue sur les ensembles finis, ou sur les contingents de la seule situation d'évaluation, (c′) et ¬Sv ne donnent aucun inévitable : des situations `s_n`, `n` entier, de domaine {`c_k` : `k ≥ n`}, sans cause, rendent vraies (c′) sur les ensembles finis et ¬Sv, sans inévitable ; `s0` désignée de domaine {`a`} et `s1` de domaine {`b`}, sans cause, rendent vraies (c′) sur les contingents de la situation d'évaluation et ¬Sv, sans inévitable. La portée de (c′) reste à définir (M2).

### L7. Pr_c, Pc et (b), avec E1, donnent un être inévitable

Énoncé : sous « aucune retenue » ou « retenues pour les seuls inévitables », valeurs sous lesquelles Pr_c équivaut à « tout contingent qui existe a une cause » (T12), E1, Pr_c, Pc dans la situation réelle et (b) dans la situation réelle entraînent qu'un être inévitable existe ; avec, de plus, Pc dans toute situation et Pn_i, `G`. Pr_c, Pc, (b) et Pn_i sont des hypothèses signalées : elles servent la conclusion. Statut : DÉMONTRÉ SOUS HYPOTHÈSES, établi avec observation (D16). RC.

1. Par E1, une chose `x0` existe dans la situation réelle `r`. Si elle est inévitable, la conclusion est atteinte.
2. Sinon, elle est contingente (D3) ; par Pr_c et T12, elle a dans `r` une cause `u`, distincte d'elle (D4), dont elle dépend (D19), et qui existe dans `r` (Pc).
3. Prolonger dans `r` la suite `x0, u, …` tant que son dernier terme dépend de quelque chose ; chaque terme ajouté existe dans `r` (Pc). Par (b), la suite s'arrête sur un être `z` qui ne dépend de rien dans `r` et y existe.
4. Si `z` était contingent, Pr_c lui donnerait dans `r` une cause distincte de lui (D4), dont il dépendrait (D19) : `z` est inévitable (D3, D20).
5. Avec Pc dans toute situation et Pn_i : si `z` dépendait d'un `y` dans une situation `s′`, `y` existerait dans `s′` (Pc), et `z` dépendrait de `y` dans `r` (Pn_i), contre 3 ; `z` ne dépend de rien dans aucune situation, il est nécessaire (D2) : `G` (D1).

Repose sur E1, Pr_c, Pc, (b), T12, FE, D3, D4, D19, D20, A3, B, S, RC ; pour `G`, Pn_i, D1, D2. Contre-modèles, tous des modèles du socle. Sans (b) : `s1` désignée de domaine {`a`, `b`}, chacun cause de l'existence de l'autre, `s2` vide ; Pr_c, Pc et E1 sont vrais, aucun être n'est inévitable. Sous « toutes retenues » ou « retenues pour les seuls contingents » : le modèle 2 de T6 rend vrais Pr_c, Pc, (b) et E1 sans inévitable. Pc dans la seule situation réelle ne suffit pas à l'étape 5 : `r` désignée et `s′`, de domaine {`z`} chacune, un objet `y` hors de tout domaine, cause de l'existence de `z` en `s′` ; Pc vaut en `r` et non en `s′`, Pn_i, Pr_c, (b) et E1 sont vrais, `z` est inévitable et dépend de `y` en `s′`, `G` est faux. L'irréflexivité de la cause (D4) sert aux étapes 2 et 4 : sans elle, `s1` désignée de domaine {`a`}, `Cause(a, a)`, `s2` vide, rendrait vrais Pr_c, Pc, (b) et E1 sans inévitable.

### T3. La question se ramène à une prémisse de possibilité

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

### T7. P1 et « non (Dieu peut exister et Dieu peut ne pas exister) » s'entraînent

`P1` et `¬(◇G ∧ ◇¬G)` s'entraînent. RC.

1. Sens direct : si P1 et `◇G` sont vrais, soit `s` une situation où `G` est vrai ; P1 y donne `□G` (§1, S), donc `G` est vrai dans toute situation possible (U), et `◇¬G` est faux (§1). Donc `¬(◇G ∧ ◇¬G)`.
2. Sens réciproque : si P1 est fausse, il existe une situation `s` où `G` est vrai et `□G` faux (§1, S), donc une situation `s′` où `G` est faux ; par U, `s` et `s′` sont possibles de partout : `◇G` et `◇¬G`. Par contraposition, `¬(◇G ∧ ◇¬G)` donne P1 (B, S).

Repose sur B, S, §1, U, RC. T7 vaut pour toute lettre à la place de `G` ; il ne dépend ni de D19, ni de l'identité entre situations, ni de la situation réelle. Sans U, il tombe entier ([[theisme-cadre]], U).

P1 étant démontrée (L3), `◇G ∧ ◇¬G` est faux dans tout modèle.

### T5. La lecture matérielle d'une dépendance ne distingue rien

Soit `Dép(x) ≝ ¬E(x) → ¬L`, où L est une vérité logique ; par N, L est vraie dans toute situation. Calcul sous B et S (RC) :

1. Si `E(x)` est vrai, `¬E(x)` est faux, donc `Dép(x)` est vrai.
2. Si `E(x)` est faux, `Dép(x)` exigerait `¬L`, qui est faux, donc `Dép(x)` est faux.
3. Dans tous les cas, `Dép(x)` a la valeur de `E(x)` : tout ce qui existe « dépendrait ».

### T8. La lecture stricte d'une dépendance se ramène à l'inévitabilité

`□(¬E(x) → ¬L)` et `□E(x)` s'entraînent. RC.

1. Si `□(¬E(x) → ¬L)`, dans toute situation `¬E(x) → ¬L` est vrai et L aussi (N) ; `¬E(x)` y est donc faux (S), `E(x)` vrai (B) : `□E(x)` (§1).
2. Si `□E(x)`, dans toute situation `¬E(x)` est faux, donc `¬E(x) → ¬L` vrai (S) : `□(¬E(x) → ¬L)`.

Repose sur B, S, §1, N, RC ; `x` est le même objet dans toutes les situations (§1), et `E(x)` en `s` signifie que `x` appartient au domaine de `s`. T8 ne distingue pas un être nécessaire d'un inévitable dépendant : sous la lecture stricte, H1 se ramène à l'existence d'un inévitable (M6). H1 exige donc une relation autre que la lecture matérielle.

### T6. Le principe « tout concevable est possible » mène à une contradiction

RC, avec deux modèles.

1. `G` est concevable : une seule situation, désignée, un seul objet `a`, qui y existe et ne dépend de rien. `a` existe dans toute situation possible et, dans chacune, ne dépend de rien : il est nécessaire. Le socle et E1 y sont vrais.
2. `¬G` est concevable : deux situations `s1` et `s2`, `s1` désignée ; un seul objet `a`, qui existe en `s1` et pas en `s2`. `a` n'existe pas dans toute situation possible : il n'est pas nécessaire, et rien d'autre n'existe. Le socle est vrai dans ce modèle ; E1 est vrai en `s1`.
3. Si tout concevable était possible : `◇G` (de 1) et `◇¬G` (de 2).
4. T3c : de `◇¬G`, `¬◇G`. On affirme `◇G` et `¬◇G` : A et non-A.

La relation de cause est vide dans les deux modèles ; dans le modèle 1, aucune chose distincte de `a` n'existe ni n'est nommée, si bien que `a` ne dépend de rien (D19), quelle que soit la valeur des paramètres de D18. Ce sont des modèles du socle : FE et l'irréflexivité de la cause y valent. Repose sur P1 (L3), T3c, D1, D2, D17, D19, D20, A2, A4, N, K, T, U, R, B. Conséquence : aucun camp ne peut fonder sa prémisse de possibilité sur la seule concevabilité.

### T9. Le sens logique de « nécessaire » est vide

Aucune chose n'est nécessaire au sens logique, tant que la base de concevabilité (le socle et `∃x (x = x)`, D17) n'entraîne `E(a)` pour aucun nom `a`. Une chose est jugée par le nom que lui donne cette base. Modèle.

1. Soit `t` un terme absent de la base. Prendre le modèle 2 de T6 et y ajouter un objet, désigné par `t`, qui n'appartient au domaine d'aucune situation (§1 le permet).
2. La base y reste vraie : aucun de ses énoncés ne contient `t` (1). `∃x (x = x)` est vrai en `s1`, désignée, où `a` existe.
3. `¬E(t)` est vrai en `s1` : `¬E(t)` est concevable, la non-existence de ce que désigne `t` n'est pas contradictoire.
4. Une chose que la base ne nomme pas peut recevoir un nom nouveau, donc absent de la base ([[theisme-cadre]], §1, « Nommer ») : par 1 à 3, sa non-existence est concevable.
5. Une chose que la base nomme `a` : la base n'entraîne pas `E(a)` (condition), donc un modèle de la base rend `E(a)` faux, et `¬E(a)` est concevable (D17).
6. Aucune chose n'est donc nécessaire au sens logique.

La condition porte sur ce que la base entraîne, non sur ce qu'elle affirme : `∀x (x = a)`, joint à `∃x (x = x)`, entraînerait `E(a)` sans l'affirmer. Elle est remplie : A1, D8 et FE sont des schémas, et aucun autre axiome n'entraîne l'existence d'une chose nommée. Prendre ce sens trancherait `¬G` par définition. Si au contraire tout nom désignait un objet de chaque domaine, `∃x (x = t)` serait une vérité logique et toute chose nommée serait nécessaire en ce sens, qui ne distinguerait plus rien. Repose sur §1 (modèle du socle, identité, noms, règle « Nommer », langage d'analyse, dont relève l'objet posé hors de tout domaine), D8, D17. Ce résultat est le motif qui écarte le sens logique par la règle de symétrie (contrainte 9 du [[theisme-protocole]] ; [[theisme-cadre]], D2) ; il ne le réfute pas.

### T10. Une situation vide possible entraîne `□¬G`

Si une situation possible a un domaine vide, `□¬G`, sans P1. RC.

1. Soit `s0` une situation possible dont le domaine est vide : rien n'y existe (D8).
2. Par U, `s0` compte parmi les situations possibles de partout : aucun être n'existe dans toute situation possible, aucun n'est inévitable (D20), aucun n'est nécessaire (D2).
3. Dans toute situation possible, `G` est donc faux : `□¬G` (§1) ; par T, `¬G`.

Repose sur U, D1, D2, D8, D20, T, B, S, §1, RC ; ni l'identité entre situations ni D19. Une situation vide dans un modèle de concevabilité (§1) n'affirme rien de tel : elle ne témoigne que de ce que `¬◇G` est concevable.

### T11. Ce qui donne l'existence d'une chose nommée

Soit M une base d'intelligibilité dans `s` (D18). Une **chaîne d'identités** de `t` à `x` est une suite d'énoncés `t = u1`, `u1 = u2`, …, `un = x` de M, chacun pris dans un sens ou dans l'autre ; elle est vide quand `t` est `x`. Énoncé : `E(x)` se démontre de M et du socle si et seulement si M contient, pour un nom `t`, une chaîne d'identités de `t` à `x` et l'un des énoncés `E(t)` ou `Cause(u, t)`. RC pour le sens « si », modèle pour le sens « seulement si ».

**Sens « si »** (RC). Si M contient `E(t)` et la chaîne, `t` et `x` désignent dans `s` le même objet (§1, sens de `=`), qui appartient au domaine de `s` (D8) : `E(x)` est vrai dans `s`. Si M contient `Cause(u, t)`, FE donne `E(t)` dans `s`, et l'on conclut de même.

**Sens « seulement si »** (modèle). Supposons que, pour aucun nom `t` relié à `x` par une chaîne d'identités de M, M ne contienne `E(t)` ni un énoncé `Cause(u, t)`. Soit un modèle où le socle et M sont vrais dans `s`, `o` l'objet que désigne `x`, et N l'ensemble des noms reliés à `x` par une chaîne d'identités de M, `x` compris.

1. Ajouter au modèle un objet nouveau `o*`, qui n'appartient au domaine d'aucune situation (§1 le permet), et faire désigner `o*`, dans toute situation, par chaque nom de N ; les autres noms gardent leur objet.
2. Dans toute situation, donner à `o*` les extensions de `o`, à chaque place de chaque propriété et de la relation de cause : un n-uplet où figure `o*` appartient à une extension exactement quand le n-uplet où `o*` est remplacé par `o` y appartient, sauf à la place de l'effet de la relation de cause, où `o*` ne figure jamais.
3. Le modèle reste un modèle du socle : FE vaut, `o*` n'étant l'effet de rien et les autres couples de la relation de cause étant inchangés ; l'irréflexivité aussi, aucun couple `(o*, o*)` n'étant cause, `o*` n'étant jamais à la place de l'effet ; chaque nom désigne le même objet dans toute situation (identité entre situations) ; les définitions se calculent comme avant.
4. Les énoncés de M gardent leur valeur dans `s`. (a) Un universel clos sans nom ne porte que sur les objets des domaines (§1) ; ni les domaines ni les extensions entre leurs objets ne changent, et `□`, `◇` parcourent les mêmes situations. (b) Un énoncé atomique, ou sa négation, dont aucun nom n'est dans N ne change pas. (c) Pour `t` dans N : `F(t)`, et `Cause(t, b)` avec `b` hors de N, gardent leur valeur (2) ; `E(t)` et `Cause(u, t)` ne sont pas dans M (hypothèse), et leurs négations sont vraies, `o*` n'étant ni dans un domaine ni l'effet de rien ; une identité entre deux noms de N est vraie, les deux désignant `o*`, et sa négation n'est pas dans M, qui est vraie dans `s` et les relie par une chaîne ; une identité `t = b` avec `b` hors de N n'est pas dans M (sinon `b` serait dans N), et sa négation est vraie, `o*` étant distinct de tout autre objet. (d) Les axiomes et les définitions de M sont vrais dans tout modèle du socle.
5. `E(x)` est faux dans `s`, `x` désignant `o*`, hors du domaine de `s`. Par la correction ([[theisme-cadre]], §1), `E(x)` ne se démontre pas de M et du socle.

Repose sur FE, §1 (modèles du socle, sémantique des énoncés atomiques, noms hors domaine, extensions, identité entre situations, correction), énoncé atomique (D18 : prédicats admis), langage d'analyse (objets d'un modèle), D8, D18, B, S, RC. Sans FE, l'étape 2 se fait sans exception à la place de l'effet, et seules les bases qui contiennent `E(t)` et une chaîne donnent `E(x)` ([[theisme-cadre]], FE).

### T12. Les bases minimales pour l'existence d'une chose

Énoncé : dans `s`, les bases minimales pour `E(x)` (D18 : aucune partie stricte ne suffit) sont exactement les ensembles `{A} ∪ C`, où C est une chaîne d'identités de `t` à `x` dont aucune partie stricte ne relie `t` à `x`, et A est `E(t)`, avec `t` distinct de `x` (D18 excluant `E(x)` de la base), ou `Cause(u, t)`. RC.

1. Un tel ensemble suffit (T11, sens « si »). Aucune de ses parties strictes ne suffit : sans A, il ne reste que des identités, qui ne contiennent ni `E` ni `Cause` (T11) ; sans l'une des identités de C, plus aucune partie de C ne relie `t` à `x`, et `t` est le seul nom auquel A s'applique (T11).
2. Une base M qui suffit contient un tel ensemble (T11, sens « seulement si », en prenant pour C une partie minimale de la chaîne), qui suffit déjà ; si M est minimale, elle lui est égale.

Conséquences, toutes dans `s` :

- (a) Aucun universel n'entre dans une base minimale pour `E(x)` : un universel donne le comment de ce qu'une chose soit ainsi, jamais le pourquoi de son existence.
- (b) Les bases `{E(t)} ∪ C` entraînent `E(x)` par la seule identité (A1, D8) : ce sont les raisons de soi, admises selon le paramètre « raisons de soi retenues » (D18). Leurs énoncés non axiomatiques ne portent que sur l'objet de `x` : les noms de la chaîne le désignent tous, ses identités étant vraies dans `s`.
- (c) Les bases `{Cause(u, t)} ∪ C` n'entraînent `E(x)` qu'avec FE : elles valent quel que soit le paramètre, et portent sur l'objet de `u`, distinct de celui de `x`, une chose étant cause d'autre chose (D4).
- (d) L'existence de x a sa raison en un être y distinct de x (pont de D18) si et seulement si y est cause de l'existence de x. Si y l'est, des noms (« Nommer ») donnent la base `{Cause(y, x)}`, vraie dans `s`, sans `E(x)`, minimale (1), qui n'entraîne pas `E(x)` par la seule identité et porte sur y. Réciproquement, une base minimale qui porte sur un y distinct de x est de la forme (c), et y est l'objet de `u`, cause de l'existence de l'objet de `t`, qui est celui de x.
- (e) La part « raison » de D19 a donc la même extension que sa part « cause », et D2 se règle par la seule cause. La part « raison » de Pc équivaut à sa part « cause » pour un y distinct de x ; pour une raison de soi, elle est démontrée : la base est vraie dans `s` et entraîne `E(x)`, donc x existe dans `s`.

Repose sur T11, FE, D4, D18, D19, §1 (sémantique des énoncés atomiques, identité entre situations, « Nommer »), énoncé atomique (D18 : prédicats admis), B, S, RC. Condition d'usage : T12 vaut tant que le socle ne contient, hors `E` et FE, aucun axiome qui fasse entraîner l'existence par un énoncé atomique ; à revérifier à l'admission de tout axiome de ce type. L'inclusion de la raison en un autre être dans la cause vient de D18 et de cette sémantique ; FE donne l'inclusion inverse.

## Hypothèses de M0

Aucune n'est admise (contrainte 8 du [[theisme-protocole]]). « Signalée » : elle sert une conclusion, `G` ou `¬G`. Chacune a son paragraphe « si tu la nies », qui dit ce qu'implique sa négation ; l'écarter sans la nier ne coûte que ce qui en dépend.

**Pn** : pour tout objet `x` et tout objet `y` qui existe dans au moins une situation possible, que `x` dépende ou non de `y` (D19) appartient à la nature de `x` (D11) : cela ne varie pas d'une situation possible où `x` existe à une autre. Pn entraîne Pn_i. Signalée, sert `G`. Candidate comme axiome pour M2. **Si tu la nies**, tu poses qu'il existe un être `x` et un être `y` tels que `x` dépend de `y` dans une situation où il existe, et n'en dépend pas dans une autre où il existe. Aucune contradiction : dans le contre-modèle de L4, `x` est causé par `a` en `s1` et ne dépend pas de `a` en `s2`. La négation ne dit pas de quel être il s'agit : si c'est un contingent, elle n'atteint aucun résultat de M0, L4 n'employant que Pn_i ; si c'est un inévitable, elle nie Pn_i, avec le coût écrit ci-dessous. Aucun autre coût n'en est démontré en M0. Elle ne tranche pas `G` : faux dans le contre-modèle de L4, `G` y devient vrai si l'on ajoute un être qui existe dans les deux situations sans cause.

**Pn_i** : pour tout objet `x` inévitable et tout objet `y` qui existe dans au moins une situation possible, si `x` dépend de `y` dans une situation possible, il en dépend dans toute situation possible. `x` et `y` parcourent les objets qui existent dans au moins une situation possible : quantification du langage d'analyse. Les membres qui assument la variante sur tous les objets du modèle l'écrivent dans leur fiche. Signalée, sert `G` (L4). **Si tu la nies**, tu poses qu'il existe un être inévitable `x` et un être `y` tels que `x` dépend de `y` dans une situation et non dans une autre. C'est affirmer qu'un être inévitable existe : la négation porte cette charge (contrainte 7), que l'écart de Pn_i ne porte pas. Aucune contradiction : contre-modèle de L4. Cet inévitable n'est pas nécessaire (D2), et L4 perd son étape 4. Le coût est épistémique : la route de L4 vers `G` est coupée. `G` n'est pas tranché pour autant : faux dans le contre-modèle de L4, il y devient vrai si l'on ajoute un être qui existe dans les deux situations sans cause. P1 n'en dépend pas (L3).

**Pc** : si `y` est cause ou raison de l'existence de `x` dans une situation, `y` existe dans cette situation. Signalée, sert `G` (L4). Sous FE, sa part « raison » revient à sa part « cause » (T12). **Si tu la nies**, tu poses qu'en au moins une situation une chose est cause de l'existence d'une autre sans y exister. Aucune contradiction : une seule situation, de domaine {`x`}, et un objet `a` hors de tout domaine, cause de l'existence de `x` ; FE y vaut. Le coût est métaphysique : une production par ce qui manque là où elle a lieu ; « produire » n'implique aucun ordre de temps ([[theisme-cadre]], §4), et le cas d'une cause passée relève de M3. L4 perd son étape 4 : la cause d'un inévitable pourrait manquer dans certaines situations. La négation ne tranche pas `G` : dans ce modèle, `x` dépend de `a` et `G` est faux ; ajouter un objet qui existe sans cause dans l'unique situation rend `G` vrai. **Pc comme axiome.** Si Pc entrait au socle, `{Cause(u, x)}` entraînerait `E(u)` dans `s`, et cette base, minimale, porterait sur `x` : toute cause dépendrait de son effet (D19). Un être nécessaire ne pourrait alors être cause de rien dans aucune situation, si bien que la branche cause de H2 serait fausse avec `G` dès qu'un contingent existe, et (b) serait fausse dès qu'une chose en cause une autre. L'admettre comme axiome exigerait de reprendre la clause « porte sur y » du pont (D18).

**(b)** : dans toute situation `s`, toute suite d'êtres dont chacun dépend du suivant dans `s`, et qu'on ne peut plus prolonger, a un dernier terme, qui ne dépend de rien dans `s`. Une suite infinie n'a pas de dernier terme : (b) exclut les cycles de dépendance, que D4 et D19 n'interdisent pas (la suite `x, y, x, y, …` quand `x` et `y` sont cause l'un de l'autre), et les régressions infinies. Signalée, sert `G`. Examinée en M1. **Si tu la nies**, tu poses qu'en au moins une situation il existe une suite infinie d'êtres dont chacun dépend du suivant : un cycle ou une régression de dépendance. Aucune contradiction : une seule situation, de domaine {`x`, `y`}, où chacun est cause de l'existence de l'autre ; FE y vaut. Le coût est métaphysique : une dépendance sans premier terme. La négation ne tranche pas `G` : faux dans ce modèle, il devient vrai si l'on y ajoute `z`, cause de `x` et sans cause, la suite `x, y, x, …` restant infinie. Elle n'atteint L4 que si elle nie aussi (b_L4).

**(b_L4)** : si un être inévitable dépend d'un être dans une situation `s`, il est relié dans `s`, par une suite finie d'êtres dont chacun dépend du suivant dans `s`, à un être qui ne dépend de rien dans `s`. C'est la forme qu'emploie L4. Signalée, sert `G` (L4). (b) l'entraîne (RC) : si un inévitable `x` dépend d'un être dans `s`, prolonger dans `s` la suite `x, y1, y2, …` tant que son dernier terme dépend de quelque chose ; si elle ne s'arrêtait jamais, elle serait infinie et ne se prolongerait plus, sans dernier terme, contre (b) ; elle s'arrête donc sur un être qui ne dépend de rien dans `s`. La réciproque est fausse : une seule situation, de domaine {`x`, `y`, `z`}, où `y` est cause de `x`, `x` de `y`, et `z` de `x` ; (b_L4) est vraie (`x` est relié à `z`, `y` par `x` à `z`), (b) est fausse (`x, y, x, y, …`), et `G` est vrai (`z`). **Si tu la nies**, tu poses qu'un être inévitable dépend d'un être dans une situation `s` sans qu'aucune suite finie de dépendances l'y relie à un être qui ne dépend de rien dans `s` : toutes ses dépendances s'y prolongent sans fin. C'est affirmer qu'un être inévitable existe : la négation porte cette charge, que l'écart ne porte pas (contrainte 7). Aucune contradiction : une seule situation, de domaine {`x`, `y`}, où chacun est cause de l'existence de l'autre. Le coût est métaphysique : un inévitable dont la dépendance n'a pas de premier terme. L4 perd son étape 3 ; `G` n'est pas tranché : faux dans ce modèle, il devient vrai si l'on y ajoute un être sans cause qui ne cause rien.

**(c′)** : les êtres contingents se combinent librement : pour tout ensemble d'êtres contingents, une situation possible où aucun n'existe. Signalée, sert `G` : si sa portée comprend l'ensemble de tous les objets contingents, infini compris, elle donne (c′_tot), qui, jointe à ¬Sv, donne un être inévitable (L6), antécédent de L4 ; sous les autres portées, elle ne le donne pas (contre-modèles de L6). Personne ne pose cette conjonction en M0. À elle seule, elle n'entraîne ni `G` ni `◇G`, même avec Pc, (b), (b_L4) et un inévitable : `s0` désignée, de domaine {`x`, `a`}, et `s*`, de domaine {`x`} ; `a` est cause de `x` en `s0`, et rien n'est cause de `x` en `s*` ; rien n'est cause de `a`. (c′), Pc, (b), (b_L4) et E1 sont vrais, `x` est inévitable ; `x` dépend de `a` en `s0`, donc n'est pas nécessaire (D2), et `G` est faux dans les deux situations. « Se combinent librement » et sa portée restent à définir. **Si tu la nies**, tu poses qu'il existe un ensemble d'êtres contingents dont, dans toute situation possible, au moins un existe. Aucune contradiction : dans le contre-modèle de L4, `a` et `b` sont contingents, et l'un des deux existe dans chaque situation. Le coût est métaphysique : il est nécessaire qu'au moins l'un d'eux existe, sans qu'aucun soit inévitable. La négation ne tranche pas `G` : faux dans ce modèle, il devient vrai si l'on y ajoute un être qui existe dans les deux situations sans cause ; elle ferme la route de L6.

**(c′_tot)** : il existe une situation possible où n'existe aucun objet contingent (aucun objet qui existe dans une situation possible sans exister dans toutes). Signalée, sert `G` : jointe à ¬Sv, elle donne un être inévitable (L6). Personne ne la pose en M0. À elle seule, elle ne tranche pas `G` : vraie dans le modèle 2 de T6 (`s2` vide) avec `¬G`, et dans le modèle 1 avec `G`. **Si tu la nies**, tu poses que toute situation possible contient au moins un objet contingent. Aucune contradiction : `s1` désignée de domaine {`a`}, `s2` de domaine {`b`}, sans cause. Aucun coût n'en est démontré en M0 ; la négation ferme la route de L6. Elle ne tranche pas `G` : faux dans ce modèle, il devient vrai si l'on ajoute un être qui existe dans les deux situations sans cause.

**Nec** : tout ce qui existe dans une situation possible existe dans toute situation possible. Signalée, sert `G` : avec E1, elle donne un être inévitable (D20), antécédent de L4 ; elle rend Sv incompatible avec E1 ; sous elle, aucun contingent n'existe (D9 est vide). Personne ne la pose en M0. Elle n'entraîne pas `G`, même avec E1 : deux situations, `s1` désignée et `s2`, de domaine {`a`, `b`} chacune ; `b` est cause de l'existence de `a` en `s1`, `a` de celle de `b` en `s2` ; `a` et `b` sont inévitables, aucun n'est nécessaire (D2), et `G` est faux dans les deux situations. Ce n'est pas un sens de terme : le §1 permet que les domaines varient sans l'imposer, et la contrainte 9 ne s'applique pas. **Si tu la nies**, tu poses qu'une chose existe dans une situation possible et manque dans une autre. Aucune contradiction : modèle 2 de T6. Aucun coût n'en est démontré en M0, dont aucun résultat n'emploie Nec. La négation ne tranche pas `G` : faux dans le modèle 2 de T6, il est vrai avec deux situations de domaines {`g`} et {`g`, `c`}, sans cause.

**Abs** : il existe au moins un objet abstrait (proposition, propriété, ensemble, loi) qui existe dans toute situation possible et, dans chacune, ne dépend de rien. « Abstrait » n'étant pas défini (M6), Abs se ramène pour l'instant à `G` avec un témoin qualifié d'abstrait. Signalée, sert `G` : un tel objet est nécessaire (D2), donc Dieu au sens de D1, qui reste minimale (règle de lecture du [[theisme-cadre]]) ; l'inférence n'emploie pas le sens d'« abstrait », mot non défini (M6). Abs n'est pas un sens de terme et ne rend pas `G` vrai par définition : le modèle 2 de T6 rend vrais le socle et `∃x (x = x)` sans `G`. D19 ne compte pas la dépendance sans cause, celle d'un ensemble envers ses membres : un objet abstrait sans cause ne dépend de rien ; étendre D19 relève de M6. Personne ne la pose en M0. Transmise à M6 avec Nb et H1. **Si tu la nies**, tu poses que tout objet abstrait manque dans au moins une situation possible, ou dépend de quelque chose dans au moins une. Ce n'est pas `¬G` : la négation ne dit rien d'un être nécessaire qui ne serait pas un objet abstrait. Aucune contradiction : dans le modèle 2 de T6, rien n'existe dans toute situation. Aucun coût n'en est démontré en M0. La négation ne nie pas N, qui porte sur la nécessité d'énoncés, non sur l'existence d'objets.

**`◇G` et `◇¬G`** : hypothèses de même rang. Par T3d, chacune pèse autant que la conclusion qu'elle sert. **Si tu nies `◇G`**, tu poses que `G` est impossible : par T3d, cela revient à poser `¬G`, avec sa charge entière ; ce n'est pas suspendre. **Si tu nies `◇¬G`**, tu poses que `G` est vrai dans toute situation possible (§1, B) : par T, cela revient à poser `G`, avec sa charge entière.

**Routes vers une possibilité.** Le cadre donne deux routes vers `◇Q`, qui valent sans P1 : de Q, par L5 ; de `□(P → Q)` et `◇P`, par L1. Tirée d'un fait, la première redonne le fait : fonder `◇G` sur `G` suppose `G`. Que ces deux routes soient les seules n'est pas démontré.

**Sv** : une situation possible est vide. Signalée, sert `¬G` : elle entraîne `□¬G` sans P1 (T10), et elle est plus forte que `◇¬G`. **Si tu la nies**, tu poses que toute situation possible contient au moins une chose. Aucune contradiction : le modèle 1 de T6 n'a aucune situation vide. Ce refus n'entraîne pas `G` : deux situations, `s1` désignée de domaine {`a`}, `s2` de domaine {`b`}, sans cause ; aucune n'est vide, aucun être n'est inévitable, `G` est faux dans les deux.

**Cont** : tout ce qui existe dans une situation possible manque dans au moins une : aucun être inévitable n'existe. Signalée, sert `¬G` : elle entraîne `□¬G` sans P1 (aucun inévitable, donc aucun être nécessaire dans aucune situation : D20, D2, D1). Plus faible que Sv, qui l'entraîne (U) ; la réciproque est fausse : `s1` désignée de domaine {`a`}, `s2` de domaine {`b`}, sans cause. Personne ne la pose en M0. Examinée en M2. **Si tu la nies**, tu poses qu'un être inévitable existe : c'est l'antécédent de L4, et la négation porte cette charge (contrainte 7), que l'écart ne porte pas. Aucune contradiction : modèle 1 de T6. Aucun coût n'en est démontré en M0. `G` n'est pas tranché : faux dans le modèle de Nec, vrai dans le modèle 1 de T6.

**Pr** : pour toute situation `s` et toute chose qui existe dans `s`, son existence a dans `s` une raison (D5) : une cause, ou une raison de soi (D18). **Pr_c** : de même pour tout contingent (D3) qui existe dans `s`. Examinées en M1. Elles portent sur le pourquoi de l'existence ; le comment, ce par quoi une chose est ainsi, relève des universels (R) et (O) d'une base, hors de Pr. Sous FE, une chose n'a de raison d'exister qu'en sa cause ou en soi (T12) : la valeur de Pr et de Pr_c dépend du paramètre « raisons de soi retenues », que fixe M1, et dont les valeurs sont « toutes retenues », « retenues pour les seuls inévitables », « retenues pour les seuls contingents » et « aucune retenue » ([[theisme-cadre]], D18).

- **Toutes retenues.** Toute chose qui existe dans `s` y a la raison de soi `{E(a), a = x}`, où `a` est un nom nouveau (« Nommer ») : Pr et Pr_c sont démontrées (RC). **Si tu nies Pr ou Pr_c**, tu poses qu'une chose qui existe n'a pas de raison d'exister : sous cette valeur, c'est affirmer A et non-A, un refus intenable. Le coût tombe sur l'acceptation (contrainte 4 du [[theisme-protocole]]) : aucune chose qui existe n'est un fait brut quant à son existence (D6), et la réponse au pourquoi, « elle existe parce qu'elle existe », n'apprend rien.
- **Retenues pour les seuls inévitables.** Un inévitable qui existe dans `s` y a une raison de soi ; un contingent n'y a de raison que par une cause (T12). Pr et Pr_c équivalent toutes deux à « tout contingent qui existe dans `s` y a une cause ». **Si tu nies l'une ou l'autre**, tu poses qu'un contingent existe sans cause : un fait brut quant à son existence (D6). Aucune contradiction (modèle 2 de T6) ; le coût est métaphysique : une existence sans pourquoi. Pr n'entraîne pas `¬G` : dans le modèle 1 de T6, `a` est inévitable, a une raison de soi, et `G` est vrai. Jointes à Pc et (b), avec E1, elles donnent un être inévitable (L7) : sous cette valeur, Pr et Pr_c sont des hypothèses signalées qui servent `G`. La valeur elle-même est signalée et sert `G` ([[theisme-cadre]], D18, paramètres).
- **Retenues pour les seuls contingents.** Un contingent qui existe dans `s` y a une raison de soi ; un inévitable n'y a de raison que par une cause (T12). Pr_c est démontrée (RC) : son refus est une contradiction. Pr équivaut à « tout inévitable qui existe dans `s` y a une cause » et entraîne `¬G` (RC) : si `G` est vrai dans `s`, un être nécessaire `x` y existe ; il est inévitable (D2) ; rien de distinct de `x` n'y est cause de son existence (D19), et `x` ne l'est pas non plus (D4) ; il n'a donc pas de raison d'exister dans `s`, contre Pr. **Si tu nies Pr**, tu poses qu'un inévitable existe sans cause : un fait brut quant à son existence (D6). Aucune contradiction (modèle 1 de T6, où `a` est inévitable et sans cause) ; le coût est métaphysique : une existence sans pourquoi. Pr_c, vraie par définition, ne donne plus d'inévitable par L7 : le modèle 2 de T6, sans cause, rend vrais Pr_c, Pc, (b) et E1 sans inévitable. Sous cette valeur, Pr est une hypothèse signalée qui sert `¬G`. La valeur elle-même est signalée et sert `¬G` ([[theisme-cadre]], D18, paramètres).
- **Aucune retenue.** Pr équivaut à « toute chose qui existe dans `s` y a une cause », Pr_c à « tout contingent qui existe dans `s` y a une cause » (T12). **Si tu nies Pr_c**, tu poses qu'un contingent existe sans cause : c'est un fait brut quant à son existence (D6). Aucune contradiction (modèle 2 de T6) ; le coût est métaphysique : une existence sans pourquoi. Accepter Pr_c, c'est porter une thèse universelle sur tout contingent, à démontrer en M1. Pr_c seule ne tranche pas `G` : `s1` désignée de domaine {`x`, `y`}, chacun cause de l'existence de l'autre, `s2` vide : Pr_c est vraie, `G` faux ; dans le modèle 1 de T6, Pr_c est vraie, `G` vrai. Jointe à Pc et (b), avec E1, elle donne un être inévitable (L7) : signalée, elle sert `G`. **Si tu nies Pr**, tu poses qu'une chose existe sans cause, fait brut quant à son existence. Aucune contradiction (modèle 1 de T6, où `a` n'a pas de cause) ; le coût est métaphysique. Accepter Pr coûte davantage : Pr entraîne `¬G` ; avec Pc, toute chose qui existe dans la situation réelle y a une cause qui y existe et dont elle dépend (D4, D19), si bien qu'aucune suite de dépendance ne s'y arrête, et (b) est fausse dès que quelque chose existe (E1). Sous cette valeur, Pr est donc une hypothèse signalée qui sert `¬G`, et sa restriction Pr_c sert `G`.

Pr entraîne `¬G` sous « aucune retenue » (RC) : si `G` est vrai dans `s`, un être nécessaire `x` y existe et n'y dépend de rien (D1, D2) : rien de distinct de `x` n'y est cause de son existence (D19), et `x` ne l'est pas non plus (D4). Par T12, une base minimale pour `E(x)` est une raison de soi, non retenue, ou contient un énoncé `Cause(u, t)` vrai dans `s`, où `t` désigne `x`, ce qui est exclu. `x` n'a donc pas de raison d'exister dans `s`, contre Pr ; d'où `¬G` (absurde négatif).

Aucune valeur du paramètre ne rend `G` ou `¬G` vrai par définition (contrainte 9 du [[theisme-protocole]]) : sous FE, la part « raison » de D19 se règle par la cause quelle que soit la valeur (T12), si bien que D2 et D1 n'en dépendent pas, et les modèles 1 et 2 de T6 rendent vrais le socle et `∃x (x = x)`, l'un avec `G`, l'autre avec `¬G`, sous chacune des quatre valeurs. Le paramètre « universels employables dans une base » ne touche pas l'existence (T12, a). Pr reste une hypothèse : qu'elle entraîne `¬G` sous une valeur n'est pas un sens de terme qui tranche `G`.

**Nb**, hypothèse de l'utilisateur : un nombre n'est pas un être ; lue : aucun nombre n'existe (D8) dans aucune situation possible. Elle est indépendante du socle : un modèle où aucun domaine ne contient de nombre et un modèle où un domaine en contient un rendent tous deux le socle vrai, « nombre » étant un prédicat sans axiome ([[theisme-cadre]], §4). Examinée en M6. **Si tu la nies**, un nombre existe dans au moins une situation. S'il existait dans toute situation possible et ne dépendait de rien, il serait nécessaire (D2), donc Dieu au sens de D1, comme l'objet de Abs ; qu'un nombre qui existe soit pour autant inévitable n'est pas démontré, N ne portant pas sur l'arithmétique. Aucune contradiction n'en est démontrée. Le coût de la négation est métaphysique : un nombre compte parmi ce qui existe dans au moins une situation. Nb ne sert ni G ni ¬G ; sa négation n'ouvre une route vers `G` qu'avec l'inévitabilité et l'indépendance d'un nombre.

**H1′**, miroir de H1 : tout être nécessaire (D2) est nécessaire au sens logique. Signalée, sert `¬G` : jointe à T9, elle donne exactement `¬G`, ce que trancherait le sens logique écarté de D2 ; elle est le miroir de H1 au sens de la contrainte 9 du [[theisme-protocole]]. La lecture « tout être inévitable est nécessaire au sens logique » est écartée : jointe à T9, elle trancherait davantage, en vidant l'antécédent de L4. Examinée en M6. **Si tu la nies**, tu affirmes qu'un être nécessaire existe sans être nécessaire au sens logique : c'est affirmer `G` (D1), avec sa charge entière. L'écarter sans la nier laisse `G` ouvert.

## Validité et conditions d'usage

La validité de chaque pas a été contrôlée par le vérificateur au passage de M0, puis recontrôlée après correction (2026-11-03) ; les pas modifiés ou ajoutés au contrôle de solidité attendent sa vérification ([[theisme-m0-debat]], « Recontrôle »). La solidité de T3 dépend de la prémisse de possibilité, qui n'est pas démontrée.

Deux pièges invalident T3 si on les ignore :

- **« Possible » doit garder le même sens partout.** Si « Dieu est possible » veut dire « pour ce que j'en sais », les lignes 4 à 6 ne s'appliquent pas. L'ignorance n'est pas une possibilité au sens du cadre (§1).
- **P1 dépend de la lecture de D2.** D2 exige qu'un être nécessaire ne dépende de rien dans toute situation possible, et P1 en découle (L3). Si D2 n'exigeait de ne dépendre de rien que dans la situation considérée, P1 ne découlerait pas de D1 : modèle B, `s1` désignée de domaine {`a`}, `s2` de domaine {`a`, `b`}, `b` est cause de `a` en `s2` ; `a` serait nécessaire en `s1`, aucun être ne le serait en `s2`, et P1 serait fausse.

## Positions après M0

1. **Commun à tous.** P1 découle de D2 (L3) et pèse de même sur les deux camps. T3a à T3e valent : `G` est nécessaire ou impossible. « Peut-être » au sens modal disparaît des deux côtés : seul reste le sens d'ignorance, qui ne fait pas fonctionner T3. `◇G ∧ ◇¬G` est exclu (T7).
2. **Affirmer `G`.** Charge entière (contrainte 7 du [[theisme-protocole]]). Revient à poser `◇G`, qui pèse autant que `G` (T3d) ; tout fondement de `◇G` tiré d'un fait redonne `G` (routes vers une possibilité) ; la concevabilité ne suffit pas (T6) ; la route compte une hypothèse, `◇G`. `G` ne dit rien de H3 ni de H4. Hypothèses signalées qui servent `G` : Pn, Pn_i, Pc, (b), (b_L4), (c′_tot) jointe à ¬Sv, Nec, Abs, Pr_c sous « aucune retenue » ou « retenues pour les seuls inévitables » et Pr sous cette dernière valeur (L7), et cette valeur elle-même ; Abs entraîne `G` à elle seule.
3. **Affirmer `¬G`.** Même charge. `¬G`, `◇¬G` et `¬◇G` s'entraînent : c'est une thèse d'impossibilité. Le cadre ne lui donne aucune source : L5 donne `◇P`, pas `□P` ; T6 ; les modèles 1 et 2 de T6. La route compte une hypothèse, `◇¬G`. Hypothèses signalées qui servent `¬G` : Sv, Cont, Pr sous « aucune retenue » ou « retenues pour les seuls contingents », cette dernière valeur elle-même, H1′ ; Sv et Cont donnent chacune `□¬G` (T10 ; Cont, plus faible que Sv, suffit), et toutes portent le même signalement que les hypothèses qui servent `G`.
4. **Affirmer `¬P1`, ou `◇G ∧ ◇¬G`.** Aucun modèle ne le rend vrai (L3, T7) : l'affirmer, c'est refuser D2 telle qu'elle est écrite, l'identité entre situations ou U. Sous la lecture de D2 que le cadre écarte, `¬P1` serait cohérente (modèle B) et reviendrait à affirmer `◇G ∧ ◇¬G` (T7), soit deux hypothèses de possibilité.
5. **Suspendre (écarter sans nier).** Aucune charge sur `G` (T1 ; modèles 1 et 2 de T6) ; celui qui suspend porte celle de ses propres assertions. Coût : aucune conclusion sur `G`. La suspension n'engage aucun des coûts des rubriques 2 à 4.

## Transmis à la suite

| Énoncé | Contenu | Module |
|---|---|---|
| Pn, Pn_i | Pn entraîne Pn_i ; L4 n'emploie que Pn_i ; Pn candidate comme axiome, avec son paragraphe de refus ; signalées, elles servent `G`. Portée : `y` parcourt les objets qui existent dans au moins une situation ; lue sur le seul domaine de la situation d'évaluation, Pn_i ne donne pas L4 | M2 |
| Pc | Une cause ou une raison existe dans la situation où elle est cause ou raison ; sous FE, sa part « raison » revient à sa part « cause » (T12) ; signalée, sert `G`. Admise comme axiome, elle ferait dépendre toute cause de son effet : la clause « porte sur y » du pont (D18) serait à reprendre | M2 |
| (c′) | N'entraîne ni `G` ni `◇G` à elle seule ; signalée, sert `G` : elle donne (c′_tot), donc avec ¬Sv un être inévitable (L6), si sa portée comprend l'ensemble de tous les contingents, infini compris ; « se combinent librement » et sa portée à définir | M2 |
| Existe-t-il un être inévitable ? | Condition de L4 ; le contingent l'exige-t-il ? Routes signalées vers un inévitable : Nec avec E1, que personne ne pose ; (c′_tot) avec ¬Sv (L6), que personne ne pose ; Pr_c, sous « aucune retenue » ou « retenues pour les seuls inévitables », avec Pc, (b) et E1 (L7), que posent deux membres de la population. Route signalée vers la négation : Cont, que personne ne pose | M2 |
| (b) | Dans toute situation `s`, toute suite d'êtres dont chacun dépend du suivant dans `s`, qu'on ne peut plus prolonger, a un dernier terme, qui ne dépend de rien dans `s` : ni cycle ni régression infinie. Thèse distincte de (b_L4), plus faible, seule employée par L4 | M1 |
| Pr, Pr_c | Sur l'existence, pour les choses qui existent dans la situation considérée. Toutes retenues : démontrées, leur refus est une contradiction, et le pourquoi de l'existence n'apprend rien. Retenues pour les seuls inévitables : Pr et Pr_c équivalent à « tout contingent qui existe a une cause » ; signalées, elles servent `G` (L7). Retenues pour les seuls contingents : Pr_c est démontrée ; Pr équivaut à « tout inévitable qui existe a une cause » et entraîne `¬G` (signalée, sert `¬G`). Aucune retenue : Pr équivaut à « toute chose qui existe a une cause » et entraîne `¬G` (signalée, sert `¬G`) ; Pr_c équivaut à « tout contingent qui existe a une cause », ne tranche pas `G` seule et sert `G` avec Pc, (b) et E1 (L7) | M1 |
| Raisons de soi retenues | Seul levier de M1 sur le pourquoi de l'existence (T12) ; quatre valeurs : toutes retenues, retenues pour les seuls inévitables, retenues pour les seuls contingents, aucune retenue ; effets : ligne Pr, Pr_c, et D6. Aucune valeur ne rend `G` ou `¬G` vrai par définition (contrainte 9). La deuxième valeur, signalée (sert `G`), s'écrit par une raison de soi réservée aux inévitables ou par une base `{□E(t)} ∪ C`, seule forme modale nommée admise ; la charge de montrer qu'elle n'est pas un cercle déguisé revient à qui la soutient. Son tenant propose un critère de cercle, à examiner : une base M pour P est circulaire si P, joint au socle et aux identités de M, entraîne M ; il range la raison de soi par identité parmi les cercles, non `{□E(t)} ∪ C` ni `{Cause(u, t)} ∪ C`. La troisième, sa valeur miroir, signalée (sert `¬G` : elle ferme L7 et garde la route de Pr vers `¬G`), s'écrit par une raison de soi réservée aux contingents ; elle porte la même charge ; personne ne la soutient dans la population. Le paramètre « universels employables dans une base » ne touche pas l'existence | M1 |
| Comment | D18, pour un énoncé autre que `E(x)`, donne le comment ; elle n'exige ni asymétrie ni pertinence : sous une loi réciproque, deux faits, joints à l'existence de leur sujet, sont le comment l'un de l'autre, et une condition inerte d'une loi vraie entre dans une base. Ajouter ou non une condition d'asymétrie et de pertinence | M1 |
| Pourquoi les lois sont-elles ce qu'elles sont ? | Question de l'utilisateur, non tranchée : les universels donnent le comment ; ce qui les rend tels n'est pas examiné en M0 | M1 |
| Loi et coïncidence | Un universel vrai par coïncidence compte comme loi dans une base d'intelligibilité (D18) ; les distinguer | M1 |
| Unicité | Plusieurs êtres nécessaires seraient chacun Dieu au sens de D1 ; leur regroupement est à examiner ; « tout » et « partie » d'un être ne sont pas définis | M4 |
| H2 | Si Dieu existe, il est cause ou raison du contingent. Deux lectures, cause ou raison ; sous FE, la raison de l'existence d'un contingent en un autre être est sa cause (T12), et les deux lectures coïncident pour l'existence. Ce qu'elles donnent ensemble est la lecture **directe** : pour tout contingent qui existe dans `s`, un être nécessaire en est cause dans `s` (la base minimale exclut les causes de causes : T12, D18). La lecture **par une suite**, tout contingent qui existe dans `s` y est relié à un être nécessaire par une suite finie d'êtres dont chacun est cause de l'existence du précédent, n'est ni une cause ni une raison au sens de D4 et D18 : `s1` désignée de domaine {`g`, `w`, `c`}, `s2` de domaine {`g`} ; `g` cause de `w` et `w` de `c` en `s1` ; `g` est nécessaire, `{Cause(w, c)}` suffit pour `E(c)`, et `g` n'est pas raison de l'existence de `c`. « Par intermédiaires » est à définir en M2 ; définition proposée : `y` est cause de l'existence de `x` par intermédiaires dans `s` s'il existe une suite finie `x = z0, …, zn = y`, `n ≥ 2`, où chaque `zi+1` est cause de l'existence de `zi` dans `s`. Esquisse, non démontrée : une raison nécessaire ne rend raison d'aucun contingent, sous cinq conditions : raisonnement par cas où chaque prémisse du socle est vraie dans toute situation, E1 et les observations exclus ; `□Q` donné, ou Q démontré du seul socle ; K et deux MP donnent `□C` ; `C = E(c)`, `c` le même objet partout ; contradiction avec D3 par le schéma de L2, puis A2. Question : qu'est-ce qui distingue une situation où un contingent existe d'une où il n'existe pas ? Formulation à étendre aux inévitables dépendants | M2 |
| Raison de l'être nécessaire | L'existence d'un être nécessaire a-t-elle une raison, ou n'en a-t-elle pas besoin ? Sans cause (D2), il n'en a qu'une raison de soi, ou une base `{□E(t)} ∪ C`, si M1 retient « toutes retenues » ou « retenues pour les seuls inévitables » (T12) | M1, M2 |
| Prémisse de possibilité | `◇G` et `◇¬G`, hypothèses de même rang ; routes vers une possibilité ; un fondement indépendant serait un axiome nouveau, avec paragraphe de refus et signalement ; que les deux routes soient les seules n'est pas démontré | M1 à M3 |
| Situation vide | Sv, signalée, sert `¬G` (T10). Remarque de l'utilisateur : « si vide, alors rien n'existe, même pas la logique ni les mathématiques, c'est juste néant ». Question, avec H1 et Nb : la logique est-elle une chose qui existe, ou une validité qui vaut sans objet ? | M6 |
| Nb | Un nombre n'est pas un être : hypothèse de l'utilisateur, indépendante du socle | M6 |
| Abs | Il existe au moins un objet abstrait qui existe dans toute situation et ne dépend de rien : signalée, sert `G` (instance de `G`) ; « abstrait » à définir ; que des ensembles soient des objets du langage objet est ouvert ; D19 ne compte pas la dépendance sans cause d'un ensemble envers ses membres. Avec Nb et H1 | M6 |
| Sens logique de « nécessaire » | T9 vaut tant que la base de concevabilité n'entraîne `E(a)` pour aucun nom `a` ; à revérifier si M6 admet un axiome qui l'entraîne | M6 |
| H1′ | Tout être nécessaire est nécessaire au sens logique : miroir de H1, signalée, sert `¬G` | M6 |
| H3 | Dieu est personnel | M4 |
| H4 | Dieu est bon | M5 |
| H1 | La validité de la logique dépend d'un être. Lecture matérielle triviale (T5) ; lecture stricte équivalente à l'existence d'un inévitable (T8). Lue avec D18 et sa clause de minimalité : si « la logique vaut » se démontre du socle, la seule base minimale est vide, et aucune base qui porte sur un être ne le rend intelligible ; H1 demande l'extension de la dépendance d'une validité annoncée pour M6 (D19, colonne « Écarté ») | M6 |
