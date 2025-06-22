# Graph Algorithms - LeetCode Problems

Graph problems involve **nodes and edges**, and solving them typically requires **DFS**, **BFS**, **Topological Sort**, **Union Find (DSU)**, or **Shortest Path (Dijkstra/Bellman-Ford)**. This markdown lists core graph problems grouped by difficulty and Meta interview frequency.

---

## 🟢 Easy

| # | Problem | Link | Asked at Meta |
|---|---------|------|---------------|
| 1 | Flood Fill | [LeetCode 733](https://leetcode.com/problems/flood-fill/) | ✅ |
| 2 | Find Center of Star Graph | [LeetCode 1791](https://leetcode.com/problems/find-center-of-star-graph/) | ❌ |
| 3 | Find if Path Exists in Graph | [LeetCode 1971](https://leetcode.com/problems/find-if-path-exists-in-graph/) | ✅ |

---

## 🟡 Medium

| # | Problem | Link | Asked at Meta |
|---|---------|------|---------------|
| 1 | Number of Islands | [LeetCode 200](https://leetcode.com/problems/number-of-islands/) | ✅ |
| 2 | Clone Graph | [LeetCode 133](https://leetcode.com/problems/clone-graph/) | ✅ |
| 3 | Course Schedule | [LeetCode 207](https://leetcode.com/problems/course-schedule/) | ✅ |
| 4 | Course Schedule II | [LeetCode 210](https://leetcode.com/problems/course-schedule-ii/) | ✅ |
| 5 | Pacific Atlantic Water Flow | [LeetCode 417](https://leetcode.com/problems/pacific-atlantic-water-flow/) | ✅ |
| 6 | Graph Valid Tree | [LeetCode 261](https://leetcode.com/problems/graph-valid-tree/) | ✅ |
| 7 | Surrounded Regions | [LeetCode 130](https://leetcode.com/problems/surrounded-regions/) | ✅ |
| 8 | Rotting Oranges | [LeetCode 994](https://leetcode.com/problems/rotting-oranges/) | ✅ |
| 9 | Minimum Genetic Mutation | [LeetCode 433](https://leetcode.com/problems/minimum-genetic-mutation/) | ✅ |
| 10 | Network Delay Time | [LeetCode 743](https://leetcode.com/problems/network-delay-time/) | ✅ |

---

## 🔴 Hard

| # | Problem | Link | Asked at Meta |
|---|---------|------|---------------|
| 1 | Word Ladder | [LeetCode 127](https://leetcode.com/problems/word-ladder/) | ✅ |
| 2 | Word Ladder II | [LeetCode 126](https://leetcode.com/problems/word-ladder-ii/) | ✅ |
| 3 | Alien Dictionary | [LeetCode 269](https://leetcode.com/problems/alien-dictionary/) | ✅ |
| 4 | Redundant Connection | [LeetCode 684](https://leetcode.com/problems/redundant-connection/) | ✅ |
| 5 | Redundant Connection II | [LeetCode 685](https://leetcode.com/problems/redundant-connection-ii/) | ✅ |
| 6 | Reconstruct Itinerary | [LeetCode 332](https://leetcode.com/problems/reconstruct-itinerary/) | ✅ |
| 7 | Critical Connections in a Network | [LeetCode 1192](https://leetcode.com/problems/critical-connections-in-a-network/) | ✅ |
| 8 | Minimum Cost to Connect All Points | [LeetCode 1584](https://leetcode.com/problems/minimum-cost-to-connect-all-points/) | ✅ |
| 9 | Parallel Courses | [LeetCode 1136](https://leetcode.com/problems/parallel-courses/) | ✅ |

---

## ✅ Notes on Meta Asked Problems

- Meta often asks **DFS/BFS traversal** in grid or custom graph formats.
- **Topological sort**, **Union Find**, and **Shortest Path** variants like Dijkstra are essential.
- **Course Schedule**, **Clone Graph**, and **Reconstruct Itinerary** are common favorites.

---

## 👨‍💻 Graph Traversal - DFS Template

```python
def dfs(node, visited, graph):
    if node in visited:
        return
    visited.add(node)
    for neighbor in graph[node]:
        dfs(neighbor, visited, graph)
```

## 👨‍💻 Graph Traversal - BFS Template

```python
from collections import deque

def bfs(start, graph):
    visited = set()
    queue = deque([start])
    while queue:
        node = queue.popleft()
        if node in visited:
            continue
        visited.add(node)
        for neighbor in graph[node]:
            queue.append(neighbor)
```

## 👨‍💻 Union Find (Disjoint Set) Template

```python
def find(x):
    if parent[x] != x:
        parent[x] = find(parent[x])
    return parent[x]

def union(x, y):
    parent[find(x)] = find(y)
```

## 👨‍💻 Dijkstra’s Algorithm Template

```python
import heapq

def dijkstra(start, graph):
    heap = [(0, start)]
    dist = {start: 0}
    while heap:
        d, node = heapq.heappop(heap)
        if d > dist[node]:
            continue
        for nei, wt in graph[node]:
            if nei not in dist or d + wt < dist[nei]:
                dist[nei] = d + wt
                heapq.heappush(heap, (dist[nei], nei))
```
