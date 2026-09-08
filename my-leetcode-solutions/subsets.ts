// My solution to 78 - Subsets

function subsets(nums: number[]): number[][] {
    const results: number[][] = [[]];
    const currentState: number[] = [];

    function backtracking(results: number[][], currentState: number[]) {
        // Base case
        // stop once there are no more elements, or if there is a duplicate

        for (const num of nums) {
            // do we need another base case here, like if the thing already contains that number. or will that not return ,but just skip it?
            if (currentState.includes(num)) {
                return;
            }

            // push
            currentState.push(num);

            backtracking(results, currentState);

            results.push([...currentState]);
            // pop
            currentState.pop();
        }
    }

    backtracking(results, currentState);
    return results;
};

// Time Complexity:

const testCases = [[1, 2, 3], [0]];

for (let i = 0; i < testCases.length; i++) {
    const output = subsets(testCases[i]);
    console.log(`Output: ${JSON.stringify(output)} for nums as ${JSON.stringify(testCases[i])}`);
}

export {};


// Backtracking algorithm. Need to store results array between runs, which is an array of all possible subsets generated so far, and this is what you're going to return at the end