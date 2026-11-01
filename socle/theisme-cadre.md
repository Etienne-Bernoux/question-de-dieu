---
title: Examen du théisme — cadre admis
type: knowledge
scope: perso
projet: []
domaine: [philosophie, logique]
tags: [theisme, axiomes, definitions, modalite]
status: draft
updated: 2026-11-01
---

# Cadre admis

Le langage, les principes et les définitions sur lesquels reposent tous les modules. Tout ce qui figure ici est admis, sauf la mention « à statuer ». Les statuts sont au [[theisme-registre]], les décisions et leurs dates au [[theisme-journal]], les preuves mécaniques dans [[theisme-verifications]]. Chaque principe est suivi de ce qu'implique sa négation : on peut le nier, voici ce que cela coûte.

## 1. Notation et deux niveaux de sens

`P`, `Q`, `R` : énoncés. `F(x)` : « x a la propriété F ». `∃x F(x)` : « au moins une chose a F » ; `∀x F(x)` : « toute chose a F ». Connecteurs : `¬` non, `∧` et, `∨` ou, `→` si... alors, `P ↔ Q ≝ (P → Q) ∧ (Q → P)`. `□P` : « il est nécessaire que P » ; `◇P ≝ ¬□¬P` : « il est possible que P ». `E(x)` : « x existe ». `G ≝ ∃x Dieu(x)`.

Deux notions servent à donner un sens aux énoncés ; elles ne se confondent pas.

- **Interprétation** : un domaine d'objets et l'attribution, à chaque propriété, des objets qui l'ont. Elle sert à **tester un raisonnement** : une inférence est invalide s'il existe une interprétation où ses prémisses sont vraies et sa conclusion fausse (contre-modèle).
- **Situation possible** : terme premier, non défini. Elle sert à **donner un sens à « nécessaire »** : `□P` est vrai si P est vrai dans toute situation possible, `◇P` s'il l'est dans au moins une.

## 2. Principes logiques

### B. Bivalence

Il n'y a que deux valeurs de vérité ; tout énoncé est vrai ou faux, jamais les deux ; « non-P » est vrai exactement quand P est faux.

**Si tu la nies**, tu admets un énoncé ni vrai ni faux, ou à la fois vrai et faux. Le second cas revient à affirmer P et non-P : c'est une contradiction (A2). Le premier ne l'est pas : un cadre à quatre valeurs respecte A1 à A4 et toutes les règles retenues, et y loge un énoncé ni vrai ni faux (matrice 4). Le coût est étrange et touche directement l'étude : « P ou non-P » y est vrai sans que P ni non-P le soit. Appliqué à `G`, « Dieu existe ou n'existe pas » serait vrai sans que « Dieu existe » ni « Dieu n'existe pas » le soit ; l'examen pourrait s'achever sans réponse, non par ignorance mais parce qu'il n'y en aurait pas. Ce que le refus ne coûte pas : les dérivations (L1, L2, T3) n'utilisent pas B ; les contre-modèles à deux valeurs (T1, T2) restent des interprétations admissibles, et une seule suffit à prouver une invalidité ; A4, admise pour elle-même, reste admise, seule sa justification par B et S tombe.

### S. Calcul des connecteurs

« P et Q » est vrai si les deux le sont ; « P ou Q » si au moins un l'est ; « si P alors Q » est faux seulement quand P est vrai et Q faux. Conséquence admise : « s'il pleut, alors 2 + 2 = 4 » est vrai, sans aucun lien entre la pluie et l'arithmétique. Les liens réels (cause, raison, dépendance) sont définis à part (D4, D5, M6).

**Si tu le nies**, il faut donner un autre sens à « si... alors », seul connecteur en débat. Deux voies existent. Première voie, garder un calcul à partir des valeurs des parties : sous B et les règles retenues, un seul autre calcul est possible, celui où « si P alors Q » est vrai exactement quand P et Q ont la même valeur ([[theisme-verifications]], énumération des calculs). Il rend « si P alors Q » équivalent à « si Q alors P » : « si Dieu existe, il existe nécessairement » vaudrait autant que « s'il existe nécessairement, il existe », et toute implication perdrait sa direction. Seconde voie, exiger un lien réel. Or « s'il pleut, alors 2 + 2 = 4 » et « si 2 + 2 = 4, alors 2 + 2 = 4 » ont des composantes de mêmes valeurs (vrai, vrai) ; si la première est fausse et la seconde vraie (A1), la valeur de « si... alors » ne se calcule plus à partir des valeurs de ses parties, et dépend d'un lien qu'il faut définir. Le coût est épistémique : ce lien (cause, raison, dépendance) est l'objet même des modules M1, M2 et M6, et le définir dès le départ préjugerait de leur examen. La justification de A4 et la démonstration de T5 seraient à refaire ; A4, admise pour elle-même, resterait admise.

### A1. Identité

`a = a` ; `P → P`.

**Si tu la nies**, un terme peut ne pas être identique à lui-même : un même mot désignerait autre chose d'une ligne à l'autre. Aucune contradiction formelle n'en est démontrée. La contradiction est performative : énoncer le refus suppose d'employer ses propres termes avec un sens stable, ce que le refus nie. Le coût est total : le contrôle d'équivoque devient impossible, donc toute démonstration.

### A2. Non-contradiction

`¬(P ∧ ¬P)`.

**Si tu la nies**, tu poses qu'au moins un énoncé est vrai en même temps que sa négation : tu affirmes A et non-A. C'est une contradiction au sens du protocole ; le refus est intenable. Il ne force pas pour autant à tout accepter : dans un cadre à trois valeurs où une contradiction peut être tenue pour vraie, n'importe quelle conclusion n'en découle pas (matrice 2) ; ce cadre perd cependant le modus ponens, le modus tollens, le syllogisme disjonctif et l'enchaînement. Dans un tel cadre, la contradiction n'est plus un motif de rejet, et l'examen ne peut plus distinguer un refus intenable d'un simple coût : il s'arrête.

### A3. Tiers exclu

`P ∨ ¬P`.

**Si tu le nies**, tu restes cohérent : un cadre à trois valeurs garde A1, A2, A4 et toutes les règles, et rejette A3 (matrice 1). Le coût est épistémique et porte sur un type de preuve, quel que soit le camp qui l'emploie : on ne peut plus prouver qu'une chose existe en montrant que sa non-existence est absurde, car cela exige la double négation (`¬¬P ⊢ P`), que ce cadre rejette (T0). Prouver qu'une chose n'existe pas en montrant que son existence est absurde reste valide (absurde négatif). Chaque preuve d'existence par l'absurde est donc marquée comme dépendante de A3.

### A4. Introduction de la double négation

`P → ¬¬P`.

**Si tu la nies**, tu admets un énoncé P vrai sans que « non-non-P » le soit. Sous B et S, c'est une contradiction : si P est vrai, « non-P » est faux, donc « non-non-P » est vrai ; les deux cas suffisent (matrice 0). Sans S, et avec une troisième valeur, le refus est cohérent avec A1, A2 et A3, mais il emporte la contraposition et l'absurde négatif (matrice 3). Il n'est pas établi que A4 se dérive des seuls axiomes et règles retenus : la recherche sur tous les cadres à trois valeurs d'une même famille n'en trouve aucun qui respecte tout le retenu et refuse A4, ce qui ne prouve pas la dérivabilité. Pour l'étude, le refus est asymétrique : L2 repose sur A4, donc « Dieu peut ne pas exister, donc Dieu n'existe pas » (T3a) n'est plus démontré, alors que « Dieu peut exister, donc Dieu existe » (T3b) n'utilise pas A4.

### Règles d'inférence

Modus ponens (`P → Q`, `P` ⊢ `Q`), modus tollens (`P → Q`, `¬Q` ⊢ `¬P`), syllogisme disjonctif (`P ∨ Q`, `¬P` ⊢ `Q`), élimination de la conjonction (`P ∧ Q` ⊢ `P`), enchaînement (`P → Q`, `Q → R` ⊢ `P → R`), contraposition `(P → Q) → (¬Q → ¬P)`, absurde négatif `(P → (Q ∧ ¬Q)) → ¬P`. La preuve sous hypothèse (raisonner en supposant P, puis conclure `P → Q`) n'est pas admise : rien ici ne la garantit.

**Si tu nies l'une d'elles**, tu admets que ses prémisses soient vraies et sa conclusion fausse. Sous B et S, chacune se vérifie en parcourant tous les cas (matrice 0) : le refus est une contradiction.

## 3. Principes modaux

### N. Nécessitation

Ce que la logique démontre à partir de ses seuls axiomes est nécessaire.

**Si tu la nies**, il existerait une situation possible où une vérité logique est fausse. Aucune contradiction : en déclarant « nécessaire » faux pour tout énoncé, K et T restent vraies et seule N échoue. Le coût est épistémique et lourd pour les deux camps. Tout devient possible, contradictions comprises, et l'on ne peut plus écarter une situation parce qu'elle se contredit : passer de « ceci se contredit » à « ceci est impossible » exige N appliquée à A2. Deux raisonnements opposés perdent alors leur démonstration : l'objection « les attributs de Dieu sont incohérents, donc Dieu est impossible » (M8), et toute défense qui écarte une objection parce qu'elle serait contradictoire. L1, L2 et T3 reposent sur N et ne sont plus démontrés. La voie de H1 vers un être nécessaire suppose que la logique vaut dans toute situation possible, ce que N énonce.

### K. Distribution

`□(P → Q) → (□P → □Q)`.

**Si tu la nies**, tu admets « P entraîne Q » nécessaire, P nécessaire, et Q non nécessaire. Avec le sens de « nécessaire » fixé en §1 et la logique valant dans chaque situation (N), c'est une contradiction : dans chaque situation, P et « P entraîne Q » sont vrais, le modus ponens y donne Q, donc Q est nécessaire. Le refus n'est cohérent qu'en coupant « nécessaire » des situations : si l'on déclare nécessaires les vérités logiques, `p` et `p → q`, mais pas `q`, N et T tiennent et K échoue. « Nécessaire » devient alors une étiquette, en équivoque avec D2. L1, L2 et T3 ne sont plus démontrés ; la voie de H1 aussi, car passer de « la logique vaut nécessairement » et « nécessairement, si la logique vaut, x existe » à « x existe nécessairement » est une application de K.

### T. Factivité

`□P → P` : ce qui est nécessaire est vrai dans les faits.

**Si tu la nies**, tu admets un P nécessaire et faux dans les faits. Il s'ensuit qu'un fait n'est pas possible : de `□P`, par A4, N et K, on tire `□¬¬P`, soit « non-P n'est pas possible », alors que non-P a lieu. Si la situation réelle compte parmi les situations possibles, c'est une contradiction. Le refus n'est cohérent qu'en l'en retirant : si l'on déclare tout énoncé nécessaire, N et K tiennent, T échoue, et plus rien n'est possible, pas même ce qui a lieu. La nécessité ne dit plus rien des faits. Les deux branches de T3 perdent leur démonstration : l'une a besoin de T pour passer de « Dieu existe nécessairement » à « Dieu existe », l'autre pour tirer de P1 « si Dieu existe, il existe nécessairement ». H1 s'arrête à « x existe nécessairement ».

### U. Ensemble unique des situations possibles

Les situations possibles sont les mêmes quelle que soit la situation d'où l'on regarde.

**Conséquence démontrée, AM** : `◇□P → □P`. (1) Si `◇□P`, il existe une situation possible `s` où `□P` est vrai ; (2) P est donc vrai dans toute situation possible depuis `s` ; (3) par U, ce sont toutes les situations possibles ; (4) donc `□P`.

**Si tu nies U**, ce qui est possible dépend de la situation d'où l'on regarde. Aucune contradiction : avec deux situations `s` et `r`, où depuis `s` sont possibles `s` et `r`, depuis `r` seule `r`, et P vrai en `r` seulement, on a en `s` `◇□P` vrai et `□P` faux, tandis que N, K et T tiennent. Le premier coût est de définition : D2 devrait dire « aucune situation possible depuis la situation réelle », et la nécessité deviendrait relative à un point de vue ; avec trois situations `w`, `u`, `v` (depuis `w` : `w`, `u` ; depuis `u` : `u`, `v` ; depuis `v` : `v`), un être qui existe en `w` et `u` mais pas en `v` est nécessaire vu de `w` et ne l'est pas vu de `u`. Le second coût est asymétrique : T3b n'est plus démontré, T3a l'est encore, et T3c disparaît, si bien qu'on peut de nouveau tenir ensemble « Dieu peut exister » et « Dieu peut ne pas exister ».

## 4. Définitions

| ID | Terme | Définition | Écarté, et pourquoi |
|---|---|---|---|
| D1 | Dieu | `x` est Dieu si `x` est nécessaire au sens réel (D2) : il ne dépend de rien pour exister (il existe **par soi**), et aucune situation possible ne le prive d'existence | La version du brief (nécessaire, personnel, cause du monde, bon) conjoignait quatre attributs, chacun à démontrer séparément ; « cause du monde », avec D7, ferait de Dieu la cause d'une totalité qui le contient : ces attributs deviennent H2 à H4. Une clause « x est sa propre raison d'exister » supposait que toute chose a besoin d'une raison, ce que M1 examine : elle aurait tranché M1 d'avance |
| D2 | Nécessaire | qui ne peut pas ne pas exister, au sens réel : ne dépend de rien pour exister, et aucune situation possible ne le prive d'existence ; dire qu'il n'existe pas n'est pas contradictoire | Le sens logique (sa non-existence serait contradictoire) réfute D1 d'emblée (T4). « Ce sans quoi la logique ne vaudrait pas » est une thèse, pas un sens (H1, T5) |
| D3 | Contingent | qui pourrait ne pas exister | |
| D4 | Cause | ce qui produit l'existence ou l'occurrence d'autre chose | Fusion avec « raison » : un argument qui établit une raison pourrait conclure à une cause |
| D5 | Raison | ce qui rend intelligible qu'une chose soit, ou soit ainsi ; une chose peut être sa propre raison, non sa propre cause | |
| D6 | Fait brut | ce qui existe ou a lieu sans cause ni raison | |
| D7 | Monde | tout ce qui existe, à quelque moment que ce soit ou hors du temps ; les choses seulement possibles qui n'existent jamais en sont exclues | « L'univers physique » présuppose connues ses limites. Inclure les simples possibles exigerait un second sens d'« être » |
| D8 | Exister | `a` existe si `∃x (x = a)`, sans indication de temps : ce qui a existé ou existera existe en ce sens | |
| D9 | Le contingent | tout ce qui existe sans être nécessaire | |
| D10 | Substance | ce qui existe sans être une propriété d'autre chose | |
| D11 | Nature d'une chose | les propriétés qu'elle a dans toutes les situations possibles où elle existe : ce qu'elle ne pourrait perdre sans cesser d'être elle-même | Laisser « nature » non défini : D1 reposerait sur un mot dont l'usage ne se vérifie pas |
| D12 | Accident | propriété qu'une chose a dans certaines des situations possibles où elle existe, mais pas dans toutes | |
| D13 | Expérience | l'ensemble des observations faites ou réalisables | |
| D14 | Mesure | observation qui attribue une valeur numérique à une propriété, selon une procédure que n'importe qui peut reproduire | |
| D15 | Établi sans observation | énoncé démontré à partir du cadre sans qu'aucune prémisse soit une observation | « A priori » : le mot latin se lit couramment « avant coup » et invite l'équivoque |
| D16 | Établi avec observation | énoncé démontré avec au moins une observation parmi ses prémisses | « A posteriori » : se lit couramment « après coup » |
| D17 | Concevable | un énoncé est concevable s'il existe une interprétation où le cadre et cet énoncé sont vrais ensemble : le supposer n'engendre aucune contradiction | Le pas « concevable, donc possible » ne vaut pas en général (T6) |
| D18 | Rendre intelligible | Q rend P intelligible si P se démontre à partir de Q et du cadre, sans que P figure parmi les prémisses | Laisser « intelligible » premier : M1 porterait sur un mot invérifiable. Limites assumées : aucune clause formelle n'exclut tous les cercles déguisés (Q = « P et R »), à traquer au cas par cas ; un événement seulement probable n'a pas de raison au sens de D5, il est un fait brut par définition |

Avertissement : exister **en soi** (être une substance, D10) n'est pas exister **par soi** (D1). Un arbre existe en soi, non par soi : il dépend de causes. Les confondre ferait de toute substance un candidat à D1.

Conséquence de D11 : toute chose a « exister » dans toutes les situations possibles où elle existe ; l'existence appartient donc à la nature de toute chose, contingente comprise.

Règle de lecture : tant que M4 et M5 ne sont pas faits, « Dieu existe » signifie seulement « un être nécessaire existe », sans rien dire de sa personnalité ni de sa bonté.

Mots non définis, interdits dans une inférence avant leur définition : « temps » (M3), « personnel » (M4), « bon » (M5), « dépendre » (M6). Termes premiers, admis sans définition : « situation possible » ; « observation », caractérisée comme l'enregistrement d'un état de la situation réelle, par les sens, par un instrument, ou par le constat, fait par celui qui raisonne, que son propre acte a lieu. Une mesure porte sur la situation réelle : aucune mesure n'établit à elle seule qu'une chose est possible ou nécessaire. « intelligible », employé par D5, est à définir ou à déclarer premier.

## 5. Constat d'existence

### E1. Quelque chose existe

Établi avec observation (D16) : il repose sur le constat que l'acte de nier a lieu.

**Si tu le nies**, tu poses « rien n'existe », `¬∃x (x = x)`. Ce n'est pas une contradiction logique : dans une interprétation sans aucun objet, cet énoncé est vrai et aucune formule n'y est à la fois vraie et fausse (T2). La négation se heurte en revanche à l'acte qui la pose. Dire quoi que ce soit d'une chose, par exemple « l'acte de nier a lieu », n'a de valeur de vérité que si cette chose est un objet du domaine, donc si elle existe au sens de D8. Quiconque dit ou pense « rien n'existe » accomplit un acte qui a lieu ; cet acte existe ; la négation est fausse dès qu'elle est posée. La maintenir exige qu'un acte puisse avoir lieu sans exister, donc un second sens d'« être » : c'est l'équivoque que la contrainte 5 interdit. Si elle tenait malgré tout, l'examen n'aurait plus d'objet ni de juge. Accepter E1 engage peu : qu'au moins une chose existe ne dit pas laquelle, et `∃x (x = x)` n'implique `∃x F(x)` pour aucune propriété F (contre-modèle : un seul objet, qui n'a pas F). Ni l'univers physique, ni un corps, ni d'autres esprits n'en découlent.
