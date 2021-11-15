// 프로그래머스
// 코딩테스트 연습 > 탐욕법(Greedy) > 섬 연결하기
// 사용 알고리즘 : 
// 시간 복잡도 : 

function main(){
    let answer = new Array();
    
    // 입력
    answer.push(solution(4, [[0,1,1],[0,2,2],[1,2,5],[1,3,1],[2,3,8]])); // 4
    
    // 출력
    for(let i = 0; i < answer.length; i++){
        console.log(answer[i]);
    }
}

// 어떤섬이 연결될 수 있는 길 중 최소값을 선택
// 그러한 연결된 섬들이 갈 수 있는 길중 최소값을 선택
function solution(n, costs) {
    let answer = 0;

    // 소속 섬 세팅
    // 연결된 섬 중 가장 작은 섬의 번호를 소속 섬이라 한다.
    for(let idx = 0; idx < costs.length; idx++){
        costs[idx].push(false); // 연결 여부
        
        if(costs[1] < costs[0]){
            costs[idx].push(costs[1]);
        } else {
            costs[idx].push(costs[0]);
        }
        
        console.log(`costs:${idx} / ${costs[idx]}`);
    }

    // 소속 섬이 동일한 섬에서 외부로 나가는 길 중
    // 가장 비용이 낮은 길을 연결한다.
    const connnectMinCost = function(arrays){
        
    };

    // 모든 섬의 소속섬이 0 이 될 때 까지 반복한다.

    
    return answer;
}

main();