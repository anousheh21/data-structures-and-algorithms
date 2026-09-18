// My solution to 21 - Merge Two Sorted Lists

/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    let current1 = list1;
    let current2 = list2;

    // repoint the nodes

    if (!current1 && !current2) {
        return null;
    } else if (!current1) {
        return current2;
    } else if (!current2) {
        return current1;
    }

    let head: ListNode | null;
    if (current1.val <= current2.val) {
        head = current1;
        current1 = current1.next;
    } else {
        head = current2;
        current2 = current2.next;
    }

    let currentEnd: ListNode | null = head;

    while(current1 !== null && current2 !== null) {
        if (current1.val <= current2.val) {
            currentEnd.next = current1;
            currentEnd = current1;
            current1 = current1.next;
        } else {
            currentEnd.next = current2;
            currentEnd = current2;
            current2 = current2.next;
        }
    }

    if (current1 !== null) {
        currentEnd.next = current1;
    } else if (current2 !== null) {
        currentEnd.next = current2;
    }

    return head;
};

// Time Complexity: O(n)

class ListNode {
    val: number
    next: ListNode | null

    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

const list1TestCases = [[1, 2, 4], [], [], [5]];
const list2TestCases = [[1, 3, 4], [], [0], [1, 2, 4]];

for (let i = 0; i < list1TestCases.length; i++) {
    let list1: ListNode | null = null;
    let list2: ListNode | null = null;

    for (let j = list1TestCases[i].length - 1; j >= 0; j--) {
        list1 = new ListNode(list1TestCases[i][j], list1);
    }

    for (let j = list2TestCases[i].length - 1; j >= 0; j--) {
        list2 = new ListNode(list2TestCases[i][j], list2);
    }

    const output = mergeTwoLists(list1, list2);
    console.log(`Output: ${JSON.stringify(output)} for list1 as ${JSON.stringify(list1TestCases[i])} and list2 as ${JSON.stringify(list2TestCases[i])}`);
}

export {};
