// Leet Code
// #1. Two Sum
// Success
// Runtime: 80 ms, faster than 80.07% of JavaScript online submissions for Two Sum.
// Memory Usage: 41.4 MB, less than 18.03% of JavaScript online submissions for Two Sum.

function main(){
    // Input
    nums = [2,7,11,15], target = 9;
    // Output
    // [0,1]
    console.log(twoSum(nums, target));
}

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// var twoSum = function(nums, target) {
//     const result = [];
    
//     for(let idx = 0; idx < nums.length - 1; idx++){
//         for(let jdx = idx + 1; jdx < nums.length; jdx++){
//             if(nums[idx] + nums[jdx] == target){
//                 result.push(idx);
//                 result.push(jdx);
//             }
//         }    
//     }
    
//     return result;
// };

// use map because 
// map : O(1)
// array's for loop : O(n)
var twoSum = function(nums, target) {
    const map = new Map(); // key : number / value : idx
    let answer = [];

    nums.forEach(function(item, index){
        let left = target - item;
        if(map.has(left)){
            answer = [map.get(left), index];
        }
        map.set(item, index);
        //console.log(`item:${item} / index:${index}`);
    } );

    return answer;
};

main();