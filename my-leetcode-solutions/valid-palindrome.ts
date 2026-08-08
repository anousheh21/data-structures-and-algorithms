// My solution to 125 - Valid Palindrome

function isPalindrome(s: string): boolean {
    
};

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
