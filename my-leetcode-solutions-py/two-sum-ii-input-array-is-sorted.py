# My solution to 167 - Two Sum II - Input Array Is Sorted

class Solution:
    def twoSum(self, numbers: list[int], target: int) -> list[int]:
        


# Time Complexity:

numbers_test_cases = [
    [2, 7, 11, 15],
    [2, 3, 4],
    [-1, 0],
]

target_test_cases = [9, 6, -1]

solution = Solution()

for i in range(len(numbers_test_cases)):
    output = solution.twoSum(numbers_test_cases[i], target_test_cases[i])
    print(
        f"Output: {output!r} for numbers as {numbers_test_cases[i]!r} "
        f"and target as {target_test_cases[i]!r}"
    )
