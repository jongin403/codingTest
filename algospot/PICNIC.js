// 알고스팟
// 알고스팟 PICNIC
// 사용 알고리즘 : X 
// 시간 복잡도 : X

// 실행 방법 : 터미널에 node algospot/basicForm.js 입력
// 종료 방법 : Ctrl + c

const linePerTestCase = 2; // testCase 당 입력 라인 수 세팅

function main(){

    let lineCount = 0;
    let testCase = 0;

    // 2차원 input 배열 생성
    const input = new Array(linePerTestCase);
    for (let idx = 0; idx < linePerTestCase; idx++) {
        input[idx] = [];
    }

    // terminal line 을 읽기 위한 객체 생성
    const readline = require('readline');
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    // 줄을 읽을 때마다 처리
    rl.on('line', function(line) {
        lineCount++;

        if(testCase == 0){
            // testCase 의 갯수 입력
            testCase = line.trim();
        } else {
            // 테스트 케이스의 첫째 줄 : input[0] ...
            // 테이스 케이스의 둘째 줄 : input[1] ...
            // ...
            for(let idx = 0; idx < linePerTestCase; idx++){
                if((lineCount - 2) % linePerTestCase == idx){
                    input[idx].push(line.trim());            
                }
            }
        }        
        
        // 종료 조건
        if (lineCount === Number(testCase) * linePerTestCase + 1) {
            rl.close();
        }

    }).on('close', function() {
        // 입력 세팅
        setInput(input);
    });
}

function setInput(input){
    const testCase = input[0].length;

    for(let idx = 0; idx < testCase; idx++){
        console.log(`${idx + 1} 번째 testCase`);
        // linePerTestCase 만큼 input 을 파라메터로 넘기기
        console.log(`${solution(input[0][idx], input[1][idx])}`);
    }
}

function solution(input0, input1) {
    const n = input0.split(' ')[0];
    const m = input0.split(' ')[1];
    console.log(`n:${n} / m:${m}`);
    
    let result = "";
    return result;
}

main();