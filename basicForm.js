// 프로그래머스
// 코딩테스트 연습 > 
// 사용 알고리즘 : 
// 시간 복잡도 : 

function main(){
    const answer = new Array();
    const output = new Array();
    
    // 입출력 예 입력
    answer.push(solution([[-20,-15], [-14,-5], [-18,-13], [-5,-3]], 10, "K")); // 2
    output.push(2);
    answer.push(solution([[-20,-15], [-14,-5], [-18,-13], [-5,-3]], 10, "K")); // 2
    output.push(2);    
    
    console.log(`execution result`);
    for(let idx = 0; idx < answer.length; idx++){
        console.log(`#${idx}. answer:${answer[idx]} / correct answer:${output[idx]}`);
    }
    
}

function solution(input1, input2, input3) {
    console.log(`input1:${input1} / input2:${input2} / input3:${input3}`);
    return 0;
}

main();