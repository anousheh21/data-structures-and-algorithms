// My solution to 56 - Merge Intervals

function merge(intervals: number[][]): number[][] {
    // sort intervals 
    intervals.sort((a, b) => a[0] - b[0]);
    const mergedIntervals: number[][] = [];

    let currentStart = intervals[0][0];
    let currentEnd = intervals[0][1];
    let currentInterval = intervals[0];
    let last2Merged: boolean = true;

    // console.log("currentStart:", currentStart);
    // console.log("currentEnd:", currentEnd);
    // console.log("currentInterval:", currentInterval);

    for(let i = 0; i < intervals.length - 1; i++) {
        // let currentEnd = intervals[i][1];
        let nextStart = intervals[i+1][0];

        if (currentEnd >= nextStart) {
            // mergedIntervals.push([intervals[i][0], intervals[i+1][1]]);
            // update current end and current interval

            // currentEnd = intervals[i+1][1]
            // currentEnd = intervals[i+1][1] > intervals[i][1] ? intervals[i+1][1] : intervals[i][1];
             currentEnd = intervals[i+1][1] > currentInterval[1] ? intervals[i+1][1] : currentInterval[1];
            currentInterval = [currentStart, currentEnd];
            last2Merged = true;

        } else {
            mergedIntervals.push(currentInterval);
            currentStart = intervals[i+1][0];
            currentEnd = intervals[i+1][1];
            currentInterval = [currentStart, currentEnd];
            // mergedIntervals.push(currentInterval)
            last2Merged = false;
        }

        // console.log("nextStart:", nextStart);
        // console.log("currentStart:", currentStart);
        // console.log("currentEnd:", currentEnd);
        // console.log("currentInterval:", currentInterval);
    }

    // if (last2Merged === false) {
    //          mergedIntervals.push(currentInterval);
    //     currentStart = intervals[intervals.length - 1][0];
    //     currentEnd = intervals[intervals.length - 1][1];
    //     currentInterval = [currentStart, currentEnd];
    // }

    // const lastInterval = intervals[intervals.length - 1];

    // if(last2Merged === true) {
    //     mergedIntervals.push(currentInterval);
    // } else if (last2Merged === false && lastInterval[0] > currentInterval[1]) {
    //     mergedIntervals.push(lastInterval);
    // } else if (last2Merged === false && lastInterval[0] > currentInterval[1]) {
    //     currentInterval = [lastInterval[0], currentInterval[1]];
    //     mergedIntervals.push(currentInterval)
    // }
    

    mergedIntervals.push(currentInterval);

    // const lastInterval = intervals[intervals.length - 1];

    return mergedIntervals;
};

// Time Complexity: O(n)

const testCases = [
    [[1, 3], [2, 6], [8, 10], [15, 18]],
    [[1, 4], [4, 5]],
    [[4, 7], [1, 4]],
    [[1,4],[2,3]],
    [[2,3],[4,5],[6,7],[8,9],[1,10]]
];

for (let i = 0; i < testCases.length; i++) {
    const output = merge(testCases[i]);
    console.log(`Output: ${JSON.stringify(output)} for intervals as ${JSON.stringify(testCases[i])}`);
}

export {};


// currentStart = 1; currentEnd = 4; currentInterval = [1, 4]



// currentStart = 1; currentEnd = 3; currentInterval = [1, 3]; nextStart = 2
// currentEnd = 6; currentInteval = [1, 6]

// nextStart = 8; mergedIntervals = [[1, 6]]; currentStart = 8; currentEnd = 10

// nextStart = 15; 
