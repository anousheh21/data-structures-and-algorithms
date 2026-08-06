// My Solution to LeetCode problem 217 - Contains Duplicate

// Brute Force Approach
function containsDuplicate(nums: number[]): boolean {
    // Sets check for duplicate values

    // Convert the array into a set
    const numsSet = new Set<number>();

    for (let i = 0; i < nums.length; i++) {
        numsSet.add(nums[i]);
    }


    // if numsSet.length == nums.length, return true, otherwise return false

    if(numsSet.size === nums.length) {
        return false
    } else { 
        return true
    }
};


// Time Complexity: O(n)

const testCases = [[1, 2, 3, 1], [], [1,1,1,1,1], [1,2,3,4]];

for(let i = 0; i < testCases.length; i++) {
    const output = containsDuplicate(testCases[i]);
    console.log(`Output: ${output} for input: ${testCases[i]}`);
}

export {}