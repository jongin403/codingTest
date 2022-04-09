// 백준
// 문제 : 2805 나무 자르기
// 티어 : 실버3
// 사용 알고리즘 : Parametric Search(파라메트릭 서치)
// 시간 복잡도 : O(logn)
// 제출 완료

const fs = require('fs');
const path = [
    '/dev/stdin'  // baekjoon 제출용
  , './input.txt' // local 작업용
];

// 입력 받기
const [n, m, ...arr] = require('fs').readFileSync(path[1])
                                    .toString()
                                    .trim()
                                    .split(/\s+/)
                                    .map(v => +v);

solution(n, m, arr);

function solution(n, m, arr) {
    // 입력 확인
    //const inputExample = `n:${n} m:${m} arr:${arr}`;
    //console.log(`inputExample:${inputExample}`);

    // 로직
    let result = 0;
    let left = 0;

    // Math.max 의 인자 개수는 1,000,000 개 까지만 가능
    //let right = Math.max(...arr);
    let right = Number.MAX_SAFE_INTEGER;

    while(left <= right){
        const mid = Math.floor((left + right) / 2);
        let curSum = 0;

        arr.forEach(function(item){
            if(mid < item) curSum += item - mid;
        });
        //console.log(`left:${left} / mid:${mid} / right:${right} curSum:${curSum}`)
        
        // curSum === m 에 break 를 하지 않는 이유
        // 같은 curSum 이어도 더 큰 result 가 있을 수 있기 때문
        if(curSum < m){
            right = mid - 1;
        } else {
            result = mid;
            left = mid + 1;
        }
    }
    
    // 제출
    console.log(result);
}
