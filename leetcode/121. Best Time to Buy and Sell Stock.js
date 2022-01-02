// Leet Code
// #121. Best Time to Buy and Sell Stock
// Success
// Runtime: 206 ms, faster than 5.08% of JavaScript online submissions for Best Time to Buy and Sell Stock.
// Memory Usage: 54.6 MB, less than 5.02% of JavaScript online submissions for Best Time to Buy and Sell Stock.

function main(){
    // Input
    prices = [7,6,4,3,4];
    // Output
    // 5
    console.log(maxProfit(prices));
}

/**
 * @param {number[]} prices
 * @return {number}
 */
// var maxProfit = function(prices) {
//     let max = 0;

//     for(let idx = 0; idx < prices.length - 1; idx++){
//         for(let jdx = idx + 1; jdx < prices.length; jdx++){
//             if(max < prices[jdx] - prices[idx]){
//                 max = prices[jdx] - prices[idx];
//             }
//         }    
//     }

//     return max;
// };

// var maxProfit = function(prices) {
//     let max = 0;
//     const diff = new Array(prices.length - 1);
//     // dp[idx] : max sum of diff that idx is right end point 
//     const dp = new Array(prices.length - 1); 

//     // makes 'Maximum Subarray' problem
//     for(let idx = 1; idx < prices.length; idx++){
//         diff[idx - 1] = prices[idx] - prices[idx - 1];
//     }

//     for(let idx = 0; idx < diff.length; idx++){
//         if(0 != idx && dp[idx - 1] + diff[idx] > diff[idx]){
//             dp[idx] = dp[idx - 1] + diff[idx];
//         } else {
//             // start sum from idx
//             dp[idx] = diff[idx];
//         }            
//         //console.log(`diff:${diff[idx]}`);
//     }

//     max = Math.max(...dp);
//     if(max < 0){
//         max = 0;
//     }
//     return max;
// };

var maxProfit = function(prices) {
    let maxProfit = 0;
    let minPrice = prices[0];

    // update maxProfit & minPrice
    for(let idx = 0; idx < prices.length; idx++){
        if(prices[idx] < minPrice){
            minPrice = prices[idx];
        } else if(maxProfit < prices[idx] - minPrice){
            maxProfit = prices[idx] - minPrice;
        }
        //console.log(`minPrice:${minPrice} / maxProfit:${maxProfit}`);        
    }

    return maxProfit;
};

main();