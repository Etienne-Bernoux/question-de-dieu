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

Protocole : [[theisme-protocole]]. Statuts : AXIOME, DÉFINITION, DÉMONTRÉ, ACCEPTÉ PAR L'UTILISATEUR, CONTESTÉ. « À statuer » marque un énoncé proposé et non arbitré : aucun module ne peut s'appuyer dessus.

| ID | Énoncé | Statut | Origine |
|---|---|---|---|
| A1 | Identité : `a = a`, `P → P` | AXIOME | M0 |
| A2 | Non-contradiction : `¬(P ∧ ¬P)` | AXIOME | M0 |
| A3 | Tiers exclu : `P ∨ ¬P` | à statuer (Q1) | M0 ; refus cohérent, coût épistémique symétrique |
| R | Règles : modus ponens, modus tollens, syllogisme disjonctif, élimination de la conjonction, contraposition, absurde négatif | AXIOME | M0 ; double négation conditionnée à A3 |
| K | `□(P → Q) → (□P → □Q)` | à statuer | M0 |
| T | `□P → P` | à statuer | M0 ; refus contradictoire avec le sens de « nécessaire » |
| AM | `◇□P → □P` | à statuer (Q6) | M0 ; utile en M2 |
| D1 | Dieu : être nécessaire, personnel, cause du monde, bon | DÉFINITION (provisoire) | M0 ; « personnel » → M4, « bon » → M5 |
| D2 | Nécessaire : D2-R (réelle) ou D2-L (logique) | à statuer (Q2) | M0 |
| D3 | Contingent : qui pourrait ne pas exister | DÉFINITION | M0 |
| D4 | Cause : ce qui produit l'existence ou l'occurrence d'autre chose | à statuer (Q3) | M0 |
| D5 | Raison : ce qui rend intelligible pourquoi une chose est ainsi ou est | à statuer (Q3) | M0 |
| D6 | Fait brut : sans cause ni raison | DÉFINITION | M0 ; dépend de D4, D5 |
| D7 | Monde : l'univers physique | à statuer (Q4) | M0 |
| D8 | Exister : `∃x (x = a)` | DÉFINITION | M0 |
| E1 | Quelque chose existe | à statuer (Q7) | M0 ; constat, pas vérité logique (T2) |
| P1 | `□(G → □G)` : les attributs de Dieu lui sont essentiels | à statuer (Q8) | M0 ; ne découle pas de D1 seule |
| T1 | Une définition n'implique que des conditionnels, jamais `∃x X(x)` | DÉMONTRÉ | M0 |
| T2 | « Quelque chose existe » n'est pas démontrable en logique pure sans convention de domaine non vide | DÉMONTRÉ | M0 |
| T3a | P1, T ⊢ `◇¬G → ¬G` | DÉMONTRÉ | M0 |
| T3b | P1, K, T, AM ⊢ `◇G → G` | DÉMONTRÉ | M0 |
| T3c | Sous P1 et AM, `◇G` et `◇¬G` sont incompatibles | DÉMONTRÉ | M0 |
| T4 | Sous D2-L et P1, `¬G` | DÉMONTRÉ | M0 |
