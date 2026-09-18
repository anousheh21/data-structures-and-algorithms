// My solution to 3 - Longest Substring Without Repeating Characters

// Optimised Approach
function lengthOfLongestSubstring(s: string): number {
    // Left and right start in the same place
    let left = 0;
    let right = 0;
    let longestSubstring = 0;

    const currentSet = new Set<string>(s[0]);

    while(right < s.length) {
        const currentWindowLength = (right - left) + 1;

        if (currentSet.size === currentWindowLength) {
            if (currentSet.size > longestSubstring) {
                longestSubstring = currentSet.size;
            }
        } 

        if (!currentSet.has(s[right + 1])) {
            right++;
            currentSet.add(s[right]);
        } else {
            currentSet.delete(s[left]);
            left++;
        }
    }

    return longestSubstring;
};

// Time Complexity: O(n)

// Brute Force Approach
function lengthOfLongestSubstringBruteForce(s: string): number {
    let slidingWindowSize = s.length;
    while (slidingWindowSize > 0) {
        // check every substring of a particular length. So the sliding window changes for each iteration.
        let start = 0;
        let end = slidingWindowSize;

        while (end <= s.length) {
            const window = s.slice(start, end);
            if (isUniqueSubstring(window)) {
                return slidingWindowSize;
            }

            start++;
            end++;
        }

        slidingWindowSize--;
    }

    return - 1;
};

function isUniqueSubstring(str: string): boolean {
    const strSet = new Set<string>([...str]);

    if(strSet.size === str.length) {
        return true;
    } else {
        return false;
    }
}

// Time Complexity: O(n^3)

const testCases = [
    "abcabcbb",
    "bbbbb",
    "pwwkew",
    "s",
    "Zc2gXM6uvpIcwzan3Jp6V4f3YLjc4QHvHOE72MHs53c3L07PstfxpFWe1bUsJdmYGWMjdJaFRlu4I2YaQzIKKvDjdAoGbbcW7ErUtD2f4l9H0ubHB5a45PqMRUdHBxazX7T0LuqRSp7yWkWohActwzihiilbE9SMEIQrQrJe56OtAuBfEVFJT2OCrHfznTnFVoi40zi7QMbuBs30mhcb0YyKwQA9v5ZPVgCZVm3MtTQGKVZsBBLwEBLSxhFM3W68m0AVBOU7PNNB6LFnJh02ydgMhmJqX5eApNcbImnyJ4jbtpm57KRi6T7uyQZcjoNiyCWGBqYPcCPxbv9woQ7tHJ7XGZlmDntF8v0nap40WxL3I2UMza77OsuLN1yt1E1ev1HkEGF6vIxwQFNzB5YA3sIlXE6dHDmEtcA"
];

for (let i = 0; i < testCases.length; i++) {
    const output = lengthOfLongestSubstring(testCases[i]);
    console.log(`Output: ${output} for input: ${testCases[i]}`);
}

export {};
