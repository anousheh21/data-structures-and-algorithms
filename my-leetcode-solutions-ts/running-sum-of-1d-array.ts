function runningSum(nums: number[]): number[] {
    const runningSum: number[] = [];

    for(let i = 0; i < nums.length; i++) {
        // for each index, go through the array again up until that point and sum all the numbers up. Then append to runningSum.
        let currentSum = 0;

        for(let j = 0; j <= runningSum.length; j++) {
            currentSum += nums[j];
        }

        runningSum.push(currentSum);
    }

    return runningSum;
};

// keep track of current index
// remember the running sum up until that point

const nums = [1, 2, 3, 4];
const output = runningSum(nums);
console.log("Running Sum: ", output);

// Time Complexity: O(n^2)

function runningSumEfficient(nums: number[]): number[] {
    const runningSum: number[] = [];

    runningSum.push(nums[0]);
    for(let i = 1; i < nums.length; i++) {
        const current = runningSum[i - 1] + nums[i];
        runningSum.push(current);
    }

    return runningSum;
}

const efficientNums = [1, 2, 3, 4];
const efficientOutput = runningSumEfficient(efficientNums);
console.log("Efficient Running Sum: ", efficientOutput);

// Time Complexity: O(n)

export {}