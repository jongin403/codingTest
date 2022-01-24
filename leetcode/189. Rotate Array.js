// Leet Code
// #189. Rotate Array
// Success
// Runtime: 164 ms, faster than 30.87% of JavaScript online submissions for Rotate Array.
// Memory Usage: 50.5 MB, less than 8.58% of JavaScript online submissions for Rotate Array.
function main(){
    // Input // Output
    nums = [1,2,3,4,5,6,7], k = 3;
    rotate1(nums, k);
    console.log(nums);

    nums = [1,2,3,4,5,6,7], k = 3;
    rotate2(nums, k);
    console.log(nums);

    nums = [1,2,3,4,5,6,7], k = 3;
    rotate3(nums, k);
    console.log(nums);
}

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 // Runtime: 214 ms, faster than 7.10% of JavaScript online submissions for Rotate Array.
 // Memory Usage: 49.3 MB, less than 26.44% of JavaScript online submissions for Rotate Array.
var rotate1 = function(nums, k) {
    const numsLength = nums.length;
    k %= numsLength;
    
    for(let idx = numsLength - k; idx < numsLength; idx++){
        nums.push(nums[idx]);
    }

    for(let idx = 0; idx < numsLength - k; idx++){
        nums.push(nums[idx]);
    }

    nums.splice(0, numsLength);
};

// Time Limit Exceeded
var rotate2 = function(nums, k) {
    let count = 0;
    k %= nums.length;


    while(count < k){
        nums.unshift(nums.pop());
        count++;
    }
};

// Runtime: 164 ms, faster than 30.87% of JavaScript online submissions for Rotate Array.
// Memory Usage: 50.5 MB, less than 8.58% of JavaScript online submissions for Rotate Array.
var rotate3 = function(nums, k) {
    k %= nums.length;
    const sliceIdx = nums.length - k;
    nums.push(...nums.slice(0, sliceIdx));
    nums.splice(0, sliceIdx);    
};

main();