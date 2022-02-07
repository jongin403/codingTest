// 프로그래머스
// 코딩테스트 연습 > Summer/Winter Coding(2019) > 멀쩡한 사각형

function main(){
    let answer = new Array();
    let output = new Array();

    // 입출력 예 입력
    answer.push(solution(8, 12));
    answer.push(solution(10000000, 10000000));
    answer.push(solution(100000000, 100000000));
    output.push(80);
    output.push(99999990000000);
    output.push(9999999900000000);
    
    console.log(`execution result`);
    for(let idx = 0; idx < answer.length; idx++){
        console.log(`#${idx}. answer:${answer[idx]} / correct answer:${output[idx]}`);
    }
}

/*
// w / h 로 기울기를 먼저 나눈 수 곱 연산을 할 경우 소수점 처리가 달라진다.
// W, H : 1억 이하의 자연수 이므로 BigInt 를 고려해야 한다.
function solution(w, h) {
    let answer = 0;

    for(let idx = 0; idx < h; idx++){
        const inclin = w / h; // 기울기
        const upperX = Math.floor(idx * inclin);
        const lowerX = Math.ceil((idx + 1) * inclin);
        const curFineSquare = w - (lowerX - upperX);
        //console.log(`upperX:${upperX} / lowerX:${lowerX} / curFineSquare:${curFineSquare}`);

        answer += curFineSquare;
    }

    return answer;
}
*/

function solution(w, h) {
    let answer = BigInt(0);

    for(let idx = 0; idx < h; idx++){
        const upperX = Math.floor(idx * w / h);
        const lowerX = Math.ceil((idx + 1) * w / h);
        const curFineSquare = w - (lowerX - upperX);
        //console.log(`upperX:${upperX} / lowerX:${lowerX} / curFineSquare:${curFineSquare}`);

        answer += BigInt(curFineSquare);
    }

    return answer;
}

main();