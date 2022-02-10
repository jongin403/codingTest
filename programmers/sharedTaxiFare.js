// 프로그래머스
// 스킬체크 > 합승 택시 요금
// 사용 알고리즘 : 
// 시간 복잡도 : 
// 점수 : 0.0 / 50.0

function main(){
    let answer = new Array();
    let output = new Array();
    
    // 입출력 예 입력
    answer.push(solution(6, 4, 6, 2, [[4, 1, 10], [3, 5, 24], [5, 6, 2], [3, 1, 41], [5, 1, 24], [4, 6, 50], [2, 4, 66], [2, 3, 22], [1, 6, 25]]));
    output.push(82);
    // answer.push(solution(7, 3, 4, 1, [[5, 7, 9], [4, 6, 4], [3, 6, 1], [3, 2, 3], [2, 1, 6]]));
    // output.push(14);
    // answer.push(solution(6, 4, 5, 6, [[2,6,6], [6,3,7], [4,6,7], [6,5,11], [2,5,12], [5,3,20], [2,4,8], [4,3,9]]));
    // output.push(18);
   
    console.log(`execution result`);
    for(let idx = 0; idx < answer.length; idx++){
        console.log(`#${idx}. answer:${answer[idx]} / correct answer:${output[idx]}`);
    }
}

function solution(n, s, a, b, fares) {
    var answer = 0;

    
    const makeDist = function(n, weights){
        const dist = [];

        for(let idx = 1; idx <= n; idx++){

            let curRow = [];            
            for(let jdx = 1; jdx <= n; jdx++){
                let curDist = weights.find(el => el[0] === idx && el[1] === jdx);
                
                if(curDist) curRow.push(curDist[2]);
                else curRow.push(Infinity);

            }
            dist.push(curRow);

        }
        return dist;
    }
    const dist = makeDist(n, fares);
    console.log(dist);

    const visited = new Array(n + 1).fill(false);

    const getShortest = function(n, s, a, dist){
        
        for(let idx = 0; idx < n; idx++){
            const curNode = dist.slice();
            visited[idx] = true;
            
            for(let jdx = 0; jdx < fares.length; jdx++){
                if(fares[jdx][0] === s){
                    dist[fares[jdx][1]] = fares[jdx][2];
                } else {
                    dist[fares[jdx][1]] = Infinity;
                }
            }

        }
        
        

        return weight;
    }
    return answer;
}

main();