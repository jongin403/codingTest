// Leet Code
// #15. 3Sum
// Success
// Runtime: 292 ms, faster than 30.73% of JavaScript online submissions for 3Sum.
// Memory Usage: 48.5 MB, less than 94.95% of JavaScript online submissions for 3Sum.

function main(){
    // Input // Output
    nums = [-1,0,1,2,-1,-4]; // [[-1,-1,2],[-1,0,1]]
    
    console.log(threeSum(nums));
}

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// var threeSum = function(nums) {
//     const resultSet = new Set();

//     for(let idx = 0; idx < nums.length; idx++){
//         for(let jdx = idx + 1; jdx < nums.length; jdx++){
//             for(let kdx = jdx + 1; kdx < nums.length; kdx++){
//                 if(nums[idx] + nums[jdx] + nums[kdx] === 0){
//                     const sumNum = [nums[idx], nums[jdx], nums[kdx]];
//                     sumNum.sort();
//                     resultSet.add(JSON.stringify(sumNum));
//                 }
//             }
//         }
//     }

//     const result = Array.from(resultSet);
    
//     return result.map(el => JSON.parse(el));
// };

var threeSum = function(nums) {
    const TARGET = 0;
    const results = [];

    //if (nums.length < 3) return results; // not essential

    nums.sort((a, b) => a - b);
    
    for(let idx = 0; idx < nums.length - 2; idx++){
        //if (nums[i] > target) break; // not essential
        
        // skip duplicate nums
        if(0 < idx && nums[idx - 1] === nums[idx]) continue;

        let jdx = idx + 1;
        let kdx = nums.length - 1;

        while(jdx < kdx){
            let sum = nums[idx] + nums[jdx] + nums[kdx];
            
            // find next
            if(sum === TARGET){
                results.push([nums[idx], nums[jdx], nums[kdx]]);
                
                // skip duplicate
                while(nums[jdx] === nums[jdx + 1]) jdx++;
                while(nums[kdx] === nums[kdx - 1]) kdx--;

                jdx++;
                kdx--;
            } else if (sum < TARGET) {
                //while(nums[jdx] === nums[jdx + 1]) jdx++; // not essential
                jdx++;
            } else {
                //while(nums[kdx] === nums[kdx - 1]) kdx--; // not essential
                kdx--;
            }
        }
    }

    return results;
};

main();