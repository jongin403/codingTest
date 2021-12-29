// 프로그래머스
// 코딩테스트 연습 > 완전탐색 > 카펫
// 사용 알고리즘 : 
// 시간 복잡도 : 

function main(){
    let answer = new Array();
    
    // 입력
    answer.push(solution(10, 2)); // [4,3]
    answer.push(solution(8, 1)); // [3,3]
    answer.push(solution(24, 24)); // [8,6]
    
    // 출력
    for(let i = 0; i < answer.length; i++){
        console.log(answer[i]);
    }
}

function solution(brown, yellow) {
    let answer = [];

    let width; // 가로
    let height; // 세로
    let totCarPet = brown + yellow;

    // 방정식
    // 1. yellow = (width - 2) * (height - 2)
    // 2. brown = width * 2 + height * 2 - 4
    // 3. brown + yellow = width * height
    // 2 * ( width + height ) - 4 = brown

    for(let curWidth = 1; curWidth * curWidth <= totCarPet; curWidth++){
        //console.log(`curWidth:${curWidth}`);
        if(totCarPet % curWidth === 0){
            let curHeight = totCarPet / curWidth;
            if(brown === (curHeight * 2 + curWidth * 2 - 4)){
                width = curWidth;
                height = curHeight;                
                break;
            }
        }
    }

    
    answer.push(height);
    answer.push(width);

    return answer;
}

main();