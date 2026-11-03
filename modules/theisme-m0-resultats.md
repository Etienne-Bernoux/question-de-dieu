---
title: Examen du théisme — M0, ce que le socle établit sans observation
type: knowledge
scope: perso
projet: []
domaine: [philosophie, logique]
tags: [theisme, modalite, existence, demonstration]
status: draft
updated: 2026-11-03
---

# M0 — Ce que le socle établit sans observation (D15)

Question : que peut établir le socle (axiomes, définitions, termes premiers : [[theisme-cadre]], §4), sans observation, sur l'existence de quoi que ce soit ? Débat et verdicts : [[theisme-m0-debat]].

Le socle n'établit ni G ni ¬G : les modèles 1 et 2 de T6 le rendent vrai, E1 compris, l'un avec G, l'autre avec ¬G. « Dieu » s'entend au sens de D1, un être nécessaire, rien de plus (règle de lecture du cadre). Le socle établit que :

- une définition de la forme « F et E » ne produit qu'un « si... alors » (T1 ; principes logiques, §2) ;
- « quelque chose existe » n'est pas une vérité logique (T2 ; principes logiques, §2) ;
- s'il existe un être nécessaire, il est nécessaire qu'il en existe un (P1, L3) : cela découle de D2 ;
- la question se ramène donc à une prémisse de possibilité, qui pèse autant que la conclusion (T3d), et `G` est nécessaire ou impossible (T3e) ; T3 emploie de plus les principes modaux (§3).

T5 écarte la lecture matérielle de la dépendance ; sa lecture stricte se ramène à l'inévitabilité (T8). Le sens logique de « nécessaire » est vide (T9). La suite doit instruire `◇G` et `◇¬G` par d'autres voies que le socle seul.

## Résultats démontrés

Tous sont établis sans observation (D15). Niveau : « dérivation », par les règles de R ; « RC », par le raisonnement par cas (R) ; « modèle », par la construction d'un modèle ou d'un contre-modèle (§1). Les hypothèses citées sont dans la section suivante ; aucune n'est admise.

### T0. La double négation ne se dérive pas des règles seules

`¬¬P ⊢ P` ne se dérive pas de A1, A2, A4 et des règles de R autres que RC. Dans la matrice 1 ([[theisme-verifications]]), tous ceux-ci valent sous toute valuation et les règles ne mènent jamais d'un vrai à un non-vrai ; or pour la valeur intermédiaire `P = 1`, `¬P` vaut 0 et `¬¬P` vaut 2, désigné, tandis que `P` ne l'est pas. Sous B et S, `¬¬P ⊢ P` vaut (matrice 0). Conclure qu'une chose existe parce que sa non-existence est absurde repose donc sur B et S, pas sur les seules règles.

### T1. Une définition de la forme « F et E » ne livre qu'un conditionnel

Soit `X(x) ≝ F(x) ∧ E(x)`.

1. `∀x (X(x) ↔ F(x) ∧ E(x))` (définition).
2. `∀x (X(x) → E(x))` : dans tout modèle où 1 est vraie, chaque objet qui a X a F et E, donc E (RC : sens de `∧` et de `→`, S ; de `∀`, §1).

`∃x X(x)` ne suit pas. Contre-modèle : un seul objet `a`, sans F ; 1 et 2 sont vraies, `∃x X(x)` est faux. Appliqué à D1 : la définition dit ce qu'il faudrait pour être Dieu, jamais qu'une telle chose existe ; contre-modèle : le modèle 2 de T6.

### T2. « Quelque chose existe » n'est pas une vérité logique

1. Si tout modèle a, dans sa situation réelle, au moins un objet `d`, alors `d = d` (A1), donc `∃x (x = x)` y est vrai (§1, sens de `∃`).
2. Si un domaine vide est admis (§1), `∃x (x = x)` y est faux et `∀x F(x)` vrai ; chaque formule sans nom y reçoit une valeur et une seule. Une formule avec un nom exige que le modèle ait un objet, hors du domaine de cette situation (§1).
3. La logique n'établit donc « quelque chose existe » qu'en excluant par décision le domaine vide, que le §1 admet. E1 est démontré autrement, avec observation ([[theisme-cadre]], §5).

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

### L4. Un être inévitable mène à un être nécessaire, sous Pn_i, Pc et (b)

Énoncé : s'il existe un être inévitable (D20), alors `G`. RC, avec A3 pour les cas et l'arrêt. Pn_i, Pc et (b) sont des hypothèses signalées : elles servent la conclusion `G`.

1. Soit `x` qui existe dans toute situation possible.
2. Premier cas : dans toute situation possible, `x` ne dépend de rien (D19). Alors `x` est nécessaire (D2) : `G` (D1).
3. Second cas, négation du premier : dans au moins une situation, `x` dépend d'un `y`. Par Pn_i, `x` dépend de `y` dans toute situation possible ; par Pc, `y` existe dans chacune : `y` est inévitable.
4. Le même raisonnement s'applique à `y` : on construit pas à pas une suite d'êtres inévitables, chacun dépendant du suivant.
5. Par (b), cette suite a un dernier terme `z`, qui ne dépend de rien ; `z` est inévitable (3), et par Pn_i, dans toute situation possible, il ne dépend de rien : `z` est nécessaire (D2) : `G` (D1).

Repose sur Pn_i, Pc, (b) ; D1, D2, D19, D20, §1 (identité entre situations), A3, B, S, RC. Le second cas range aussi l'inévitable qui ne dépend de quelque chose que dans certaines situations, inévitable dépendant au sens de D20 ; sous Pn_i, cette classe est vide.

Sans Pn_i, l'étape 3 échoue : contre-modèle à deux situations `s1`, `s2`, où `x` existe dans les deux, causé dans `s1` par `a` qui n'existe que dans `s1`, et dans `s2` par `b` qui n'existe que dans `s2` ; rien n'est cause de `a` ni de `b`, et aucune raison ne fait dépendre un être d'un autre (T11 ; un renommage désigne la chose elle-même, D19 exige un être distinct) ; `G` est faux dans les deux situations. Chacun de `a` et `b` peut manquer, mais jamais les deux ensemble : de « `a` peut ne pas exister » et « `b` peut ne pas exister », on ne tire pas « il est possible que ni l'un ni l'autre n'existe » (glissement de quantificateur). L4 ne prouve pas `G` : E1 ne donne qu'un être qui existe dans la situation réelle, pas un être inévitable.

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

1. `G` est concevable : une seule situation, réelle, un seul objet `a`, qui y existe et ne dépend de rien. `a` existe dans toute situation possible et, dans chacune, ne dépend de rien : il est nécessaire. Le socle et E1 y sont vrais.
2. `¬G` est concevable : deux situations `s1` et `s2`, `s1` réelle ; un seul objet `a`, qui existe en `s1` et pas en `s2`. `a` n'existe pas dans toute situation possible : il n'est pas nécessaire, et rien d'autre n'existe. Le socle est vrai dans ce modèle ; E1 est vrai en `s1`.
3. Si tout concevable était possible : `◇G` (de 1) et `◇¬G` (de 2).
4. T3c : de `◇¬G`, `¬◇G`. On affirme `◇G` et `¬◇G` : A et non-A.

La relation de cause est vide dans les deux modèles ; dans le modèle 1, aucune chose distincte de `a` n'existe ni n'est nommée, si bien que `a` ne dépend de rien (D19), quelle que soit la raison que fixera M1. Repose sur P1 (L3), T3c, D1, D2, D17, D19, D20, A2, A4, N, K, T, U, R, B. Conséquence : aucun camp ne peut fonder sa prémisse de possibilité sur la seule concevabilité.

### T9. Le sens logique de « nécessaire » est vide

Aucune chose n'est nécessaire au sens logique, tant que la base de concevabilité (le socle et `∃x (x = x)`, D17) n'entraîne `E(a)` pour aucun nom `a`. Une chose est jugée par le nom que lui donne cette base. Modèle.

1. Soit `t` un terme absent de la base. Prendre le modèle 2 de T6 et y ajouter un objet, désigné par `t`, qui n'appartient au domaine d'aucune situation (§1 le permet).
2. La base y reste vraie : aucun de ses énoncés ne contient `t` (1). `∃x (x = x)` est vrai en `s1`, réelle, où `a` existe.
3. `¬E(t)` est vrai en `s1` : `¬E(t)` est concevable, la non-existence de ce que désigne `t` n'est pas contradictoire.
4. Une chose que la base ne nomme pas peut recevoir un nom nouveau, donc absent de la base ([[theisme-cadre]], §1, « Nommer ») : par 1 à 3, sa non-existence est concevable.
5. Une chose que la base nomme `a` : la base n'entraîne pas `E(a)` (condition), donc un modèle de la base rend `E(a)` faux, et `¬E(a)` est concevable (D17).
6. Aucune chose n'est donc nécessaire au sens logique.

La condition porte sur ce que la base entraîne, non sur ce qu'elle affirme : `∀x (x = a)`, joint à `∃x (x = x)`, entraînerait `E(a)` sans l'affirmer. Elle est remplie : A1 et D8 sont des schémas. Prendre ce sens trancherait `¬G` par définition. Si au contraire tout nom désignait un objet de chaque domaine, `∃x (x = t)` serait une vérité logique et toute chose nommée serait nécessaire en ce sens, qui ne distinguerait plus rien. Repose sur §1 (modèle, identité, noms, règle « Nommer »), D8, D17. Ce résultat est le motif qui écarte le sens logique par la règle de symétrie (contrainte 9 du [[theisme-protocole]] ; [[theisme-cadre]], D2) ; il ne le réfute pas.

### T10. Une situation vide possible entraîne `□¬G`

Si une situation possible a un domaine vide, `□¬G`, sans P1. RC.

1. Soit `s0` une situation possible dont le domaine est vide : rien n'y existe (D8).
2. Par U, `s0` compte parmi les situations possibles de partout : aucun être n'existe dans toute situation possible, aucun n'est inévitable (D20), aucun n'est nécessaire (D2).
3. Dans toute situation possible, `G` est donc faux : `□¬G` (§1) ; par T, `¬G`.

Repose sur U, D1, D2, D8, D20, T, B, S, §1, RC ; ni l'identité entre situations ni D19. Une situation vide dans un modèle de concevabilité (§1) n'affirme rien de tel : elle ne témoigne que de ce que `¬◇G` est concevable.

### T11. Aucun universel sans nom ne rend raison de l'existence d'une chose nommée

`E(x)` ne se démontre, avec le socle, d'aucune base faite d'universels clos sans nom et d'énoncés atomiques, ou de leurs négations, dont aucun n'est de la forme `E(t)`. Modèle.

1. Soit un modèle où la base est vraie dans `s` et où l'objet `o` que désigne `x` appartient au domaine de `s`.
2. Remplacer `o`, dans le domaine de chaque situation où `o` figure, par une copie `o′` sans nom, avec, dans toute situation, les mêmes extensions que `o` à chaque place de chaque propriété et de chaque relation : `o′` a les propriétés de `o` ; pour tout objet `b` autre que `o` et `o′`, `(o′, b)` et `(b, o′)` sont dans une relation exactement quand `(o, b)` et `(b, o)` y sont ; et avec lui-même, `(o′, o′)` comme `(o, o)` ; `x` désigne toujours `o`, désormais hors de tout domaine (§1 le permet).
3. Les universels sans nom, modaux compris, gardent leur valeur, les domaines ne changeant que par la copie ; les énoncés atomiques gardent la leur, les extensions portant sur les objets du modèle (§1) et aucun n'étant de la forme `E(t)` ; `E(x)` devient faux.
4. La base est vraie dans `s` et `E(x)` faux : `E(x)` ne se démontre pas de la base.

Avec un énoncé `E(t)`, seule une chaîne d'identités de `t` à `x` donne `E(x)`. Preuve : sinon, envoyer `x` et les noms qui lui sont reliés par identité dans la base vers un objet nouveau, hors de tout domaine, de mêmes extensions dans toute situation, paires avec `o` comprises ; la base reste vraie, aucun `E(t)` de la base ne le désigne, et `E(x)` est faux. C'est le renommage : pour `E(x)`, le paramètre « raisons de soi » de D18 (M1) en décide, et son nom désigne la chose elle-même, non un être distinct (D19). Un universel rend raison de ce qu'une chose soit ainsi (D5), jamais de ce qu'une chose nommée existe. Limite : la preuve couvre les propriétés et la relation binaire de cause, seules admises ; si un module admet une relation à n places, l'étape 2 se reformule par n-uplets, la copie remplaçant `o` à chaque place. Repose sur §1 (noms hors domaine, extensions), D8, D18.

## Hypothèses de M0

Aucune n'est admise (contrainte 8 du [[theisme-protocole]]). « Signalée » : elle sert une conclusion, `G` ou `¬G`.

**Pn** : qu'un être dépende ou non d'un autre (D19), et duquel, appartient à sa nature (D11) ; cela ne varie pas d'une situation possible à l'autre. Pn entraîne Pn_i. Signalée, sert `G`. Candidate comme axiome pour M2 seulement avec un paragraphe de refus, qui reste à écrire.

**Pn_i** : pour tout être inévitable `x` et tout être `y`, que `x` dépende ou non de `y` ne varie pas d'une situation possible à l'autre. Signalée, sert `G` (L4). **Si tu la nies**, tu admets un inévitable dont la dépendance varie d'une situation à l'autre : il n'est pas nécessaire (D2), et L4 perd son étape 3 (contre-modèle de L4). P1 n'en dépend pas (L3).

**Pc** : si `y` est cause ou raison de l'existence de `x` dans une situation, `y` existe dans cette situation. Signalée, sert `G` (L4). Sa part « raison » est en attente de M1 (D18). Paragraphe de refus à écrire pour M2.

**(b)** : toute suite d'êtres dont chacun dépend du suivant a un dernier terme, qui ne dépend de rien. Signalée, sert `G` (L4). Examinée en M1.

**(c′)** : les êtres contingents se combinent librement : pour tout ensemble d'êtres contingents, une situation possible où aucun n'existe. Signalée. Elle n'entraîne ni `G` ni `◇G`, même avec Pc, (b) et un inévitable : `s0` réelle, de domaine {`x`, `a`}, et `s*`, de domaine {`x`} ; `a` est cause de `x` en `s0`, et rien n'est cause de `x` en `s*` ; rien n'est cause de `a`. (c′), Pc, (b) et E1 sont vrais, `x` est inévitable ; `x` dépend de `a` en `s0`, donc n'est pas nécessaire (D2), et `G` est faux dans les deux situations. « Se combinent librement » et sa portée restent à définir.

**`◇G` et `◇¬G`** : hypothèses de même rang. Par T3d, chacune pèse autant que la conclusion qu'elle sert. **Si tu nies `◇G`**, tu poses que `G` est impossible : par T3d, cela revient à poser `¬G`, avec sa charge entière ; ce n'est pas suspendre. **Si tu nies `◇¬G`**, tu poses que `G` est vrai dans toute situation possible (§1, B) : par T, cela revient à poser `G`, avec sa charge entière.

**Routes vers une possibilité.** Le cadre donne deux routes vers `◇Q`, qui valent sans P1 : de Q, par L5 ; de `□(P → Q)` et `◇P`, par L1. Tirée d'un fait, la première redonne le fait : fonder `◇G` sur `G` suppose `G`. Que ces deux routes soient les seules n'est pas démontré.

**Sv** : une situation possible est vide. Signalée, sert `¬G` : elle entraîne `□¬G` sans P1 (T10), et elle est plus forte que `◇¬G`. **Si tu la nies**, tu poses que toute situation possible contient au moins une chose. Aucune contradiction : le modèle 1 de T6 n'a aucune situation vide. Ce refus n'entraîne pas `G` : deux situations, `s1` réelle de domaine {`a`}, `s2` de domaine {`b`}, sans cause ; aucune n'est vide, aucun être n'est inévitable, `G` est faux dans les deux.

**Pr** : toute chose a une raison (D5), hors d'elle ou dans sa nature (D11). **Pr_c** : tout contingent (D9) a une raison (D5). Examinées en M1 ; Pr_c est en attente de M1, qui fixe la raison d'exister (D18). Aucun universel sans nom ne rend raison de l'existence d'une chose nommée (T11). **Si tu nies Pr**, tu admets qu'au moins une chose n'a pas de raison ; si elle n'a pas non plus de cause, c'est un fait brut (D6). **Si tu nies Pr_c**, tu admets un contingent sans raison, fait brut s'il est aussi sans cause. Aucune contradiction n'en est démontrée en M0 ; le coût est métaphysique, et son examen relève de M1.

**Nb**, hypothèse de l'utilisateur : un nombre n'est pas un être ; lue : aucun nombre n'existe (D8) dans aucune situation possible. Elle est indépendante du socle : un modèle où aucun domaine ne contient de nombre et un modèle où un domaine en contient un rendent tous deux le socle vrai, « nombre » étant un prédicat sans axiome ([[theisme-cadre]], §4). Examinée en M6. **Si tu la nies**, un nombre existe dans au moins une situation. S'il existait dans toute situation possible et ne dépendait de rien, il serait nécessaire (D2), donc Dieu au sens de D1 ; qu'un nombre qui existe soit pour autant inévitable n'est pas démontré, N ne portant pas sur l'arithmétique. Aucune contradiction n'en est démontrée.

**H1′**, miroir de H1 : tout être nécessaire (D2) est nécessaire au sens logique. Signalée, sert `¬G` : jointe à T9, elle donne exactement `¬G`, ce que trancherait le sens logique écarté de D2 ; elle est le miroir de H1 au sens de la contrainte 9 du [[theisme-protocole]]. La lecture « tout être inévitable est nécessaire au sens logique » est écartée : jointe à T9, elle trancherait davantage, en vidant l'antécédent de L4. Examinée en M6. **Si tu la nies**, tu affirmes qu'un être nécessaire existe sans être nécessaire au sens logique : c'est affirmer `G` (D1), avec sa charge entière. L'écarter sans la nier laisse `G` ouvert.

## Validité et conditions d'usage

La validité de chaque pas a été contrôlée par le vérificateur au passage de M0 ; les pas modifiés attendent son recontrôle ([[theisme-m0-debat]]). La solidité de T3 dépend de la prémisse de possibilité, qui n'est pas démontrée.

Deux pièges invalident T3 si on les ignore :

- **« Possible » doit garder le même sens partout.** Si « Dieu est possible » veut dire « pour ce que j'en sais », les lignes 4 à 6 ne s'appliquent pas. L'ignorance n'est pas une possibilité au sens du cadre (§1).
- **P1 dépend de la lecture de D2.** D2 exige qu'un être nécessaire ne dépende de rien dans toute situation possible, et P1 en découle (L3). Si D2 n'exigeait de ne dépendre de rien que dans la situation considérée, P1 ne découlerait pas de D1 : modèle B, `s1` réelle de domaine {`a`}, `s2` de domaine {`a`, `b`}, `b` est cause de `a` en `s2` ; `a` serait nécessaire en `s1`, aucun être ne le serait en `s2`, et P1 serait fausse.

## Positions après M0

1. **Commun à tous.** P1 découle de D2 (L3) et pèse de même sur les deux camps. T3a à T3e valent : `G` est nécessaire ou impossible. « Peut-être » au sens modal disparaît des deux côtés : seul reste le sens d'ignorance, qui ne fait pas fonctionner T3. `◇G ∧ ◇¬G` est exclu (T7).
2. **Affirmer `G`.** Charge entière (contrainte 7 du [[theisme-protocole]]). Revient à poser `◇G`, qui pèse autant que `G` (T3d) ; tout fondement de `◇G` tiré d'un fait redonne `G` (routes vers une possibilité) ; la concevabilité ne suffit pas (T6) ; la route compte une hypothèse, `◇G`. `G` ne dit rien de H3 ni de H4.
3. **Affirmer `¬G`.** Même charge. `¬G`, `◇¬G` et `¬◇G` s'entraînent : c'est une thèse d'impossibilité. Le cadre ne lui donne aucune source : L5 donne `◇P`, pas `□P` ; T6 ; les modèles 1 et 2 de T6. La route compte une hypothèse, `◇¬G` ; Sv, plus forte, la donnerait (T10) et porte le même signalement que les hypothèses qui servent `G`.
4. **Affirmer `¬P1`, ou `◇G ∧ ◇¬G`.** Aucun modèle ne le rend vrai (L3, T7) : l'affirmer, c'est refuser D2 telle qu'elle est écrite, l'identité entre situations ou U. Sous la lecture de D2 que le cadre écarte, `¬P1` serait cohérente (modèle B) et reviendrait à affirmer `◇G ∧ ◇¬G` (T7), soit deux hypothèses de possibilité.
5. **Suspendre (écarter sans nier).** Aucune charge sur `G` (T1 ; modèles 1 et 2 de T6) ; celui qui suspend porte celle de ses propres assertions. Coût : aucune conclusion sur `G`. La suspension n'engage aucun des coûts des rubriques 2 à 4.

## Transmis à la suite

| Énoncé | Contenu | Module |
|---|---|---|
| Pn, Pn_i | Pn entraîne Pn_i ; L4 n'emploie que Pn_i ; Pn candidate seulement avec son paragraphe de refus ; signalées, elles servent `G` | M2 |
| Pc | Une cause ou une raison existe dans la situation où elle est cause ou raison ; paragraphe de refus à écrire ; signalée | M2 |
| (c′) | N'entraîne ni `G` ni `◇G` ; « se combinent librement » et sa portée à définir ; signalée | M2 |
| Existe-t-il un être inévitable ? | Condition de L4 ; le contingent l'exige-t-il ? | M2 |
| (b) | Toute suite d'êtres dont chacun dépend du suivant a un dernier terme, qui ne dépend de rien | M1 |
| Pr, Pr_c | Toute chose a une raison ; tout contingent a une raison. Pr_c en attente de M1 | M1 |
| Raison d'exister | M0 ne la définit pas. D18 garde deux paramètres : les universels admis et les raisons de soi admises. En attente : D6, Pr_c, la part « raison » de D19 et de Pc. Aucun universel sans nom ne rend raison de l'existence d'une chose nommée (T11) | M1 |
| Loi et coïncidence | Un universel vrai par coïncidence compte comme loi dans une base de raison (D18) ; les distinguer | M1 |
| Unicité | Plusieurs êtres nécessaires seraient chacun Dieu au sens de D1 ; leur regroupement est à examiner ; « tout » et « partie » d'un être ne sont pas définis | M4 |
| H2 | Si Dieu existe, il est cause ou raison du contingent. Deux lectures, cause ou raison. Une raison nécessaire ne rend raison d'aucun contingent, sous cinq conditions : raisonnement par cas où chaque prémisse du socle est vraie dans toute situation, E1 et les observations exclus ; `□Q` donné, ou Q démontré du seul socle ; K et deux MP donnent `□C` ; `C = E(c)`, `c` le même objet partout ; contradiction avec D3 par le schéma de L2, puis A2. Question : qu'est-ce qui distingue une situation où un contingent existe d'une où il n'existe pas ? Formulation à étendre aux inévitables dépendants | M2 |
| Raison de l'être nécessaire | L'existence d'un être nécessaire a-t-elle une raison, ou n'en a-t-elle pas besoin ? | M1, M2 |
| Prémisse de possibilité | `◇G` et `◇¬G`, hypothèses de même rang ; routes vers une possibilité ; un fondement indépendant serait un axiome nouveau, avec paragraphe de refus et signalement ; que les deux routes soient les seules n'est pas démontré | M1 à M3 |
| Situation vide | Sv, signalée, sert `¬G` (T10). Remarque de l'utilisateur : « si vide, alors rien n'existe, même pas la logique ni les mathématiques, c'est juste néant ». Question, avec H1 et Nb : la logique est-elle une chose qui existe, ou une validité qui vaut sans objet ? | M6 |
| Nb | Un nombre n'est pas un être : hypothèse de l'utilisateur, indépendante du socle | M6 |
| Sens logique de « nécessaire » | T9 vaut tant que la base de concevabilité n'entraîne `E(a)` pour aucun nom `a` ; à revérifier si M6 admet un axiome qui l'entraîne | M6 |
| H1′ | Tout être nécessaire est nécessaire au sens logique : miroir de H1, signalée, sert `¬G` | M6 |
| H3 | Dieu est personnel | M4 |
| H4 | Dieu est bon | M5 |
| H1 | La validité de la logique dépend d'un être. Lecture matérielle triviale (T5) ; lecture stricte équivalente à l'existence d'un inévitable (T8). Lue avec D18, H1 est dégénérée sans clause d'indispensabilité de Q : si « la logique vaut » se démontre sans Q, n'importe quel Q le rend intelligible | M6 |
