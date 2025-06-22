# Two Pointers - LeetCode Problems

The **Two Pointers** technique is widely used for solving array and string problems efficiently. This markdown categorizes commonly asked Two Pointers problems and marks those asked in **Meta** interviews.

---

## 🟢 Easy

| # | Problem | Link | Asked at Meta |
|---|---------|------|---------------|
| 1 | Two Sum II - Input Array Is Sorted | [LeetCode 167](https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/) | ✅ |
| 2 | Remove Duplicates from Sorted Array | [LeetCode 26](https://leetcode.com/problems/remove-duplicates-from-sorted-array/) | ✅ |
| 3 | Squares of a Sorted Array | [LeetCode 977](https://leetcode.com/problems/squares-of-a-sorted-array/) | ✅ |
| 4 | Move Zeroes | [LeetCode 283](https://leetcode.com/problems/move-zeroes/) | ✅ |
| 5 | Reverse String | [LeetCode 344](https://leetcode.com/problems/reverse-string/) | ✅ |

---

## 🟡 Medium

| # | Problem | Link | Asked at Meta |
|---|---------|------|---------------|
| 1 | 3Sum | [LeetCode 15](https://leetcode.com/problems/3sum/) | ✅ |
| 2 | Container With Most Water | [LeetCode 11](https://leetcode.com/problems/container-with-most-water/) | ✅ |
| 3 | Partition Labels | [LeetCode 763](https://leetcode.com/problems/partition-labels/) | ✅ |
| 4 | Remove Duplicates from Sorted Array II | [LeetCode 80](https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/) | ✅ |
| 5 | Minimum Size Subarray Sum | [LeetCode 209](https://leetcode.com/problems/minimum-size-subarray-sum/) | ✅ |
| 6 | Longest Substring with At Most Two Distinct Characters | [LeetCode 159](https://leetcode.com/problems/longest-substring-with-at-most-two-distinct-characters/) | ✅ |

---

## 🔴 Hard

| # | Problem | Link | Asked at Meta |
|---|---------|------|---------------|
| 1 | Trapping Rain Water | [LeetCode 42](https://leetcode.com/problems/trapping-rain-water/) | ✅ |
| 2 | Sliding Window Maximum | [LeetCode 239](https://leetcode.com/problems/sliding-window-maximum/) | ✅ |
| 3 | Merge Sorted Array (with in-place strategy) | [LeetCode 88](https://leetcode.com/problems/merge-sorted-array/) | ✅ |
| 4 | Longest Substring with At Most K Distinct Characters | [LeetCode 340](https://leetcode.com/problems/longest-substring-with-at-most-k-distinct-characters/) | ✅ |

---

## ✅ Notes on Meta Asked Problems

- Meta interviewers often test array problems using **Two Pointers**, especially in conjunction with **sliding window** or **greedy** approaches.
- Problems like **3Sum**, **Container With Most Water**, and **Trapping Rain Water** are **frequent favorites**.

---

## 👨‍💻 Two Pointers - Template

```python
def two_pointers_template(arr):
    left, right = 0, len(arr) - 1
    while left < right:
        # Do some processing
        if condition:
            left += 1
        else:
            right -= 1
