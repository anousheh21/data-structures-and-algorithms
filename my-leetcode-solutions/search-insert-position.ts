// My solution to 35 - Search Insert Position

function searchInsert(nums: number[], target: number): number {
    let mid = Math.floor(nums.length / 2);
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

    return mid + 1;
};

// Time Complexity: O(log n)

const numsTestCases = [[1, 3, 5, 6], [1, 3, 5, 6], [1, 3, 5, 6]];
const targetTestCases = [5, 2, 7];

for(let i = 0; i < numsTestCases.length; i++) {
    const output = searchInsert(numsTestCases[i], targetTestCases[i]);
    console.log(`Output: ${output} for nums as ${JSON.stringify(numsTestCases[i])} and target as ${targetTestCases[i]}`);
}

export {};
