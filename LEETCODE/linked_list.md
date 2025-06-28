# Linked List - LeetCode Problems

**Linked List** problems focus on pointer manipulation, reversal, merging, cycle detection, and advanced operations like deep copy or sorting. Mastering these is essential for interviews, especially for companies like Meta.

---

## 🟢 Easy

| # | Problem | Link | Asked at Meta |
|---|---------|------|---------------|
| 1 | Reverse Linked List | [LeetCode 206](https://leetcode.com/problems/reverse-linked-list/) | ✅ |
| 2 | Middle of the Linked List | [LeetCode 876](https://leetcode.com/problems/middle-of-the-linked-list/) | ✅ |
| 3 | Linked List Cycle | [LeetCode 141](https://leetcode.com/problems/linked-list-cycle/) | ✅ |
| 4 | Remove Linked List Elements | [LeetCode 203](https://leetcode.com/problems/remove-linked-list-elements/) | ✅ |
| 5 | Merge Two Sorted Lists | [LeetCode 21](https://leetcode.com/problems/merge-two-sorted-lists/) | ✅ |

---

## 🟡 Medium

| # | Problem | Link | Asked at Meta |
|---|---------|------|---------------|
| 1 | Remove Nth Node From End of List | [LeetCode 19](https://leetcode.com/problems/remove-nth-node-from-end-of-list/) | ✅ |
| 2 | Add Two Numbers | [LeetCode 2](https://leetcode.com/problems/add-two-numbers/) | ✅ |
| 3 | Odd Even Linked List | [LeetCode 328](https://leetcode.com/problems/odd-even-linked-list/) | ✅ |
| 4 | Palindrome Linked List | [LeetCode 234](https://leetcode.com/problems/palindrome-linked-list/) | ✅ |
| 5 | Intersection of Two Linked Lists | [LeetCode 160](https://leetcode.com/problems/intersection-of-two-linked-lists/) | ✅ |
| 6 | Linked List Cycle II | [LeetCode 142](https://leetcode.com/problems/linked-list-cycle-ii/) | ✅ |
| 7 | Partition List | [LeetCode 86](https://leetcode.com/problems/partition-list/) | ✅ |
| 8 | Delete Node in a Linked List | [LeetCode 237](https://leetcode.com/problems/delete-node-in-a-linked-list/) | ✅ |

---

## 🔴 Hard

| # | Problem | Link | Asked at Meta |
|---|---------|------|---------------|
| 1 | Copy List with Random Pointer | [LeetCode 138](https://leetcode.com/problems/copy-list-with-random-pointer/) | ✅ |
| 2 | Reverse Nodes in k-Group | [LeetCode 25](https://leetcode.com/problems/reverse-nodes-in-k-group/) | ✅ |
| 3 | Merge k Sorted Lists | [LeetCode 23](https://leetcode.com/problems/merge-k-sorted-lists/) | ✅ |
| 4 | Sort List | [LeetCode 148](https://leetcode.com/problems/sort-list/) | ✅ |
| 5 | LRU Cache (Doubly Linked List + HashMap) | [LeetCode 146](https://leetcode.com/problems/lru-cache/) | ✅ |

---

## ✅ Notes on Meta Asked Problems

- Meta commonly asks about:
  - **In-place reversal** (`206`, `25`)
  - **Cycle detection and correction** (`141`, `142`)
  - **Pointer arithmetic** (like `19`, `160`, `234`)
  - **Merge and sort variants** (`23`, `148`)
- Know how to handle both **singly and doubly linked lists**.

---

## 👨‍💻 Reverse a Linked List

```python
def reverseList(head):
    prev = None
    while head:
        nxt = head.next
        head.next = prev
        prev = head
        head = nxt
    return prev
```

## 👨‍💻 Find Middle of Linked List
```python
def middleNode(head):
    slow = fast = head
    while fast and fast.next:
        slow = slow.next
        fast = fast.next.next
    return slow

```

## 👨‍💻 Detect Cycle and Start Node (Linked List Cycle II)
```python
def detectCycle(head):
    slow = fast = head
    while fast and fast.next:
        slow = slow.next
        fast = fast.next.next
        if slow == fast:
            break
    else:
        return None
    slow = head
    while slow != fast:
        slow = slow.next
        fast = fast.next
    return slow

```

## 👨‍💻 Merge Two Sorted Lists
```python
def mergeTwoLists(l1, l2):
    dummy = curr = ListNode(0)
    while l1 and l2:
        if l1.val < l2.val:
            curr.next, l1 = l1, l1.next
        else:
            curr.next, l2 = l2, l2.next
        curr = curr.next
    curr.next = l1 or l2
    return dummy.next

```

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
