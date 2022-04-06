// 백준
// 문제 : 11399 ATM
// 티어 : 실버3
// 사용 알고리즘 : 
// 시간 복잡도 : O(n)
// 제출 완료

const fs = require('fs');
const path = [
    '/dev/stdin'  // baekjoon 제출용
  , './input.txt' // local 작업용
];

// 입력 받기
const [n, m] = require('fs').readFileSync(path[1])
                            .toString()
                            .trim()
                            .split('\n');

solution(Number(n), m.split(' ').map(v => +v));

function solution(n, arr) {
    // 입력 확인
    //const inputExample = `n:${n} / arr:${arr}`;
    //console.log(`inputExample:${inputExample}`);

    // 로직
    let result = 0;
    arr.sort((a, b) => a - b);
    
    let sumArr = [];
    arr.forEach((item, index) => {
        if(0 < index) sumArr[index] = sumArr[index - 1] + item;
        else sumArr[index] = item;
    });

    sumArr.forEach(item => result += item);

    // 제출
    console.log(result);
}
