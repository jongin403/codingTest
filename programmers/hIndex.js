// 프로그래머스
// 코딩테스트 연습 > 정렬 > H-index
// 사용 알고리즘 : 
// 시간 복잡도 : O(n)

function main(){
    let answer = new Array();
    
    // 입력
    answer.push(solution([3, 0, 6, 1, 5]));
    answer.push(solution([0]));
    answer.push(solution([0, 0]));
    answer.push(solution([2, 2]));
    answer.push(solution([1, 2, 3]));
    
    // 출력
    for(let i = 0; i < answer.length; i++){
        console.log(answer[i]);
    }
}

function solution(citations) {
    let answer = 0;

    // citations 정렬 후 k 번째 수의 인용 횟수가 k 보다 크면 k++
    let sortedCitations = citations.slice()
                                   .sort((a,b) => b - a);
    
    //console.log(`citations:${citations}`);
    //console.log(`sortedCitations:${sortedCitations}`);
    
    while(true){
        // 종료하기 전 값
        if(sortedCitations[answer] < answer + 1){
            break;
        }

        // 모두 k 를 초과할 경우
        if(citations.length <= answer){
            break;
        }

        answer++;
    }
    
    return answer;
}

main();