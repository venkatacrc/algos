# Matrix Operations - LeetCode Problems

Matrix-based problems often involve **grid traversal**, **manipulation**, and **simulation**. Techniques include **in-place operations**, **DFS/BFS**, **dynamic programming**, and **prefix sums**. Below is a categorized list of key LeetCode matrix problems with a Meta interview tag.

---

## 🟢 Easy

| # | Problem | Link | Asked at Meta |
|---|---------|------|---------------|
| 1 | Transpose Matrix | [LeetCode 867](https://leetcode.com/problems/transpose-matrix/) | ❌ |
| 2 | Matrix Diagonal Sum | [LeetCode 1572](https://leetcode.com/problems/matrix-diagonal-sum/) | ❌ |
| 3 | Reshape the Matrix | [LeetCode 566](https://leetcode.com/problems/reshape-the-matrix/) | ❌ |
| 4 | Set Matrix Zeroes | [LeetCode 73](https://leetcode.com/problems/set-matrix-zeroes/) | ✅ |
| 5 | Spiral Matrix | [LeetCode 54](https://leetcode.com/problems/spiral-matrix/) | ✅ |

---

## 🟡 Medium

| # | Problem | Link | Asked at Meta |
|---|---------|------|---------------|
| 1 | Rotate Image | [LeetCode 48](https://leetcode.com/problems/rotate-image/) | ✅ |
| 2 | Word Search | [LeetCode 79](https://leetcode.com/problems/word-search/) | ✅ |
| 3 | Number of Islands | [LeetCode 200](https://leetcode.com/problems/number-of-islands/) | ✅ |
| 4 | Flood Fill | [LeetCode 733](https://leetcode.com/problems/flood-fill/) | ✅ |
| 5 | Search a 2D Matrix | [LeetCode 74](https://leetcode.com/problems/search-a-2d-matrix/) | ✅ |
| 6 | Game of Life | [LeetCode 289](https://leetcode.com/problems/game-of-life/) | ✅ |
| 7 | Pacific Atlantic Water Flow | [LeetCode 417](https://leetcode.com/problems/pacific-atlantic-water-flow/) | ✅ |
| 8 | Surrounded Regions | [LeetCode 130](https://leetcode.com/problems/surrounded-regions/) | ✅ |

---

## 🔴 Hard

| # | Problem | Link | Asked at Meta |
|---|---------|------|---------------|
| 1 | Word Search II | [LeetCode 212](https://leetcode.com/problems/word-search-ii/) | ✅ |
| 2 | Maximal Rectangle | [LeetCode 85](https://leetcode.com/problems/maximal-rectangle/) | ✅ |
| 3 | Sliding Puzzle | [LeetCode 773](https://leetcode.com/problems/sliding-puzzle/) | ✅ |
| 4 | Shortest Path in a Grid with Obstacles Elimination | [LeetCode 1293](https://leetcode.com/problems/shortest-path-in-a-grid-with-obstacles-elimination/) | ✅ |
| 5 | Count Square Submatrices with All Ones | [LeetCode 1277](https://leetcode.com/problems/count-square-submatrices-with-all-ones/) | ✅ |

---

## ✅ Notes on Meta Asked Problems

- Meta frequently tests **grid simulation**, **in-place rotation**, and **flood-fill-style traversal**.
- **Rotate Image**, **Game of Life**, and **Word Search** are considered “classic Meta matrix problems.”
- Make sure to understand **DFS/BFS traversal**, **boundary checks**, and **modifying matrices in-place** safely.

---

## 👨‍💻 Matrix Traversal Template

```python
# 4-directional traversal
rows, cols = len(matrix), len(matrix[0])
for r in range(rows):
    for c in range(cols):
        for dr, dc in [(-1,0), (1,0), (0,-1), (0,1)]:
            nr, nc = r + dr, c + dc
            if 0 <= nr < rows and 0 <= nc < cols:
                # do something with matrix[nr][nc]
```
## 👨‍💻 In-place Matrix Rotation Template (90 degrees clockwise)

```python
# Transpose and then reverse each row
def rotate(matrix):
    n = len(matrix)
    for i in range(n):
        for j in range(i+1, n):
            matrix[i][j], matrix[j][i] = matrix[j][i], matrix[i][j]
    for row in matrix:
        row.reverse()
```

## 👨‍💻 Spiral Traversal Template

```python
def spiralOrder(matrix):
    res = []
    top, bottom = 0, len(matrix)
    left, right = 0, len(matrix[0])
    while top < bottom and left < right:
        res.extend(matrix[top][left:right])
        top += 1
        for i in range(top, bottom):
            res.append(matrix[i][right - 1])
        right -= 1
        if not (top < bottom and left < right): break
        res.extend(matrix[bottom - 1][left:right][::-1])
        bottom -= 1
        for i in range(bottom - 1, top - 1, -1):
            res.append(matrix[i][left])
        left += 1
    return res
```
