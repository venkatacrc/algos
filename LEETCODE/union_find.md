# Union-Find (Disjoint Set Union) Variations

This document provides implementations of four Union-Find (Disjoint Set Union) algorithms, each with its respective time and space complexity.

---

## 1. UFQuickFind

```python
class UFQuickFind:
    def __init__(self, n):
        self.id = [i for i in range(n)]

    def find(self, p):
        return self.id[p]

    def connected(self, p, q):
        return self.id[p] == self.id[q]

    def union(self, p, q):
        a = self.id[p]
        b = self.id[q]
        for i, v in enumerate(self.id):
            if v == a:
                self.id[i] = b
```

**Time Complexity:**
- `find(p)`: O(1)
- `union(p, q)`: O(n)
- `connected(p, q)`: O(1)

**Space Complexity:** O(n)

---

## 2. UFQuickUnion

```python
class UFQuickUnion:
    def __init__(self, n):
        self.id = [i for i in range(n)]

    def find(self, p):
        while p != self.id[p]:
            p = self.id[p]
        return p

    def connected(self, p, q):
        return self.find(p) == self.find(q)

    def union(self, p, q):
        self.id[self.find(p)] = self.find(q)
```

**Time Complexity:**
- `find(p)`: O(h)
- `union(p, q)`: O(h)
- `connected(p, q)`: O(h)

**Space Complexity:** O(n)

---

## 3. UFWeightedQuickUnion

```python
class UFWeightedQuickUnion:
    def __init__(self, n):
        self.id = [i for i in range(n)]
        self.size = [1] * n

    def find(self, p):
        while p != self.id[p]:
            p = self.id[p]
        return p

    def connected(self, p, q):
        return self.find(p) == self.find(q)

    def union(self, p, q):
        rootP = self.find(p)
        rootQ = self.find(q)
        if rootP == rootQ:
            return
        if self.size[rootP] > self.size[rootQ]:
            self.id[rootQ] = rootP
            self.size[rootP] += self.size[rootQ]
        else:
            self.id[rootP] = rootQ
            self.size[rootQ] += self.size[rootP]
```

**Time Complexity:**
- `find(p)`: O(log n)
- `union(p, q)`: O(log n)
- `connected(p, q)`: O(log n)

**Space Complexity:** O(n)

---

## 4. UFWQUwithPathCompression

```python
class UFWQUwithPathCompression:
    def __init__(self, n):
        self.id = [i for i in range(n)]
        self.size = [1] * n

    def find(self, p):
        while p != self.id[p]:
            self.id[p] = self.id[self.id[p]]  # Path compression
            p = self.id[p]
        return p

    def connected(self, p, q):
        return self.find(p) == self.find(q)

    def union(self, p, q):
        rootP = self.find(p)
        rootQ = self.find(q)
        if rootP == rootQ:
            return
        if self.size[rootP] > self.size[rootQ]:
            self.id[rootQ] = rootP
            self.size[rootP] += self.size[rootQ]
        else:
            self.id[rootP] = rootQ
            self.size[rootQ] += self.size[rootP]
```

**Time Complexity:**
- `find(p)`: O(\u03b1(n))
- `union(p, q)`: O(\u03b1(n))
- `connected(p, q)`: O(\u03b1(n))

**Space Complexity:** O(n)

> \u03b1(n) is the inverse Ackermann function, which grows extremely slowly and is considered constant for practical purposes.

### 🔁 Basic Union-Find Applications
```text
547. Number of Provinces
261. Graph Valid Tree
684. Redundant Connection
685. Redundant Connection II
1319. Number of Operations to Make Network Connected
990. Satisfiability of Equality Equations
```
### 🌐 Grid Problems with Union-Find
```text
200. Number of Islands (alternative to DFS/BFS)
305. Number of Islands II
399. Evaluate Division (can be solved with Union Find with weights)
839. Similar String Groups
```
### 👥 Account & People Grouping
```text
721. Accounts Merge
1202. Smallest String With Swaps
1258. Synonymous Sentences
```
### 🧩 Advanced or Custom Union-Find Variants
```text
928. Minimize Malware Spread II
1135. Connecting Cities With Minimum Cost (Kruskal's with DSU)
1584. Min Cost to Connect All Points (MST with Kruskal + Union Find)
1168. Optimize Water Distribution in a Village
```
### 🧠 Conceptual or Mathematical Problems
```text
1722. Minimize Hamming Distance After Swap Operations
924. Minimize Malware Spread
959. Regions Cut By Slashes
```


### 🟢 Easy
```text
These are great for building intuition around disjoint sets and connectivity.
547. Number of Provinces
261. Graph Valid Tree
990. Satisfiability of Equality Equations
```
### 🟡 Medium
```text
These are standard problems where Union Find is the core or optimal technique.
684. Redundant Connection
1319. Number of Operations to Make Network Connected
721. Accounts Merge
839. Similar String Groups
305. Number of Islands II
1202. Smallest String With Swaps
1258. Synonymous Sentences
1722. Minimize Hamming Distance After Swap Operations
924. Minimize Malware Spread
```
### 🔴 Hard
```text
These require either advanced Union Find (e.g., with path compression and ranking), Kruskal’s algorithm, or extra bookkeeping.
685. Redundant Connection II
399. Evaluate Division (with weighted Union Find)
959. Regions Cut By Slashes
928. Minimize Malware Spread II
1135. Connecting Cities With Minimum Cost (Kruskal + DSU)
1584. Min Cost to Connect All Points (MST with Union Find)
1168. Optimize Water Distribution in a Village
```
