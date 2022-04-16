// 백준
// 문제 : 7576 토마토
// 티어 : 골드5
// 사용 알고리즘 : 2차원 배열
// 시간 복잡도 : 
// 시간 초과

const fs = require('fs');
const path = [
    '/dev/stdin'  // baekjoon 제출용
  , './input.txt' // local 작업용
];

// 입력 받기
const input = require('fs').readFileSync(path[1])
                              .toString()
                              .trim()
                              .split("\n");

const [m, n] = input[0].split(" ").map(v => +v);
const storage = [];
for(let i = 0; i < n; i++){
    storage.push(input[i + 1].split(" ").map(v => +v));
}

solution(m, n, storage);


function isAllNonZero(storage){
    let isAllNonZero = storage.every(row => {
        return row.every(elem => elem !== 0);
    })    
    return isAllNonZero;
}

function printStorage(storage){
    console.log(`storage`);
    storage.forEach(item => {
        let curLine = "";
        item.forEach(elem => {
            curLine += elem.toString() + " ";
        });
        console.log(curLine);
    });
}

function solution(m, n, storage) {
    // 입력 확인
    //const inputExample = `m:${m} / n:${n} / storage:${storage}`;
    //console.log(`${inputExample}`);

    // 로직
    // storage 의 상태를 바꾸고 성공했을 경우 true 를 반환
    storage.nextState = function(m, n){
        const storage = this;
        let isChange = false;
        const target = [];

        for(let idx = 0; idx < n; idx++){
            for(let jdx = 0; jdx < m; jdx++){
                if(storage[idx][jdx] !== 1){
                    continue;
                }

                if(0 <= idx - 1 && storage[idx-1][jdx] === 0) target.push([idx-1, jdx]);
                if(0 <= jdx - 1 && storage[idx][jdx-1] === 0) target.push([idx, jdx-1]);
                if(idx + 1 < n && storage[idx+1][jdx] === 0) target.push([idx+1, jdx]);
                if(jdx + 1 < m && storage[idx][jdx+1] === 0) target.push([idx, jdx+1]);
            }
        }

        for(let kdx = 0; kdx < target.length; kdx++){
            storage[target[kdx][0]][target[kdx][1]] = 1;
        }

        if(0 < target.length) isChange = true;
        return isChange;
    }

    let result = -1;
    
    let dayCnt = 0;
    while(true){
        if(isAllNonZero(storage)){
            result = dayCnt;
            break;
        }
        //printStorage(storage);
        let isChange = storage.nextState(m, n);
        if(isChange){
            dayCnt++;
        } else {
            result = -1;
            break;
        }
    }

    // 제출
    console.log(result);
}
