// 프로그래머스
// 코딩테스트 연습 > 탐욕법(Greedy) > 섬 연결하기
// 사용 알고리즘 : Kruskal 알고리즘, union-find 알고리즘
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

    const getParent = function(parent, x){
        if(parent[x] == x){
            return x;
        } else {
            return getParent(parent, parent[x]);
        }
    };

    const unionParent = function(parent, a, b){
        a = getParent(parent, a);
        b = getParent(parent, b);

        if(a < b){
            parent[b] = a;
        } else {
            parent[a] = b;
        }
    };

    const compareParent = function(parent, a, b){
        a = getParent(parent, a);
        b = getParent(parent, b);

        if(a == b){
            return true;
        } else {
            return false;
        }
    };

    // init parent
    let parent = new Array(n);
    let count = 0;

    for(let idx = 0; idx < parent.length; idx++){
        parent[idx] = idx;
    }
    //console.log(`parent:${parent}`);

    // sort by cost
    costs.sort((a,b) => a[2] - b[2]);
    
    for(let idx = 0; idx < costs.length; idx++){
        //console.log(`idx:${idx} / costs:${costs[idx]}`);
    }

    for(let idx = 0; idx < costs.length; idx++){
        let cost = costs[idx];
        if(!compareParent(parent, cost[0], cost[1])){
            answer += cost[2];
            unionParent(parent, cost[0], cost[1]);
            count += 1;
        }

        if(count == n - 1){
            break;
        }
        //console.log(`idx:${idx} / cost:${cost}`);
    }

    return answer;
}

main();