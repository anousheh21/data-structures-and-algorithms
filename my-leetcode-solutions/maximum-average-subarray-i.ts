// My solution to 643 - Maximum Average Subarray I

// Optimised Approach
function findMaxAverage(nums: number[], k: number): number {
    let start = 0;
    let end = k;

    // Calculate initial sum
    let sum = 0;
    for(let i = 0; i < k; i++) {
        sum += nums[i];
    }

    let maxAverage = sum / k;

    while(end < nums.length) {
        sum = sum - nums[start] + nums[end];
        const currentAverage = sum / k;

        if (currentAverage > maxAverage) {
            maxAverage = currentAverage;
        }

        start++;
        end++;
    }

    return maxAverage;
};

// Time Complexity: O(n)

// Brute Force Approach
function findMaxAverageBruteForce(nums: number[], k: number): number {
    let start = 0;
    let end = k;
    let maxAverage = -Infinity;

    while(end <= nums.length) {
        const window = nums.slice(start, end);

        let windowSum = 0;
        for(let i = 0; i < window.length; i++) {
            windowSum += window[i];
        }

        const average = windowSum / k;

        if (average > maxAverage) {
            maxAverage = average;
        }

        start++;
        end++;
    }

    return maxAverage;
};

// Time Complexity: O(n^2)

const numsTestCases = [[1, 12, -5, -6, 50, 3], [5], [1], [-1]];
const kTestCases = [4, 1, 1, 1];

for (let i = 0; i < numsTestCases.length; i++) {
    const output = findMaxAverage(numsTestCases[i], kTestCases[i]);
    console.log(`Output: ${output} for nums as ${JSON.stringify(numsTestCases[i])} and k as ${kTestCases[i]}`);
}

export {};
