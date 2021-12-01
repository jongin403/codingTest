// 프로그래머스
// 코딩테스트 연습 > 이분탐색 > 징검다리
// 사용 알고리즘 : 이분탐색
// 시간 복잡도 : O(log n)

// 문제 테스트 케이스 수정 필요
// 각 바위 사이의 거리가 정수라는 조건이 있었다고 해도
// 실제 min 값 고려 필요할듯
function main(){
    
    console.log(`execution result`);
    let start = new Date();
    let answer = solution(25, [2, 14, 11, 21, 17], 2); // 4
    //let answer = solution(23, [3, 6, 9, 10, 14, 17], 2); // 3
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
    let mid = Math.floor((start + end) / 2);
    let curDist;
    let removed;
    let shortFlag;

    // 바위를 제거한 수와 n 을 비교하여 이분 탐색할 범위를 설정한다.
    while(start < end - 1){
        curDist = 0;
        removed = 0;
        shortFlag = false; // 마지막 돌에서 길이가 짧은지 여부

        for(let idx = 0; idx < rockDist.length; idx++){
            curDist += rockDist[idx];
            if(curDist < mid){
                removed++;
                // removed 를 더 늘리면 shortFlag 가 false 가 되는 케이스가 있을 수 있음 >> 로직 수정 필요
                // 현재 마지막 index 에서만 체크해서 그런듯
                if(idx == rockDist.length - 1){ 
                    shortFlag = true;
                }
            } else {
                curDist = 0;
            }
        }

        
        if(n < removed || shortFlag){
            // 돌을 더 많이 제거했거나 마지막 돌에서 길이가 짧은 경우 값이 더 작아야함
            end = mid;
        } else {
            start = mid;
        }
        mid = Math.floor((start + end) / 2)
        console.log(`start:${start} / end:${end}`);
    }

    answer = mid;

    return answer;
}

main();