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
| A3 | Tiers exclu : `P ∨ ¬P` | à statuer (Q1) | Brief | M0 ; refus cohérent (T0) |
| A4 | `P → ¬¬P` | à statuer | Stipulation | M0 ; requis par L2 |
| R | MP, MT, SD, élimination de la conjonction, enchaînement, contraposition, absurde négatif | AXIOME | Brief (liste ouverte) et Stipulation | M0 ; pas de preuve conditionnelle |
| N | Nécessitation | à statuer (Q6) | Stipulation | M0 |
| K | `□(P → Q) → (□P → □Q)` | à statuer (Q6) | Stipulation | M0 |
| T | `□P → P` | à statuer (Q6) | Stipulation | M0 |
| AM | `◇□P → □P` | à statuer (Q6) | Stipulation | M0 ; utile en M2 |
| D1 | Dieu : être nécessaire, personnel, cause du monde, bon | DÉFINITION (provisoire) | Brief | M0 ; « personnel » → M4, « bon » → M5 |
| D2 | Nécessaire : D2-R (réelle) ou D2-L (logique) | à statuer (Q2) | Brief ; lectures : Stipulation | M0 |
| D3 | Contingent : qui pourrait ne pas exister | DÉFINITION | Brief | M0 |
| D4 | Cause : ce qui produit l'existence ou l'occurrence d'autre chose | à statuer (Q3) | Stipulation | M0 |
| D5 | Raison : ce qui rend intelligible qu'une chose soit, ou soit ainsi | à statuer (Q3) | Stipulation | M0 |
| D6 | Fait brut : sans cause ni raison | DÉFINITION | Brief | M0 |
| D7 | Monde : l'univers physique | à statuer (Q4) | Stipulation | M0 |
| D8 | Exister : `∃x (x = a)` | DÉFINITION | Stipulation | M0 |
| E1 | Quelque chose existe | à statuer (Q7) | refus performativement contradictoire | M0 ; pas une vérité logique (T2) |
| P1 | `□(G → □G)` : les attributs de Dieu lui sont essentiels | à statuer (Q8) | Stipulation | M0 ; ne découle pas de D1 |
| T0 | `¬¬P ⊢ P` et A3 ne se dérivent pas de A1, A2, A4 et R | DÉMONTRÉ | Démontré ici (matrice, script exécuté) | M0 |
| T1 | Une définition n'implique que des conditionnels, jamais `∃x X(x)` | DÉMONTRÉ | Démontré ici (contre-modèle) | M0 |
| T2 | « Quelque chose existe » n'est valide que si le domaine vide est exclu | DÉMONTRÉ | Démontré ici | M0 |
| L1 | N, K ⊢ `□(P → Q) → (◇P → ◇Q)` | DÉMONTRÉ | Démontré ici | M0 |
| L2 | N, K, A4 ⊢ `◇¬G → ¬□G` | DÉMONTRÉ | Démontré ici | M0 |
| T3a | P1, N, K, T, A4 ⊢ `◇¬G → ¬G` | DÉMONTRÉ | Démontré ici | M0 |
| T3b | P1, N, K, T, AM ⊢ `◇G → G` | DÉMONTRÉ | Démontré ici | M0 |
| T3c | Sous P1, N, K, T, A4, AM : `◇G` et `◇¬G` incompatibles | DÉMONTRÉ | Démontré ici | M0 |
| T4 | Sous D2-L et P1, `¬G` | DÉMONTRÉ sous réserve | Démontré ici ; réserve : N, K, T, L2 pour `□_L` non vérifiés | M0 |
