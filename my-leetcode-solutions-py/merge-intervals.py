# My solution to 56 - Merge Intervals

class Solution:
    def merge(self, intervals: list[list[int]]) -> list[list[int]]:
        pass


# Time Complexity:

intervals_test_cases = [
    [[1, 3], [2, 6], [8, 10], [15, 18]],
    [[1, 4], [4, 5]],
    [[4, 7], [1, 4]],
]

solution = Solution()

for i in range(len(intervals_test_cases)):
    output = solution.merge(intervals_test_cases[i])
    print(
        f"Output: {output!r} for intervals as {intervals_test_cases[i]!r}"
    )
