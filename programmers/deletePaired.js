// 프로그래머스
// 코딩테스트 연습 > 2017 팁스타운 > 짝지어 제거하기

function main(){
    let answer = new Array();
    let output = new Array();

    // 입출력 예 입력
    answer.push(solution("baabaa"));
    answer.push(solution("cdcd"));
    output.push(1);
    output.push(0);
    
    console.log(`execution result`);
    for(let idx = 0; idx < answer.length; idx++){
        console.log(`#${idx}. answer:${answer[idx]} / correct answer:${output[idx]}`);
    }
}

// 정확성: 60.2
// 효율성: 0.0
// 합계: 60.2 / 100.0
function solution2(s)
{
    let answer = 0;
    let breakFlag = true;

    while(true){
        breakFlag = true;
        for(let idx = 1; idx < s.length; idx++){
            if( s.charAt(idx-1) === s.charAt(idx) ){
                console.log(`${s} / ${s.substring(0, idx-1)} / ${s.substring(0, idx)}`)
                s = s.substring(0, idx-1) + s.substring(idx+1);
                breakFlag = false;
            }
        }

        if(breakFlag) break;
    }

    if(0 < s.length) answer = 0;
    else answer = 1;

    return answer;
}

function solution(s)
{
    let answer = 0;

    let sArray = [];

    for(let idx = 0; idx < s.length; idx++){
        sArray.push(s.charAt(idx));
        //console.log(`sArray:${sArray}`);

        let sLen = sArray.length;

        if(2 <= sLen && sArray[sLen - 1] === sArray[sLen -2]){
            sArray.pop();
            sArray.pop();
        }
    }

    if(0 < sArray.length) answer = 0;
    else answer = 1;

    return answer;
}

main();