// Leet Code
// #11. Container With Most Water
// Success
// Runtime: 149 ms, faster than 15.64% of JavaScript online submissions for Container With Most Water.
// Memory Usage: 47.9 MB, less than 73.84% of JavaScript online submissions for Container With Most Water.

function main(){
    // Input // Output
    //height = [1,8,6,2,5,4,8,3,7]; // 49
    //height = [2,3,4,5,18,17,6];
    height = [2,3,4,5,18,17,6];
    
    console.log(maxArea(height));
}

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    
    let left = 0;
    let right = height.length - 1;
    let maxArea = 0;

    while(left < right){
        const curArea = Math.min(height[left], height[right]) * (right - left);
        if(maxArea < curArea){
            maxArea = curArea;
        }
        
        //console.log(`height[${left}]:${height[left]} / height[${right}]:${height[right]}`);

        if (height[left] < height[right]){
            left++;
        } else {
            right--;
        }

    }
    
    return maxArea;
};

main();