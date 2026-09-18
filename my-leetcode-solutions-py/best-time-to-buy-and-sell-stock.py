# My solution to 121 - Best Time to Buy and Sell Stock

class Solution:
    def maxProfit(self, prices: list[int]) -> int:
        # If it's in strict descending order, return 0
        # Loop through. For each number, find the max number after it. If the difference between those is greater than the global max, set that difference te be the global max instead. 

        # Loop through the array. Find max value after each value, and find the difference. If difference < 0, set difference to 0. If difference greater than global max, set the difference to the global max. But the thing is, you are recomputing the max each time.

        # Instead of calculating future values, you can calculate the past value.

        # loop through starting from one, and do prices[i] - currentMin. Update current min on each go

        currentMin = prices[0]
        maxProfit = 0
        for i in range(1, len(prices)):
            if prices[i] < currentMin:
                currentMin = prices[i]

            if prices[i] - currentMin > maxProfit:
                maxProfit = prices[i] - currentMin

        return maxProfit


# Time Complexity:

test_cases = [
    [7, 1, 5, 3, 6, 4],
    [7, 6, 4, 3, 1],
]

solution = Solution()

for i in range(len(test_cases)):
    output = solution.maxProfit(test_cases[i])
    print(f"Output: {output!r} for prices as {test_cases[i]!r}")
