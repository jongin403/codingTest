// 프로그래머스
// 코딩테스트 연습 > 연습문제 > 평균 구하기
// 사용 알고리즘/자료구조 : 
// 시간 복잡도 : O(n)

function main(){
    let answer = new Array();
    let output = new Array();

    // 입출력 예 입력
    answer.push(solution([1,2,3,4]));
    output.push(2.5);
    
    console.log(`execution result`);
    for(let idx = 0; idx < answer.length; idx++){
        console.log(`#${idx}. answer:${answer[idx]} / correct answer:${output[idx]}`);
    }
}

function solution(n) {
    let answer = 0;
    
    n.forEach(elem => answer += elem);
    answer = answer / n.length;

    return answer;
}

main();