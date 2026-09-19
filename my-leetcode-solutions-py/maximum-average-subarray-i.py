# My solution to 643 - Maximum Average Subarray I

class Solution:
    def findMaxAverage(self, nums: list[int], k: int) -> float:
        


# Time Complexity:

nums_test_cases = [
    [1, 12, -5, -6, 50, 3],
    [5],
]

k_test_cases = [4, 1]

solution = Solution()

for i in range(len(nums_test_cases)):
    output = solution.findMaxAverage(nums_test_cases[i], k_test_cases[i])
    print(
        f"Output: {output!r} for nums as {nums_test_cases[i]!r} "
        f"and k as {k_test_cases[i]!r}"
    )
