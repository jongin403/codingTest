// Leet Code
// #191. Number of 1 Bits
// Success
// Runtime: 130 ms, faster than 13.39% of JavaScript online submissions for Number of 1 Bits.
// Memory Usage: 40.3 MB, less than 54.56% of JavaScript online submissions for Number of 1 Bits.

function main(){
    // Input // Output
    //n = 0b00000000000000000000000000001011; // 3
    n = 0b11111111111111111111111111111101; //31

    //console.log(hammingWeight(n));
    console.log(hammingWeightPractice());    
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

var hammingWeightPractice = function() {
    let result = 0;

    let number = 4294967293;
    let strNumber = "4294967293";
    //console.log(number.toString(2)); // 11111111111111111111111111111101
    //console.log(strNumber.toString(2)); // 4294967293

    let nCopy = number.toString(2);

    console.log(`${nCopy}`);
    while(0 != nCopy){
        console.log(`${nCopy}`);
        if(nCopy & 1) result++;
        nCopy = nCopy >>> 1;
    }

    return result; // 0
};

main();