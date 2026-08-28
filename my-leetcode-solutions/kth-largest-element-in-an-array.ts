// My solution to 215 - Kth Largest Element in an Array

function findKthLargest(nums: number[], k: number): number {
    
};

// Time Complexity:

const numsTestCases = [[3, 2, 1, 5, 6, 4], [3, 2, 3, 1, 2, 4, 5, 5, 6]];
const kTestCases = [2, 4];

for (let i = 0; i < numsTestCases.length; i++) {
    const output = findKthLargest(numsTestCases[i], kTestCases[i]);
    console.log(`Output: ${output} for nums as ${numsTestCases[i]} and k as ${kTestCases[i]}`);
}

export {};
