// 프로그래머스
// 코딩테스트 연습 > 해시 > 완주하지 못한 선수
// 사용 알고리즘/자료구조 : MAP

function main(){
    let answer = new Array();
    
    // 입력
    answer.push(solution(["leo", "kiki", "eden"], ["eden", "kiki"]));
    answer.push(solution(["marina", "josipa", "nikola", "vinko", "filipa"], ["josipa", "filipa", "marina", "nikola"]));
    answer.push(solution(["mislav", "stanko", "mislav", "ana"], ["stanko", "ana", "mislav"]));

    
    // 출력
    for(let i = 0; i < answer.length; i++){
        console.log(answer[i]);
    }
}

function solution(participant, completion) {
    let answer = '';
    let participantMap = new Map();
    let completionMap = new Map();

    for(let i = 0; i < participant.length; i++){
        if(participantMap.has(participant[i])){
            participantMap.set(participant[i], participantMap.get(participant[i]) + 1);
        } else {
            participantMap.set(participant[i], 1);
        }
    }

    for(let i = 0; i < completion.length; i++){
        if(completionMap.has(completion[i])){
            completionMap.set(completion[i], completionMap.get(completion[i]) + 1);
        } else {
            completionMap.set(completion[i], 1);
        }
    }

    // participantMap.forEach((value, key) => {
    //     console.log(key + " : " + value);
    // });

    // completionMap.forEach((value, key) => {
    //     console.log(key + " : " + value);
    // });

    participantMap.forEach((value, key) => {
        if(completionMap.get(key) != value){
            answer = key;
        }
    });

    return answer;
}

main();