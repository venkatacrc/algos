# Fast and Slow Pointers - LeetCode Problems

**Fast and Slow Pointers**, also known as the **Tortoise and Hare algorithm**, is useful for:
- **Cycle detection**
- **Finding the middle of a list**
- **Detecting intersections**
- **Optimized traversals with two pointers at different speeds**

Below is a categorized list of problems using this pattern, organized by difficulty and Meta frequency.

---

## 🟢 Easy

| # | Problem | Link | Asked at Meta |
|---|---------|------|---------------|
| 1 | Middle of the Linked List | [LeetCode 876](https://leetcode.com/problems/middle-of-the-linked-list/) | ✅ |
| 2 | Linked List Cycle | [LeetCode 141](https://leetcode.com/problems/linked-list-cycle/) | ✅ |
| 3 | Happy Number | [LeetCode 202](https://leetcode.com/problems/happy-number/) | ✅ |

---

## 🟡 Medium

| # | Problem | Link | Asked at Meta |
|---|---------|------|---------------|
| 1 | Linked List Cycle II | [LeetCode 142](https://leetcode.com/problems/linked-list-cycle-ii/) | ✅ |
| 2 | Remove Nth Node From End of List | [LeetCode 19](https://leetcode.com/problems/remove-nth-node-from-end-of-list/) | ✅ |
| 3 | Palindrome Linked List | [LeetCode 234](https://leetcode.com/problems/palindrome-linked-list/) | ✅ |
| 4 | Reorder List | [LeetCode 143](https://leetcode.com/problems/reorder-list/) | ✅ |
| 5 | Find the Duplicate Number | [LeetCode 287](https://leetcode.com/problems/find-the-duplicate-number/) | ✅ |
| 6 | Detect Cycle in Directed Graph (DFS alternative) | [LeetCode 207](https://leetcode.com/problems/course-schedule/) | ✅ |

---

## 🔴 Hard

| # | Problem | Link | Asked at Meta |
|---|---------|------|---------------|
| 1 | Split Linked List in Parts | [LeetCode 725](https://leetcode.com/problems/split-linked-list-in-parts/) | ❌ |
| 2 | Linked List Intersection | [LeetCode 160](https://leetcode.com/problems/intersection-of-two-linked-lists/) | ✅ |
| 3 | Circular Array Loop | [LeetCode 457](https://leetcode.com/problems/circular-array-loop/) | ✅ |
| 4 | Linked List Cycle Detection (Generic) | [Conceptual] | ✅ |

---

## ✅ Notes on Meta Asked Problems

- Meta loves problems where **cycle detection**, **intersection**, or **list manipulation** are involved.
- Be fluent in:
  - Finding middle node
  - Detecting cycle start
  - Reversing second half of list
  - Comparing node values with two pointers

---

## 👨‍💻 Fast and Slow Pointer - Cycle Detection Template

```python
def hasCycle(head):
    slow = fast = head
    while fast and fast.next:
        slow = slow.next
        fast = fast.next.next
        if slow == fast:
            return True
    return False
```

## 👨‍💻 Find Cycle Start Node (Linked List Cycle II)
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

## 👨‍💻 Find Middle Node
```python
def middleNode(head):
    slow = fast = head
    while fast and fast.next:
        slow = slow.next
        fast = fast.next.next
    return slow

```

## 👨‍💻 Palindrome Linked List
```python
def isPalindrome(head):
    # Step 1: Find middle
    slow = fast = head
    while fast and fast.next:
        slow = slow.next
        fast = fast.next.next

    # Step 2: Reverse second half
    prev = None
    while slow:
        nxt = slow.next
        slow.next = prev
        prev = slow
        slow = nxt

    # Step 3: Compare halves
    left, right = head, prev
    while right:
        if left.val != right.val:
            return False
        left = left.next
        right = right.next
    return True

```
