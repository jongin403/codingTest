// 프로그래머스
// 코딩테스트 연습 > 2021 KAKAO BLIND RECRUITMENT > 순위 검색

function main(){
    const answer = new Array();
    const output = new Array();
    
    // 입출력 예 입력
    answer.push(solution(["java backend junior pizza 150","python frontend senior chicken 210","python frontend senior chicken 150","cpp backend senior pizza 260","java backend junior chicken 80","python backend senior chicken 50"],
    ["java and backend and junior and pizza 100","python and frontend and senior and chicken 200","cpp and - and senior and pizza 250","- and backend and senior and - 150","- and - and - and chicken 100","- and - and - and - 150"]));
    output.push([1,1,1,1,2,4]);
    
    console.log(`execution result`);
    for(let idx = 0; idx < answer.length; idx++){
        console.log(`#${idx}. answer:${answer[idx]} / correct answer:${output[idx]}`);
    }
    
}

function solution(info, query) {
    // 개발언어 : cpp, java, python
    // 직군 : backend, frontend 
    // 경력구분 : junior, senior
    // 소울푸드 : chicken, pizza 
    // 코딩테스트 점수 : 1~100,000

    var answer = [];
    const userInfo = [];
    for(let idx = 0; idx < info.length; idx++){
        const data = info[idx].split(' ');

        const dataObj = {
            lan : data[0],
            job : data[1],
            car : data[2],
            sof : data[3],
            sco : data[4]
        }
        userInfo.push(dataObj)
        //console.log(dataObj);
    }

    for(let idx = 0; idx < query.length; idx++){
        const condition = query[idx].split(' ');
        const qFilter = {
            lan : condition[0],
            job : condition[2],
            car : condition[4],
            sof : condition[6],
            sco : condition[7]
        }
        //console.log(qFilter);

        const filtered = userInfo.filter(el=>{
            // return (qFilter.lan === '-' || qFilter.lan !== '-' && el.lan === qFilter.lan) &&
            //        (qFilter.job === '-' || qFilter.job !== '-' && el.job === qFilter.job) &&
            //        (qFilter.car === '-' || qFilter.car !== '-' && el.car === qFilter.car) &&
            //        (qFilter.sof === '-' || qFilter.sof !== '-' && el.sof === qFilter.sof) &&
            //        (qFilter.sco === '-' || qFilter.sco !== '-' && Number(el.sco) >= Number(qFilter.sco))

            if(qFilter.lan !== '-' && el.lan !== qFilter.lan){
                return false;
            }

            if(qFilter.job !== '-' && el.job !== qFilter.job){
                return false;
            }

            if(qFilter.car !== '-' && el.car !== qFilter.car){
                return false;
            }

            if(qFilter.sof !== '-' && el.sof !== qFilter.sof){
                return false;
            }

            if(qFilter.sco !== '-' && Number(el.sco) < Number(qFilter.sco)){
                return false;
            }

            return true;            
        });

        //console.log(filtered);
        answer.push(filtered.length);
    }

    return answer;
}

main();