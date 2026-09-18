# My solution to 57 - Insert Interval

class Solution:
    def insert(self, intervals: list[list[int]], newInterval: list[int]) -> list[list[int]]:
        pass

# Time Complexity:

intervals_test_cases = [
    [[1, 3], [6, 9]],
    [[1, 2], [3, 5], [6, 7], [8, 10], [12, 16]],
]
new_interval_test_cases = [[2, 5], [4, 8]]

solution = Solution()

for i in range(len(intervals_test_cases)):
    output = solution.insert(intervals_test_cases[i], new_interval_test_cases[i])
    print(
        f"Output: {output!r} for intervals as {intervals_test_cases[i]!r} "
        f"and newInterval as {new_interval_test_cases[i]!r}"
    )
