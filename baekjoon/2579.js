// 백준
// 문제 : 2579 계단 오르기
// 티어 : 실버3
// 사용 알고리즘 : DP, memoization
// 시간 복잡도 : O(n)
// 제출 완료

const fs = require('fs');
const path = [
    '/dev/stdin'  // baekjoon 제출용
  , './input.txt' // local 작업용
];

// 입력 받기
const [...arr] = require('fs').readFileSync(path[1])
                              .toString()
                              .trim()
                              .split('\n')
                              .map(v => +v);
solution(arr);

function solution(arr) {
    // 입력 확인
    //const inputExample = `n:${n} arr:${arr}`;
    //console.log(`inputExample:${inputExample}`);

    // 로직
    
    // n 번째 계단을 도착이라고 생각했을 때의 최대값
    const memo = [];
    
    const dp = function(n){
        if(!memo[n]){            
            if(n === 1) memo[n] = arr[1];
            if(n === 2) memo[n] = arr[1] + arr[2];
            if(n === 3) memo[n] = Math.max(arr[1] + arr[3]
                                         , arr[2] + arr[3]);
            if(4 <= n){
                memo[n] = Math.max(dp(n-2) + arr[n]
                                 , dp(n-3) + arr[n-1] + arr[n]);
            }
        }
        return memo[n];
    }

    let result = dp(arr[0]);

    // 제출
    console.log(result);
}
