// 백준
// 문제 : 1181 단어 정렬
// 티어 : 실버5
// 사용 알고리즘 : 
// 시간 복잡도 : 
// 개발중

const fs = require('fs');
const path = [
    '/dev/stdin'  // baekjoon 제출용
  , './input.txt' // local 작업용
];

// 입력 받기
const [n, ...arr] = require('fs').readFileSync(path[1])
                              .toString()
                              .trim()
                              .split('\n');
solution(Number(n), arr);

function solution(n, arr) {
    // 입력 확인
    //const inputExample = `n:${n} arr:${arr}`;
    //console.log(`inputExample:${inputExample}`);

    // 로직
    const arrSet = new Set(arr);
    const dupRemoveArr = Array.from(arrSet);

    dupRemoveArr.sort((a,b) => {
        if(a.length < b.length) return -1;
        else if(a.length > b.length) return 1;
        else return b < a ? 1 : -1;
    });

    let result = dupRemoveArr[0];
    dupRemoveArr.forEach((item, index) => {
        if(index !== 0) result += "\n" + item;
    });
    
    // 제출
    console.log(result);
}
