// My solution to 215 - Kth Largest Element in an Array

function findKthLargest(nums: number[], k: number): number {
    for(let i = 0; i < nums.length; i++) {
        heapifyUp(nums, i);
    }

    // Remove top number off the heap k many times. Return the kth number removed
    let kthLargestElement = -1;
    for(let i = 0; i < k; i++) {
        kthLargestElement = removeRoot(nums);
    }

    return kthLargestElement;
};

function removeRoot(heapArray: number[]): number {
    const root = heapArray[0];

    heapArray[0] = heapArray[heapArray.length - 1];
    heapArray.pop();

    heapifyDown(heapArray);

    return root;
}

function heapifyDown(heapArray: number[]) {
    const movingNumber = heapArray[0];
    let movingNumberIndex = 0;

    if (heapArray.length <= 1) {
        return;
    }

    let leftChildIndex = movingNumberIndex * 2 + 1;
    let rightChildIndex = movingNumberIndex * 2 + 2;

    while((leftChildIndex < heapArray.length && movingNumber < heapArray[leftChildIndex]) || (rightChildIndex < heapArray.length && movingNumber < heapArray[rightChildIndex])) {
        let maxChildIndex = leftChildIndex;

        if (rightChildIndex < heapArray.length && heapArray[rightChildIndex] > heapArray[leftChildIndex]) {
            maxChildIndex = rightChildIndex;
        }

        heapArray[movingNumberIndex] = heapArray[maxChildIndex];
        heapArray[maxChildIndex] = movingNumber;

        // Update leftChildIndex, rightChildIndex, movingNumberIndex
        movingNumberIndex = maxChildIndex;
        leftChildIndex = movingNumberIndex * 2 + 1;
        rightChildIndex = movingNumberIndex * 2 + 2;
        
    }
}

function heapifyUp(heapArray: number[], movingNumberIndex: number) {
    const movingNumber = heapArray[movingNumberIndex];

    if (movingNumberIndex < 1) {
        return;
    }

    let parentIndex = Math.ceil(movingNumberIndex / 2) - 1;
    while(movingNumber > heapArray[parentIndex]) {
        heapArray[movingNumberIndex] = heapArray[parentIndex];
        heapArray[parentIndex] = movingNumber;

        // update movingNumberIndex and parentIndex
        movingNumberIndex = parentIndex;
        parentIndex = Math.ceil(movingNumberIndex / 2) - 1;
    }
}

// Time Complexity:

const numsTestCases = [
    [3, 2, 1, 5, 6, 4],
    [3, 2, 3, 1, 2, 4, 5, 5, 6],
    [2,10,8,7,5,4,3,9,6,0,1],
    [3,2,3,1,2,4,5,5,6,7,7,8,2,3,1,1,1,10,11,5,6,2,4,7,8,5,6]
];
const kTestCases = [
    2, 
    4, 
    9,
    20
];

for (let i = 0; i < numsTestCases.length; i++) {
    const input = [...numsTestCases[i]]
    const output = findKthLargest(numsTestCases[i], kTestCases[i]);
    console.log(`Output: ${output} for nums as ${input} and k as ${kTestCases[i]}`);
}

export {};


// Max heap