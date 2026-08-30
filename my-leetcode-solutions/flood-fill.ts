// My solution to 733 - Flood Fill

function floodFill(image: number[][], sr: number, sc: number, color: number): number[][] {    
    const visited = new Set<string>();
    const startingPxColor = image[sr][sc];

    function helper(sr: number, sc: number) {
        const up = sr - 1;
        const down = sr + 1;
        const left = sc - 1;
        const right = sc + 1;

        // Base case 1: no adjacent pixels with the same colour
        if (sr < 0 || sr >= image.length) {
            return;
        };

        if (sc < 0 || sc >= image[0].length) {
            return;
        }

        if (image[sr][sc] !== startingPxColor) {
            return;
        }

        if (visited.has(`${sr},${sc}`)) {
            return;
        }

        visited.add(`${sr},${sc}`);
        image[sr][sc] = color;

        helper(up, sc);
        helper(down, sc);
        helper(sr, left);
        helper(sr, right);
    }

    helper(sr, sc);
    return image;
   
};

// Time Complexity:

const imageTestCases = [
    [[1, 1, 1], [1, 1, 0], [1, 0, 1]],
    [[0, 0, 0], [0, 0, 0]],
];
const srTestCases = [1, 0];
const scTestCases = [1, 0];
const colorTestCases = [2, 0];

for (let i = 0; i < imageTestCases.length; i++) {
    const output = floodFill(imageTestCases[i], srTestCases[i], scTestCases[i], colorTestCases[i]);
    console.log(`Output: ${JSON.stringify(output)} for image as ${JSON.stringify(imageTestCases[i])}, sr as ${srTestCases[i]}, sc as ${scTestCases[i]}, and color as ${colorTestCases[i]}`);
}

export {};

// To find neighbours, you find the position, so image[i][j], and then it's neighbours are image[i+1][j] and image [i][j+1]. But you need to check that i+1 < m and j+i < n

// Start at image[sr][sc]. Set originalColour to the starting colour of that pixel.
// DFS: for each node that has the same colour as originalColour, change it's colour to colour. As soon as you reach a node whose colour is not originalColor, that's a base case, so it will go back up the call stack. So for each bit, you check the two neighbours of the current node. 



// Depth first search. Base case is if a node does not exist or a node does not have the same colour as the original
// Can you do depth first search and print out the nodes in the order that they are visited?