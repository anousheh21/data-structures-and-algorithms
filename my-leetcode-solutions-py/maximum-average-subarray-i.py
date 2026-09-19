# My solution to 643 - Maximum Average Subarray I

class Solution:
    def findMaxAverage(self, nums: list[int], k: int) -> float:
        """
        Sliding window of length k.

        Can't sort it bc you need it to be contiguous. 
        You go through the array and calculate every average BUT you don't recalculate some bits. 
        """
       

        # calculate initial average
        initialAverage = sum(nums[:k]) / k
        averages = [initialAverage]
        maxAverage = initialAverage

        for i in range(1, len(nums) - k + 1):
            # print(nums[i:k+i])

            # calculate current average, and if that is greater than maxAveage, assign it
            currentAverage = ((averages[i-1] * k) - nums[i-1] + nums[k-1+i]) / k
            averages.append(currentAverage)

            if currentAverage > maxAverage:
                maxAverage = currentAverage

        return maxAverage

            





# Time Complexity:

nums_test_cases = [
    [1, 12, -5, -6, 50, 3],
    [5],
    [3,3,4,3,0]
]

k_test_cases = [4, 1, 3]

solution = Solution()

for i in range(len(nums_test_cases)):
    output = solution.findMaxAverage(nums_test_cases[i], k_test_cases[i])
    print(
        f"Output: {output!r} for nums as {nums_test_cases[i]!r} "
        f"and k as {k_test_cases[i]!r}"
    )
