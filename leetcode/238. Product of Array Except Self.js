// Leet Code
// #238. Product of Array Except Self
// Success
// Runtime: 226 ms, faster than 13.29% of JavaScript online submissions for Product of Array Except Self.
// Memory Usage: 52.4 MB, less than 22.97% of JavaScript online submissions for Product of Array Except Self.

function main(){
    // Input
    nums = [1,2,3,4];
    // Output
    // [24,12,8,6]
    console.log(productExceptSelf(nums));
}

/**
 * @param {number[]} nums
 * @return {number[]}
 */
// var productExceptSelf = function(nums) {
//     const result = [];
//     let nums_except_i = [];
    
//     for(let idx = 0; idx < nums.length; idx++){
//         nums_except_i = nums.slice(0, idx).concat(nums.slice(idx + 1));
//         result.push(nums_except_i.reduce((acc, elem) => acc * elem, 1));
//     }

//     return result;
// };

var productExceptSelf = function(nums) {
    const result = [];
    
    let leftMul = 1;
    let rightMul = 1;

    for(let leftIdx = 0; leftIdx < nums.length; leftIdx++){
        result[leftIdx] = leftMul;
        leftMul *= nums[leftIdx];
        //console.log(`leftIdx:${leftIdx} / result:${result[leftIdx]}`);
    }

    for(let rightIdx = nums.length - 1; 0 <= rightIdx; rightIdx--){
        result[rightIdx] = result[rightIdx] * rightMul;
        rightMul *= nums[rightIdx];
        //console.log(`rightIdx:${rightIdx} / result:${result[rightIdx]}`);
    }

    return result;
};

main();