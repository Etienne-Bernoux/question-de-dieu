---
title: "Question de Dieu : 3. Principes modaux"
type: knowledge
scope: perso
projet: []
domaine: [philosophie, logique]
tags: [question-de-dieu, axiomes, definitions, modalite]
status: draft
updated: 2026-11-06
---

# 3. Principes modaux

N est un axiome, comme la caractérisation de la situation réelle (§4) ; K, T et U se démontrent du sens de « nécessaire » fixé en §1 et de cette caractérisation. Nier l'un de ces trois, c'est changer le sens de « nécessaire ».

## N. Nécessitation

Ce que la logique démontre à partir de ses seuls axiomes est nécessaire.

**Si tu la nies**, tu poses qu'au moins une vérité logique est fausse dans une situation possible. Aucune contradiction : en déclarant « nécessaire » vrai des seules instances de `¬(Q ∧ ¬Q)`, K et T restent vraies et N échoue, `P → P` n'étant pas nécessaire ; ce modèle quitte cependant le sens de « nécessaire » fixé en §1. La négation n'entraîne pas que les contradictions deviennent possibles : dans ce modèle, aucune ne l'est. Le coût est épistémique et lourd pour les deux camps : aucune contradiction n'est plus démontrée impossible, car passer de « ceci se contredit » à « ceci est impossible » exige N appliquée à A2. Deux raisonnements opposés perdent alors leur démonstration : l'objection « les attributs de Dieu sont incohérents, donc Dieu est impossible » (M8), et toute défense qui écarte une objection parce qu'elle serait contradictoire. L1, L2, T3 (T3a à T3e), T5, T6 et T8 reposent sur N et ne sont plus démontrés. La voie de H1 vers un être nécessaire suppose que la logique vaut dans toute situation possible, ce que N énonce. N ne sert ni G ni ¬G : elle vaut dans les modèles 1 et 2 de T6, l'un avec G, l'autre avec ¬G.

## K. Distribution

`□(P → Q) → (□P → □Q)`.

**Démontré** (RC). Si `□(P → Q)` et `□P` sont vrais, `P → Q` et `P` sont vrais dans toute situation possible, donc `Q` aussi (S, dans chaque situation) : `□Q` (§1). Le cas où l'antécédent est faux rend l'énoncé vrai (S).

**Si tu le nies**, tu changes le sens de « nécessaire ». Le refus n'est cohérent qu'en coupant « nécessaire » des situations : si l'on déclare nécessaires les vérités logiques, `p` et `p → q`, mais pas `q`, avec `p` et `q` vrais, N et T tiennent et K échoue. « Nécessaire » devient alors une étiquette, en équivoque avec le sens fixé en §1. Le coût est épistémique. L1, L2, T3 (T3a à T3e) et T6 ne sont plus démontrés ; la voie de H1 aussi, car passer de « la logique vaut nécessairement » et « nécessairement, si la logique vaut, x existe » à « x existe nécessairement » est une application de K. K ne sert ni G ni ¬G : il vaut dans les modèles 1 et 2 de T6, l'un avec G, l'autre avec ¬G.

## T. Factivité

`□P → P` : ce qui est nécessaire est vrai dans les faits.

**Démontré** (RC). Si `□P` est vrai, P est vrai dans toute situation possible (§1) ; la situation réelle en est une (§4), comme toute situation d'où l'on évalue : P y est vrai.

**Si tu le nies**, tu changes le sens de « nécessaire » : tu admets un P nécessaire et faux dans les faits. Il s'ensuit qu'un fait n'est pas possible : de `□P`, par A4, N et K, on tire `□¬¬P`, soit « non-P n'est pas possible », alors que non-P a lieu. Le refus n'est cohérent qu'en retirant la situation réelle des situations possibles : si l'on déclare tout énoncé nécessaire, N et K tiennent, T échoue, et plus rien n'est possible, pas même ce qui a lieu. La nécessité ne dit plus rien des faits. Le coût est épistémique. L5 perd sa démonstration, et les deux branches de T3 la leur : l'une a besoin de T pour passer de « Dieu existe nécessairement » à « Dieu existe », l'autre pour tirer de P1 « si Dieu existe, il existe nécessairement ». T6 la perd aussi, et T10 sa conclusion `¬G`. H1 s'arrête à « x existe nécessairement ». T ne sert ni G ni ¬G : il vaut dans les modèles 1 et 2 de T6, l'un avec G, l'autre avec ¬G.

## U. Ensemble unique des situations possibles

Les situations possibles sont les mêmes quelle que soit la situation d'où l'on regarde.

**Démontré** (RC). Le §1 fixe la valeur de `□P` par l'ensemble des situations possibles, sans référence à la situation d'où l'on évalue : cet ensemble est donc le même de partout.

**Conséquence démontrée, AM** : `◇□P → □P` (RC). (1) Si `◇□P`, il existe une situation possible `s` où `□P` est vrai ; (2) `□P` vrai en `s` signifie que P est vrai dans toute situation possible, et par U cet ensemble ne dépend pas de `s` ; (3) donc `□P`. Le cas où `◇□P` est faux rend l'énoncé vrai (S).

**Si tu nies U**, tu changes le sens de « nécessaire » : ce qui est possible dépend de la situation d'où l'on regarde, et `□P` est vrai en `s` si P est vrai dans toute situation possible **depuis** `s`. Aucune contradiction alors : avec deux situations `s` et `r`, où depuis `s` sont possibles `s` et `r`, depuis `r` seule `r`, et P vrai en `r` seulement, on a en `s` `◇□P` vrai et `□P` faux, tandis que N, K et T tiennent. Le premier coût, épistémique, est de définition : D2 et D20 doivent choisir une lecture. Lues « depuis la situation réelle », elles gardent une nécessité absolue, fixée par une seule situation, et `◇G ∧ ◇¬G` reste faux dans la situation réelle : un être nécessaire existe dans toute situation possible depuis elle, si bien que `G` y a partout la même valeur. Lues « depuis le point de vue », elles rendent la nécessité relative : avec trois situations `w`, `u`, `v` (depuis `w` : `w`, `u` ; depuis `u` : `u`, `v` ; depuis `v` : `v`), un être qui existe en `w` et `u` mais pas en `v` est nécessaire vu de `w` et ne l'est pas vu de `u`. Le second, épistémique aussi : L3 emploie U, donc P1 perd sa démonstration ; T3a reste dérivable de P1, T3b perd de plus AM ; T10, qui emploie U, perd la sienne ; et T7 tombe entier, son sens direct exigeant que la possibilité soit symétrique, son sens réciproque qu'elle soit transitive. Sous la seule lecture « depuis le point de vue », on peut tenir ensemble P1, « Dieu peut exister » et « Dieu peut ne pas exister » : depuis `s`, désignée, sont possibles `s` et `r`, depuis `r` seule `r` ; rien n'est cause de `x`, qui n'existe qu'en `r` ; un contingent `c` n'existe qu'en `s`. En `s`, P1, `◇G` et `◇¬G` sont vrais. U ne sert ni G ni ¬G : il vaut dans les modèles 1 et 2 de T6, l'un avec G, l'autre avec ¬G.
