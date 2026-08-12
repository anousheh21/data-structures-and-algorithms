// My solution to 20 - Valid Parentheses

function isValid(s: string): boolean {
    // Add to a new array, then when you have one set of parenthesis next to each other that are a set, remove them from the new array. 
    // For each iteration, check if the last 2 are a set
    // If the new array is empty at the end, return true, otherwise false

    const stack: string[] = [];

    for(let i = 0; i < s.length; i++) {
        // Add s[i] to stack
        stack.push(s[i]);

        // Check if last two are a set
        if (stack.length >= 2) {
            const last = stack[stack.length - 1];
            const sndLast = stack[stack.length - 2];

            if ((last === "]" && sndLast === "[") || (last === ")" && sndLast === "(") || (last === "}" && sndLast === "{")) {
                stack.pop();
                stack.pop();
            }
        }
    }

    if (stack.length === 0) {
        return true;
    } else {
        return false;
    }

};

// Time Complexity: O(n)

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
