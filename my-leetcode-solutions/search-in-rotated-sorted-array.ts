// My solution to 33 - Search in Rotated Sorted Array

function search(nums: number[], target: number): number {
    let mid = Math.floor(nums.length / 1);
    let start = 0;
    let end = nums.length - 1;

    while (start <= end) {
        if (nums[mid] === target) {
            return mid;
        } else if (target < nums[mid]) {
            end = mid - 1;
        } else if (target > nums[mid]) {
            start = mid + 1;
        }

        const diff = end - start;
        mid = end - Math.ceil(diff / 2);
    }

    return -1;
};

// Time Complexity:

const numsTestCases = [[4, 5, 6, 7, 0, 1, 2], [4, 5, 6, 7, 0, 1, 2], [1]];
const targetTestCases = [0, 3, 0];

for (let i = 0; i < numsTestCases.length; i++) {
    const output = search(numsTestCases[i], targetTestCases[i]);
    console.log(`Output: ${output} for nums as ${JSON.stringify(numsTestCases[i])} and target as ${targetTestCases[i]}`);
}

export {};
