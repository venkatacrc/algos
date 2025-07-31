
### Lazy BST Iterator

```python
class BSTIterator:
    
    def __init__(self, root: Optional[TreeNode]):
        self.elems = []
        while root:
            self.elems.append(root)
            root = root.left

    def next(self) -> int:
        node = self.elems.pop()
        rnode = node.right
        while rnode:
            self.elems.append(rnode)
            rnode = rnode.left 
        return node.val

    def hasNext(self) -> bool:
        return len(self.elems) > 0
```
