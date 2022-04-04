// 백준
// 문제 : 10814 나이순 정렬
// 티어 : 실버5
// 사용 알고리즘 : 
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

const user = [];
arr.forEach(elem => {
    let userElem = {
        age : Number(elem.split(" ")[0])
      , name : elem.split(" ")[1]
    }
    
    user.push(userElem);
});

solution(Number(n), user);

function solution(n, user) {
    // 입력 확인
    //const inputExample = `n:${n} / user:${user}`;
    //console.log(`${inputExample}`);

    // 로직
    let result = "";
    const nameList = []; // nameList[n] : 나이가 n 인 사람의 이름 목록
    user.forEach(elem => {
        if(!nameList[elem.age]) nameList[elem.age] = [];
        nameList[elem.age].push(`${elem.age} ${elem.name}`);
    });
    
    // 제출
    nameList.forEach(elem => {
      elem.forEach(item => {
        console.log(item);
      })
    })
}
