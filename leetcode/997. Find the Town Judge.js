// Leet Code
// #997. Find the Town Judge
// Success
// Runtime: 1152 ms, faster than 5.02% of JavaScript online submissions for Find the Town Judge.
// Memory Usage: 50.8 MB, less than 11.63% of JavaScript online submissions for Find the Town Judge.

function main(){
    // Input // Output
    n = 2, trust = [[1,2]]; // 2

    console.log(findJudge(n, trust));
}

/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function(n, trust) {
    for(let curSuspect = 1; curSuspect < n + 1; curSuspect++){
        if(n - 1 <= trust.filter(el => el[1] === curSuspect).length){
            if(!trust.some(el => el[0] === curSuspect)){
                return curSuspect;
            }
        }
    }

    return -1;
};

main();