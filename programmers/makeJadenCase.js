// 프로그래머스
// 코딩테스트 연습 > 연습문제 > JadenCase 문자열 만들기

function main(){
    const answer = new Array();
    const output = new Array();
    
    // 입출력 예 입력
    answer.push(solution("3people unFollowed me"));
    output.push("3people Unfollowed Me");
    
    console.log(`execution result`);
    for(let idx = 0; idx < answer.length; idx++){
        console.log(`#${idx}. answer:${answer[idx]} / correct answer:${output[idx]}`);
    }
    
}

function solution(s) {
    var answer = '';
    
    s = s.toLowerCase();
    for(let i = 0; i < s.length; i++){
        if(i === 0 || s.charAt(i - 1) === ' '){
            s = s.substring(0, i).concat(s.charAt(i).toUpperCase()).concat(s.substring(i + 1));
        }
    }
    //console.log(s);
    answer = s;

    return answer;
}

main();