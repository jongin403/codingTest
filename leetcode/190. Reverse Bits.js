// Leet Code
// #190. Reverse Bits
// Success
// Runtime: 103 ms, faster than 33.55% of JavaScript online submissions for Reverse Bits.
// Memory Usage: 40.6 MB, less than 49.41% of JavaScript online submissions for Reverse Bits.

function main(){
    // Input // Output
    n = 0b00000010100101000001111010011100; // 964176192 (00111001011110000010100101000000)

    console.log(reverseBits(n));
}

/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
    
    let nCopy = n;
    let result = 0;
    let count = 32;
    let exp = 2**31;

    while(0 < count){
        //console.log(`nCopy:${nCopy.toString(2)} / exp:${exp} / count:${count} / result:${result}`);

        if(nCopy & 1) result += exp;
        nCopy = nCopy >>> 1;
        exp /= 2;
        count --;        
    }

    return result;
};

var reverseBitsPractice = function(n) {
    //console.log(`toString:${n.toString(2)}`);
    //console.log(`join:${n.toString(2).split("").reverse("").join("")}`);
    //console.log(`padEnd:${n.toString(2).split("").reverse("").join("").padEnd(32, "0")}`);

    return Number.parseInt(n.toString(2)
                            .split("")
                            .reverse("")
                            .join("")
                            .padEnd(32, "0"), 2);
};

main();