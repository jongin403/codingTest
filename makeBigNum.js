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
    return answer;
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