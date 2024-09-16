// Given two positive integers, find out if the two numbers have the same frequency of digits
function sameFrequency(num1, num2) {
    let strnum1 = num1.toString()
    let strnum2 = num2.toString()

    if (strnum1.length !== strnum2.length) return false

    let countnum1 = {}
    let countnum2 = {}
    for (let i = 0; i < strnum1.length; i++) {
        countnum1[strnum1[i]] = (countnum1[strnum1[i]] || 0) + 1
    }
    for (let i = 0; i < strnum2.length; i++) {
        countnum2[strnum2[i]] = (countnum2[strnum2[i]] || 0) + 1
    }

    for (let key in countnum1) {
        if (countnum1[key] !== countnum2[key]) return false
    }
    return true

}