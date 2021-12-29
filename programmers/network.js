// 프로그래머스
// 코딩테스트 연습 > 깊이/너비 우선 탐색(DFS/BFS) > 네트워크
// 사용 알고리즘 : DFS
// 시간 복잡도 : 

function main(){
    let answer = new Array();
    
    // 입력
    answer.push(solution(3,[[1, 1, 0], [1, 1, 0], [0, 0, 1]])); // 2
    answer.push(solution(3,[[1, 1, 0], [1, 1, 1], [0, 1, 1]])); // 1

    // [1, 1, 0]
    // [1, 1, 0]
    // [0, 0, 1]

    // [1, 1, 0]
    // [1, 1, 1]
    // [0, 1, 1]

    // 출력
    for(let i = 0; i < answer.length; i++){
        console.log(answer[i]);
    }
}

function solution(n, computers) {
    let answer = 0;

    // 방문여부 초기화
    let visited = [];
    for(let idx = 0; idx < n; idx++){
        visited.push(false);
    }
    
    function dfs(idx){
        visited[idx] = true;
        
        for(let jdx = 0; jdx < n; jdx++){
            if(computers[idx][jdx] == 1 && !visited[jdx]){
                // 해당 그래프와 인접해 있으면서 방문하지 않았으면
                dfs(jdx);
            }
        }
        
        return;
    }

    // DFS 호출 횟수 (네트워크 개수) 체크
    for(let idx = 0; idx < n; idx++){
        if(!visited[idx]){
            dfs(idx);
            answer++;
        }
    }

    return answer;
}

main();