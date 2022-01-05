// Leet Code
// #53. Maximum Subarray
// Success
// Runtime: 201 ms, faster than 5.02% of JavaScript online submissions for Maximum Subarray.
// Memory Usage: 49.3 MB, less than 13.93% of JavaScript online submissions for Maximum Subarray.

function main(){
    // Input
    nums = [-2,1,-3,4,-1,2,1,-5,4];
    // Output
    // 6
    console.log(maxSubArray(nums));
}

/**
 * @param {number[]} nums
 * @return {number}
 */
// var maxSubArray = function(nums) {
//     const dp = []; // dp[i] : maximum subarray value which right point is i
    
//     let max = 0;
//     for(let idx = 0; idx < nums.length; idx++){
//         if(idx === 0){
//             dp[idx] = nums[idx];
//             max = dp[idx];
//             continue;
//         }
        
//         dp[idx] = dp[idx - 1] + nums[idx] > nums[idx] ? dp[idx - 1] + nums[idx] : nums[idx];
//         if(max < dp[idx]){
//             max = dp[idx];
//         }
//     }
    
//     return max;
// };

var maxSubArray = function(nums) {
    const dp = []; // dp[i] : maximum subarray value which right point is i
    
    let max = 0;

    // case 1. low                mid             high
    //          |---=== sol ===---|-----------------|

    // case 2. low                mid             high
    //          |-----------------|---=== sol ===---|

    // case 3. low               mid              high
    //          |-----------=== sol ===-------------|

    const divideNconquer = function(low, high){
        if(low === high){
            return nums[low];
        }

        const mid = Math.floor((low + high) / 2);
        
        let leftPart = 0;
        let leftMax = -Infinity
        for(let idx = mid; low <= idx; idx--){
            leftPart += nums[idx];

            if(leftMax < leftPart){
                leftMax = leftPart;
            }
        }

        let rightPart = 0;
        let rightMax = -Infinity
        for(let jdx = mid + 1; jdx <= high; jdx++){
            rightPart += nums[jdx];

            if(rightMax < rightPart){
                rightMax = rightPart;
            }
        }

        const middle = leftMax + rightMax;
        const left = divideNconquer(low, mid);
        const right = divideNconquer(mid + 1, high);
        
        return Math.max(left, right, middle);
    }

    max = divideNconquer(0, nums.length - 1);
    
    return max;
};

main();