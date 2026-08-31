// My solution to 200 - Number of Islands

function numIslands(grid: string[][]): number {
    // Implement breadth first search
    const visitedSet = new Set<string>(`0,0`);
    const queue: number[][] = [[0,0]];

    const numberOfColumns = grid[0].length;
    const numberOfRows = grid.length;

    while (queue.length > 0) {
        const current = queue.shift();
        console.log(current);

        // check every neighbour of current and add them to the queue if they are not in the visited set, also add them to the visited set
        
        // first calculate neighbours of current to iterate through
        // current will have at most four neighbours
        const currentNeighbours: number[][] = [];
      
        if (current === undefined) {
            console.log("error, don't think this should have happened");
            return -1;
        }

        // check left neighbour
        if(current[0] - 1 >=0) {
            currentNeighbours.push([current[0] - 1, current[1]]);
        }

        // check right neighbour
        if(current[0] + 1 < numberOfColumns) {
            currentNeighbours.push([current[0] + 1, current[1]]);
        }

        // check upward neighbour
        if(current[1] - 1 >= 0) {
            currentNeighbours.push([current[0], current[1] - 1]);
        }

        // check downward neighbour
        if(current[1] + 1 < numberOfRows) {
            currentNeighbours.push([current[0], current[1] + 1]);
        }

        // now we have all the valid neighbours of the current node
        // iterate through the current neighbours, and if it is not in visited, then action on it
        for(const n of currentNeighbours) {
            const stringN: string = `${n[0]},${n[1]}`;
            if (!visitedSet.has(stringN)) {
                visitedSet.add(stringN);
                
                // add to queue
                queue.push(n);
            }
        }

    }
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