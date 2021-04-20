// 프로그래머스
// 코딩테스트 연습 > 정렬 > K번째수
// 사용 알고리즘/자료구조 : 배열, 퀵소트(array.sort())
// 시간 복잡도 : O(nlogn) ~ O(n2)

// 다 방문했을 때
function main(){
    let answer = new Array();
    
    // 입력
    answer.push(solution([1, 5, 2, 6, 3, 7, 4], [[2, 5, 3], [4, 4, 1], [1, 7, 3]]));

    
    // 출력
    for(let i = 0; i < answer.length; i++){
        console.log(answer[i]);
    }
}

function solution(array, commands) {
    let answer = [];
    let tempResult = [];
    
    for(let i = 0 ; i < commands.length; i++){
        tempResult = array.slice(commands[i][0]-1,commands[i][1]);
        //console.log(commands[i][0]-1 + " / " + commands[i][1]);
        tempResult.sort(function(a,b){ return a - b;});
        //console.log(tempResult);
        answer.push(tempResult[commands[i][2]-1]);
    }

    return answer;
}

main();