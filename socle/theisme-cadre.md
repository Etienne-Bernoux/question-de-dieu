---
title: Examen du théisme — cadre admis
type: knowledge
scope: perso
projet: []
domaine: [philosophie, logique]
tags: [theisme, axiomes, definitions, modalite]
status: draft
updated: 2026-11-03
---

# Cadre admis

Le langage, les principes et les définitions sur lesquels reposent tous les modules. Le socle (§4 : axiomes, définitions, termes premiers) est admis par l'utilisateur ; K, T et U s'en démontrent ; E1 est démontré avec observation et n'appartient pas au socle. Les statuts sont au [[theisme-registre]], les décisions et leurs dates au [[theisme-journal]], les preuves mécaniques dans [[theisme-verifications]]. Chaque principe est suivi de ce qu'implique sa négation : on peut le nier, voici ce que cela coûte.

## 1. Notation et deux niveaux de sens

`P`, `Q`, `R` : énoncés. `F(x)` : « x a la propriété F ». `∃x F(x)` : « au moins une chose a F » ; `∀x F(x)` : « toute chose a F ». Connecteurs : `¬` non, `∧` et, `∨` ou, `→` si... alors, `P ↔ Q ≝ (P → Q) ∧ (Q → P)`. `□P` : « il est nécessaire que P », nécessité d'un **énoncé** ; `◇P ≝ ¬□¬P` : « il est possible que P ». À ne pas confondre avec l'**être** nécessaire (D2), qui ajoute la condition de ne dépendre de rien. `E(x)` : « x existe ». `G ≝ ∃x Dieu(x)`.

Deux notions servent à donner un sens aux énoncés ; elles ne se confondent pas.

- **Situation possible** : terme premier, non défini. Elle sert à **donner un sens à « nécessaire »** : `□P` est vrai si P est vrai dans toute situation possible, `◇P` s'il l'est dans au moins une. De ce sens se démontrent K, T et U (§3).
- **Modèle** : il sert à **tester un raisonnement**. Un modèle comporte :
  - des situations, toutes possibles l'une depuis l'autre, dont une est la situation réelle ;
  - des objets, et pour chaque situation un domaine : les objets qui y existent ; un domaine peut être vide, et un objet peut n'appartenir au domaine d'aucune situation ;
  - pour chaque situation, l'extension de chaque propriété et de la relation de cause ; la raison n'y est pas stipulée : elle se calcule par D18 à partir de ce qui est vrai dans chaque situation ;
  - des noms : chaque nom désigne le même objet dans toutes les situations, que cet objet appartienne ou non à leur domaine.

  Dans chaque situation, les connecteurs se calculent selon S, `∃x` et `∀x` portent sur son domaine, et `E(a)` y est vrai si l'objet que désigne `a` appartient à ce domaine (D8). Un énoncé est vrai dans un modèle s'il est vrai dans sa situation réelle ; il est **valide** s'il est vrai dans toute situation de tout modèle. Valide n'est pas démontré : seule une démonstration (R, §2) établit un énoncé. Une inférence est invalide s'il existe un modèle où ses prémisses sont vraies et sa conclusion fausse (contre-modèle). Un modèle à une seule situation est une **interprétation**.

**Nommer.** Toute chose dont parle l'étude peut recevoir un nom nouveau. Cette règle n'affirme l'existence de rien : elle dit seulement qu'aucune chose n'est hors de portée d'un nom.

**Si tu la nies**, il y aurait des choses dont parle l'étude et qu'aucun nom ne peut désigner. Aucune contradiction n'en est démontrée. Le coût est épistémique et vaut dans les deux sens : rien ne pourrait être démontré d'une de ces choses en particulier, ni qu'elle existe, ni qu'elle n'existe pas, ni qu'elle est nécessaire ou non (les résultats quantifiés, comme P1, T3e et T10, les couvrent encore) ; T9 ne vaudrait plus que pour les choses nommées.

### Identité entre situations

Une chose qui existe dans plusieurs situations possibles y est la même chose : cela vaut pour toute substance (D10), contingente ou nécessaire, et un nom la désigne même dans une situation où elle manque.

**Si tu la nies**, deux situations ne partagent aucune chose : un objet d'une situation n'a, dans une autre, qu'un correspondant qui y tient le même rôle. Aucune contradiction n'en est démontrée. Le coût porte sur les définitions qui suivent une chose d'une situation à l'autre : « existe dans toute situation possible » (D20), et donc D2, ainsi que D11 et D12, devraient être réécrites en termes de rôles ; la démonstration de P1 (L3), L4, T8 et T9 perdent leur preuve, et « a n'existe pas en s2 » ne s'énonce plus, faute d'un nom qui désigne une chose absente. T3, T3e et T6 n'en dépendent que par P1 ; T7 et T10 n'en dépendent pas.

### Langage objet et langage d'analyse

Le langage objet est celui des énoncés examinés : `P`, `F(a)`, `E(a)`, `G`, et les noms des choses. Le langage d'analyse est celui dans lequel on parle de ces énoncés pour les tester ou les compter : « il existe un modèle où… », « dans toute situation possible », « deux situations ». Les quantifications sur des situations, des énoncés, des modèles et des nombres appartiennent au langage d'analyse et ne tombent pas sous D8 : dire qu'il existe un modèle n'affirme pas qu'un modèle existe. **F1** : les numéraux (« 2 », « deux ») appartiennent au seul langage d'analyse ; A1 et D8 ne s'appliquent qu'aux termes du langage objet.

**Si tu le nies**, quantifier sur des situations, des modèles ou des nombres affirme qu'ils existent au sens de D8 : ils comptent parmi ce qui existe, et parmi le monde s'ils existent dans la situation réelle (D7) ; chaque contre-modèle devient une chose qui existe, et les coûts de chaque position sont à refaire, à commencer par la thèse 1 du naturaliste, qui n'admet comme existant que ce qui se mesure ou entre en relation de cause avec ce qui se mesure ([[theisme-ph-naturaliste]]). Tenir ce quantificateur pour un second sens d'« être » (contrainte 5 du [[theisme-protocole]]) demande la prémisse « toute quantification engage l'existence », qui n'est pas au socle. Si tu nies F1 seulement, « 2 » devient un nom du langage objet ; l'hypothèse Nb ([[theisme-registre]]) reste alors ouverte à deux conditions : de `F(a)` on ne tire `∃x F(x)` dans une situation qu'avec la prémisse `∃x (x = a)` dans cette situation ; un nom peut désigner un objet qui n'appartient au domaine d'aucune situation. Sans la seconde, « 2 » désignerait un objet qui existe dans une situation, et Nb serait réfutée si `Nombre(2)` était vrai, ce qu'aucun axiome ne donne. Qu'un objet désigné qui n'existe dans aucune situation introduise un second sens d'« être » n'est pas tranché.

## 2. Principes logiques

### B. Bivalence

Il n'y a que deux valeurs de vérité ; tout énoncé est vrai ou faux, jamais les deux ; « non-P » est vrai exactement quand P est faux.

**Si tu la nies**, tu admets un énoncé ni vrai ni faux, ou à la fois vrai et faux. Le second cas revient à affirmer P et non-P : c'est une contradiction (A2). Le premier ne l'est pas : un cadre à quatre valeurs respecte A1 à A4 et toutes les règles retenues, et y loge un énoncé ni vrai ni faux (matrice 4 de [[theisme-verifications]], qui définit matrices, valuations et valeurs désignées). Le coût est étrange et touche directement l'étude : « P ou non-P » y est vrai sans que P ni non-P le soit. Appliqué à `G`, « Dieu existe ou n'existe pas » serait vrai sans que « Dieu existe » ni « Dieu n'existe pas » le soit ; l'examen pourrait s'achever sans réponse, non par ignorance mais parce qu'il n'y en aurait pas. Ce que le refus coûte encore : RC tombe, et avec elle les démonstrations de K, T et U ; L1, L2, L5 et T3a, dérivés par les autres règles de R, n'emploient B qu'à travers K, T, U et P1 ; T3b, T3c et T3d l'emploient aussi par AM ; AM, T3e, L3 (donc P1), L4, T1 (ligne 2), T5, T6, T7, T8 et T10 l'emploient directement. Ce qu'il ne coûte pas : les règles de R autres que RC n'utilisent pas B ; les contre-modèles à deux valeurs (T1, T2) restent des interprétations admissibles, et une seule suffit à prouver une invalidité ; A4, admise pour elle-même, reste admise, seule sa justification par B et S tombe.

### S. Calcul des connecteurs

« P et Q » est vrai si les deux le sont ; « P ou Q » si au moins un l'est ; « si P alors Q » est faux seulement quand P est vrai et Q faux. Conséquence admise : un jour où il pleut, « s'il pleut, alors 2 + 2 = 4 » est vrai, sans aucun lien entre la pluie et l'arithmétique. Les liens réels (cause, raison, dépendance) sont définis à part (D4, D5, D19, M6).

**Si tu le nies**, il faut donner un autre sens à « si... alors », seul connecteur en débat. Deux voies existent. Première voie, garder un calcul à partir des valeurs des parties : sous B et les règles retenues, un seul autre calcul est possible, celui où « si P alors Q » est vrai exactement quand P et Q ont la même valeur ([[theisme-verifications]], énumération des calculs). Il rend « si P alors Q » équivalent à « si Q alors P » : « si Dieu existe, il existe nécessairement » vaudrait autant que « s'il existe nécessairement, il existe », et toute implication perdrait sa direction. Seconde voie, exiger un lien réel. Or, un jour où il pleut, « s'il pleut, alors 2 + 2 = 4 » et « si 2 + 2 = 4, alors 2 + 2 = 4 » ont des composantes de mêmes valeurs (vrai, vrai) ; si la première est fausse et la seconde vraie (A1), la valeur de « si... alors » ne se calcule plus à partir des valeurs de ses parties, et dépend d'un lien qu'il faut définir. Le coût est épistémique : ce lien (cause, raison, dépendance) est l'objet même des modules M1, M2 et M6, et le définir dès le départ préjugerait de leur examen. La justification de A4, la règle RC, et avec elle les démonstrations de K, T et U, donc tout l'examen modal (L1 à L5, P1, AM, T1 ligne 2, T3, T3e, T5 à T8, T10), seraient à refaire ; A4, admise pour elle-même, resterait admise.

### A1. Identité

`a = a` ; `P → P`.

**Si tu la nies**, un terme peut ne pas être identique à lui-même : un même mot désignerait autre chose d'une ligne à l'autre. Aucune contradiction formelle n'en est démontrée. La contradiction est performative (contrainte 3) : énoncer le refus suppose d'employer ses propres termes avec un sens stable, ce que le refus nie. Le coût est total : le contrôle d'équivoque devient impossible, donc toute démonstration.

### A2. Non-contradiction

`¬(P ∧ ¬P)`.

**Si tu la nies**, tu poses qu'au moins un énoncé est vrai en même temps que sa négation : tu affirmes A et non-A. C'est une contradiction au sens du protocole ; le refus est intenable. Il ne force pas pour autant à tout accepter : dans un cadre à trois valeurs où un énoncé et sa négation peuvent être tenus ensemble pour vrais, n'importe quelle conclusion n'en découle pas (matrice 2 ; la formule `¬(P ∧ ¬P)` y reste désignée, c'est le principe « aucun énoncé n'est vrai avec sa négation » qui y tombe) ; ce cadre perd cependant le modus ponens, le modus tollens, le syllogisme disjonctif et l'enchaînement. Dans un tel cadre, la contradiction n'est plus un motif de rejet, et l'examen ne peut plus distinguer un refus intenable d'un simple coût : il s'arrête.

### A3. Tiers exclu

`P ∨ ¬P`.

**Si tu le nies**, tu restes cohérent, à condition de renoncer aussi à B ou à S, sous lesquels A3 vaut (matrice 0) : un cadre à trois valeurs garde A1, A2, A4 et toutes les règles, et rejette A3 (matrice 1). Le coût est épistémique et porte sur un type de preuve, quel que soit le camp qui l'emploie : on ne peut plus prouver qu'une chose existe en montrant que sa non-existence est absurde, car cela exige la double négation (`¬¬P ⊢ P`), que ce cadre rejette et que les règles seules ne donnent pas (T0). Prouver qu'une chose n'existe pas en montrant que son existence est absurde reste valide (absurde négatif). Chaque preuve d'existence par l'absurde est donc marquée comme dépendante de B et S (T0).

### A4. Introduction de la double négation

`P → ¬¬P`.

**Si tu la nies**, tu admets un énoncé P vrai sans que « non-non-P » le soit. Sous B et S, c'est une contradiction : si P est vrai, « non-P » est faux, donc « non-non-P » est vrai ; les deux cas suffisent (matrice 0). Sans S, et avec une troisième valeur, le refus est cohérent avec A1, A2 et A3, mais il emporte la contraposition et l'absurde négatif (matrice 3). Il n'est pas établi que A4 se dérive des seuls axiomes et règles retenus : la recherche sur tous les cadres à trois valeurs d'une même famille n'en trouve aucun qui respecte tout le retenu et refuse A4, ce qui ne prouve pas la dérivabilité. Pour l'étude, le refus est asymétrique : L2 et L5 reposent sur A4, donc « Dieu peut ne pas exister, donc Dieu n'existe pas » (T3a) n'est plus démontré, alors que « Dieu peut exister, donc Dieu existe » (T3b) n'utilise pas A4.

### R. Règles d'inférence

Modus ponens (`P → Q`, `P` ⊢ `Q`), modus tollens (`P → Q`, `¬Q` ⊢ `¬P`), syllogisme disjonctif (`P ∨ Q`, `¬P` ⊢ `Q`), élimination de la conjonction (`P ∧ Q` ⊢ `P`), enchaînement (`P → Q`, `Q → R` ⊢ `P → R`), contraposition `(P → Q) → (¬Q → ¬P)`, absurde négatif `(P → (Q ∧ ¬Q)) → ¬P`.

**RC, raisonnement par cas sur le sens des mots, sous B et S.** Un énoncé est démontré s'il est vrai dans chacun des cas que laissent ouverts B (les valeurs des énoncés qu'il contient) et le sens des mots (S pour les connecteurs ; §1 pour `□`, `◇`, les quantificateurs et les modèles). Supposer P et montrer Q dans le cas où P est vrai démontre `P → Q`, le cas où P est faux rendant `P → Q` vrai (S). Chaque démonstration note son niveau : « dérivation » quand elle n'emploie que les règles qui précèdent, « RC » quand elle emploie celle-ci.

**Si tu nies l'une des règles qui précèdent RC**, tu admets que ses prémisses soient vraies et sa conclusion fausse. Sous B et S, chacune se vérifie en parcourant tous les cas (matrice 0) : le refus est une contradiction.

**Si tu nies RC** tout en gardant B et S, tu admets qu'un énoncé vrai dans chacun des cas que B laisse ouverts ne soit pas pour autant établi. Aucune contradiction : on peut toujours restreindre les démonstrations aux règles qui précèdent. Le coût est épistémique et touche tout l'examen modal : K, T et U perdent leur démonstration, et avec eux tout ce qui les emploie (L1 à L5, P1, AM, T3, T3e, T6, T7, T8, T10), ainsi que T1 (ligne 2) et T5 ; restent les résultats qui n'emploient que les règles qui précèdent RC, et ceux qui exhibent un modèle (T0, T2, T9, T11). Si tu nies B ou S, RC tombe avec eux : sa garantie est ce qu'ils fixent.

## 3. Principes modaux

N est un axiome ; K, T et U se démontrent du sens de « nécessaire » fixé en §1 et de la caractérisation de la situation réelle (§4). Nier l'un de ces trois, c'est changer le sens de « nécessaire ».

### N. Nécessitation

Ce que la logique démontre à partir de ses seuls axiomes est nécessaire.

**Si tu la nies**, il existerait une situation possible où une vérité logique est fausse. Aucune contradiction : en déclarant « nécessaire » faux pour tout énoncé, K et T restent vraies et seule N échoue ; ce modèle quitte cependant le sens de « nécessaire » fixé en §1. Le coût est épistémique et lourd pour les deux camps. Tout devient possible, contradictions comprises, et l'on ne peut plus écarter une situation parce qu'elle se contredit : passer de « ceci se contredit » à « ceci est impossible » exige N appliquée à A2. Deux raisonnements opposés perdent alors leur démonstration : l'objection « les attributs de Dieu sont incohérents, donc Dieu est impossible » (M8), et toute défense qui écarte une objection parce qu'elle serait contradictoire. L1, L2 et T3 reposent sur N et ne sont plus démontrés. La voie de H1 vers un être nécessaire suppose que la logique vaut dans toute situation possible, ce que N énonce.

### K. Distribution

`□(P → Q) → (□P → □Q)`.

**Démontré** (RC). Si `□(P → Q)` et `□P` sont vrais, `P → Q` et `P` sont vrais dans toute situation possible, donc `Q` aussi (S, dans chaque situation) : `□Q` (§1). Le cas où l'antécédent est faux rend l'énoncé vrai (S).

**Si tu le nies**, tu changes le sens de « nécessaire ». Le refus n'est cohérent qu'en coupant « nécessaire » des situations : si l'on déclare nécessaires les vérités logiques, `p` et `p → q`, mais pas `q`, avec `p` et `q` vrais, N et T tiennent et K échoue. « Nécessaire » devient alors une étiquette, en équivoque avec le sens fixé en §1. L1, L2 et T3 ne sont plus démontrés ; la voie de H1 aussi, car passer de « la logique vaut nécessairement » et « nécessairement, si la logique vaut, x existe » à « x existe nécessairement » est une application de K.

### T. Factivité

`□P → P` : ce qui est nécessaire est vrai dans les faits.

**Démontré** (RC). Si `□P` est vrai, P est vrai dans toute situation possible (§1) ; la situation réelle en est une (§4), comme toute situation d'où l'on évalue : P y est vrai.

**Si tu le nies**, tu changes le sens de « nécessaire » : tu admets un P nécessaire et faux dans les faits. Il s'ensuit qu'un fait n'est pas possible : de `□P`, par A4, N et K, on tire `□¬¬P`, soit « non-P n'est pas possible », alors que non-P a lieu. Le refus n'est cohérent qu'en retirant la situation réelle des situations possibles : si l'on déclare tout énoncé nécessaire, N et K tiennent, T échoue, et plus rien n'est possible, pas même ce qui a lieu. La nécessité ne dit plus rien des faits. L5 perd sa démonstration, et les deux branches de T3 la leur : l'une a besoin de T pour passer de « Dieu existe nécessairement » à « Dieu existe », l'autre pour tirer de P1 « si Dieu existe, il existe nécessairement ». H1 s'arrête à « x existe nécessairement ».

### U. Ensemble unique des situations possibles

Les situations possibles sont les mêmes quelle que soit la situation d'où l'on regarde.

**Démontré** (RC). Le §1 fixe la valeur de `□P` par l'ensemble des situations possibles, sans référence à la situation d'où l'on évalue : cet ensemble est donc le même de partout.

**Conséquence démontrée, AM** : `◇□P → □P` (RC). (1) Si `◇□P`, il existe une situation possible `s` où `□P` est vrai ; (2) `□P` vrai en `s` signifie que P est vrai dans toute situation possible, et par U cet ensemble ne dépend pas de `s` ; (3) donc `□P`. Le cas où `◇□P` est faux rend l'énoncé vrai (S).

**Si tu nies U**, tu changes le sens de « nécessaire » : ce qui est possible dépend de la situation d'où l'on regarde, et `□P` est vrai en `s` si P est vrai dans toute situation possible **depuis** `s`. Aucune contradiction alors : avec deux situations `s` et `r`, où depuis `s` sont possibles `s` et `r`, depuis `r` seule `r`, et P vrai en `r` seulement, on a en `s` `◇□P` vrai et `□P` faux, tandis que N, K et T tiennent. Le premier coût est de définition : D2 et D20 devraient dire « toute situation possible depuis la situation réelle », et la nécessité deviendrait relative à un point de vue ; avec trois situations `w`, `u`, `v` (depuis `w` : `w`, `u` ; depuis `u` : `u`, `v` ; depuis `v` : `v`), un être qui existe en `w` et `u` mais pas en `v` est nécessaire vu de `w` et ne l'est pas vu de `u`. Le second coût : L3 emploie U, donc P1 perd sa démonstration ; T3a reste dérivable de P1, T3b perd de plus AM ; et T7 tombe entier, son sens direct exigeant que la possibilité soit symétrique, son sens réciproque qu'elle soit transitive. On peut alors tenir ensemble P1, « Dieu peut exister » et « Dieu peut ne pas exister » : depuis `s`, réelle, sont possibles `s` et `r`, depuis `r` seule `r` ; rien n'est cause de `x`, qui n'existe qu'en `r` ; un contingent `c` n'existe qu'en `s` ; D20 se lit « dans toute situation possible depuis le point de vue ». En `s`, P1, `◇G` et `◇¬G` sont vrais.

## 4. Définitions

**Socle** : les axiomes (B, S, A1 à A4, R, N), les définitions et les termes premiers de ce cadre. E1 n'en fait pas partie : c'est une observation, que chacun établit par le constat de son propre acte (§5).

| ID | Terme | Définition | Écarté, et pourquoi |
|---|---|---|---|
| D1 | Dieu | `x` est Dieu si `x` est nécessaire au sens de D2 | La version du brief (nécessaire, personnel, cause du monde, bon) conjoignait quatre attributs, chacun à démontrer séparément ; « cause du monde », avec D7, ferait de Dieu la cause d'une totalité qui le contient : ces attributs deviennent H2 à H4. Une clause « x est sa propre raison d'exister » exigeait que l'existence de Dieu ait une raison (D5), ce que M1 examine : elle aurait tranché M1 d'avance ; elle ne tranchait pas G |
| D2 | Nécessaire (être) | `x` est nécessaire s'il est inévitable (D20) et si, dans toute situation possible, il ne dépend de rien (D19) : il existe **par soi** | Le sens logique (sa non-existence serait contradictoire), écarté par la règle de symétrie (contrainte 9 du [[theisme-protocole]]) : pour toute chose, une situation où elle n'existe pas est concevable (T9, sous la condition qui suit) ; aucune chose ne serait nécessaire en ce sens, ce qui trancherait ¬G par définition, alors que le sens réel laisse G ouvert. L'écarter n'est pas le réfuter ; la thèse correspondante reste examinable comme hypothèse (H1′). Une chose est jugée par le nom que lui donne la base de concevabilité (D17). Condition : cette base n'entraîne `E(a)` pour aucun nom `a` ; elle est remplie (A1 et D8 sont des schémas) ; à revérifier si M6 admet un axiome qui l'entraîne (H1). « Ce sans quoi la logique ne vaudrait pas » : lue matériellement, écartée par la règle de symétrie, car `¬E(x) → ¬L` a la valeur de `E(x)` (T5) et, avec `∃x (x = x)`, rendrait G vrai ; lue strictement, elle se ramène à l'inévitabilité (T8) et ne tranche pas G ; dans les deux cas, c'est une thèse, pas un sens (H1). « Nécessaire par un autre » pour l'inévitable dépendant, pour un autre motif : réemploie « nécessaire » dans un sens plus faible (équivoque). « Ne dépendre de rien dans la seule situation considérée », pour un autre motif : un être pourrait être nécessaire dans une situation et dépendre dans une autre, et P1 ne découlerait plus de D2 (modèle B de [[theisme-m0-resultats]]) ; la dépendance peut varier d'une situation à l'autre pour un contingent, non pour un être nécessaire |
| D3 | Contingent | qui pourrait ne pas exister : non inévitable (D20) | |
| D4 | Cause | ce qui produit l'existence ou l'occurrence d'autre chose (« produire » : terme premier, ci-dessous) | Fusion avec « raison » : un argument qui établit une raison pourrait conclure à une cause |
| D5 | Raison | ce qui rend intelligible (D18) qu'une chose soit, ou soit ainsi ; une chose n'est jamais sa propre cause ; les raisons de soi admises sont un paramètre de D18, fixé en M1 ; « l'existence de x a sa raison en y » : pont de D18 | |
| D6 | Fait brut | ce qui existe ou a lieu sans cause ni raison ; en attente de M1, qui fixe la raison d'exister (D18) | |
| D7 | Monde | tout ce qui existe dans la situation réelle, au sens de D8 ; les choses qui n'existent que dans d'autres situations possibles en sont exclues | « L'univers physique » présuppose connues ses limites. Inclure les simples possibles exigerait un second sens d'« être ». Une version qui parlait de « moment » et de « temps » employait un terme défini seulement en M3 |
| D8 | Exister | `a` existe dans une situation `s` si `∃x (x = a)` est vrai en `s`, sans aucune restriction sur ce qui compte ; « `a` existe », sans précision, vaut pour la situation réelle | Quand M3 définira « temps », il ajoutera que, si la situation réelle comporte un temps, D8 compte ce qui a existé et ce qui existera |
| D9 | Le contingent | tout ce qui existe et est contingent (D3) | « Tout ce qui existe sans être nécessaire » : y aurait rangé l'inévitable dépendant, qui n'est pas contingent |
| D10 | Substance | ce qui existe sans être une propriété d'autre chose | |
| D11 | Nature d'une chose | les propriétés qu'elle a dans toutes les situations possibles où elle existe : ce qu'elle ne pourrait perdre sans cesser d'être elle-même | Laisser « nature » non défini : les raisonnements qui l'emploient reposeraient sur un mot dont l'usage ne se vérifie pas |
| D12 | Accident | propriété qu'une chose a dans certaines des situations possibles où elle existe, mais pas dans toutes | |
| D13 | Expérience | l'ensemble des observations faites ou réalisables | |
| D14 | Mesure | observation qui attribue une valeur numérique à une propriété, selon une procédure que n'importe qui peut reproduire | |
| D15 | Établi sans observation | énoncé démontré à partir du seul socle | « A priori » : le mot latin se lit couramment « avant coup » et invite l'équivoque |
| D16 | Établi avec observation | énoncé démontré avec au moins une observation parmi ses prémisses | « A posteriori » : se lit couramment « après coup » |
| D17 | Concevable | un énoncé est concevable s'il existe un modèle (§1) où le socle, `∃x (x = x)` et cet énoncé sont vrais ensemble : le supposer n'engendre aucune contradiction. E1 n'entre dans cette base que sous la forme `∃x (x = x)`, sans nom ; l'observation de l'acte reste la preuve de E1 (§5), hors de cette base | Le pas « concevable, donc possible » mène à une contradiction (T6) |
| D18 | Rendre intelligible | dans une situation `s`, une base de raison M rend P intelligible si P se démontre de M et du socle, si P n'est pas une partie de M, si aucune partie stricte de M ne suffit, et si aucun sous-ensemble de M, M compris, n'entraîne P par la seule identité ; pour `P = E(x)`, cette clause relève du paramètre « raisons de soi » (M1) ; base de raison, pont et paramètres : ci-dessous | Laisser « intelligible » premier : M1 porterait sur un mot invérifiable. Pont absolu (observations au lieu d'énoncés vrais dans `s`, raison valant dans toute situation) : son coût tombe sur Pc, hypothèse qui sert G, et il exclut les universels, aucune observation n'en établissant un. Pont restreint aux existants de `s` : mettrait dans une définition une moitié de Pc. Une définition de la raison d'exister dès M0 : admettre le renommage rendrait Pr_c vraie par définition, le bloquer la rendrait équivalente à « aucun contingent n'existe » ; elle trancherait M1 |
| D19 | Dépendre (pour exister) | x dépend de y pour exister dans une situation `s` si y est distinct de x et si, dans `s`, y est cause de l'existence de x (D4) ou l'existence de x a sa raison en y (D5, pont de D18) ; cette clause de raison est en attente de M1. « Ne dépendre de rien » dans `s` : n'y avoir ni cause, ni raison hors de soi ; cela n'exige pas d'avoir une raison | « Si y n'existait pas, x n'existerait pas », pour un autre motif, sans trancher G : lue matériellement, elle a la valeur de `E(x) → E(y)` (calcul de T5) ; lue strictement, `□E(y)` entraîne `□(¬E(y) → ¬E(x))` (calcul de T8) et ferait dépendre toute chose de tout être qui existe dans toute situation ; dans les deux cas, elle ne distingue rien. La dépendance d'une validité (H1) pourra demander une extension en M6 |
| D20 | Inévitable | qui existe dans toute situation possible ; « qui ne peut pas ne pas exister ». Un être inévitable qui dépend de quelque chose dans au moins une situation est dit **inévitable dépendant** : il n'est ni nécessaire (D2) ni contingent (D3) | |

### Base de raison (D18)

- **Énoncé atomique** : il attribue une propriété ou une relation à des noms : `F(a)`, `E(a)`, `a = b`, « `a` est cause de l'existence de `b` » ; il ne contient ni connecteur, ni quantificateur, ni la relation de raison.
- **Base de raison dans `s`** : un ensemble M dont chaque partie est un axiome ou une définition ; un énoncé atomique, ou sa négation, vrai dans `s` ; ou un universel clos sans nom, vrai dans `s`, étiqueté (R) s'il est démontré à partir du seul socle (D15), (O) s'il est tiré de l'observation.
- **Pont** : dans `s`, l'existence de x a sa raison en y s'il existe une base de raison M, vraie dans `s`, sans `E(x)`, dont `E(x)` se démontre avec le socle, dont aucune partie stricte ne suffit, dont aucun sous-ensemble, M compris, n'entraîne `E(x)` par la seule identité, et dont un énoncé non axiomatique porte sur y. Pour `E(x)`, cette clause d'identité relève du paramètre « raisons de soi », fixé en M1.
- **Statut d'une raison** : sans hypothèse (O) si M n'emploie aucun universel (O), ses atomes pouvant être vrais dans `s` sans être observés ; sous hypothèse sinon, et elle tombe avec l'universel qu'elle emploie.
- **Paramètres fixés en M1** : les universels admis et les raisons de soi admises. M0 ne définit pas la raison d'exister : D6, Pr_c, et la part « raison » de D19 et de Pc sont en attente de M1.

La raison peut varier d'une situation à l'autre sans y être obligée : si la même base est vraie dans `s1` et dans `s2`, la même raison vaut dans les deux ; une autre base minimale peut ne valoir que dans l'une. La raison et la cause sont distinctes (D4, D5).

Limites. Deux cercles sont bloqués : le cercle simple `R ∧ (R → P)`, `R → P` n'étant pas atomique ; le cercle par remplissage `(b = b) → O`, où O est une observation, qui donnerait à tout observé sa raison en toute chose nommée. Le renommage (`{E(a), a = x}`) est bloqué hors existence, par la clause d'identité ; pour `E(x)`, il l'est selon le paramètre « raisons de soi » (M1). Les autres cercles déguisés sont à traquer au cas par cas. Aucun universel sans nom ne rend raison de l'existence d'une chose nommée (T11) : un universel rend raison de ce qu'une chose soit ainsi, non qu'elle existe. Un universel vrai par coïncidence compte comme loi : distinguer la loi de la coïncidence relève de M1. Des faits réels non observés peuvent être des raisons dans `s`. Un événement seulement probable n'a pas de raison au sens de D5 ; il n'est un fait brut que s'il n'a pas non plus de cause (D6).

**Si tu exclus les universels de la base**, aucune loi ne rend raison de ce qu'une chose soit ainsi : `F(e)` n'aurait de raison que par d'autres faits singuliers joints aux définitions. Aucune contradiction ; le coût est épistémique : toute raison se réduit à des faits singuliers.

**Si tu nies qu'un universel (O) n'est qu'une hypothèse**, tu tiens pour établi un universel tiré d'observations. Or une observation est un énoncé atomique ou sa négation (§4) : aucune ne contient un universel, et une seule observation contraire le rend faux (B) : `¬F(a)`, joint à `E(a)`, rend faux `∀y F(y)`. Le tenir pour établi, c'est conclure de l'observé à l'inobservé sans démonstration (contrainte 6 du [[theisme-protocole]]).

**Si tu nies qu'une observation contraire retire la loi avec les hypothèses employées avec elle**, tu gardes la loi en tenant pour fausse une autre de ces hypothèses sans le montrer. La contradiction entre l'observation et l'ensemble est réelle (A2) ; la lever par un choix non démontré reporte la charge sur l'adversaire, ce que la contrainte 7 interdit. Qui garde la loi porte la charge de montrer qu'une autre hypothèse est la fausse.

**Si tu nies la clause d'identité**, `{E(a), a = x}` rend raison de l'existence de x : par « Nommer » (§1), toute chose qui existe est sa propre raison, D6 est vide pour l'existence, et M1 est tranché par définition. La tenir pour `E(x)` rend Pr_c équivalente à « aucun contingent n'existe » (T11) : les deux sens tranchent M1, d'où le paramètre « raisons de soi ».

Remarque sur D2 : dire qu'aucun être nécessaire n'existe n'est pas contradictoire (modèle 2 de T6).

Avertissement : exister **en soi** (être une substance, D10) n'est pas exister **par soi** (D2). Un arbre existe en soi, non par soi : il dépend de causes. Les confondre ferait de toute substance un candidat à D1.

Conséquence de D11 : toute chose a « exister » dans toutes les situations possibles où elle existe ; l'existence appartient donc à la nature de toute chose, contingente comprise.

Règle de lecture : D1 ne contient ni H3 ni H4 ; « Dieu existe » signifie « un être nécessaire existe », rien de plus.

Mots non définis, interdits dans une inférence avant leur définition : « temps » (M3), « personnel » (M4), « bon » (M5), « tout » et « partie » d'un être (M4).

### Termes premiers

Admis sans définition.

- **Situation possible** (§1).
- **Situation réelle** : l'une des situations possibles (T s'en démontre), celle sur laquelle portent les observations.
- **Observation** : l'enregistrement d'un état de la situation réelle, par les sens, par un instrument, ou par le constat, fait par celui qui raisonne, que son propre acte a lieu. Elle s'énonce par un énoncé atomique ou sa négation (D18). Ce qu'une observation enregistre comme ayant lieu dans la situation réelle existe dans cette situation (D8). Une observation porte sur la situation réelle. Une observation de P établit `◇P` (L5) ; elle n'établit pas, à elle seule, `□P` : deux situations, `s1` réelle et `s2`, P vrai en `s1` et faux en `s2` ; quand P est une vérité logique, `□P` vient de N.
- **Produire** (D4) : sans définition positive, borné par trois limites : il n'implique aucun ordre de temps (M3) ; il n'implique aucune propriété relevant de H3 (intention, volonté, connaissance) ; il est distinct de « rendre intelligible » (D18).
- **Nombre** : prédicat sans axiome, qui sert seulement à énoncer l'hypothèse Nb ([[theisme-registre]]).

« Intelligible » est défini par D18.

**Si tu nies le complément de la caractérisation d'« observation »**, une observation pourrait enregistrer qu'une chose a lieu dans la situation réelle sans que cette chose existe dans cette situation. Aucune contradiction n'en est démontrée. Le coût est épistémique et pèse sur tous les camps : E1 n'a plus de démonstration, aucune observation n'établit plus qu'une chose existe, et les énoncés établis avec observation (D16) ne portent plus sur ce qui existe.

**Si tu nies qu'une observation est un énoncé atomique ou sa négation**, une observation peut contenir un universel : une observation établirait alors un universel, et le motif du statut (O) des universels tirés de l'observation (D18) tombe. D18 n'est pas touchée : la base de raison prend les énoncés atomiques vrais dans `s`, non les observations. Aucune contradiction ; le coût est épistémique : on tiendrait pour établi ce qu'aucun fait singulier ne contient.

**Si tu refuses « produire » comme terme premier**, D4 doit définir la cause autrement. La définir par la dépendance est circulaire, D19 définissant la dépendance par la cause (D4) ; il faudrait faire de « dépendre » un terme premier et refaire D19, L4 et Pc. Laisser le mot sans statut, c'est employer un terme absent du cadre (règle 1 de la [[theisme-population]]).

## 5. Constat d'existence

### E1. Quelque chose existe

Établi avec observation (D16) : il repose sur le constat que l'acte de nier a lieu.

**Si tu le nies**, tu poses « rien n'existe », `¬∃x (x = x)`. Ce n'est pas une contradiction logique : dans un modèle dont la situation réelle a un domaine vide, cet énoncé est vrai (T2). La négation se heurte en revanche à l'acte qui la pose. Quiconque dit ou pense « rien n'existe » constate que cet acte a lieu : c'est une observation (§4). Ce qu'une observation enregistre comme ayant lieu dans la situation réelle existe dans cette situation : l'acte existe, et la négation est fausse dès qu'elle est posée. La maintenir exige de nier ce complément de la caractérisation d'« observation », avec le coût écrit au §4. Admettre E1 engage peu : qu'au moins une chose existe ne dit pas laquelle, et `∃x (x = x)` n'implique `∃x F(x)` pour aucune propriété F qu'un objet peut ne pas avoir (contre-modèle : un seul objet, qui n'a pas F). Ni l'univers physique, ni un corps, ni d'autres esprits n'en découlent.
