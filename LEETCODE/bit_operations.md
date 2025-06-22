# Bit Operations - LeetCode Problems

Bit manipulation problems involve operations at the **bit level** such as **AND, OR, XOR, shifts**, and use techniques like **bit masking**, **counting set bits**, and **bit tricks**. These problems are fundamental for optimizing performance and are frequently asked in interviews.

---

## 🟢 Easy

| # | Problem | Link | Asked at Meta |
|---|---------|------|---------------|
| 1 | Single Number | [LeetCode 136](https://leetcode.com/problems/single-number/) | ✅ |
| 2 | Number of 1 Bits | [LeetCode 191](https://leetcode.com/problems/number-of-1-bits/) | ✅ |
| 3 | Power of Two | [LeetCode 231](https://leetcode.com/problems/power-of-two/) | ✅ |
| 4 | Power of Four | [LeetCode 342](https://leetcode.com/problems/power-of-four/) | ✅ |
| 5 | Reverse Bits | [LeetCode 190](https://leetcode.com/problems/reverse-bits/) | ✅ |

---

## 🟡 Medium

| # | Problem | Link | Asked at Meta |
|---|---------|------|---------------|
| 1 | Counting Bits | [LeetCode 338](https://leetcode.com/problems/counting-bits/) | ✅ |
| 2 | Missing Number | [LeetCode 268](https://leetcode.com/problems/missing-number/) | ✅ |
| 3 | Subsets | [LeetCode 78](https://leetcode.com/problems/subsets/) | ✅ |
| 4 | Maximum XOR of Two Numbers in an Array | [LeetCode 421](https://leetcode.com/problems/maximum-xor-of-two-numbers-in-an-array/) | ✅ |
| 5 | Bitwise AND of Numbers Range | [LeetCode 201](https://leetcode.com/problems/bitwise-and-of-numbers-range/) | ✅ |

---

## 🔴 Hard

| # | Problem | Link | Asked at Meta |
|---|---------|------|---------------|
| 1 | Maximum XOR of Two Numbers in an Array (Trie based) | [LeetCode 421](https://leetcode.com/problems/maximum-xor-of-two-numbers-in-an-array/) | ✅ |
| 2 | Smallest Good Base | [LeetCode 483](https://leetcode.com/problems/smallest-good-base/) | ❌ |
| 3 | Super Pow | [LeetCode 372](https://leetcode.com/problems/super-pow/) | ✅ |
| 4 | Count Different Palindromic Subsequences | [LeetCode 730](https://leetcode.com/problems/count-different-palindromic-subsequences/) | ✅ |

---

## ✅ Notes on Meta Asked Problems

- Meta frequently asks **XOR-based problems** like Single Number variants and Maximum XOR.
- Bit counting and mask generation (e.g., subsets via bits) are common.
- Know key tricks like `x & (x - 1)` to clear the lowest set bit and `x & (-x)` to isolate it.

---

## 👨‍💻 Common Bit Manipulation Tricks

```python
# Check if x is power of two
def isPowerOfTwo(x):
    return x > 0 and (x & (x - 1)) == 0

# Count set bits (Brian Kernighan’s Algorithm)
def countSetBits(x):
    count = 0
    while x:
        x &= x - 1
        count += 1
    return count

# Get rightmost set bit
def rightmostSetBit(x):
    return x & (-x)

# XOR of array elements
def xorArray(arr):
    result = 0
    for num in arr:
        result ^= num
    return result
```

## 👨‍💻 Bitmask Subsets Example
```python
def subsets(nums):
    n = len(nums)
    res = []
    for mask in range(1 << n):
        subset = []
        for i in range(n):
            if mask & (1 << i):
                subset.append(nums[i])
        res.append(subset)
    return res

```
