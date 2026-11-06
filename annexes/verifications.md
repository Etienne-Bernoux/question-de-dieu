---
title: Question de Dieu : vérifications mécaniques
type: reference
scope: perso
projet: []
domaine: [philosophie, logique]
tags: [question-de-dieu, matrices, verification]
status: draft
updated: 2026-11-03
---

# Vérifications mécaniques

Matrices citées dans [cadre](../socle/cadre.md) et [m0-resultats](../modules/m0-resultats.md). Une matrice attribue à chaque énoncé une valeur et dit quelles valeurs comptent pour « vrai » (valeurs désignées). Un principe y « vaut » s'il est désigné sous toute attribution ; une règle y « vaut » si, sous toute attribution où ses prémisses sont désignées, sa conclusion l'est. Tout ce qui se dérive de principes et de règles qui valent dans une matrice y vaut aussi : un principe qui y échoue ne se dérive donc pas d'eux. Le script énumère toutes les attributions (2 à 64 selon la matrice et le nombre de variables).

| Matrice | Valeurs (désignées en gras) | Non | Et / ou | Si... alors | Sert à |
|---|---|---|---|---|---|
| 0 | 0, **1** | 1 − a | min / max | max(1 − a, b) | B et S : tout le retenu vaut |
| 1 | 0, 1, **2** | 2 si a = 0, sinon 0 | min / max | 2 si a ≤ b, sinon b | T0 ; refus de A3 |
| 2 | 0, **1**, **2** | 2 − a | min / max | max(2 − a, b) | refus de A2 : un énoncé et sa négation tenus ensemble pour vrais n'entraînent pas tout ; la formule A2 y reste désignée |
| 3 | 0, 1, **2** | 0 si a = 2, sinon 2 | min / max | 2 si a ≤ b, sinon b | refus de A4 sans S |
| 4 | 0, 1, 2, **3** | 3 − a | et / ou bit à bit | (3 − a) ou b | refus de B |

La recherche finale balaie les 27 négations possibles sur trois valeurs, trois définitions de « si... alors » (à seuil, additive, maximale) et deux choix de valeurs désignées.

## Résultat de l'exécution (2026-11-01, `python3 -I`)

```text
== Matrice 0 : deux valeurs, connecteurs classiques (B et S)
  A1                       True
  A2                       True
  A3                       True
  A4                       True
  contraposition           True
  absurde negatif          True
  MP                       True
  MT                       True
  SD                       True
  elim conjonction         True
  enchainement             True
  double negation (DNE)    True
  explosion                True
  P ou non-P vrai, pas les deux True
== Matrice 1 : trois valeurs, negation forte (T0, refus de A3)
  A1                       True
  A2                       True
  A3                       False   (echec attendu)
  A4                       True
  contraposition           True
  absurde negatif          True
  MP                       True
  MT                       True
  SD                       True
  elim conjonction         True
  enchainement             True
  double negation (DNE)    False   (echec attendu)
  explosion                True
  P ou non-P vrai, pas les deux False   (echec attendu)
== Matrice 2 : trois valeurs F<B<V, B et V designees (refus de A2)
  A1                       True
  A2                       True
  A3                       True
  A4                       True
  contraposition           True
  absurde negatif          True
  MP                       False   (echec attendu)
  MT                       False   (echec attendu)
  SD                       False   (echec attendu)
  elim conjonction         True
  enchainement             False   (echec attendu)
  double negation (DNE)    True
  explosion                False   (echec attendu)
  P ou non-P vrai, pas les deux False   (echec attendu)
== Matrice 3 : trois valeurs, A3 vaut mais A4 echoue (refus de A4 sans S)
  A1                       True
  A2                       True
  A3                       True
  A4                       False   (echec attendu)
  contraposition           False   (echec attendu)
  absurde negatif          False   (echec attendu)
  MP                       True
  MT                       True
  SD                       True
  elim conjonction         True
  enchainement             True
  double negation (DNE)    True
  explosion                True
  P ou non-P vrai, pas les deux True
== Matrice 4 : quatre valeurs, algebre a quatre elements (refus de B)
  A1                       True
  A2                       True
  A3                       True
  A4                       True
  contraposition           True
  absurde negatif          True
  MP                       True
  MT                       True
  SD                       True
  elim conjonction         True
  enchainement             True
  double negation (DNE)    True
  explosion                True
  P ou non-P vrai, pas les deux False   (echec attendu)
== Matrice 4, temoin P = 1 : P vrai False ; non-P vrai False ; P ou non-P vrai True
== Recherche : cadres a trois valeurs respectant tout le retenu et refusant A4 : 0
```

## Script

```python
from itertools import product


def check(name, V, neg, con, dis, imp, des, expect_false=()):
    def valid(f, n):
        return all(des(f(*v)) for v in product(V, repeat=n))

    def rule(prem, concl, n):
        return all(des(concl(*v)) for v in product(V, repeat=n) if all(des(p(*v)) for p in prem))

    tests = {
        "A1": lambda: valid(lambda p: imp(p, p), 1),
        "A2": lambda: valid(lambda p: neg(con(p, neg(p))), 1),
        "A3": lambda: valid(lambda p: dis(p, neg(p)), 1),
        "A4": lambda: valid(lambda p: imp(p, neg(neg(p))), 1),
        "contraposition": lambda: valid(lambda p, q: imp(imp(p, q), imp(neg(q), neg(p))), 2),
        "absurde negatif": lambda: valid(lambda p, q: imp(imp(p, con(q, neg(q))), neg(p)), 2),
        "MP": lambda: rule([lambda p, q: imp(p, q), lambda p, q: p], lambda p, q: q, 2),
        "MT": lambda: rule([lambda p, q: imp(p, q), lambda p, q: neg(q)], lambda p, q: neg(p), 2),
        "SD": lambda: rule([lambda p, q: dis(p, q), lambda p, q: neg(p)], lambda p, q: q, 2),
        "elim conjonction": lambda: rule([lambda p, q: con(p, q)], lambda p, q: p, 2),
        "enchainement": lambda: rule([lambda p, q, r: imp(p, q), lambda p, q, r: imp(q, r)], lambda p, q, r: imp(p, r), 3),
        "double negation (DNE)": lambda: rule([lambda p: neg(neg(p))], lambda p: p, 1),
        "explosion": lambda: rule([lambda p, q: con(p, neg(p))], lambda p, q: q, 2),
        "P ou non-P vrai, pas les deux": lambda: all((des(p) or des(neg(p))) and not (des(p) and des(neg(p))) for p in V),
    }
    print(f"== {name}")
    for k, t in tests.items():
        r = t()
        print(f"  {k:24} {r}{'   (echec attendu)' if k in expect_false else ''}")


check("Matrice 0 : deux valeurs, connecteurs classiques (B et S)",
      [0, 1], lambda a: 1 - a, min, max,
      lambda a, b: max(1 - a, b), lambda a: a == 1,
      expect_false=())

check("Matrice 1 : trois valeurs, negation forte (T0, refus de A3)",
      [0, 1, 2], lambda a: 2 if a == 0 else 0, min, max,
      lambda a, b: 2 if a <= b else b, lambda a: a == 2,
      expect_false=("A3", "double negation (DNE)", "P ou non-P vrai, pas les deux"))

check("Matrice 2 : trois valeurs F<B<V, B et V designees (refus de A2)",
      [0, 1, 2], lambda a: 2 - a, min, max,
      lambda a, b: max(2 - a, b), lambda a: a >= 1,
      expect_false=("explosion", "MP", "MT", "SD", "enchainement", "P ou non-P vrai, pas les deux"))

check("Matrice 3 : trois valeurs, A3 vaut mais A4 echoue (refus de A4 sans S)",
      [0, 1, 2], lambda a: 0 if a == 2 else 2, min, max,
      lambda a, b: 2 if a <= b else b, lambda a: a == 2,
      expect_false=("A4", "contraposition", "absurde negatif"))

check("Matrice 4 : quatre valeurs, algebre a quatre elements (refus de B)",
      [0, 1, 2, 3], lambda a: 3 - a, lambda a, b: a & b, lambda a, b: a | b,
      lambda a, b: (3 - a) | b, lambda a: a == 3,
      expect_false=("P ou non-P vrai, pas les deux",))

print("== Matrice 4, temoin P = 1 : P vrai", 1 == 3, "; non-P vrai", (3 - 1) == 3, "; P ou non-P vrai", (1 | 2) == 3)

V = [0, 1, 2]
imps = {"seuil": lambda a, b: 2 if a <= b else b,
        "additive": lambda a, b: min(2, 2 - a + b),
        "maximale": lambda a, b: max(2 - a, b)}
found = 0
for n in product(V, repeat=3):
    neg = lambda a, n=n: n[a]
    for imp in imps.values():
        for D in ({2}, {1, 2}):
            des = lambda a, D=D: a in D
            ok = all([
                all(des(imp(p, p)) for p in V),
                all(des(neg(min(p, neg(p)))) for p in V),
                all(des(max(p, neg(p))) for p in V),
                all(des(imp(imp(p, q), imp(neg(q), neg(p)))) for p, q in product(V, V)),
                all(des(imp(imp(p, min(q, neg(q))), neg(p))) for p, q in product(V, V)),
                all(des(q) for p, q in product(V, V) if des(imp(p, q)) and des(p)),
                all(des(neg(p)) for p, q in product(V, V) if des(imp(p, q)) and des(neg(q))),
                all(des(q) for p, q in product(V, V) if des(max(p, q)) and des(neg(p))),
                all(des(imp(p, r)) for p, q, r in product(V, V, V) if des(imp(p, q)) and des(imp(q, r))),
            ])
            if ok and not all(des(imp(p, neg(neg(p)))) for p in V):
                found += 1
print("== Recherche : cadres a trois valeurs respectant tout le retenu et refusant A4 :", found)
```

## Énumération des calculs de « si... alors » à deux valeurs

Les 16 façons de calculer « si P alors Q » à partir des valeurs de P et Q, testées contre A1, A4, la contraposition, l'absurde négatif, le modus ponens, le modus tollens et l'enchaînement. Deux passent : celle de S `(1, 1, 0, 1)` et celle où « si P alors Q » est vrai exactement quand P et Q ont la même valeur `(1, 0, 0, 1)`. Exécuté le 2026-11-01 (`python3 -I`).

```text
si P alors Q, valeurs pour (P,Q) = (0,0) (0,1) (1,0) (1,1) : (1, 0, 0, 1)
si P alors Q, valeurs pour (P,Q) = (0,0) (0,1) (1,0) (1,1) : (1, 1, 0, 1)
```

```python
from itertools import product
V = [0, 1]
neg = lambda a: 1 - a
for bits in product(V, repeat=4):
    f = {(0, 0): bits[0], (0, 1): bits[1], (1, 0): bits[2], (1, 1): bits[3]}
    imp = lambda a, b: f[(a, b)]
    d = lambda a: a == 1
    ok = all([
        all(d(imp(p, p)) for p in V),
        all(d(imp(p, neg(neg(p)))) for p in V),
        all(d(imp(imp(p, q), imp(neg(q), neg(p)))) for p, q in product(V, V)),
        all(d(imp(imp(p, min(q, neg(q))), neg(p))) for p, q in product(V, V)),
        all(d(q) for p, q in product(V, V) if d(imp(p, q)) and d(p)),
        all(d(neg(p)) for p, q in product(V, V) if d(imp(p, q)) and d(neg(q))),
        all(d(imp(p, r)) for p, q, r in product(V, V, V) if d(imp(p, q)) and d(imp(q, r))),
    ])
    if ok:
        print("si P alors Q, valeurs pour (P,Q) = (0,0) (0,1) (1,0) (1,1) :", bits)
```

## Modèles à situations : P1, T3e, T7, T10

Le script énumère tous les modèles, toutes situations possibles l'une depuis l'autre, de 1 à 3 situations avec 2 objets, et de 2 situations avec 3 objets : pour chaque situation, un domaine (un sous-ensemble des objets, vide compris) et une relation de dépendance entre objets distincts. Un objet est nécessaire s'il appartient à tous les domaines et ne dépend de rien dans aucune situation (D2, D19, D20). `G` est évalué dans chaque situation. Il compte les modèles où échouent P1 (L3), T3e, T7 (`◇G ∧ ◇¬G` jamais vrai) et T10 (un domaine vide exclut `◇G`), puis évalue le modèle B sous la lecture de D2 que le cadre écarte (ne dépendre de rien dans la seule situation considérée). Exécuté le 2026-11-03 (`python3 -I`) : aucun échec sur 266 512 modèles ; dans le modèle B, sous cette lecture, P1 est fausse.

```text
1 2 (16, {'P1': 0, 'T3e': 0, 'T7': 0, 'T10': 0})
2 2 (256, {'P1': 0, 'T3e': 0, 'T7': 0, 'T10': 0})
3 2 (4096, {'P1': 0, 'T3e': 0, 'T7': 0, 'T10': 0})
2 3 (262144, {'P1': 0, 'T3e': 0, 'T7': 0, 'T10': 0})
modele B lecture locale G par situation [True, False] P1 fausse
```

```python
from itertools import product
def run(nS, nO):
    objs=range(nO); pairs=[(x,y) for x in objs for y in objs if x!=y]
    n=0; bad={"P1":0,"T3e":0,"T7":0,"T10":0}
    for doms in product(range(2**nO), repeat=nS):
        for deps in product(range(2**len(pairs)), repeat=nS):
            n+=1
            dom=[{o for o in objs if d>>o&1} for d in doms]
            dep=[{pairs[i] for i in range(len(pairs)) if m>>i&1} for m in deps]
            nec=[x for x in objs if all(x in d for d in dom) and not any(p[0]==x for s in dep for p in s)]
            G=[any(x in dom[s] for x in nec) for s in range(nS)]
            boxG=all(G); dG=any(G); dnG=not all(G)
            if not all((not G[s]) or boxG for s in range(nS)): bad["P1"]+=1
            if not (boxG or not dG): bad["T3e"]+=1
            if dG and dnG: bad["T7"]+=1
            if any(not d for d in dom) and dG: bad["T10"]+=1
    return n,bad
for nS,nO in [(1,2),(2,2),(3,2),(2,3)]:
    print(nS,nO,run(nS,nO))
# modele B, lecture locale de D2
dom=[{0},{0,1}]; dep=[set(),{(0,1)}]
Gloc=[any(x in dom[s] and all(x in d for d in dom) and not any(p[0]==x for p in dep[s]) for x in (0,1)) for s in range(2)]
print("modele B lecture locale G par situation", Gloc, "P1 vraie" if all((not g) or all(Gloc) for g in Gloc) else "P1 fausse")
```

Une énumération bornée ne démontre pas un résultat : elle cherche un contre-modèle parmi les petits modèles. Les démonstrations sont dans [m0-resultats](../modules/m0-resultats.md).
