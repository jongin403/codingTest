// Leet Code
// #136. Single Number
// Success
// Runtime: 170 ms, faster than 17.38% of JavaScript online submissions for Single Number.
// Memory Usage: 43.4 MB, less than 44.28% of JavaScript online submissions for Single Number.

function main(){
    // Input // Output
    nums = [4,1,2,1,2]; // 4

    console.log(singleNumber(nums));
}

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    const numSet = new Set();
    nums.forEach(el => {
        if(numSet.has(el)) numSet.delete(el);
        else numSet.add(el);
    });
    //console.log(`numSet:${[...numSet.keys()]}`);
    return [...numSet.keys()].toString();
};

main();