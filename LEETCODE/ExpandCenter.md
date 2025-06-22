# Expand Around Center - LeetCode Problems

This document lists LeetCode problems that can be solved using the **Expand Around Center** technique for palindrome-related problems. Problems are grouped by difficulty, and those asked in **Meta (Facebook)** interviews are marked accordingly.

---

## 🟢 Easy

| # | Problem | Link | Asked at Meta |
|---|---------|------|---------------|
| 1 | Palindrome Substring Count | [LeetCode 647](https://leetcode.com/problems/palindromic-substrings/) | ✅ |
| 2 | Valid Palindrome | [LeetCode 125](https://leetcode.com/problems/valid-palindrome/) | ✅ |
| 3 | Valid Palindrome II | [LeetCode 680](https://leetcode.com/problems/valid-palindrome-ii/) | ✅ |

---

## 🟡 Medium

| # | Problem | Link | Asked at Meta |
|---|---------|------|---------------|
| 1 | Longest Palindromic Substring | [LeetCode 5](https://leetcode.com/problems/longest-palindromic-substring/) | ✅ |
| 2 | Longest Substring Without Repeating Characters | [LeetCode 3](https://leetcode.com/problems/longest-substring-without-repeating-characters/) | ✅ |
| 3 | Palindromic Substrings II (with modifications) | Variant of [LeetCode 647](https://leetcode.com/problems/palindromic-substrings/) | ❌ |
| 4 | Count Substrings That Differ by One Character | [LeetCode 1638](https://leetcode.com/problems/count-substrings-that-differ-by-one-character/) | ❌ |

---

## 🔴 Hard

| # | Problem | Link | Asked at Meta |
|---|---------|------|---------------|
| 1 | Shortest Palindrome | [LeetCode 214](https://leetcode.com/problems/shortest-palindrome/) | ✅ |
| 2 | Palindrome Pairs | [LeetCode 336](https://leetcode.com/problems/palindrome-pairs/) | ✅ |
| 3 | Longest Palindromic Subsequence | [LeetCode 516](https://leetcode.com/problems/longest-palindromic-subsequence/) | ✅ |

---

## ✅ Notes on Meta Asked Problems

- Meta interviews frequently test **string manipulation**, and **palindrome-based questions** are popular.
- **LeetCode 5** and **LeetCode 647** are some of the **most asked** questions involving this technique.
- Know how to implement **expand from the center** logic and optimize with **memoization or DP** for subsequence/substrings problems.

---

## 👨‍💻 Expand Around Center - Template

```python
def expandAroundCenter(s: str) -> int:
    count = 0
    for center in range(len(s) * 2 - 1):
        left = center // 2
        right = left + center % 2
        while left >= 0 and right < len(s) and s[left] == s[right]:
            count += 1
            left -= 1
            right += 1
    return count
