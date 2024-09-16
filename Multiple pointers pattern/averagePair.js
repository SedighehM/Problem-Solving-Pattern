/* Given a sorted array of integers and a target average,
determine if there is a pair of values in the array where the average of the pair equals the target average*/
function averagePair(arr, ave) {
    let start = 0
    let end = arr.length - 1
    while (start < end) {
        let calculatedAve = (arr[start] + arr[end]) / 2
        if (calculatedAve === ave) return true
        else if (calculatedAve > ave) end--
        else start++
    }
    return false

}