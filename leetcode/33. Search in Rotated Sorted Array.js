// Leet Code
// #33. Search in Rotated Sorted Array
// Success
// Runtime: 68 ms, faster than 95.78% of JavaScript online submissions for Search in Rotated Sorted Array.
// Memory Usage: 39.9 MB, less than 54.94% of JavaScript online submissions for Search in Rotated Sorted Array.

function main(){
    // Input // Output
    nums = [4,5,6,7,0,1,2], target = 0; // 4
    
    console.log(search(nums, target));
}

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    let idx = 0;

    while(left < right){
        const mid = Math.floor((left + right) / 2);
        //console.log(`nums[${left}]:${nums[left]} /nums[${mid}]:${nums[mid]} / nums[${right}]:${nums[right]}`);
        
        // nums[0] <= target : target is in left side
        // nums[0] > target : target is in right side
        if(nums[0] <= target && nums[0] <= nums[mid] ||
           nums[0] >  target && nums[0] >  nums[mid] ){
            // same side
            if(nums[mid] < target){
                left = mid + 1; // mid goes right
            } else {
                right = mid; // mid goes left
            }
        } else {
            // other side
            if(nums[mid] < target){
                right = mid; // mid goes left
            } else {
                left = mid + 1; // mid goes right
            }
        }

    }
    idx = left;
    //console.log(`idx:${idx}`);

    if(nums[idx] !== target){
        return -1;
    } else {
        return idx;
    }
};

main();