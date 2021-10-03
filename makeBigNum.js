// 프로그래머스
// 코딩테스트 연습 > 탐욕법(Greedy) > 큰 수 만들기
// 사용 알고리즘 : 
// 시간 복잡도 : 

function main(){
    let answer = new Array();
    
    // 입력
    //answer.push(solution("1924", 2));
    answer.push(solution("1231234", 3));
    //answer.push(solution("4177252841", 4));

    
    // 출력
    for(let i = 0; i < answer.length; i++){
        console.log(answer[i]);
    }
}

function solution(number, k) {
    let answer = '';
    let numberArr = number.split('');
    console.log(`numberArr:${numberArr}`);
   
    let savedIdxArr = []; // 지우지 않고 살아남은 인덱스

    // k 보다 작은 인덱스 중에 가장 큰 숫자 찾기
    const eraseKtimes = function(numberArr, k){
        console.log(`${numberArr} / ${k}`);

        // 종료 조건
        // 1. 삭제할 게 없을 경우
        if(k === 0 ){
            return numberArr;
        }
        // 2. k가 arr 의 길이보다 같거나 클 경우 모두 삭제
        if(numberArr.length <= k){
            return [];
        }

        // k + 1 번째보다 작으면서 제일 큰 숫자 찾기
        // 그래야 k 개를 지울 수 있으니까
        const curMax = String(Math.max(...(numberArr.slice(0,k+1))));
        const curMaxIdx = numberArr.indexOf(curMax);
        
        // 다음 eraseKtimes 세팅
        const nextNumberArr = numberArr.slice(curMaxIdx + 1);
        const nextK = k - curMaxIdx; // curMaxIdx 개의 숫자 삭제
        
        console.log(`curMax:${curMax} / curMaxIdx:${curMaxIdx}`);
        
        // 연결해서 반환
        return numberArr.slice(0,k).concat(eraseKtimes(nextNumberArr, nextK));
    }

    answer = eraseKtimes(numberArr, k);

    return answer;
}

main();