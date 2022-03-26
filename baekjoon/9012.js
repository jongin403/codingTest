// 백준
// 문제 : 9012 괄호
// 티어 : 실버4
// 사용 알고리즘 : 
// 시간 복잡도 : O(N)

const fs = require('fs');
const path = [
    '/dev/stdin'  // baekjoon 제출용
  , './input.txt' // local 작업용
];

// 입력 받기
const [n, ...arr] = require('fs').readFileSync(path[1]).toString().trim().split('\n');
solution(n, arr);

function solution(n, arr) {
    // 입력 확인
    //const inputExample = `n:${n} arr:${arr}`;
    //console.log(`inputExample:${inputExample}`);

    // 로직
    const result = [];

    for(let i = 0; i < arr.length; i++){
        let curSum = 0;
        let curResult = "YES";
        
        for(let j = 0; j < arr[i].length; j++){

            if(arr[i][j] === '(') curSum += 1;
            else curSum -= 1;

            if(curSum < 0){
                curResult = "NO";
                break;
            }
        }

        if(curSum !== 0) curResult = "NO";
        result.push(curResult);
    }

    // 제출
    result.forEach(item => console.log(item));
}
