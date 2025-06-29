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

### LC 2265 Count Nodes Equal to Average of Subtree

```python
"""
Approach:
    DFS post Order traversal
"""

class Solution:
    def averageOfSubtree(self, root: TreeNode) -> int:
        ans = 0
        def dfs(root):
            nonlocal ans
            if not root:
                return 0, 0
            
            ls, ln = dfs(root.left)
            rs, rn = dfs(root.right)

            total_elems = 1 + ln + rn
            total_sum = root.val + ls + rs

            if total_sum // total_elems == root.val:
                ans += 1
                       
            return total_sum, total_elems
```

### LC 230. Kth Smallest Element in a BST

Recursive DFS solution
```python
class Solution:
    def kthSmallest(self, root: Optional[TreeNode], k: int) -> int:
        self.k = k
        self.result = None

        def dfs(node):
            if not node or self.result != None:
                return
            dfs(node.left)
            self.k -= 1
            if self.k == 0:
                self.result = node.val
                return
            dfs(node.right)
        dfs(root)
        return self.result
```
Iterative DFS solution
```python
class Solution:
    def kthSmallest(self, root: Optional[TreeNode], k: int) -> int:
        stack = []

        self.k = k
        while True:
            while root:
                stack.append(root)
                root = root.left
            
            root = stack.pop()
            self.k -= 1
            if self.k == 0:
                return root.val
            
            root = root.right
```
Followup: If the BST is modified often (i.e., we can do insert and delete operations) and you need to find the kth smallest frequently, how would you optimize?
With subtree sizes:
- You can index into the BST in O(log n) to find the kth smallest
- When modifying the tree, you update the size field during insertion and deletion
### 📦 Summary
Feature	| Classic BST |	Augmented BST
Insert/Delete |	O(log n) (balanced) | O(log n)
kthSmallest (1-time) |	O(n) |	O(log n)
kthSmallest (frequent) | ❌ inefficient |	✅ efficient

```python
class TreeNode:
    def __init__(self, val):
        self.val = val
        self.left = None
        self.right = None
        self.size = 1  # number of nodes in the subtree rooted at this node

class AugmentedBST:
    def __init__(self):
        self.root = None

    def insert(self, val):
        def insert_node(node, val):
            if not node:
                return TreeNode(val)
            if val < node.val:
                node.left = insert_node(node.left, val)
            else:
                node.right = insert_node(node.right, val)
            node.size = 1 + (node.left.size if node.left else 0) + (node.right.size if node.right else 0)
            return node

        self.root = insert_node(self.root, val)

    def delete(self, val):
        def delete_node(node, val):
            if not node:
                return None
            if val < node.val:
                node.left = delete_node(node.left, val)
            elif val > node.val:
                node.right = delete_node(node.right, val)
            else:
                if not node.left:
                    return node.right
                if not node.right:
                    return node.left
                # Replace node with its inorder successor
                succ = node.right
                while succ.left:
                    succ = succ.left
                node.val = succ.val
                node.right = delete_node(node.right, succ.val)

            node.size = 1 + (node.left.size if node.left else 0) + (node.right.size if node.right else 0)
            return node

        self.root = delete_node(self.root, val)

    def kthSmallest(self, k):
        def kth_node(node, k):
            if not node:
                return None
            left_size = node.left.size if node.left else 0
            if k <= left_size:
                return kth_node(node.left, k)
            elif k == left_size + 1:
                return node.val
            else:
                return kth_node(node.right, k - left_size - 1)

        return kth_node(self.root, k)


# Example usage:
bst = AugmentedBST()
bst.insert(5)
bst.insert(3)
bst.insert(6)
bst.insert(2)
bst.insert(4)
bst.insert(1)

print("3rd smallest:", bst.kthSmallest(3))  # Should print 3

bst.delete(3)
print("3rd smallest after deleting 3:", bst.kthSmallest(3))  # Should now print 4

```
