// Leet Code
// #14. Longest Common Prefix
// Success
// Runtime: 104 ms, faster than 35.91% of JavaScript online submissions for Longest Common Prefix.
// Memory Usage: 38.8 MB, less than 97.07% of JavaScript online submissions for Longest Common Prefix.

function main(){
    // Input // Output
    strs = ["flower","flow","flight"]; // "fl"

    console.log(longestCommonPrefix(strs));
}

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    
    if(strs.length === 1){
        return strs[0];
    }

    const strArray = strs[0].split('');
    let breakFlag = false;
    let answer = "";
    let prefix = "";

    //console.log(`strArray:${strArray}`);

    for(let idx = 0; idx < strArray.length; idx++){
        prefix += strArray[idx];
        //console.log(`prefix:${prefix}`);

        for(let jdx = 1; jdx < strs.length; jdx++){
            if(strs[jdx].indexOf(prefix) !== 0){
                breakFlag = true;
            }
        }
        if(breakFlag){
            break;
        }
        answer += strArray[idx];
    }

    return answer;
};

main();