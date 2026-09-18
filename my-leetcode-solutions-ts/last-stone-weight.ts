// My solution to 1046 - Last Stone Weight

function lastStoneWeight(stones: number[]): number {
    // Turn stones into a max heap - loop through and heapifyUp every node
    for(let i = 0; i < stones.length; i++) {
        heapifyUp(stones, i);
    }

    while(stones.length > 1) {
        // Remove max value and store it in variable y. The removal function should ensure the thing is still a heap.
        let y = removeRoot(stones);
    
        // Remove max value and store it in variable x
        const x = removeRoot(stones);

        // If y > x, do y - x and add that node back into the heap. If x==y, do not add back to the heap
        if (y > x) {
            y = y - x;
            addValue(stones, y);
        }
    }

    if (stones.length === 1) {
        return stones[0];
    } else {
        return 0;
    }
};

// Adds new value to the heap and then heapifies up
function addValue(heapArray: number[], newValue: number) {
    heapArray.push(newValue);
    heapifyUp(heapArray, heapArray.length - 1);
}

// Removes and returns the root from the heap and then heapifies down
function removeRoot(heapArray: number[]) {
    const rootValue = heapArray[0];
    const movedValue = heapArray[heapArray.length - 1];

    heapArray[0] = movedValue;
    heapArray.pop();
    heapifyDown(heapArray);

    return rootValue;
}

// Heapify up is used when you add a new value to the heap, because you send the new value up
function heapifyUp(heapArray: number[], startIndex: number) {
    let movingValueIndex = startIndex;
    const movingValue = heapArray[movingValueIndex];

    if (movingValueIndex === 0) {
        return;
    }

    // Stopping condition: movingValue is smaller than it's parent or movingValue has no parent
    let parentIndex = Math.ceil(movingValueIndex / 2) - 1;
    let parent = heapArray[parentIndex];
    while(movingValue > parent) {
        // Swap parent and moving value
        heapArray[movingValueIndex] = parent;
        heapArray[parentIndex] = movingValue;

        // Update values
        movingValueIndex = parentIndex;

        if (movingValueIndex === 0) {
            return;
        }

        parentIndex = Math.ceil(movingValueIndex / 2) - 1;
        parent = heapArray[parentIndex]
    }
}

// Heapify down is when you remove a value, because it sends the new root down the heap until it ends up in the correct position
function heapifyDown(heapArray: number[]) {
    let movingValueIndex = 0;
    const movingValue = heapArray[0];

    let leftChildIndex = 2 * movingValueIndex + 1;
    let rightChildIndex = 2 * movingValueIndex + 2;

    while(leftChildIndex < heapArray.length && (heapArray[movingValueIndex] <= heapArray[leftChildIndex] || heapArray[movingValueIndex] <= heapArray[rightChildIndex])) {
        let minChildIndex = leftChildIndex;

        if (rightChildIndex < heapArray.length && heapArray[rightChildIndex] >= heapArray[leftChildIndex]) {
            minChildIndex = rightChildIndex;
        }

        // swap movingValue and minChild
        heapArray[movingValueIndex] = heapArray[minChildIndex];
        heapArray[minChildIndex] = movingValue;

        // update movingValueIndex and leftChildIndex
        movingValueIndex = minChildIndex;
        leftChildIndex = 2 * movingValueIndex + 1;
        rightChildIndex = 2 * movingValueIndex + 2;
    }
}

// Time Complexity:

const testCases = [
    [2, 7, 4, 1, 8, 1], 
    [1], 
    [2,6,6,9,4,3], 
    [6,8,10,1,10,2,7,4]
];

for (let i = 0; i < testCases.length; i++) {
    const input = [...testCases[i]]
    const output = lastStoneWeight(testCases[i]);
    console.log(`Output: ${output} for input: ${input}`);
}

export {};

// Write a function that turns the array into a priority heap
// Run that function
// Loop until array has length 1 or 0
// Remove the max value and store it as y
// Rerun the function
// Remove the max value and store it as x
// If x==y, both stones are destroyed
// If y > x, do y - x and add that node back into the heap. If x==y, do not add back to the heap
// Turn into a heap