// My solution to 78 - Subsets

function subsets(nums: number[]): number[][] {
    
};

// Time Complexity:

const testCases = [[1, 2, 3], [0]];

for (let i = 0; i < testCases.length; i++) {
    const output = subsets(testCases[i]);
    console.log(`Output: ${JSON.stringify(output)} for nums as ${JSON.stringify(testCases[i])}`);
}

export {};


// Backtracking algorithm. Need to store results array between runs, which is an array of all possible subsets generated so far, and this is what you're going to return at the end