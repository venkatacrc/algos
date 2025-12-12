### Merge Sort
```python
def merge_lists(left_list, right_list):
  result = []
  i = j = 0
  while i < len(left_list) and j < len(right_list):
    if left_list[i] < right_list[j]:
      result.append(left_list[i])
      i += 1
    else:
      result.append(right_list[j])
      j += 1
  while i < len(left_list):
    result.append(left_list[i])
    i += 1
  while j < len(right_list):
    result.append(right_list[j])
    j += 1
  return result

def merge_sort(arr):
  n = len(arr)
  if n < 2:
    return arr
  mid = n // 2
  left_arr, right_arr = arr[:mid], arr[mid:]
  left_sorted = merge_sort(left_arr)
  right_sorted = merge_sort(right_arr)
  return merge_lists(left_sorted, right_sorted)
```
