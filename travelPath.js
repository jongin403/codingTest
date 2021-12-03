// 프로그래머스
// 코딩테스트 연습 > 깊이/너비 우선 탐색(DFS/BFS) > 여행경로
// 사용 알고리즘 : 
// 시간 복잡도 : 

function main(){
    const answer = new Array();
    const output = new Array();
    
    // 입출력 예 입력
    answer.push(solution([["ICN", "JFK"], ["HND", "IAD"], ["JFK", "HND"]]));
    output.push(["ICN", "JFK", "HND", "IAD"]);
    answer.push(solution([["ICN", "SFO"], ["ICN", "ATL"], ["SFO", "ATL"], ["ATL", "ICN"], ["ATL","SFO"]]));
    output.push(["ICN", "ATL", "ICN", "SFO", "ATL", "SFO"]);    
    
    console.log(`execution result`);
    for(let idx = 0; idx < answer.length; idx++){
        console.log(`#${idx}. answer:${answer[idx]} / correct answer:${output[idx]}`);
    }
    
}

// DFS 알고리즘
// 최대한 내려갔을 때 종료되지 않을 경우 다시 탐색한다.
function solution(tickets) {
    let answer = [];

    const tTree = new Tree();
    const dfsPath = [];

    tTree.root = new Node(tickets[0]);

    for (let index = 1; index < tickets.length; index++) {
        tTree.root.add(tickets[index]);        
    }

    answer = tTree.DFS(node => dfsPath.push(node.data));

    return answer;
}

class Tree {
    constructor() {
        this.root = null;
    }

    DFS(fn) {
        if(this.root === null) return;

        const unvisitedList = [this.root];
        while(unvisitedList.length !== 0) {
            const current = unvisitedList.shift();
            unvisitedList.unshift(...current.children); // list 앞에다 넣어준다. (우선순위: 내 자식들이 먼저야! )
            fn(current);
        }
    }
}

main();