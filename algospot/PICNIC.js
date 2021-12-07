// 알고스팟
// 알고스팟 PICNIC
// 사용 알고리즘 : X 
// 시간 복잡도 : X

// 실행 방법 : 터미널에 node algospot/basicForm.js 입력
// 종료 방법 : Ctrl + c
function main(){

    const linePerTestCase = 2;
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
        if (count === Number(input[0]) * linePerTestCase) {
            rl.close();
        }
    }).on('close', function() {
        for (var i = 1; i <= +input[0]; i++){
            console.log(solution(input[i]));
        }
    });
}

function solution(inputLine) {
    console.log(`inputLine:${inputLine}`);

    return 0;
}

main();