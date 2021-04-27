// 프로그래머스
// 코딩테스트 연습 > 탐욕법(Greedy) > 조이스틱
// 사용 알고리즘 : 
// 시간 복잡도 : 

function main(){
    let answer = new Array();
    
    // 입력
    answer.push(solution("JEROEN"));
    answer.push(solution("JAN"));

    
    // 출력
    for(let i = 0; i < answer.length; i++){
        console.log(answer[i]);
    }
}

function solution(name) {
    let answer = 0;
    
    let charCode = [];
    let tempMove = 0;
    let contZeroIndex = -1; // 연속적인 0 이 시작하는 index
    let sum = 0;

    for(let i = 0; i < name.length; i++){
        tempMove = name.charCodeAt(i) - "A".charCodeAt(0);
        
        if(26 < tempMove){
            console.log('알파벳 범위 초과');
        } else if(13 < tempMove){
            tempMove = 26 - tempMove;
        } else if(tempMove < 0){
            console.log('알파벳 범위 초과');
        }

        charCode.push(tempMove);
        sum += tempMove;
    }
    //console.log(charCode);
    //console.log(sum);
    
    // CASE1 오른쪽으로 이동
    let answer1 = 0;

    // 오른쪽에서 부터 연속적인 A 확인 (ex. C D J A A A A A )
    contZeroIndex = -1;
    for(let i = name.length - 1; 0 <= i; i--){
        if(name[i] !== "A"){
            contZeroIndex = i;
            break;
        }        
    }

    if(contZeroIndex != -1){
        answer1 = sum + contZeroIndex;
    } else {
        answer1 = 0;
    }
    
    // CASE2 왼쪽으로 이동
    let answer2 = 0;

    // 왼쪽에서 두번째 부터 연속적인 A 확인 (ex. C A A A A A D J )
    contZeroIndex = -1;
    for(let i = 1; i < name.length; i++){
        if(name[i] !== "A"){
            contZeroIndex = i;
            break;
        }        
    }

    if(contZeroIndex != -1){
        answer2 = sum + name.length - contZeroIndex;
    } else {
        answer2 = 0;
    }

    answer = (answer1 < answer2 ? answer1 : answer2);
    return answer;
}

main();