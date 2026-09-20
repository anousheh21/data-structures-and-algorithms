# My solution to 20 - Valid Parentheses

class Solution:
    def isValid(self, s: str) -> bool:
        """
        This is a LIFO problem, so a stack. Just represent as an array
        """

        # if len(s) % 2 != 0:
        #     return False

        stack = []
        for char in s:
            if char == "(" or char == "[" or char == "{":
                stack.append(char)
            elif len(stack) == 0:
                return False
            elif char == ")" and stack[-1] == "(":
                stack.pop()
            elif char == "]" and stack[-1] == "[":
                stack.pop()
            elif char == "}" and stack[-1] == "{":
                stack.pop()
            else:
                return False

        if len(stack) != 0:
            return False

        return True
            



# Time Complexity:

s_test_cases = ["()", "()[]{}", "(]", "([])", "([)]", "()"]

solution = Solution()

for i in range(len(s_test_cases)):
    output = solution.isValid(s_test_cases[i])
    print(f"Output: {output!r} for s as {s_test_cases[i]!r}")
