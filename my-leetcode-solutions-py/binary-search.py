# My solution to 704 - Binary Search
import math

class Solution:
    def search(self, nums: list[int], target: int) -> int:
        start = 0
        end = len(nums) - 1
        mid = math.ceil((end - start) / 2)

        while start <= end:
            if nums[mid] == target:
                return mid
            elif nums[mid] < target:
                start = mid + 1
            elif nums[mid] > target:
                end = mid - 1

            # update mid
            # mid = math.ceil((end - start) / 2)
            difference = math.ceil((end - start) / 2)
            mid = start + difference


        return -1


# Time Complexity:

nums_test_cases = [
    [-1, 0, 3, 5, 9, 12],
    [-1, 0, 3, 5, 9, 12],
]

target_test_cases = [9, 2]

solution = Solution()

for i in range(len(nums_test_cases)):
    output = solution.search(nums_test_cases[i], target_test_cases[i])
    print(
        f"Output: {output!r} for nums as {nums_test_cases[i]!r} "
        f"and target as {target_test_cases[i]!r}"
    )
