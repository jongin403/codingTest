// 프로그래머스
// 코딩테스트 연습 > 연습문제 > JadenCase 문자열 만들기
// 점수 : 50.0 / 50.0

function main(){
    let answer = new Array();
    
    // 입력
    answer.push(solution("3people unFollowed me")); // "3people Unfollowed Me"
    answer.push(solution("for the last week")); // "For The Last Week"
    
    // 출력
    for(let i = 0; i < answer.length; i++){
        console.log(answer[i]);
    }
}

function solution(s) {
    let answer = '';
    //let words = s.split(' ');
    let upperYn = false;

    for(let idx = 0; idx < s.length; idx++){
        if(idx == 0){
            upperYn = true;
        }

        if(upperYn){
            answer += s[idx].toUpperCase();            
        } else {
            answer += s[idx].toLowerCase();
        }

        if(s[idx] === ' '){
            upperYn = true;
        } else {
            upperYn = false;
        }
    }

    return answer;
}

main();