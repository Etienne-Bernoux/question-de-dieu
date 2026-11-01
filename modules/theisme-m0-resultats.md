---
title: Examen du théisme — M0 résultats
type: knowledge
scope: perso
projet: []
domaine: [philosophie, logique]
tags: [theisme, modalite, existence, demonstration]
status: draft
updated: 2026-11-01
---

# M0 — Ce que la logique seule établit

Question : que peuvent établir les principes logiques et des définitions sur l'existence de quoi que ce soit ? Cadre utilisé : [[theisme-cadre]].

La logique seule n'établit ni l'existence ni l'inexistence de Dieu. Elle établit que :

- une définition ne produit qu'un « si... alors » (T1) ;
- « quelque chose existe » n'est pas une vérité logique (T2) ;
- sous les principes admis, toute la question se ramène à une prémisse sur ce qui est possible, que la logique ne tranche pas (T3).

Elle a aussi écarté deux sens de « nécessaire » (T4, T5). La suite doit instruire la prémisse de possibilité par d'autres voies que la logique pure.

## Résultats démontrés

### T0. La double négation exige le tiers exclu

`¬¬P ⊢ P` ne se dérive pas de A1, A2, A4 et des règles. Dans la matrice 1 ([[theisme-verifications]]), tous ceux-ci valent sous toute valuation et les règles ne mènent jamais d'un vrai à un non-vrai ; or pour la valeur intermédiaire `P = 1`, `¬P` vaut 0 et `¬¬P` vaut 2, désigné, tandis que `P` ne l'est pas. Conclure qu'une chose existe parce que sa non-existence est absurde exige donc A3.

### T1. Une définition ne livre qu'un conditionnel

Soit `X(x) ≝ F(x) ∧ E(x)`.

1. `∀x (X(x) ↔ F(x) ∧ E(x))` (définition).
2. `∀x (X(x) → E(x))` : dans toute interprétation où 1 est vraie, chaque objet qui a X a F et E, donc E.

`∃x X(x)` ne suit pas. Contre-modèle : un seul objet `a`, sans F ; 1 et 2 sont vraies, `∃x X(x)` est faux. Appliqué à D1 : la définition dit ce qu'il faudrait pour être Dieu, jamais qu'une telle chose existe ; contre-modèle : un seul objet, contingent.

### T2. « Quelque chose existe » n'est pas une vérité logique

1. Si toute interprétation a au moins un objet `d`, alors `d = d` (A1), donc `∃x (x = x)` est vrai dans toutes.
2. Si l'interprétation sans objet est admise, `∃x (x = x)` y est faux et `∀x F(x)` vrai ; chaque formule y reçoit une valeur et une seule.
3. La logique n'établit donc « quelque chose existe » qu'en excluant par décision le domaine vide. E1 est admis pour une autre raison ([[theisme-cadre]], §5).

### L1. `□(P → Q) → (◇P → ◇Q)`

1. `(P → Q) → (¬Q → ¬P)` (contraposition)
2. `□((P → Q) → (¬Q → ¬P))` (N)
3. `□(P → Q) → □(¬Q → ¬P)` (K, MP)
4. `□(¬Q → ¬P) → (□¬Q → □¬P)` (K)
5. `□(P → Q) → (□¬Q → □¬P)` (3, 4, enchaînement)
6. `(□¬Q → □¬P) → (¬□¬P → ¬□¬Q)` (contraposition), soit `◇P → ◇Q`
7. `□(P → Q) → (◇P → ◇Q)` (5, 6, enchaînement)

### L2. `◇¬G → ¬□G`

1. `G → ¬¬G` (A4)
2. `□G → □¬¬G` (N, K, MP)
3. `¬□¬¬G → ¬□G` (contraposition), soit `◇¬G → ¬□G`

### T3. La question se ramène à une prémisse de possibilité

Hypothèse P1 : `□(G → □G)`, « s'il existe un être nécessaire, il est nécessaire qu'il en existe un ».

Lemme L3 : si ne dépendre de rien appartient à la nature (D11) d'un être nécessaire, P1 est vraie. Soit `x` nécessaire dans la situation réelle : `x` existe dans toute situation possible et ne dépend de rien. (1) Par U, l'ensemble des situations est le même vu de toute situation ; « `x` existe dans toute situation possible » vaut donc vu de chacune. (2) Si ne dépendre de rien appartient à la nature de `x`, `x` ne dépend de rien dans chaque situation où il existe, c'est-à-dire dans toutes. (3) `x` est donc nécessaire vu de toute situation : `□G`. P1 se ramène ainsi à une seule question, renvoyée en M2 : ne dépendre de rien peut-il être un accident (D12) d'un être nécessaire ?

Branche du refus, prémisse `◇¬G` :

1. `G → □G` (P1, T, MP)
2. `¬□G → ¬G` (1, contraposition)
3. `¬□G` (`◇¬G`, L2, MP)
4. `¬G` (2, 3, MP)

Branche de l'acceptation, prémisse `◇G` :

5. `◇G → ◇□G` (P1, L1, MP)
6. `◇□G` (`◇G`, 5, MP)
7. `□G` (6, AM, MP)
8. `G` (7, T, MP)

| Résultat | Énoncé | Repose sur |
|---|---|---|
| T3a | « Dieu peut ne pas exister » entraîne « Dieu n'existe pas » | P1, N, K, T, A4 ; ni A3 ni U |
| T3b | « Dieu peut exister » entraîne « Dieu existe » | P1, N, K, T, U (via AM) ; ni A3 ni A4 |
| T3c | « Dieu peut exister » et « Dieu peut ne pas exister » ne peuvent être tenus ensemble | P1, N, K, T, A4, U |

### T4. Le sens logique de « nécessaire » réfute D1

Sens logique : `◇_L P` si une interprétation rend vrais les axiomes, les définitions et P. Le contre-modèle de T1 donne `◇_L ¬G`, et la branche du refus de T3 donne `¬G`. Réserve : N, K, T et L2 n'ont pas été vérifiés pour ce sens. C'est la raison pour laquelle D2 est pris au sens réel.

### T5. Une dépendance lue comme simple « si... alors » ne distingue rien

Soit `Dép(x) ≝ ¬E(x) → ¬L`, avec L « les lois logiques sont vraies ». L est vrai.

1. Si `E(x)`, `¬E(x)` est faux, donc `Dép(x)` est vrai (S).
2. Si `¬E(x)`, `Dép(x)` exigerait `¬L`, qui est faux, donc `Dép(x)` est faux (S).
3. Par A3 et SD : `Dép(x) ↔ E(x)`. Tout ce qui existe « dépendrait ».

H1 exige donc une relation de dépendance définie autrement, à fixer en M6.

### T6. « Concevable » n'entraîne pas « possible »

Sous P1, N, K, T, A4 et U, le principe « tout énoncé concevable (D17) est possible » mène à une contradiction.

1. `G` est concevable : une seule situation, un seul objet `a`, qui y existe et ne dépend de rien. `a` existe dans toute situation possible et ne dépend de rien : il est nécessaire. N, K, T et U sont vrais dans un modèle à une situation ; E1 aussi.
2. `¬G` est concevable : une seule situation, deux objets `a` et `b`, chacun dépendant de l'autre. Chacun dépend de quelque chose ; aucun n'est nécessaire.
3. Si tout concevable était possible : `◇G` (de 1) et `◇¬G` (de 2).
4. T3c : `◇G` et `◇¬G` donnent `G` et `¬G`, contre A2.

Réserve : 1 et 2 laissent « dépendre » libre, faute de définition (M6). T6 sera revérifié quand « dépendre » sera défini. Conséquence : aucun camp ne peut fonder sa prémisse de possibilité sur la seule concevabilité ; elle doit être établie autrement, en M1 à M3.

## Validité et conditions d'usage

Toutes les dérivations ci-dessus sont VALIDES : chaque pas cite sa règle. La solidité de T3 dépend de P1 et de la prémisse de possibilité, dont aucune n'est démontrée.

Deux pièges invalident T3 si on les ignore :

- **« Possible » doit garder le même sens partout.** Si « Dieu est possible » veut dire « pour ce que j'en sais », les lignes 5 à 8 ne s'appliquent pas. L'ignorance n'est pas une possibilité au sens de §1 du cadre.
- **P1 ne découle pas de D1 seule.** D1 dit d'un être `a` qu'il existe dans toute situation et ne dépend de rien. P1 exige que cela vaille vu de toute situation ; L3 montre que cela vaut si ne dépendre de rien appartient à la nature de `a`, ce que D1 n'affirme pas.

## Positions après M0

**Meilleure défense du refus.** Par T1, celui qui refuse n'a rien à affirmer. Sa position la plus forte est de soutenir « Dieu peut ne pas exister » : par T3a, cela suffit pour conclure qu'il n'existe pas, sans A3 ni U.

**Coûts de l'acceptation.** Sous U, « Dieu est possible » équivaut à « Dieu existe » (T3b, sous P1) : la possibilité n'est plus une concession bon marché, et « peut-être » ne peut se dire qu'au sens de l'ignorance, qui ne fait pas fonctionner T3. P1 n'est pas démontrée. Même en cas de succès, « Dieu existe » ne dira encore rien de sa personnalité ni de sa bonté (règle de lecture du cadre).

**Coût symétrique du refus.** « Dieu peut ne pas exister » doit être fondé autrement que par « je peux le concevoir ». Sinon, « Dieu peut exister » se fonde de la même manière, et par T3c les deux prémisses s'annulent.

## Transmis à la suite

| Énoncé | Contenu | Module |
|---|---|---|
| P1 | Ne dépendre de rien n'est pas un accident d'un être nécessaire (L3) | M2 |
| H2 | Si Dieu existe, il est cause ou raison du contingent | M2 |
| Raison de l'être nécessaire | L'existence d'un être nécessaire a-t-elle une raison, ou n'en a-t-elle pas besoin ? | M1, M2 |
| Prémisse de possibilité | `◇G` ou `◇¬G`, fondée autrement que par l'imagination | M1 à M3 |
| H3 | Dieu est personnel | M4 |
| H4 | Dieu est bon | M5 |
| H1 | La validité de la logique dépend d'un être ; « dépendre » à définir (T5) | M6 |
