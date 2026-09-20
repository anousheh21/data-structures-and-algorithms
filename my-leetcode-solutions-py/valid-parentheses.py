# My solution to 20 - Valid Parentheses

class Solution:
    def isValid(self, s: str) -> bool:
        pass


# Time Complexity:

s_test_cases = ["()", "()[]{}", "(]", "([])", "([)]"]

solution = Solution()

for i in range(len(s_test_cases)):
    output = solution.isValid(s_test_cases[i])
    print(f"Output: {output!r} for s as {s_test_cases[i]!r}")
