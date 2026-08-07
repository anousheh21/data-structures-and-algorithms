// My solution to 49 - Group Anagrams

function groupAnagrams(strs: string[]): string[][] {
    
};

// Time Complexity: 

const testCases = [
    ["eat", "tea", "tan", "ate", "nat", "bat"],
    [""],
    ["a"]
];

for(let i = 0; i < testCases.length; i++) {
    const output = groupAnagrams(testCases[i]);
    console.log(`Output: ${output} for input: ${testCases[i]}`);
}

export {};
