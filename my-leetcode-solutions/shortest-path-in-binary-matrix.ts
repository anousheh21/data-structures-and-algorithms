// My solution to 1091 - Shortest Path in Binary Matrix

function shortestPathBinaryMatrix(grid: number[][]): number {
    
};

// Time Complexity:

const gridTestCases = [
    [[0, 1], [1, 0]],
    [[0, 0, 0], [1, 1, 0], [1, 1, 0]],
    [[1, 0, 0], [1, 1, 0], [1, 1, 0]],
];

for (let i = 0; i < gridTestCases.length; i++) {
    const output = shortestPathBinaryMatrix(gridTestCases[i]);
    console.log(`Output: ${output} for grid as ${JSON.stringify(gridTestCases[i])}`);
}

export {};
