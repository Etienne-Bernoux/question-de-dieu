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

Protocole : [[theisme-protocole]]. Registre : [[theisme-registre]].

## 1. Question

Que peuvent établir les seuls axiomes logiques et des définitions sur l'existence de quoi que ce soit, et quelles définitions retient-on pour la suite ?

## 2. Argument formalisé (formalisateur)

### Notation

`P`, `Q` : propositions. `F(x)` : « x a la propriété F ». `∃x F(x)` : « au moins une chose a F ». `□P` : « il est nécessaire que P ». `◇P` : « il est possible que P », défini par `◇P ≝ ¬□¬P`. `G` : « Dieu (au sens de D1) existe », c'est-à-dire `∃x Dieu(x)`.

### Axiomes logiques proposés

- A1 Identité : `a = a` pour tout terme `a` ; `P → P` pour toute proposition.
- A2 Non-contradiction : `¬(P ∧ ¬P)`.
- A3 Tiers exclu : `P ∨ ¬P`.

Règles d'inférence admises : modus ponens (`P → Q`, `P` ⊢ `Q`), modus tollens (`P → Q`, `¬Q` ⊢ `¬P`), syllogisme disjonctif (`P ∨ Q`, `¬P` ⊢ `Q`), élimination de la conjonction, contraposition, réduction à l'absurde négative (si `P` mène à `Q ∧ ¬Q`, alors `¬P`). L'élimination de la double négation (`¬¬P` ⊢ `P`) n'est valide que sous A3 : c'est elle qui permet de conclure qu'une chose **existe** parce que sa non-existence est absurde.

### Axiomes modaux proposés

- K Distribution : `□(P → Q) → (□P → □Q)`, d'où l'on dérive `□(P → Q) → (◇P → ◇Q)`.
- T Factivité : `□P → P` (ce qui est nécessaire est vrai).
- AM Stabilité du possible : `◇□P → □P` (ce qui est possiblement nécessaire est nécessaire). Il revient à dire que ce qui est possible ou nécessaire ne varie pas selon l'état du monde qu'on suppose réalisé.

### Définitions

| ID | Terme | Définition | Remarque |
|---|---|---|---|
| D1 | Dieu | être nécessaire, personnel (intelligence, volonté), cause du monde, bon | « personnel » précisé en M4, « bon » en M5 ; d'ici là ces attributs ne servent à aucune inférence |
| D2 | Nécessaire | qui ne peut pas ne pas exister | deux lectures, voir §3 : D2-L logique, D2-R réelle |
| D3 | Contingent | qui pourrait ne pas exister | `¬□`(exister) |
| D4 | Cause | ce qui produit l'existence ou l'occurrence d'autre chose | proposé : restreint à la **production** |
| D5 | Raison | ce qui rend intelligible pourquoi une chose est ainsi plutôt qu'autrement ou pas du tout | proposé : séparé de D4 (une chose peut être sa propre raison, pas sa propre cause) |
| D6 | Fait brut | ce qui existe ou a lieu sans cause ni raison | utilise D4 et D5 |
| D7 | Monde | l'univers physique : espace, temps, matière-énergie et leurs régularités | proposé ; neutre sur l'existence d'autre chose |
| D8 | Exister | `a` existe ≝ `∃x (x = a)` | l'existence est exprimée par le quantificateur |

### Thèses dérivées

**T1. Une définition ne livre qu'un conditionnel.** Soit une définition `X(x) ≝ F(x) ∧ E(x)`, où `E` peut être « existe » ou « existe nécessairement ».

1. `∀x (X(x) ↔ F(x) ∧ E(x))` (définition)
2. `∀x (X(x) → E(x))` (de 1, élimination de la conjonction sous le quantificateur)

`∃x X(x)` ne suit pas. Contre-modèle : domaine `{a}`, `F(a)` faux. La ligne 1 est vraie, la ligne 2 est vraie, `∃x X(x)` est faux. Appliqué à D1 : on obtient « tout ce qui est Dieu existe nécessairement », jamais « quelque chose est Dieu ».

**T2. « Quelque chose existe » n'est pas une vérité de logique pure.** Dans la logique du premier ordre usuelle, `∃x (x = x)` est un théorème, parce que sa sémantique impose un domaine non vide. C'est une convention : une logique qui admet le domaine vide est tout aussi cohérente et ce théorème n'y est plus démontrable. « Quelque chose existe » repose donc sur un constat (E1 au registre), pas sur la logique.

**T3. Ce que les axiomes modaux font de la question.** Prémisse P1 : `□(G → □G)` (si Dieu existe, il existe nécessairement, et cela vaut nécessairement puisque c'est une définition ; voir la réserve de portée en §3).

Branche du refus, prémisse P2r : `◇¬G`.

1. `G → □G` (de P1, par T)
2. `¬□G → ¬G` (de 1, contraposition)
3. `◇¬G ↔ ¬□G` (définition de `◇`)
4. `¬□G` (de P2r et 3, modus ponens)
5. `¬G` (de 2 et 4, modus ponens)

Branche de l'acceptation, prémisse P2a : `◇G`.

6. `◇G → ◇□G` (de P1, par la forme dérivée de K)
7. `◇□G` (de P2a et 6, modus ponens)
8. `□G` (de 7 et AM, modus ponens)
9. `G` (de 8, par T)

Résultats : sous P1 et T, « Dieu peut ne pas exister » entraîne « Dieu n'existe pas ». Sous P1, K, T et AM, « Dieu peut exister » entraîne « Dieu existe ». Sous P1 et AM, `◇G` et `◇¬G` sont incompatibles : l'idée commune « il peut exister comme ne pas exister » devient incohérente. La logique ne tranche pas entre P2a et P2r ; elle transfère tout le poids de la question sur une prémisse de possibilité. La branche du refus n'a pas besoin d'AM ; celle de l'acceptation en a besoin.

**T4. Sous lecture logique de « nécessaire », l'être défini en D1 n'existe pas.** Avec D2-L, `□` signifie « dont la négation est contradictoire » et `◇` « non contradictoire ».

1. `◇¬G` : le contre-modèle de T1 montre que `¬G` est compatible avec la logique et les définitions.
2. `¬G` (de 1 par les lignes 1 à 5 de T3).

## 3. Verdict de validité (vérificateur)

- T1 : VALIDE. L'invalidité de `définition ⊢ ∃x X(x)` est établie par contre-modèle.
- T2 : VALIDE, énoncé métalogique.
- T3 : VALIDE, chaque pas cite sa règle. La solidité dépend de P1, K, T, AM et de la prémisse de possibilité retenue, dont aucune n'est démontrée.
- T4 : VALIDE sous D2-L et P1.

Équivoques détectées :

1. **« Nécessaire » (D2).** « Ne peut pas ne pas exister » admet deux sens. D2-L, logique : la non-existence implique une contradiction. D2-R, réelle : l'être existe, ne dépend de rien d'autre pour exister, et aucune circonstance possible ne l'en priverait. Passer de l'un à l'autre en cours de route est une équivoque ; T4 montre que D2-L clôt la question contre l'existence.
2. **« Possible » (P2a, P2r).** Pour que T3 soit valide, `◇` doit avoir le **même** sens que dans D2. Si « possible » veut dire « pour ce que j'en sais » (sens épistémique), les lignes 6 à 9 ne s'appliquent pas : c'est une équivoque, et l'argument devient invalide.
3. **Portée de la nécessité dans P1.** D2 dit qu'un être `a` existe nécessairement (`□∃y(y = a)`). P1 exige davantage : que l'énoncé « il existe un Dieu » soit nécessaire (`□∃x Dieu(x)`). Le passage suppose que `a` est **nécessairement** personnel, cause et bon, pas seulement nécessairement existant. Sans cette clause (D1 renforcée : « ses attributs lui sont essentiels »), P1 ne découle pas de D1 : glissement de portée.
4. **« Cause » (D4 contre D5).** L'énoncé de départ fusionnait production et raison. M1 évoque une « raison par sa propre nature » : une chose peut être sa propre raison sans être sa propre cause. La séparation évite qu'un argument prouve une raison et conclue à une cause.
5. **Composition dans D1.** D1 regroupe quatre attributs. Établir l'un d'eux (un être nécessaire, par exemple) n'établit pas les trois autres. Chaque attribut devra être démontré séparément.

## 4. Si on refuse… (explorateur des refus)

| Prémisse refusée | Implication | Classement |
|---|---|---|
| A1 Identité | Un terme peut désigner autre chose que lui-même au cours d'une même démonstration ; le contrôle d'équivoque devient impossible | contradiction : le refus doit utiliser ses propres termes de manière identique pour être énoncé |
| A2 Non-contradiction | Le refus affirme qu'au moins une proposition `P ∧ ¬P` est vraie | contradiction par construction. Il existe des systèmes formels qui tolèrent des contradictions locales sans tout trivialiser, mais l'examen ne peut plus distinguer un refus intenable d'un coût : il s'arrête |
| A3 Tiers exclu | On ne peut plus conclure « X existe » de « la non-existence de X est absurde ». Toute preuve d'existence par l'absurde tombe, pour le théiste comme pour l'athée | coût épistémique, symétrique. Pas de contradiction : le refus est cohérent |
| E1 Quelque chose existe | « Rien n'existe » est énoncé par quelqu'un qui raisonne ; l'énonciation est elle-même quelque chose | contradiction performative, à condition d'admettre qu'un acte de raisonnement existe |
| D2-R (choisir D2-L) | T4 : l'être de D1 n'existe pas, sauf à montrer une contradiction cachée dans `¬G` | coût de l'acceptation, voir §5 |
| P1 renforcée (attributs essentiels) | Un être nécessaire pourrait n'être personnel ou bon que par accident ; T3 ne s'applique plus à Dieu, seulement à « un être nécessaire » | coût métaphysique pour le théiste : la nécessité ne se transmet pas aux attributs |
| AM | Certaines possibilités ne sont possibles que dans certains états du monde ; la branche de l'acceptation de T3 tombe, celle du refus tient | coût métaphysique modéré : il faut admettre que le possible lui-même est contingent |
| K, T | Refuser T : un nécessaire pourrait être faux | contradiction avec le sens même de « nécessaire » |
| D7 Monde = univers physique | Si le monde inclut tout ce qui existe, « le monde a une cause » oblige la cause à être dans le monde | coût de clarté : M2 glisserait vers une composition |

## 5. Meilleure défense du refus et coûts de l'acceptation (avocat)

Défense du refus. À ce stade, celui qui refuse n'a besoin de rien affirmer : T1 lui garantit qu'aucune définition ne lui impose une existence. Sa meilleure position en M0 : accepter D2-R et AM, et soutenir que la prémisse `◇¬G` n'est pas plus coûteuse que `◇G`. Avec T3, cela suffit pour `¬G`, sans axiome supplémentaire. Il exige en outre la démonstration séparée de chaque attribut de D1 (équivoque 5), ce qui multiplie la charge de preuve de l'acceptation.

Coûts symétriques de l'acceptation :

- Avec D2-L, l'acceptation est réfutée (T4). Sa seule défense est de soutenir que « possible » ne se réduit pas à « non contradictoire dans ce système » et que `¬G` cache une contradiction non dérivable ici. Coût épistémique : la possibilité logique devient indécidable par nous, ce qui affaiblit aussi tout usage ultérieur de « possible ».
- Avec AM, « Dieu est possible » n'est plus une concession bon marché : la prémisse vaut l'affirmation `G` elle-même. Celui qui accepte ne peut plus tenir « peut-être, peut-être pas » qu'au sens épistémique.
- P1 renforcée suppose une thèse non démontrée : que personnalité et bonté appartiennent nécessairement à l'être nécessaire. C'est précisément l'objet de M4 et M5.
- Coût symétrique pour le refus : accepter D2-R et AM pour ensuite poser `◇¬G` oblige à fonder cette possibilité autrement que par l'imaginabilité, sinon le théiste peut fonder `◇G` de la même façon. Le combat se déplace en M1 à M3.

## 6. Mise à jour du registre (synthétiseur)

Voir [[theisme-registre]]. Bilan de M0 : la logique seule n'établit ni l'existence ni l'inexistence de Dieu. Elle établit trois choses. Une définition ne produit qu'un conditionnel (T1). La lecture logique de « nécessaire » réfute l'être défini (T4), donc l'examen doit utiliser la lecture réelle D2-R. Sous D2-R et AM, la question se ramène entièrement à une prémisse de possibilité (T3), que la suite (M1 à M3) devra instruire par d'autres voies que la logique pure.

## 7. Questions à l'utilisateur

- Q1. A3 (tiers exclu) : accepté comme axiome ? Recommandation : oui, en marquant chaque preuve d'existence par l'absurde pour pouvoir la réévaluer si tu changes d'avis.
- Q2. « Nécessaire » : D2-R (réelle) ou D2-L (logique) ? Recommandation : D2-R ; D2-L clôt la question avant tout examen (T4).
- Q3. Séparer cause (D4, production) et raison (D5, intelligibilité) ? Recommandation : oui.
- Q4. Monde = univers physique (D7) ? Recommandation : oui, sinon M2 glisse vers une composition.
- Q5. « Personnel » et « bon » différés en M4 et M5, inutilisables d'ici là ? Recommandation : oui.
- Q6. AM (stabilité du possible) : accepter, refuser, ou laisser en suspens jusqu'en M2 où il sert ? Recommandation : en suspens.
- Q7. E1 (« quelque chose existe ») : accepté ? Recommandation : oui, son refus est performativement contradictoire.
- Q8. P1 renforcée (les attributs de Dieu lui sont essentiels) : en suspens jusqu'en M4 ? Recommandation : oui.
