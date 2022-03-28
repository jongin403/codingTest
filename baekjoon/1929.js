// 백준
// 문제 : 1929 소수 구하기
// 티어 : 실버3
// 사용 알고리즘 : 
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
                            .split(' ')
                            .map(v => +v);

solution(m, n);

function solution(m, n) {
    // 입력 확인
    //const inputExample = `n:${n} m:${m}`;
    //console.log(`inputExample:${inputExample}`);

    // 로직
    let result = [];
    
    for(let idx = m; idx <= n; idx++){
        if(isPrime(idx)){
            result.push(idx);
        }
    }

    function isPrime(n){
        if(n === 1) return false;
        
        let result = true;
        for(let idx = 2; idx * idx <= n; idx++){
            if(n % idx === 0){
                result = false;
                break;
            }
        }
        return result;
    }

    // 제출
    result.forEach(item => console.log(item));
}
