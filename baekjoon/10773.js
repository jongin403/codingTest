// 백준
// 문제 : 10773 제로
// 티어 : 실버4
// 사용 알고리즘 : 스택
// 시간 복잡도 : O(n)
// 제출 완료

const fs = require('fs');
const path = [
    '/dev/stdin'  // baekjoon 제출용
  , './input.txt' // local 작업용
];

// 입력 받기
const [n, ...arr] = require('fs').readFileSync(path[1])
                              .toString()
                              .trim()
                              .split("\n")
                              .map(v => +v);

solution(n, arr);

function solution(n, arr) {
    // 입력 확인
    //const inputExample = `n:${n} / arr:${arr}`;
    //console.log(`${inputExample}`);

    // 로직
    const numStack = [];
    arr.forEach(elem => {
        if(elem === 0) numStack.pop();
        else numStack.push(elem);
    });

    const result = numStack.reduce((prev, curr) => prev + curr, 0);

    // 제출
    console.log(result);
}
