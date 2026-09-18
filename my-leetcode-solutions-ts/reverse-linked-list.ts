// My solution to 206 - Reverse Linked List

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

function reverseList(head: ListNode | null): ListNode | null {
    let prev = head;
    let current = head?.next;
    let next = head?.next?.next;

    if (prev !== null && prev!.next !== null) {
        prev!.next = null;
    }

    if (prev !== null && current === null) {
        return prev;
    }

    while (current !== undefined && next !== null) {
        current!.next = prev;
        prev = current;
        current = next;
        next = next?.next;
    }

    if (current !== null && current !== undefined) {
        current.next = prev;
    }

    return current ? current : null;
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

const headTestCases = [
    [1, 2, 3, 4, 5],
    [1, 2],
    [],
    [1],
];

for (let i = 0; i < headTestCases.length; i++) {
    let head: ListNode | null = null;

    for (let j = headTestCases[i].length - 1; j >= 0; j--) {
        head = new ListNode(headTestCases[i][j], head);
    }

    const output = reverseList(head);
    console.log(`Output: ${JSON.stringify(output)} for head as ${JSON.stringify(headTestCases[i])}`);
}

export {};
