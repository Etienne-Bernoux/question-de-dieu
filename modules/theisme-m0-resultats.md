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

- une définition de la forme « F et E » ne produit qu'un « si... alors » (T1) ;
- « quelque chose existe » n'est pas une vérité logique (T2) ;
- sous l'hypothèse P1, toute la question se ramène à une prémisse sur ce qui est possible, que la logique ne tranche pas (T3).

Elle a aussi écarté deux sens de « nécessaire » (T4, T5). La suite doit instruire P1 et la prémisse de possibilité par d'autres voies que la logique pure.

## Résultats démontrés

« Sous hypothèse P1 » signifie : la dérivation compte P1 parmi ses prémisses ; le résultat ne vaut que si P1 est vraie (contrainte 8 du [[theisme-protocole]]).

### T0. La double négation ne se dérive pas des règles seules

`¬¬P ⊢ P` ne se dérive pas de A1, A2, A4 et R. Dans la matrice 1 ([[theisme-verifications]]), tous ceux-ci valent sous toute valuation et les règles ne mènent jamais d'un vrai à un non-vrai ; or pour la valeur intermédiaire `P = 1`, `¬P` vaut 0 et `¬¬P` vaut 2, désigné, tandis que `P` ne l'est pas. Sous B et S, `¬¬P ⊢ P` vaut (matrice 0). Conclure qu'une chose existe parce que sa non-existence est absurde repose donc sur B et S, pas sur les seules règles.

### T1. Une définition de la forme « F et E » ne livre qu'un conditionnel

Soit `X(x) ≝ F(x) ∧ E(x)`.

1. `∀x (X(x) ↔ F(x) ∧ E(x))` (définition).
2. `∀x (X(x) → E(x))` : dans toute interprétation où 1 est vraie, chaque objet qui a X a F et E, donc E.

`∃x X(x)` ne suit pas. Contre-modèle : un seul objet `a`, sans F ; 1 et 2 sont vraies, `∃x X(x)` est faux. Appliqué à D1 : la définition dit ce qu'il faudrait pour être Dieu, jamais qu'une telle chose existe ; contre-modèle : un seul objet, contingent.

### T2. « Quelque chose existe » n'est pas une vérité logique

1. Si toute interprétation a au moins un objet `d`, alors `d = d` (A1), donc `∃x (x = x)` est vrai dans toutes.
2. Si l'interprétation sans objet est admise, `∃x (x = x)` y est faux et `∀x F(x)` vrai ; chaque formule y reçoit une valeur et une seule.
3. La logique n'établit donc « quelque chose existe » qu'en excluant par décision le domaine vide. E1 est démontré autrement, avec observation ([[theisme-cadre]], §5).

### L1. `□(P → Q) → (◇P → ◇Q)`

1. `(P → Q) → (¬Q → ¬P)` (contraposition)
2. `□((P → Q) → (¬Q → ¬P))` (N)
3. `□(P → Q) → □(¬Q → ¬P)` (K, MP)
4. `□(¬Q → ¬P) → (□¬Q → □¬P)` (K)
5. `□(P → Q) → (□¬Q → □¬P)` (3, 4, enchaînement)
6. `(□¬Q → □¬P) → (¬□¬P → ¬□¬Q)` (contraposition), soit `(□¬Q → □¬P) → (◇P → ◇Q)`
7. `□(P → Q) → (◇P → ◇Q)` (5, 6, enchaînement)

### L2. `◇¬G → ¬□G`

1. `G → ¬¬G` (A4)
2. `□G → □¬¬G` (N, K, MP)
3. `¬□¬¬G → ¬□G` (2, contraposition, MP), soit `◇¬G → ¬□G`

### L3. Une condition suffisante de P1

Hypothèse P1 : `□(G → □G)`, « s'il existe un être nécessaire, il est nécessaire qu'il en existe un ».

Si ne dépendre de rien appartient à la nature (D11) de tout être nécessaire, P1 est vraie.

1. Soit `s` une situation possible où `G` est vrai, et `x` un être nécessaire en `s` : `x` existe dans toute situation possible et ne dépend de rien.
2. Par U, l'ensemble des situations possibles ne dépend pas de `s` : « `x` existe dans toute situation possible » vaut quelle que soit la situation considérée.
3. Ne dépendre de rien appartient à la nature de `x` : `x` ne dépend de rien dans chaque situation où il existe, c'est-à-dire dans toutes.
4. `x` est donc nécessaire dans toute situation : `□G` est vrai en `s`.
5. Le raisonnement vaut pour toute situation `s` où `G` est vrai : `G → □G` est vrai dans toute situation, soit P1.

P1 découle de L3 si ne dépendre de rien n'est pas un accident (D12) d'un être nécessaire ; cette question passe en M2.

### T3. Sous P1, la question se ramène à une prémisse de possibilité

Toutes les lignes ont P1 parmi leurs prémisses.

1. `G → □G` (P1, T, MP)
2. `¬□G → ¬G` (1, contraposition, MP)
3. `◇¬G → ¬G` (L2, 2, enchaînement) : **T3a**
4. `◇G → ◇□G` (P1, L1, MP)
5. `◇G → □G` (4, AM, enchaînement)
6. `◇G → G` (5, T, enchaînement) : **T3b**
7. `¬G → ¬◇G` (6, contraposition, MP)
8. `◇¬G → ¬◇G` (3, 7, enchaînement) : **T3c**

| Résultat | Énoncé | Repose sur |
|---|---|---|
| T3a | « Dieu peut ne pas exister » entraîne « Dieu n'existe pas » | hypothèse P1 ; N, K, T, A4, R ; ni A3 ni U |
| T3b | « Dieu peut exister » entraîne « Dieu existe » | hypothèse P1 ; N, K, T, U (via AM), R ; ni A3 ni A4 |
| T3c | « Dieu peut ne pas exister » entraîne « Dieu ne peut pas exister » | hypothèse P1 ; N, K, T, A4, U, R |

### T4. Le sens logique de « nécessaire » mène à une contradiction, sous P1 et sous réserve

Sens logique : `◇_L P` si une interprétation rend vrais les axiomes, les définitions et P ; il coïncide avec « concevable » (D17).

1. `◇_L G` et `◇_L ¬G` : les modèles des lignes 1 et 2 de T6.
2. T3c, lu avec `◇_L` : de `◇_L ¬G`, `¬◇_L G`.
3. On affirme `◇_L G` et `¬◇_L G` : A et non-A.

Réserve : N, K, T, A4 et AM n'ont pas été vérifiés pour ce sens. Ce résultat est la raison pour laquelle D2 est pris au sens réel.

### T5. Une dépendance lue comme simple « si... alors » ne distingue rien

Soit `Dép(x) ≝ ¬E(x) → ¬L`, avec L « les lois logiques sont vraies ». L est vrai. Calcul sous B et S :

1. Si `E(x)` est vrai, `¬E(x)` est faux, donc `Dép(x)` est vrai.
2. Si `E(x)` est faux, `Dép(x)` exigerait `¬L`, qui est faux, donc `Dép(x)` est faux.
3. Dans tous les cas, `Dép(x)` a la valeur de `E(x)` : tout ce qui existe « dépendrait ».

H1 exige donc une relation de dépendance définie autrement, à fixer en M6.

### T6. « Concevable » n'entraîne pas « possible », sous P1

Le principe « tout énoncé concevable (D17) est possible » mène à une contradiction.

1. `G` est concevable : une seule situation, un seul objet `a`, qui y existe et ne dépend de rien. `a` existe dans toute situation possible et ne dépend de rien : il est nécessaire. N, K, T et U sont vrais dans un modèle à une situation ; E1 aussi.
2. `¬G` est concevable : deux situations `s1` et `s2`, toutes deux possibles ; un seul objet `a`, qui existe en `s1` et pas en `s2`. `a` n'existe pas dans toute situation possible : il n'est pas nécessaire, et rien d'autre n'existe. N, K, T et U sont vrais dans ce modèle ; E1 est vrai en `s1`.
3. Si tout concevable était possible : `◇G` (de 1) et `◇¬G` (de 2).
4. T3c : de `◇¬G`, `¬◇G`. On affirme `◇G` et `¬◇G` : A et non-A.

Les relations de cause et de raison sont vides dans le modèle 1, si bien que `a` ne dépend de rien (D19). Conséquence, sous P1 : aucun camp ne peut fonder sa prémisse de possibilité sur la seule concevabilité.

## Validité et conditions d'usage

La validité de chaque pas sera établie par le vérificateur formel au passage de M0 devant la population. La solidité de T3 dépend de P1 et de la prémisse de possibilité, dont aucune n'est démontrée.

Deux pièges invalident T3 si on les ignore :

- **« Possible » doit garder le même sens partout.** Si « Dieu est possible » veut dire « pour ce que j'en sais », les lignes 4 à 6 ne s'appliquent pas. L'ignorance n'est pas une possibilité au sens du cadre (§1).
- **P1 ne découle pas de D1 seule.** D1 dit d'un être qu'il existe dans toute situation et ne dépend de rien. P1 exige que cela vaille dans toute situation ; L3 montre que cela vaut si ne dépendre de rien appartient à sa nature, ce que D1 n'affirme pas.

## Positions après M0

**Meilleure défense du refus.** Par T1, celui qui refuse n'a rien à affirmer. S'il soutient « Dieu peut ne pas exister », T3a lui donne, sous P1, « Dieu n'existe pas », sans A3 ni U ; il porte alors la charge de cette prémisse (contrainte 7).

**Coûts de l'acceptation.** Sous P1 et U, « Dieu est possible » entraîne « Dieu existe » (T3b) : la possibilité n'est plus une concession bon marché, et « peut-être » ne peut se dire qu'au sens de l'ignorance, qui ne fait pas fonctionner T3. P1 n'est pas démontrée. Même en cas de succès, « Dieu existe » ne dira rien de sa personnalité ni de sa bonté : D1 ne contient ni H3 ni H4.

**Coût symétrique du refus.** « Dieu peut ne pas exister » doit être fondé autrement que par « je peux le concevoir ». Sinon « Dieu peut exister » se fonde de la même manière, et, sous P1, T3c rend les deux prémisses contradictoires.

## Transmis à la suite

| Énoncé | Contenu | Module |
|---|---|---|
| P1 | Découle de L3 si ne dépendre de rien n'est pas un accident d'un être nécessaire | M2 |
| H2 | Si Dieu existe, il est cause ou raison du contingent | M2 |
| Raison de l'être nécessaire | L'existence d'un être nécessaire a-t-elle une raison, ou n'en a-t-elle pas besoin ? | M1, M2 |
| Prémisse de possibilité | `◇G` ou `◇¬G`, fondée autrement que par la seule concevabilité | M1 à M3 |
| H3 | Dieu est personnel | M4 |
| H4 | Dieu est bon | M5 |
| H1 | La validité de la logique dépend d'un être ; « dépendre » à définir (T5) | M6 |
