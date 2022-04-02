// 백준
// 문제 : 10828 스택
// 티어 : 실버4
// 사용 알고리즘 : 스택
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
    const stack = [];

    command.forEach(item =>{
        if(item[0] === 'push'){
            stack.push(Number(item[1]));
        } else if(item[0] === 'pop'){
            const val = stack.pop();
            result.push(val ? val : -1);
        } else if(item[0] === 'size'){
            const val = stack.length;
            result.push(val);
        } else if(item[0] === 'empty'){
            const val = stack.length;
            result.push(0 < val ? 0 : 1);
        } else if(item[0] === 'top'){
            const size = stack.length;
            if(size < 1) result.push(-1);
            else result.push(stack[size - 1]);
        } 
    });
    
    let finalResult = result[0];
    result.forEach((item, index) => {
        if(index !== 0) finalResult += "\n" + item;
    });
    
    // 제출
    console.log(finalResult);
}
