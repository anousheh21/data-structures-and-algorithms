# My solution to 33 - Search in Rotated Sorted Array

class Solution:
    def search(self, nums: list[int], target: int) -> int:
        


# Time Complexity:

nums_test_cases = [
    [4, 5, 6, 7, 0, 1, 2],
    [4, 5, 6, 7, 0, 1, 2],
    [1],
]

target_test_cases = [0, 3, 0]

solution = Solution()

for i in range(len(nums_test_cases)):
    output = solution.search(nums_test_cases[i], target_test_cases[i])
    print(
        f"Output: {output!r} for nums as {nums_test_cases[i]!r} "
        f"and target as {target_test_cases[i]!r}"
    )
