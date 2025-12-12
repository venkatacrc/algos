### Hash Maps

Two Sum
```python
def two_sum(nums, target):
  prev_map = {}
  for i, n in enumerate(nums):
    partner = target - n
    if partner in prev_map:
      return [prev_map[partner], i]
    else:
      prev_map[n] = i
  return -1
```
