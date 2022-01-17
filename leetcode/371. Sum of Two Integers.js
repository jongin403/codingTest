// Leet Code
// #371. Sum of Two Integers

function main(){
    // Input // Output
    a = 15, b = 7; // 3

    console.log(getSum(a, b));
}

/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
// c : 11011110
// a : 00100101
// b : 01101011
// s : 10010000
var getSum = function(a, b) {
    let carry;
    console.log(`a & b:${(a & b).toString(2)}`);
    while((a & b) !== 0){
        carry = (a & b) << 1;
        console.log(`a:${a.toString(2)} / b:${b.toString(2)} / a & b:${(a & b).toString(2)} / carry:${carry}`);
        a = a ^ b;
        b = carry;
    }
    return a ^ b;
};

main();