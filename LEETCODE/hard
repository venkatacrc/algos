Great — here’s the full structured summary for all **18 LeetCode problems** you listed:

---

### ✅ 1857. Largest Color Value in a Directed Graph

* **Category**: Graph, Topological Sort, Dynamic Programming
* **Approach**: Topological sort with cycle detection. Maintain a DP table `dp[node][color]` to track max count of each color.
* **Time Complexity**: `O(N + E)`
* **Space Complexity**: `O(N + 26 + E)`

```python
from collections import deque, defaultdict

def largestPathValue(colors: str, edges: List[List[int]]) -> int:
    n = len(colors)
    graph = defaultdict(list)
    indegree = [0] * n
    dp = [[0] * 26 for _ in range(n)]

    for u, v in edges:
        graph[u].append(v)
        indegree[v] += 1

    queue = deque(i for i in range(n) if indegree[i] == 0)
    visited = 0
    res = 0

    while queue:
        u = queue.popleft()
        visited += 1
        color_idx = ord(colors[u]) - ord('a')
        dp[u][color_idx] += 1
        res = max(res, dp[u][color_idx])

        for v in graph[u]:
            for i in range(26):
                dp[v][i] = max(dp[v][i], dp[u][i])
            indegree[v] -= 1
            if indegree[v] == 0:
                queue.append(v)

    return res if visited == n else -1
```

---

### ✅ 65. Valid Number

* **Category**: String Parsing, Finite State Machine
* **Approach**: Use a DFA or manually parse sections (integer/decimal/exp). Trim and validate characters.
* **Time Complexity**: `O(N)`
* **Space Complexity**: `O(1)`

```python
def isNumber(s: str) -> bool:
    try:
        float(s)
        return s.strip() not in ['inf', 'Infinity', '-inf', '+inf']
    except:
        return False
```

---

### ✅ 295. Find Median from Data Stream

* **Category**: Heap, Priority Queue
* **Approach**: Use a max-heap for the left half and min-heap for the right half.
* **Time Complexity**: `O(log N)` insert, `O(1)` find median
* **Space Complexity**: `O(N)`

```python
import heapq

class MedianFinder:
    def __init__(self):
        self.small = []  # max heap
        self.large = []  # min heap

    def addNum(self, num: int) -> None:
        heapq.heappush(self.small, -num)
        heapq.heappush(self.large, -heapq.heappop(self.small))
        if len(self.small) < len(self.large):
            heapq.heappush(self.small, -heapq.heappop(self.large))

    def findMedian(self) -> float:
        return -self.small[0] if len(self.small) > len(self.large) else (-self.small[0] + self.large[0]) / 2
```

---

### ✅ 301. Remove Invalid Parentheses

* **Category**: Backtracking, BFS
* **Approach**: BFS to generate valid strings with minimal removals, avoid revisiting.
* **Time Complexity**: `O(2^N)`
* **Space Complexity**: `O(N * 2^N)`

```python
from collections import deque

def removeInvalidParentheses(s: str) -> List[str]:
    def isValid(string):
        bal = 0
        for c in string:
            if c == '(': bal += 1
            elif c == ')': bal -= 1
            if bal < 0: return False
        return bal == 0

    level = {s}
    while True:
        valid = list(filter(isValid, level))
        if valid: return valid
        next_level = set()
        for item in level:
            for i in range(len(item)):
                if item[i] in "()":
                    next_level.add(item[:i] + item[i+1:])
        level = next_level
```

---

### ✅ 4. Median of Two Sorted Arrays

* **Category**: Binary Search, Divide & Conquer
* **Approach**: Binary search on the shorter array, partition to find the k-th smallest.
* **Time Complexity**: `O(log(min(m, n)))`
* **Space Complexity**: `O(1)`

```python
def findMedianSortedArrays(nums1: List[int], nums2: List[int]) -> float:
    A, B = nums1, nums2
    if len(A) > len(B): A, B = B, A
    total = len(A) + len(B)
    half = total // 2

    l, r = 0, len(A)
    while True:
        i = (l + r) // 2
        j = half - i
        Aleft = A[i - 1] if i > 0 else float('-inf')
        Aright = A[i] if i < len(A) else float('inf')
        Bleft = B[j - 1] if j > 0 else float('-inf')
        Bright = B[j] if j < len(B) else float('inf')

        if Aleft <= Bright and Bleft <= Aright:
            if total % 2:
                return min(Aright, Bright)
            return (max(Aleft, Bleft) + min(Aright, Bright)) / 2
        elif Aleft > Bright:
            r = i - 1
        else:
            l = i + 1
```

---

### ✅ 85. Maximal Rectangle

* **Category**: Stack, DP
* **Approach**: Treat each row as histogram, use largest rectangle in histogram.
* **Time Complexity**: `O(m * n)`
* **Space Complexity**: `O(n)`

```python
def maximalRectangle(matrix: List[List[str]]) -> int:
    if not matrix: return 0
    n = len(matrix[0])
    height = [0] * (n + 1)
    max_area = 0

    for row in matrix:
        for i in range(n):
            height[i] = height[i] + 1 if row[i] == '1' else 0

        stack = [-1]
        for i in range(n + 1):
            while height[i] < height[stack[-1]]:
                h = height[stack.pop()]
                w = i - stack[-1] - 1
                max_area = max(max_area, h * w)
            stack.append(i)

    return max_area
```

---

### ✅ 124. Binary Tree Maximum Path Sum

* **Category**: Tree, DFS
* **Approach**: DFS postorder traversal, keep global max sum.
* **Time Complexity**: `O(N)`
* **Space Complexity**: `O(H)`

```python
def maxPathSum(root: TreeNode) -> int:
    res = float('-inf')

    def dfs(node):
        nonlocal res
        if not node: return 0
        left = max(dfs(node.left), 0)
        right = max(dfs(node.right), 0)
        res = max(res, node.val + left + right)
        return node.val + max(left, right)

    dfs(root)
    return res
```

---

### ✅ 127. Word Ladder

* **Category**: BFS, Graph
* **Approach**: BFS with word transformation. Preprocess word patterns.
* **Time Complexity**: `O(N * M^2)`
* **Space Complexity**: `O(N * M)`

```python
from collections import deque, defaultdict

def ladderLength(beginWord: str, endWord: str, wordList: List[str]) -> int:
    if endWord not in wordList: return 0
    L = len(beginWord)
    all_combo = defaultdict(list)
    for word in wordList:
        for i in range(L):
            all_combo[word[:i] + "*" + word[i+1:]].append(word)

    queue = deque([(beginWord, 1)])
    visited = {beginWord}

    while queue:
        word, level = queue.popleft()
        for i in range(L):
            for nei in all_combo[word[:i] + "*" + word[i+1:]]:
                if nei == endWord: return level + 1
                if nei not in visited:
                    visited.add(nei)
                    queue.append((nei, level + 1))
    return 0
```

---

### ✅ 1216. Valid Palindrome III

* **Category**: DP, Palindromes
* **Approach**: DP(i, j): min deletions to make s\[i\:j+1] palindrome.
* **Time Complexity**: `O(N^2)`
* **Space Complexity**: `O(N^2)`

```python
def isValidPalindrome(s: str, k: int) -> bool:
    n = len(s)
    dp = [[0] * n for _ in range(n)]

    for length in range(2, n + 1):
        for i in range(n - length + 1):
            j = i + length - 1
            if s[i] == s[j]:
                dp[i][j] = dp[i+1][j-1]
            else:
                dp[i][j] = 1 + min(dp[i+1][j], dp[i][j-1])

    return dp[0][n-1] <= k
```

### 42. Trapping Rain Water

* **Category**: Two Pointers, Stack, DP
* **Approach**: Two pointers tracking maxLeft and maxRight.
* **Time Complexity**: `O(N)`
* **Space Complexity**: `O(1)`

```python
def trap(height: List[int]) -> int:
    left, right = 0, len(height) - 1
    left_max = right_max = 0
    res = 0
    while left < right:
        if height[left] < height[right]:
            if height[left] >= left_max:
                left_max = height[left]
            else:
                res += left_max - height[left]
            left += 1
        else:
            if height[right] >= right_max:
                right_max = height[right]
            else:
                res += right_max - height[right]
            right -= 1
    return res
```

### 68. Text Justification

* **Category**: String, Greedy
* **Approach**: Build lines with words, distribute spaces evenly.
* **Time Complexity**: `O(N)`
* **Space Complexity**: `O(1)`

```python
def fullJustify(words: List[str], maxWidth: int) -> List[str]:
    res = []
    i = 0
    while i < len(words):
        j, line_len = i, 0
        while j < len(words) and line_len + len(words[j]) + (j - i) <= maxWidth:
            line_len += len(words[j])
            j += 1

        spaces = maxWidth - line_len
        line = ''
        if j == len(words) or j - i == 1:
            line = ' '.join(words[i:j]).ljust(maxWidth)
        else:
            gap, extra = divmod(spaces, j - i - 1)
            for k in range(i, j - 1):
                line += words[k] + ' ' * (gap + (1 if k - i < extra else 0))
            line += words[j - 1]
        res.append(line)
        i = j
    return res
```

### 115. Distinct Subsequences

* **Category**: DP, String
* **Approach**: `dp[i][j]` = ways s\[0\:i] matches t\[0\:j].
* **Time Complexity**: `O(m * n)`
* **Space Complexity**: `O(m * n)`

```python
def numDistinct(s: str, t: str) -> int:
    m, n = len(s), len(t)
    dp = [[0] * (n + 1) for _ in range(m + 1)]
    for i in range(m + 1):
        dp[i][0] = 1
    for i in range(1, m + 1):
        for j in range(1, n + 1):
            dp[i][j] = dp[i - 1][j]
            if s[i - 1] == t[j - 1]:
                dp[i][j] += dp[i - 1][j - 1]
    return dp[m][n]
```

### 123. Best Time to Buy and Sell Stock III

* **Category**: DP
* **Approach**: Track profits for 2 transactions.
* **Time Complexity**: `O(N)`
* **Space Complexity**: `O(1)`

```python
def maxProfit(prices: List[int]) -> int:
    buy1 = buy2 = float('inf')
    profit1 = profit2 = 0
    for p in prices:
        buy1 = min(buy1, p)
        profit1 = max(profit1, p - buy1)
        buy2 = min(buy2, p - profit1)
        profit2 = max(profit2, p - buy2)
    return profit2
```

### 135. Candy

* **Category**: Greedy
* **Approach**: Two passes, left to right then right to left.
* **Time Complexity**: `O(N)`
* **Space Complexity**: `O(N)`

```python
def candy(ratings: List[int]) -> int:
    n = len(ratings)
    candies = [1] * n
    for i in range(1, n):
        if ratings[i] > ratings[i - 1]:
            candies[i] = candies[i - 1] + 1
    for i in range(n - 2, -1, -1):
        if ratings[i] > ratings[i + 1]:
            candies[i] = max(candies[i], candies[i + 1] + 1)
    return sum(candies)
```

### 239. Sliding Window Maximum

* **Category**: Heap, Monotonic Queue
* **Approach**: Use deque to keep max candidates.
* **Time Complexity**: `O(N)`
* **Space Complexity**: `O(k)`

```python
from collections import deque

def maxSlidingWindow(nums: List[int], k: int) -> List[int]:
    q = deque()
    res = []
    for i, n in enumerate(nums):
        while q and nums[q[-1]] < n:
            q.pop()
        q.append(i)
        if q[0] == i - k:
            q.popleft()
        if i >= k - 1:
            res.append(nums[q[0]])
    return res
```

### 282. Expression Add Operators

* **Category**: Backtracking, Recursion
* **Approach**: Try all partitions and insert ops, track evaluated result.
* **Time Complexity**: `O(4^N)`
* **Space Complexity**: `O(N)`

```python
def addOperators(num: str, target: int) -> List[str]:
    res = []
    def dfs(index, path, value, prev):
        if index == len(num) and value == target:
            res.append(path)
            return
        for i in range(index + 1, len(num) + 1):
            tmp = num[index:i]
            if len(tmp) > 1 and tmp[0] == '0': continue
            n = int(tmp)
            if index == 0:
                dfs(i, tmp, n, n)
            else:
                dfs(i, path + '+' + tmp, value + n, n)
                dfs(i, path + '-' + tmp, value - n, -n)
                dfs(i, path + '*' + tmp, value - prev + prev * n, prev * n)
    dfs(0, '', 0, 0)
    return res
```

### 778. Swim in Rising Water

* **Category**: Binary Search, Dijkstra
* **Approach**: Dijkstra's algorithm with min heap to track min time.
* **Time Complexity**: `O(N^2 log N)`
* **Space Complexity**: `O(N^2)`

```python
import heapq

def swimInWater(grid: List[List[int]]) -> int:
    N = len(grid)
    visited = set()
    heap = [(grid[0][0], 0, 0)]
    directions = [(0, 1), (1, 0), (-1, 0), (0, -1)]

    while heap:
        time, x, y = heapq.heappop(heap)
        if (x, y) == (N - 1, N - 1): return time
        if (x, y) in visited: continue
        visited.add((x, y))
        for dx, dy in directions:
            nx, ny = x + dx, y + dy
            if 0 <= nx < N and 0 <= ny < N:
                heapq.heappush(heap, (max(time, grid[nx][ny]), nx, ny))
```

### 1931. Painting a Grid With Three Different Colors

* **Category**: DP, Bitmask
* **Approach**: Precompute valid rows, DP with state compression.
* **Time Complexity**: `O(n * m * 3^m)`
* **Space Complexity**: `O(m * 3^m)`

```python
MOD = 10**9 + 7

def colorTheGrid(m: int, n: int) -> int:
    from itertools import product

    def valid(row):
        return all(row[i] != row[i+1] for i in range(len(row)-1))

    rows = [r for r in product(range(3), repeat=m) if valid(r)]
    adj = {r: [] for r in rows}
    for r1 in rows:
        for r2 in rows:
            if all(a != b for a, b in zip(r1, r2)):
                adj[r1].append(r2)

    dp = {r: 1 for r in rows}
    for _ in range(n - 1):
        dp2 = {}
        for r1 in rows:
            dp2[r1] = sum(dp[r2] for r2 in adj[r1]) % MOD
        dp = dp2

    return sum(dp.values()) % MOD
```


