// 프로그래머스
// 코딩테스트 연습 > 연습문제 > 올바른 괄호
// 사용 알고리즘 : 
// 시간 복잡도 : 

function main(){
    let answer = new Array();
    let output = new Array();
    
    // 입출력 예 입력
    answer.push(solution("()()"));
    output.push(true);
    answer.push(solution("(())()"));
    output.push(true);
    answer.push(solution(")()("));
    output.push(false);
    answer.push(solution("(()("));
    output.push(false);
    
    console.log(`execution result`);
    for(let idx = 0; idx < answer.length; idx++){
        console.log(`#${idx}. answer:${answer[idx]} / correct answer:${output[idx]}`);
    }
}

/*
function solution3(s){
    let answer = true;

    let sum = 0;
    for(let idx = 0; idx < s.length; idx++){
        if(s.charAt(idx) === '(') sum += 1;
        else sum -= 1;

        if(sum < 0){
            answer = false;
            break;
        }
    }

    if(sum !== 0) answer = false;

    return answer;
}

function solution2(s){
    
    let answer = true;
    let sArray = s.split('');
    let sum = 0;
    for(let idx = 0; idx < sArray.length; idx++){
        if(sArray[idx] === '(') sum += 1;
        else sum -= 1;

        if(sum < 0){
            answer = false;
            break;
        }
    }

    if(sum !== 0) answer = false;

    return answer;
}
*/

// 참고자료 : [javascript] string.charAt (x) 또는 string [x]?
// http://daplus.net/javascript-string-charat-x-%EB%98%90%EB%8A%94-string-x/
function solution(s){
    
    let answer = true;
    let sum = 0;
    for(let idx = 0; idx < s.length; idx++){
        if(s[idx] === '(') sum += 1;
        else sum -= 1;

        if(sum < 0){
            answer = false;
            break;
        }
    }

    if(sum !== 0) answer = false;

    return answer;
}

main();