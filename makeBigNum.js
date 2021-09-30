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
    
    const priorityArr = getPriority(number);
    answer = eraseK(number, priorityArr, k);
    
    return answer;
}

const getPriority = function(number){
    const priorityArr = new Array(number.length).fill(0);
    let priority = 1;

    for(let compareNum = 9; compareNum >= 0; compareNum--){
        // 앞에서 부터 하면 solution("1231234", 3) // 2334
        //for(let i = 0 ; i < number.length; i++){ 
        for(let i = number.length - 1 ; i >= 0; i--){

            //console.log(`${number[i]} / ${compareNum} / ${number[i] === compareNum}`)
            if(Number(number[i]) === compareNum){
                priorityArr[i] = priority;
                priority++;                
            }

        }
    }
    
    //console.log(`number:${number}`);
    //console.log(`priorityArr:${priorityArr}`);

    return priorityArr;
}

const eraseK = function(number, priorityArr, k){
    let exceptNumber = "";

    for(let i = 0 ; i < number.length; i++){
        console.log(`${priorityArr[i]} / ${number.length - k}`)
        if(priorityArr[i] <= number.length - k){
            exceptNumber = exceptNumber.concat(number[i]);
        }
    }

    //console.log(`exceptNumber:${exceptNumber}`);
    return exceptNumber;
}

main();