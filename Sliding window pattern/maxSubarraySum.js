/* Accepts an rray of integers and a number,
the function should calculate the maximum sum of n consecutive elements in the array */
function maxSubarraySum(arr, num) {
    let maxSum = 0
    let tempSum = 0
    if (arr.length < num) return null
    for (let i = 0; i < num; i++) {
        maxSum += arr[i]
    }
    tempSum = maxSum
    for (let i = num; i < arr.length; i++) {
        tempSum = tempSum - arr[i - num] + arr[i]
        maxSum = Math.max(tempSum, maxSum)
    }
    return maxSum
}