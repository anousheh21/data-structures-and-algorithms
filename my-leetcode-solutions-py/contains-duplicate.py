# My solution to 217 - Contains Duplicate

class Solution:
    def containsDuplicate(self, nums: list[int]) -> bool:
        pass


# Time Complexity:

test_cases = [
    [1, 2, 3, 1],
    [1, 2, 3, 4],
    [1, 1, 1, 3, 3, 4, 3, 2, 4, 2],
]

solution = Solution()

for i in range(len(test_cases)):
    output = solution.containsDuplicate(test_cases[i])
    print(f"Output: {output!r} for nums as {test_cases[i]!r}")
