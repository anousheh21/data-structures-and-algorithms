// My Solution to LeetCode problem 217 - Contains Duplicate

// Brute Force Approach
function containsDuplicate(nums: number[]): boolean {
    const numsSet = new Set<number>();

    for (let i = 0; i < nums.length; i++) {
        numsSet.add(nums[i]);
    }

    if(numsSet.size === nums.length) {
        return false
    } else { 
        return true
    }
};


// Time Complexity: O(n)

// const testCases = [[1, 2, 3, 1], [], [1,1,1,1,1], [1,2,3,4]];

// for(let i = 0; i < testCases.length; i++) {
//     const output = containsDuplicate(testCases[i]);
//     console.log(`Output: ${output} for input: ${testCases[i]}`);
// }

// Optimised Solution

function containsDuplicate2(nums: number[]): boolean {
    const numsSet = new Set<number>(nums);

    if(numsSet.size === nums.length) {
        return false
    } else { 
        return true
    }
};

// Time Complexity: O(n)

// const testCases2 = [[1, 2, 3, 1], [], [1,1,1,1,1], [1,2,3,4]];

// for(let i = 0; i < testCases2.length; i++) {
//     const output2 = containsDuplicate2(testCases2[i]);
//     console.log(`Output: ${output2} for input: ${testCases2[i]}`);
// }

// Optimised Solution 2

function containsDuplicate3(nums: number[]): boolean {
    const setNums = new Set<number>();

    for(let i = 0; i < nums.length; i++) {
        if(setNums.has(nums[i])) {
            return true;
        } else {
            setNums.add(nums[i]);
        }
    }

    return false;
};

// Time Complexity: O(n)

const testCases3 = [[1, 2, 3, 1], [], [1,1,1,1,1], [1,2,3,4]];

for(let i = 0; i < testCases3.length; i++) {
    const output3 = containsDuplicate3(testCases3[i]);
    console.log(`Output: ${output3} for input: ${testCases3[i]}`);
}

export {}