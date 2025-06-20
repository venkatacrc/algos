# 🔍 Binary Search Problems on LeetCode

Binary Search is a classic algorithmic technique used to efficiently find elements in sorted data. Below is a categorized list of Binary Search problems on LeetCode, grouped by **difficulty** and **variant** (standard, lower/upper bound, answer-based binary search, 2D binary search, etc.).

---

## 🟢 Easy

| Problem ID | Title | Variant |
|------------|-------|---------|
| [704](https://leetcode.com/problems/binary-search/) | Binary Search | Classic |
| [278](https://leetcode.com/problems/first-bad-version/) | First Bad Version | Lower Bound |
| [35](https://leetcode.com/problems/search-insert-position/) | Search Insert Position | Lower Bound |
| [852](https://leetcode.com/problems/peak-index-in-a-mountain-array/) | Peak Finding | Binary Search on array |
| [69](https://leetcode.com/problems/sqrtx/) | Sqrt(x) | Binary Search on answer |

---

## 🟠 Medium

| Problem ID | Title | Variant |
|------------|-------|---------|
| [33](https://leetcode.com/problems/search-in-rotated-sorted-array/) | Search in Rotated Sorted Array | Modified Binary Search |
| [34](https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/) | First and Last Position | Lower & Upper Bound |
| [81](https://leetcode.com/problems/search-in-rotated-sorted-array-ii/) | Rotated Array with Duplicates | Modified Binary Search |
| [162](https://leetcode.com/problems/find-peak-element/) | Peak Element | Binary Search on array |
| [875](https://leetcode.com/problems/koko-eating-bananas/) | Min Eating Speed | Binary Search on answer |
| [1011](https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/) | Capacity to Ship Packages | Binary Search on answer |
| [153](https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/) | Find Min in Rotated Array | Modified Binary Search |
| [154](https://leetcode.com/problems/find-minimum-in-rotated-sorted-array-ii/) | Rotated Array with Duplicates | Modified Binary Search |
| [300](https://leetcode.com/problems/longest-increasing-subsequence/) | Binary Search + DP | Patience Sorting |
| [1626](https://leetcode.com/problems/best-team-with-no-conflicts/) | Binary Search + Sorting | LIS Variant |

---

## 🔴 Hard

| Problem ID | Title | Variant |
|------------|-------|---------|
| [4](https://leetcode.com/problems/median-of-two-sorted-arrays/) | Median of Two Arrays | Binary Search on partitions |
| [410](https://leetcode.com/problems/split-array-largest-sum/) | Split Array | Binary Search on answer |
| [668](https://leetcode.com/problems/kth-smallest-number-in-multiplication-table/) | Kth Smallest | Binary Search on value |
| [378](https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix/) | Kth Smallest in Matrix | Binary Search on answer |
| [1231](https://leetcode.com/problems/divide-chocolate/) | Divide Chocolate | Binary Search on answer |
| [719](https://leetcode.com/problems/find-k-th-smallest-pair-distance/) | Kth Smallest Distance | Binary Search on distance |
| [1901](https://leetcode.com/problems/find-a-peak-element-ii/) | 2D Peak Finding | Binary Search on matrix |

---

## 🔄 Binary Search Variants

| Variant Type | Description | Example Problems |
|--------------|-------------|------------------|
| **Classic Binary Search** | Find element in sorted array | 704, 35 |
| **Lower / Upper Bound** | First/last occurrence | 34, 278 |
| **Binary Search on Answer** | Search space is the answer range | 875, 410, 1011 |
| **Rotated Arrays** | Sorted array with pivot | 33, 81, 153, 154 |
| **2D Matrix Binary Search** | Search in matrix / peak in grid | 378, 1901 |
| **Search by Predicate** | Binary search with condition | 4, 719, 1231 |

---

## 🧠 Tips

- Use binary search when the problem:
  - Involves **sorted** data.
  - Asks for **minimum/maximum feasible value** (use binary search on answer).
  - Has **monotonicity** (predicate functions).
- Binary search variants are common in **interval problems**, **rotated arrays**, and **greedy optimization**.

---

> ✅ Pro Tip: Practice all variants — especially binary search on answer space — as they are frequently tested in system design and algorithmic interviews.


### Leetcode 69: sqrt(x)

```python
"""
return mid when we got exact square root
else: right will be the floor of sqrt(x)
"""

class Solution:
    def mySqrt(self, x: int) -> int:
        if x < 2:
            return x

        left, right = 1, x // 2
        while left <= right:
            mid = (left + right) // 2
            if mid * mid == x:
                return mid
            elif mid * mid < x:
                left = mid + 1
            else:
                right = mid - 1
        return right  # right will be the floor of sqrt(x)
```

#### extension: 

```python
def sqrt_with_precision(x: float, epsilon: float = 1e-9) -> float:
    if x < 0:
        raise ValueError("Square root is not defined for negative numbers.")

    if x == 0 or x == 1:
        return x

    left, right = (0, x) if x >= 1 else (x, 1)
    while right - left > epsilon:
        mid = (left + right) / 2
        square = mid * mid
        if square < x:
            left = mid
        else:
            right = mid

    return (left + right) / 2
```
