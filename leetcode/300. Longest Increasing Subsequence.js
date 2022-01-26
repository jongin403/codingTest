// Leet Code
// #300. Longest Increasing Subsequence

function main(){
    // Input // Output
    //nums = [10,9,2,5,3,7,101,18]; // 4
    nums = [10,9,2,5,3,7,101]; // 4

    console.log(lengthOfLIS(nums));
}

/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    
    const tails = new Array(nums.length);
    let size = 0;

    nums.forEach((item) => {
        let i = 0, j = size;
        while (i != j) {
            let m = (i + j) / 2;
            if (tails[m] < item)
                i = m + 1;
            else
                j = m;
        }
        tails[i] = item;
        if (i === size) size++;
    });

    return size;

};

main();