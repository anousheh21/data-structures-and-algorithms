# My solution to 125 - Valid Palindrome

class Solution:
    def isPalindrome(self, s: str) -> bool:
        """
        convert to lower case
        remove all non-alphanumeric characters
        reads same forward and backward (use pointers)
        """

        lowercase = s.lower()

        alphanumArr = []
        for char in lowercase:
            if char.isalnum():
                alphanumArr.append(char)

        alphanumStr = "".join(alphanumArr)

        startPointer = 0
        endPointer = len(alphanumStr) - 1

        while startPointer < endPointer:
            if alphanumStr[startPointer] != alphanumStr[endPointer]:
                return False

            startPointer+=1
            endPointer-=1

        return True

        


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
