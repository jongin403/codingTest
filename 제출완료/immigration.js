// 프로그래머스
// 코딩테스트 연습 > 이분탐색 > 입국심사
// 사용 알고리즘 : 파라메트릭 서치
// 시간 복잡도 : O(logN)

function main(){
    let answer = new Array();
    
    // 입력
    answer.push(solution(6, [7, 10])); // 28
    
    // 출력
    for(let i = 0; i < answer.length; i++){
        console.log(answer[i]);
    }
}

function solution(n, times) {
    let answer = 0;

    let start = 0;
    let end = n * Math.min(...times); // 가장 짧은곳에 모두 대기할 경우
    console.log(`start:${start} / end:${end}`);

    while(start <= end){
        let medianTime = Math.floor((start + end ) / 2);

        // 정답이 말이 되는지 확인
        let sum = 0;
        times.forEach(function(item, index, times){
            sum += Math.floor(medianTime / times[index]);
        });
        
        if( n <= sum){
            // 가능 ( 답이 medianTime 이하 )
            answer = medianTime // 저장
            end = medianTime - 1;
        } else {
            // 불가능 ( 답이 medianTime 보다 큼 )
            start = medianTime + 1;
        }

        //console.log(`medianTime:${medianTime} / sum:${sum}`);
        //console.log(`start:${start} / end:${end}`);
    }

    return answer;
}

main();