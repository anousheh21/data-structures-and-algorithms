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
    
};

// Time Complexity:

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
    []
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
