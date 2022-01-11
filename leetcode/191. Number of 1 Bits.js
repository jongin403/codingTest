// Leet Code
// #191. Number of 1 Bits
// Success
// Runtime: 130 ms, faster than 13.39% of JavaScript online submissions for Number of 1 Bits.
// Memory Usage: 40.3 MB, less than 54.56% of JavaScript online submissions for Number of 1 Bits.

function main(){
    // Input // Output
    n = 00000000000000000000000000001011; // 3
    //n = 11111111111111111111111111111101; //31

    console.log(hammingWeight(n));
}

/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    let result = 0;
    let nCopy = n;

    while(0 !== nCopy){
        //console.log(`${nCopy}`);
        if(nCopy & 1) result++;
        nCopy = nCopy >>> 1;
    }

    return result;
};

main();