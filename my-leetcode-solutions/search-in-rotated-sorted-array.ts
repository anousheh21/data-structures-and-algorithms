// My solution to 33 - Search in Rotated Sorted Array

function search(nums: number[], target: number): number {
    let mid = Math.floor(nums.length / 2);
    let start = 0;
    let end = nums.length - 1;
    let leftRotated = false;

    while (start <= end) {
        if (nums[start] > nums[end]) {
            leftRotated = true;
        }

        if (leftRotated === true) {
            if(nums[mid] === target) {
                return mid;
            }  else if (target > nums[mid] && nums[mid] < nums[mid + 1]) {
                start = mid + 1;
            } else if (target > nums[mid] && nums[mid] > nums[mid + 1]) {
                return -1;
            } else if (target < nums[mid] && target >= nums[start]) {
                end = mid - 1;
            } else if (target < nums[mid] && target < nums[start]) {
                start = mid + 1;

                if (target > nums[start]) {
                    return -1;
                }
            }

        } else {
            if (nums[mid] === target) {
                return mid;
            } else if (target < nums[mid]) {
                end = mid - 1;
            } else if (target > nums[mid]) {
                start = mid + 1;
            }
        }

        const diff = end - start;
        mid = end - Math.ceil(diff / 2);
        leftRotated = false;
        // console.log(mid)
        // console.log(start)
        // console.log(end)
    }

    return -1;
};

// Time Complexity: O(log n)

const numsTestCases = [[4, 5, 6, 7, 0, 1, 2], [4, 5, 6, 7, 0, 1, 2], [1], [1], [5, 1, 3]];
const targetTestCases = [0, 3, 0, 2, 5];

for (let i = 0; i < numsTestCases.length; i++) {
    const output = search(numsTestCases[i], targetTestCases[i]);
    console.log(`Output: ${output} for nums as ${JSON.stringify(numsTestCases[i])} and target as ${targetTestCases[i]}`);
}

export {};

// bc it's left rotated, we know that if there are smaller values, they will always be on the right
// if end value is smaller than start value, we know it's been left rotated


// check if each segment contains a left rotated thing. 