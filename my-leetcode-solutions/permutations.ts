// My solution to 46 - Permutations

function permute(nums: number[]): number[][] {
    const result: number[][] = [];
    let current: number[] = []
    
    function dfs(result: number[][], current: number[]) {
        for (const num of nums) {
            

            if (current.length === nums.length) {
                result.push([...current])
                return;
            }


            if (current.includes(num)) {
                // Continue skips the rest of the current loop iteration and moves straight to the next one
                continue;
            }

            current.push(num);
            dfs(result, current); 
            current.pop();
        }
    }

    dfs(result, current)
    return result;
};

// Time Complexity:

const testCases = [[1, 2, 3], [0, 1], [1]];

for (let i = 0; i < testCases.length; i++) {
    const output = permute(testCases[i]);
    console.log(`Output: ${JSON.stringify(output)} for nums as ${JSON.stringify(testCases[i])}`);
}

export {};
