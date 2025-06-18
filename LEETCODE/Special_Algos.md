### 169. Majority Element - Boyer-Moore Voting Algorithm

🔍 Idea:
- Keep a count initialized to 0.
- Keep a candidate.
- For each number:
-- If count == 0, choose the current number as the candidate.
-- If the current number is the candidate, increment the count.
-- Otherwise, decrement the count.

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
