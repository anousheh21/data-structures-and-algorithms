// My solution to 56 - Merge Intervals

function merge(intervals: number[][]): number[][] {
    // sort intervals 
    intervals.sort((a, b) => a[0] - b[0]);
    const mergedIntervals: number[][] = [];

    
    for(let i = 0; i < intervals.length - 1; i++) {
        let currentEnd = intervals[i][1];
        let nextStart = intervals[i+1][0];

        if (currentEnd >= nextStart) {
            mergedIntervals.push([intervals[i][0], intervals[i+1][1]]);
        } else {
            mergedIntervals.push(intervals[i]);
        }
    }

    return mergedIntervals;
};

// Time Complexity:

const testCases = [
    [[1, 3], [2, 6], [8, 10], [15, 18]],
    [[1, 4], [4, 5]],
    [[4, 7], [1, 4]],
];

for (let i = 0; i < testCases.length; i++) {
    const output = merge(testCases[i]);
    console.log(`Output: ${JSON.stringify(output)} for intervals as ${JSON.stringify(testCases[i])}`);
}

export {};
