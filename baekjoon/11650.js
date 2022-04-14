// 백준
// 문제 : 11650 수 좌표 정렬하기
// 티어 : 실버5
// 사용 알고리즘 : 정렬
// 시간 복잡도 : 
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

const loc = [];
arr.forEach(elem => {
    let locElem = {
        x : elem.split(" ")[0]
      , y : elem.split(" ")[1]
    }
    
    loc.push(locElem);
});

solution(Number(n), loc);

function solution(n, loc) {
    // 입력 확인
    //const inputExample = `n:${n} / loc:${loc}`;
    //console.log(`${inputExample}`);

    let result = "";
    loc.sort((a, b) => {
        if(a.x === b.x) return a.y - b.y;
        else return a.x - b.x;
    });
    loc.forEach((item, index) => {
        if(index !== 0) result += `\n${item.x} ${item.y}`;
        else result += `${item.x} ${item.y}`;
    });

    // 제출
    console.log(result);    
}
