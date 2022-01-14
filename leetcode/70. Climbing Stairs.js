// Leet Code
// #70. Climbing Stairs
// Success
// Runtime: 72 ms, faster than 74.80% of JavaScript online submissions for Climbing Stairs.
// Memory Usage: 38.6 MB, less than 58.88% of JavaScript online submissions for Climbing Stairs.

function main(){
    // Input // Output
    n = 3; // 3

    console.log(climbStairs(n));
}

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    const memo = [];
    const dp = function(n){
        if(n === 1 || n === 2) memo[n] = n;
        if(!memo[n]) memo[n] = dp(n - 1) + dp(n - 2);
        return memo[n];
    }
    return dp(n);
};

main();