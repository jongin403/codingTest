// 프로그래머스
// 코딩테스트 연습 > 탐욕법(Greedy) > 단속카메라
// 사용 알고리즘 : 
// 시간 복잡도 : 

// 정렬할 수 있는 기준을 찾아 봤을 때 도로 길이, 시작위치, 종료위치만 존재
// 1. 종료위치 기준으로 오름차순 정렬
// 2. 현재 도로 내에 카메라가 설치되어 있지 않다면 빠져나간 지점에 카메라를 설치
// 카메라 대수만큼 2번을 반복
function main(){
    let answer = new Array();
    
    // 입력
    answer.push(solution([[-20,-15], [-14,-5], [-18,-13], [-5,-3]])); // 2
    
    // 출력
    for(let i = 0; i < answer.length; i++){
        console.log(answer[i]);
    }
}

function solution(routes) {
    let answer = 0;
    const camLoc = [];

    // 종료위치 기준 오름차순 정렬
    routes.sort((a, b) => a[1] - b[1]);
    for(let idx = 0; idx < routes.length; idx++){
        console.log(`idx:${idx} / routes:${routes[idx]}`);


    }

    
    

    return answer;
}

main();