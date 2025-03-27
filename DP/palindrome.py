# Palindromic Substrings
# ----------------------
# Given a string `s`, return the number of substrings within `s` that are palindromes.

# A palindrome is a string that reads the same forward and backward.

# Example 1:
# ----------
# Input: s = "abc"
# Output: 3
# Explanation: The palindromic substrings are "a", "b", "c".

# Example 2:
# ----------
# Input: s = "aaa"
# Output: 6
# Explanation: The palindromic substrings are "a", "a", "a", "aa", "aa", "aaa".
# Note: Different substrings are counted as different palindromes even if the string contents are the same.

# Constraints:
# ------------
# 1 <= s.length <= 1000
# s consists of lowercase English letters.

class Solution1:
    def countSubstrings(self, s: str) -> int:
        """
        Brute Force Approach:
        ---------------------
        Generate all possible substrings of `s` and check if each substring is a palindrome.

        Time Complexity: O(n³)
        - Generating all substrings takes O(n²).
        - Checking if a substring is a palindrome takes O(n) in the worst case.

        Space Complexity: O(1)
        """
        def checkPalindrome(ss):
            i, j = 0, len(ss) - 1
            while i < j:
                if ss[i] != ss[j]:
                    return 0
                i += 1
                j -= 1
            return 1

        cnt = 0
        for i in range(1, len(s) + 1):
            for j in range(i - 1, -1, -1):
                cnt += checkPalindrome(s[j:i])
        return cnt


# Dynamic Programming Approach:
# -----------------------------
# To solve the problem of counting palindromic substrings using dynamic programming,
# we need to break the problem into smaller subproblems. The subproblem here is
# determining whether a substring `s[i:j+1]` is a palindrome.

# Subproblem:
# -----------
# A substring `s[i:j+1]` is a palindrome if:
# 1. The first and last characters are the same (`s[i] == s[j]`).
# 2. The substring between them (`s[i+1:j]`) is also a palindrome, or the length of the substring is less than or equal to 2 (in which case it is trivially a palindrome).

# Steps:
# ------
# 1. Base Case:
#    - Every single character is a palindrome, so `dp[i][i] = True` for all `i`.
#    - Substrings of length 2 are palindromes if `s[i] == s[i+1]`.
# 2. Recursive Relation:
#    - For substrings of length greater than 2, `dp[i][j] = True` if `s[i] == s[j]` and `dp[i+1][j-1]` is `True`.
# 3. Count Palindromes:
#    - As we fill the `dp` table, we count all substrings where `dp[i][j] = True`.

class Solution2:
    def countSubstrings(self, s: str) -> int:
        """
        Dynamic Programming Approach:
        -----------------------------
        Time Complexity: O(n²)
        - Filling the DP table takes O(n²).

        Space Complexity: O(n²)
        - The DP table requires O(n²) space.
        """
        n = len(s)
        dp = [[False] * n for _ in range(n)]
        count = 0

        # Base case: Single character substrings
        for i in range(n):
            dp[i][i] = True
            count += 1

        # Base case: Two character substrings
        for i in range(n - 1):
            if s[i] == s[i + 1]:
                dp[i][i + 1] = True
                count += 1

        # General case: Substrings of length > 2
        for length in range(3, n + 1):  # length of the substring
            for i in range(n - length + 1):
                j = i + length - 1  # endpoint of the substring
                if s[i] == s[j] and dp[i + 1][j - 1]:
                    dp[i][j] = True
                    count += 1

        return count


# Center-Expansion Approach:
# --------------------------
# The center-expansion approach is an efficient method to count all palindromic substrings.
# It works by treating each character (and the space between characters) as a potential center of a palindrome
# and expanding outward to check for palindromes.

# Key Idea:
# ---------
# A palindrome is symmetric around its center. For a string of length `n`, there are `2n - 1` possible centers:
# 1. Single-character centers: Each character in the string can be the center of an odd-length palindrome.
# 2. Two-character centers: The space between every two consecutive characters can be the center of an even-length palindrome.

# Steps:
# ------
# 1. Iterate through all possible centers (both single-character and two-character centers).
# 2. For each center, expand outward while the characters on both sides are equal.
# 3. Count the number of palindromic substrings found during the expansion.

class Solution3:
    def countSubstrings(self, s: str) -> int:
        """
        Center-Expansion Approach:
        --------------------------
        Time Complexity: O(n²)
        - Expanding around each center takes O(n) in total.
        - There are 2n - 1 centers.

        Space Complexity: O(1)
        - No additional space is used.
        """
        def expandAroundCenter(left: int, right: int) -> int:
            count = 0
            while left >= 0 and right < len(s) and s[left] == s[right]:
                count += 1  # Found a palindrome
                left -= 1
                right += 1
            return count

        count = 0
        for center in range(2 * len(s) - 1):
            left = center // 2
            right = left + (center % 2)  # Handles both single and two-character centers
            print(f"{left}{right}")
            count += expandAroundCenter(left, right)

        return count
