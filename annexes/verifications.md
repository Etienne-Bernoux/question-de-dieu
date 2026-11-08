---
title: "Question de Dieu : vérifications mécaniques"
type: reference
scope: perso
projet: []
domaine: [philosophie, logique]
tags: [question-de-dieu, matrices, verification]
status: draft
updated: 2026-11-07
---

# Vérifications mécaniques

Matrices citées dans [cadre](../socle/cadre/index.md) et [m0-resultats](../modules/m0/index.md). Une matrice attribue à chaque énoncé une valeur et dit quelles valeurs comptent pour « vrai » (valeurs désignées). Un principe y « vaut » s'il est désigné sous toute attribution ; une règle y « vaut » si, sous toute attribution où ses prémisses sont désignées, sa conclusion l'est. Tout ce qui se dérive de principes et de règles qui valent dans une matrice y vaut aussi : un principe qui y échoue ne se dérive donc pas d'eux. Le script énumère toutes les attributions (2 à 64 selon la matrice et le nombre de variables).

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

Une énumération bornée ne démontre pas un résultat : elle cherche un contre-modèle parmi les petits modèles. Les démonstrations sont dans [m0-resultats](../modules/m0/index.md).

## M1 : bases d'existence, raisons, observations

Contrôles mécaniques cités dans [m1-resultats](../modules/m1/resultats.md), exécutés le 2026-11-07 avec `python3 -I`, chaque script dans son dossier ; ceux du vérificateur lisent `check_m1.py` ou `check_t16_bases.py`, passés en argument ou placés à côté d'eux. Un contrôle borné ne démontre rien : il cherche un contre-exemple parmi les petits modèles. Les démonstrations sont dans les notes de M1.

### `check_m1.py` : modèles écrits et contrôles bornés (formalisateur)

Vérifie que chaque modèle écrit dans [m1-resultats](../modules/m1/resultats.md) (T14, T15, T17 et T18 sur un exemple fini, T19 (b) et (c), la remarque sur (b_s), T20 sous « toutes retenues ») est un modèle du socle et donne aux énoncés les valeurs annoncées. Sur tous les modèles finis du socle d'au plus trois objets et trois situations, il cherche un contre-exemple à T16 (découpage par classe, la raison d'exister étant codée comme une cause ou une raison de soi retenue), à « Pr entraîne ¬G » sous « retenues pour les seuls contingents » et « aucune retenue », à T19 (a), à l'incompatibilité de Pr, (b_s) et `∃x (x = x)` sous « aucune retenue », à L7 sous ses deux valeurs et à la première ligne de T20, et vérifie l'existence de témoins pour T20 sous « toutes retenues ».

Bornes : 1 969 708 modèles (tailles (1, 1) à (3, 3), objets × situations) ; environ huit minutes.

Code de sortie : 0.

Ne couvre pas : les modèles infinis (construction de T18 (b)) ; les noms et les chaînes d'identités ; les universels ; la généralité en `Ω` ; le calcul de la raison d'exister à partir de D18 (voir `check_t16_bases.py`).

Résultat (`python3 -I check_m1.py`) :

```text
models enumerated: 1969708
failures: 0
exit=0
```

```python
"""Mechanical checks for the M1 draft (Question de Dieu).

Finite models of the socle: situations, designated situation 0, objects,
domains D[s], cause relation C[s] (pairs (cause, effect)), with FE (effect in
D[s]) and irreflexivity. Dependence in s (D19 under FE, T12 (e)): x depends on
y in s iff (y, x) in C[s]. Names are only used in the named counter-models.

Part 1 checks the counter-models written in the notes.
Part 2 runs bounded exhaustive checks (all models up to 3 objects and
3 situations).
Exit code 0 iff every check passes.
"""

import itertools
import sys

VALUES = ("toutes", "inev", "cont", "aucune")
FAILURES = []


def check(label, condition):
    if not condition:
        FAILURES.append(label)
        print("FAIL", label)


class Model:
    def __init__(self, objects, domains, causes, names=None):
        self.objects = tuple(objects)
        self.S = range(len(domains))
        self.D = [frozenset(d) for d in domains]
        self.C = [frozenset(c) for c in causes]
        self.names = names or {}

    def is_socle_model(self):
        for s in self.S:
            for (y, x) in self.C[s]:
                if x not in self.D[s] or y == x:
                    return False
        return True

    def inev(self, o):
        return all(o in self.D[s] for s in self.S)

    def causes_of(self, x, s):
        return {y for (y, z) in self.C[s] if z == x}

    def nec(self, o):
        return self.inev(o) and all(not self.causes_of(o, s) for s in self.S)

    def G(self):
        return any(self.nec(o) for o in self.objects)

    def self_reason(self, x, value):
        if value == "toutes":
            return True
        if value == "inev":
            return self.inev(x)
        if value == "cont":
            return not self.inev(x)
        return False

    def reason(self, x, s, value):
        return bool(self.causes_of(x, s)) or self.self_reason(x, value)

    def Pr(self, value, only=None):
        sits = self.S if only is None else [only]
        return all(self.reason(x, s, value) for s in sits for x in self.D[s])

    def Prc(self, value, only=None):
        sits = self.S if only is None else [only]
        return all(self.reason(x, s, value)
                   for s in sits for x in self.D[s] if not self.inev(x))

    def Pc(self, only=None):
        sits = self.S if only is None else [only]
        return all(y in self.D[s] for s in sits for (y, _x) in self.C[s])

    def _acyclic(self, nodes, edges):
        graph = {n: set() for n in nodes}
        for (a, b) in edges:
            graph[a].add(b)
        state = {}

        def visit(n):
            state[n] = 1
            for m in graph[n]:
                if state.get(m) == 1:
                    return False
                if m not in state and not visit(m):
                    return False
            state[n] = 2
            return True

        return all(visit(n) for n in nodes if n not in state)

    def b(self, only=None):
        sits = self.S if only is None else [only]
        for s in sits:
            edges = [(x, y) for (y, x) in self.C[s]]
            if not self._acyclic(self.objects, edges):
                return False
        return True

    def b_s(self, only=None):
        sits = self.S if only is None else [only]
        for s in sits:
            dom = self.D[s]
            edges = [(x, y) for (y, x) in self.C[s] if x in dom and y in dom]
            if not self._acyclic(dom, edges):
                return False
            for v in dom:
                out = self.causes_of(v, s)
                if out and not (out & dom):
                    return False
        return True

    def Pn_i(self):
        existing = {o for s in self.S for o in self.D[s]}
        for x in self.objects:
            if not self.inev(x):
                continue
            for y in existing:
                deps = [(y, x) in self.C[s] for s in self.S]
                if any(deps) and not all(deps):
                    return False
        return True

    def E1(self):
        return bool(self.D[0])

    def E(self, name, s):
        return self.names[name] in self.D[s]

    def box_E(self, name):
        return all(self.E(name, s) for s in self.S)

    def dia_E(self, name):
        return any(self.E(name, s) for s in self.S)

    def dia_not_E(self, name):
        return any(not self.E(name, s) for s in self.S)

    def box_not_E(self, name):
        return all(not self.E(name, s) for s in self.S)

    def cause_named(self, u, t, s):
        return (self.names[u], self.names[t]) in self.C[s]


# Part 1. Named counter-models of the notes.

model1 = Model(["a"], [{"a"}], [set()])
model2 = Model(["a"], [{"a"}, set()], [set(), set()])
for m in (model1, model2):
    check("T6 models are socle models", m.is_socle_model())
check("model 1 of T6: G", model1.G())
check("model 2 of T6: not G", not model2.G())
for v in VALUES:
    check(f"contrainte 9, value {v}: model 1 keeps socle and E1 with G",
          model1.E1() and model1.G())
    check(f"contrainte 9, value {v}: model 2 keeps socle and E1 with not G",
          model2.E1() and not model2.G())

# T14 (Circ): E(x) with the chain does not entail Cause(u, t) nor box E(t).
m14 = Model(["a", "b"], [{"a"}, set()], [set(), set()],
            names={"x": "a", "t": "a", "u": "b"})
check("T14 model is a socle model", m14.is_socle_model())
check("T14: E(x) true in s1", m14.E("x", 0))
check("T14 (b): Cause(u, t) false in s1", not m14.cause_named("u", "t", 0))
check("T14 (c): box E(t) false", not m14.box_E("t"))

# T15: diamond forms do not give E(x).
m15a = Model(["a"], [set(), {"a"}], [set(), set()], names={"x": "a", "t": "a"})
check("T15 model a is a socle model", m15a.is_socle_model())
check("T15 (b): dia E(t) true, E(x) false in s1",
      m15a.dia_E("t") and not m15a.E("x", 0))
check("T15 (b): dia not E(t) true, E(x) false in s1",
      m15a.dia_not_E("t") and not m15a.E("x", 0))
m15b = Model(["a"], [set()], [set()], names={"x": "a", "t": "a"})
check("T15 (b): box not E(t) true, E(x) false",
      m15b.box_not_E("t") and not m15b.E("x", 0))

# T19 (b): pairwise witnesses under "aucune retenue".
w_pr_pc = Model(["a", "b"], [{"a", "b"}], [{("a", "b"), ("b", "a")}])
check("T19 (b) Pr Pc E1 not (b)",
      w_pr_pc.is_socle_model() and w_pr_pc.Pr("aucune") and w_pr_pc.Pc()
      and w_pr_pc.E1() and not w_pr_pc.b())
w_pr_b = Model(["x", "a"], [{"x"}], [{("a", "x")}])
check("T19 (b) Pr (b) E1 not Pc",
      w_pr_b.is_socle_model() and w_pr_b.Pr("aucune") and w_pr_b.b()
      and w_pr_b.E1() and not w_pr_b.Pc())
check("T19 (b) remark: same model makes (b_s) false", not w_pr_b.b_s())
check("T19 (b) Pc (b) E1 not Pr",
      model2.Pc() and model2.b() and model2.E1() and not model2.Pr("aucune"))
for v, m in (("toutes", model1), ("inev", model1), ("cont", model2)):
    check(f"T19 (c) value {v}: Pr Pc (b) E1 together",
          m.Pr(v) and m.Pc() and m.b() and m.E1())

# T20, value toutes: package with G and with not G.
for m, g in ((model1, True), (model2, False)):
    check(f"T20 toutes: package true, G={g}",
          m.Pr("toutes") and m.Pc() and m.b() and m.Pn_i() and m.E1()
          and m.G() == g)

# T17: constructions A and B applied to an example.
base = Model(["a", "b"], [{"a", "b"}], [{("a", "b")}])
omega = lambda m: (("a", "b") in m.C[0] and "a" in m.D[0] and "b" in m.D[0]
                   and ("b", "a") not in m.C[0])
check("T17 example: Omega true", omega(base))
a_cont = Model(["a", "b", "v"], [{"a", "b", "v"}, set()], [{("a", "b")}, set()])
check("T17 A (contingent v without cause): Omega kept, Pr_c false",
      a_cont.is_socle_model() and omega(a_cont) and a_cont.E1()
      and not a_cont.Prc("inev") and not a_cont.Prc("aucune")
      and not a_cont.Pr("inev") and not a_cont.Pr("aucune"))
a_inev = Model(["a", "b", "v"], [{"a", "b", "v"}], [{("a", "b")}])
check("T17 A (inevitable v without cause): Omega kept, Pr false under cont",
      a_inev.is_socle_model() and omega(a_inev) and not a_inev.Pr("cont"))
b_all = Model(["a", "b", "w"], [{"a", "b"}],
              [{("a", "b"), ("w", "a"), ("w", "b")}])
check("T17 B (absent w causes everything): Omega kept, Pr and Pr_c true",
      b_all.is_socle_model() and omega(b_all)
      and all(b_all.Pr(v) and b_all.Prc(v) for v in VALUES))
b_pc = Model(["a", "b", "w1", "w2"], [{"a", "b", "w1", "w2"}],
             [{("a", "b"), ("w1", "w2"), ("w2", "w1"), ("w1", "a"), ("w1", "b")}])
check("T17 B' (with Pc): Omega kept, Pr, Pr_c and Pc true",
      b_pc.is_socle_model() and omega(b_pc) and b_pc.Pc()
      and all(b_pc.Pr(v) and b_pc.Prc(v) for v in VALUES))

# T18 (c) and (d).
cyc = Model(["a", "b"], [{"a", "b"}], [{("a", "b"), ("b", "a")}])
check("T18 (c): observed cycle makes (b) false", not cyc.b())
big = Model(["a", "b", "c"], [{"a", "b", "c"}, {"a"}],
            [{("a", "b"), ("c", "a"), ("b", "c")}, set()])
cut = Model(["a", "b", "c"], [{"a", "b", "c"}, {"a"}],
            [{("a", "b")}, set()])
check("T18 (d): acyclic observed causes, model cut to them makes (b) true",
      big.is_socle_model() and cut.is_socle_model() and not big.b() and cut.b())

# Part 2. Bounded exhaustive checks.


def all_models(n_obj, n_sit):
    objs = list(range(n_obj))
    subsets = [frozenset(c) for r in range(n_obj + 1)
               for c in itertools.combinations(objs, r)]
    for doms in itertools.product(subsets, repeat=n_sit):
        per_sit = []
        for d in doms:
            pairs = [(y, x) for x in d for y in objs if y != x]
            rels = [frozenset(c) for r in range(len(pairs) + 1)
                    for c in itertools.combinations(pairs, r)]
            per_sit.append(rels)
        for causes in itertools.product(*per_sit):
            yield Model(objs, doms, causes)


counts = {"models": 0}
witness = {v: {"G": False, "notG": False} for v in VALUES}
for n_obj, n_sit in ((1, 1), (2, 1), (3, 1), (1, 2), (2, 2), (3, 2), (1, 3), (2, 3), (3, 3)):
    for m in all_models(n_obj, n_sit):
        counts["models"] += 1
        e1 = m.E1()
        pc, bb, pni = m.Pc(), m.b(), m.Pn_i()
        for s in m.S:
            for x in m.D[s]:
                caused = bool(m.causes_of(x, s))
                for v in VALUES:
                    r = m.reason(x, s, v)
                    if m.nec(x):
                        check(f"T16 (a) {v}", r == (v in ("toutes", "inev")))
                    elif not m.inev(x):
                        if v in ("toutes", "cont"):
                            check(f"T16 (b) {v}", r)
                        else:
                            check(f"T16 (b) {v}", r == caused)
                    else:
                        if v in ("toutes", "inev"):
                            check(f"T16 (c) {v}", r)
                        else:
                            check(f"T16 (c) {v}", r == caused)
        for v in ("cont", "aucune"):
            if m.Pr(v):
                check(f"Pr entails not G under {v}", not m.G())
        if e1 and m.Pr("aucune") and pc:
            check("T19 (a): Pr Pc E1 under aucune make (b) false", not bb)
        if e1 and m.Pr("aucune"):
            check("remark: Pr (b_s) E1 incompatible under aucune", not m.b_s())
        if e1 and m.Prc("inev", only=0) and m.Pc(only=0) and m.b(only=0):
            check("L7 under inev: an inevitable exists",
                  any(m.inev(o) for o in m.D[0]))
        if e1 and m.Prc("aucune", only=0) and m.Pc(only=0) and m.b(only=0):
            check("L7 under aucune: an inevitable exists",
                  any(m.inev(o) for o in m.D[0]))
        if e1 and m.Pr("inev") and pc and bb and pni:
            check("T20 inev: package entails G", m.G())
        if e1 and m.Pr("toutes") and pc and bb and pni:
            witness["toutes"]["G" if m.G() else "notG"] = True

check("T20 toutes: bounded witnesses with G and with not G",
      witness["toutes"]["G"] and witness["toutes"]["notG"])

print(f"models enumerated: {counts['models']}")
print(f"failures: {len(set(FAILURES))}")
sys.exit(1 if FAILURES else 0)
```

### `count_premises_strict.py` : les contrôles conditionnels ne sont pas vides (vérificateur)

Compte, sur les mêmes tailles que `check_m1.py`, les modèles qui vérifient l'antécédent de chaque contrôle conditionnel, et les trois classes de T16 ; sort en 1 si un effectif est nul. Il remplace un script de comptage antérieur, qui n'en testait aucun.

Bornes : mêmes tailles que `check_m1.py`, dont (1, 3) et (3, 3) ; environ quarante secondes.

Code de sortie : 0 ; aucun effectif nul.

Ne couvre pas : ce qu'il compte n'est pas une preuve des contrôles eux-mêmes ; mêmes limites que `check_m1.py`.

Résultat (`python3 -I count_premises_strict.py check_m1.py`) :

```text
{'T16a_nec': 144660, 'T16b_cont': 5079203, 'T16c_inevdep': 8917098, 'PrG_cont': 687819, 'PrG_aucune': 262206, 'T19a': 29797, 'remark_bs': 262206, 'L7_inev': 324553, 'L7_aucune': 324553, 'T20_inev': 1183, 'T20_toutes_G': 4361, 'T20_toutes_notG': 5506}
empty antecedents: []
```

```python
"""Non-vacuity of every conditional check of check_m1.py, on the same sizes.

Reuses the Model class and generator of check_m1.py (path given as argv[1])
without running its checks. Exit 1 if any antecedent count is zero.
"""
import sys

src = open(sys.argv[1]).read()
ns = {}
exec(compile(src.split("# Part 1.")[0], "model", "exec"), ns)
exec(compile(src.split("# Part 2. Bounded exhaustive checks.")[1].split("counts = ")[0], "gen", "exec"), ns)
all_models = ns["all_models"]
SIZES = ((1, 1), (2, 1), (3, 1), (1, 2), (2, 2), (3, 2), (1, 3), (2, 3), (3, 3))
c = {k: 0 for k in ("T16a_nec", "T16b_cont", "T16c_inevdep", "PrG_cont", "PrG_aucune",
                    "T19a", "remark_bs", "L7_inev", "L7_aucune", "T20_inev",
                    "T20_toutes_G", "T20_toutes_notG")}
for n_obj, n_sit in SIZES:
    for m in all_models(n_obj, n_sit):
        for s in m.S:
            for x in m.D[s]:
                if m.nec(x):
                    c["T16a_nec"] += 1
                elif not m.inev(x):
                    c["T16b_cont"] += 1
                else:
                    c["T16c_inevdep"] += 1
        e1 = m.E1()
        if m.Pr("cont"):
            c["PrG_cont"] += 1
        if m.Pr("aucune") and m.D[0]:
            c["PrG_aucune"] += 1
        if e1 and m.Pr("aucune") and m.Pc():
            c["T19a"] += 1
        if e1 and m.Pr("aucune"):
            c["remark_bs"] += 1
        if e1 and m.Prc("inev", only=0) and m.Pc(only=0) and m.b(only=0):
            c["L7_inev"] += 1
        if e1 and m.Prc("aucune", only=0) and m.Pc(only=0) and m.b(only=0):
            c["L7_aucune"] += 1
        pkg = m.Pc() and m.b() and m.Pn_i() and e1
        if pkg and m.Pr("inev"):
            c["T20_inev"] += 1
        if pkg and m.Pr("toutes"):
            c["T20_toutes_G" if m.G() else "T20_toutes_notG"] += 1
print(c)
empty = [k for k, v in c.items() if v == 0]
print("empty antecedents:", empty)
sys.exit(1 if empty else 0)
```

### `check_t16_bases.py` : T12, T13, T14, T16 et Circ′ calculés à partir de D18 (vérificateur)

Ne code pas la raison d'exister : il la calcule. Sur 14 parties possibles d'une base pour les noms `x`, `t`, `u` (`E(t)`, `E(u)`, les six `Cause(a, b)`, les trois identités, `□E(x)`, `□E(t)`, `□E(u)`), il décide « M entraîne `E(x)` » par recherche exhaustive de contre-modèles du socle, garde les bases minimales, applique la clause d'identité (lecture étroite, parties `□` opaques) et les parties admises de chaque valeur, écriture modale distinguée, puis compare le résultat à la table de T16 sur 54 modèles d'essai. Il contrôle aussi T12 et T13 (ii) (une seule partie non identitaire par base minimale), T14, Circ′ et la faille de la clôture de Circ sur `{□E(x)}`. Preuve par retrait faite par le vérificateur : retirer l'écriture modale de la valeur attendue fait échouer 2 comparaisons ; admettre `□E` sous toute valeur en fait échouer 4.

Bornes : contre-modèles bornés à 3 objets et 2 situations, noms rigides ; 19 bases minimales ; 54 modèles d'essai (9 où la chose est nécessaire, 18 contingente, 27 inévitable dépendante).

Code de sortie : 0.

Ne couvre pas : ces 14 parties seulement, sans négation ni universel ; un seul nom de plus pour l'objet de `x` ; contre-modèles bornés.

Résultat (`python3 -I check_t16_bases.py`) :

```text
closed Circ leaves {box E(x)} outside the circle: True
minimal bases in pool: 19 test models per class: {'nec': 9, 'cont': 18, 'inevdep': 27}
failures: 0
```

```python
"""Non-tautological check of T16 (and T12, T13, T14, Circ', closure of Circ).

Reasons are not coded as "a cause or a retained self-reason". They are
computed from D18: enumerate every subset M of a finite pool of base parts,
decide "M entails E(x)" by exhaustive countermodel search over bounded models
of the socle (3 objects, 2 situations), take minimal bases, apply the identity
clause (entailment by identity alone, with box parts opaque) and the admitted
parts of each parameter value, then compare with the T16 table on test models.
Exit 0 iff every comparison and every stated verdict holds.
"""
import itertools
import sys

NAMES = ("x", "t", "u")
PARTS = []
for n in ("t", "u"):
    PARTS.append(("E", n))
for a in NAMES:
    for b in NAMES:
        if a != b:
            PARTS.append(("C", a, b))
for a, b in (("t", "x"), ("u", "x"), ("t", "u")):
    PARTS.append(("I", a, b))
for n in NAMES:
    PARTS.append(("B", n))
EX = len(PARTS)
NBITS = EX + 1
BMASK = sum(1 << i for i, p in enumerate(PARTS) if p[0] == "B")
IDX = {p: i for i, p in enumerate(PARTS)}
FAIL = []


def check(label, cond):
    if not cond:
        FAIL.append(label)
        print("FAIL", label)


def valuation(dom, cause0, nm):
    """dom: list of domains per situation (0 designated); cause0: pairs at s0."""
    m = 0
    for i, p in enumerate(PARTS):
        if p[0] == "E":
            v = nm[p[1]] in dom[0]
        elif p[0] == "C":
            v = (nm[p[1]], nm[p[2]]) in cause0
        elif p[0] == "I":
            v = nm[p[1]] == nm[p[2]]
        else:
            v = all(nm[p[1]] in d for d in dom)
        if v:
            m |= 1 << i
    if nm["x"] in dom[0]:
        m |= 1 << EX
    return m


def models(fe, irreflexive):
    objs = range(3)
    subsets = [frozenset(c) for r in range(4) for c in itertools.combinations(objs, r)]
    for d0 in subsets:
        for d1 in subsets:
            if fe:
                pairs = [(a, b) for b in d0 for a in objs if (a != b or not irreflexive)]
            else:
                pairs = [(a, b) for a in objs for b in objs if (a != b or not irreflexive)]
            for r in range(len(pairs) + 1):
                for c in itertools.combinations(pairs, r):
                    for assign in itertools.product(objs, repeat=3):
                        yield [d0, d1], frozenset(c), dict(zip(NAMES, assign))


def masks(fe, irreflexive, opaque_box=False):
    out = set()
    for dom, c, nm in models(fe, irreflexive):
        m = valuation(dom, c, nm)
        if opaque_box:
            m |= BMASK
        out.add(m)
    return out


def entail_table(ms, target_bit):
    """ent[Q] True iff premises Q (bitmask over NBITS) entail the target bit."""
    size = 1 << NBITS
    counter = bytearray(size)
    for m in ms:
        if not (m >> target_bit) & 1:
            counter[m] = 1
    for b in range(NBITS):
        bit = 1 << b
        for q in range(size):
            if not q & bit and counter[q | bit]:
                counter[q] = 1
    return [not counter[q] for q in range(size)]


socle = masks(fe=True, irreflexive=True)
anymodel = masks(fe=False, irreflexive=False)
identity_only = masks(fe=False, irreflexive=False, opaque_box=True)

ENT = entail_table(socle, EX)
ENT_ALL = entail_table(anymodel, EX)
ENT_ID = entail_table(identity_only, EX)
ENT_PART = {i: entail_table(socle, i) for i in range(EX)}
ENT_PART_NOFE = {i: entail_table(anymodel, i) for i in range(EX)}

FULL = (1 << EX) - 1


def minimal(M):
    if not ENT[M]:
        return False
    for i in range(EX):
        if M >> i & 1 and ENT[M & ~(1 << i)]:
            return False
    return True


MINIMAL = [M for M in range(1 << EX) if minimal(M)]
IDS = sum(1 << i for i, p in enumerate(PARTS) if p[0] == "I")


def circ(M):
    prem = (M & IDS) | (1 << EX)
    return all(ENT_PART[i][prem] for i in range(EX) if M >> i & 1)


def circ_prime(M):
    return ENT_ALL[M]


def circ_closed(M):
    """Closure by consequence without FE: M entails a base that Circ calls circular."""
    for N in MINIMAL:
        if circ(N) and all(ENT_PART_NOFE[i][M] for i in range(EX) if N >> i & 1):
            return True
    return False


def form(M):
    kinds = sorted({PARTS[i][0] for i in range(EX) if M >> i & 1})
    return "".join(kinds)


# T12 / T13 (ii): minimal bases are E+chain, C+chain, B+chain.
for M in MINIMAL:
    nonid = [PARTS[i] for i in range(EX) if M >> i & 1 and PARTS[i][0] != "I"]
    check(f"T12/T13 (ii): one non-identity part in minimal base {form(M)}", len(nonid) == 1)
# T14 and Circ' verdicts by form.
for M in MINIMAL:
    k = [PARTS[i][0] for i in range(EX) if M >> i & 1 and PARTS[i][0] != "I"][0]
    check(f"T14: Circ on form {k}", circ(M) == (k == "E"))
    check(f"Circ': on form {k}", circ_prime(M) == (k in ("E", "B")))
    check(f"identity clause (reading a): blocks only form {k}", ENT_ID[M] == (k == "E"))
# Closure gap: {box E(x)} (empty chain) is not circular under Circ closed by consequence.
bx = 1 << IDX[("B", "x")]
check("{box E(x)} is a minimal base", bx in MINIMAL)
gap = not circ_closed(bx)
btx = (1 << IDX[("B", "t")]) | (1 << IDX[("I", "t", "x")])
check("{box E(t), t = x} is circular under closed Circ", circ_closed(btx))
print("closed Circ leaves {box E(x)} outside the circle:", gap)

# T16 on test models: objects X=0, U=1; names x, t -> X ; u -> U.
VALUES = ("toutes", "inev_id", "inev_modal", "cont", "aucune")


def retains(value, cls):
    return {"toutes": True, "inev_id": cls != "cont", "cont": cls == "cont",
            "aucune": False, "inev_modal": False}[value]


nm = {"x": 0, "t": 0, "u": 1}
tested = {c: 0 for c in ("nec", "cont", "inevdep")}
subs = [frozenset(), frozenset({1}), frozenset({0}), frozenset({0, 1})]
for d0 in (frozenset({0}), frozenset({0, 1})):
    for d1 in subs:
        dom = [d0, d1]
        pairs = [[(a, b) for b in d for a in (0, 1) if a != b] for d in dom]
        for c0 in (frozenset(c) for r in range(len(pairs[0]) + 1) for c in itertools.combinations(pairs[0], r)):
            for c1 in (frozenset(c) for r in range(len(pairs[1]) + 1) for c in itertools.combinations(pairs[1], r)):
                inev = all(0 in d for d in dom)
                caused_somewhere = any((1, 0) in c for c in (c0, c1))
                cls = "cont" if not inev else ("nec" if not caused_somewhere else "inevdep")
                tested[cls] += 1
                true_parts = valuation(dom, c0, nm) & FULL
                caused_s = (1, 0) in c0
                for v in VALUES:
                    got = False
                    for M in MINIMAL:
                        if M & ~true_parts:
                            continue
                        if M & BMASK and v != "inev_modal":
                            continue
                        if ENT_ID[M] and not retains(v, cls):
                            continue
                        got = True
                        break
                    expected = caused_s or retains(v, cls) or (v == "inev_modal" and cls != "cont")
                    check(f"T16 {cls} {v}", got == expected)
print("minimal bases in pool:", len(MINIMAL), "test models per class:", tested)
check("T16: every class tested", all(tested.values()))
print("failures:", len(set(FAIL)))
sys.exit(1 if FAIL else 0)
```

### `check_t16_miroir.py` : extension à la partie miroir (vérificateur)

Même méthode que `check_t16_bases.py`, l'ensemble des parties étendu à la partie miroir `E(t) ∧ ◇¬E(t)` pour chaque nom, les bases minimales restreintes à celles qui sont satisfiables. Vérifie T13 étendu ((ii′) : une seule partie non identitaire par base minimale ; `{E(x) ∧ ◇¬E(x)}` est une base minimale ; Circ ne la range pas parmi les cercles), Circ′ sur les trois formes, et T16 sous l'écriture miroir de « retenues pour les seuls contingents » et sous « aucune retenue » avec le lien de D18 (les bases modale et miroir ne donnent une raison que sous la valeur qui les retient).

Bornes : comme `check_t16_bases.py` ; 18 bases minimales satisfiables ; 54 modèles d'essai.

Code de sortie : 0.

Ne couvre pas : mêmes limites que `check_t16_bases.py` ; aucune base qui mêle plusieurs parties modales.

Résultat (`python3 -I check_t16_miroir.py`) :

```text
closed Circ leaves {box E(x)} outside the circle: True
minimal bases in pool: 18 test models per class: {'nec': 9, 'cont': 18, 'inevdep': 27}
failures: 0
```

```python
"""Non-tautological check of T16 (and T12, T13, T14, Circ', closure of Circ).

Reasons are not coded as "a cause or a retained self-reason". They are
computed from D18: enumerate every subset M of a finite pool of base parts,
decide "M entails E(x)" by exhaustive countermodel search over bounded models
of the socle (3 objects, 2 situations), take minimal bases, apply the identity
clause (entailment by identity alone, with box parts opaque) and the admitted
parts of each parameter value, then compare with the T16 table on test models.
Exit 0 iff every comparison and every stated verdict holds.
"""
import itertools
import sys

NAMES = ("x", "t", "u")
PARTS = []
for n in ("t", "u"):
    PARTS.append(("E", n))
for a in NAMES:
    for b in NAMES:
        if a != b:
            PARTS.append(("C", a, b))
for a, b in (("t", "x"), ("u", "x"), ("t", "u")):
    PARTS.append(("I", a, b))
for n in NAMES:
    PARTS.append(("B", n))
for n in NAMES:
    PARTS.append(("M", n))
EX = len(PARTS)
NBITS = EX + 1
BMASK = sum(1 << i for i, p in enumerate(PARTS) if p[0] in ("B", "M"))
ONLYB = sum(1 << i for i, p in enumerate(PARTS) if p[0] == "B")
ONLYM = sum(1 << i for i, p in enumerate(PARTS) if p[0] == "M")
IDX = {p: i for i, p in enumerate(PARTS)}
FAIL = []


def check(label, cond):
    if not cond:
        FAIL.append(label)
        print("FAIL", label)


def valuation(dom, cause0, nm):
    """dom: list of domains per situation (0 designated); cause0: pairs at s0."""
    m = 0
    for i, p in enumerate(PARTS):
        if p[0] == "E":
            v = nm[p[1]] in dom[0]
        elif p[0] == "C":
            v = (nm[p[1]], nm[p[2]]) in cause0
        elif p[0] == "I":
            v = nm[p[1]] == nm[p[2]]
        elif p[0] == "B":
            v = all(nm[p[1]] in d for d in dom)
        else:
            v = nm[p[1]] in dom[0] and any(nm[p[1]] not in d for d in dom)
        if v:
            m |= 1 << i
    if nm["x"] in dom[0]:
        m |= 1 << EX
    return m


def models(fe, irreflexive):
    objs = range(3)
    subsets = [frozenset(c) for r in range(4) for c in itertools.combinations(objs, r)]
    for d0 in subsets:
        for d1 in subsets:
            if fe:
                pairs = [(a, b) for b in d0 for a in objs if (a != b or not irreflexive)]
            else:
                pairs = [(a, b) for a in objs for b in objs if (a != b or not irreflexive)]
            for r in range(len(pairs) + 1):
                for c in itertools.combinations(pairs, r):
                    for assign in itertools.product(objs, repeat=3):
                        yield [d0, d1], frozenset(c), dict(zip(NAMES, assign))


def masks(fe, irreflexive, opaque_box=False):
    out = set()
    for dom, c, nm in models(fe, irreflexive):
        m = valuation(dom, c, nm)
        if opaque_box:
            m |= BMASK
        out.add(m)
    return out


def entail_table(ms, target_bit):
    """ent[Q] True iff premises Q (bitmask over NBITS) entail the target bit."""
    size = 1 << NBITS
    counter = bytearray(size)
    for m in ms:
        if not (m >> target_bit) & 1:
            counter[m] = 1
    for b in range(NBITS):
        bit = 1 << b
        for q in range(size):
            if not q & bit and counter[q | bit]:
                counter[q] = 1
    return [not counter[q] for q in range(size)]


socle = masks(fe=True, irreflexive=True)
anymodel = masks(fe=False, irreflexive=False)
identity_only = masks(fe=False, irreflexive=False, opaque_box=True)

ENT = entail_table(socle, EX)
ENT_ALL = entail_table(anymodel, EX)
ENT_ID = entail_table(identity_only, EX)
ENT_PART = {i: entail_table(socle, i) for i in range(EX)}
ENT_PART_NOFE = {i: entail_table(anymodel, i) for i in range(EX)}

FULL = (1 << EX) - 1


def minimal(M):
    if not ENT[M]:
        return False
    for i in range(EX):
        if M >> i & 1 and ENT[M & ~(1 << i)]:
            return False
    return True


SAT = bytearray(1 << NBITS)
for m in socle:
    SAT[m] = 1
for b in range(NBITS):
    bit = 1 << b
    for q in range(1 << NBITS):
        if not q & bit and SAT[q | bit]:
            SAT[q] = 1
MINIMAL = [M for M in range(1 << EX) if minimal(M) and SAT[M]]
IDS = sum(1 << i for i, p in enumerate(PARTS) if p[0] == "I")


def circ(M):
    prem = (M & IDS) | (1 << EX)
    return all(ENT_PART[i][prem] for i in range(EX) if M >> i & 1)


def circ_prime(M):
    return ENT_ALL[M]


def circ_closed(M):
    """Closure by consequence without FE: M entails a base that Circ calls circular."""
    for N in MINIMAL:
        if circ(N) and all(ENT_PART_NOFE[i][M] for i in range(EX) if N >> i & 1):
            return True
    return False


def form(M):
    kinds = sorted({PARTS[i][0] for i in range(EX) if M >> i & 1})
    return "".join(kinds)


# T12 / T13 (ii): minimal bases are E+chain, C+chain, B+chain.
for M in MINIMAL:
    nonid = [PARTS[i] for i in range(EX) if M >> i & 1 and PARTS[i][0] != "I"]
    check(f"T12/T13 (ii), (ii'): one non-identity part in minimal base {form(M)}", len(nonid) == 1)
# T14 and Circ' verdicts by form.
for M in MINIMAL:
    k = [PARTS[i][0] for i in range(EX) if M >> i & 1 and PARTS[i][0] != "I"][0]
    check(f"T14: Circ on form {k}", circ(M) == (k == "E"))
    check(f"Circ': on form {k}", circ_prime(M) == (k in ("E", "B", "M")))
    check(f"identity clause (reading a): blocks only form {k}", ENT_ID[M] == (k == "E"))
mx = 1 << IDX[("M", "x")]
check("(ii'): {E(x) & dia not E(x)} is a minimal base", mx in MINIMAL)
check("Circ: miroir base not circular", not circ(mx))

# Closure gap: {box E(x)} (empty chain) is not circular under Circ closed by consequence.
bx = 1 << IDX[("B", "x")]
check("{box E(x)} is a minimal base", bx in MINIMAL)
gap = not circ_closed(bx)
btx = (1 << IDX[("B", "t")]) | (1 << IDX[("I", "t", "x")])
check("{box E(t), t = x} is circular under closed Circ", circ_closed(btx))
print("closed Circ leaves {box E(x)} outside the circle:", gap)

# T16 on test models: objects X=0, U=1; names x, t -> X ; u -> U.
VALUES = ("toutes", "inev_id", "inev_modal", "cont", "cont_miroir", "aucune")


def retains(value, cls):
    return {"toutes": True, "inev_id": cls != "cont", "cont": cls == "cont",
            "aucune": False, "inev_modal": False, "cont_miroir": False}[value]


nm = {"x": 0, "t": 0, "u": 1}
tested = {c: 0 for c in ("nec", "cont", "inevdep")}
subs = [frozenset(), frozenset({1}), frozenset({0}), frozenset({0, 1})]
for d0 in (frozenset({0}), frozenset({0, 1})):
    for d1 in subs:
        dom = [d0, d1]
        pairs = [[(a, b) for b in d for a in (0, 1) if a != b] for d in dom]
        for c0 in (frozenset(c) for r in range(len(pairs[0]) + 1) for c in itertools.combinations(pairs[0], r)):
            for c1 in (frozenset(c) for r in range(len(pairs[1]) + 1) for c in itertools.combinations(pairs[1], r)):
                inev = all(0 in d for d in dom)
                caused_somewhere = any((1, 0) in c for c in (c0, c1))
                cls = "cont" if not inev else ("nec" if not caused_somewhere else "inevdep")
                tested[cls] += 1
                true_parts = valuation(dom, c0, nm) & FULL
                caused_s = (1, 0) in c0
                for v in VALUES:
                    got = False
                    for M in MINIMAL:
                        if M & ~true_parts:
                            continue
                        if M & ONLYB and v != "inev_modal":
                            continue
                        if M & ONLYM and v != "cont_miroir":
                            continue
                        if ENT_ID[M] and not retains(v, cls):
                            continue
                        got = True
                        break
                    expected = caused_s or retains(v, cls) or (v == "inev_modal" and cls != "cont") or (v == "cont_miroir" and cls == "cont")
                    check(f"T16 {cls} {v}", got == expected)
print("minimal bases in pool:", len(MINIMAL), "test models per class:", tested)
check("T16: every class tested", all(tested.values()))
print("failures:", len(set(FAIL)))
sys.exit(1 if FAIL else 0)
```

### `check_tie.py` : effet du lien de D18 (vérificateur)

Retire le lien de D18 et compte, sous « aucune retenue » et la lecture étroite, les modèles d'essai où la chose n'a pas de cause et a pourtant une raison d'exister. Le résultat, 8 sur 8, montre que, sans le lien, « aucune retenue » prendrait l'extension de « toutes retenues ». Il lit `check_t16_miroir.py` dans le même dossier.

Bornes : 8 modèles d'essai sans cause, 2 situations.

Code de sortie : 0.

Ne couvre pas : il ne teste pas le lien lui-même, seulement son effet ; les limites de `check_t16_miroir.py`.

Résultat (`python3 -I check_tie.py`) :

```text
closed Circ leaves {box E(x)} outside the circle: True
uncaused test models: 8 with a reason anyway (no tie): 8
```

```python
"""Without the tie of D18, under 'aucune retenue' and reading (a), every existing thing has a reason."""
import sys
src = open("check_t16_miroir.py").read().split("# T16 on test models")[0]
ns = {"__name__": "lib"}
exec(compile(src, "lib", "exec"), ns)
MIN, ENT_ID, valuation, FULL = ns["MINIMAL"], ns["ENT_ID"], ns["valuation"], ns["FULL"]
import itertools
nm = {"x": 0, "t": 0, "u": 1}
bad = 0
total = 0
subs = [frozenset(), frozenset({1}), frozenset({0}), frozenset({0, 1})]
for d0 in (frozenset({0}), frozenset({0, 1})):
    for d1 in subs:
        dom = [d0, d1]
        tp = valuation(dom, frozenset(), nm) & FULL
        total += 1
        got = any(not (M & ~tp) and not ENT_ID[M] for M in MIN)
        if not got:
            bad += 1
print("uncaused test models:", total, "with a reason anyway (no tie):", total - bad)
sys.exit(0 if bad == 0 else 1)
```

### `check_closure.py` : clôtures de Circ (vérificateur)

Sur les parties de `check_t16_bases.py`, vérifie les verdicts des clôtures de Circ : par conséquence, `{□E(x)}` reste hors du cercle ; avec FE, le verdict dépend du nom employé (`{Cause(u, t), t = x}` circulaire, `{Cause(u, x)}` non) ; par un nom nouveau et sans FE, les verdicts de Circ′ sur toute base minimale testable.

Bornes : les bornes de `check_t16_bases.py`.

Code de sortie : 0.

Ne couvre pas : les limites de `check_t16_bases.py`.

Résultat (`python3 -I check_closure.py check_t16_bases.py`) :

```text
closed Circ leaves {box E(x)} outside the circle: True
with FE, {Cause(u,t), t=x} closed-circular: True
with FE, {Cause(u,x)} closed-circular: False
without FE, {box E(t), t=x} closed-circular: True
without FE, {box E(x)} closed-circular: False
fresh name, without FE: verdicts of Circ' on every testable minimal base: True
fresh name, with FE: {Cause(u,x)} closed-circular: True
```

```python
"""Closure variants of Circ, on the pool of check_t16_bases.py (argv[1])."""
import sys
ns = {"__name__": "lib"}
src = open(sys.argv[1]).read().split("# T16 on test models")[0]
exec(compile(src, "lib", "exec"), ns)
P, IDX, EX, MIN = ns["PARTS"], ns["IDX"], ns["EX"], ns["MINIMAL"]
circ, ENTF, ENTN = ns["circ"], ns["ENT_PART"], ns["ENT_PART_NOFE"]
fails = []


def bit(*parts):
    return sum(1 << IDX[p] for p in parts)


def closed(M, table, fresh):
    names = {n for i in range(EX) if M >> i & 1 for n in P[i][1:]}
    variants = [M]
    if fresh:
        variants = [M | bit(("I", n, "x")) for n in ("t", "u") if n not in names and n != "x"]
    for V in variants:
        for N in MIN:
            if circ(N) and all(table[i][V] for i in range(EX) if N >> i & 1):
                return True
    return False


def kind(M):
    return [P[i][0] for i in range(EX) if M >> i & 1 and P[i][0] != "I"][0]


def show(label, value, expected):
    print(label, value)
    if value != expected:
        fails.append(label)


m1, m2 = bit(("C", "u", "t"), ("I", "t", "x")), bit(("C", "u", "x"))
bx, btx = bit(("B", "x")), bit(("B", "t"), ("I", "t", "x"))
show("with FE, {Cause(u,t), t=x} closed-circular:", closed(m1, ENTF, False), True)
show("with FE, {Cause(u,x)} closed-circular:", closed(m2, ENTF, False), False)
show("without FE, {box E(t), t=x} closed-circular:", closed(btx, ENTN, False), True)
show("without FE, {box E(x)} closed-circular:", closed(bx, ENTN, False), False)
fresh_nofe = all(closed(M, ENTN, True) == (kind(M) in ("E", "B")) for M in MIN
                 if any(n not in {q for i in range(EX) if M >> i & 1 for q in P[i][1:]} for n in ("t", "u")))
show("fresh name, without FE: verdicts of Circ' on every testable minimal base:", fresh_nofe, True)
show("fresh name, with FE: {Cause(u,x)} closed-circular:", closed(m2, ENTF, True), True)
sys.exit(1 if fails else 0)
```

### `extra.py` : lecture (b_∃) (vérificateur)

Vérifie le témoin de T19 (b) pour (b_∃) (Pr, (b), (b_∃) et `∃x (x = x)` vrais, Pc fausse, sous « aucune retenue ») et que le témoin du brouillon ne vérifie pas (b_∃) ; compte, sur les tailles de `check_m1.py` hors (3, 3), les inévitables dépendants, l'antécédent de L7 sous « aucune retenue », et les modèles où Pr, (b_∃) et `∃x (x = x)` sont vrais ensemble sous « aucune retenue ».

Bornes : tailles (1, 1) à (2, 3), objets × situations.

Code de sortie : 0.

Ne couvre pas : la taille (3, 3) ; les modèles infinis.

Résultat (`python3 -I extra.py check_m1.py`) :

```text
T19(b) witness Pr,(b_exists),E1, not Pc: True
draft witness satisfies (b_exists): False
{'inev_dep': 57723, 'l7_aucune': 3657, 'pr_b_exists_aucune': 276}
```

```python
import sys
src_path = sys.argv[1]
src = open(src_path).read()
part1 = src.split("# Part 1.")[0]
gen = src.split("# Part 2. Bounded exhaustive checks.")[1].split("counts = ")[0]
ns = {}
exec(compile(part1, "part1", "exec"), ns)
exec(compile(gen, "gen", "exec"), ns)
Model, all_models = ns["Model"], ns["all_models"]
fails = []

def b_exists(m):
    existing = {o for s in m.S for o in m.D[s]}
    for s in m.S:
        if not m._acyclic(m.objects, [(x, y) for (y, x) in m.C[s]]):
            return False
        for v in existing:
            out = m.causes_of(v, s)
            if out and not (out & existing):
                return False
    return True

w = Model(["x", "a"], [{"x"}, {"a"}], [{("a", "x")}, {("x", "a")}])
ok = (w.is_socle_model() and w.Pr("aucune") and not w.Pc() and w.b() and b_exists(w) and w.E1())
print("T19(b) witness Pr,(b_exists),E1, not Pc:", ok)
old = Model(["x", "a"], [{"x"}], [{("a", "x")}])
print("draft witness satisfies (b_exists):", b_exists(old))
if not ok: fails.append("witness")

c = dict(inev_dep=0, l7_aucune=0, pr_b_exists_aucune=0)
for n_obj, n_sit in ((1,1),(2,1),(3,1),(1,2),(2,2),(3,2),(1,3),(2,3)):
    for m in all_models(n_obj, n_sit):
        for s in m.S:
            for x in m.D[s]:
                if m.inev(x) and not m.nec(x):
                    c["inev_dep"] += 1
        if m.E1() and m.Prc("aucune", only=0) and m.Pc(only=0) and m.b(only=0):
            c["l7_aucune"] += 1
        if m.E1() and m.Pr("aucune") and b_exists(m):
            c["pr_b_exists_aucune"] += 1
print(c)
sys.exit(1 if fails else 0)
```
