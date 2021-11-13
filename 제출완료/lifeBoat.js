// 프로그래머스
// 코딩테스트 연습 > 탐욕법(Greedy) > 구명보트
// 사용 알고리즘 : 
// 시간 복잡도 : 

function main(){
    let answer = new Array();
    
    // 입력
    answer.push(solution([70, 50, 80, 50], 100)); // 3
    answer.push(solution([70, 80, 50], 100)); // 3
    answer.push(solution([10, 10, 20, 20, 30, 50, 40, 20, 30], 100)); // 5
    answer.push(solution([40, 50, 150, 160], 200)); // 2
    answer.push(solution([100, 500, 500, 900, 950], 1000)); // 3
    
    // 출력
    for(let i = 0; i < answer.length; i++){
        console.log(answer[i]);
    }
}

// 몸무게 큰 순서부터 차례로 넣기
// 작은 순서부터 할 경우 큰 몸무게에 끼워넣을 수 없으므로
function solution2(people, limit) {
    let answer = 0;
    
    const LIMIT_PEOPLE = 2;
    const MIN_WEIGHT = 40;
    const movedPeople = new Array(people.length);
    movedPeople.fill(false);

    const upperPeople = people.filter(a => limit / 2 < a);
    const lowerPeople = people.filter(a => limit / 2 >= a);
    console.log(`reverse sorted people:${people}`);

    people.sort((a,b) => a - b).reverse(); // sort 따로 설정하지 않으면 50,40,160,150 로 정렬
    
    //console.log(`reverse sorted people:${people}`);
    
    let movedPeopleCnt = 0;
    let boatCnt = 0;

    while(true){

        let curLimit = limit;
        let curPeople = 0;

        for(let idx = 0; idx < people.length; idx++){
            if(!movedPeople[idx]){
                
                // 옮겨지지 않았고 현재 limit 보다 무게가 적을 경우
                if(curLimit >= people[idx]){
                    movedPeople[idx] = true;
                    movedPeopleCnt ++;
                    curPeople++;
                    curLimit -= people[idx];
                } 
                
                // 인원수 및 몸무게 제한
                if(LIMIT_PEOPLE <= curPeople || curLimit < MIN_WEIGHT){
                    break;
                }

            }
        }

        boatCnt ++;

        if(movedPeopleCnt == people.length){
            break;
        }
    }
    
    answer = boatCnt;

    return answer;
}

function solution(people, limit) {
    let answer = 0;
    
    let leftIdx = 0;
    let rightIdx = people.length - 1;

    people.sort((a,b) => a - b).reverse();

    while(true){

        let sum = people[leftIdx] + people[rightIdx];
        
        if(sum <= limit){
            rightIdx--;
        } 
        leftIdx++;

        answer++;

        if(rightIdx == leftIdx){
            answer++;
        }

        if(rightIdx <= leftIdx){
            break;
        }
        
    }
    
    return answer;
}

main();