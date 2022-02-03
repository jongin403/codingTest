// 프로그래머스
// 코딩테스트 연습 > 연습문제 > 2 x n 타일링
// 사용 알고리즘/자료구조 : DP
// 시간 복잡도 : O(N)

function main(){
    let answer = new Array();
    let output = new Array();

    // 입출력 예 입력
    answer.push(solution(4));
    output.push(5);
    
    console.log(`execution result`);
    for(let idx = 0; idx < answer.length; idx++){
        console.log(`#${idx}. answer:${answer[idx]} / correct answer:${output[idx]}`);
    }
}
/*
// Maximum call stack size exceeded
function solution(n) {
    let answer = 0;
    const memo = new Array(n + 1);

    const dp = function(x){
        if(!memo[x]){
            if(x === 1){
                memo[x] = 1;
            } else if(x === 2){
                memo[x] = 2;
            } else {
                memo[x] = dp(x-1) + dp(x-2);
            }
        }

        return memo[x];
    };

    answer = dp(n);
    //console.log(memo);

    // 나머지 출력
    answer %= 1000000007;
    return answer;
}
*/

function solution(n) {
    let answer = 0;
    const tabul = new Array(n + 1);

    tabul[1] = 1;
    tabul[2] = 2;

    for(let idx = 3; idx < n + 1; idx++){        
        tabul[idx] = (tabul[idx-1] + tabul[idx-2]) % 1000000007;
    }
    
    answer = tabul[n];
    //console.log(tabul);

    return answer;
}

main();