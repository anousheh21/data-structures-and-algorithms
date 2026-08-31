// My solution to 200 - Number of Islands

function numIslands(grid: string[][]): number {
    // Implement breadth first search
    const start = [0,0];
    const visitedSet = new Set<string>([`${start[0]},${start[1]}`]);
    const queue: number[][] = [[0,0]];

    const numberOfColumns = grid[0].length;
    const numberOfRows = grid.length;

    const layersExplored: number[][][] = [];
    let layerSize = queue.length;
    let currentLayer: number[][] = [];

    while (queue.length > 0) {
        let current: number[];

        if(currentLayer.length < layerSize) {
            current = queue.shift()!
            currentLayer.push(current);
        } else {
            layersExplored.push(currentLayer);
            layerSize = queue.length;
            current = queue.shift()!
            currentLayer = [];
            currentLayer.push(current);
        }
        
        // first calculate neighbours of current to iterate through
        // current will have at most four neighbours
        const currentNeighbours: number[][] = [];

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

        for(const n of currentNeighbours) {
            const stringN: string = `${n[0]},${n[1]}`;
            if (!visitedSet.has(stringN)) {
                visitedSet.add(stringN);
                
                // add to queue
                queue.push(n);
               
            }
        }
    }

    layersExplored.push(currentLayer);

    for(const layer of layersExplored) {
        console.log(layer);
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