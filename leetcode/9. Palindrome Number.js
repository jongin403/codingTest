// Leet Code
// #9. Palindrome Number
// Success
// Runtime: 567 ms, faster than 5.02% of JavaScript online submissions for Palindrome Number.
// Memory Usage: 60.3 MB, less than 5.30% of JavaScript online submissions for Palindrome Number.

function main(){
    // Input
    x = 123454321;
    // Output
    // true
    console.log(isPalindrome(x));
}

/**
 * @param {number} x
 * @return {boolean}
 */
// var isPalindrome = function(x) {
//     let result = true;
//     // negative case
//     if(x < 0){
//        return false;
//     }

//     const listX = String(x).split('');
//     for(let idx = 0; idx < listX.length; idx++){
//         if(listX[idx] != listX[listX.length - 1 - idx]){
//             result = false;
//             break;
//         }
//     }

//     return result;
// };

// var isPalindrome = function(x) {
//     let result = true;
//     // negative case
//     if(x < 0){
//          return false;
//     }

//     const getLength = function(targetNumber){
//         let mul = 1;
//         let length = 0;
//         while(mul <= targetNumber){
//             length++;
//             mul = mul * 10;
//         }
//         return length;
//     }
    
//     const getDigit = function(targetNumber, placeValue){
//         let div = 10 ** placeValue;
//         let mod = 10 ** (placeValue + 1);
//         return Math.floor(targetNumber % mod / div);
//     };

//     let length = getLength(x);
//     //console.log(`length:${length}`); 
//     for(let idx = 0; idx < (length - 1) / 2; idx++){
//         //console.log(`idx:${idx} / ${getDigit(x, idx)} / ${getDigit(x, length - 1 - idx)}`)
//         if(getDigit(x, idx) != getDigit(x, length - 1 - idx)){
//             result = false;
//             break;
//         }
//     }

//     return result;
// };

var isPalindrome = function(x) {
    // negative case
    if(x < 0){
       return false;
    }

    let reverseNum = 0
    for(let idx = x; 1 <= idx; idx = Math.floor(idx/10)){
        reverseNum = reverseNum * 10 + idx % 10;
        console.log(`idx:${idx} / reverseNum:${reverseNum}}`)
    } 

    return reverseNum === x;
};

main();