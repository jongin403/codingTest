// 백준
// 문제 : 7568 덩치
// 티어 : 실버5
// 사용 알고리즘 : 
// 시간 복잡도 : O(n^2)
// 제출 완료

const fs = require('fs');
const path = [
    '/dev/stdin'  // baekjoon 제출용
  , './input.txt' // local 작업용
];

// 입력 받기
const [n, ...arr] = require('fs').readFileSync(path[1])
                              .toString()
                              .trim()
                              .split("\n");

const bulk = [];
arr.forEach(elem => {
    let bulkElem = {
        w : Number(elem.split(" ")[0])
      , t : Number(elem.split(" ")[1])
    }
    
    bulk.push(bulkElem);
});

solution(Number(n), bulk);

function solution(n, bulk) {
    // 입력 확인
    //const inputExample = `n:${n} / bulk:${bulk}`;
    //console.log(`${inputExample}`);

    // 로직
    let result = "";
    bulk.forEach((elem,index,arr) => {
        const rank = arr.filter(item => elem.w < item.w && elem.t < item.t).length + 1;
        result += rank.toString() + " ";
    });
    
    // 제출
    console.log(result);
}
