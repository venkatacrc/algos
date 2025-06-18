
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
