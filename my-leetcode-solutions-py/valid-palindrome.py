# My solution to 125 - Valid Palindrome

class Solution:
    def isPalindrome(self, s: str) -> bool:
        """
        
        """


# Time Complexity:

s_test_cases = [
    "A man, a plan, a canal: Panama",
    "race a car",
    " ",
]

solution = Solution()

for i in range(len(s_test_cases)):
    output = solution.isPalindrome(s_test_cases[i])
    print(f"Output: {output!r} for s as {s_test_cases[i]!r}")
