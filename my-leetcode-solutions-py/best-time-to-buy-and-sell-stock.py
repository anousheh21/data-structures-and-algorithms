# My solution to 121 - Best Time to Buy and Sell Stock

class Solution:
    def maxProfit(self, prices: list[int]) -> int:
        pass

# Time Complexity:

test_cases = [
    [7, 1, 5, 3, 6, 4],
    [7, 6, 4, 3, 1],
]

solution = Solution()

for i in range(len(test_cases)):
    output = solution.maxProfit(test_cases[i])
    print(f"Output: {output!r} for prices as {test_cases[i]!r}")
