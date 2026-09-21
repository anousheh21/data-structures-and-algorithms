# My solution to 206 - Reverse Linked List

# Definition for singly-linked list.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


class Solution:
    def reverseList(self, head: ListNode | None) -> ListNode | None:
        """
        You need to keep 3 pointers. 

        start from index 1

        current points to prev
        prev updates to current
        current updates to ahead
        ahead points to ahead.next

        start by ensuring it is long enough for all three pointers

        it will be a while loop, where it loops until ahead.next does not exist. but then you might need to do a final thing to connect ahead to the thing before
        """

        if head == None:
            return None
        elif head.next == None:
            return head

        prev = head
        current = head.next
        ahead = current.next if current is not None else None

        prev.next = None

        while ahead != None:
            # print(f"{prev.val}, {current.val}, {ahead.val}")
            print("hi")
            current.next = prev
        
            prev = current
            current = ahead
            ahead = ahead.next


        current.next = prev

        # bit at the end of the loop for putting current to prev
        print(f"{prev.val}, {current.val}")

        return current


# Time Complexity:

head_test_cases = [
    [1, 2, 3, 4, 5],
    [1, 2],
    [],
]

def linked_list_to_list(head):
    result = []
    current = head

    while current is not None:
        result.append(current.val)
        current = current.next

    return result

solution = Solution()

for i in range(len(head_test_cases)):
    head = None
    for value in reversed(head_test_cases[i]):
        head = ListNode(value, head)

    output = solution.reverseList(head)
    print(
        f"Output: {linked_list_to_list(output)} "
        f"for head as {head_test_cases[i]!r}"
    )
