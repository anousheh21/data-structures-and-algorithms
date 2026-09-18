# My solution to 1 - Two Sum

class Solution:
    def twoSum(self, nums: list[int], target: int) -> list[int]:
        """
        create a map, where you store the nuber each number needs to reach the target
        check the map to see if that already exists
        """

        toTarget = {}

        for i, num in enumerate(nums):
            req = target - num

            # if req < 0:
            #     continue

         

            if req in toTarget:
                return [toTarget[req], i]
            else:
                # add to num to dictionary, with index as the value
                toTarget[num] = i


# Time Complexity:

nums_test_cases = [
    [2, 7, 11, 15],
    [3, 2, 4],
    [3, 3],
]

target_test_cases = [9, 6, 6]

solution = Solution()

for i in range(len(nums_test_cases)):
    output = solution.twoSum(nums_test_cases[i], target_test_cases[i])
    print(
        f"Output: {output!r} for nums as {nums_test_cases[i]!r} "
        f"and target as {target_test_cases[i]!r}"
    )
