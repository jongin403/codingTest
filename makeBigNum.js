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
    let numberList = number.split(""); // 숫자 목록
    //console.log(`numberList:${numberList}`);
    
    let ableToMakeNumList = []; // 만들 수 있는 숫자 목록
    let combinationList = combinations(numberList, numberList.length - k);
    
    for(let idx = 0; idx < combinationList.length; idx++){
        // 만들 수 있는 숫자
        let ableToMakeNum = Number(combinationList[idx].join(''));
        ableToMakeNumList.push(ableToMakeNum);
        //console.log(`${ableToMakeNum}`);
    }
    
    answer = String(Math.max(...ableToMakeNumList));
    return answer;
}

const combinations = function(arr, selectNumber) {
    let results = [];
    if (selectNumber === 1){
        return arr.map((el) => [el]);
    }

    arr.forEach((fixed, index, origin) => {
        const rest = origin.slice(index + 1); 
        const combiList = combinations(rest, selectNumber - 1); 
        const attached = combiList.map((el) => [fixed, ...el]); 
        
        results.push(...attached);
    });

    return results;
}


main();