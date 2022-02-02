// 프로그래머스
// 코딩테스트 연습 > 연습문제 > 가장 긴 팰린드롬
// 50.0 / 50.0

function main(){
    let answer = new Array();
    let output = new Array();

    // 입출력 예 입력
    answer.push(solution("abcdcba"));
    answer.push(solution("abacde"));
    output.push(7);
    output.push(3);
    
    console.log(`execution result`);
    for(let idx = 0; idx < answer.length; idx++){
        console.log(`#${idx}. answer:${answer[idx]} / correct answer:${output[idx]}`);
    }
}

function solution(s)
{
    let answer = 0;

    for(let idx = 0; idx < s.length; idx++){
        for(let jdx = idx; jdx < s.length; jdx++){
            if(jdx - idx + 1 <= answer){
                continue;
            }

            if(isPalindrome(s, idx, jdx)){
                answer = jdx - idx + 1;
            }
        }
    }

    function isPalindrome(s, idx, jdx){
        for(let i = idx, j = jdx; i <= Math.floor((idx + jdx) / 2); i++, j--){
            if(s[i] !== s[j]){
                return false;
            }
        }
        return true;
    }

    return answer;
}

main();