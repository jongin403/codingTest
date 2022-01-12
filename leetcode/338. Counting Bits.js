// Leet Code
// #338. Counting Bits
// Success
// Runtime: 141 ms, faster than 36.13% of JavaScript online submissions for Counting Bits.
// Memory Usage: 44.5 MB, less than 87.04% of JavaScript online submissions for Counting Bits.

function main(){
    // Input // Output
    n = 5; // [0,1,1,2,1,2]

    console.log(countBits(n));
}

/**
 * @param {number} n
 * @return {number[]}
 */
// var countBits = function(n) {
//     const result = [];
//     const getOnes = function(n){
//         let result = 0;
//         while(0 < n){
//             if(n & 1) result++;
//             n = n >> 1;
//         }
//         return result;
//     }

//     for(let idx = 0; idx <= n; idx++){
//         result.push(getOnes(idx));
//     }

//     return result;    
// };

// 0 000
// 1 001
// 2 010
// 3 011
// 4 100
// 5 101
// 6 110
// 7 111
// var countBits = function(n) {
//     const result = [];

//     const maxBitNum = function(n){
//         let result = 1;
//         while(true){
//             if(n < result * 2){
//                 break;
//             }
//             result *= 2;
//         }
//         return result;
//     }

//     const getOnes = function(n){
//         if(n === 0) return 0;
//         if(n === 1) return 1;

//         console.log(`n:${n} / n(2):${n.toString(2)} / maxBitNum(n):${maxBitNum(n)}`);
//         return 1 + getOnes(n - maxBitNum(n));
//     }

//     for(let idx = 0; idx <= n; idx++){
//         result.push(getOnes(idx));
//     }

//     return result;    
// };

var countBits = function(n) {
    const result = [0];
    
    for(let idx = 1; idx <= n; idx++){
        result[idx] = result[idx >> 1] + (idx & 1);
    }

    return result;    
};

main();