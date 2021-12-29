// 프로그래머스
// 코딩테스트 연습 > 깊이/너비 우선 탐색(DFS/BFS) > 여행경로
// 사용 알고리즘 : DSF
// 시간 복잡도 : O(∣V∣+∣E∣) 인접리스트

function main(){
    const answer = new Array();
    const output = new Array();
    
    // 입출력 예 입력
    //answer.push(solution([["ICN", "JFK"], ["HND", "IAD"], ["JFK", "HND"]]));
    //output.push(["ICN", "JFK", "HND", "IAD"]);
    answer.push(solution([["ICN", "SFO"], ["ICN", "ATL"], ["SFO", "ATL"], ["ATL", "ICN"], ["ATL","SFO"]]));
    output.push(["ICN", "ATL", "ICN", "SFO", "ATL", "SFO"]);    
    
    console.log(`execution result`);
    for(let idx = 0; idx < answer.length; idx++){
        console.log(`#${idx}. answer:${answer[idx]} / correct answer:${output[idx]}`);
    }
    
}

function solution(tickets) {
    let answer = [];

    const visitedList = [];
    const visited = new Array(tickets.length);
    const vAirport = [];
    visited.fill(false);

    const dfs = function(tickets, cur, depth){
        
        // 종료조건
        if(depth == tickets.length){
            vAirport.push(cur);
            visitedList.push(JSON.parse(JSON.stringify(vAirport)));
            
            // 한개의 visitedAirport 변수를 사용하기 때문에 
            // pop 해주지 않으면 다음번에 visitedList 에 추가로 쌓임
            vAirport.pop();
            return;
        }

        // 순회
        for(let idx = 0; idx < tickets.length; idx++){
            if(tickets[idx][0] === cur && !visited[idx]){
                visited[idx] = true;
                vAirport.push(cur);
                
                //console.log(`vAirport:${vAirport}`);
                dfs(tickets, tickets[idx][1], depth + 1);

                visited[idx] = false;
                vAirport.pop();
            }
        }        
    };
    
    dfs(tickets, "ICN", 0);

    // 정렬
    visitedList.sort();

    for(let idx = 0; idx < visitedList.length; idx++){
        //console.log(`visitedList[${idx}]:${visitedList[idx]}`);
    }

    answer = visitedList[0];

    return answer;
}

main();