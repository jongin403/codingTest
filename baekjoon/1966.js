// 백준
// 문제 : 1966 프린터 큐
// 티어 : 실버3
// 사용 알고리즘 : 
// 시간 복잡도 : 
// 

const fs = require('fs');
const path = [
    '/dev/stdin'  // baekjoon 제출용
  , './input.txt' // local 작업용
];

// 입력 받기
const totInput = require('fs').readFileSync(path[1]).toString().trim().split('\n');
const testCase = totInput[0];
for(let i = 0; i < testCase; i++){
    let n = totInput[2*i + 1].split(/\s+/)[0];
    let m = totInput[2*i + 1].split(/\s+/)[1];
    let importance = totInput[2*i + 2].split(/\s+/);
    solution(n, m, importance);
}

function solution(n, m, importance) {
    // 입력 확인
    // const inputExample = `n:${n} m:${m} importance:${importance}`;
    // console.log(`inputExample:${inputExample}`);

    // 로직
    
    // 1. importance[m] 보다 큰 우선순위 갯수 세기
    // 2. 
    // 가장 마지막에 있는 녀석하고 m 과 같은 우선순위에 있는 녀석 갯수 찾기

    const importance = [];
    let prevLastIndex = 0;
    let curLastIndex = -1;

    for(let idx = 9; 1 <= idx; idx--){
        // 중요도 순으로 찾기
        let curLastIndex = -1;
        for(let jdx = importance.length - 1; 0 <= jdx; jdx--){
            if(importance[jdx] === idx){
                curLastIndex = jdx;
                break;
            }
        }

        if(curLastIndex !== -1){

        }
    }
    

    

    // 제출
    result.forEach(item => console.log(item));
}
