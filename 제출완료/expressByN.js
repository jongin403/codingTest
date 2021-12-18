// 프로그래머스
// 코딩테스트 연습 > 동적계획법(Dynamic Programming) > N으로 표현
// 사용 알고리즘 : DP...?
// 시간 복잡도 : 2^O(N)

function main(){
    let answer = new Array();
    
    // 입력
    //answer.push(solution(5, 12)); // 4
    //answer.push(solution(2, 11)); // 3
    //answer.push(solution(5, 31168)); // -1
    answer.push(solution(1, 1121)); // 7
    
    // 출력
    for(let i = 0; i < answer.length; i++){
        console.log(answer[i]);
    }
}

function solution(N, number) {
    var answer = -1;

    const MAX_MIN_VALUE = 8; // 사용횟수 최소값의 가능한 최대값
    // resultArr[count] : 숫자 N 을 count 개 사용하여 만들 수 있는 수의 모음
    const resultArr = new Array(MAX_MIN_VALUE + 1);
    for(let idx = 1; idx < MAX_MIN_VALUE + 1; idx++){
        resultArr[idx] = [];
    }
    
    let count = 1;

    const dp = function(count){
        //console.log(`count:${count}`);
        if(count === 1){
            resultArr[count].push(N);
        } else if(8 < count){
            answer = -1;
            return;
        } else {
            // 가능한 값 계산
            for(let idx = 0; idx < MAX_MIN_VALUE; idx++){
                for(let jdx = 1; jdx <= count - 1; jdx++){
                    for(let kdx = 0; kdx < resultArr[count - jdx].length; kdx++){
                        for(let ldx = 0; ldx < resultArr[jdx].length; ldx++){
                            resultArr[count].push(
                                calc(resultArr[jdx][ldx], resultArr[count - jdx][kdx], idx, N)
                            );
                        }
                    }
                }
            }

            //중복 제거
            resultArr[count] = Array.from(new Set(resultArr[count]));
            //console.log(`count:${count} / resultArr[count]:${resultArr[count]}`);
        }

        if(-1 < resultArr[count].indexOf(number)){
            answer = count;
            return;
        }

        dp(count + 1);
    };
    
    dp(count);
    //console.log(`resultArr[7]:${resultArr[7]}`);

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
function calc(A, B, calIdx, N){
    // 불가능한 연산일 경우 중복으로 제거 되도록 기본값을 + 연산으로 선정
    let result = A + B;
    
    // 숫자를 붙이는 연산은 중간에 다른 숫자가 있을 경우(다른 연산이 된 경우) 사용불가
    const isOnlyN = function(A, N){
        let result = true;
        const splitA = String(A).split('');
        for(let idx = 0; idx < splitA.length; idx++){
            if(splitA[idx] !== String(N)){
                result = false;
            }
        }
        return result;
    }
    
    if(calIdx === 6 || calIdx === 7){
        if(!isOnlyN(A, N) || !isOnlyN(B, N)){
            return result;
        }
    }

    // 나눗셈 연산은 0으로 나눌 수 없음
    if(calIdx === 4 && B == 0){
        return result;
    }

    if(calIdx === 5 && A == 0){
        return result;
    }
    
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