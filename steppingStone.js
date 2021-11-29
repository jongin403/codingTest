// 프로그래머스
// 코딩테스트 연습 > 이분탐색 > 징검다리
// 사용 알고리즘 : 
// 시간 복잡도 : 

function main(){
    const input = new Array();
    const output = new Array();
    
    // 입출력 예 입력
    input.push([25, [2, 14, 11, 21, 17], 2]);
    output.push(4);
    
    console.log(`execution result`);
    for(let idx = 0; idx < input.length; idx++){
        let start = new Date();
        let answer = solution(input[idx])
        let end = new Date();
        
        console.log(`#${idx}. answer:${answer} / correct answer:${output[idx]} / time:${end - start}ms`);
    }
    
}

// 이분 탐색을 하는 대상 : 바위 사이의 최소 간격
function solution(distance, rocks, n) {
    let answer = 0;

    rocks.push(0);
    rocks.push(distance);
    rocks.sort((a, b) => a - b);

    //const rockDist

    let start = 1;
    let end = distance;

    while(start < end){
        if(true){
            start++;
        } else {
            end--;
        }
    }
    


    return answer;
}

main();