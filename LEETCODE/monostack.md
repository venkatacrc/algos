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
