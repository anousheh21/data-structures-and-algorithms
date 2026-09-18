// My solution to 122 - Best Time to Buy and Sell Stock II

function maxProfit(prices: number[]): number {
    let maxProfit = 0;
    let currentHeldShareIndex = 0;
    let holdingShare = false;

      for(let i = 0; i < prices.length; i++) {
        if (!holdingShare) {
            // check decreasing values. as soon as you find an increasing value, hold the share before the increasing value
            if(prices[i] < prices[i + 1]) {
                currentHeldShareIndex = i;
                holdingShare = true;
            }

            
        } else if (holdingShare) {
            // check increasing values. as soon as you find a decreasing value, sell the share before the decreasing value
            if(prices[i] > prices[i + 1]) {
                maxProfit = maxProfit + (prices[i] - prices[currentHeldShareIndex]);
                holdingShare = false;
            } 
        }
    }

    if (holdingShare) {
        maxProfit = maxProfit + (prices[prices.length - 1] - prices[currentHeldShareIndex]);
    }

    return maxProfit;
};

// if you are holding a share, you keep holding that while values increase. when you find a decreasing value, you sell at the one before that.
// if you are not holding a share, you check decreasing values, and as soon as it increases, you hold the share before it increases

// Time Complexity:

const testCases = [
    [7, 1, 5, 3, 6, 4],
    [1, 2, 3, 4, 5],
    [7, 6, 4, 3, 1],
    [1, 2],
    [2, 1, 4],
];

for (let i = 0; i < testCases.length; i++) {
    const output = maxProfit(testCases[i]);
    console.log(`Output: ${output} for prices as ${testCases[i]}`);
}

export {};
