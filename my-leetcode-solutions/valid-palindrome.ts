// My solution to 125 - Valid Palindrome

function isPalindrome(s: string): boolean {
    // Convert to lowercase
    const lower = s.toLowerCase();

    // Remove all non-alphanumeric characters
    const regex = /[a-z0-9]+/g;
    const alphanumeric = lower.match(regex);
    const joined = alphanumeric?.join("");

    if (joined == null) {
        return true;
    }

    // Use opposite end pointers to check if the remaining string is a palindrome
    let left = 0;
    let right = joined.length - 1;

    while (left < right) {
        if (joined[left] !== joined[right]) {
            return false;
        } else {
            left++;
            right--;
        }
    }

    return true;

};

// Time Complexity: O(n)

const testCases = [
    "A man, a plan, a canal: Panama",
    "race a car",
    " "
];

for(let i = 0; i < testCases.length; i++) {
    const output = isPalindrome(testCases[i]);
    console.log(`Output: ${output} for input: ${testCases[i]}`);
}


export {};
