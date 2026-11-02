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

# Registre

Statut de chaque énoncé. AXIOME : point de départ admis par l'utilisateur, avec son paragraphe de refus. DÉFINITION : terme fixé, ou terme premier. DÉMONTRÉ : dérivé d'axiomes, de définitions et d'observations. DÉMONTRÉ SOUS HYPOTHÈSE : dérivé avec l'hypothèse nommée parmi les prémisses ; ne vaut que si elle est vraie. SOUS RÉSERVE : la démonstration a une lacune nommée. HYPOTHÈSE : ni démontrée ni admise (contrainte 8 du [[theisme-protocole]]). CONTESTÉ : écarté. Contenu et paragraphes de refus : [[theisme-cadre]] et [[theisme-m0-resultats]] ; décisions : [[theisme-journal]].

## Principes

| ID | Énoncé | Statut | Provenance |
|---|---|---|---|
| B | Bivalence | AXIOME | Stipulation |
| S | Calcul des connecteurs (et, ou, si... alors) | AXIOME | Stipulation |
| A1 | Identité | AXIOME | Brief |
| A2 | Non-contradiction | AXIOME | Brief |
| A3 | Tiers exclu | AXIOME | Brief ; refus cohérent, preuves d'existence par l'absurde marquées |
| A4 | `P → ¬¬P` | AXIOME | Stipulation |
| R | MP, MT, SD, élimination de la conjonction, enchaînement, contraposition, absurde négatif | AXIOME | Brief (liste ouverte) et stipulation |
| N | Nécessitation | AXIOME | Stipulation |
| K | Distribution | AXIOME | Stipulation |
| T | Factivité | AXIOME | Stipulation |
| U | Ensemble unique des situations possibles | AXIOME | Stipulation |
| E1 | Quelque chose existe | DÉMONTRÉ | Établi avec observation (le constat que l'acte de nier a lieu, D8) ; refus : contradiction performative |
| P1 | `□(G → □G)` | HYPOTHÈSE | Stipulation ; découle de L3 si ne dépendre de rien n'est pas un accident (D12) d'un être nécessaire, question de M2 |

## Définitions

| ID | Terme | Statut | Provenance |
|---|---|---|---|
| D1 | Dieu : être nécessaire au sens de D2 | DÉFINITION | Brief, révisée par l'utilisateur |
| D2 | Nécessaire (être), au sens réel ; « par soi » = ne dépendre de rien | DÉFINITION | Brief, sens fixé par l'utilisateur ; recouvrement avec D3 et D9 à statuer |
| D3 | Contingent | DÉFINITION | Brief |
| D4 | Cause | DÉFINITION | Stipulation acceptée |
| D5 | Raison | DÉFINITION | Stipulation acceptée |
| D6 | Fait brut | DÉFINITION | Brief |
| D7 | Monde : tout ce qui existe | DÉFINITION | Utilisateur |
| D8 | Exister, sans indication de temps | DÉFINITION | Stipulation précisée par l'utilisateur |
| D9 | Le contingent | DÉFINITION | Stipulation acceptée |
| D10 | Substance | DÉFINITION | Utilisateur, définition stipulée acceptée |
| D11 | Nature d'une chose | DÉFINITION | Stipulation acceptée |
| D12 | Accident | DÉFINITION | Utilisateur, définition stipulée acceptée |
| D13 | Expérience | DÉFINITION | Stipulation acceptée |
| D14 | Mesure | DÉFINITION | Stipulation acceptée |
| — | Situation possible (terme premier) | DÉFINITION | Stipulation acceptée |
| — | Observation (terme premier) | DÉFINITION | Stipulation acceptée |
| D15 | Établi sans observation | DÉFINITION | Stipulation acceptée |
| D16 | Établi avec observation | DÉFINITION | Stipulation acceptée |
| D17 | Concevable | DÉFINITION | Stipulation acceptée |
| D18 | Rendre intelligible | DÉFINITION | Stipulation acceptée |
| D19 | Dépendre (pour exister) | DÉFINITION | Stipulation acceptée |
| — | Monde = l'univers physique | CONTESTÉ | Refusé : présuppose ses limites |
| — | Nécessaire au sens logique | CONTESTÉ | Écarté : mène à une contradiction sous P1 (T4) |

## Résultats

| ID | Énoncé | Statut | Repose sur |
|---|---|---|---|
| T0 | `¬¬P ⊢ P` ne se dérive pas de A1, A2, A4 et R ; il vaut sous B et S | DÉMONTRÉ | Matrices 1 et 0 |
| T1 | Une définition de la forme `X ≝ F ∧ E` n'implique pas `∃x X(x)` | DÉMONTRÉ | Contre-modèle |
| T2 | « Quelque chose existe » n'est pas une vérité logique | DÉMONTRÉ | Interprétation vide |
| L1 | `□(P → Q) → (◇P → ◇Q)` | DÉMONTRÉ | N, K, R |
| L2 | `◇¬G → ¬□G` | DÉMONTRÉ | N, K, A4, R |
| AM | `◇□P → □P` | DÉMONTRÉ | U |
| L3 | Si ne dépendre de rien appartient à la nature (D11) de tout être nécessaire, P1 est vraie | DÉMONTRÉ | U, D1, D2, D11, D19 |
| T3a | `◇¬G → ¬G` | DÉMONTRÉ SOUS HYPOTHÈSE P1 | N, K, T, A4, R |
| T3b | `◇G → G` | DÉMONTRÉ SOUS HYPOTHÈSE P1 | N, K, T, U (via AM), R |
| T3c | `◇¬G → ¬◇G` | DÉMONTRÉ SOUS HYPOTHÈSE P1 | N, K, T, A4, U, R |
| T4 | Le sens logique de « nécessaire » mène à une contradiction | DÉMONTRÉ SOUS HYPOTHÈSE P1, SOUS RÉSERVE | T3c, D17, A2 ; réserve : N, K, T, A4, AM non vérifiés pour ce sens |
| T5 | Sous B et S, quand L est vrai, `¬E(x) → ¬L` a la valeur de `E(x)` | DÉMONTRÉ | B, S |
| T6 | « Tout concevable est possible » mène à une contradiction | DÉMONTRÉ SOUS HYPOTHÈSE P1 | T3c, D17, D19, A2, N, K, T, U |

## Thèses à examiner

| ID | Énoncé | Statut |
|---|---|---|
| H1 | La validité de la logique et des mathématiques dépend d'un être | HYPOTHÈSE, examinée en M6 |
| H2 | Si Dieu existe, il est cause ou raison du contingent | HYPOTHÈSE, examinée en M2 |
| H3 | Dieu est personnel (intelligence, volonté) | HYPOTHÈSE, examinée en M4 |
| H4 | Dieu est bon | HYPOTHÈSE, examinée en M5 |
