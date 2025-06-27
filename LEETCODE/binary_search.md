# Binary Search - LeetCode Problems

**Binary Search** is a classic divide-and-conquer algorithm, typically used on **sorted arrays**, **monotonic functions**, or to **search for boundaries** under certain constraints. This document lists Binary Search problems on LeetCode grouped by difficulty, with Meta interview tags.

---

## 🟢 Easy

| # | Problem | Link | Asked at Meta |
|---|---------|------|---------------|
| 1 | Binary Search | [LeetCode 704](https://leetcode.com/problems/binary-search/) | ✅ |
| 2 | Guess Number Higher or Lower | [LeetCode 374](https://leetcode.com/problems/guess-number-higher-or-lower/) | ✅ |
| 3 | First Bad Version | [LeetCode 278](https://leetcode.com/problems/first-bad-version/) | ✅ |

---

## 🟡 Medium

| # | Problem | Link | Asked at Meta |
|---|---------|------|---------------|
| 1 | Search in Rotated Sorted Array | [LeetCode 33](https://leetcode.com/problems/search-in-rotated-sorted-array/) | ✅ |
| 2 | Find Peak Element | [LeetCode 162](https://leetcode.com/problems/find-peak-element/) | ✅ |
| 3 | Find Minimum in Rotated Sorted Array | [LeetCode 153](https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/) | ✅ |
| 4 | Search a 2D Matrix | [LeetCode 74](https://leetcode.com/problems/search-a-2d-matrix/) | ✅ |
| 5 | Koko Eating Bananas | [LeetCode 875](https://leetcode.com/problems/koko-eating-bananas/) | ✅ |
| 6 | Capacity To Ship Packages Within D Days | [LeetCode 1011](https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/) | ✅ |
| 7 | Minimum Number of Days to Make m Bouquets | [LeetCode 1482](https://leetcode.com/problems/minimum-number-of-days-to-make-m-bouquets/) | ✅ |
| 8 | Search in Rotated Sorted Array II | [LeetCode 81](https://leetcode.com/problems/search-in-rotated-sorted-array-ii/) | ✅ |

---

## 🔴 Hard

| # | Problem | Link | Asked at Meta |
|---|---------|------|---------------|
| 1 | Median of Two Sorted Arrays | [LeetCode 4](https://leetcode.com/problems/median-of-two-sorted-arrays/) | ✅ |
| 2 | Split Array Largest Sum | [LeetCode 410](https://leetcode.com/problems/split-array-largest-sum/) | ✅ |
| 3 | Find in Mountain Array | [LeetCode 1095](https://leetcode.com/problems/find-in-mountain-array/) | ✅ |
| 4 | Allocate Minimum Number of Pages | [LeetCode Discuss](https://www.geeksforgeeks.org/allocate-minimum-number-pages/) | ✅ |
| 5 | Maximum Number of Removable Characters | [LeetCode 1898](https://leetcode.com/problems/maximum-number-of-removable-characters/) | ✅ |

---

## ✅ Notes on Meta Asked Problems

- Meta often asks **search in rotated arrays**, **binary search over answer**, and **edge-boundary detection** style questions.
- Problems like **Koko Eating Bananas**, **Capacity to Ship**, and **Median of Two Sorted Arrays** are Meta favorites.
- Mastering **lower bound / upper bound** patterns is essential for top-tier performance.

---

## 👨‍💻 Binary Search - Template

```python
def binary_search(arr, target):
    left, right = 0, len(arr) - 1
    while left <= right:
        mid = (left + right) // 2
        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            left = mid + 1
        else:
            right = mid - 1
    return -1
```


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

## 1060 Missing Element in Sorted Array

```python
from typing import List
from bisect import bisect_left

class Solution:
    def missingElement(self, nums: List[int], k: int) -> int:
        n = len(nums)
        missing = [0] * n
        for i in range(1, n):
            missing[i] += missing[i-1]
            missing[i] += nums[i] - nums[i-1] - 1
        if k > missing[n-1]:
            return nums[n-1] + k - missing[n-1]
        idx = bisect_left(missing, k)
        return nums[idx] + k - missing[idx] - 1
```

## 2616 Minimize the Maximum Difference of Pairs

```python
class Solution:
    def minimizeMax(self, nums: List[int], p: int) -> int:
        nums.sort()
        def can_form(max_diff):
            i = 0
            count = 0
            while i < len(nums) - 1:
                if nums[i+1] - nums[i] <= max_diff:
                    count += 1
                    i += 2
                else:
                    i += 1
            return count >= p
    
        low, high = 0, nums[-1] - nums[0]
        while low <= high:
            mid = (low + high) // 2
            if can_form(mid):
                high = mid - 1 
            else:
                low = mid + 1
        return low


s = Solution()
print(s.minimizeMax(nums=[3,4,2,3,2,1,2], p=3) == 1)
print(s.minimizeMax(nums=[10,1,2,7,1,3], p=2) == 1)
print(s.minimizeMax(nums=[4,2,1,2], p=1) == 0)
print(s.minimizeMax(nums=[0,5,3,4], p=0) == 0)
```
## 1011 Capacity to ship packages within d days

```python
class Solution:
    def shipWithinDays(self, weights: List[int], days: int) -> int:
        def can_ship(max_weight):
            curr_weight = 0
            count = 1
            for w in weights:
                if w + curr_weight > max_weight:
                    count += 1
                    curr_weight = 0
                curr_weight += w
            return count <= days

        low, high = max(weights), sum(weights)
        answer = high
        while low <= high:
            mid = (low + high) // 2
            if can_ship(mid):
                answer = mid
                high = mid - 1
            else:
                low = mid + 1
        return answer
```
