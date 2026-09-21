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

        if list1 == None and list2 == None:
            return None
        elif list1 == None:
            return list2
        elif list2 == None:
            return list1

        head = list1
        if list2.val < list1.val:
            head = list2
            list2 = list2.next
        else:
            list1 = list1.next

        mainCurrent = head
        # mainCurrentNext = mainCurrent.next if mainCurrent is not None else None

        list1Next = list1.next if list1 is not None else None
        list2Next = list2.next if list2 is not None else None

        print(mainCurrent.val)

        while list1 is not None and list2 is not None:
            print(f"{list1.val}, {list2.val}")
            if list1.val < list2.val:
                mainCurrent.next = list1
                list1 = list1Next
                list1Next = list1.next if list1 is not None else None
            else:
                mainCurrent.next = list2
                list2 = list2Next
                list2Next = list2.next if list2 is not None else None

            mainCurrent = mainCurrent.next


        if list1 is not None:
            mainCurrent.next = list1
        elif list2 is not None:
            mainCurrent.next = list2

        # connect end to remainder of non-finished rode
        return head


# Time Complexity:

def linked_list_to_list(head):
    values = []

    current = head
    while current is not None:
        values.append(current.val)
        current = current.next

    return values


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
        f"Output: {linked_list_to_list(output)!r} "
        f"for list1 as {list1_test_cases[i]!r} "
        f"and list2 as {list2_test_cases[i]!r}"
    )
