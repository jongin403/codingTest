// 프로그래머스
// 코딩테스트 연습 > 2019 KAKAO BLIND RECRUITMENT > 오픈채팅방
// 사용 알고리즘/자료구조 : 
// 시간 복잡도 : 

function main(){
    let answer = new Array();
    let output = new Array();

    // 입출력 예 입력
    answer.push(solution(["Enter uid1234 Muzi", "Enter uid4567 Prodo","Leave uid1234","Enter uid1234 Prodo","Change uid4567 Ryan"]));
    output.push(["Prodo님이 들어왔습니다.", "Ryan님이 들어왔습니다.", "Prodo님이 나갔습니다.", "Prodo님이 들어왔습니다."]);
    
    console.log(`execution result`);
    for(let idx = 0; idx < answer.length; idx++){
        console.log(`#${idx}. answer:${answer[idx]} / correct answer:${output[idx]}`);
    }
}

function solution2(record) {
    let answer = [];
    const recordLists = [];

    // 1. recordLists 세팅
    for(let idx = 0; idx < record.length; idx++){
        const recordSplit = record[idx].split(' ')
        recordLists.push({
            command : recordSplit[0],
            uid     : recordSplit[1],
            name    : recordSplit[2],
        });
    }
    //console.log(recordLists);
    
    // 2. change 바꾸기
    const lastArr = [];
    for(let idx = recordLists.length - 1; 0 <= idx; idx--){
        if(recordLists[idx].command === 'Leave') continue;

        let curUid = recordLists[idx].uid;
        let curName = recordLists[idx].name;

        if(!lastArr.includes(curUid)){
            lastArr.push(curUid);

            recordLists.filter(el=>el.uid === curUid)
                       .forEach(elem=>elem.name = curName);
        }
    }
    //console.log(recordLists);

    // 3. answer 세팅
    recordLists.forEach(elem => {
        if(elem.command !== 'Change'){
            let inOut = elem.command === 'Enter' ? '님이 들어왔습니다.' : '님이 나갔습니다.';
            answer.push(elem.name + inOut);
        }
    });

    return answer;
}

function solution(record) {
    let answer = [];
    const recordLists = [];
    const uidName = new Map();

    for(let idx = 0; idx < record.length; idx++){
        // 1. recordLists 세팅
        const recordSplit = record[idx].split(' ')
        recordLists.push({
            command : recordSplit[0],
            uid     : recordSplit[1],
            //name    : recordSplit[2],
        });

        // 2. uidName set 세팅
        if(recordSplit[0] !== 'Leave'){
            uidName.set(recordSplit[1], recordSplit[2]);
        }        
    }
    //console.log(recordLists);
    
    // 3. answer 세팅
    recordLists.forEach(elem => {
        if(elem.command !== 'Change'){
            let inOut = elem.command === 'Enter' ? '님이 들어왔습니다.' : '님이 나갔습니다.';
            answer.push(uidName.get(elem.uid) + inOut);
        }
    });

    return answer;
}

main();