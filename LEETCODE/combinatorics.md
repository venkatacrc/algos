# 🌟 Stars and Bars Pattern in Combinatorics

## ✨ What is Stars and Bars?

The **Stars and Bars** theorem helps count the number of **ways to divide `n` identical items into `k` non-negative groups**.

---

### 🎯 Core Problem

**How many non-negative integer solutions exist for the equation:**

$$
x_1 + x_2 + \dots + x_k = n
$$


This counts how to distribute `n` identical items among `k` bins. This is the number of ways to place k - 1 bars among n + k - 1 total slots (stars + bars).

* **Non-negative integers (`xᵒ ≥ 0`)**:

$$
\text{Answer} = \binom{n + k - 1}{k - 1}
$$

* **Positive integers (`xᵒ ≥ 1`)**:

$$
\text{Answer} = \binom{n - 1}{k - 1}
$$


## 🧠 Visual Example

**Distribute 5 candies to 3 children** (some children may get 0):

```
🌟 🌟 🌟 🌟 🌟
```

We insert 2 bars (`|`) to divide into 3 parts:

```
🌟🌟 | 🌟🌟 | 🌟
```

Total ways:

$$
\binom{5 + 3 - 1}{3 - 1} = \binom{7}{2} = 21
$$

---

