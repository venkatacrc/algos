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

### Leetcode 247 – Strobogrammatic Number II
A strobogrammatic number is a number that looks the same when rotated 180 degrees (i.e., turned upside down).
Find all strobogrammatic numbers that are of length n.
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
```

### Leetcode 248 – Strobogrammatic Number III
Given two strings low and high, return the count of strobogrammatic numbers in the range [low, high] (inclusive).
```python
class Solution:
    def findStrobogrammatic(self, n: int) -> List[str]:
        pairs = [('0','0'), ('1', '1'), ('8', '8'), ('6', '9'), ('9', '6')]
        def buildStrings(n, final_len):
            if n == 0:
                return ['']
            if n == 1:
                return ['0', '1', '8']
            middle = buildStrings(n-2, final_len)
            return [
                a + m + b
                for m in middle
                for a, b in pairs
                if not (n == final_len and a == '0')
            ]
        return buildStrings(n,n)
```
```python
class Solution:
    def strobogrammaticInRange(self, low: str, high: str) -> int:
        pairs = [('0','0'), ('1','1'), ('6','9'), ('8','8'), ('9','6')]
        self.count = 0

        def is_valid(num):
            if len(num) > 1 and num[0] == '0':
                return False
            if len(num) < len(low) or len(num) > len(high):
                return False
            if len(num) == len(low) and num < low:
                return False
            if len(num) == len(high) and num > high:
                return False
            return True

        def build(n, total_len):
            if n == 0:
                return [""]
            if n == 1:
                return ["0", "1", "8"]

            middle = build(n - 2, total_len)
            return [
                a + m + b
                for m in middle
                for a, b in pairs
                if not (n == final_len and a == '0')
            ]

        for length in range(len(low), len(high) + 1):
            for num in build(length, length):
                if is_valid(num):
                    self.count += 1

        return self.count

# Example usage:
sol = Solution()
print(sol.strobogrammaticInRange("50", "100"))  # Output: 3 ("69", "88", "96")
```
