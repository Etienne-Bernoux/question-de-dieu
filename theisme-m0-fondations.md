---
title: Examen du théisme — M0 Fondations
type: knowledge
scope: perso
projet: []
domaine: [philosophie, logique]
tags: [theisme, modalite, definitions, existence]
status: draft
updated: 2026-11-01
---

# M0 — Fondations

Protocole : [[theisme-protocole]]. Registre : [[theisme-registre]]. Chaque énoncé porte sa provenance entre crochets : [Brief], [Stipulation], [Démontré ici] (cf. contrainte 6 du protocole). Aucun énoncé de M0 ne repose sur une source externe.

## 1. Question

Que peuvent établir les seuls axiomes logiques et des définitions sur l'existence de quoi que ce soit, et quelles définitions retient-on pour la suite ?

## 2. Argument formalisé (formalisateur)

### Notation [Stipulation]

`P`, `Q` : propositions. `F(x)` : « x a la propriété F ». `∃x F(x)` : « au moins une chose a F ». `□P` : « il est nécessaire que P ». `◇P ≝ ¬□¬P` : « il est possible que P ». `P ↔ Q ≝ (P → Q) ∧ (Q → P)`. `G` : `∃x Dieu(x)`, « Dieu au sens de D1 existe ».

Une **interprétation** est un domaine d'objets et une attribution, à chaque propriété, de l'ensemble des objets qui l'ont. `∃x F(x)` est vrai dans une interprétation si au moins un objet du domaine a F ; `∀x F(x)` si tous l'ont. Une inférence est **invalide** s'il existe une interprétation où ses prémisses sont vraies et sa conclusion fausse (contre-modèle).

### Axiomes logiques

- A1 Identité : `a = a` ; `P → P`. [Brief]
- A2 Non-contradiction : `¬(P ∧ ¬P)`. [Brief]
- A3 Tiers exclu : `P ∨ ¬P`. [Brief]
- A4 Introduction de la double négation : `P → ¬¬P`. [Stipulation, nécessaire à L2 ; T0 montre qu'elle n'apporte pas A3]

Règles d'inférence [Brief pour leur liste ouverte, « modus ponens, modus tollens, syllogisme disjonctif, etc. »] : modus ponens (MP), modus tollens (MT), syllogisme disjonctif (SD), élimination de la conjonction, enchaînement (`P → Q`, `Q → R` ⊢ `P → R`), contraposition `(P → Q) → (¬Q → ¬P)`, absurde négatif `(P → (Q ∧ ¬Q)) → ¬P`. Pas de preuve conditionnelle (raisonner sous hypothèse) : elle n'est pas couverte par la démonstration T0. L'élimination de la double négation (`¬¬P ⊢ P`) n'en fait pas partie : T0 montre qu'elle ne se dérive pas des précédentes sans A3.

### Axiomes modaux [Stipulation, à statuer]

- N Nécessitation : si `P` est démontré à partir des seuls axiomes, alors `□P` est démontré.
- K Distribution : `□(P → Q) → (□P → □Q)`.
- T Factivité : `□P → P`.
- AM : `◇□P → □P`, lu littéralement : « s'il est possible que P soit nécessaire, alors P est nécessaire ».

### Définitions

| ID | Terme | Définition | Provenance |
|---|---|---|---|
| D1 | Dieu | `x` est Dieu ≝ `x` existe par soi : `x` est nécessaire (D2) et la raison (D5) de son existence est sa propre nature | Brief, révisé le 2026-11-01 (arbitrage D1) : « cause du monde », « personnel », « bon » sortent de la définition et deviennent les thèses H2, H3, H4. Tant que M4 et M5 ne sont pas faits, « Dieu existe » signifie seulement « un être qui existe par soi existe » |
| D2 | Nécessaire | qui ne peut pas ne pas exister, au sens réel : il ne dépend de rien pour exister, et aucune situation possible ne le prive d'existence ; affirmer « il n'existe pas » n'est pas pour autant contradictoire | Brief, confirmé Q2 ; sens réel retenu en Q2bis |
| D3 | Contingent | qui pourrait ne pas exister | Brief |
| D4 | Cause | ce qui produit l'existence ou l'occurrence d'autre chose | Stipulation : restriction de la définition du brief (« ce qui rend raison ») à la production |
| D5 | Raison | ce qui rend intelligible qu'une chose soit, ou soit ainsi | Stipulation : l'autre moitié de la définition du brief |
| D6 | Fait brut | ce qui existe ou a lieu sans cause ni raison | Brief, relu avec D4 et D5 |
| D7 | Monde | tout ce qui existe, à quelque moment que ce soit ou hors du temps ; les choses seulement possibles qui n'existent jamais en sont exclues | Brief (Q4bis-1) ; « temps » sera défini en M3 |
| D8 | Exister | `a` existe ≝ `∃x (x = a)`, lu sans indication de temps : ce qui a existé ou existera existe en ce sens | Stipulation, précisée en Q4bis-1 |
| D9 | Le contingent | tout ce qui existe sans être nécessaire | Stipulation (Q4bis-2) |

### Thèses

**T0. La double négation ne se dérive pas sans A3.** [Démontré ici] Matrice à trois valeurs `{0, ½, 1}`, seule la valeur 1 est « désignée » (tenue pour vraie). `¬a = 1` si `a = 0`, sinon `0`. `a ∧ b = min(a, b)`, `a ∨ b = max(a, b)`. `a → b = 1` si `a ≤ b`, sinon `b`.

1. A1, A2, A4, contraposition, absurde négatif valent 1 sous toutes les valuations ; MP, MT, SD, l'élimination de la conjonction et l'enchaînement ne mènent jamais, dans une même valuation, de prémisses désignées à une conclusion non désignée. Donc, valuation par valuation, tout ce qui se dérive de ces axiomes par ces règles vaut 1.
2. Pour `P = ½` : `¬¬P = ¬0 = 1` est désigné, `P = ½` ne l'est pas. `P ∨ ¬P = max(½, 0) = ½` non plus.
3. Donc ni `¬¬P ⊢ P` ni A3 ne se dérivent de A1, A2 et des règles.

Vérifié par énumération exhaustive (3, 9 ou 27 valuations selon le nombre de variables), script en annexe. Conséquence : conclure qu'une chose **existe** parce que sa non-existence est absurde exige A3.

**T1. Une définition ne livre qu'un conditionnel.** [Démontré ici] Soit `X(x) ≝ F(x) ∧ E(x)`, où `E` peut être « existe » ou « existe nécessairement ».

1. `∀x (X(x) ↔ F(x) ∧ E(x))` (définition)
2. `∀x (X(x) → E(x))` (de 1, sémantiquement : dans toute interprétation où 1 est vraie, chaque objet qui a X a F et E, donc E)

`∃x X(x)` ne suit pas. Contre-modèle : domaine `{a}`, `a` n'a pas F. La conjonction `F(a) ∧ E(a)` est fausse quel que soit `E(a)`, donc `X(a)` est faux, les lignes 1 et 2 sont vraies, `∃x X(x)` est faux. Appliqué à D1 avec F = « la raison de son existence est sa nature » et E = « est nécessaire » : on obtient « tout ce qui est Dieu est nécessaire », jamais « quelque chose est Dieu ».

**T2. « Quelque chose existe » dépend du choix des interprétations admises.** [Démontré ici]

1. Si toute interprétation a un domaine non vide : soit `d` un objet du domaine ; `d = d` (A1) ; donc `∃x (x = x)` est vrai dans toute interprétation.
2. Si le domaine vide est admis : `∃x (x = x)` y est faux (aucun objet), `∀x F(x)` y est vrai (aucun objet ne fait exception). Chaque formule y reçoit une valeur et une seule, donc l'admettre n'engendre pas de contradiction.
3. Donc la logique n'établit « quelque chose existe » qu'à la condition d'avoir exclu par stipulation le domaine vide. E1 au registre doit être accepté pour une autre raison (§4).

**T3. Tout le poids passe sur une prémisse de possibilité.** [Démontré ici] Prémisse P1 : `□(G → □G)` (si Dieu existe, il existe nécessairement, et cela vaut nécessairement ; réserve de portée en §3).

Lemme L1 : `□(P → Q) → (◇P → ◇Q)`.

1. `(P → Q) → (¬Q → ¬P)` (contraposition)
2. `□((P → Q) → (¬Q → ¬P))` (N sur 1)
3. `□(P → Q) → □(¬Q → ¬P)` (K sur 2, MP)
4. `□(¬Q → ¬P) → (□¬Q → □¬P)` (K)
5. `□(P → Q) → (□¬Q → □¬P)` (3, 4, enchaînement)
6. `(□¬Q → □¬P) → (¬□¬P → ¬□¬Q)` (contraposition), c'est-à-dire `◇P → ◇Q` (définition de `◇`)
7. `□(P → Q) → (◇P → ◇Q)` (5, 6, enchaînement)

Lemme L2 : `◇¬G → ¬□G`.

1. `G → ¬¬G` (A4)
2. `□G → □¬¬G` (N sur 1, K, MP)
3. `¬□¬¬G → ¬□G` (contraposition de 2), c'est-à-dire `◇¬G → ¬□G`

Branche du refus, prémisse P2r : `◇¬G`.

1. `G → □G` (P1, T, MP)
2. `¬□G → ¬G` (1, contraposition)
3. `¬□G` (P2r, L2, MP)
4. `¬G` (2, 3, MP)

Branche de l'acceptation, prémisse P2a : `◇G`.

5. `◇G → ◇□G` (P1, L1, MP)
6. `◇□G` (P2a, 5, MP)
7. `□G` (6, AM, MP)
8. `G` (7, T, MP)

Résultats. T3a : sous P1, N, K, T, A4, « Dieu peut ne pas exister » entraîne « Dieu n'existe pas », sans A3 ni AM. T3b : sous P1, N, K, T, AM, « Dieu peut exister » entraîne « Dieu existe ». T3c : sous P1, N, K, T, A4 et AM, `◇G` et `◇¬G` donnent `G` et `¬G`, donc ne peuvent être acceptés ensemble. La logique ne tranche pas entre P2a et P2r.

**T4. Sous lecture logique de « nécessaire », l'être de D1 n'existe pas.** [Démontré ici] Lecture D2-L [Stipulation] : `◇_L P` ≝ « il existe une interprétation où les axiomes, les définitions et P sont vrais » ; `□_L P ≝ ¬◇_L¬P`.

1. `◇_L ¬G` : le contre-modèle de T1 rend vraies les définitions et faux `∃x Dieu(x)`.
2. `¬G` (1, branche du refus de T3 lue avec `◇_L`, `□_L`).

Réserve : la ligne 2 suppose que N, K, T et L2 valent pour `□_L`. Ce n'est pas démontré ici ; T4 reste donc conditionnel à cette vérification, à faire si D2-L est retenu.

**T5. Une dépendance lue comme simple « si... alors » s'effondre.** [Démontré ici] Proposition examinée en Q2bis : `Dép(x) ≝ ¬E(x) → ¬L`, où `E(x)` est « x existe » et `L` « les lois logiques sont vraies ». `L` est vrai (A1 à A3 retenus).

1. Si `E(x)` : `¬E(x)` est faux, donc `¬E(x) → ¬L` est vrai, donc `Dép(x)`.
2. Si `¬E(x)` : `¬E(x) → ¬L` exigerait `¬L`, qui est faux, donc `¬Dép(x)`.
3. Par A3 (`E(x) ∨ ¬E(x)`) et SD : `Dép(x) ↔ E(x)`. Toute chose qui existe « dépendrait » au sens de la logique ; la notion ne distingue rien.

Conséquence : la thèse H1 (« la validité de la logique dépend d'un être ») exige une relation de dépendance définie autrement qu'en « si... alors », à fixer en M6.

## 3. Verdict de validité (vérificateur)

- T0, T1, T2 : VALIDES.
- T3, L1, L2 : VALIDES, chaque pas cite sa règle. La solidité dépend de P1, N, K, T, AM et de la prémisse de possibilité, dont aucune n'est démontrée.
- T4 : VALIDE sous la réserve ci-dessus.

Équivoques détectées [Démontré ici, par inspection des définitions] :

1. **« Nécessaire » (D2).** « Ne peut pas ne pas exister » admet deux lectures. D2-L : la non-existence est incompatible avec les axiomes et les définitions. D2-R [Stipulation] : l'être existe, ne dépend de rien d'autre pour exister, et aucune circonstance possible ne l'en priverait. Changer de lecture en cours de route est une équivoque.
2. **« Possible » (P2a, P2r).** T3 n'est valide que si `◇` a le même sens dans la prémisse et dans D2. Si « possible » veut dire « pour ce que j'en sais », les lignes 5 à 8 ne s'appliquent pas.
3. **Portée de la nécessité dans P1.** D2 dit qu'un être `a` existe nécessairement : `□∃y(y = a)`. P1 exige `□∃x Dieu(x)` : que soit nécessaire l'existence d'**un être qui existe par soi**. Le passage suppose que `a` existe par soi dans toute situation où il existe, et pas seulement dans les faits. Cette clause n'est pas dans D1 ; P1 n'en découle donc pas.
4. **« Cause ».** La définition du brief, « ce qui rend raison », couvre la production et l'explication. M1 évoque une raison « par sa propre nature » : une chose peut être sa propre raison sans se produire elle-même. Sans la séparation D4 / D5, un argument qui établit une raison pourrait conclure à une cause.
5. **Composition dans D1.** La première version de D1 conjoignait quatre attributs, et établir l'un n'établissait pas les autres (T1). Résolu le 2026-11-01 : D1 ne retient plus que l'existence par soi ; les autres attributs sont les thèses H2 à H4, chacune à démontrer séparément.

## 4. Si on refuse… (explorateur des refus)

| Prémisse refusée | Implication | Classement |
|---|---|---|
| A1 | `a = a` faux pour un `a` : un même terme ne désigne plus la même chose d'une ligne à l'autre | contradiction performative, sous la prémisse que l'énoncé du refus emploie ses propres termes de façon stable ; pas de contradiction formelle démontrée |
| A2 | Le refus pose qu'au moins une `P ∧ ¬P` est vraie : il affirme A et non-A | contradiction au sens du protocole. Ce refus ne force pourtant pas à tout accepter : matrice `F < B < V`, valeurs désignées `B` et `V`, `¬B = B`, `∧ = min` ; pour `P = B`, `Q = F`, `P ∧ ¬P` est désigné et `Q` ne l'est pas [Démontré ici, script en annexe]. L'examen s'arrête faute de pouvoir distinguer refus intenable et coût |
| A3 | Par T0, on ne conclut plus « X existe » de « la non-existence de X est absurde », pour le théiste comme pour l'athée | coût épistémique, symétrique ; refus cohérent (la matrice de T0 satisfait A1, A2 et les règles) |
| E1 | Voir §4 bis | contradiction performative dans le cadre posé ; pas de contradiction logique (T2) |
| D2-R (donc retenir D2-L) | T4 : l'être de D1 n'existe pas, sauf à montrer que `¬G` cache une contradiction que les définitions ne livrent pas | coût de l'acceptation, §5 |
| P1 | Un être pourrait exister par soi dans les faits sans l'être dans toute situation possible ; T3 s'applique alors à « un être nécessaire », pas à « un être par soi » | coût métaphysique pour l'acceptation : il faut admettre que le mode d'existence d'un être peut varier |
| AM | La branche de l'acceptation de T3 tombe, celle du refus tient (T3a n'utilise pas AM) | coût métaphysique : admettre que ce qui est possiblement nécessaire peut ne pas être nécessaire |
| T | Un énoncé nécessaire pourrait être faux | contradiction si D2 est lu « dans aucun cas possible, y compris le cas effectif » ; sans cette clause, aucune contradiction démontrée |
| D7 | Avec monde = tout ce qui existe, Dieu, s'il existe, appartient au monde. Tant que D1 le disait « cause du monde », et si causer un tout c'est causer chacune de ses parties (prémisse non démontrée), il se serait causé lui-même, ce que D4 et D2 excluent | résolu le 2026-11-01 : « cause » sort de D1 (H2 porte sur le contingent, D9). La première version présentait cette contradiction comme démontrée sans la prémisse |

## 4 bis. Ce qu'implique la négation de E1 (E1 acceptée le 2026-11-01)

Nier E1, c'est poser « rien n'existe », formellement `¬∃x (x = x)`. Cette négation n'est pas une contradiction logique : T2 montre qu'une interprétation à domaine vide la rend vraie sans qu'aucune formule y reçoive deux valeurs [Démontré ici]. Elle se heurte en revanche à l'acte qui la pose. Dans le cadre fixé en §2, attribuer une propriété à un objet `a`, par exemple « l'acte de nier a lieu », n'a de valeur de vérité que si `a` est un objet du domaine, donc si `∃x (x = a)`, donc si `a` existe au sens de D8 [Démontré ici]. Quiconque dit ou pense « rien n'existe » produit un acte dont on peut dire qu'il a lieu ; cet acte existe ; la négation est fausse dès qu'elle est posée. Pour la maintenir, il faut soutenir qu'un acte peut avoir lieu sans exister, donc sortir du cadre de §2 et employer un second sens d'« être » qui ne serait pas celui de D8 : c'est l'équivoque que la contrainte 5 interdit, et le coût du refus est l'abandon du contrôle d'équivoque. Si la négation tenait malgré tout, l'examen perdrait tout objet : rien à expliquer (M1 à M3), aucun fondement à qualifier (M4), personne pour accepter ou refuser une prémisse. Enfin, accepter E1 engage peu : E1 établit qu'au moins une chose existe, pas laquelle. Il n'établit ni l'existence d'un univers physique, ni celle d'un corps, ni celle d'autres esprits ; `∃x (x = x)` n'implique `∃x F(x)` pour aucune propriété F, contre-modèle : un domaine d'un seul objet qui n'a pas F [Démontré ici].

## 4 ter. Si tu nies une règle sur « nécessaire » et « possible »

**N (nécessitation), acceptée le 2026-11-01.** Nier N, c'est admettre qu'au moins un énoncé démontré par la logique seule n'est pas nécessaire : il existerait une situation possible où une vérité logique est fausse. Ce refus n'est pas une contradiction logique. Si l'on interprète « nécessaire » comme « faux pour tout énoncé », K et T restent vraies, aucun énoncé n'est à la fois vrai et faux, et seule N échoue (`P → P` est démontré mais n'est pas nécessaire) [Démontré ici]. Le coût est épistémique, et il est lourd pour les deux camps. Dans cette même interprétation, tout devient possible, y compris `P ∧ ¬P` : on ne peut plus écarter une situation au motif qu'elle est contradictoire. Passer de « ceci se contredit » à « ceci est impossible » exige N appliquée à A2. Sans N, deux raisonnements tombent ensemble : l'objection « les attributs de Dieu sont incohérents, donc Dieu est impossible », prévue en M8, et toute défense de l'acceptation qui déclare une objection impossible parce que contradictoire. Tombent aussi L1, L2 et donc T3, qui reposent sur N : « Dieu peut exister » et « Dieu peut ne pas exister » ne permettent plus rien conclure. Enfin, la thèse H1 perd sa voie vers un être nécessaire : cette voie suppose que la logique vaut dans toute situation possible, ce que N énonce [Démontré ici, par inspection des dérivations de L1, L2 et de Q2bis].

**K (distribution), acceptée le 2026-11-01.** Nier K, c'est admettre que « P entraîne Q » soit nécessaire, que P soit nécessaire, et que Q ne le soit pas. Avec le sens de « nécessaire » fixé en Q2bis (vrai dans toute situation possible) et la logique valant dans chaque situation (N, Q1), ce refus se contredit : dans chaque situation possible, P et « P entraîne Q » sont vrais, le modus ponens y donne Q, donc Q est vrai dans toute situation possible, donc nécessaire [Démontré ici]. Le refus n'est cohérent qu'en abandonnant ce sens. Contre-modèle : on déclare « nécessaires » exactement les vérités logiques plus deux énoncés `p` et `p → q`, avec `p` et `q` vrais ; N et T sont satisfaites, `q` n'est pas déclaré nécessaire, K échoue, et aucun énoncé n'est à la fois vrai et faux [Démontré ici]. Le prix est que « nécessaire » devient une étiquette posée sur des énoncés, sans lien avec les situations possibles : c'est une équivoque avec D2 telle que tu l'as fixée. Pour l'étude, le refus coupe les deux camps des mêmes outils : L1 et L2 reposent sur K, donc T3 tombe. La voie de H1 tombe aussi : passer de « la logique vaut nécessairement » et « nécessairement, si la logique vaut, x existe » à « x existe nécessairement » est une application de K.

**T (factivité), acceptée le 2026-11-01.** Nier T, c'est admettre qu'un énoncé P soit nécessaire et faux dans les faits. Il s'ensuit qu'un fait n'est pas possible : de `□P`, par A4, N et K, on tire `□¬¬P`, c'est-à-dire « `¬P` n'est pas possible », alors que `¬P` a lieu [Démontré ici]. Avec le sens de « nécessaire » fixé en Q2bis (vrai dans toute situation possible), et si la situation réelle compte parmi les situations possibles, ce refus se contredit : P, vrai dans toutes, serait vrai dans la réelle. Le refus n'est cohérent qu'en retirant la situation réelle des situations possibles. Contre-modèle : on déclare tout énoncé « nécessaire » ; N et K sont satisfaites, T échoue, et rien n'est « possible », pas même ce qui a lieu ; aucun énoncé n'y est à la fois vrai et faux [Démontré ici]. Le prix est que la nécessité ne dit plus rien des faits. Pour l'étude, le refus prive les deux camps : la branche de l'acceptation de T3 a besoin de T pour passer de « Dieu existe nécessairement » à « Dieu existe », la branche du refus en a besoin pour passer de P1 à « si Dieu existe, il existe nécessairement ». La voie de H1 s'arrête de même à « x existe nécessairement » sans atteindre « x existe ».

**A4 (introduction de la double négation), acceptée le 2026-11-01.** Nier A4, c'est admettre un énoncé P vrai sans que « non-non-P » le soit. Dans le cadre de §2, où, dans une interprétation, tout énoncé est vrai ou faux et pas les deux, et où « non-P » est vrai exactement quand P est faux (bivalence, notée B), ce refus se contredit : si P est vrai, « non-P » est faux, donc « non-non-P » est vrai ; les deux cas possibles suffisent à le vérifier [Démontré ici]. C'est la bivalence qui produit ce résultat, pas la formule du tiers exclu : dans une matrice à trois valeurs où A1, A2 et A3 valent comme formules, A4 échoue [Démontré ici, script en annexe] ; cette matrice viole toutefois la contraposition et l'absurde négatif, qui sont retenus. Il n'est pas établi que A4 se dérive des seuls axiomes et règles retenus, sans la bivalence : une recherche exhaustive sur les matrices à trois valeurs (27 négations, trois implications, deux choix de valeurs désignées) ne trouve aucun cadre qui respecte tout ce qui est retenu et refuse A4, ce qui ne prouve pas la dérivabilité. Pour l'étude, le refus est asymétrique : L2 repose sur A4, donc la branche du refus de T3 (« Dieu peut ne pas exister », donc « Dieu n'existe pas ») tombe, alors que la branche de l'acceptation (« Dieu peut exister », donc « Dieu existe », sous AM) n'utilise pas A4 et reste intacte. Le paragraphe de T ci-dessus utilise aussi A4.

**AM, démontrée sous U (ensemble unique), retenu le 2026-11-01.** Cadre [Stipulation, acceptée] : « situation possible » est un terme primitif ; `□P` est vrai si P est vrai dans toute situation possible, `◇P` s'il l'est dans au moins une ; U : l'ensemble des situations possibles est le même quelle que soit la situation d'où l'on regarde. Démonstration de AM sous U [Démontré ici] : (1) `◇□P` : il existe une situation possible `s` où `□P` est vrai ; (2) donc P est vrai dans toute situation possible depuis `s` ; (3) par U, ce sont toutes les situations possibles ; (4) donc `□P`. Refuser AM, c'est donc refuser U : admettre que ce qui est possible dépend de la situation d'où l'on regarde. Ce refus n'est pas une contradiction. Contre-modèle : deux situations `s` et `r` ; depuis `s`, `s` et `r` sont possibles ; depuis `r`, seule `r` l'est ; P est vrai en `r` seulement. En `r`, `□P` est vrai ; en `s`, `◇□P` est vrai mais `□P` est faux ; N, K et T restent satisfaites [Démontré ici]. Le refus a deux coûts. Le premier est de définition : D2 devrait dire « aucune situation possible **depuis la situation réelle** », et la nécessité deviendrait relative à un point de vue. Un être pourrait alors être nécessaire vu d'ici et ne pas l'être vu d'une autre situation possible : avec trois situations `w`, `u`, `v`, où depuis `w` sont possibles `w` et `u`, depuis `u` sont possibles `u` et `v`, depuis `v` seule `v`, et un être qui existe en `w` et `u` mais pas en `v`, cet être est nécessaire vu de `w` et ne l'est pas vu de `u` [Démontré ici]. Le second coût touche l'étude de façon asymétrique : T3b (« Dieu peut exister », donc « Dieu existe ») tombe, T3a (« Dieu peut ne pas exister », donc « Dieu n'existe pas ») reste, et T3c tombe : on peut tenir ensemble « Dieu peut exister » et « Dieu peut ne pas exister ».

## 5. Meilleure défense du refus et coûts de l'acceptation (avocat)

Défense du refus. Par T1, aucune définition n'impose une existence ; celui qui refuse n'a rien à affirmer en M0. Sa meilleure position : accepter D2-R et soutenir `◇¬G`. Par T3a, cela suffit pour `¬G`, sans A3 ni AM. Il exige en outre la démonstration séparée de chaque attribut (équivoque 5).

Coûts symétriques de l'acceptation :

- Sous D2-L, l'acceptation est réfutée (T4, sous sa réserve). Sa seule défense : soutenir que « possible » ne se réduit pas à « vrai dans une interprétation ». La possibilité logique cesse alors d'être vérifiable par contre-modèle, ce qui affaiblit tout usage ultérieur de « possible », y compris par l'acceptation.
- Sous AM, « Dieu est possible » vaut `G` (T3b) : celui qui accepte ne peut plus tenir « peut-être » qu'au sens épistémique, qui ne fait pas fonctionner T3 (équivoque 2).
- P1 suppose qu'exister par soi n'est pas accidentel à l'être qui existe par soi : non démontré.
- Coût symétrique pour le refus : `◇¬G` doit être fondé autrement que par « je peux le concevoir », sinon `◇G` se fonde de la même façon et T3c rend les deux inutilisables.

## 6. Bilan (synthétiseur)

Registre : [[theisme-registre]]. La logique seule n'établit ni l'existence ni l'inexistence de Dieu. Démontré ici : une définition ne produit qu'un conditionnel (T1) ; « quelque chose existe » dépend d'une stipulation sur les interprétations (T2) ; sous P1 et les axiomes modaux, la question se ramène à une prémisse de possibilité que la logique ne tranche pas (T3) ; la lecture logique de « nécessaire » réfute l'être défini, sous une réserve (T4). La suite doit instruire la prémisse de possibilité par d'autres voies.

## 7. Arbitrages du 2026-11-01

| Question | Réponse de l'utilisateur | Effet |
|---|---|---|
| Q0 | Sources externes acceptées, à condition qu'elles viennent de philosophes aux idées suffisamment différentes et fassent consensus | contrainte 1 amendée au protocole ; portée à préciser (Q0bis) |
| Q1 | Tiers exclu accepté | A3 retenu. La raison donnée (« A ≠ non-A ») est A2 ; T0 montre que A3 peut être refusé en gardant A2. Toute preuve d'existence par l'absurde reste marquée |
| Q2 | « Nécessaire : qui ne peut pas ne pas exister » | D2 maintenu tel quel ; le sens de « ne peut pas » n'est pas tranché (Q2bis) |
| Q3 | Oui | D4 et D5 retenus |
| Q4 | Non : « univers physique » supposerait d'avoir démontré les limites de l'univers physique | ancienne D7 retirée ; nouvelle proposition (Q4bis) |
| Q5 | Oui | « personnel » et « bon » différés en M4 et M5 |
| Q6 | « Reformule » | reformulé en Q6bis |
| Q7 | Paragraphe demandé | §4 bis ; décision à rendre (Q7bis) |
| Q8 | Oui | P1 en suspens. Révision du 2026-11-01 : depuis l'arbitrage D1, P1 ne porte plus sur la personnalité ni la bonté ; à statuer en M2 |
| Q9 | « Pas d'approximation, langage clair, bien structuré » | règle de conduite ajoutée au protocole |
| Q0bis | Partage retenu par défaut ; chaque prémisse, sourcée ou non, reçoit un paragraphe « si tu la nies » | protocole, contrainte 1 et format de sortie |
| Q2bis | « Nécessaire dans le sens où sans son existence la logique ou les maths n'existent pas » ; après reformulation : thèse à examiner, pas définition | D2 au sens réel ; thèse H1 créée pour M6 ; T5 |
| Q4bis-1 | « Tout ce qui existe, a existé ou existera si on est dans le temps ; hors du temps, tout ce qui existe » ; reformulation confirmée | D7 révisée ; D8 lu sans indication de temps |
| Q4bis-2 | « D1 c'est celui qui est ; il n'a pas besoin d'être la causalité du reste pour être défini » | « cause du monde » sort de D1 → H2 (M2) ; D9 « le contingent » créé |
| D1 | « Personnel et bon se démontrent plus tard, avec d'autres axiomes ; D1 se concentre sur nécessaire, dont la caractéristique intrinsèque est d'être, d'être sa propre causalité » ; reformulation confirmée : « sa propre causalité » lu comme « sa propre raison » (D5), non comme « sa propre cause » (D4) | D1 révisée ; H3 (personnel, M4), H4 (bon, M5) |
| N | Acceptée, avec paragraphe de refus demandé | §4 ter |
| K | Acceptée, avec paragraphe de refus demandé | §4 ter |
| T | Acceptée, avec paragraphe de refus demandé | §4 ter |
| A4 | Acceptée, avec paragraphe de refus demandé | §4 ter ; la bivalence B, utilisée depuis §2 sans être posée comme axiome, est à statuer |
| AM | « Ensemble unique » des situations possibles (U) retenu ; AM en devient une conséquence démontrée | §4 ter |
| Q7bis | E1 acceptée ; paragraphe de refus : §4 bis | E1 au registre |

## 8. Questions ouvertes

- **Q6bis. Règles qui gouvernent « nécessaire » et « possible ».** « Possible » veut dire « il n'est pas nécessaire que non ». Recommandation : accepter N, K, T, A4 ; laisser AM en suspens jusqu'en M2, où il sert.
  - N : ce que la logique démontre à partir de rien d'autre que ses axiomes est nécessaire. Exemple : « s'il pleut, il pleut » est nécessaire.
  - K : si « P entraîne Q » est nécessaire et que P est nécessaire, alors Q est nécessaire.
  - T : ce qui est nécessaire est vrai dans les faits.
  - A4 : si P est vrai, alors il est faux que P soit faux.
  - AM : s'il est possible qu'une chose soit nécessaire, alors elle est nécessaire. C'est la seule règle dont l'acceptation fait passer de « Dieu est possible » à « Dieu existe » (T3b).

## Annexe — vérification mécanique de T0 et de la matrice de A2

Exécuté le 2026-11-01 (`python3 -I`), toutes les lignes attendues `True` le sont, les trois lignes « attendu False » le sont : A1, A2, A4, contraposition, absurde négatif, MP, MT, SD, élimination de la conjonction, enchaînement valent dans la matrice A ; A3 et `¬¬P ⊢ P` échouent. Dans la matrice B, `P ∧ ¬P ⊢ Q` échoue (témoin `P = B`, `Q = F`).

```python
from itertools import product
V3 = [0, 0.5, 1]
neg = lambda a: 1 if a == 0 else 0
imp = lambda a, b: 1 if a <= b else b
des = lambda a: a == 1
def valid(f, n):
    return all(des(f(*v)) for v in product(V3, repeat=n))
def rule(prem, concl, n):
    return all(des(concl(*v)) for v in product(V3, repeat=n) if all(des(p(*v)) for p in prem))
print("A1", valid(lambda p: imp(p, p), 1))
print("A2", valid(lambda p: neg(min(p, neg(p))), 1))
print("A4 P->~~P", valid(lambda p: imp(p, neg(neg(p))), 1))
print("contraposition", valid(lambda p, q: imp(imp(p, q), imp(neg(q), neg(p))), 2))
print("absurde negatif", valid(lambda p, q: imp(imp(p, min(q, neg(q))), neg(p)), 2))
print("MP", rule([lambda p, q: imp(p, q), lambda p, q: p], lambda p, q: q, 2))
print("MT", rule([lambda p, q: imp(p, q), lambda p, q: neg(q)], lambda p, q: neg(p), 2))
print("SD", rule([lambda p, q: max(p, q), lambda p, q: neg(p)], lambda p, q: q, 2))
print("conj-elim", rule([lambda p, q: min(p, q)], lambda p, q: p, 2))
print("enchainement", rule([lambda p, q, r: imp(p, q), lambda p, q, r: imp(q, r)], lambda p, q, r: imp(p, r), 3))
print("A3 (attendu False)", valid(lambda p: max(p, neg(p)), 1))
print("DNE (attendu False)", rule([lambda p: neg(neg(p))], lambda p: p, 1))
F, B, T = 0, 1, 2
nb = lambda a: {F: T, B: B, T: F}[a]
db = lambda a: a in (B, T)
print("explosion (attendu False)", all(db(q) for p, q in product([F, B, T], repeat=2) if db(min(p, nb(p)))))
```

### Matrice du paragraphe A4

Exécuté le 2026-11-01 (`python3 -I`) : A1, A2, A3, MP, MT, SD, élimination de la conjonction, enchaînement valent ; A4, contraposition, absurde négatif échouent ; la matrice est bivalente au sens « P ou non-P désigné, jamais les deux ». La recherche exhaustive citée au paragraphe A4 balaie les 27 négations à trois valeurs, les implications à seuil, additive et maximale, et les valeurs désignées `{2}` et `{1, 2}` : 0 cadre trouvé.

```python
from itertools import product
V = [0, 0.5, 1]
neg = lambda a: 0 if a == 1 else 1
imp = lambda a, b: 1 if a <= b else b
des = lambda a: a == 1
def valid(f, n):
    return all(des(f(*v)) for v in product(V, repeat=n))
def rule(prem, concl, n):
    return all(des(concl(*v)) for v in product(V, repeat=n) if all(des(p(*v)) for p in prem))
print("A1", valid(lambda p: imp(p, p), 1))
print("A2", valid(lambda p: neg(min(p, neg(p))), 1))
print("A3", valid(lambda p: max(p, neg(p)), 1))
print("A4 (attendu False)", valid(lambda p: imp(p, neg(neg(p))), 1))
print("contraposition", valid(lambda p, q: imp(imp(p, q), imp(neg(q), neg(p))), 2))
print("absurde negatif", valid(lambda p, q: imp(imp(p, min(q, neg(q))), neg(p)), 2))
print("MP", rule([lambda p, q: imp(p, q), lambda p, q: p], lambda p, q: q, 2))
print("MT", rule([lambda p, q: imp(p, q), lambda p, q: neg(q)], lambda p, q: neg(p), 2))
print("SD", rule([lambda p, q: max(p, q), lambda p, q: neg(p)], lambda p, q: q, 2))
print("conj-elim", rule([lambda p, q: min(p, q)], lambda p, q: p, 2))
print("enchainement", rule([lambda p, q, r: imp(p, q), lambda p, q, r: imp(q, r)], lambda p, q, r: imp(p, r), 3))
print("bivalence: P designee ou ~P designee", all(des(p) or des(neg(p)) for p in V), "; jamais les deux", not any(des(p) and des(neg(p)) for p in V))
```
