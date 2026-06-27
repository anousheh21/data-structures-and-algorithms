// ListNode Class
class ListNode {
    val: number;
    next: ListNode | null;

    constructor(val = 0, next: ListNode | null = null) {
        this.val = val;
        this.next = next;
    }
}


// Function that traverses through the linked list
function traverseLinkedList(head: ListNode | null) {
    let current = head;

    while (current !== null) {
        console.log(current.val);
        current = current.next;
    }
}


// Function that adds a new node to the linked list
function addNode(prevValue: number, insertValue: number, head: ListNode | null) {
    // Find prevValue
    let current = head;

    while (current !== null && current.val !== prevValue) {
        current = current.next;
    }

    if (current === null) {
        console.error("Error: the value you want to insert after does not exist");
        return;
    }

    const prevNode = current;

    // Insert insertValue
    const newNode = new ListNode(insertValue, current.next);
    prevNode.next = newNode;
}


// Function that deletes a node from the linked list
function deleteNode(head: ListNode | null, deleteValue: number) {
    // Find node with delete value
    let current = head;
    let currentSave = head;

    if (head !== null && deleteValue === head.val) {
        head = head.next;
        return head;
    }

    while (current !== null && current.val !== deleteValue) {
        currentSave = current;
        current = current.next;
    }

    if (currentSave === null || current === null) {
        console.error("Error: the value you want to delete does not exist");
        return head;
    }

    // Delete that node
    currentSave.next = current.next;
    return head;
}

// Function to reverse a linked list
function reverseLinkedList(head: ListNode | null) {
    if (head === null || head.next === null) {
        return head;
    }

    let current: ListNode | null = head;
    let next: ListNode | null = head.next;
    let saveNext: ListNode | null;

    head.next = null;

    while (next !== null) { 
        // Saves next value before re-assigning next so that it's not lost     
        saveNext = next.next;

        // Points next.next to current, thereby reversing this part of the list
        next.next = current;

        // current moves one forward in the array
        current = next;

        // next moves one forward in the array
        next = saveNext;
    }
    
    head = current;
    return head;
}

// Create a linked list
let head: ListNode | null = new ListNode(2);
const second = new ListNode(8);
const third = new ListNode(3);
const fourth = new ListNode(10);
const fifth = new ListNode(7);

head.next = second;
second.next = third;
third.next = fourth;
fourth.next = fifth;

// Run functions
console.log('INITIAL');
traverseLinkedList(head);

// addNode(7, 222, head);

// console.log('\nAFTER ADDING');
// traverseLinkedList(head);


// head = deleteNode(head, 2);

// console.log('\nAFTER DELETING');
// traverseLinkedList(head);


console.log('\nAFTER REVERSING');
head = reverseLinkedList(head);
traverseLinkedList(head);