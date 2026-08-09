// My solution to 643 - Maximum Average Subarray I

function findMaxAverage(nums: number[], k: number): number {
    
};

// Time Complexity:

const numsTestCases = [[1, 12, -5, -6, 50, 3], [5]];
const kTestCases = [4, 1];

for (let i = 0; i < numsTestCases.length; i++) {
    const output = findMaxAverage(numsTestCases[i], kTestCases[i]);
    console.log(`Output: ${output} for nums as ${JSON.stringify(numsTestCases[i])} and k as ${kTestCases[i]}`);
}

export {};
