// Accepts a string and returns the length of the longest substring with all distinct characters
function findLongestSubstring(str) {
    let longest = 0
    let start = 0
    let seen = {}

    for (let i = 0; i < str.length; i++) {
        var char = str[i]
        if (seen[char]) {
            start = Math.max(start, seen[char])
        }
        longest = Math.max(longest, i - start + 1)
        seen[char] = i + 1
    }
    return longest
}