// 백준
// 문제 : 2631 줄세우기
// 티어 : 골드5
// 사용 알고리즘 : LIS(Longest Increasing Subsequence), 이분탐색
// 시간 복잡도 : O(nlogn)
// 제출 완료

// 참고 자료
// https://chanhuiseok.github.io/posts/algo-49/

const fs = require('fs');
const path = [
    '/dev/stdin'  // baekjoon 제출용
  , './input.txt' // local 작업용
];

// 입력 받기
const [n, ...arr] = require('fs').readFileSync(path[1])
                              .toString()
                              .trim()
                              .split('\n')
                              .map(v => +v);
solution(n, arr);

function solution(n, arr) {
    // 입력 확인
    //const inputExample = `n:${n} arr:${arr}`;
    //console.log(`inputExample:${inputExample}`);

    // 로직
    // 1) DP : O(n^2)
    // const dpLen = [] // dpLen[i] = i번쨰 인덱스에서 끝나는 최장 증가 부분 수열의 길이
    // for (let i = 0; i < n; i++){
    //     dpLen[i] = 1;
    //     for (let j = 0; j < i; j++){
    //         if(arr[j] < arr[i]){
    //             dpLen[i] = max(dpLen[i], dpLen[j] + 1);
    //         }        
    //     }
    // }

    // 2) 이분탐색 : O(nlogn)
    const tails = new Array(n);
    let biLen = 0;

    arr.forEach((item) => {
        let left = 0;
        let right = biLen;

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
