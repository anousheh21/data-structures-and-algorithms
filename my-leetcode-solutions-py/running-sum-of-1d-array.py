# My solution to 1480 - Running Sum of 1d Array

class Solution:
    def runningSum(self, nums: list[int]) -> list[int]:
        pass


# Time Complexity:

test_cases = [
    [1, 2, 3, 4],
    [1, 1, 1, 1, 1],
    [3, 1, 2, 10, 1],
]

solution = Solution()

for i in range(len(test_cases)):
    output = solution.runningSum(test_cases[i])
    print(f"Output: {output!r} for nums as {test_cases[i]!r}")
