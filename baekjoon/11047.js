// 백준
// 문제 : 11047 동전 0
// 티어 : 실버3
// 사용 알고리즘 : 그리디
// 시간 복잡도 : 
// 제출 완료

const fs = require('fs');
const path = [
    '/dev/stdin'  // baekjoon 제출용
  , './input.txt' // local 작업용
];

// 입력 받기
const [n, k, ...arr] = require('fs').readFileSync(path[1])
                              .toString()
                              .trim()
                              .split(/\s+/)
                              .map(v => +v);

solution(n, k, arr);

function solution(n, k, arr) {
    // 입력 확인
    //const inputExample = `n:${n} / k:${k} / arr:${arr}`;
    //console.log(`inputExample:${inputExample}`);

    // 로직
    let result = 0;
    let leftK = k;

    for(let idx = arr.length - 1; 0 <= idx; idx--){
        result += Math.floor(leftK / arr[idx]);
        leftK = leftK % arr[idx];
    }

    // 제출
    console.log(result);
}
