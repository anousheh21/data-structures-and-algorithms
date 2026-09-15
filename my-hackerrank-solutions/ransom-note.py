# HackerRank - Hash Tables: Ransom Note
# https://www.hackerrank.com/challenges/ctci-ransom-note/problem


def checkMagazine(magazine: list[str], note: list[str]) -> None:
    pass


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
]


for magazine_words, note_words in test_cases:
    print(f"Magazine: {magazine_words}")
    print(f"Note: {note_words}")
    print("Output: ", end="")
    checkMagazine(magazine_words, note_words)
    print()
