// 프로그래머스
// 코딩테스트 연습 > 힙(Heap) > 이중우선순위큐
// 사용 알고리즘 : 
// 시간 복잡도 : 

function main(){
    let answer = new Array();
    
    // 입력
    answer.push(solution(["I 16","D 1"])); // [0,0]
    answer.push(solution(["I 7","I 5","I -5","D -1"])); // [7,5]
    
    // 출력
    for(let i = 0; i < answer.length; i++){
        console.log(answer[i]);
    }
}

function solution(operations) {
    let answer = [];

    const opQueue = [];

    const getMinIdx = function(queue){
        if(queue.length < 1){
            return 0;
        }

        let minIdx = queue.length - 1;
        let minVal = queue[minIdx];
        
        queue.forEach(function(item, index){
            if(minVal > item){
                minVal = item;
                minIdx = index;
            }
        });

        //console.log(`delMinVal minIdx:${minIdx} / minVal:${minVal} / queue:${queue}`);
        return minIdx;
    };

    const getMaxIdx = function(queue){
        if(queue.length < 1){
            return 0;
        }

        let maxIdx = queue.length - 1;
        let maxVal = queue[maxIdx];
        
        queue.forEach(function(item, index){
            if(maxVal < item){
                maxVal = item;
                maxIdx = index;
            }
        });

        //console.log(`delMinVal maxIdx:${maxIdx} / maxVal:${maxVal} / queue:${queue}`);
        return maxIdx;
    };

    operations.forEach(function(item, index){
        let operation = item.split(' ');
        // operation[0] : 명령어
        // operation[1] : 데이터

        if(operation[0] == 'I'){
            opQueue.push(Number(operation[1]));
        } else if(operation[0] == 'D'){
            if(operation[1] == '1'){
                opQueue.splice(getMaxIdx(opQueue), 1);
            } else if(operation[1] == '-1'){
                opQueue.splice(getMinIdx(opQueue), 1);                
            }
        }
    });

    let minVal = opQueue[getMinIdx(opQueue)];
    if(!minVal) {
        minVal = 0;
    }

    let maxVal = opQueue[getMaxIdx(opQueue)];
    if(!maxVal) {
        maxVal = 0;
    }

    answer = [maxVal, minVal];

    return answer;
}


main();