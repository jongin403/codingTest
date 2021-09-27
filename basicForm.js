// 프로그래머스
// 코딩테스트 연습 > 
// 사용 알고리즘 : 
// 시간 복잡도 : 

function main(){
    let answer = new Array();
    
    // 입력
    answer.push(solution("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"]));
    answer.push(solution("hit", "cog", ["hot", "dot", "dog", "lot", "log"]));
    
    // 출력
    for(let i = 0; i < answer.length; i++){
        console.log(answer[i]);
    }
}

function solution(begin, target, words) {
    let answer = 0;
    return answer;
}

main();