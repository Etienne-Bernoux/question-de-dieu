---
title: Examen du théisme — vérifications mécaniques
type: reference
scope: perso
projet: []
domaine: [philosophie, logique]
tags: [theisme, matrices, verification]
status: draft
updated: 2026-11-01
---

# Vérifications mécaniques

Matrices citées dans [[theisme-cadre]] et [[theisme-m0-resultats]]. Une matrice attribue à chaque énoncé une valeur et dit quelles valeurs comptent pour « vrai » (valeurs désignées). Un principe y « vaut » s'il est désigné sous toute attribution ; une règle y « vaut » si, sous toute attribution où ses prémisses sont désignées, sa conclusion l'est. Tout ce qui se dérive de principes et de règles qui valent dans une matrice y vaut aussi : un principe qui y échoue ne se dérive donc pas d'eux. Le script énumère toutes les attributions (2 à 64 selon la matrice et le nombre de variables).

| Matrice | Valeurs (désignées en gras) | Non | Et / ou | Si... alors | Sert à |
|---|---|---|---|---|---|
| 0 | 0, **1** | 1 − a | min / max | max(1 − a, b) | B et S : tout le retenu vaut |
| 1 | 0, 1, **2** | 2 si a = 0, sinon 0 | min / max | 2 si a ≤ b, sinon b | T0 ; refus de A3 |
| 2 | 0, **1**, **2** | 2 − a | min / max | max(2 − a, b) | refus de A2 : une contradiction n'entraîne pas tout |
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
