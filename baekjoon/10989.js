// 백준
// 문제 : 10989 수 정렬하기 3
// 티어 : 실버5
// 사용 알고리즘 : 계수 정렬
// 시간 복잡도 : 
// 메모리 초과 : 백준 특성상 Node.js 의 메모리가 적어서 발생하는 문제로, 현재 js 로 풀수 없음

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
    const intList = [];
    arr.forEach(item => {
        if(!intList[item]) intList[item] = 1;
        else intList[item] += 1;
    });

    // 제출
    let totResult = "";

    for(let i = 1; i <= 10000; i++){
        for(let j = 0; j < intList[i]; j++){
            totResult += i + "\n";
        }
    }

    totResult = totResult.replace(/\n$/, ""); // 마지막 개행문자 제거
    console.log(totResult);
}
