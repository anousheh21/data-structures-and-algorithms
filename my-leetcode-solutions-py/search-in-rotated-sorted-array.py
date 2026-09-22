# My solution to 33 - Search in Rotated Sorted Array

# class Solution:
#     def search(self, nums: list[int], target: int) -> int:
#         start = 0
#         end = len(nums) - 1
#         mid = end // 2

#         while start <= end:
#             if target == nums[mid]:
#                 return mid
#             elif target == nums[end]:
#                 return end
#             elif target == nums[start]:
#                 return start
#             elif nums[start] < nums[end]:
#                 if target < nums[mid]:
#                     end = mid - 1
#                 elif target > nums[mid]:
#                     start = mid + 1
#             elif target > nums[start] and target < nums[mid]:
#                 # if target in first half
#                 end = mid - 1
#                 print("o1")
#             elif target < nums[start] and target < nums[mid]:
#                 # target in second half
#                 start = mid + 1
#                 print("o2")
#             elif target > nums[mid] and target < nums[start]:
#                 # target in second half
#                 start = mid + 1
#                 print("o3")
#             elif target > nums[mid] and target > nums[start]:
#                 # target in first half
#                 end = mid - 1
#                 print("o4")

#             difference = (end - start) // 2
#             mid = start + difference
#             print(nums[mid])
#             print(nums[start:end+1])

#         return -1

class Solution:
    def search(self, nums: list[int], target: int) -> int:
        start = 0
        end = len(nums) - 1
        mid = end // 2

        while start <= end:
            if target == nums[mid]:
                return mid

            # which half is sorted
            if nums[start] <= nums[mid]:
                # left half is sorted

                # is it in the sorted half
                if target < nums[mid] and target >= nums[start]:
                    # yes it is in the sorted half
                    end = mid - 1
                else:
                    start = mid + 1
            else:
                # right half is sorted

                if target > nums[mid] and target <= nums[end]:
                    start = mid + 1
                else:
                    end = mid - 1

            difference = (end - start) // 2
            mid = start + difference
            print(nums[mid])
            print(nums[start:end+1])

        return -1


# Time Complexity:

nums_test_cases = [
    [4, 5, 6, 7, 0, 1, 2],
    [4, 5, 6, 7, 0, 1, 2],
    [1],
    [1, 3, 5]
]

target_test_cases = [0, 3, 0, 2]

solution = Solution()

for i in range(len(nums_test_cases)):
    output = solution.search(nums_test_cases[i], target_test_cases[i])
    print(
        f"Output: {output!r} for nums as {nums_test_cases[i]!r} "
        f"and target as {target_test_cases[i]!r}"
    )
