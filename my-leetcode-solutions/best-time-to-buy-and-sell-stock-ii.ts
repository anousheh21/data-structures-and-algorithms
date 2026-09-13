// My solution to 122 - Best Time to Buy and Sell Stock II

function maxProfit(prices: number[]): number {
    
};

// Time Complexity:

const testCases = [
    [7, 1, 5, 3, 6, 4],
    [1, 2, 3, 4, 5],
    [7, 6, 4, 3, 1],
];

for (let i = 0; i < testCases.length; i++) {
    const output = maxProfit(testCases[i]);
    console.log(`Output: ${output} for prices as ${testCases[i]}`);
}

export {};
