# My solution to 21 - Merge Two Sorted Lists

# Definition for singly-linked list.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


class Solution:
    def mergeTwoLists(
        self, list1: ListNode | None, list2: ListNode | None
    ) -> ListNode | None:
        pass


# Time Complexity:

list1_test_cases = [
    [1, 2, 4],
    [],
    [],
]

list2_test_cases = [
    [1, 3, 4],
    [],
    [0],
]

solution = Solution()

for i in range(len(list1_test_cases)):
    list1 = None
    for value in reversed(list1_test_cases[i]):
        list1 = ListNode(value, list1)

    list2 = None
    for value in reversed(list2_test_cases[i]):
        list2 = ListNode(value, list2)

    output = solution.mergeTwoLists(list1, list2)
    print(
        f"Output: {output!r} for list1 as {list1_test_cases[i]!r} "
        f"and list2 as {list2_test_cases[i]!r}"
    )
