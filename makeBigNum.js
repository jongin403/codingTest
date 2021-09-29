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
    return answer;
}

function combinations(arr, selectNumber) {
    let results = [];
    if (selectNumber === 1){
        return arr.map((el) => [el]);
    }

    arr.forEach((fixed, index, origin) => {
        let rest = origin.slice(index + 1); 
        let combinations = combinations(rest, selectNumber - 1); 
        let attached = combinations.map((el) => [fixed, ...el]); 
        
        results.push(...attached);
    });

    return results;
}


main();