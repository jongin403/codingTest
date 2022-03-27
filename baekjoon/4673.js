// 백준
// 문제 : 4673 셀프 넘버
// 티어 : 실버5
// 사용 알고리즘 : 
// 시간 복잡도 : O(n)
// 제출 완료

solution();

function solution() {
    // 로직
    const LIMIT_NUM = 10000;
    const numList = [];
    let sum = 0;
    for(let idx = 1; idx < LIMIT_NUM; idx++){
        sum = idx;
        idx.toString().split('').forEach(item => sum += Number(item));
        if(sum < LIMIT_NUM) numList[sum] = true;
    }
    
    // 제출
    for(let idx = 1; idx < LIMIT_NUM; idx++){
        if(!numList[idx]) console.log(idx);
    }
}
