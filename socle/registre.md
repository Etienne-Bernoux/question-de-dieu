---
title: Question de Dieu : registre
type: knowledge
scope: perso
projet: []
domaine: [philosophie, logique]
tags: [question-de-dieu, registre]
status: draft
updated: 2026-11-05
---

# Registre

Statut de chaque énoncé. Règle de tri : une définition fixe le sens d'un mot ; tout énoncé qui peut être faux et qu'on admet sans preuve est un axiome. AXIOME : énoncé qui peut être faux, admis sans preuve par l'utilisateur, avec son paragraphe de refus. DÉFINITION : terme fixé, ou terme premier ; elle n'affirme rien qui puisse être faux. DÉMONTRÉ : dérivé d'axiomes, de définitions et d'observations. DÉMONTRÉ SOUS HYPOTHÈSE : dérivé avec l'hypothèse nommée parmi les prémisses ; ne vaut que si elle est vraie. SOUS RÉSERVE : la démonstration a une lacune nommée. HYPOTHÈSE : énoncé qui peut être faux, ni démontré ni admis, avec son paragraphe de refus (contrainte 8 du [protocole](../methode/protocole.md)). CONTESTÉ : écarté. Contenu et paragraphes de refus : [cadre](cadre.md) et [m0-resultats](../modules/m0-resultats.md) ; décisions : [journal](../methode/journal.md).

Niveau d'une démonstration : « dérivation », par les règles de R ; « RC », par le raisonnement par cas (R) ; « modèle », par un modèle ou un contre-modèle (cadre, §1). Tous les résultats démontrés sont établis sans observation (D15), sauf E1 et L7 (D16).

## Principes

| ID | Énoncé | Statut | Provenance |
|---|---|---|---|
| — | Identité entre situations : une chose qui existe dans plusieurs situations y est la même ; un nom la désigne même là où elle manque (§1) | AXIOME | Utilisateur (Q1) ; reclassé de DÉFINITION par la règle de tri |
| — | Nommer : toute chose dont parle l'étude, et tout objet d'un modèle, peut recevoir un nom nouveau ; n'affirme l'existence de rien (§1) | AXIOME | Utilisateur ; reclassé de DÉFINITION par la règle de tri ; étendu aux objets d'un modèle (2026-11-05) |
| — | Les quantifications sur des situations, des énoncés, des modèles, les objets d'un modèle, les ensembles et les suites de ceux-ci, et des nombres appartiennent au langage d'analyse et ne tombent pas sous D8 (§1) | AXIOME | Utilisateur (Q9) ; reclassé de DÉFINITION par la règle de tri ; liste étendue et classement confirmé (2026-11-05) |
| F1 | Les numéraux appartiennent au seul langage d'analyse ; A1 et D8 ne s'appliquent qu'aux termes du langage objet (§1) | AXIOME | Utilisateur (Q9) ; reclassé de DÉFINITION par la règle de tri |
| FE | Factivité de l'effet : si y est cause de l'existence de x dans une situation, x existe dans cette situation (§1) | AXIOME | Utilisateur ; admise après épreuve par la population (2026-11-05) ; ne sert ni G ni ¬G |
| B | Bivalence | AXIOME | Stipulation |
| S | Calcul des connecteurs (et, ou, si... alors) | AXIOME | Stipulation |
| A1 | Identité | AXIOME | Brief |
| A2 | Non-contradiction | AXIOME | Brief |
| A3 | Tiers exclu | AXIOME | Brief ; sa négation est une contradiction sous B et S ; l'écarter est cohérent sans B ou S, au prix de RC ; preuves d'existence par l'absurde marquées B et S |
| A4 | `P → ¬¬P` | AXIOME | Stipulation |
| R | MP, MT, SD, élimination de la conjonction, enchaînement, contraposition, absurde négatif ; RC, raisonnement par cas sur le sens des mots, sous B et S | AXIOME | Brief (liste ouverte) et stipulation ; RC admis par l'utilisateur |
| N | Nécessitation | AXIOME | Stipulation |
| SR | La situation réelle est l'une des situations possibles (§4) | AXIOME | Stipulation acceptée ; reclassée de DÉFINITION par la règle de tri ; classement confirmé par l'utilisateur (2026-11-05) |
| — | Complément d'« observation » : pour une observation positive `F(a)`, `a` existe dans la situation réelle ; d'une observation `Cause(a, b)`, `b` existe par FE, `a` seulement par une observation positive qui porte sur lui ; une observation négative n'établit l'existence de rien (§4) | AXIOME | Utilisateur (Q8) ; reclassé de DÉFINITION par la règle de tri ; restreint aux observations positives (2026-11-05) |
| AO | Admission des observations : un enregistrement est admis sous réserve ; deux enregistrements admis se contredisent si leur conjonction avec le seul socle se contredit (sinon, règle de D18) ; est retiré celui qu'aucun autre sens, instrument ou observateur ne reproduit, les deux s'ils sont dans le même cas ; le retrait n'atteint que les énoncés atomiques contredits et ce qui n'a plus de démonstration (§4) | AXIOME | Utilisateur ; réécrite après épreuve par la population et le vérificateur (2026-11-05) ; ne sert ni G ni ¬G |
| Ac | Occurrence des enregistrements : tout enregistrement fait est un acte qui a lieu dans la situation réelle ; le retrait porte sur son contenu, jamais sur son occurrence (§4) | AXIOME | Population, au contrôle de solidité ; admis par l'utilisateur (2026-11-05) ; ne sert ni G ni ¬G |
| K | Distribution | DÉMONTRÉ (RC) | Sens de « nécessaire » (§1), S |
| T | Factivité | DÉMONTRÉ (RC) | Sens de « nécessaire » (§1), SR |
| U | Ensemble unique des situations possibles | DÉMONTRÉ (RC) | Sens de « nécessaire » (§1) |
| E1 | Quelque chose existe | DÉMONTRÉ | Établi avec observation (le constat que l'acte de nier a lieu, admis sous AO ; Ac ; D8) ; intact sous AO par Ac (épreuve faite au contrôle de solidité) ; refus : nier le complément et Ac |

## Hypothèses

| ID | Énoncé | Statut | Provenance |
|---|---|---|---|
| Pn | Pour tout objet x et tout objet y qui existe dans au moins une situation possible, que x dépende ou non de y appartient à la nature de x : cela ne varie pas d'une situation possible où x existe à une autre | HYPOTHÈSE, signalée (sert G) ; candidate comme axiome pour M2 | Proposé par l'orchestrateur à partir du raisonnement de l'utilisateur |
| Pn_i | Pour tout objet x inévitable et tout objet y qui existe dans au moins une situation possible, si x dépend de y dans une situation possible, il en dépend dans toute situation possible (quantification du langage d'analyse) | HYPOTHÈSE, signalée (sert G), examinée en M2 | Population ; Pn l'entraîne ; portée écrite au contrôle de solidité |
| Pc | Si y est cause ou raison de l'existence de x dans une situation, y existe dans cette situation | HYPOTHÈSE, signalée (sert G), examinée en M2 ; sous FE, sa part « raison » revient à sa part « cause » (T12) | Orchestrateur |
| (b) | Dans toute situation s, toute suite d'êtres dont chacun dépend du suivant dans s, qu'on ne peut plus prolonger, a un dernier terme, qui ne dépend de rien dans s : ni cycle ni régression infinie de dépendance | HYPOTHÈSE, signalée (sert G), examinée en M1 ; entraîne (b_L4) | Orchestrateur, reformulée par la population, indexée au contrôle de solidité |
| (b_L4) | Si un inévitable dépend d'un être dans une situation s, une suite finie d'êtres dont chacun dépend du suivant dans s l'y relie à un être qui ne dépend de rien dans s | HYPOTHÈSE, signalée (sert G) ; seule forme qu'emploie L4 | Vérificateur |
| (c′) | Les êtres contingents se combinent librement | HYPOTHÈSE, signalée (sert G : elle donne (c′_tot), donc avec ¬Sv un inévitable, si sa portée comprend l'ensemble de tous les contingents, infini compris ; L6) ; portée à définir ; n'entraîne ni G ni `◇G` à elle seule ; examinée en M2 | Orchestrateur |
| (c′_tot) et ¬Sv | (c′_tot) : il existe une situation possible où n'existe aucun objet contingent ; jointe à la négation de Sv | HYPOTHÈSE, signalée (sert G : L6, puis L4) ; personne ne la pose | Contrôle de solidité |
| Nec | Tout ce qui existe dans une situation possible existe dans toute situation possible | HYPOTHÈSE, signalée (sert G : avec E1, un inévitable) ; n'entraîne pas G ; personne ne la pose | Contrôle de solidité |
| Abs | Il existe au moins un objet abstrait (proposition, propriété, ensemble, loi) qui existe dans toute situation possible et, dans chacune, ne dépend de rien ; « abstrait » n'étant pas défini (M6), Abs se ramène pour l'instant à G avec un témoin qualifié d'abstrait | HYPOTHÈSE, signalée (sert G : instance de G) ; personne ne la pose ; examinée en M6 | Utilisateur, au contrôle de solidité ; lecture existentielle fixée (2026-11-05) |
| `◇G` | Dieu peut exister | HYPOTHÈSE, même rang que `◇¬G` ; équivaut à G (T3d) | Population |
| `◇¬G` | Dieu peut ne pas exister | HYPOTHÈSE, même rang que `◇G` ; équivaut à ¬G (T3d) | Population |
| Sv | Une situation possible est vide | HYPOTHÈSE, signalée (sert ¬G, T10) | Utilisateur |
| Cont | Tout ce qui existe dans une situation possible manque dans au moins une : aucun être inévitable n'existe | HYPOTHÈSE, signalée (sert ¬G : entraîne `□¬G` sans P1) ; plus faible que Sv ; personne ne la pose ; examinée en M2 | Contrôle de solidité |
| Pr | Pour toute situation s, toute chose qui existe dans s y a une raison d'exister (D5) : une cause ou une raison de soi | HYPOTHÈSE, examinée en M1 ; sous « toutes retenues », démontrée ; sous « retenues pour les seuls inévitables », équivaut à Pr_c, signalée (sert G : L7) ; sous « retenues pour les seuls contingents », équivaut à « tout inévitable qui existe a une cause » et entraîne ¬G, signalée (sert ¬G) ; sous « aucune retenue », équivaut à « toute chose qui existe a une cause » et entraîne ¬G, signalée (sert ¬G) | Population ; portée fixée par l'utilisateur |
| Pr_c | Pour toute situation s, tout contingent qui existe dans s y a une raison d'exister (D5) | HYPOTHÈSE, examinée en M1 ; sous « toutes retenues » ou « retenues pour les seuls contingents », démontrée ; sous les deux autres valeurs, équivaut à « tout contingent qui existe a une cause », signalée (sert G : jointe à Pc et (b), avec E1, elle donne un être inévitable, L7 ; avec Pn_i, G) ; seule, elle ne tranche pas G | Population ; portée fixée par l'utilisateur |
| Nb | Un nombre n'est pas un être : aucun nombre n'existe dans aucune situation possible | HYPOTHÈSE, indépendante du socle, examinée en M6 ; ne sert ni G ni ¬G | Utilisateur |

## Définitions

| ID | Terme | Statut | Provenance |
|---|---|---|---|
| — | Modèle (§1) : situations, dont une désignée ; domaines ; extensions sans restriction ; noms par situation | DÉFINITION | Utilisateur ; rendue générale au contrôle de solidité (2026-11-05) |
| — | Sémantique des énoncés atomiques (§1) : un énoncé atomique peut être vrai d'une chose absente ; l'identité ne dépend pas du domaine | DÉFINITION | Contrôle de solidité ; classement confirmé par l'utilisateur (2026-11-05) |
| — | Modèle du socle (§1) : modèle où FE, l'irréflexivité de la cause (D4) et la rigidité des noms valent dans chaque situation ; les axiomes sur le langage, les noms, les observations et la situation réelle ne s'y évaluent pas | DÉFINITION | Utilisateur (2026-11-05) |
| — | Vérité logique, entraîner (§1) | DÉFINITION | Contrôle de solidité |
| — | Langage objet et langage d'analyse (§1) | DÉFINITION | Utilisateur |
| — | Socle : axiomes, définitions, termes premiers, sans E1 (§4) | DÉFINITION | Utilisateur |
| D1 | Dieu : être nécessaire au sens de D2 | DÉFINITION | Brief, révisée par l'utilisateur |
| D2 | Nécessaire (être) : inévitable et, dans toute situation possible, ne dépendant de rien | DÉFINITION | Brief, sens fixé par l'utilisateur |
| D3 | Contingent : non inévitable | DÉFINITION | Brief |
| D4 | Cause ; aucune chose n'est cause d'elle-même (« d'autre chose »), inscrit dans les modèles du socle | DÉFINITION | Stipulation acceptée ; irréflexivité écrite au contrôle de solidité (2026-11-05) |
| D5 | Raison : le pourquoi de l'existence d'une chose ; le comment, qu'elle soit ainsi, n'en est pas une | DÉFINITION | Stipulation acceptée, précisée par l'utilisateur |
| D6 | Fait brut | DÉFINITION ; pour l'existence, sa portée dépend du paramètre « raisons de soi retenues » (M1), sous quatre valeurs | Brief |
| D7 | Monde : tout ce qui existe dans la situation réelle | DÉFINITION | Utilisateur, réécrite sans vocabulaire du temps |
| D8 | Exister dans une situation, sans restriction | DÉFINITION | Stipulation précisée par l'utilisateur |
| D9 | Le contingent : tout ce qui existe et est contingent | DÉFINITION | Stipulation acceptée, alignée sur D3 |
| D10 | Substance : ce qui existe dans une situation sans y être une propriété d'autre chose | DÉFINITION | Utilisateur, définition stipulée acceptée ; indice de situation ajouté au contrôle de solidité, ratifié par l'utilisateur (2026-11-05) |
| D11 | Nature d'une chose | DÉFINITION | Stipulation acceptée |
| D12 | Accident | DÉFINITION | Utilisateur, définition stipulée acceptée |
| D13 | Expérience | DÉFINITION | Stipulation acceptée |
| D14 | Mesure ; la valeur est un prédicat du langage objet, le nombre et les relations entre valeurs relèvent du langage d'analyse | DÉFINITION | Stipulation acceptée ; précisée (2026-11-05) |
| — | Situation possible (terme premier) | DÉFINITION | Stipulation acceptée |
| — | Situation réelle (terme premier) : celle sur laquelle portent les observations | DÉFINITION | Stipulation acceptée |
| — | Observation (terme premier), terme de réussite, énoncée par un énoncé atomique ou sa négation | DÉFINITION | Stipulation acceptée, précisée par l'utilisateur ; classement DÉFINITION confirmé (2026-11-05) |
| — | Produire (terme premier, trois limites) | DÉFINITION | Utilisateur |
| — | Nombre (prédicat sans axiome, pour énoncer Nb) | DÉFINITION | Utilisateur |
| D15 | Établi sans observation : démontré à partir du seul socle | DÉFINITION | Stipulation acceptée, précisée par l'utilisateur |
| D16 | Établi avec observation | DÉFINITION | Stipulation acceptée |
| D17 | Concevable : vrai dans un modèle du socle avec `∃x (x = x)` (E1 sans nom) | DÉFINITION | Stipulation acceptée, précisée par l'utilisateur |
| D18 | Rendre intelligible dans une situation, base d'intelligibilité (énoncés atomiques, universels sans nom (R) ou (O)), clause d'identité, pont indexé ; pour `E(x)`, le pourquoi ; pour un autre énoncé, le comment ; paramètres fixés en M1 (universels employables dans une base, raisons de soi retenues, sous quatre valeurs : toutes retenues, retenues pour les seuls inévitables, retenues pour les seuls contingents, aucune retenue) | DÉFINITION | Utilisateur |
| — | Énoncé atomique (D18) : prédicat `E`, `=`, la relation de cause, ou une propriété dont le modèle stipule l'extension ; un terme défini au §4 n'en fait pas partie | DÉFINITION | Utilisateur ; prédicats admis précisés (2026-11-05) |
| — | Universel (O) d'une base d'intelligibilité : HYPOTHÈSE ; il peut figurer dans une base tant qu'aucune observation ne le contredit, et ce qu'il donne est alors sous hypothèse ; une observation contraire retire la loi avec les hypothèses employées avec elle | DÉMONTRÉ (règle de la base d'intelligibilité) | Utilisateur ; le statut se démontre de la caractérisation d'« observation » et de la contrainte 6, le retrait de A2, de l'absurde négatif et de la contrainte 7 (cadre, D18) ; classement confirmé (2026-11-05) |
| D19 | Dépendre (pour exister) dans une situation ; sous FE, la clause « raison » a la même extension que la clause « cause » (T12) | DÉFINITION | Stipulation acceptée, précisée par l'utilisateur |
| D20 | Inévitable : existe dans toute situation possible | DÉFINITION | Stipulation acceptée |
| — | Monde = l'univers physique | CONTESTÉ | Refusé : présuppose ses limites |
| — | Nécessaire au sens logique | CONTESTÉ | Écarté sans être réfuté, par la règle de symétrie (contrainte 9 du protocole) : vide (T9), il trancherait ¬G par définition ; thèse correspondante : H1′ |
| — | Ne dépendre de rien dans la seule situation considérée (lecture de D2) | CONTESTÉ | Écarté par l'utilisateur ; P1 n'en découlerait plus (modèle B) ; hors règle de symétrie |
| — | « Cause du monde » dans D1 (version du brief) | CONTESTÉ | Écarté par la règle de symétrie : lue sur chaque chose qui existe, elle ferait de Dieu la cause de lui-même et rendrait ¬G vrai par définition ; thèse correspondante : H2 |
| — | « Sa propre raison d'exister » dans D1 | CONTESTÉ | Écartée : sous « aucune retenue » ou « retenues pour les seuls contingents », elle rend ¬G vrai par définition (règle de symétrie) ; sous « toutes retenues », elle coïncide avec D2 ; sous « retenues pour les seuls inévitables », avec l'inévitabilité ; sous chaque valeur, elle ferait dépendre D1 d'un choix réservé à M1 |
| — | Cause de soi (lecture de D4 qui admet `Cause(x, x)`) | CONTESTÉ | Écartée : sous FE, `{Cause(x, x)}` serait une raison d'exister en soi hors du paramètre, un cercle déguisé ; ne tranche pas G ; la thèse « une chose produit sa propre existence » reste examinable comme hypothèse |

## Résultats

| ID | Énoncé | Statut | Niveau | Repose sur |
|---|---|---|---|---|
| Correction | Un énoncé démontré du socle et de prémisses est vrai dans toute situation de tout modèle du socle où elles le sont | DÉMONTRÉ | RC (récurrence sur la démonstration) | R, RC, N, §1 |
| T0 | `¬¬P ⊢ P` ne se dérive pas de A1, A2, A4 et des règles autres que RC ; il vaut sous B et S | DÉMONTRÉ | modèle | Matrices 1 et 0 |
| T1 | Une définition de la forme `X ≝ F ∧ E` n'implique pas `∃x X(x)` | DÉMONTRÉ | RC, modèle | S, §1, correction |
| T2 | « Quelque chose existe » n'est pas une vérité logique | DÉMONTRÉ | modèle | A1, §1 (domaine vide, noms, correction) |
| L1 | `□(P → Q) → (◇P → ◇Q)` | DÉMONTRÉ | dérivation | N, K, R, §1 |
| L2 | `◇¬G → ¬□G` | DÉMONTRÉ | dérivation | N, K, A4, R, §1 |
| L5 | `P → ◇P` | DÉMONTRÉ | dérivation | T, A4, R, §1 |
| AM | `◇□P → □P` | DÉMONTRÉ | RC | U, §1, S, B |
| L3 | P1 découle de D2 | DÉMONTRÉ | RC | D1, D2, D19, D20, U, §1 (identité), B, S |
| P1 | `□(G → □G)` | DÉMONTRÉ | RC | L3 ; découle d'une définition |
| L4 | S'il existe un être inévitable, alors `G` | DÉMONTRÉ SOUS HYPOTHÈSES Pn_i, Pc, (b_L4) | RC | D1, D2, D19, D20, §1 (identité), A3, B, S ; Pn_i sous la portée écrite |
| L6 | (c′_tot) et ¬Sv donnent un être inévitable | DÉMONTRÉ SOUS HYPOTHÈSES (c′_tot), ¬Sv | RC | D3, D20, B, S |
| L7 | Sous « aucune retenue » ou « retenues pour les seuls inévitables », E1, Pr_c, Pc et (b) dans la situation réelle donnent un être inévitable ; avec Pc dans toute situation et Pn_i, G | DÉMONTRÉ SOUS HYPOTHÈSES Pr_c, Pc, (b) ; pour G, Pn_i ; établi avec observation (E1) | RC | E1, T12, FE, D3, D4, D19, D20, A3, B, S ; pour G, D1, D2 |
| T3a | `◇¬G → ¬G` | DÉMONTRÉ | dérivation | P1 ; N, K, T, A4, R, §1 |
| T3b | `◇G → G` | DÉMONTRÉ | dérivation, RC via AM | P1 ; N, K, T, U (via AM), R, §1, S, B |
| T3c | `◇¬G → ¬◇G` | DÉMONTRÉ | dérivation, RC via AM | P1 ; N, K, T, A4, U (via AM), R, §1, S, B |
| T3d | `◇G` et `G` s'entraînent ; `◇¬G` et `¬G` aussi | DÉMONTRÉ | dérivation, RC via AM | P1 ; N, K, T, U (via AM), A4, R, §1, S, B |
| T3e | `□G ∨ □¬G` | DÉMONTRÉ | RC | P1 (D1, D2, D19, D20, U, §1 identité) ; L1 (N, K), AM, §1, B, S |
| T4 | Le sens logique de « nécessaire » mène à une contradiction | CONTESTÉ | — | Retiré, ligne 2 invalide |
| T5 | La lecture matérielle `¬E(x) → ¬L` a la valeur de `E(x)` | DÉMONTRÉ | RC | B, S, N |
| T6 | « Tout concevable est possible » mène à une contradiction | DÉMONTRÉ | RC, modèle | P1, T3c, D1, D2, D17, D19, D20, A2, A4, N, K, T, U, R, B |
| T7 | P1 et `¬(◇G ∧ ◇¬G)` s'entraînent | DÉMONTRÉ | RC | B, S, §1, U |
| T8 | `□(¬E(x) → ¬L)` et `□E(x)` s'entraînent | DÉMONTRÉ | RC | B, S, §1, N, identité |
| T9 | Aucune chose n'est nécessaire au sens logique, tant que la base de concevabilité n'entraîne `E(a)` pour aucun nom `a` | DÉMONTRÉ | modèle | §1 (modèle du socle, identité, noms, « Nommer », langage d'analyse), D8, D17 |
| T10 | Si une situation possible est vide, `□¬G` | DÉMONTRÉ | RC | U, D1, D2, D8, D20, T, B, S, §1 |
| T11 | `E(x)` se démontre d'une base d'intelligibilité si et seulement si elle contient `E(t)` ou `Cause(u, t)` et une chaîne d'identités de `t` à `x` | DÉMONTRÉ | RC (sens « si »), modèle (sens « seulement si ») | FE, §1 (noms hors domaine, extensions, identité entre situations, correction), D8, D18, B, S, sémantique des énoncés atomiques et modèles du socle (§1), énoncé atomique (D18 : prédicats admis), langage d'analyse (objets d'un modèle) |
| T12 | Les bases minimales pour `E(x)` sont les raisons de soi `{E(t)} ∪ C` et les bases `{Cause(u, t)} ∪ C` ; la raison de l'existence d'une chose en un autre être est sa cause | DÉMONTRÉ ; condition d'usage : aucun axiome, hors `E` et FE, qui fasse entraîner l'existence par un énoncé atomique | RC | T11, FE, D4, D18, D19, §1 (identité, « Nommer »), B, S, sémantique des énoncés atomiques (§1), énoncé atomique (D18 : prédicats admis), irréflexivité (D4) |

## Thèses à examiner

| ID | Énoncé | Statut |
|---|---|---|
| H1 | La validité de la logique et des mathématiques dépend d'un être | HYPOTHÈSE, examinée en M6 |
| H1′ | Tout être nécessaire (D2) est nécessaire au sens logique (miroir de H1) | HYPOTHÈSE, signalée (sert ¬G), examinée en M6 |
| H2 | Si Dieu existe, il est cause ou raison du contingent | HYPOTHÈSE, examinée en M2 |
| H3 | Dieu est personnel (intelligence, volonté) | HYPOTHÈSE, examinée en M4 |
| H4 | Dieu est bon | HYPOTHÈSE, examinée en M5 |
