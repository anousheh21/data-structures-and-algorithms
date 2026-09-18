// My Solution to LeetCode 242. Valid Anagram

function isAnagram(s: string, t: string): boolean {
    // Create a map of both s and t, counting the number of times a character appears in each. If the resulting maps contain the same key-value pairs, then they are anagrams of each other.

    const sMap = new Map<string, number>();
    const tMap = new Map<string, number>();

    mapString(s, sMap);
    mapString(t, tMap);

    const sInT = checkAnagrams(sMap, tMap);
    const tInS = checkAnagrams(tMap, sMap);

    if (sInT && tInS) {
        return true;
    } else {
        return false;
    }
};

function mapString(inputString: string, inputMap: Map<string, number>) {
    for(const char of inputString) {
        inputMap.set(char, (inputMap.get(char) ?? 0) + 1);
    }
}

function checkAnagrams(map1: Map<string, number>, map2: Map<string, number>): boolean {
    for(const [key, value] of map1) {
        if(!map2.has(key) || map2.get(key) !== value) {
            return false;
        }
    }
    return true;
}

const testCases = [["anagram", "nagaram"], ["rat", "car"]];

for(let i = 0; i < testCases.length; i++) {
    const output = isAnagram(testCases[i][0], testCases[i][1]);
    console.log(`${output}: ${testCases[i][0]} and ${testCases[i][1]} are anagrams`);
}

// Time Complexity: O(n)


export {}