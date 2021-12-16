// 프로그래머스
// 코딩테스트 연습 > 동적계획법(Dynamic Programming) > N으로 표현
// 사용 알고리즘 : 
// 시간 복잡도 : 

function main(){
    let answer = new Array();
    
    // 입력
    answer.push(solution(5, 12)); // 4
    answer.push(solution(2, 11)); // 3
    
    // 출력
    for(let i = 0; i < answer.length; i++){
        console.log(answer[i]);
    }
}

function solution(N, number) {
    var answer = -1;

    const resultArray = [];
    const memo = new Array(32000);
    memo.fill(-1); // memo[idx] = 숫자 N 으로 표현할 수 있는 사용 횟수의 최소값

    let count = 0;
    const dp = function(number){
        // 숫자 1개 더 사용
        count++;
        console.log(`count:${count} / number:${number}`);

        for(let idx = 0; idx < memo.length; idx++){
            if(memo[idx] !== -1){
                console.log(`idx:${idx} / memo[idx]:${memo[idx]}`);
            }
        }

        // 종료 조건
        if(memo[number] !== -1 || count > 8){
            return;
        }
        
        if(count === 1){
            if(memo[N] === -1){
                memo[N] = count;
            } 
        }
        
        for(let idx = 0; idx < 8; idx++){
            let targetNum = calc(number, N, idx);
            if(memo[targetNum] === -1){
                memo[targetNum] = count + 1;
            } else if(memo[targetNum] !== -1){
                memo[targetNum] = Math.min(memo[targetNum], count + 1);
            }

            dp(targetNum);
        }

    };

    dp(number);

    answer = memo[number];
    return answer;
}

// 연산 유형
// 0. A + B
// 1. A - B
// 2. B - A
// 3. A * B
// 4. A / B
// 5. B / A
// 6. AB
// 7. BA
function calc(A, B, calIdx){
    let result = 0;

    switch(calIdx){
        case 0:
            result = A + B;
            break;
        case 1:
            result = A - B;
            break;
        case 2:
            result = B - A;
            break;
        case 3:
            result = A * B;
            break;
        case 4:
            result = Math.floor(A / B);
            break;
        case 5:
            result = Math.floor(B / A);
            break;
        case 6:
            result = Number(String(A).concat(String(B)));
            break;
        case 7:
            result = Number(String(B).concat(String(A)));
            break;
    }

    return result;
}

main();