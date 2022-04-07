// 백준
// 문제 : 11726 2×n 타일링
// 티어 : 실버3
// 사용 알고리즘 : DP
// 시간 복잡도 : O(n)
// 제출 완료

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
    const memo = [];

    function dp(n){
        if(!memo[n]){
            if(n === 1) memo[n] = 1;
            else if(n === 2) memo[n] = 2;
            else if(3 <= n) memo[n] = dp(n - 2) + dp(n - 1);
        }
        return memo[n] % 10007;
    }

    let result = dp(n);

    // 제출
    console.log(result);
}
