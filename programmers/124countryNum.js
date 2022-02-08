// 프로그래머스
// 코딩테스트 연습 > 연습문제 > 124 나라의 숫자

function main(){
    let answer = new Array();
    let output = new Array();

    // 입출력 예 입력
    answer.push(solution(3));
    answer.push(solution(4));
    answer.push(solution(12));
    answer.push(solution(14));
    output.push(4);
    output.push(11);
    output.push(44);
    output.push(112);
    
    console.log(`execution result`);
    for(let idx = 0; idx < answer.length; idx++){
        console.log(`#${idx}. answer:${answer[idx]} / correct answer:${output[idx]}`);
    }
}

// 1의 자리 : 1 2 4 반복
// 10의 자리 : 1 1 1 2 2 2 4 4 4 반복
// 13 -> 111
// 3 + 9 + 27

// function failSolution(n) {
//     let answer = '';

//     let sum = 0;
//     let digit = 1;
//     while(true){
//         sum = 3 * (sum + 1);
        
//         if(n <= sum) break;
//         digit++;
//     }
//     //console.log(`sum:${sum} / digit:${digit}`);

//     for(let idx = 1; idx <= digit; idx++){
//         const curNum = n % 3;
//         console.log(`n:${n} / curNum:${curNum}`);

//         if(curNum === 1) answer = '1' + answer;
//         if(curNum === 2) answer = '2' + answer;
//         if(curNum === 0) answer = '4' + answer;
        
//         n = Math.floor(n / 3);
//     }

//     return answer;
// }

function solution(n) {
    let answer = '';

    while(0 < n){
        const curNum = n % 3;
        //console.log(`n:${n} / curNum:${curNum}`);

        if(curNum === 1) answer = '1' + answer;
        if(curNum === 2) answer = '2' + answer;
        if(curNum === 0) answer = '4' + answer;
        
        n = Math.floor((n - 1) / 3);        
    }

    return answer;
}

main();