# My solution to 20 - Valid Parentheses

class Solution:
    def isValid(self, s: str) -> bool:


# Time Complexity:

test_cases = ["()", "()[]{}", "(]", "([])", "([)]"]

solution = Solution()

for i in range(len(test_cases)):
    output = solution.isValid(test_cases[i])
    print(f"Output: {output!r} for s as {test_cases[i]!r}")
