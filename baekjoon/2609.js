// 백준
// 문제 : 2609 최대공약수와 최소공배수
// 티어 : 실버5
// 사용 알고리즘 : 유클리드 호제법
// 시간 복잡도 : 
// 제출 완료

const fs = require('fs');
const path = [
    '/dev/stdin'  // baekjoon 제출용
  , './input.txt' // local 작업용
];

// 입력 받기
const [m, n] = require('fs').readFileSync(path[1])
                              .toString()
                              .trim()
                              .split(" ").map(v => +v);

solution(m, n);

function solution(m, n) {
    // 입력 확인
    //const inputExample = `m:${m} / n:${n}`;
    //console.log(`${inputExample}`);

    // 로직
    const gcd = getGcd(m, n);
    const lcm = n * m / gcd
    
    function getGcd(m, n){
        if(n === 0) return m;
        else return getGcd(n, m % n);
    }
    
    // 제출
    console.log(gcd);
    console.log(lcm);
}
