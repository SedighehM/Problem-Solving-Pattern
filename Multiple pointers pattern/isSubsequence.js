// Takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string
function isSubsequence(str1, str2) {
    var i = 0
    var j = 0
    if (!str1) return true
    while (j < str2.length) {
        if (str1[i] === str2[j]) i++
        if (i === str1.length) return true
        j++
    }
    return false
}