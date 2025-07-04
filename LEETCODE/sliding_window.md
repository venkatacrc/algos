# 🚪 Sliding Window Problems on LeetCode

Sliding window is a powerful technique used to reduce the time complexity of problems involving linear sequences like arrays and strings. Below is a categorized list of problems that use sliding window patterns.

---

## 🟢 Easy

| Problem ID | Title | Type |
|------------|-------|------|
| [1343](https://leetcode.com/problems/number-of-sub-arrays-of-size-k-and-average-greater-than-or-equal-to-threshold/) | Number of Sub-arrays of Size K and Average ≥ Threshold | Fixed-size window |
| [1461](https://leetcode.com/problems/check-if-a-string-contains-all-binary-codes-of-size-k/) | Check If a String Contains All Binary Codes of Size K | Fixed-size window |
| [438](https://leetcode.com/problems/find-all-anagrams-in-a-string/) | Find All Anagrams in a String | Variable-size window |
| [567](https://leetcode.com/problems/permutation-in-string/) | Permutation in String | Variable-size window |
| [1876](https://leetcode.com/problems/substrings-of-size-three-with-distinct-characters/) | Substrings of Size Three with Distinct Characters | Fixed-size window |


| # | Problem | Link | Asked at Meta |
|---|---------|------|---------------|
| 1 | Maximum Average Subarray I | [LeetCode 643](https://leetcode.com/problems/maximum-average-subarray-i/) | ✅ |
| 2 | Find Pivot Index (prefix + window) | [LeetCode 724](https://leetcode.com/problems/find-pivot-index/) | ✅ |
| 3 | Binary Subarrays With Sum (can simplify to window) | [LeetCode 930](https://leetcode.com/problems/binary-subarrays-with-sum/) | ❌ |

---

## 🟠 Medium

| Problem ID | Title | Type |
|------------|-------|------|
| [76](https://leetcode.com/problems/minimum-window-substring/) | Minimum Window Substring | Variable window (hashmap) |
| [239](https://leetcode.com/problems/sliding-window-maximum/) | Sliding Window Maximum | Fixed-size window with deque |
| [1248](https://leetcode.com/problems/count-number-of-nice-subarrays/) | Count Number of Nice Subarrays | K odd numbers window |
| [1456](https://leetcode.com/problems/maximum-number-of-vowels-in-a-substring-of-given-length/) | Max Vowels in a Substring of Given Length | Fixed-size window |
| [1658](https://leetcode.com/problems/minimum-operations-to-reduce-x-to-zero/) | Min Operations to Reduce X to Zero | Sliding sum window |
| [2090](https://leetcode.com/problems/k-radius-subarray-averages/) | K-Radius Subarray Averages | Prefix sum + sliding |

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

| Problem ID | Title | Type |
|------------|-------|------|
| [480](https://leetcode.com/problems/sliding-window-median/) | Sliding Window Median | Two heaps / TreeMap |
| [239](https://leetcode.com/problems/sliding-window-maximum/) | Sliding Window Maximum | Also hard with heap |

| # | Problem | Link | Asked at Meta |
|---|---------|------|---------------|
| 1 | Sliding Window Maximum | [LeetCode 239](https://leetcode.com/problems/sliding-window-maximum/) | ✅ |
| 2 | Minimum Window Substring | [LeetCode 76](https://leetcode.com/problems/minimum-window-substring/) | ✅ |
| 3 | Longest Substring with At Most K Distinct Characters | [LeetCode 340](https://leetcode.com/problems/longest-substring-with-at-most-k-distinct-characters/) | ✅ |
| 4 | Count Number of Nice Subarrays | [LeetCode 1248](https://leetcode.com/problems/count-number-of-nice-subarrays/) | ✅ |
---

## 🧠 Tips for Sliding Window

- **Fixed-size window**: Use when the size of the window is constant (e.g., size `k`).
- **Variable-size window**: Useful when conditions are dynamic (e.g., distinct characters, sum ≥ target).
- **Data structures**: Use hashmaps, sets, deques, heaps depending on problem needs.

---

> ✅ Pro Tip: Practice both fixed and dynamic window problems to master this pattern. Sliding window is commonly tested in interviews due to its efficiency.

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
```
