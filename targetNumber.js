// 프로그래머스
// 코딩테스트 연습 > 깊이/너비 우선 탐색(DFS/BFS) > 타겟 넘버
// 사용 알고리즘 : DFS
// 시간 복잡도 : O(N+E), N = 2^n - 1, E = N - 1

function main(){
    let answer = new Array();
    
    // 입력
    answer.push(solution([1,1,1,1,1],3));
    
    // 출력
    for(let i = 0; i < answer.length; i++){
        console.log(answer[i]);
    }
}

function solution(numbers, target) {
    let answer = 0;

    // depth 가 numbers 의 index인 그래프
    dfs(0, 0);

    function dfs(depth, sum){
        if(depth === numbers.length){
            if(sum == target){
                answer++;
            }
            return;
        }

        dfs(depth + 1, sum + numbers[depth]);
        dfs(depth + 1, sum - numbers[depth]);
    }

    return answer;
}

main();