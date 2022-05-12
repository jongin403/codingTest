// 백준
// 문제 : 2749 피보나치 수 3
// 티어 : 골드2
// 사용 알고리즘 : Fibonacci
// 시간 복잡도 : 
// 

const fs = require('fs');
const path = [
    '/dev/stdin'  // baekjoon 제출용
  , './input.txt' // local 작업용
];

// 입력 받기
const n = require('fs').readFileSync(path[1])
                       .toString()
                       .trim();

solution(parseInt(n));

function solution(n) {
    // 입력 확인
    //const inputExample = `n:${n}`;
    //console.log(`inputExample:${inputExample}`);

    // 로직
    // 공식
    const ROOT_5 = Math.pow(5, 0.5)
    const ratio = (1 + ROOT_5) / 2;
    
    // 제출
    let result = Math.round((Math.pow(ratio, n) - Math.pow(1 - ratio, n)) / ROOT_5);
    console.log(result % 1000000);
}
