#### LC 42 Trapping Water

- 🌟 Intuition:
- We maintain a stack of indices with decreasing bar heights. When we see a taller bar,
- it forms a right boundary and we calculate trapped water between the current bar and the bar on the stack.

```python
def trap(height: List[int]) -> int:
    stack = []
    water = 0
    n = len(height)

    for i in range(n):
        while stack and height[i] > height[stack[-1]]:
            bottom = stack.pop()

            if not stack:
                break

            left = stack[-1]
            width = i - left - 1
            bounded_height = min(height[i], height[left]) - height[bottom]
            water += width * bounded_height

        stack.append(i)

    return water
```

### LC Leetcode 239: Sliding Window Maximum ✅ Approach: Monotonic Deque (Optimal)

```python
from collections import deque
from typing import List

class Solution:
    def maxSlidingWindow(self, nums: List[int], k: int) -> List[int]:
        result = []
        dq = deque()  # stores indices

        for i in range(len(nums)):
            # Remove out-of-window indices
            if dq and dq[0] <= i - k:
                dq.popleft()

            # Maintain decreasing order
            while dq and nums[i] >= nums[dq[-1]]:
                dq.pop()

            dq.append(i)

            # Append current window max
            if i >= k - 1:
                result.append(nums[dq[0]])

        return result

```

