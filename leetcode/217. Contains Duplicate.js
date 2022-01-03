// Leet Code
// #217. Contains Duplicate
// Success
// Runtime: 132 ms, faster than 27.83% of JavaScript online submissions for Contains Duplicate.
// Memory Usage: 49.2 MB, less than 10.70% of JavaScript online submissions for Contains Duplicate.

function main(){
    // Input
    nums = [1,2,3,1];
    // Output
    // true
    console.log(containsDuplicate(nums));
}

/**
 * @param {number[]} nums
 * @return {boolean}
 */
// var containsDuplicate = function(nums) {
//     const numSet = new Set(nums);
//     if(numSet.size === nums.length) return false;
//     return true;
// };

var containsDuplicate = function(nums) {
    const numObj = {};
    for(let idx = 0; idx < nums.length; idx++){
        if(numObj[nums[idx]] === true){
            return true;
        }
        numObj[nums[idx]] = true;
    }
    
    return false;
};

main();