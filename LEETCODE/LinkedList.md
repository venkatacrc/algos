# Recursion, DFS
## BST to Doubly Linked List

```python
def buildBST2DLL(root):
  self.first = None
  self.last = None
  def dfs(node):
    if not node:
      return

    # left
    dfs(node.left)

    if self.last:
      self.last.right = node
      node.left = self.last
    else:
      self.first = node

    self.last = node

    # right
    dfs(node.right)

  dfs(root)
  self.first.left = self.last
  self.last.right = self.first

  return self.first
```

## Doubly Linked List to BST

```python
class Node:
    def __init__(self, val, left=None, right=None):
        self.val = val
        self.left = left  # prev
        self.right = right  # next

class Solution:
    def sortedDoublyListToBST(self, head: 'Node') -> 'Node':
        # Count nodes in DLL
        def count(node):
            cnt = 0
            while node:
                cnt += 1
                node = node.right
            return cnt

        n = count(head)
        self.curr = head  # Pointer to head of DLL

        def buildBST(size):
            if size == 0:
                return None

            # Recursively build left subtree
            left = buildBST(size // 2)

            # Root = current DLL node
            root = Node(self.curr.val)
            root.left = left

            # Move DLL pointer forward
            self.curr = self.curr.right

            # Recursively build right subtree
            root.right = buildBST(size - size // 2 - 1)

            return root

        return buildBST(n)
```
