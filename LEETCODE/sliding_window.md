# 🚪 Sliding Window Problems on LeetCode

Sliding window is a powerful technique used to reduce the time complexity of problems involving linear sequences like arrays and strings. Below is a categorized list of problems that use sliding window patterns.

---

## 🟢 Easy

| Problem ID | Title | Type |
|------------|-------|------|
| [643](https://leetcode.com/problems/maximum-average-subarray-i/) | Maximum Average Subarray I | Fixed-size window |
| [1343](https://leetcode.com/problems/number-of-sub-arrays-of-size-k-and-average-greater-than-or-equal-to-threshold/) | Number of Sub-arrays of Size K and Average ≥ Threshold | Fixed-size window |
| [1461](https://leetcode.com/problems/check-if-a-string-contains-all-binary-codes-of-size-k/) | Check If a String Contains All Binary Codes of Size K | Fixed-size window |
| [438](https://leetcode.com/problems/find-all-anagrams-in-a-string/) | Find All Anagrams in a String | Variable-size window |
| [567](https://leetcode.com/problems/permutation-in-string/) | Permutation in String | Variable-size window |
| [1876](https://leetcode.com/problems/substrings-of-size-three-with-distinct-characters/) | Substrings of Size Three with Distinct Characters | Fixed-size window |

---

## 🟠 Medium

| Problem ID | Title | Type |
|------------|-------|------|
| [3](https://leetcode.com/problems/longest-substring-without-repeating-characters/) | Longest Substring Without Repeating Characters | Variable window (hashmap) |
| [76](https://leetcode.com/problems/minimum-window-substring/) | Minimum Window Substring | Variable window (hashmap) |
| [209](https://leetcode.com/problems/minimum-size-subarray-sum/) | Minimum Size Subarray Sum | Variable window (prefix sum) |
| [239](https://leetcode.com/problems/sliding-window-maximum/) | Sliding Window Maximum | Fixed-size window with deque |
| [904](https://leetcode.com/problems/fruit-into-baskets/) | Fruit Into Baskets | At most two unique items |
| [1004](https://leetcode.com/problems/max-consecutive-ones-iii/) | Max Consecutive Ones III | Flip k zeros |
| [713](https://leetcode.com/problems/subarray-product-less-than-k/) | Subarray Product Less Than K | Product-based window |
| [1248](https://leetcode.com/problems/count-number-of-nice-subarrays/) | Count Number of Nice Subarrays | K odd numbers window |
| [1456](https://leetcode.com/problems/maximum-number-of-vowels-in-a-substring-of-given-length/) | Max Vowels in a Substring of Given Length | Fixed-size window |
| [1658](https://leetcode.com/problems/minimum-operations-to-reduce-x-to-zero/) | Min Operations to Reduce X to Zero | Sliding sum window |
| [2090](https://leetcode.com/problems/k-radius-subarray-averages/) | K-Radius Subarray Averages | Prefix sum + sliding |

---

## 🔴 Hard

| Problem ID | Title | Type |
|------------|-------|------|
| [480](https://leetcode.com/problems/sliding-window-median/) | Sliding Window Median | Two heaps / TreeMap |
| [239](https://leetcode.com/problems/sliding-window-maximum/) | Sliding Window Maximum | Also hard with heap |

---

## 🧠 Tips for Sliding Window

- **Fixed-size window**: Use when the size of the window is constant (e.g., size `k`).
- **Variable-size window**: Useful when conditions are dynamic (e.g., distinct characters, sum ≥ target).
- **Data structures**: Use hashmaps, sets, deques, heaps depending on problem needs.

---

> ✅ Pro Tip: Practice both fixed and dynamic window problems to master this pattern. Sliding window is commonly tested in interviews due to its efficiency.

