// 알고스팟
// 알고스팟 제출폼 
// 사용 알고리즘 : X 
// 시간 복잡도 : X

// 실행 방법 : 터미널에 node algospot/basicForm.js 입력
// 종료 방법 : Ctrl + c
function main(){

    const input = [];
    let count = -1;
    const readline = require('readline');
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.on('line', function(line) {
        input.push(line.trim());
        count ++;
        if (count === Number(input[0])) {
            rl.close();
        }
    }).on('close', function() {
        for (var i = 1; i <= +input[0]; i++){
            console.log('Hello, ' + input[i] + '!');
        }
    });
}

function solution(input1, input2, input3) {
    console.log(`input1:${input1} / input2:${input2} / input3:${input3}`);
    return 0;
}

main();