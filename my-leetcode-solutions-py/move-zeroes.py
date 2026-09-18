# My solution to 283 - Move Zeroes

class Solution:
    def moveZeroes(self, nums: list[int]) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """

        """
        Keep pointers. 
        One pointer will just be i in the for loop, moving forward
        I think it might be easier to move non-zeros to the front, instead of moving zeroes to the back
        So the second pointer will point to the first zero, so when you get to a non-zero, those two will swap
        """

        firstZeroIndex = float("inf")

        for i in range(len(nums)):
            if firstZeroIndex == float("inf") and nums[i] == 0:
                firstZeroIndex = i

            if nums[i] != 0 and i > firstZeroIndex:
                nums[firstZeroIndex] = nums[i]
                nums[i] = 0
                firstZeroIndex += 1



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
