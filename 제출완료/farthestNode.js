// 프로그래머스
// 코딩테스트 연습 > 그래프 > 가장 먼 노드
// 사용 알고리즘 : BFS
// 시간 복잡도 : O(V+E)

function main(){
    const answer = new Array();
    const output = new Array();
    
    // 입출력 예 입력
    answer.push(solution(6, [[3, 6], [4, 3], [3, 2], [1, 3], [1, 2], [2, 4], [5, 2]]));
    output.push(3);
    
    console.log(`execution result`);
    for(let idx = 0; idx < answer.length; idx++){
        console.log(`#${idx}. answer:${answer[idx]} / correct answer:${output[idx]}`);
    }
    
}

/*
function solution(n, edge) {
    let answer = 0;
    const visited = []; // 방문 여부 판단
    const shortestList = new Array(n + 1); // result[curNodeNum] = depth
    shortestList[0] = 0;

    const bfs = function(curNodeNum, depth){
        console.log(`curNodeNum:${curNodeNum} / depth:${depth}`);
        const nextVisit = [];
        
        // 현재 노드 방문처리
        visited.push(curNodeNum);
        // 다음에 방문할 노드 구하기
        const nextNodes = edge.filter(el => (el[0] == curNodeNum || el[1] == curNodeNum))
                              .map(el => el[0] == curNodeNum ? el[1] : el[0]);

        for(let idx = 0; idx < nextNodes.length; idx++){
            if(visited.indexOf(nextNodes[idx]) < 0){
                nextVisit.push(nextNodes[idx]);
            }
        }
        console.log(`nextNodes:${nextNodes} / nextVisit:${nextVisit}`);

        // 기존 경로가 없거나 더 멀 경우
        if(!shortestList[curNodeNum] || depth < shortestList[curNodeNum]){
            shortestList[curNodeNum] = depth;
        }
        
        // 다음 방문
        for(let idx = 0; idx < nextVisit.length; idx++){
            bfs(nextVisit[idx], depth + 1);
        }
    }

    bfs(1, 0);

    // 가장 긴 최단거리 개수
    console.log(`shortestList:${shortestList} / max:${Math.max(...shortestList)}`);
    for(let idx = 0; idx < shortestList.length; idx++){
        //console.log(`idx:${idx} / shortestList:${shortestList[idx]}`);
    }

    answer = shortestList.filter(el => el == Math.max(...shortestList)).length
    return answer;
}
*/

function solution(n, edge) {
    let answer = 0;
    const visited = []; // 방문 여부 판단
    const queue = []; // 방문할 노드
    const shortestList = [];

    const bfs = function(startNodeNum, depth){
        queue.push(startNodeNum);
        shortestList[startNodeNum] = depth;

        while(0 < queue.length){
            const curNodeNum = queue.shift();
            
            // 현재 노드가 visited 에 없을 경우
            if(visited.indexOf(curNodeNum) < 0){
                visited.push(curNodeNum);
                depth = shortestList[curNodeNum] + 1;

                const nextNodes = edge.filter(el => (el[0] == curNodeNum || el[1] == curNodeNum))
                                    .map(el => el[0] == curNodeNum ? el[1] : el[0]);

                //console.log(`curNodeNum:${curNodeNum} / visited:${visited}`);
                //console.log(`nextNodes:${nextNodes}`);
                for(let idx = 0; idx < nextNodes.length; idx++){
                    queue.push(nextNodes[idx]);
                    // 최단거리가 갱신되는 일을 막기 위해 조건 추가
                    if(shortestList[nextNodes[idx]] == undefined){
                        shortestList[nextNodes[idx]] = depth;
                    }
                }
            }

        }
    };

    bfs(1, 0);

    // 가장 긴 최단거리 개수
    shortestList.shift(); // Math.max 계산을 위해 0번째 인덱스 삭제
    //console.log(`shortestList:${shortestList} / max:${Math.max(...shortestList)}`);
    for(let idx = 0; idx < shortestList.length; idx++){
        //console.log(`idx:${idx} / shortestList:${shortestList[idx]}`);
    }

    answer = shortestList.filter(el => el == Math.max(...shortestList)).length
    return answer;
}

main();