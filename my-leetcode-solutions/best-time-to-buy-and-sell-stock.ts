// My Solution to Leetcode Problem 121 - Best Time To Buy and Sell Stock

// Brute Force Solution
function maxProfit(prices: number[]): number {
    const dailyProfit: number[] = [];

    for(let i = 0; i < prices.length - 1; i++) {
        // Find largest number after that in the array (Math.max on sliced array)
        const remainingPrices: number[] = prices.slice(i+1);
        const maxComparedPrice = Math.max(...remainingPrices);

        // Subtract prices[i] from max value
        const difference = maxComparedPrice - prices[i];

        // Push max value to the daily profit array
        if (difference > 0) {
            dailyProfit.push(difference);
        } else {
            dailyProfit.push(0);
        }
    }

    const maxProfitOutput = dailyProfit.length > 0 ? Math.max(...dailyProfit) : 0;

    return maxProfitOutput;
};

// const prices = [7,1,5,3,6,4];
// // const prices = [7];
// const outputMaxProfit = maxProfit(prices);
// console.log(outputMaxProfit);

// Time Complexity of Brute Force Solution: O(n^2)

function maxProfitOptimised(prices: number[]): number {
    const dailyProfit: number[] = [];
    let minValue = prices[0];
    
    for(let i = 0; i < prices.length; i++) {
        if (prices[i] < minValue) {
            minValue = prices[i]
        }

        const difference = prices[i] - minValue;

        if (difference > 0) {
            dailyProfit.push(difference);
        } else {
            dailyProfit.push(0);
        }
    }

    const maxProfitOutput = dailyProfit.length > 0 ? Math.max(...dailyProfit) : 0;

    return maxProfitOutput;
}

// const pricesOptimised = [7,1,5,3,6,4];
// // const pricesOptimised = [7];
// // const pricesOptimised = [2, 4, 1];
// const outputMaxProfitOptimised = maxProfitOptimised(pricesOptimised);
// console.log(outputMaxProfitOptimised);

// Time Complexity of Optimal Solution: O(n)

// The optimised solution can be optimised further, because the algorithm does not actually need to store every daily profit. The below solution is the optimisation for that.

function maxProfit2(prices: number[]): number {
    let maxProfit = 0;
    let minValue = prices[0];
    
    for(let i = 0; i < prices.length; i++) {
        if (prices[i] < minValue) {
            minValue = prices[i]
        }

        const difference = prices[i] - minValue;

        if (difference > maxProfit) {
            maxProfit = difference;
        } 
    }

    return maxProfit;
}

const prices2 = [7,1,5,3,6,4];
// const pricesOptimised = [7];
// const pricesOptimised = [2, 4, 1];
const outputMaxProfit2 = maxProfit2(prices2);
console.log(outputMaxProfit2);

// Time Complexity of Optimal Solution: O(n)

export {}