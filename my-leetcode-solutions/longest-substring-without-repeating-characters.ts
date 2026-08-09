// My solution to 3 - Longest Substring Without Repeating Characters

function lengthOfLongestSubstring(s: string): number {
    
};

// Time Complexity:

const testCases = [
    "abcabcbb",
    "bbbbb",
    "pwwkew"
];

for (let i = 0; i < testCases.length; i++) {
    const output = lengthOfLongestSubstring(testCases[i]);
    console.log(`Output: ${output} for input: ${testCases[i]}`);
}

export {};
