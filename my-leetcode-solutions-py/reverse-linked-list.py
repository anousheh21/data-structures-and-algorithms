# My solution to 206 - Reverse Linked List

# Definition for singly-linked list.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


class Solution:
    def reverseList(self, head: ListNode | None) -> ListNode | None:
        


# Time Complexity:

head_test_cases = [
    [1, 2, 3, 4, 5],
    [1, 2],
    [],
]

solution = Solution()

for i in range(len(head_test_cases)):
    head = None
    for value in reversed(head_test_cases[i]):
        head = ListNode(value, head)

    output = solution.reverseList(head)
    print(f"Output: {output!r} for head as {head_test_cases[i]!r}")
