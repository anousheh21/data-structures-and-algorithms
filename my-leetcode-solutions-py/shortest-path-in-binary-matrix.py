# My solution to 1091 - Shortest Path in Binary Matrix

class Solution:
    def shortestPathBinaryMatrix(self, grid: list[list[int]]) -> int:
        pass


# Time Complexity:

grid_test_cases = [
    [[0, 1], [1, 0]],
    [[0, 0, 0], [1, 1, 0], [1, 1, 0]],
    [[1, 0, 0], [1, 1, 0], [1, 1, 0]],
]

solution = Solution()

for i in range(len(grid_test_cases)):
    output = solution.shortestPathBinaryMatrix(grid_test_cases[i])
    print(f"Output: {output!r} for grid as {grid_test_cases[i]!r}")
