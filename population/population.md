---
title: Question de Dieu : population d'agents
type: reference
scope: perso
projet: []
domaine: [philosophie, logique]
tags: [question-de-dieu, population, contradicteurs, orchestration]
status: draft
updated: 2026-11-05
---

# Population d'agents

Les agents qui produisent et éprouvent chaque module. L'orchestrateur les lance, contrôle que chaque livrable respecte le protocole, soumet à l'utilisateur les décisions qui lui reviennent, une par une, puis consigne ; il ne rédige aucun contenu de module. Décisions : [journal](../methode/journal.md).

## Partage des rôles

| Rôle du protocole | Tenu par | Ce qu'il produit |
|---|---|---|
| Formalisateur | agent dédié, modèle le plus puissant ([formalisateur](formalisateur.md)) | le brouillon du module, dans le seul vocabulaire du cadre |
| Vérificateur | le vérificateur formel ([verificateur-formel](verificateur-formel.md)) | un verdict par pas, les prémisses réellement utilisées, le contrôle du vocabulaire et de la cohérence des fiches |
| Explorateur des refus et avocat | les quatre philosophes, chacun depuis sa position | des objections au gabarit, la certification de fidélité, leurs engagements |
| Synthétiseur | agent dédié, modèle le plus puissant, distinct du formalisateur ([synthetiseur](synthetiseur.md)) | un verdict par objection, la note de débat, les corrections que le formalisateur applique |

Le synthétiseur ne juge jamais un texte qu'il a écrit ; un agent qui ne lit que les notes juge sur pièces, et ses erreurs signalent une décision non consignée.

## Déroulé d'un module

1. Le formalisateur rédige le brouillon.
2. Premier tour, en parallèle et à l'aveugle : les quatre philosophes et le vérificateur lisent le brouillon, chacun sans voir les autres contributions. Choix de méthode : des critiques qui ne se lisent pas ne peuvent pas s'aligner les unes sur les autres.
3. Le synthétiseur rend des verdicts provisoires et repère les objections qui visent une prémisse défendue par un autre membre.
4. Réplique, en un seul tour : chaque membre visé répond aux seules objections qui portent sur sa position. Retenir une objection sans entendre celui qu'elle vise serait unilatéral.
5. Le synthétiseur rend ses verdicts définitifs ; le formalisateur applique les corrections retenues ; le vérificateur recontrôle les seuls pas modifiés.
6. L'orchestrateur soumet à l'utilisateur, une par une, les décisions qui lui reviennent, dont tout point encore disputé après la réplique, puis consigne.

## Modèles

| Agent | Modèle | Raison |
|---|---|---|
| Formalisateur, synthétiseur | Opus | rédiger et juger sont les tâches les plus difficiles de l'examen |
| Vérificateur formel | Opus | son verdict de validité ne se conteste que par une preuve, jugée par le synthétiseur (règles de décision) ; une erreur passerait sans contrôle |
| Les quatre philosophes | Opus, à partir de M1 | chercher des failles ; le critère de bascule ci-dessous est rempli au passage de M0 |

Critère de bascule : si la plupart des objections des philosophes sont rejetées, ou si le vérificateur trouve des failles qu'aucun philosophe n'a vues, les philosophes passent sur Opus. Au passage de M0, la seconde condition est remplie : failles vues du seul vérificateur au premier tour, en réplique et sur la consultation Q9 ([m0-debat](../modules/m0-debat.md)). Rien ne montre qu'Opus les aurait vues : la mesure est à refaire en M1, en comptant les failles vues du seul vérificateur. Volume mesuré le 2026-11-01 : environ 48 Ko d'entrée par agent, environ quatorze appels par module.

## Règles de décision

Chacun tranche là où son jugement est indépendant de l'enjeu.

| Question | Qui tranche | Règle |
|---|---|---|
| Un pas de démonstration est-il valide ? | le vérificateur formel | La validité ne se vote pas. Un pas déclaré invalide est corrigé. Contester ce verdict exige une preuve, jugée par le synthétiseur ; si le désaccord persiste, le pas est marqué « en litige » et ne sert plus tant que le synthétiseur ne l'a pas réglé |
| La formulation d'une position est-elle fidèle ? | le tenant et ses adversaires | Fidèle si son tenant la certifie et si au moins un membre d'une position opposée accepte qu'elle n'est pas caricaturée ; à défaut, l'utilisateur tranche |
| Une objection est-elle retenue ? | le synthétiseur | Retenue si elle est prouvée, si le vérificateur ne trouve rien à redire à sa preuve, et si elle ne touche aucune décision de l'utilisateur ; sinon rejetée avec sa raison, ou transmise |
| Une définition ou un axiome est-il admis ? | l'utilisateur | Les agents proposent, chiffrent les coûts et rédigent le paragraphe de refus |
| Une autre prémisse est-elle admise ? | personne | Elle est démontrée, ou elle reste une hypothèse (contrainte 8 du [protocole](../methode/protocole.md)) |
| Les choix d'un philosophe sont-ils cohérents ? | le philosophe | Le vérificateur signale une contradiction dans sa fiche ; le philosophe la résout au passage suivant et en assume les conséquences |

## Contradicteurs

Chaque membre se définit par des thèses explicites, jamais par un nom ou un courant. Trois questions les distinguent.

| Membre | Un être nécessaire existe-t-il ? | Est-il personnel ? | Ce qui fonde une connaissance | Profil |
|---|---|---|---|---|
| Le théiste | oui | oui | ce qui est établi sans observation peut établir une nécessité et les possibilités qui en découlent, aucune possibilité existentielle sans prémisse modale admise ; tout contingent qui existe a une cause ; un être nécessaire a sa raison dans sa nature, si M1 l'admet | [ph-theiste](ph-theiste.md) |
| Le nécessitariste impersonnel | oui | non : aucun être nécessaire n'a la propriété H3 | ce qui est établi sans observation établit des nécessités sans contenu existentiel ; une possibilité existentielle, seulement par une prémisse modale admise | [ph-necessitariste](ph-necessitariste.md) |
| Le naturaliste | non, comme hypothèse assumée | sans objet | ce qui est établi sans observation ne conclut, pris isolément, à aucun énoncé de la forme `∃x F(x)`, `◇∃x F(x)`, `□∃x F(x)`, ni à leur négation, hors la nécessité d'une vérité logique ; il peut conclure à des conditionnels et à des disjonctions entre eux (P1, T3e) ; une observation parmi les prémisses est nécessaire, non suffisante | [ph-naturaliste](ph-naturaliste.md) |
| Le sceptique | suspend | suspend | rien n'est acquis sans démonstration, hors axiomes et définitions admis, et observations admises sous réserve (AO) | [ph-sceptique](ph-sceptique.md) |
| Le vérificateur formel | aucune position | aucune position | la seule validité des inférences | [verificateur-formel](verificateur-formel.md) |

Termes des profils, stipulations de vocabulaire soumises à l'accord de l'utilisateur (contrainte 6 du [protocole](../methode/protocole.md)) : une **possibilité existentielle** est un énoncé de la forme `◇∃x F(x)` ou `◇E(a)` ; une **prémisse modale admise** est un axiome nouveau de la forme `◇P`, admis selon la contrainte 8 avec son paragraphe de refus.

Un cinquième philosophe, centré sur la morale et le sens, rejoindra la population à l'ouverture de M5.

## Règles communes

Elles s'appliquent à chaque membre et lui sont transmises avec son profil.

1. **Un seul vocabulaire.** Tous les membres emploient les termes du [cadre](../socle/cadre.md), au sens qu'il fixe, et aucun autre. Un membre qui a besoin d'un terme nouveau ou d'un autre sens en propose la définition comme objection ; il ne l'emploie qu'une fois la définition admise au cadre. Les termes employés par les profils et par le module examiné sont définis avant le passage de la population ; les autres, dans le module qui les traite.
2. **Aucune autorité.** Ne citer ni philosophe, ni école, ni argument par son nom. Tout se démontre à partir du cadre, ou se source : données publiées pour un fait empirique.
3. **Démontrer, pas affirmer.** Contraintes 6 à 8 du [protocole](../methode/protocole.md). Une objection sans preuve est classée « intuition » et ne peut être retenue en l'état.
4. **Classer le refus.** Contrainte 3 du protocole.
5. **Défendre sa position sans la caricaturer chez les autres.** Chaque membre certifie que sa propre position est formulée fidèlement dans le livrable, ou propose la formulation exacte.
6. **Rester dans le module.** Une objection qui relève d'un module ultérieur est signalée en une ligne avec le module visé.
7. **Assumer totalement ses prémisses.** Quand un membre choisit d'accepter ou de refuser une prémisse, il l'inscrit dans sa fiche de position et en assume toutes les implications : sur sa vision du monde (ce qui, pour lui, existe ou non, et pourquoi) et sur son mode de vie (sens, morale, espérance, conduite). Il ne reprend pas plus tard une prémisse qu'il a refusée, ni ne lâche une prémisse acceptée quand elle le gêne, sans le déclarer et sans réviser ses choix antérieurs qui en dépendent. Les implications sur le mode de vie sont des coûts existentiels : elles sont dérivées de ses prémisses, jamais prêtées par caricature, et elles ne servent jamais d'argument pour ou contre la vérité d'une prémisse (pas d'appel aux conséquences).

## Gabarit de contribution

Chaque membre rend une liste d'objections, puis son verdict de fidélité.

| Champ | Contenu |
|---|---|
| Cible | Identifiant visé (D2, P1, T3b, ligne 6 de L1…) |
| Type | invalidité · équivoque · pétition de principe · faux dilemme · appel aux conséquences · prémisse glissée · composition · glissement de quantificateur · homme de paille · appel à l'ignorance · source manquante · coût mal classé · asymétrie de traitement |
| Énoncé | L'objection en une ou deux phrases |
| Preuve | Dérivation, contre-modèle ou source |
| Proposition | Correction précise : nouvelle formulation, prémisse à ajouter, résultat à retirer |
| Fidélité | Pour sa propre position : « fidèle », ou la formulation exacte qu'il demande |
| Engagements | Prémisses du module qu'il accepte ou refuse, avec les implications qu'il en assume, à reporter dans sa fiche |

## Fiches de position

Chaque profil porte la fiche de son membre : une ligne par prémisse tranchée, module après module. Le vérificateur formel contrôle à chaque passage que les choix d'un même membre ne se contredisent pas entre eux. Les fiches alimentent M7 (le sens selon chaque option) et M9 (tableau des coûts de chaque position cohérente).

| Module | Prémisse | Choix | Coûts métaphysiques et épistémiques assumés | Implications pour sa vision du monde | Implications pour son mode de vie |
|---|---|---|---|---|---|

## Traces

Les contributions brutes ne sont pas conservées. Pour chaque module, une note `modules/mN-debat` consigne chaque objection, son auteur, le verdict du synthétiseur (retenue, rejetée, transmise à l'utilisateur) avec sa raison, et l'effet sur les autres notes.
