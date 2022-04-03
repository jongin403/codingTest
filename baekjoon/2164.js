// 백준
// 문제 : 2164 카드2
// 티어 : 실버4
// 사용 알고리즘 : 
// 시간 복잡도 : 
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

solution(Number(n));

function solution(n) {
    // 입력 확인
    //const inputExample = `n:${n}`;
    //console.log(`${inputExample}`);

    // 로직
    const cardList = new Array(n);
    for(let i = 1; i <= n; i++){
        cardList[i-1] = i;
    }

    let upper = 0;
    let lower = n - 1;

    // 제일 위에 있는 카드를 버린다
    if(1 < n) upper += 1;     

    while(0 < lower - upper){
        // 카드를 맨 아래로 옮긴다
        const moveCardNum = cardList[upper];
        upper += 1;
        lower += 1;
        cardList[lower] = moveCardNum;

        // 제일 위에 있는 카드를 버린다
        upper += 1; 
    }
    
    const result = cardList[upper];

    // 제출
    console.log(result);
}
