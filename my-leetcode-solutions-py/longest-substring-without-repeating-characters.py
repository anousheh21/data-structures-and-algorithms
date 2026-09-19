# My solution to 3 - Longest Substring Without Repeating Characters

class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:


# Time Complexity:

test_cases = ["abcabcbb", "bbbbb", "pwwkew"]

solution = Solution()

for i in range(len(test_cases)):
    output = solution.lengthOfLongestSubstring(test_cases[i])
    print(f"Output: {output!r} for s as {test_cases[i]!r}")
