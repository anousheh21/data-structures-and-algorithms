# My solution to 242 - Valid Anagram

class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        """
        length is the same

        create a map of both. if the maps are the same, they are the same. however to prevent having to check both ways, you can check one way and check the length as well
        """

        if len(s) != len(t):
            return False

        # convert both to a map
        sMap = self.toMap(s)
        tMap = self.toMap(t)

        for key, val in sMap.items():
            if key not in tMap:
                return False

            if sMap[key] != tMap[key]:
                return False

    

        return True

    
    def toMap(self, string: str):
        map = {}

        for char in string:
            map[char] = map.get(char, 0) + 1

        return map



# Time Complexity:

s_test_cases = ["anagram", "rat", "anagramm", "aacc"]
t_test_cases = ["nagaram", "car", "managram", "ccac"]

solution = Solution()

for i in range(len(s_test_cases)):
    output = solution.isAnagram(s_test_cases[i], t_test_cases[i])
    print(
        f"Output: {output!r} for s as {s_test_cases[i]!r} "
        f"and t as {t_test_cases[i]!r}"
    )
