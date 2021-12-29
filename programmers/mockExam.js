// 프로그래머스
// 코딩테스트 연습 > 완전탐색 > 모의고사
// 사용 알고리즘 : 
// 시간 복잡도 : 

function main(){
    let answer = new Array();
    
    // 입력
    answer.push(solution([1,2,3,4,5])); // [1]
    answer.push(solution([1,3,2,4,2])); // [1,2,3]
    
    // 출력
    for(let i = 0; i < answer.length; i++){
        console.log(answer[i]);
    }
}

function solution(answers) {
    let answer = [];
    
    const NUM_OF_STUDENT = 3;
    let resultScore = new Array(NUM_OF_STUDENT).fill(0);
    let result = [];

    // resultScore 계산
    const solveMethod1 = [1, 2, 3, 4, 5];
    const solveMethod2 = [2, 1, 2, 3, 2, 4, 2, 5];
    const solveMethod3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    for(let idx = 0; idx < answers.length; idx++){

        if(answers[idx] == solveMethod1[idx%solveMethod1.length]){
            resultScore[0] += 1;
        }

        if(answers[idx] == solveMethod2[idx%solveMethod2.length]){
            resultScore[1] += 1;
        }

        if(answers[idx] == solveMethod3[idx%solveMethod3.length]){
            resultScore[2] += 1;
        }

    }
    console.log(`resultScore:${resultScore}`);
    
    // resultScore 처리
    result.push(...resultScore);
    let maxResult = Math.max.apply(null, result);
    
    for(let idx = 0; idx < NUM_OF_STUDENT; idx++){
        if(maxResult == resultScore[idx]){
            answer.push(idx + 1);
        }
    }
    
    return answer;
}

main();