// 프로그래머스
// 코딩테스트 연습 > 2020 KAKAO BLIND RECRUITMENT > 문자열 압축

function main(){
    const answer = new Array();
    const output = new Array();
    
    // 입출력 예 입력
    answer.push(solution("abcabcdede"));
    output.push(8);    
    
    console.log(`execution result`);
    for(let idx = 0; idx < answer.length; idx++){
        console.log(`#${idx}. answer:${answer[idx]} / correct answer:${output[idx]}`);
    }
    
}

function solution(s) {
    let answer = Infinity;
    
    for(let idx = 1; idx < s.length / 2; idx++){
        let curResult = divideString(idx);
        if(curResult < answer){
            answer = curResult;
        }
    }

    function divideString(idx){
        const splitted = [];
        for(let jdx = idx; ; jdx += idx){
            // 나머지 처리
            if(s.length <= jdx){
                splitted.push(s.substring(jdx - idx));
                break;
            }
            splitted.push(s.substring(jdx - idx, jdx));            
            
        }
        console.log(`splitted:${splitted}`);

        const addedNum = [];
        for(let jdx = 1; jdx < splitted.length; jdx++){
            if(splitted[jdx - 1] === splitted[jdx]){

            } else {
                
            }
            
        }
    }

    return answer;
}

main();