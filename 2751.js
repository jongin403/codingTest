// 백준
// 문제 : 2751 수 정렬하기 2
// 티어 : 실버5
// 사용 알고리즘 : 정렬
// 시간 복잡도 : 
// 메모리 초과

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
    const intList = new Array(10001);
    arr.forEach(item => {
        if(!intList[item]) intList[item] = true;
    });

    // 제출
    for(let i = 1; i <= 10000; i++){
        for(let j = 0; j < intList[i]; j++){
            console.log(i);
        }
    }
}
