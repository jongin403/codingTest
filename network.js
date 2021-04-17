// 프로그래머스
// 코딩테스트 연습 > 깊이/너비 우선 탐색(DFS/BFS) > 네트워크
// 사용 알고리즘 : 
// 시간 복잡도 : 

function main(){
    let answer = new Array();
    
    // 입력
    answer.push(solution(3,[[1, 1, 0], [1, 1, 0], [0, 0, 1]]));
    answer.push(solution(3,[[1, 1, 0], [1, 1, 1], [0, 1, 1]]));

    
    // 출력
    for(let i = 0; i < answer.length; i++){
        console.log(answer[i]);
    }
}

function solution(n, computers) {
    var answer = 0;
    return answer;
}

main();