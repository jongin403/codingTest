// 프로그래머스
// 코딩테스트 연습 > 스택/큐 > 다리를 지나는 트럭
// 사용 알고리즘 : 
// 시간 복잡도 : 

function main(){
    let answer = new Array();
    
    // 입력
    answer.push(solution(2, 10, [7,4,5,6])); // 8
    answer.push(solution(100, 100, [10])); // 101
    answer.push(solution(100, 100, [10,10,10,10,10,10,10,10,10,10])); // 110
    
    // 출력
    for(let i = 0; i < answer.length; i++){
        console.log(answer[i]);
    }
}

function solution(bridge_length, weight, truck_weights) {
    let answer = 0;
    return answer;
}

main();