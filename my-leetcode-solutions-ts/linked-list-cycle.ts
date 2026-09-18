// My solution to 141 - Linked List Cycle

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
function hasCycle(head: ListNode | null): boolean {
    let slow = head;
    let fast = head?.next;

    // Fast moves 2 for every 1 slow moves. If fast == slow before fast hits null, return true, otherwise false. 
    while(fast !== null && slow !== null) {
        if (fast === slow) {
            return true;
        }

        slow = slow.next;
        fast = fast?.next?.next;
    }

    return false;

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
    [3, 2, 0, -4],
    [1, 2],
    [1],
];
const posTestCases = [1, 0, -1];

for (let i = 0; i < headTestCases.length; i++) {
    const nodes = headTestCases[i].map((value) => new ListNode(value));

    for (let j = 0; j < nodes.length - 1; j++) {
        nodes[j].next = nodes[j + 1];
    }

    if (posTestCases[i] >= 0) {
        nodes[nodes.length - 1].next = nodes[posTestCases[i]];
    }

    const head = nodes[0] ?? null;
    const output = hasCycle(head);
    console.log(`Output: ${output} for head as ${JSON.stringify(headTestCases[i])} and pos as ${posTestCases[i]}`);
}

export {};
