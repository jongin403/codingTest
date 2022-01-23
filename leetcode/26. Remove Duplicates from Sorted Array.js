// Leet Code
// #26. Remove Duplicates from Sorted Array
// Success
// Runtime: 152 ms, faster than 30.04% of JavaScript online submissions for Remove Duplicates from Sorted Array.
// Memory Usage: 43.6 MB, less than 6.41% of JavaScript online submissions for Remove Duplicates from Sorted Array.

function main(){
    // Input // Output
    nums = [1,1,2];
    //nums = [0,0,1,1,1,2,2,3,3,4]; // 5, nums = [0,1,2,3,4,_,_,_,_,_]

    console.log(removeDuplicates(nums));
}

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {

    let curNum = nums[0];
    const underscores = [];
    
    for(let idx = 1; idx < nums.length; idx++){
        if(curNum < nums[idx]){
            curNum = nums[idx];
        } else {
            nums.splice(idx--, 1);
            underscores.push("_");
        }
    }
    //console.log(`nums:${nums} / underscores:${underscores}`);
    const result = nums.length;
    nums = nums.concat(underscores);
    return result;
};

main();