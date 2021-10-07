// 프로그래머스
// 코딩테스트 연습 > 탐욕법(Greedy) > 큰 수 만들기
// 사용 알고리즘 : 
// 시간 복잡도 : 

function main(){
    let answer = new Array();
    
    // 입력
    answer.push(solution("1924", 2));
    answer.push(solution("1231234", 3));
    answer.push(solution("4177252841", 4));

    
    // 출력
    for(let i = 0; i < answer.length; i++){
        console.log(answer[i]);
    }
}

function solution(number, k) {
    let answer = '';
    let stack = [];

    for(let idx = 0; idx < number.length; idx++){
        let curNumber = number[idx];

        // 맨 뒤(다음에 넣을 자리)가 현재 숫자보다 작은 경우 pop
        //console.log(`idx:${idx} / curNumber:${curNumber} / k:${k} / stack:${stack}`);
        while(k > 0 && stack[stack.length - 1] < curNumber){
            stack.pop();
            k--;
        }
        stack.push(curNumber);

    }
    
    // 더 없앨만한 문자가 없는 경우 뒤에서부터 없애기
    stack.slice(0, stack.length - k);
    answer = stack.join('');

    return answer;    
}

main();