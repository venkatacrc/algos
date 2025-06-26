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
