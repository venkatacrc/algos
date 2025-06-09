
# 🔍 Binary Search Cheatsheet

Master common patterns, when to apply them, and use clear templates for each scenario.

---

## ⚙️ Template 1: Classic Binary Search

**When to use:** Search for an exact value in a sorted array.

```python
def binary_search(nums, target):
    left, right = 0, len(nums) - 1
    while left <= right:
        mid = (left + right) // 2
        if nums[mid] == target:
            return mid
        elif nums[mid] < target:
            left = mid + 1
        else:
            right = mid - 1
    return -1
```

**Examples:**
- [704. Binary Search](https://leetcode.com/problems/binary-search/)
- [35. Search Insert Position](https://leetcode.com/problems/search-insert-position/)

---

## ⚙️ Template 2: Lower Bound (First True)

**When to use:** Find first index where a condition becomes true.

```python
def lower_bound(nums, condition):
    left, right = 0, len(nums)
    while left < right:
        mid = (left + right) // 2
        if condition(nums[mid]):
            right = mid
        else:
            left = mid + 1
    return left
```

**Examples:**
- [278. First Bad Version](https://leetcode.com/problems/first-bad-version/)
- [34. Find First and Last Position](https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/)
- [162. Find Peak Element](https://leetcode.com/problems/find-peak-element/)

---

## ⚙️ Template 3: Upper Bound (Last True)

**When to use:** Find the last index where a condition is true.

```python
def upper_bound(nums, condition):
    left, right = 0, len(nums) - 1
    while left < right:
        mid = (left + right + 1) // 2
        if condition(nums[mid]):
            left = mid
        else:
            right = mid - 1
    return left
```

**Examples:**
- [1283. Smallest Divisor Given a Threshold](https://leetcode.com/problems/find-the-smallest-divisor-given-a-threshold/)
- [1552. Magnetic Force Between Two Balls](https://leetcode.com/problems/magnetic-force-between-two-balls/)

---

## ⚙️ Template 4: Binary Search on Answer

**When to use:** Searching for a minimum/maximum feasible "answer."

```python
def binary_search_answer(min_val, max_val, is_feasible):
    left, right = min_val, max_val
    while left < right:
        mid = (left + right) // 2
        if is_feasible(mid):
            right = mid
        else:
            left = mid + 1
    return left
```

**Examples:**
- [875. Koko Eating Bananas](https://leetcode.com/problems/koko-eating-bananas/)
- [1011. Capacity to Ship Packages](https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/)
- [410. Split Array Largest Sum](https://leetcode.com/problems/split-array-largest-sum/)
- [1482. Minimum Days to Make m Bouquets](https://leetcode.com/problems/minimum-number-of-days-to-make-m-bouquets/)

---

## ⚙️ Template 5: Search in Rotated Sorted Array

**When to use:** Rotated sorted array with/without duplicates.

```python
def search_rotated(nums, target):
    left, right = 0, len(nums) - 1
    while left <= right:
        mid = (left + right) // 2
        if nums[mid] == target:
            return mid
        if nums[left] <= nums[mid]:
            if nums[left] <= target < nums[mid]:
                right = mid - 1
            else:
                left = mid + 1
        else:
            if nums[mid] < target <= nums[right]:
                left = mid + 1
            else:
                right = mid - 1
    return -1
```

**Examples:**
- [33. Search in Rotated Sorted Array](https://leetcode.com/problems/search-in-rotated-sorted-array/)
- [81. Search in Rotated Sorted Array II](https://leetcode.com/problems/search-in-rotated-sorted-array-ii/)

---

## ⚙️ Template 6: Search in 2D Matrix

**When to use:** 2D matrix can be treated as a 1D sorted list.

```python
def searchMatrix(matrix, target):
    if not matrix or not matrix[0]: return False
    m, n = len(matrix), len(matrix[0])
    left, right = 0, m * n - 1
    while left <= right:
        mid = (left + right) // 2
        val = matrix[mid // n][mid % n]
        if val == target:
            return True
        elif val < target:
            left = mid + 1
        else:
            right = mid - 1
    return False
```

**Examples:**
- [74. Search a 2D Matrix](https://leetcode.com/problems/search-a-2d-matrix/)
- [240. Search a 2D Matrix II](https://leetcode.com/problems/search-a-2d-matrix-ii/) — uses 2-pointer strategy.


## ⚙️ Template 7: Binary Search with Custom Function
**When to use:** Search when transformation or simulation is needed on the fly.

```python
def binary_search_custom(left, right, check):
    while left < right:
        mid = (left + right) // 2
        if check(mid):
            right = mid
        else:
            left = mid + 1
    return left
```
**Examples:**
- [1231. Divide Chocolate](https://leetcode.com/problems/divide-chocolate/)
- [1300. Sum of Mutated Array Closest to Target](https://leetcode.com/problems/sum-of-mutated-array-closest-to-target/) 

## 🎯 Template 8:  Binary Search + Two Pointers / Greedy
**When to use:** Hybrid problems needing extra pass (greedy/two-pointer) for feasibility check.

**Examples:**
- 875. Koko Eating Bananas
- 1011. Capacity to Ship Packages
- 1482. Minimum Days to Make m Bouquets

## ✨ Template 9: Bonus: Binary Search + Heap / Prefix Sum / Monotonic Stack
Advanced combos

**Examples:**
- Prefix sum: 644. Maximum Average Subarray II
- Heap: 373. Find K Pairs with Smallest Sums
- Monotonic stack: 901. Online Stock Span

---

## ⚠️ Common Mistakes

| Mistake                  | Fix                                                      |
|--------------------------|-----------------------------------------------------------|
| Infinite loop            | Carefully update `left` and `right`                      |
| Off-by-one errors        | Understand loop bounds (`<=` vs `<`)                     |
| Wrong mid calculation    | For upper bound, use `mid = (left + right + 1) // 2`     |
| Misinterpreting condition| Debug with print/trace mid-values and check feasibility  |

---

## 🧠 Practice Tips

- Always draw a diagram for binary search range.
- Think of condition as a **monotonic function** (`F F F T T T`)
- If stuck, try brute-force then binary search optimization.
