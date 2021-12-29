// leetcode

function main(){
    nums = [2,7,11,15], target = 9;
    console.log(twoSum(nums, target));
}

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    const result = [];
    
    for(let idx = 0; idx < nums.length - 1; idx++){
        for(let jdx = idx + 1; jdx < nums.length; jdx++){
            if(nums[idx] + nums[jdx] == target){
                result.push(idx);
                result.push(jdx);
            }
        }    
    }
    
    return result;
};

main();