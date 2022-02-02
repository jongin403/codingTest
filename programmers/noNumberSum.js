// 프로그래머스
// 없는 숫자 더하기

function main(){
    const answer = new Array();
    const output = new Array();
    
    // 입출력 예 입력
    answer.push(solution([1,2,3,4,6,7,8,0]));
    answer.push(solution([5,8,4,0,6,7,9]));
    output.push(14);
    output.push(6);
    
    console.log(`execution result`);
    for(let idx = 0; idx < answer.length; idx++){
        console.log(`#${idx}. answer:${answer[idx]} / correct answer:${output[idx]}`);
    }
    
}

function solution(numbers) {
    var answer = -1;

    answer = 45;
    numbers.forEach(el => answer -=Number(el));
    return answer;
}

main();