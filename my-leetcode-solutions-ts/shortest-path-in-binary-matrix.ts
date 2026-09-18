// My solution to 1091 - Shortest Path in Binary Matrix

function shortestPathBinaryMatrix(grid: number[][]): number {
    const queue: number[][] = [[0, 0]];
    const visited = new Set<string>();
    let minLength = 0;
    let currentCoord: number[] = [];

    let levelBoundaryRem = 1;
    let nextLevelCount = 0;

    // grid of of size n x n
    const n: number = grid.length;

    if (grid[0][0] === 1) {
        return -1;
    }

    while (queue.length > 0) {
        currentCoord = queue.shift()!;
        // console.log(grid[currentCoord[0]][currentCoord[1]]);

        const currentVal = grid[currentCoord[0]][currentCoord[1]];

        // console.log(grid[currentCoord[0]][currentCoord[1]]);
        // console.log(currentCoord)

        visited.add(`${currentCoord[0]},${currentCoord[1]}`);

        const up = currentCoord[0] - 1 >= 0 ? [currentCoord[0] - 1, currentCoord[1]] : null;
        const down = currentCoord[0] + 1 < n ? [currentCoord[0] + 1, currentCoord[1]] : null;
        const left = currentCoord[1] - 1 >= 0 ? [currentCoord[0], currentCoord[1] - 1] : null;
        const right = currentCoord[1] + 1 < n ? [currentCoord[0], currentCoord[1] + 1] : null;

        const upLeft = (up !== null && left !== null) ? [currentCoord[0] - 1, currentCoord[1] - 1] : null;
        const upRight = (up !== null && right !== null) ? [currentCoord[0] - 1, currentCoord[1] + 1] : null;
        const downLeft = (down !== null && left !== null) ? [currentCoord[0] + 1, currentCoord[1] - 1] : null;
        const downRight = (down !== null && right !== null) ? [currentCoord[0] + 1, currentCoord[1] + 1]: null;

        const directionArray = [up, down, left, right, upLeft, upRight, downLeft, downRight];

        for(const direction of directionArray) {
            if(direction !== null && !visited.has(`${direction[0]},${direction[1]}`)) {
                visited.add(`${direction[0]},${direction[1]}`);

                if (grid[direction[0]][direction[1]] === 0) {
                    queue.push(direction);
                    nextLevelCount++;
                }
                
            }
        }

        levelBoundaryRem--;

        // if(levelBoundaryRem === 0) {
        //     levelBoundaryRem = nextLevelCount;
        //     nextLevelCount = 0;
        //     minLength++;
        // }

        if (currentCoord[0] === n - 1 && currentCoord[1] === n - 1) {
            return minLength + 1;
        }


        if(levelBoundaryRem === 0) {
            levelBoundaryRem = nextLevelCount;
            nextLevelCount = 0;
            minLength++;
        }

    }

    console.log(currentCoord)
    return -1;
};

// Time Complexity:

const gridTestCases = [
    [[0, 1], [1, 0]],
    [[0, 0, 0], [1, 1, 0], [1, 1, 0]],
    [[1, 0, 0], [1, 1, 0], [1, 1, 0]],
    [[0,0,1,0],[1,0,1,0],[1,1,0,1],[0,0,0,0]],
    [[0,1,0,0,0],[0,1,0,0,0],[0,0,0,0,1],[0,1,1,1,0],[0,1,0,0,0]],
];

for (let i = 0; i < gridTestCases.length; i++) {
    const output = shortestPathBinaryMatrix(gridTestCases[i]);
    console.log(`Output: ${output} for grid as ${JSON.stringify(gridTestCases[i])}`);
}

export {};
