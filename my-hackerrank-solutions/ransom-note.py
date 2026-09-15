# HackerRank - Hash Tables: Ransom Note
# https://www.hackerrank.com/challenges/ctci-ransom-note/problem


def checkMagazine(magazine: list[str], note: list[str]) -> None:
    # dictionary for magazine. key is the word, value is the number of times it appears

    dict = {}

    for word in magazine:
        if word not in dict:
            dict[word] = 1
        else:
            dict[word] = dict[word] + 1

    for word in note:
        if word not in dict:
            print("No")
            return
        else:
            dict[word] = dict[word] - 1
            if dict[word] == 0:
                del dict[word]

    print("Yes")


test_cases = [
    (
        ["give", "me", "one", "grand", "today", "night"],
        ["give", "one", "grand", "today"],
    ),
    (
        ["two", "times", "three", "is", "not", "four"],
        ["two", "times", "two", "is", "four"],
    ),
    (
        ["ive", "got", "a", "lovely", "bunch", "of", "coconuts"],
        ["ive", "got", "some", "coconuts"],
    ),
    (
        ["beans", "beans", "beans"],
        ["no", "beans"]
    ),
]


for magazine_words, note_words in test_cases:
    print(f"Magazine: {magazine_words}")
    print(f"Note: {note_words}")
    print(f"Output: {checkMagazine(magazine_words, note_words)}")
    print()
