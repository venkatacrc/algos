### list
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
