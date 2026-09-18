// My solution to 33 - Search in Rotated Sorted Array

function search(nums: number[], target: number): number {
    let mid = Math.floor(nums.length / 2);
    let start = 0;
    let end = nums.length - 1;

    while (start <= end) {
            if (nums[mid] === target) {
                return mid;
            } else {
                let leftSorted = true;
                let rightSorted = true;

                if((nums[mid] - nums[start]) < 0) {
                    leftSorted = false;
                } else if ((nums[end] - nums[mid]) < 0) {
                    rightSorted = false;
                }

                if(target < nums[mid]) {
                    if(leftSorted && rightSorted) {
                        end = mid - 1;
                    } else if (leftSorted && !rightSorted) {
                        if (target < nums[start]) {
                            start = mid + 1;
                        } else if (target > nums[start]) {
                            end = mid - 1;
                        } else if (target === nums[start]) {
                            return start;
                        }
                    } else if (!leftSorted && rightSorted) {
                        end = mid - 1;
                    }
                } else if (target > nums[mid]) {
                    if(leftSorted && rightSorted) {
                        start = mid + 1;
                    } else if (leftSorted && !rightSorted) {
                        start = mid + 1;
                    } else if (!leftSorted && rightSorted) {
                        if (target > nums[end]) {
                            end = mid - 1;
                        } else if (target < nums[end]) {
                            start = mid + 1;
                        } else if (target === nums[end]) {
                            return end;
                        }
                    }
                }
            }
        

        const diff = end - start;
        mid = end - Math.ceil(diff / 2);
    }

    return -1;
};

// Time Complexity: O(log n)

const numsTestCases = [[4, 5, 6, 7, 0, 1, 2], [4, 5, 6, 7, 0, 1, 2], [1], [1], [5, 1, 3], [4,5,6,7,0,1,2], [3,5,1]];
const targetTestCases = [0, 3, 0, 2, 5, 1, 3];

for (let i = 0; i < numsTestCases.length; i++) {
    const output = search(numsTestCases[i], targetTestCases[i]);
    console.log(`Output: ${output} for nums as ${JSON.stringify(numsTestCases[i])} and target as ${targetTestCases[i]}`);
}

export {};

// bc it's left rotated, we know that if there are smaller values, they will always be on the right
// if end value is smaller than start value, we know it's been left rotated


// check if each segment contains a left rotated thing. 