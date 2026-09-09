// My solution to 39 - Combination Sum

function combinationSum(candidates: number[], target: number): number[][] {
    
};

// Time Complexity:

const candidatesTestCases = [[2, 3, 6, 7], [2, 3, 5], [2]];
const targetTestCases = [7, 8, 1];

for (let i = 0; i < candidatesTestCases.length; i++) {
    const output = combinationSum(candidatesTestCases[i], targetTestCases[i]);
    console.log(`Output: ${JSON.stringify(output)} for candidates as ${JSON.stringify(candidatesTestCases[i])} and target as ${targetTestCases[i]}`);
}

export {};
