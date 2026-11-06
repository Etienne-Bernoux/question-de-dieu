---
title: Examen du théisme — protocole
type: reference
scope: perso
projet: []
domaine: [philosophie, logique]
tags: [theisme, demonstration, registre, protocole]
status: draft
updated: 2026-11-03
---

# Protocole de l'examen

Les règles qui s'appliquent à chaque module. Point d'entrée et sens de lecture : [[theisme-sommaire]]. Aucune conclusion n'est fixée d'avance : si une démonstration solide est impossible, on le dit ; si un refus est cohérent, on le dit.

## Contraintes épistémiques

1. **Pas d'appel à l'autorité.** Aucun argument n'est retenu parce qu'une autorité le soutient. Un fait empirique se source par les données ou mesures publiées. Des philosophes d'orientations suffisamment différentes, en accord entre eux, peuvent certifier qu'une position est formulée fidèlement. La vérité d'une prémisse n'est jamais établie par un consensus.
2. **Validité et solidité distinguées.** Valide : la conclusion découle des prémisses. Solide : de plus, les prémisses sont vraies.
3. **Conséquence d'un refus classée.** Contradiction logique (le refus implique A et non-A) : refus intenable ; elle peut être performative, quand ce que dit le refus contredit ce qu'implique le fait de l'énoncer. Coût métaphysique ou épistémique : refus cohérent qui oblige à admettre de l'étrange ou de l'inexpliqué. Coût existentiel (sens, morale, espérance) : pertinent, non probant. Un coût n'est jamais présenté comme une contradiction.
4. **Symétrie.** Chaque coût du refus est mis en regard des coûts de l'acceptation.
5. **Pas d'équivoque.** Toute notion est définie avant usage et garde son sens.
6. **Provenance obligatoire.** Le modèle sert à raisonner, jamais de source. Tout énoncé est soit un axiome ou une définition admis par l'utilisateur, soit une stipulation de vocabulaire soumise à son accord, soit démontré dans la note (dérivation ou contre-modèle, avec vérification mécanique quand elle a été exécutée), soit sourcé selon la contrainte 1. Une affirmation qui ne relève d'aucun de ces cas est démontrée, gardée comme hypothèse (contrainte 8), ou retirée.
7. **Charge de la preuve.** Elle vaut pour chaque agent qui pose une prémisse.
   - Qui pose une prémisse doit la démontrer ou la sourcer ; sinon elle reste une hypothèse (contrainte 8).
   - Une prémisse non démontrée peut être écartée sans être réfutée. Écarter une prémisse, c'est refuser de l'admettre, pas affirmer sa négation : affirmer la négation est une prémisse à son tour, qui porte la même charge.
   - Exiger de l'autre qu'il prouve la fausseté d'une prémisse au lieu de la prouver soi-même est un sophisme, l'appel à l'ignorance : « on n'a pas montré que non-P » n'établit pas P.
   - Conséquence : affirmer que Dieu existe et affirmer qu'il n'existe pas portent la même charge ; seul celui qui suspend son jugement ne porte aucune charge sur G ; il porte celle de ses propres assertions.
   - Écarter une prémisse ne coûte aucune preuve, mais ses implications restent à assumer (règle 7 de la population).
8. **Points de départ.** Seuls trois types d'énoncés sont admis sans démonstration : les définitions et les axiomes, admis par l'utilisateur, et les observations, admises selon la contrainte 1 et la règle d'admission des observations ([[theisme-cadre]], §4). Une définition fixe le sens d'un mot ; tout énoncé qui peut être faux et qu'on admet sans preuve est un axiome. Toute autre prémisse est démontrée à partir d'eux ; sinon elle reste une hypothèse : un module en tire ce qui suit sous la forme « si H, alors… », les philosophes peuvent l'assumer dans leur fiche, et personne ne la déclare vraie. Un axiome peut être ajouté en cours d'examen s'il est proposé avec son paragraphe de refus, éprouvé par la population, puis admis par l'utilisateur ; s'il sert à atteindre une conclusion visée, il est signalé comme tel, pour écarter la pétition de principe.
9. **Symétrie des définitions.** Tout sens d'un terme qui, avec le socle et E1 sous sa forme `∃x (x = x)` (D17 du [[theisme-cadre]]), rend vrai G ou ¬G par la seule définition est écarté, et son motif est consigné ; la thèse correspondante reste examinable comme hypothèse, à la charge de qui la soutient (contrainte 7). Un sens qui dépend d'un paramètre de définition est éprouvé sous chacune de ses valeurs, et le motif de son écart cite la valeur qui tranche.

   **Si tu la nies**, un sens choisi pour un terme peut trancher G ou ¬G sans démonstration, et la conclusion de l'examen est fixée par le vocabulaire. Aucune contradiction ; le coût est épistémique et vaut pour les deux camps. Chacun pourrait définir sa conclusion : « x est nécessaire si x = x et E(x) » rend G vrai dans tout modèle du socle avec `∃x (x = x)` ; le sens logique de « nécessaire » rendrait ¬G vrai (T9 de [[theisme-m0-resultats]]). La charge de la preuve (contrainte 7) cesserait alors de porter sur G.

## Déroulé d'un module

Rôles tenus par les agents de [[theisme-population]], dans l'ordre de son déroulé : formaliser (prémisses numérotées, règle nommée à chaque pas) ; vérifier (chaque inférence ; pétition de principe, faux dilemme, équivoque, glissement de quantificateur, composition, appel aux conséquences, appel à l'ignorance, homme de paille) ; explorer les refus ; plaider le refus puis les coûts de l'acceptation ; synthétiser sans conclure au-delà de l'établi.

Ordre des étapes : [[theisme-population]], « Déroulé d'un module ».

Livrables :

- une note `modules/theisme-mN-resultats` : question, argument formalisé, verdict de validité, positions, ce qui est transmis ;
- une note `modules/theisme-mN-debat` (population, « Traces ») ;
- toute prémisse, axiome ou hypothèse, reçoit son paragraphe « si tu la nies, voici ce que cela implique » : il dit ce qu'implique la négation de la prémisse, qui n'est ni l'écarter (contrainte 7) ni poser une thèse plus forte ; il classe le coût (contrainte 3) et dit si la prémisse sert G ou ¬G (contrainte 8) ; tout nouvel axiome entre au cadre ; toute nouvelle définition, avec les sens écartés et pourquoi ;
- registre, journal et vérifications mis à jour.

## Règles de conduite

- Un module à la fois ; le suivant attend l'arbitrage.
- Les questions se posent une par une, reformulées pour vérifier la réponse ; une réponse ambiguë est reformulée et reposée avant d'être consignée.
- Un refus déclaré « illogique » est testé : on cherche la contradiction explicite ; à défaut, on le dit et on le requalifie en coût.
- Un refus de prémisse est poursuivi honnêtement.
- Pas d'approximation, langage clair, structure nette.
