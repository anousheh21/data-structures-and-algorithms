// My solution to 35 - Search Insert Position

function searchInsert(nums: number[], target: number): number {
    
};

// Time Complexity:

const numsTestCases = [[1, 3, 5, 6], [1, 3, 5, 6], [1, 3, 5, 6]];
const targetTestCases = [5, 2, 7];

for(let i = 0; i < numsTestCases.length; i++) {
    const output = searchInsert(numsTestCases[i], targetTestCases[i]);
    console.log(`Output: ${output} for nums as ${JSON.stringify(numsTestCases[i])} and target as ${targetTestCases[i]}`);
}

export {};
