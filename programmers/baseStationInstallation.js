// 프로그래머스
// 코딩테스트 연습 > Summer/Winter Coding(~2018) > 기지국 설치
// 사용 알고리즘/자료구조 : 그리디
// 시간 복잡도 : O(N)

function main(){
    let answer = new Array();
    let output = new Array();

    // 입출력 예 입력
    answer.push(solution(11, [4, 11], 1));
    answer.push(solution(16, [9], 2));
    output.push(3);
    output.push(3);
    
    console.log(`execution result`);
    for(let idx = 0; idx < answer.length; idx++){
        console.log(`#${idx}. answer:${answer[idx]} / correct answer:${output[idx]}`);
    }
}

// #1 그리디
// 정확성: 70.5
// 효율성: 0.0
// 합계: 70.5 / 100.0
// 시간복잡도 : O(N) ( N <= 200,000,000 )
function solution2(n, stations, w) {
    let answer = 0;
    const base = Array(n + 1).fill(false); // 1 ~ n + 1
    
    // 연속해서 전파가 닿지 않는 칸 계산 후 나누기 5 한뒤 Math.ceil
    for(let idx = 0; idx < stations.length; idx++){
        let curLoc = stations[idx];
        let startIdx = (1 <= curLoc - w) ? curLoc - w : 1;
        let endIdx = (curLoc + w <= n) ? curLoc + w : n;
        for(let jdx = startIdx; jdx <= endIdx; jdx++){
            base[jdx] = true;
        }
    }
    //console.log(`base:${base}`);

    // base 갯수 계산
    let curNum = 0;
    for(let idx = 1; idx <= n; idx++){
        if(base[idx] === false){
            curNum++;
        }

        if(base[idx] === true || idx === n) {
            answer += Math.ceil(curNum / (2 * w + 1));
            //console.log(`answer:${answer}`);
            curNum = 0;
        }
    }
    
    return answer;
}

// #2 그리디 (불필요 array 제외)
// 시간복잡도 : O(S) ( S <= 10,000 )
function solution(n, stations, w) {
    let answer = 0;
    
    let startIdx = 0;
    let endIdx = 0;

    for(let idx = 0; idx <= stations.length; idx++){
        
        if(idx === 0){
            startIdx = 1;
            endIdx = stations[idx] - w - 1;
        } else if(idx === stations.length){
            startIdx = stations[idx - 1] + w + 1
            endIdx = n;
        }
        else {
            startIdx = stations[idx - 1] + w + 1
            endIdx = stations[idx] - w - 1;
        }

        //console.log(`${startIdx} / ${endIdx}`);
        if(startIdx < endIdx + 1){
            answer += Math.ceil((endIdx - startIdx + 1) / (2 * w + 1));
        }
    }
    //console.log(`base:${base}`);
    
    return answer;
}


main();