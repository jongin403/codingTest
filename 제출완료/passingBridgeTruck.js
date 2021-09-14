// 프로그래머스
// 코딩테스트 연습 > 스택/큐 > 다리를 지나는 트럭
// 사용 알고리즘 : 큐
// 시간 복잡도 : 

function main(){
    let answer = new Array();
    
    // 입력
    answer.push(solution(2, 10, [7,4,5,6])); // 8
    answer.push(solution(100, 100, [10])); // 101
    answer.push(solution(100, 100, [10,10,10,10,10,10,10,10,10,10])); // 110
    
    // 출력
    for(let i = 0; i < answer.length; i++){
        console.log(answer[i]);
    }
}

function solution(bridge_length, weight, truck_weights) {
    let answer = 0;

    let weightQ = new Array(bridge_length).fill(0);
    let sec = 0;
    let curTruckIdx = 0;

    while(true){
        
        let truckWeight;
        if(curTruckIdx < truck_weights.length){
            truckWeight = truck_weights[curTruckIdx];
        } else {
            truckWeight = -1;   
        }
        
        //console.log(`sec:${sec} : weightQ:${weightQ}`);

        if(weightQ.shift() == -1){
            break;
        }

        if(chkGoTruck(weightQ, weight, truckWeight)){
            weightQ.push(truckWeight);
            curTruckIdx++;
            
        } else {
            weightQ.push(0);
        }
        
        sec++;
    }

    answer = sec;

    function chkGoTruck(weightQ, weight, nextTruckWeight){
        let sum = 0;
        let result = true;

        for(let idx = 0; idx < weightQ.length; idx++){
            sum += weightQ[idx];            
        }
        
        if(sum + nextTruckWeight > weight){
            result = false;
        }

        return result;
    }

    return answer;
}

main();