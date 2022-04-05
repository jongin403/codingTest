// 백준
// 문제 : 10866 덱
// 티어 : 실버4
// 사용 알고리즘 : 덱
// 시간 복잡도 : O(n)
// 제출 완료

const fs = require('fs');
const path = [
    '/dev/stdin'  // baekjoon 제출용
  , './input.txt' // local 작업용
];

// 입력 받기
const [n, ...commandLine] = require('fs').readFileSync(path[1])
                            .toString()
                            .trim()
                            .split('\n');

const command = [];
commandLine.forEach(item => {
    command.push(item.split(' '));
});
solution(n, command);

function solution(n, command) {
    // 입력 확인
    //const inputExample = `n:${n} / command:${command}`;
    //console.log(`${inputExample}`);

    // 로직
    const result = [];
    const dequeue = [];

    command.forEach(item =>{
        if(item[0] === 'push_front'){
            dequeue.unshift(Number(item[1]));
        } else if(item[0] === 'push_back'){
            dequeue.push(Number(item[1]));            
        } else if(item[0] === 'pop_front'){
            if(0 < dequeue.length)  result.push(dequeue.shift());
            else result.push(-1);
        } else if(item[0] === 'pop_back'){
            if(0 < dequeue.length) result.push(dequeue.pop());
            else result.push(-1);
        } else if(item[0] === 'size'){
            result.push(dequeue.length);
        } else if(item[0] === 'empty'){
            result.push(0 < dequeue.length ? 0 : 1);
        } else if(item[0] === 'front'){
            if(0 < dequeue.length)  result.push(dequeue[0]);
            else result.push(-1);
        } else if(item[0] === 'back'){
            if(0 < dequeue.length)  result.push(dequeue[dequeue.length - 1]);
            else result.push(-1);
        }
    });
    
    let finalResult = result[0];
    result.forEach((item, index) => {
        if(index !== 0) finalResult += "\n" + item;
    });
    
    // 제출
    console.log(finalResult);
}
