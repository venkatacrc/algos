# 🧩 Backtracking Problems on LeetCode  
*Focused on problems frequently asked by Meta (formerly Facebook)*

Backtracking (DFS + state pruning) is a classic interview pattern. Meta often asks **medium-hard backtracking problems**, especially variants like phone letter combinations and N‑Queens.

---

## 🟢 Easy

- **17. Letter Combinations of a Phone Number**  
  Classic “phone number” recursion with backtracking. *Mentioned frequently at Meta* :contentReference[oaicite:1]{index=1}  
- String permutations / subsets (not always LeetCode-tagged)  
- Palindrome partitioning (LeetCode 131) – recursive split  

---

## 🟠 Medium

- **39. Combination Sum**  
  Select elements that sum to target.  
- **40. Combination Sum II**  
  Like Combination Sum but skipping duplicates.  
- **46. Permutations**  
  Generate all permutations of unique elements.  
- **78. Subsets**  
  Enumerate all subsets of an array.  
- **79. Word Search**  
  2D board DFS backtracking.  
- **797. All Paths From Source to Target**  
  Graph-path enumeration via recursion.  
- Variants: phone letter combinations and N‑Queens (LeetCode 51) *were referenced by Meta candidates* :contentReference[oaicite:2]{index=2}  

---

## 🔴 Hard

- **131. Palindrome Partitioning**  
  Partition a string into all palindromic substrings.  
- **212. Word Search II**  
  Find multiple words in a 2D grid (trie + backtracking).  
- **10. Regular Expression Matching**  
  Backtracking/string matching with patterns.  
- **980. Unique Paths III**  
  Unique traversal visits all cells exactly once.  
- **140. Word Break II**  
  Build sentences from dictionary words.  

---

## 📈 Insights & Meta-Relevance

- META interviews commonly include **backtracking problems**, especially phone letter combos, N‑Queens, board or path searches :contentReference[oaicite:3]{index=3}.  
- Backtracking often comes under **Recursion** in Meta screeners :contentReference[oaicite:4]{index=4}.  
- Focus on **5–10 templated problems** → core skill demonstration :contentReference[oaicite:5]{index=5}.

---

## 🎯 Study Strategy

1. **Master easy → medium problems** listed above.  
2. Practice variations (e.g., phone combos with constraints, N‑Queens size extensions).  
3. Learn pruning tricks: early exits, boolean checks, visited-sets.  
4. Dry-run recursively: trace recursion stack, backtracking steps.  
5. Time drills: simulate 40 min Meta coding rounds.

---

### 📚 Recommended Practice List

| Difficulty | Problem ID & Title |
|-----------|---------------------|
| Easy      | 17 – Letter Combinations |
| Medium    | 39 – Combination Sum |
| Medium    | 40 – Combination Sum II |
| Medium    | 46 – Permutations |
| Medium    | 78 – Subsets |
| Medium    | 79 – Word Search |
| Medium    | 51 – N‑Queens |
| Medium    | 797 – All Paths From Source to Target |
| Hard      | 131 – Palindrome Partitioning |
| Hard      | 212 – Word Search II |
| Hard      | 10 – Regular Expression Matching |
| Hard      | 980 – Unique Paths III |
| Hard      | 140 – Word Break II |

---

> ✅ **Tip**: Code each one cleanly, run edge cases (empty, duplicates, max constraints). Practice dry-runs on a whiteboard or plain text editor—Meta expects flawless logic under time pressure.

