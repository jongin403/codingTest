// 프로그래머스
// 코딩테스트 연습 > 이분탐색 > 징검다리
// 사용 알고리즘 : 
// 시간 복잡도 : 

function main(){
    
    console.log(`execution result`);
    let start = new Date();
    let answer = solution(25, [2, 14, 11, 21, 17], 2); // 4
    let end = new Date();
    
    console.log(`#answer:${answer} / time:${end - start}ms`);
}

// 이분 탐색을 하는 대상 : 바위 사이의 최소 간격
function solution(distance, rocks, n) {
    let answer = 0;

    console.log(`distance:${distance} / rocks:${rocks} / n:${n}`);
    rocks.push(0);
    rocks.push(distance);
    rocks.sort((a, b) => a - b);

    const rockDist = new Array(rocks.length - 1);
    for(let idx = 0; idx < rocks.length - 1; idx++){
        rockDist[idx] = rocks[idx + 1] - rocks[idx];
    }

    console.log(`rockDist:${rockDist}`);
    
    let start = 1;
    let end = distance;

    // while(start < end){
    //     if(true){
    //         start++;
    //     } else {
    //         end--;
    //     }
    // }
    
    return answer;
}

main();