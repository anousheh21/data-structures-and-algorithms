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


// If the numbers are in strict descending order, output 0

// Find min price. Find max price after that.
// Will that cover every case though?
// For each number in the array, find the largest number after it.

/*
    Create new array that is the same length as the prices array.
    For each number in the array, find the largest number after that in the array.
        If there is no number bigger, in the new array, write 0.
        If there are larger numbers, subtract the initial number from the largest number, and write that in the new array.

        Return the max value in the new array.
*/

// Time Complexity of Brute Force Solution: O(n^2)


// function useMinPrice(prices: number[]): number {
//     const minPrice = Math.min(...prices);
//     const minPriceIndex = prices.indexOf(minPrice);

//     const remainingPrices = prices.slice(minPriceIndex + 1);
//     const maxPrice = Math.max(...remainingPrices);

//     const maxPriceIndex = prices.indexOf(maxPrice);

//     // return [minPrice, maxPrice, minPriceIndex, maxPriceIndex];

//      let profit: number;
//     // Check that max price comes after min price
//     if (maxPriceIndex > minPriceIndex) {
//         profit = maxPrice - minPrice;
//     } else {
//         profit = 0;
//     }

//     return profit;
// }

// function useMaxPrice(prices: number[]): number {
//     const maxPrice = Math.max(...prices);
//     const maxPriceIndex = prices.indexOf(maxPrice);

//     const remainingPrices = prices.slice(0, maxPriceIndex);
//     const minPrice = Math.min(...remainingPrices);
//     const minPriceIndex = prices.indexOf(minPrice);

//     // return [minPrice, maxPrice, minPriceIndex, maxPriceIndex];
//      let profit: number;
//     // Check that max price comes after min price
//     if (maxPriceIndex > minPriceIndex) {
//         profit = maxPrice - minPrice;
//     } else {
//         profit = 0;
//     }

//     return profit;
// }

// // Optimised Solution
// function maxProfitOptimised(prices: number[]): number {
//     // const [minPriceMin, maxPriceMin, minPriceIndexMin, maxPriceIndexMin] = useMinPrice(prices);

//     // const [minPriceMax, maxPriceMax, minPriceIndexMax, maxPriceIndexMax] = useMaxPrice(prices);

//     // let profit: number;
//     // // Check that max price comes after min price
//     // if (maxPriceIndex > minPriceIndex) {
//     //     profit = maxPrice - minPrice;
//     // } else {
//     //     profit = 0;
//     // }

//     const minPriceProfit = useMinPrice(prices);
//     const maxPriceProfit = useMaxPrice(prices);

//     let profit;
//     if (minPriceProfit >= maxPriceProfit) {
//         profit = minPriceProfit;
//     } else if (minPriceProfit < maxPriceProfit) {
//         profit = maxPriceProfit;
//     } else {
//         profit = 0;
//     }

//     return profit;
// };


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
    // const dailyProfit: number[] = [];
    let maxProfit = 0;
    let minValue = prices[0];
    
    for(let i = 0; i < prices.length; i++) {
        if (prices[i] < minValue) {
            minValue = prices[i]
        }

        const difference = prices[i] - minValue;

        if (difference > 0 && difference > maxProfit) {
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