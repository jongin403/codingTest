// Leet Code
// #122. Best Time to Buy and Sell Stock II
// Success
// Runtime: 140 ms, faster than 9.52% of JavaScript online submissions for Best Time to Buy and Sell Stock II.
// Memory Usage: 39.9 MB, less than 77.25% of JavaScript online submissions for Best Time to Buy and Sell Stock II.

function main(){
    // Input // Output
    prices = [7,1,5,3,6,4]; // 7

    console.log(maxProfit(prices));
}

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let profit = 0;
    let curPrice = prices[0];

    for(let idx = 1; idx < prices.length; idx++){
        curPrice = prices[idx];

        // don't need to consider future profit
        if(prices[idx - 1] < prices[idx]){            
            profit += prices[idx] - prices[idx - 1];
        }
    }

    return profit;
};

main();