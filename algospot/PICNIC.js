// 알고스팟
// 알고스팟 PICNIC
// 사용 알고리즘 : X 
// 시간 복잡도 : X

// 실행 방법 : 터미널에 node algospot/basicForm.js 입력
// 종료 방법 : Ctrl + c
function main(){

    const linePerTestCase = 2;
    const testCase;
    const input = new Array(linePerTestCase);

    let lineCount = 0;
    
    const readline = require('readline');
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.on('line', function(line) {
        
        if(testCase == undefined){
            // testCase 의 갯수 입력
            testCase = line.trim();
        } else if((lineCount - 1) % linePerTestCase == 1){
            input[0].push(line.trim());            
        }
        
        lineCount++;

        if (lineCount === Number(testCase) * linePerTestCase + 1) {
            rl.close();
        }

    }).on('close', function() {
        for (var i = 1; i <= C; i++){
            console.log(setInput(input1[i], input2[i]));
        }
    });
}

function setInput(){

}

function solution(inputLine) {
    console.log(`inputLine:${inputLine}`);

    return 0;
}

main();