### list
```python
cnt = [[] for _ in range(26)] # correct
cnt = [[] * 26] # wrong This evaluates to [[]]
```

append, pop
consider swapping with last element to remove a value at random index
```pyhton
pairs.sort(key=lambda x: x[1])
sorted_pairs = sorted(pairs, key=lambda x: (x[1], x[0]), reverse=False)
```
careful with list slicing. ⚠️ Downsides of This Approach:
```text
Time Complexity becomes worse due to repeated list slicing:
Slicing preorder[1:idx+1], preorder[idx+1:] etc. takes O(k) time for each recursive call.
Worst-case time complexity: O(n²).
Space Complexity:
Due to slicing and recursion, it uses more memory than necessary.
```
```python
class Solution:
    def buildTree(self, preorder: List[int], inorder: List[int]) -> Optional[TreeNode]:
        root = None
        if preorder and inorder:
            root = TreeNode(preorder[0])
            idx = inorder.index(preorder[0])
            root.left = self.buildTree(preorder[1:idx+1], inorder[:idx])
            root.right = self.buildTree(preorder[idx+1:], inorder[idx+1:])
        return root
```

### set
add, remove

### nonlocal
Use it inside child function to access parent variable

### dict setdefault
set value if not present
```pyhton
children = {}
children.setdefault(ch, TrieNode()) === if ch not in children: children[ch] = TrieNode()
```
### bisect
```pyhton
from bisect import bisect_left, bisect_right
```
### heapq
```pyhton
from heapq import heappush, heappop
```
### deque, Counter
```pyhton
from collections import deque, Counter
```
### OOP

```python
class MyCircularQueue:

    def __init__(self, k: int):
        self.q = [0] * k
        self.num_elems = 0
        self.head = 0
        self.k = k        

    def enQueue(self, value: int) -> bool:
        if self.isFull():
            return False
        tail = (self.head + self.num_elems) % self.k       
        self.q[tail] = value
        self.num_elems += 1
        return True

    def deQueue(self) -> bool:
        if self.isEmpty():
            return False
        self.head = (self.head + 1) % self.k
        self.num_elems -=1
        return True

    def Front(self) -> int:
        if self.num_elems:
            return self.q[self.head]
        return -1
        
    def Rear(self) -> int:
        if self.num_elems:
            tail = (self.head + self.num_elems - 1) % self.k
            return self.q[tail]
        return -1        

    def isEmpty(self) -> bool:
        return self.num_elems == 0
        
    def isFull(self) -> bool:
        return self.num_elems == self.k
```

### Testing
```pyhton
import unittest
class Test(unittest.Testcase):
  def setUp(self):
    s = Solution()
  def testcase(self):
    self.assertEqual(s.isPalindrome("abc"), True)
if __name__ == '__main__':
  unittest.main()
```
