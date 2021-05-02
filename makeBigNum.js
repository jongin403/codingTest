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

    let numCnt = new Array(10); // i 번째 인덱스에 숫자 i 가 몇개인지 count

    for(let j = 0; j < 10; j++){
        numCnt[j] = 0;
    }

    for(let i = 0; i < number.length; i++){
        for(let j = 0; j < 10; j++){
            if(number[i] == j){
                numCnt[j]++;
            }
        }
    }

    console.log(numCnt);

    return answer;
}

main();