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
    
    // 숫자가 가장 큰 녀석까지 다 지울 수 있는지
    // 1. 다 지운다면 나머지 중에서
    getNextNum(number, k);

    function getNextNum(number, k){
        if(k < 1){
            answer += number;
            return;
        }

        let bIdx = getBiggestIdx(number);
        console.log("bIdx : " + number + " / " + bIdx);
        
        if(bIdx > k){
            // 못지웠으니 인덱스 앞쪽 문자열을 다시 연산
            console.log("못지움 : " + number.substring(0, bIdx));
            getNextNum(number.substr(0, bIdx), k);
        } else {
            // 지우고 지운 인덱스 뒤쪽 문자열을 다시 연산
            if(bIdx == 0){
                answer += number[bIdx];
                console.log("지움1 : " + number.substring(bIdx,number.length) + " / " + (k - bIdx));
                getNextNum(number.substring(1,number.length), k);
            } else {
                console.log("지움2 : " + number.substring(bIdx,number.length) + " / " + (k - bIdx));
                getNextNum(number.substring(bIdx,number.length), k - bIdx);
            }
            
        }
    }

    // 2. 다 못지운다면 그다음 순서
    return answer;
}

function getBiggestIdx(number){
    let index = -1;
    let curValue = -1;

    for(let i = 0 ; i < number.length; i++){
        if(number[i] > curValue){ // 등호는 제외
            index = i;
            curValue = number[i];
        }
    }
    return index;
}

// 숫자를 제거해서 섞는게 아니라 그 순서대로 사용
function wrongSolution(number, k) {
    let answer = '';
    let numArray = new Array();

    for(let i = 0; i < number.length; i++){
        numArray.push(number[i]);
    }
    let sorted = numArray.sort(function(a,b){ return b-a; }); // 내림차순 정렬
    //console.log("sorted : " + sorted);
    // splice : 배열의 index 도 같이 제거
    // remove : 배열의 index 유지
    
    
    let spliced = sorted.splice(0, number.length-k);
    //console.log("spliced : " + spliced);
    
    for(let i = 0; i < spliced.length; i++){
        if(spliced[i] != "0"){
            answer = answer + "" + spliced[i];
        }
    }
    
    return answer;
}

main();