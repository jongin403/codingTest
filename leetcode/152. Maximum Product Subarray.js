// Leet Code
// #152. Maximum Product Subarray
// Success
// Runtime: 134 ms, faster than 14.16% of JavaScript online submissions for Maximum Product Subarray.
// Memory Usage: 40.1 MB, less than 80.83% of JavaScript online submissions for Maximum Product Subarray.

function main(){
    // Input
    nums = [2,3,-2,4];
    // Output
    // 6
    console.log(maxProduct(nums));
}

/**
 * @param {number[]} nums
 * @return {number}
 */
// var maxProduct = function(nums) {
//     let max = -Infinity;
    
//     for(let idx = 0; idx < nums.length; idx++){
//         let initMul = 1;
        
//         for(let jdx = idx; jdx < nums.length; jdx++){
//             initMul *= nums[jdx];
            
//             if(max < initMul){
//                 max = initMul;
//             }
//         }
//     }
    
//     return max;
// };

var maxProduct = function(nums) {
    let result = nums[0];
    let max = nums[0];
    let min = nums[0];
    
    for(let idx = 1; idx < nums.length; idx++){
        let prevMax = max;
        let prevMin = min;
        
        max = Math.max(prevMax * nums[idx], nums[idx], prevMin * nums[idx]);
        min = Math.min(prevMax * nums[idx], nums[idx], prevMin * nums[idx]);
        
        if(result < max){
            result = max;
        }
    }
    
    return result;
};

main();