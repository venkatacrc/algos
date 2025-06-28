### LC 2265 Count Nodes Equal to Average of Subtree

```python
"""
Approach:
    DFS post Order traversal
"""

class Solution:
    def averageOfSubtree(self, root: TreeNode) -> int:
        ans = 0
        def dfs(root):
            nonlocal ans
            if not root:
                return 0, 0
            
            ls, ln = dfs(root.left)
            rs, rn = dfs(root.right)

            total_elems = 1 + ln + rn
            total_sum = root.val + ls + rs

            if total_sum // total_elems == root.val:
                ans += 1
                       
            return total_sum, total_elems
```
