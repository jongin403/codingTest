// Leet Code
// #153. Find Minimum in Rotated Sorted Array
// Success
// Runtime: 72 ms, faster than 80.11% of JavaScript online submissions for Find Minimum in Rotated Sorted Array.
// Memory Usage: 39.2 MB, less than 34.14% of JavaScript online submissions for Find Minimum in Rotated Sorted Array.

function main(){
    // Input // Output
    nums = [3,4,5,1,2]; // 1
    //nums = [1,2,3,4,5]; // 1
    //nums = [2,2,2,2,2]; // 2
    console.log(findMin(nums));
}

/**
 * @param {number[]} nums
 * @return {number}
 */
// var findMin = function(nums) {

//     if(nums[0] < nums[nums.length - 1]){
//        return nums[0]
//     }

//     const binarySearch = function(left, right){
//         let mid = Math.floor((left + right) / 2);

//         if(nums[mid + 1] < nums[mid]){
//             return nums[mid + 1];
//         }

//         if(nums[mid] < nums[mid - 1]){
//             return nums[mid];
//         }
        
//         if(left === right){
//             return nums[left];
//         }
        
//         if(nums[0] <= nums[mid]){
//             left = mid + 1;
//         } else {
//             right = mid - 1;
//         }

//         return binarySearch(left, right);
//     }
    
//     return binarySearch(0, nums.length - 1);    
// };

var findMin = function(nums) {
    //return Math.min(...nums); // O(n)

    const binarySearch = function(left, right){
        //console.log(`left:${left} / right:${right}`);
        
        // exit condition
        if(right <= left){
            return nums[left];
        }
        
        // set new left or right index
        const mid = Math.floor((left + right) / 2);
        if(nums[right] < nums[mid]){
            left = mid + 1;
        } else {
            right = mid;
        }

        // call recursive
        return binarySearch(left, right);
    }

    return binarySearch(0, nums.length - 1);    
};

main();