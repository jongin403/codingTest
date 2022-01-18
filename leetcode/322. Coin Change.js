// Leet Code
// #322. Coin Change
// Success
// Runtime: 572 ms, faster than 6.61% of JavaScript online submissions for Coin Change.
// Memory Usage: 45.2 MB, less than 33.83% of JavaScript online submissions for Coin Change.

function main(){
    // Input // Output
    coins = [1,2,5], amount = 11; // 3
    //coins = [2], amount = 3; // -1
    //coins = [1], amount = 0; // 0
    //coins = [1,3,5], amount = 2; // 2

    console.log(coinChange(coins, amount));
}

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    const pay = new Array(amount + 1).fill(Infinity);

    pay[0] = 0;
    
    for(let idx = 0; idx < coins.length; idx++){
        for(let jdx = coins[idx]; jdx <= amount; jdx++){
            pay[jdx] = Math.min(pay[jdx], pay[jdx - coins[idx]] + 1);
        }
    }
    
    if(pay[amount] === Infinity) return -1;
    return pay[amount];
};

var coinChangePractice = function(coins, amount) {

    // pay[val] = n // n is min number of coins that pays val
    const pay = new Array(amount + 1).fill(Infinity);

    // initial setting
    pay[0] = 0;
    
    // 1. duplicate logic
    // for loop contains " pay[coins[idx]] = Math.min(pay[coins[idx]], pay[0] + 1) "
    for(let idx = 1; idx < coins.length; idx++){
        pay[coins[idx]] = 1;
    }
    
    // 2. coin's order doen't matter 
    for(let idx = 0; idx < coins.length; idx++){
    //for(let idx = coins.length - 1; idx >= 0; idx--){ 
    
        // 3. amount's order does matter
        // to cal pay[val], needs pay[0] ~ pay[val-1]
        //                  not pay[val+1] ~ pay[amount]
        for(let jdx = coins[idx]; jdx <= amount; jdx++){
        //for(let jdx = amount; jdx <= coins[idx]; jdx--){
            
            // 4. bottom-up (tabulation)
            pay[jdx] = Math.min(pay[jdx], pay[jdx - coins[idx]] + 1);
        }
    }
    
    // cannot be made up
    if(pay[amount] === Infinity) return -1;
    return pay[amount];
};

main();