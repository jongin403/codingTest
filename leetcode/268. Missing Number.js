// Leet Code
// #268. Missing Number
// Success
// Runtime: 84 ms, faster than 70.62% of JavaScript online submissions for Missing Number.
// Memory Usage: 41.3 MB, less than 47.42% of JavaScript online submissions for Missing Number.

function main(){
    // Input // Output
    nums = [9,6,4,2,3,5,7,0,1]; // 8

    console.log(missingNumber(nums));
}

/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    const n = nums.length;
    let sum = (1 + n) * n / 2;
    for(let idx = 0; idx < n; idx++){
        sum -= nums[idx];
    }
    return sum;
};

main();