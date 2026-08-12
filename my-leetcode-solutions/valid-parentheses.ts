// My solution to 20 - Valid Parentheses

function isValid(s: string): boolean {
    
};

// Time Complexity:

const testCases = [
    "()",
    "()[]{}",
    "(]",
    "([])",
    "([)]"
];

for (let i = 0; i < testCases.length; i++) {
    const output = isValid(testCases[i]);
    console.log(`Output: ${output} for input: ${testCases[i]}`);
}

export {};
