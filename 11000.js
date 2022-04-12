// 백준
// 문제 : 11000 강의실 배정
// 티어 : 골드5
// 사용 알고리즘 : 그리디
// 시간 복잡도 : 
// 메모리 초과

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
const time = [];
arr.forEach(item => {
    let [start, end] = item.split(' ');
    time.push([Number(start), Number(end)]);
});
solution(Number(n), time);

function solution(n, time) {
    // 입력 확인
    //const inputExample = `n:${n} time:${time}`;
    //console.log(`inputExample:${inputExample}`);

    // 로직
    let result = 0;

    time.forEach(curTime => {
        //console.log(`curTime:${curTime[0]}~${curTime[1]}`);
        
        const curNum = time.filter(elem => {
            if(elem[0] < curTime[1] && curTime[1] <= elem[1]) return true;
        }).length;
        
        result = result < curNum ? curNum : result;
    })

    // 제출
    console.log(result);
}
