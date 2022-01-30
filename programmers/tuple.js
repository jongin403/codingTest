// 프로그래머스
// 코딩테스트 연습 > 2019 카카오 개발자 겨울 인턴십 > 튜플
// 스킬 체크
// 50/50.0

function main(){
    const answer = new Array();
    const output = new Array();
    
    // 입출력 예 입력
    answer.push(solution("{{2},{2,1},{2,1,3},{2,1,3,4}}"));
    output.push([2, 1, 3, 4]);
    
    console.log(`execution result`);
    for(let idx = 0; idx < answer.length; idx++){
        console.log(`#${idx}. answer:${answer[idx]} / correct answer:${output[idx]}`);
    }
    
}

function solution(s) {
    var answer = [];

    s = s.replace("{{", "");
    const splitS = s.replace(/}/g, "").split(",{");

    const tupleS = [];
    for(let idx = 0; idx < splitS.length; idx++){
        tupleS.push(splitS[idx].split(","));
    }
    tupleS.sort((a,b)=>a.length - b.length);
    //console.log(tupleS);

    for(let idx = 0; idx < tupleS.length; idx++){
        const nextPush = tupleS[idx].filter(el=>!answer.includes(Number(el)));
        answer.push(Number(nextPush.toString()));
        //console.log(nextPush.toString());
    }

    return answer;
}

main();