# My solution to 242 - Valid Anagram

class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        pass


# Time Complexity:

s_test_cases = ["anagram", "rat"]
t_test_cases = ["nagaram", "car"]

solution = Solution()

for i in range(len(s_test_cases)):
    output = solution.isAnagram(s_test_cases[i], t_test_cases[i])
    print(
        f"Output: {output!r} for s as {s_test_cases[i]!r} "
        f"and t as {t_test_cases[i]!r}"
    )
