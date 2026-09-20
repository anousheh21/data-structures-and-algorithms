# My solution to 3 - Longest Substring Without Repeating Characters

class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        maxLen = 1
        startPointer = 0
        endPointer = 0

        if len(s) == 0:
            return 0

        currentWindow = set()
        currentWindow.add(s[startPointer])

        while endPointer < len(s)-1:            
            if startPointer == endPointer:
                endPointer += 1

                if s[startPointer] == s[endPointer]:
                    startPointer += 1
                elif maxLen == 1:
                    maxLen = 2

                currentWindow.add(s[endPointer])
            
            elif s[endPointer+1] in currentWindow:
                currentWindow.remove(s[startPointer])
                startPointer += 1

            else:
                endPointer += 1

                currentWindow.add(s[endPointer])
                if(len(currentWindow) > maxLen):
                    maxLen = len(currentWindow)
        
        if(len(currentWindow) > maxLen):
            maxLen = len(currentWindow)
            
        return maxLen
       




# Time Complexity:

s_test_cases = ["abcabcbb", "bbbbb", "pwwkew", "<Dx", "S", "mmq", "mq", "kbdbl", "edd"]

solution = Solution()

for i in range(len(s_test_cases)):
    output = solution.lengthOfLongestSubstring(s_test_cases[i])
    print(f"Output: {output!r} for s as {s_test_cases[i]!r}")
