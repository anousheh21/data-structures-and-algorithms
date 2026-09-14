// My solution to 1091 - Shortest Path in Binary Matrix

function shortestPathBinaryMatrix(grid: number[][]): number {
    // DFS on a graph
    // Keep track of visited nodes
    // Count how many are visited on the current run
    // If you get to a dead end and are about to backtrack, if the number you're at is greater than the current total, then store that as the max, but you must end up at the bottom right. Actually, I don't think this is DFS. I think this is BFS. 


    // from the current

    // maybe a good first step is just writing out bfs, then you can adapt it to the problem

    // GENERIC BFS
    const queue: number[][] = [[0, 0]];
    const visited = new Set<number[]>();

    // grid of of size n x n
    const n: number = grid.length;

    // searched can be gotten rid of for the final solution - that's just for the generic bfs
    // const searched: number[][] = [];

    while (queue.length > 0) {
        // pop top value off queue and add it to visited
        const currentCoord = queue.pop()!;
        console.log(currentCoord);

        visited.add(currentCoord);

        // create a temp array with all nodes connected to the one popped off, that aren't in visited
        const tempConnections: number[][] = [];

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
            if(direction !== null && !visited.has(direction)) {
                tempConnections.push(direction);
            }
        }

        console.log(tempConnections)

        // Add all items in temp array to visited, and also to the back of the queue, and also to searched
        // and you need to change it to strings bc of the reference thing, it won't work properly
        visited.add(...tempConnections)

    }


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
