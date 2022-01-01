// Leet Code
// #13. Roman to Integer
// Success 
// Runtime: 160 ms, faster than 37.11% of JavaScript online submissions for Roman to Integer.
// Memory Usage: 45 MB, less than 55.22% of JavaScript online submissions for Roman to Integer.

function main(){
    // Input
    s = "III";
    // Output
    // 3
    console.log(romanToInt(s));
}

/**
 * @param {string} s
 * @return {number}
 */
 var romanToInt = function(s) {
    // if s has not reversed value, add string one by one
    // if s has reversed value, cal two characters
    const rMap = new Map([
        ['I',    1]
      , ['V',    5]
      , ['X',   10]
      , ['L',   50]
      , ['C',  100]
      , ['D',  500]
      , ['M', 1000]
    ]);

    let result = 0;
    let subFlag = false; // IV, IX, XL, XC, CD, CM

    for(let idx = 1; idx <= s.length; idx++){
        const currSymbol = s[idx];
        const prevSymbol = s[idx - 1];
        
        // in prev loop, calc two character
        if(subFlag === true){
            subFlag = false;
            continue;
        }

        if(rMap.get(prevSymbol) < rMap.get(currSymbol)){
            subFlag = true;
            result += rMap.get(currSymbol) - rMap.get(prevSymbol);
        } else {
            result += rMap.get(prevSymbol);
        }
    }

    return result;
};

main();