# My solution to 3 - Longest Substring Without Repeating Characters

class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        pass


# Time Complexity:

s_test_cases = ["abcabcbb", "bbbbb", "pwwkew"]

solution = Solution()

for i in range(len(s_test_cases)):
    output = solution.lengthOfLongestSubstring(s_test_cases[i])
    print(f"Output: {output!r} for s as {s_test_cases[i]!r}")
