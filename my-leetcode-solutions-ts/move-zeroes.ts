// My solution to the LeetCode problem 283 - Move Zeroes

function moveZeroes(nums: number[]): void {
    let zeroCount = 0;
    
    for(let i = 0; i < nums.length; i++) {
        if (nums[i]==0) {
            zeroCount++;
        }
        if(zeroCount > 0 && nums[i] != 0) {
            nums[i-zeroCount] = nums[i];
            nums[i] = 0;
        }

    }
};

const nums = [[0,1,0,3,12], [0], [1,3,2], [0,0,0,0,1]];
for(let i = 0; i < nums.length; i++) {
    const input = [...nums[i]];
    moveZeroes(nums[i]);
    console.log(`Result: ${nums[i]} for input: ${input}`);
}

// Time Complexity: O(n)

export {}