// 프로그래머스
// 코딩테스트 연습 > 
// 사용 알고리즘 : 
// 시간 복잡도 : 

function main(){
    const input = new Array();
    const output = new Array();
    
    // 입출력 예 입력
    input.push([[-20,-15], [-14,-5], [-18,-13], [-5,-3]]);
    output.push(2);
    input.push([[-20,-15], [-14,-5], [-18,-13], [-5,-3]]);
    output.push(2);
    
    console.log(`execution result`);
    for(let idx = 0; idx < input.length; idx++){
        let start = new Date();
        let answer = solution(input[idx])
        let end = new Date();
        
        console.log(`#${idx}. answer:${answer} / correct answer:${output[idx]} / time:${end - start}ms`);
    }
    
}

function solution(input) {
    let sum = 0;
    for (let i = 1; i <= 1000000; i++) {
        sum = sum + i;
    }
}

main();