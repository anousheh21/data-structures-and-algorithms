# My solution to 167 - Two Sum II - Input Array Is Sorted

class Solution:
    def twoSum(self, numbers: list[int], target: int) -> list[int]:
        """
        Basically the same as 2 sum, but the array is arranged in ascending order, and you can't create an extra data structure

        Use pointers. One at the start and one at the end, then move them in accordingly.

        If start + end < target, move start pointer forward. If start + end > target, move end pointer backward. If start + end == target, return those + 1 to each

        """

        startPointer = 0
        endPointer = len(numbers) - 1

        while numbers[startPointer] + numbers[endPointer] != target:
            currentTotal = numbers[startPointer] + numbers[endPointer]
            if currentTotal < target:
                startPointer += 1
            elif currentTotal > target:
                endPointer -= 1

        return [startPointer + 1, endPointer + 1]




        # REMEMBER: the array is 1 indexed. No point worrying about that as you solve, but you need to add one to the outputs that you return
        


# Time Complexity:

numbers_test_cases = [
    [2, 7, 11, 15],
    [2, 3, 4],
    [-1, 0],
    [1, 3, 9, 10]
]

target_test_cases = [9, 6, -1, 12]

solution = Solution()

for i in range(len(numbers_test_cases)):
    output = solution.twoSum(numbers_test_cases[i], target_test_cases[i])
    print(
        f"Output: {output!r} for numbers as {numbers_test_cases[i]!r} "
        f"and target as {target_test_cases[i]!r}"
    )
