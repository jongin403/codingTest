// 프로그래머스
// 코딩테스트 연습 > Summer/Winter Coding(~2018) > 배달
// 사용 알고리즘 : 다익스트라
// 시간 복잡도 : O(N^2)

function main(){
    let answer = new Array();
    let output = new Array();
    
    // 입출력 예 입력
    // answer.push(solution(5, [[1,2,1],[2,3,3],[5,2,2],[1,4,2],[5,3,1],[5,4,2]], 3));
    // output.push(4);
    answer.push(solution(6, [[1,2,1],[1,3,2],[2,3,2],[3,4,3],[3,5,2],[3,5,3],[5,6,1]], 4));
    output.push(4);
    
    console.log(`execution result`);
    for(let idx = 0; idx < answer.length; idx++){
        console.log(`#${idx}. answer:${answer[idx]} / correct answer:${output[idx]}`);
    }
}

function solution(N, road, K) {
    let answer = 0;
    const visited = new Array(N + 1).fill(false);
    
    // [startV, endV, cost] 가중치 배열을 토대로만든 초기 그래프
    const makeDist = function(n, weights){
        const dist = new Array(n);

        // 가중치 초기화
        for(let idx = 0; idx < n; idx++){
            dist[idx] = new Array(n);
            dist[idx].fill(Infinity);

            dist[idx][idx] = 0;
        }

        for(let idx = 0; idx < weights.length; idx++){
            let startV = weights[idx][0];
            let endV = weights[idx][1];
            let cost = weights[idx][2];

            // 같은 경로일 경우 최단거리 선택
            if(cost < dist[startV - 1][endV - 1]){
                dist[startV - 1][endV - 1] = cost;
                dist[endV - 1][startV - 1] = cost;
            }
        }

        //console.log(dist);
        return dist;
    }

    // 가장 가까운 정점 찾기
    const getClosestV = function(n, curDist){
        let min = Infinity;
        let closestV = 0;

        for(let idx = 0; idx < n; idx++){
            if(curDist[idx] < min && !visited[idx]){
                min = curDist[idx];
                closestV = idx;
            }
        }
        return closestV;
    }

    const dist = makeDist(N, road);
    //console.log(dist);

    const dijkstra = function(n, startV, dist){
        visited[startV] = true;

        for(let idx = 0; idx < n; idx++){
            const closestV = getClosestV(n, dist[startV].slice());
            visited[closestV] = true;

            for(let jdx = 0; jdx < n; jdx++){
                if( dist[startV][closestV] + dist[closestV][jdx] < dist[startV][jdx] && !visited[jdx] ){
                    dist[startV][jdx] = dist[startV][closestV] + dist[closestV][jdx];
                }
            }

        }
    }

    dijkstra(N, 0, dist);

    //console.log(dist[0]);
    answer = dist[0].filter(el => el <= K).length;

    return answer;
}

main();