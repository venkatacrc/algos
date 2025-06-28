### list
append, pop
consider swapping with last element to remove a value at random index
```pyhton
pairs.sort(key=lambda x: x[1])
sorted_pairs = sorted(pairs, key=lambda x: (x[1], x[0]), reverse=False)
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
