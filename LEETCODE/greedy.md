# Greedy - LeetCode Problems

The **Greedy** algorithm technique makes locally optimal choices at each step with the hope of finding a global optimum. It's especially useful in **interval scheduling, resource allocation, and optimization problems**. Below is a categorized list of top LeetCode Greedy problems, with Meta interview relevance.

---

## 🟢 Easy

| # | Problem | Link | Asked at Meta |
|---|---------|------|---------------|
| 1 | Assign Cookies | [LeetCode 455](https://leetcode.com/problems/assign-cookies/) | ✅ |
| 2 | Lemonade Change | [LeetCode 860](https://leetcode.com/problems/lemonade-change/) | ✅ |
| 3 | Can Place Flowers | [LeetCode 605](https://leetcode.com/problems/can-place-flowers/) | ✅ |
| 4 | Maximum Units on a Truck | [LeetCode 1710](https://leetcode.com/problems/maximum-units-on-a-truck/) | ❌ |

---

## 🟡 Medium

| # | Problem | Link | Asked at Meta |
|---|---------|------|---------------|
| 1 | Jump Game | [LeetCode 55](https://leetcode.com/problems/jump-game/) | ✅ |
| 2 | Gas Station | [LeetCode 134](https://leetcode.com/problems/gas-station/) | ✅ |
| 3 | Partition Labels | [LeetCode 763](https://leetcode.com/problems/partition-labels/) | ✅ |
| 4 | Task Scheduler | [LeetCode 621](https://leetcode.com/problems/task-scheduler/) | ✅ |
| 5 | Queue Reconstruction by Height | [LeetCode 406](https://leetcode.com/problems/queue-reconstruction-by-height/) | ✅ |
| 6 | Non-overlapping Intervals | [LeetCode 435](https://leetcode.com/problems/non-overlapping-intervals/) | ✅ |
| 7 | Merge Intervals (can use greedy-style merge) | [LeetCode 56](https://leetcode.com/problems/merge-intervals/) | ✅ |
| 8 | Minimum Number of Arrows to Burst Balloons | [LeetCode 452](https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons/) | ✅ |

---

## 🔴 Hard

| # | Problem | Link | Asked at Meta |
|---|---------|------|---------------|
| 1 | Candy | [LeetCode 135](https://leetcode.com/problems/candy/) | ✅ |
| 2 | Create Maximum Number | [LeetCode 321](https://leetcode.com/problems/create-maximum-number/) | ❌ |
| 3 | Minimum Number of Refueling Stops | [LeetCode 871](https://leetcode.com/problems/minimum-number-of-refueling-stops/) | ✅ |
| 4 | IPO | [LeetCode 502](https://leetcode.com/problems/ipo/) | ✅ |

---

## ✅ Notes on Meta Asked Problems

- Meta loves interval-based greedy problems like **Non-overlapping Intervals**, **Partition Labels**, and **Merge Intervals**.
- Optimization under constraints (like **Gas Station** and **Jump Game**) are also common.
- Know both **sort-based greedy** and **resource-tracking greedy** variants.

---

## 👨‍💻 Greedy - Pattern Template

```python
# Example: Activity selection (interval scheduling)
intervals.sort(key=lambda x: x[1])  # sort by end time
count = 0
end = float('-inf')
for start, finish in intervals:
    if start >= end:
        count += 1
        end = finish
```

### 1234. gas station

#### 🔍 1. Problem Requires an Optimal Choice (Single Pass Preferred)
> “Find the starting gas station index such that you can complete the circuit once.”
- You need to make a decision (start index) that enables the whole process to succeed.
- You're not trying all possible combinations (like in DP or backtracking).
- The array is circular → and you just need to pick one good point — this often hints at greedy.

#### 🚩 2. Greedy Signal: Local decisions lead to global correctness
The key insight is:
> If I ever run out of gas on a route from station A to B, then A can never be a valid start.
> So I can greedily skip to B + 1.
This means:
- You can reset your search as soon as failure is detected, without having to revisit old stations.
- That's the essence of greedy — making a decision that allows you to move forward without reconsideration.

#### 📐 3. No overlapping subproblems ⇒ No DP needed
In many algorithmic problems, you check:
- “Do I need to remember previous decisions to optimize future ones?”
- Here: You don’t. The only thing that matters is whether you can keep going from a point.

#### 🧭 4. You can simulate the process with simple conditions
Simulation is often expensive unless:
- You have a condition that guarantees the right answer can be found without backtracking.
Here:
- If total_gas >= total_cost, a solution is guaranteed.
- And you can find the start index in one pass by tracking when your gas tank drops below zero.
That makes it a classic greedy pattern.

```python
    def canCompleteCircuit(self, gas: List[int], cost: List[int]) -> int:
        total_gas = 0
        cur_gas = 0
        start_idx = -1
        for i in range(len(gas)):
            total_gas += gas[i] - cost[i]
            cur_gas += gas[i] - cost[i]

            if cur_gas < 0:
                cur_gas = 0
                start_idx = i + 1
        return start_idx if total_gas >= 0 else -1
```
