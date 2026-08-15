// My solution to 704 - Binary Search

function search(nums: number[], target: number): number {
    // While loop while array not empty or smth like that, or while middle value is not null

    // check if mid = target. if yes, return it's index. mid might itself be an index

    let mid = Math.floor((nums.length) / 2);
    let start = 0;
    let end = nums.length - 1;

    console.log("initial mid", nums[mid]);
    console.log("initial start", nums[start]);
    console.log("initial end", nums[end]);

    // let count = 0;
    while (start <= end) {
        if (nums[mid] == target) {
            return mid;
        } else if (target < nums[mid]) {
            end = mid - 1;
        } else if (target > nums[mid]) {
            start = mid + 1;
        }

        // update mid
        const diff = end - start;
        mid = end - Math.ceil(diff / 2);
        // count++;

        console.log("mid", nums[mid]);
        console.log("start", nums[start]);
        console.log("end", nums[end]);
    }

    return -1;
};

// Time Complexity: O(log n)

const numsTestCases = [[-1, 0, 3, 5, 9, 12], [-1, 0, 3, 5, 9, 12], [5]];
const targetTestCases = [9, 2, 5];

for (let i = 0; i < numsTestCases.length; i++) {
    const output = search(numsTestCases[i], targetTestCases[i]);
    console.log(`Output: ${output} for nums as ${JSON.stringify(numsTestCases[i])} and target as ${targetTestCases[i]}`);
}

export {};
