# My solution to 56 - Merge Intervals

class Solution:
    def merge(self, intervals: list[list[int]]) -> list[list[int]]:
        # sort first
        intervals.sort(key=lambda x: x[0])

        currentInterval = intervals[0]
        outputIntervals = []

        for i in range(1, len(intervals)):
            if currentInterval[1] >= intervals[i][0]:
                if currentInterval[1] < intervals[i][1]:
                    currentInterval[1] = intervals[i][1]
            else:
                outputIntervals.append(currentInterval)
                currentInterval = intervals[i]

        outputIntervals.append(currentInterval)

        return outputIntervals


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
