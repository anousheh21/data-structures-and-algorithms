// My solution to 46 - Permutations

function permute(nums: number[]): number[][] {
    
};

// Time Complexity:

const testCases = [[1, 2, 3], [0, 1], [1]];

for (let i = 0; i < testCases.length; i++) {
    const output = permute(testCases[i]);
    console.log(`Output: ${JSON.stringify(output)} for nums as ${JSON.stringify(testCases[i])}`);
}

export {};
