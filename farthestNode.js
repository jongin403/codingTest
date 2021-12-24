// 프로그래머스
// 코딩테스트 연습 > 그래프 > 가장 먼 노드
// 사용 알고리즘 : 
// 시간 복잡도 : 

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

function solution(n, edge) {
    let answer = 0;
    let answerDepth = 0;
    const visited = []
    const resultList = []; // result[depth] 에 노드 정보 push

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

        // 마지막 방문만을 남겨둔 경우
        if(visited.length === n - 1){
            if(answerDepth < depth){
                answerDepth = depth;
            }
            if(resultList[depth] == undefined){
                resultList[depth] = [];    
            }
            resultList[depth].push(...nextVisit);
            return;
        }

        // 다음 방문
        for(let idx = 0; idx < nextVisit.length; idx++){
            bfs(nextVisit[idx], depth + 1);
        }
    }

    bfs(1, 0);

    console.log(`answerDepth:${answerDepth}`);
    for(let idx = 0; idx < resultList.length; idx++){
        console.log(`idx:${idx} / resultList:${resultList[idx]}`);
    }
    
    answer = resultList[answerDepth].length;

    return answer;
}

main();