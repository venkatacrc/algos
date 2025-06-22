# Backtracking - LeetCode Problems

**Backtracking** is a depth-first search-based technique used for solving problems involving **combinatorics, permutations, subsets, partitions, and constraint satisfaction**. Below is a curated list of Backtracking problems on LeetCode organized by difficulty and Meta interview frequency.

---

## 🟢 Easy

| # | Problem | Link | Asked at Meta |
|---|---------|------|---------------|
| 1 | Subsets | [LeetCode 78](https://leetcode.com/problems/subsets/) | ✅ |
| 2 | Letter Case Permutation | [LeetCode 784](https://leetcode.com/problems/letter-case-permutation/) | ✅ |
| 3 | Binary Watch | [LeetCode 401](https://leetcode.com/problems/binary-watch/) | ❌ |

---

## 🟡 Medium

| # | Problem | Link | Asked at Meta |
|---|---------|------|---------------|
| 1 | Permutations | [LeetCode 46](https://leetcode.com/problems/permutations/) | ✅ |
| 2 | Combination Sum | [LeetCode 39](https://leetcode.com/problems/combination-sum/) | ✅ |
| 3 | Word Search | [LeetCode 79](https://leetcode.com/problems/word-search/) | ✅ |
| 4 | Palindrome Partitioning | [LeetCode 131](https://leetcode.com/problems/palindrome-partitioning/) | ✅ |
| 5 | Generate Parentheses | [LeetCode 22](https://leetcode.com/problems/generate-parentheses/) | ✅ |
| 6 | Combinations | [LeetCode 77](https://leetcode.com/problems/combinations/) | ✅ |
| 7 | Combination Sum II | [LeetCode 40](https://leetcode.com/problems/combination-sum-ii/) | ✅ |
| 8 | Subsets II | [LeetCode 90](https://leetcode.com/problems/subsets-ii/) | ✅ |

---

## 🔴 Hard

| # | Problem | Link | Asked at Meta |
|---|---------|------|---------------|
| 1 | N-Queens | [LeetCode 51](https://leetcode.com/problems/n-queens/) | ✅ |
| 2 | N-Queens II | [LeetCode 52](https://leetcode.com/problems/n-queens-ii/) | ✅ |
| 3 | Sudoku Solver | [LeetCode 37](https://leetcode.com/problems/sudoku-solver/) | ✅ |
| 4 | Word Search II | [LeetCode 212](https://leetcode.com/problems/word-search-ii/) | ✅ |
| 5 | Restore IP Addresses | [LeetCode 93](https://leetcode.com/problems/restore-ip-addresses/) | ✅ |

---

## ✅ Notes on Meta Asked Problems

- Meta frequently asks **classic combinatorics problems** like permutations, combinations, and subset generation.
- **Board-style backtracking** (e.g., Word Search, N-Queens, Sudoku) also appear frequently.
- Clean recursion, pruning, and path tracking are key to optimizing solutions.

---

## 👨‍💻 Backtracking - Template

```python
def backtrack(path, options):
    if base_case:
        result.append(path[:])
        return
    for i in range(len(options)):
        # choose
        path.append(options[i])
        # explore
        backtrack(path, options[:i] + options[i+1:])
        # un-choose
        path.pop()
