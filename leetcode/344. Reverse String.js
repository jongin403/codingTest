// Leet Code
// #344. Reverse String
// Success
// Runtime: 184 ms, faster than 17.33% of JavaScript online submissions for Reverse String.
// Memory Usage: 49.6 MB, less than 5.22% of JavaScript online submissions for Reverse String.

function main(){
    // Input // Output
    s = ["h","e","l","l","o"]; // Output: ["o","l","l","e","h"]

    console.log(reverseString(s));
}

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    return s.reverse();
};

main();