# My solution to 49 - Group Anagrams

class Solution:
    def groupAnagrams(self, strs: list[str]) -> list[list[str]]:
        pass


# Time Complexity:

test_cases = [
    ["eat", "tea", "tan", "ate", "nat", "bat"],
    [""],
    ["a"],
]

solution = Solution()

for i in range(len(test_cases)):
    output = solution.groupAnagrams(test_cases[i])
    print(f"Output: {output!r} for strs as {test_cases[i]!r}")
