# My solution to 141 - Linked List Cycle

from typing import Optional


# Definition for singly-linked list.
class ListNode:
    def __init__(self, x):
        self.val = x
        self.next = None


class Solution:
    def hasCycle(self, head: Optional[ListNode]) -> bool:
        """
        Do we use slow and fast pointers, where if the slow pointer ever equals the fast pointer, return true. But if we get to a node where node.next = None, then return false.
        Faster pointer moves twice as fast as the slow pointer
        """

        if head == None or head.next == None:
            return False


        slow = head
        fast = head.next

        while fast != None:
            if fast == slow:
                return True

            fast = fast.next 

            if fast == slow:
                return True

            fast = fast.next if fast is not None else None
            slow = slow.next

        return False



# Time Complexity:

head_test_cases = [
    [3, 2, 0, -4],
    [1, 2],
    [1],
    [1, 2]
]

pos_test_cases = [1, 0, -1, -1]

solution = Solution()

for i in range(len(head_test_cases)):
    nodes = [ListNode(value) for value in head_test_cases[i]]

    for j in range(len(nodes) - 1):
        nodes[j].next = nodes[j + 1]

    if nodes and pos_test_cases[i] != -1:
        nodes[-1].next = nodes[pos_test_cases[i]]

    head = nodes[0] if nodes else None
    output = solution.hasCycle(head)
    print(
        f"Output: {output!r} for head as {head_test_cases[i]!r} "
        f"and pos as {pos_test_cases[i]!r}"
    )
