// 백준
// 문제 : 11055 가장 큰 증가 부분 수열
// 티어 : 실버2
// 사용 알고리즘 : 
// 시간 복잡도 : 

const fs = require('fs');
const path = [
    '/dev/stdin'  // baekjoon 제출용
  , './input.txt' // local 작업용
];

// 입력 받기
const [n, ...arr] = require('fs').readFileSync(path[1])
                              .toString()
                              .trim()
                              .split(/\s+/)
                              .map(v => +v);
solution(n, arr);

function solution(n, arr) {
    // 입력 확인
    const inputExample = `n:${n} arr:${arr}`;
    console.log(`inputExample:${inputExample}`);

    // 로직

    const tails = new Array(n);
    let biLen = 0;
    let maxSum = 0;

    arr.forEach((item) => {
        let left = 0;
        let right = biLen;
        let sum = 0;

        while (left != right) {
            let mid = (left + right) / 2;
            
            if (tails[mid] < item) left = mid + 1;
            else right = mid;
        }

        tails[left] = item;
        
        if (left === biLen) biLen++;
    });

    let result = n - biLen;

    // 제출
    console.log(result);
}
