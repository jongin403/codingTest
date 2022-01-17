// Leet Code
// #371. Sum of Two Integers
// Success
// Runtime: 102 ms, faster than 25.23% of JavaScript online submissions for Sum of Two Integers.
// Memory Usage: 38 MB, less than 95.68% of JavaScript online submissions for Sum of Two Integers.

function main(){
    // Input // Output
    a = 129, b = 47; // 176

    console.log(getSum(a, b));
}

/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
 // a:10000001|b:  101111|a^b:10101110|a&b:       1|carry:      10
 // a:10101110|b:      10|a^b:10101100|a&b:      10|carry:     100
 // a:10101100|b:     100|a^b:10101000|a&b:     100|carry:    1000
 // a:10101000|b:    1000|a^b:10100000|a&b:    1000|carry:   10000
const pBin = function printBinary(n){
    return n.toString(2).padStart(8);
};

var getSum = function(a, b) {
    let carry;
    
    while((a & b) !== 0){
        // divide (a & b) and (a ^ b)

        carry = (a & b) << 1;
        // (a & b) bits are carries
        // (a ^ b) bits remains
        // calc carries and remains like a, b
        console.log(`a:${pBin(a)}|b:${pBin(b)}|a^b:${pBin(a ^ b)}|a&b:${pBin(a & b)}|carry:${pBin(carry)}`);
        
        a = a ^ b;
        b = carry;
        // doesn't matter
        // b = a ^ b
        // a = carry
    }

    // if a & b === 0
    // a ^ b is same as a + b
    return a ^ b;
};

main();