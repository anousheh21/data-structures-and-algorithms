# My solution to 283 - Move Zeroes

class Solution:
    def moveZeroes(self, nums: list[int]) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        pass

# Time Complexity:

test_cases = [
    [0, 1, 0, 3, 12],
    [0],
]

solution = Solution()

for i in range(len(test_cases)):
    nums = test_cases[i]
    original_nums = nums.copy()
    solution.moveZeroes(nums)
    output = nums
    print(f"Output: {output!r} for nums as {original_nums!r}")
