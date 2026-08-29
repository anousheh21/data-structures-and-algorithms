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
