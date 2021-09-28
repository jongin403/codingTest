// 프로그래머스
// 코딩테스트 연습 > 동적계획법(Dynamic Programming) > N으로 표현
// 사용 알고리즘 : 
// 시간 복잡도 : 

function main(){
    let answer = new Array();
    
    // 입력
    answer.push(solution(5, 12)); // 4
    answer.push(solution(2, 11)); // 3
    
    // 출력
    for(let i = 0; i < answer.length; i++){
        console.log(answer[i]);
    }
}

function solution(N, number) {
    var answer = -1;

    answer = calc(N, number)

    return answer;
}

// 사칙연산 유형
// 1. A + B
// 2. A - B
// 3. A * B
// 4. A / B
function calc(N, number){
    let result = -1;

    if(number === 1){
        if(N === 1){
            result = 1; // 1 = 1
        } else {
            result = 2; // 1 = N / N
        }
    }
    
    result = calc(N, number)
    return result;
}

main();