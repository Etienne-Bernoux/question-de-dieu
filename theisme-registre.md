---
title: Examen du théisme — registre
type: knowledge
scope: perso
projet: []
domaine: [philosophie, logique]
tags: [theisme, registre]
status: draft
updated: 2026-11-01
---

# Registre de la démonstration

Protocole : [[theisme-protocole]]. Statuts : AXIOME, DÉFINITION, DÉMONTRÉ, ACCEPTÉ PAR L'UTILISATEUR, CONTESTÉ. « À statuer » marque un énoncé proposé et non arbitré : aucun module ne peut s'appuyer dessus. Provenances (contrainte 6) : Brief, Stipulation, Démontré ici, Source.

| ID | Énoncé | Statut | Provenance | Origine |
|---|---|---|---|---|
| A1 | Identité : `a = a`, `P → P` | AXIOME | Brief | M0 |
| A2 | Non-contradiction : `¬(P ∧ ¬P)` | AXIOME | Brief | M0 |
| A3 | Tiers exclu : `P ∨ ¬P` | AXIOME | Brief, confirmé Q1 (2026-11-01) | M0 ; refus cohérent (T0) : chaque preuve d'existence par l'absurde est marquée |
| A4 | `P → ¬¬P` | ACCEPTÉ PAR L'UTILISATEUR | Stipulation, acceptée le 2026-11-01 | M0 ; requis par L2 ; refus contradictoire sous B (§4 ter) |
| B | Bivalence : dans une interprétation, tout énoncé est vrai ou faux, et pas les deux ; « non-P » est vrai exactement quand P est faux | à statuer | Stipulation, utilisée depuis §2 sans avoir été posée | M0 |
| R | MP, MT, SD, élimination de la conjonction, enchaînement, contraposition, absurde négatif | AXIOME | Brief (liste ouverte) et Stipulation | M0 ; pas de preuve conditionnelle |
| N | Nécessitation : ce que la logique démontre seule est nécessaire | ACCEPTÉ PAR L'UTILISATEUR | Stipulation, acceptée le 2026-11-01 | M0 ; refus cohérent mais coûteux (§4 ter) |
| K | `□(P → Q) → (□P → □Q)` | ACCEPTÉ PAR L'UTILISATEUR | Stipulation, acceptée le 2026-11-01 | M0 ; refus contradictoire sous D2 (§4 ter) |
| T | `□P → P` | ACCEPTÉ PAR L'UTILISATEUR | Stipulation, acceptée le 2026-11-01 | M0 ; refus contradictoire sous D2 si la situation réelle est une situation possible (§4 ter) |
| U | Les situations possibles forment un ensemble unique, le même quelle que soit la situation d'où l'on regarde ; `□P` : P vrai dans toutes, `◇P` : dans au moins une | ACCEPTÉ PAR L'UTILISATEUR | Stipulation, acceptée le 2026-11-01 | M0 ; « situation possible » est primitif |
| AM | `◇□P → □P` | DÉMONTRÉ | Démontré ici, sous U (§4 ter) | M0 ; refus = refus de U |
| D1 | Dieu : `x` existe par soi (nécessaire, D2 ; raison de son existence = sa nature, D5) | DÉFINITION | Brief, révisé (arbitrage D1, 2026-11-01) | M0 ; « Dieu existe » = « un être par soi existe » tant que M4, M5 ne sont pas faits |
| D2 | Nécessaire : qui ne peut pas ne pas exister, au sens réel (ne dépend de rien, aucune situation possible ne le prive d'existence) | DÉFINITION | Brief, confirmé Q2 et Q2bis | M0 |
| H1 | La validité de la logique et des mathématiques dépend d'un être | à statuer en M6 | Brief (Q2bis) | M0 ; « dépendre » à définir (T5) |
| H2 | Si Dieu existe, il est cause ou raison du contingent | à statuer en M2 | Brief (sorti de D1, Q4bis-2) | M0 |
| H3 | Dieu est personnel (intelligence, volonté) | à statuer en M4 | Brief (sorti de D1) | M0 |
| H4 | Dieu est bon | à statuer en M5 | Brief (sorti de D1) | M0 |
| D3 | Contingent : qui pourrait ne pas exister | DÉFINITION | Brief | M0 |
| D4 | Cause : ce qui produit l'existence ou l'occurrence d'autre chose | DÉFINITION | Stipulation, acceptée Q3 | M0 |
| D5 | Raison : ce qui rend intelligible qu'une chose soit, ou soit ainsi | DÉFINITION | Stipulation, acceptée Q3 | M0 |
| D6 | Fait brut : sans cause ni raison | DÉFINITION | Brief | M0 |
| D7 | Monde : tout ce qui existe, à quelque moment que ce soit ou hors du temps | DÉFINITION | Brief (Q4bis-1) | M0 |
| D7-ancien | Monde : l'univers physique | CONTESTÉ | refusé Q4 : suppose démontrées les limites de l'univers physique | M0 |
| D8 | Exister : `∃x (x = a)`, sans indication de temps | DÉFINITION | Stipulation, précisée Q4bis-1 | M0 |
| D9 | Le contingent : tout ce qui existe sans être nécessaire | DÉFINITION | Stipulation, acceptée Q4bis-2 | M0 |
| E1 | Quelque chose existe | à statuer (Q7bis) | refus performativement contradictoire | M0 ; pas une vérité logique (T2) |
| P1 | `□(G → □G)` : ce qui existe par soi existe par soi dans toute situation où il existe | à statuer en M2 | Stipulation | M0 ; ne découle pas de D1 |
| T0 | `¬¬P ⊢ P` et A3 ne se dérivent pas de A1, A2, A4 et R | DÉMONTRÉ | Démontré ici (matrice, script exécuté) | M0 |
| T1 | Une définition n'implique que des conditionnels, jamais `∃x X(x)` | DÉMONTRÉ | Démontré ici (contre-modèle) | M0 |
| T2 | « Quelque chose existe » n'est valide que si le domaine vide est exclu | DÉMONTRÉ | Démontré ici | M0 |
| L1 | N, K ⊢ `□(P → Q) → (◇P → ◇Q)` | DÉMONTRÉ | Démontré ici | M0 |
| L2 | N, K, A4 ⊢ `◇¬G → ¬□G` | DÉMONTRÉ | Démontré ici | M0 |
| T3a | P1, N, K, T, A4 ⊢ `◇¬G → ¬G` | DÉMONTRÉ | Démontré ici | M0 |
| T3b | P1, N, K, T, AM ⊢ `◇G → G` (AM démontrée sous U) | DÉMONTRÉ | Démontré ici | M0 |
| T3c | Sous P1, N, K, T, A4, AM : `◇G` et `◇¬G` incompatibles | DÉMONTRÉ | Démontré ici | M0 |
| T5 | La dépendance lue comme `¬E(x) → ¬L` équivaut à `E(x)` | DÉMONTRÉ | Démontré ici | M0 |
| T4 | Sous D2-L et P1, `¬G` | DÉMONTRÉ sous réserve | Démontré ici ; réserve : N, K, T, L2 pour `□_L` non vérifiés | M0 |
