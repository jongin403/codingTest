// 백준
// 문제 : 10845 큐
// 티어 : 실버4
// 사용 알고리즘 : 큐
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
    const queue = [];
    let front = 0;
    let back = -1;

    command.forEach(item =>{
        if(item[0] === 'push'){
            queue.push(Number(item[1]));
            back ++;
        } else if(item[0] === 'pop'){
            if(0 < back - front + 1) { 
                result.push(queue[front]);
                front++;
            } else result.push(-1);
        } else if(item[0] === 'size'){
            result.push(back - front + 1);
        } else if(item[0] === 'empty'){
            result.push(0 < back - front + 1 ? 0 : 1);
        } else if(item[0] === 'front'){
            const val = 0 < back - front + 1 ? queue[front] : -1 ;
            result.push(val);
        } else if(item[0] === 'back'){
            const val = 0 < back - front + 1 ? queue[back] : -1 ;
            result.push(val);
        } 
    });
    
    let finalResult = result[0];
    result.forEach((item, index) => {
        if(index !== 0) finalResult += "\n" + item;
    });
    
    // 제출
    console.log(finalResult);
}
