// 프로그래머스
// 코딩테스트 연습 > 스택/큐 > 프린터
// 사용 알고리즘 : O(n^2)
// 시간 복잡도 : 

function main(){
    let answer = new Array();
    
    // 입력
    answer.push(solution([2, 1, 3, 2], 2)); // 1
    answer.push(solution([1, 1, 9, 1, 1, 1], 0)); // 5
    
    // 출력
    for(let i = 0; i < answer.length; i++){
        console.log(answer[i]);
    }
}

function solution(priorities, location) {
    let answer = 0;

    // 1. 문제에 나온 그대로 구현

    // print 여부 초기 세팅
    let printed = Array.from({length:priorities.length}, () => 0);
    //priorities.forEach(printed.push(false));

    // print 된 문서를 제외하고 가장 중요도가 높은지 여부 확인
    function isBiggest(printed, idx){
        let notPrinted = [];
        priorities.forEach(function(item, index){
            if(printed[index] == 0){
                notPrinted.push(item);
            }
        });

        if(priorities[idx] === Math.max(...notPrinted)){
            return true;
        } else {
            false;
        }
    }

    // 로직
    let idx = 0;
    let rank = 1;
    while(true){
        let curIdx = idx % priorities.length;

        // 최중요 문서 print
        if(isBiggest(printed, curIdx)){
            printed[curIdx] = rank;
            rank++;
        };

        // 종료 조건
        let allPrinted = true;
        printed.forEach(function(item){
            if(item === 0){
                allPrinted = false;
            }
        });

        // 종료
        if(allPrinted){
            break;
        }

        idx++;
    }

    answer = printed[location];

    return answer;
}



main();