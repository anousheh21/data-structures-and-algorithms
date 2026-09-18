# My solution to 1480 - Running Sum of 1d Array

class Solution:
    def runningSum(self, nums: list[int]) -> list[int]:
        # We can store  sums we've already computed. 
        # Instead of calculating the sum each time, we just look at the last value in the array, and then add the next value to it. Apart from for index 0

        resultNums = [nums[0]]

        for i in range(1, len(nums)):
            new = resultNums[i-1] + nums[i]
            resultNums.append(new)

        return resultNums



# Time Complexity: O(n)

test_cases = [
    [1, 2, 3, 4],
    [1, 1, 1, 1, 1],
    [3, 1, 2, 10, 1],
]

solution = Solution()

for i in range(len(test_cases)):
    output = solution.runningSum(test_cases[i])
    print(f"Output: {output!r} for nums as {test_cases[i]!r}")
