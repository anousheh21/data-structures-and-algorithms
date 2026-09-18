// My Solution to 167 - Two Sum II - Input Array is Sorted

function twoSum(numbers: number[], target: number): number[] {
    let left = 0;
    let right = numbers.length - 1;

    let outputArray: number[] = [];
    while (left < right) {
        const currentSum = numbers[left] + numbers[right];
        if (currentSum === target) {
            outputArray = [left + 1, right + 1];
            return outputArray;
        } else if (currentSum < target) {
            left++;
        } else if (currentSum > target) {
            right--;
        } 
    }

    return [-1]
};

// Time Complexity:

const numbersTestCases = [[2, 7, 11, 15], [2, 3, 4], [-1, 0]];
const targetTestCases = [9, 6, -1];

for(let i = 0; i < numbersTestCases.length; i++) {
    const output = twoSum(numbersTestCases[i], targetTestCases[i]);
    console.log(`Output: ${output} for numbers as ${numbersTestCases[i]} and the target as ${targetTestCases[i]}`);
}


export {};
