// 프로그래머스
// 코딩테스트 연습 > 스택/큐 > 기능개발
// 사용 알고리즘 : 
// 시간 복잡도 : 

function main(){
    let answer = new Array();
    
    // 입력
    answer.push(solution([93, 30, 55], [1, 30, 5])); // [2, 1]
    answer.push(solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1])); // [1, 3, 2]
    
    // 출력
    for(let i = 0; i < answer.length; i++){
        console.log(answer[i]);
    }
}

function solution(progresses, speeds) {
    let answer = [];

    let leftDays = [];
    
    // 남은 일자 구하기
    progresses.forEach(function(item, index){
        let leftDay = Math.ceil((100 - item) / speeds[index]);
        //console.log(`leftProgress:${100 - item} / speed:${speeds[index]}`);
        leftDays.push(leftDay);
        //console.log(`leftDay:${leftDay}`);
    });
        
    // 배포되는 날짜별 기능 수 구하기
    let curItem = leftDays[0]; // 초기값
    let curSum = 0;

    leftDays.forEach(function(item,index){
        if(curItem < item){
            // 다음배포
            answer.push(curSum);
            curSum = 1;
            curItem = item;
        } else {
            curSum++;
        }

        // 종료조건
        if(leftDays.length == index + 1) {
            // 마지막일 경우
            answer.push(curSum);
        }

        //console.log(`index:${index} / curSum:${curSum} / length:${leftDays.length}`);
    });

    return answer;
}

main();