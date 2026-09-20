# My solution to 3 - Longest Substring Without Repeating Characters

class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        maxLen = 1
        startPointer = 0
        endPointer = 0

        if len(s) == 0:
            maxLen = 0

        while endPointer < len(s):
            if startPointer == endPointer:
                endPointer += 1

                if endPointer >= len(s):
                    break

                if s[startPointer] != s[endPointer] and startPointer == 0 and endPointer == 1:
                    # print(f"{startPointer} and {endPointer}")
                    maxLen = 2
                    


            elif s[startPointer] == s[endPointer]:
                startPointer += 1

            elif s[endPointer] in s[startPointer:endPointer]:
                # print(s[startPointer:endPointer+1])
                startPointer += 1 

            else:
                difference = endPointer - startPointer + 1
                
                if difference > maxLen:
                    maxLen = difference
                    # print({s[startPointer:endPointer+1]})

                endPointer += 1

                if endPointer >= len(s):
                    break

        return maxLen
       




# Time Complexity:

s_test_cases = ["abcabcbb", "bbbbb", "pwwkew", "<Dx", "S", "mmq", "mq", "kbdbl"]

solution = Solution()

for i in range(len(s_test_cases)):
    output = solution.lengthOfLongestSubstring(s_test_cases[i])
    print(f"Output: {output!r} for s as {s_test_cases[i]!r}")
