// My solution to 1 - Two Sum

function twoSum(nums: number[], target: number): number[] {
    const numPair = new Map<number, number>();

    for(let i = 0; i < nums.length; i++) {
        numPair.set(target-nums[i], i);
    }

    for(let i = 0; i < nums.length; i++) {
        if (numPair.has(nums[i]) && numPair.get(nums[i]) !== i) {
            return [i , numPair.get(nums[i])!];
        }
    }

    return [-1, -1]
};

// Time Complexity: O(n)

const numsTestCases = [[2,7,11,15], [3,2,4],[3,3]];
const targetTestCases = [9, 6, 6];
for(let i = 0; i < numsTestCases.length; i++) {
    let output = twoSum(numsTestCases[i], targetTestCases[i]);
    console.log(`Output: ${output} for nums as ${numsTestCases[i]} and the target as ${targetTestCases[i]}`);
}

export {}