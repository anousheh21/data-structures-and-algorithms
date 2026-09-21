# My solution to 35 - Search Insert Position

class Solution:
    def searchInsert(self, nums: list[int], target: int) -> int:
        pass


# Time Complexity:

nums_test_cases = [
    [1, 3, 5, 6],
    [1, 3, 5, 6],
    [1, 3, 5, 6],
]

target_test_cases = [5, 2, 7]

solution = Solution()

for i in range(len(nums_test_cases)):
    output = solution.searchInsert(nums_test_cases[i], target_test_cases[i])
    print(
        f"Output: {output!r} for nums as {nums_test_cases[i]!r} "
        f"and target as {target_test_cases[i]!r}"
    )
