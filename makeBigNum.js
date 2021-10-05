// 프로그래머스
// 코딩테스트 연습 > 탐욕법(Greedy) > 큰 수 만들기
// 사용 알고리즘 : 
// 시간 복잡도 : 

function main(){
    let answer = new Array();
    
    // 입력
    answer.push(solution("1924", 2));
    answer.push(solution("1231234", 3));
    answer.push(solution("4177252841", 4));

    
    // 출력
    for(let i = 0; i < answer.length; i++){
        console.log(answer[i]);
    }
}

function solution(number, k) {
    let answer = '';
    let numberArr = number.split('');
    //console.log(`numberArr:${numberArr}`);

    const memoization = {};
    
    const erase1element = function(numberArr){
        let curVal = numberArr[0];
        let eraseIdx = numberArr.length - 1; // eraseIdx 를 못 찾을 경우 맨뒤를 삭제

        for(let idx = 1; idx < numberArr.length; idx++){
            // 값이 더 커지면 앞에 있는 값을 삭제
            if(curVal < numberArr[idx]){
                eraseIdx = idx - 1;
                break;
            }
        }

        const result = numberArr.slice(0, eraseIdx)
                                .join('')
                                .concat(numberArr.slice(eraseIdx + 1)
                                                 .join(''));

        //console.log(`${numberArr} / ${result}`)
        return result;
    }

    // k 보다 작은 인덱스 중에 가장 큰 숫자 찾기
    const eraseKtimes = function(numberArr, k){
        //console.log(`${numberArr} / ${k}`);

        // 종료 조건
        // 1. 삭제할 게 없을 경우
        if(k === 0 ){
            return numberArr.join('');
        }
        // 2. k가 arr 의 길이보다 같거나 클 경우 모두 삭제
        if(numberArr.length <= k){
            return '';
        }

        if(k === 1 ){
            return erase1element(numberArr);
        }

        // k + 1 번째보다 작으면서 제일 큰 숫자 찾기
        let curMax = numberArr[0];
        let curMaxIdx = 0;
        for(let idx = 1; idx < k + 1; idx++){
            if(curMax < numberArr[idx]){
                curMax = numberArr[idx];
                curMaxIdx = idx;
            }
        }
        
        // 다음 eraseKtimes 세팅
        const nextNumberArr = numberArr.slice(curMaxIdx + 1);
        const nextK = k - curMaxIdx; // curMaxIdx 개의 숫자 삭제
        
        // 테스트 8, 10 > 실패 (signal: aborted (core dumped))
        // 메모이제이션 추가
        if(!memoization[(nextNumberArr, nextK)]){
            memoization[(nextNumberArr, nextK)] = eraseKtimes(nextNumberArr, nextK);
        }
        const curResult = curMax.concat(memoization[(nextNumberArr, nextK)]);

        //console.log(`curMax:${curMax} / curMaxIdx:${curMaxIdx} / curResult:${curResult}`);
        // 연결해서 반환
        return curResult;
    }

    answer = eraseKtimes(numberArr, k);

    return answer;    
}

main();