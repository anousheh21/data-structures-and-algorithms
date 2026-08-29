// My solution to 733 - Flood Fill

function floodFill(image: number[][], sr: number, sc: number, color: number): number[][] {
    
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