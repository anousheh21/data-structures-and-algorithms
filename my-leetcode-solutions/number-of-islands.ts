// My solution to 200 - Number of Islands

function numIslands(grid: string[][]): number {
    
};

// Time Complexity:

const gridTestCases = [
    [
        ["1", "1", "1", "1", "0"],
        ["1", "1", "0", "1", "0"],
        ["1", "1", "0", "0", "0"],
        ["0", "0", "0", "0", "0"],
    ],
    [
        ["1", "1", "0", "0", "0"],
        ["1", "1", "0", "0", "0"],
        ["0", "0", "1", "0", "0"],
        ["0", "0", "0", "1", "1"],
    ],
];

for (let i = 0; i < gridTestCases.length; i++) {
    const output = numIslands(gridTestCases[i]);
    console.log(`Output: ${output} for grid as ${JSON.stringify(gridTestCases[i])}`);
}

export {};

// I think this might be a breadth first search, where you search each layer
// You have a flag, for example island = false
// If island = true and your breadth first search layer has only 0', and switch island to false.
// Then, when you have a row that has at least one bit of land, you turn island back to true and add 1 to your island count.