// 프로그래머스
// 코딩테스트 연습 > 해시 > 위장

function main(){
    const answer = new Array();
    const output = new Array();
    
    // 입출력 예 입력
    answer.push(solution([["yellowhat", "headgear"], ["bluesunglasses", "eyewear"], ["green_turban", "headgear"]]));
    output.push(5);
    
    console.log(`execution result`);
    for(let idx = 0; idx < answer.length; idx++){
        console.log(`#${idx}. answer:${answer[idx]} / correct answer:${output[idx]}`);
    }
    
}

function solution(clothes) {
    var answer = 0;
    const spyMap = new Map();
    for(let i = 0; i < clothes.length; i++){
        if(!spyMap.has(clothes[i][1])){
            spyMap.set(clothes[i][1], 1);
        } else {
            spyMap.set(clothes[i][1], spyMap.get(clothes[i][1]) + 1);
        }
    }
    //console.log(spyMap);
    let result = 1;
    spyMap.forEach(value => result *= value + 1);
    answer = result - 1;

    // (2 + 1) * (1 + 1) - 1 === 5
    
    return answer;
}

main();