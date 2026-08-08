// My solution to 49 - Group Anagrams

// Brute force approach
function groupAnagrams(strs: string[]): string[][] {
    // Make first of the anagram set a key of a map. Value is array of all anagrams of that

    // For each string, if you can find an anagram that is a key of the Map, append it to the values array. Otherwise make that a key and create an array with that value.

    const groupAnagramsMap = new Map<string, string[]>();

    for(let i = 0; i < strs.length; i++) {
        let anagramExists = false;
        for(const [key, value] of groupAnagramsMap) {
            if(isPairAnagram(strs[i], key)) {
                value.push(strs[i]);
                anagramExists = true;
            } 
        }

        if(!anagramExists) {
            groupAnagramsMap.set(strs[i], [strs[i]]);
        }
    }

    const outputArray: string[][] = [];

    for(const [key, value] of groupAnagramsMap) {
        outputArray.push(value);
    }

    return outputArray;
};

function isPairAnagram(str1: string, str2: string): boolean {
    // Create a map for each string
    // Key is a letter, value is number of times that letter has appeared in the string so far

    if(str1.length !== str2.length) {
        return false;
    }

    const str1Map = createStringMap(str1);
    const str2Map = createStringMap(str2);

    // If both maps are equal, the strings are anagrams of each other

    // Check if every value of one of the maps is in the other map

    for(const [key, value] of str1Map) {
        if(!str2Map.has(key) || str2Map.get(key) !== value) {
            return false;
        }
    }

    return true;
}

function createStringMap(str: string): Map<string, number> {
    const strMap = new Map<string, number>();

    for(let i = 0; i < str.length; i++) {
        strMap.set(str[i], (strMap.get(str[i]) ?? 0) + 1);
    }

    return strMap;
}

const testCases2 = [["bat", "tab"], ["cat", "sat"], ["", ""], ["b", ""], ["", "b"]];
for(let i = 0; i < testCases2.length; i++) {
    const output = isPairAnagram(testCases2[i][0], testCases2[i][1]);
    console.log(`${output}: ${testCases2[i][0]} and ${testCases2[i][1]} are anagrams`);
}

// Time Complexity: 

const testCases = [
    ["eat", "tea", "tan", "ate", "nat", "bat"],
    [""],
    ["a"],
    ["cat", "tac", "bat", "catc"],
    ["","b",""]
];

for(let i = 0; i < testCases.length; i++) {
    const output = groupAnagrams(testCases[i]);
    // console.log(`Output: ${output} for input: ${testCases[i]}`);
    console.log(`Output: ${JSON.stringify(output)} for input: ${JSON.stringify(testCases[i])}`);
}

export {};
