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
        // 종료 조건
        // arr 의 길이가 k 와 같을 경우 모두 삭제
        if(numberArr.length === k){
            return [];
        }

        // k 번째보다 작으면서 제일 큰 숫자 찾기
        const curMax = Math.max(...(numberArr.slice(0,k)));
        const curMaxIdx = numberArr.indexOf(curMax);
        
        // 다음 eraseKtimes 세팅
        const nextNumberArr = numberArr.slice(0, curMaxIdx + 1);
        const nextK = k - (curMaxIdx - 1); // curMaxIdx - 1 개의 숫자 삭제
        
        // 연결해서 반환
        return numberArr.slice(0,k).concat(eraseKtimes(nextNumberArr, nextK));
    }

    answer = eraseKtimes(numberArr, k);

    return answer;
}

main();