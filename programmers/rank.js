// 프로그래머스
// 코딩테스트 연습 > 그래프 > 순위
// 사용 알고리즘 : 
// 시간 복잡도 : O(V+E)

function main(){
    const answer = new Array();
    const output = new Array();
    
    // 입출력 예 입력
    answer.push(solution(5, [[4, 3], [4, 2], [3, 2], [1, 2], [2, 5]]));
    output.push(2);
    
    console.log(`execution result`);
    for(let idx = 0; idx < answer.length; idx++){
        console.log(`#${idx}. answer:${answer[idx]} / correct answer:${output[idx]}`);
    }
    
}

// 순위가 확정되는 경우 : curNode 보다 상위 / 하위 node 의 개수를 모두 파악했을 때
function solution(n, results) {
    let answer = 0;
    let upperVisited = [];
    let lowerVisited = [];

    const getUpper = function(curNode){
        const upper = results.filter(el => el[1] == curNode).map(el => el[0]);
        //console.log(`curNode:${curNode} / upper:${upper}`);

        for(let idx = 0; idx < upper.length; idx++){
            if(!upperVisited.includes(upper[idx])){
                upperVisited.push(upper[idx]);
                getUpper(upper[idx]);
            }
        }
    };

    const getLower = function(curNode){
        const lower = results.filter(el => el[0] == curNode).map(el => el[1]);
        //console.log(`curNode:${curNode} / lower:${lower}`);

        for(let idx = 0; idx < lower.length; idx++){
            if(!lowerVisited.includes(lower[idx])){
                lowerVisited.push(lower[idx]);
                getLower(lower[idx]);
            }
        }
    };

    for(let idx = 0; idx < n; idx++){
        let curNode = idx + 1;
        upperVisited = [];
        lowerVisited = [];

        getUpper(curNode);
        getLower(curNode);
        
        //console.log(`curNode:${curNode}`);
        //console.log(`upperVisited:${upperVisited}`+'\n'+`lowerVisited:${lowerVisited}`);
        if(upperVisited.length + lowerVisited.length == n - 1){
            answer++;
        }
    }

    return answer;
}

main();