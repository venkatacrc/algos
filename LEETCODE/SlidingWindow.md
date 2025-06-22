# Sliding Window - LeetCode Problems

The **Sliding Window** technique is used for solving array/string problems involving **contiguous subarrays or substrings** efficiently. This markdown categorizes top LeetCode problems that use this technique and indicates whether they’ve been asked in **Meta** interviews.

---

## 🟢 Easy

| # | Problem | Link | Asked at Meta |
|---|---------|------|---------------|
| 1 | Maximum Average Subarray I | [LeetCode 643](https://leetcode.com/problems/maximum-average-subarray-i/) | ✅ |
| 2 | Find Pivot Index (prefix + window) | [LeetCode 724](https://leetcode.com/problems/find-pivot-index/) | ✅ |
| 3 | Binary Subarrays With Sum (can simplify to window) | [LeetCode 930](https://leetcode.com/problems/binary-subarrays-with-sum/) | ❌ |

---

## 🟡 Medium

| # | Problem | Link | Asked at Meta |
|---|---------|------|---------------|
| 1 | Longest Substring Without Repeating Characters | [LeetCode 3](https://leetcode.com/problems/longest-substring-without-repeating-characters/) | ✅ |
| 2 | Minimum Size Subarray Sum | [LeetCode 209](https://leetcode.com/problems/minimum-size-subarray-sum/) | ✅ |
| 3 | Permutation in String | [LeetCode 567](https://leetcode.com/problems/permutation-in-string/) | ✅ |
| 4 | Longest Repeating Character Replacement | [LeetCode 424](https://leetcode.com/problems/longest-repeating-character-replacement/) | ✅ |
| 5 | Fruits into Baskets | [LeetCode 904](https://leetcode.com/problems/fruit-into-baskets/) | ✅ |
| 6 | Max Consecutive Ones III | [LeetCode 1004](https://leetcode.com/problems/max-consecutive-ones-iii/) | ✅ |
| 7 | Subarray Product Less Than K | [LeetCode 713](https://leetcode.com/problems/subarray-product-less-than-k/) | ✅ |

---

## 🔴 Hard

| # | Problem | Link | Asked at Meta |
|---|---------|------|---------------|
| 1 | Sliding Window Maximum | [LeetCode 239](https://leetcode.com/problems/sliding-window-maximum/) | ✅ |
| 2 | Minimum Window Substring | [LeetCode 76](https://leetcode.com/problems/minimum-window-substring/) | ✅ |
| 3 | Longest Substring with At Most K Distinct Characters | [LeetCode 340](https://leetcode.com/problems/longest-substring-with-at-most-k-distinct-characters/) | ✅ |
| 4 | Count Number of Nice Subarrays | [LeetCode 1248](https://leetcode.com/problems/count-number-of-nice-subarrays/) | ✅ |

---

## ✅ Notes on Meta Asked Problems

- Meta consistently asks questions that combine **Sliding Window + HashMap/Set** (e.g., LeetCode 3, 76).
- Understand how to handle **dynamic window sizes** based on constraints like character frequency or distinct counts.
- Practice window-shrinking conditions carefully — they’re key to optimal solutions.

---

## 👨‍💻 Sliding Window - Template

```python
def sliding_window(s):
    left = 0
    window = defaultdict(int)
    
    for right in range(len(s)):
        window[s[right]] += 1
        
        while condition_to_shrink_window:
            window[s[left]] -= 1
            left += 1
        
        # Do something with window
