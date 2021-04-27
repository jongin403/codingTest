// 프로그래머스
// 코딩테스트 연습 > 탐욕법(Greedy) > 조이스틱
// 사용 알고리즘 : 2중 FOR 문, 모듈러
// 시간 복잡도 : O(N^2)

function main(){
    let answer = new Array();
    
    // 입력
    answer.push(solution("JEROEN"));
    answer.push(solution("JAN"));
    answer.push(solution("AAAAA"));
    answer.push(solution("AABBAAA"));
    answer.push(solution("AAAABBBA"));
    answer.push(solution("BBZBB"));
    answer.push(solution("ABAAAAAAAAAAB"));
    
    // 출력
    for(let i = 0; i < answer.length; i++){
        console.log(answer[i]);
    }
}

function solution(name) {
    let answer = 0;
    
    //let charCode = [];
    let tempMove = 0;
    let changeSum = 0; // 알파벳 변환 수
    let changeNum = 0; // 바꿀 알파벳 수
    let isChangeArray = [];
    let nameLen = name.length;

    for(let i = 0; i < nameLen; i++){
        tempMove = name.charCodeAt(i) - "A".charCodeAt(0);
        
        if(26 < tempMove){
            console.log('알파벳 범위 초과');
        } else if(13 < tempMove){
            tempMove = 26 - tempMove;
        } else if(tempMove < 0){
            console.log('알파벳 범위 초과');
        }

        //charCode.push(tempMove);
        if(tempMove > 0){
            isChangeArray.push(true);
            changeNum++;
        } else {
            isChangeArray.push(false);
        }
        changeSum += tempMove;
    }
    //console.log(charCode);
    //console.log(changeSum);

    // changeSum 에서 왼쪽 오른쪽 이동 수만 더해주면 된다.
    // 모듈러 연산시 음수가 나올 경우는 언어마다 다르므로 나누는만큼 더해주면 신경 안써도 될것 같음
    let moveSum = 0; // 자리 이동 수
    let curIdx = 0; // 현재 인덱스
    
    // 변경 횟수
    for(let i = 0; i < changeNum; i++){
        // 가장 멀리 이동하는 경우 : name.length / 2 만큼 이동 ( ex. B A A B A A >> 6 / 3)
        for(let j = 0; j < name.length / 2 + 1; j++){
            if(isChangeArray[(curIdx + j) % nameLen]){
                isChangeArray[(curIdx + j) % nameLen] = false;
                curIdx = (curIdx + j) % nameLen;
                moveSum += j;
                break;
            } else if(isChangeArray[(curIdx - j + nameLen) % nameLen]){
                isChangeArray[(curIdx - j + nameLen) % nameLen] = false;
                curIdx = (curIdx - j + nameLen) % nameLen;
                moveSum += j;
                break;
            }
        }
    }
    answer = changeSum + moveSum;


    // 테스트 11 "ABAAAAAAAAAAB" 섞는 케이스 해결 불가
    /*
    let contZeroIndex = -1; // 연속적인 0 이 시작하는 index
    
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
        answer1 = changeSum + contZeroIndex;
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
        answer2 = changeSum + name.length - contZeroIndex;
    } else {
        answer2 = 0;
    }

    answer = (answer1 < answer2 ? answer1 : answer2);
    */
    return answer;
}

main();