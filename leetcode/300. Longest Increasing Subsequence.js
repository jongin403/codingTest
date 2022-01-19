// Leet Code
// #300. Longest Increasing Subsequence

function main(){
    // Input // Output
    //nums = [10,9,2,5,3,7,101,18]; // 4
    nums = [10,9,2,5,3,7,101]; // 4

    console.log(lengthOfLIS(nums));
}

/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    
    const memo = [];

    // dp(idx) = length of the LIS which last index is idx
    const dp = function(idx){

        if(memo[idx]){

        } else if(idx === 0){
            memo[idx] = 1;
        } else {
            const lessNum = nums.filter((el, index) => el < nums[idx] && index < idx).length;
            console.log(`lessNum:${lessNum}`);
            if(dp(idx - 1) <= lessNum){
                memo[idx] = dp(idx - 1) + 1;
            } else {
                memo[idx] = dp(idx - 1);
            }
        }

        return memo[idx];
    };

    return dp(nums.length - 1);

};

main();