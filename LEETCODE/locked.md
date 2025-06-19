### LC 339. Nested List Weight Sum

✅ Problem Summary:
- You are given a nested list of integers represented by the interface NestedInteger:
  - A NestedInteger holds either:
    - a single integer, or
    - a list of NestedIntegers

- Return the **sum of all integers** in the list weighted by their **depth**.

```python
def depthSum(nestedList: List[NestedInteger] -> int:
   stack = [(ni, 1) for ni in nestedList]
   csum = 0
   while stack:
       curr, depth = stack.pop()
       if curr.isInteger():
           csum  += curr.getInteger() * depth
       else:
           for ni in cutt.getList():
               stack.append((ni, depth + 1))
   return csum
```
