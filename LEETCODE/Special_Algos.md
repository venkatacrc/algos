### 169. Majority Element - Boyer-Moore Voting Algorithm

🔍 Idea for constant space:
- Keep a count initialized to 0.
- Keep a candidate.
- For each number:
    - If count == 0, choose the current number as the candidate.
    - If the current number is the candidate, increment the count.
    - Otherwise, decrement the count.

```python
    def majorityElement(nums: List[int]) -> int:
        count = 0
        candidate = None
        for n in nums:
            if count == 0:
                candidate = n
                count += 1
            else:
                if candidate == n:
                    count += 1
                else:
                    count -= 1
        return candidate
```


### 1650. Lowest Common Ancestor of a Binary Tree III

🧠 Key Insight:
- This problem is structurally similar to finding the intersection node of two singly linked lists, because we can traverse up the tree using parent pointers.

✅ Approach:
1. Start from p and q.
2. Move each pointer up to its parent.
3. When one pointer reaches the top (None), redirect it to the other node.
4. Eventually, both will meet at the LCA.
- This works because both pointers will traverse equal "heights" in total.

```python
class Solution:
    def lowestCommonAncestor(self, p: 'Node', q: 'Node') -> 'Node':
        a, b = p, q
        while a != b:
            a = a.parent if a else q
            b = b.parent if b else p
        return a

```

### 560  LC subarray sum
TC: O(n) SC: O(n)
```python
from collections import defaultdict

def subarraysSum(nums: List[int], k: int) -> int:
    count = 0
    running_sum = 0
    prefix_sum_counts = defaultdict(int)
    prefix_sum_counts[0] = 1

    for num in nums:
        running_sum += num
        if (running_sum - k) in prefix_sum_counts:
            count += prefix_sum_counts[running_sum - k]
        prefix_sum_counts[running_sum] += 1

    return count
```
#### LC 974. Subarray Sums Divisible by K

```python
class Solution:
    def subarraysDivByK(self, nums: List[int], k: int) -> int:
        count = 0
        running_sum = 0
        prefix_sum_counts = defaultdict(int)
        prefix_sum_counts[0] = 1
        for num in nums:
            running_sum += num
            mod = running_sum % k
            if mod < 0:
                mod += k
            count += prefix_sum_counts[mod]
            prefix_sum_counts[mod] += 1
        return count  
```
