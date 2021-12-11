// example practice
// 사용 알고리즘 : 완전 탐색
// 시간 복잡도 : 

function main(){
    const answer = new Array();
    
    // 입출력 예 입력
    answer.push(solution(5, 2)); // 5! / (3! x 2!) = 10 개

    for(let idx = 0; idx < answer.length; idx++){
        answer[idx].map((el) => console.log(el));
    }
}

// rCn combination 구현
function solution(r, n) {
    // r 개 중 n 개를 고르는 방법
    const result = [];
    const picked = [];
    const rArray = new Array(r);
    for(let idx = 0; idx < rArray.length; idx++){
        rArray[idx] = idx + 1;
    }
    //console.log(`rArray:${rArray}`);

    const getCombinations = function (arr, selectNumber) {
        const results = [];
        if (selectNumber === 1) return arr.map((el) => [el]); 
        // n개중에서 1개 선택할 때(nC1), 바로 모든 배열의 원소 return
    
        arr.forEach((fixed, index, origin) => {
            const rest = origin.slice(index + 1); 
            // 해당하는 fixed를 제외한 나머지 뒤
            const combinations = getCombinations(rest, selectNumber - 1); 
            // 나머지에 대해서 조합을 구한다.
            const attached = combinations.map((el) => [fixed, ...el]); 
            //  돌아온 조합에 떼 놓은(fixed) 값 붙이기
            results.push(...attached); 
            // 배열 spread syntax 로 모두다 push
        });
    
        return results; // 결과 담긴 results return
    };

    return getCombinations(rArray, n);
}

main();