// 프로그래머스
// 코딩테스트 연습 > 힙(Heap) > 디스크 컨트롤러
// 사용 알고리즘 : 큐, 우선순위 큐
// 시간 복잡도 : 

function main(){
    let answer = new Array();
    
    // 입력
    answer.push(solution([[0, 3], [101, 9], [102, 6]])); // 9
    
    // 출력
    for(let i = 0; i < answer.length; i++){
        console.log(answer[i]);
    }
}

// 제한 사항 : 하드디스크가 작업을 수행하고 있지 않을 때에는 먼저 요청이 들어온 작업부터 처리합니다.
// -> 미래를 보고 억지로 쉴 필요는 없으니 현재 처리 가능한 제일 짧은 디스크에 대해서 연산하기
function solution(jobs) {
    let answer = 0;
    let time = 0;
    let prevTime = -1;

    const disk = new MinHeap();

    let pollCnt = 0;

    while(pollCnt < jobs.length){
        
        for(let idx = 0; idx < jobs.length; idx++){
            //console.log(`prevTime:${prevTime} / jobs[idx][0]:${jobs[idx][0]} / time:${time}`);
            if(prevTime < jobs[idx][0] && jobs[idx][0] <= time){
                disk.add(jobs[idx][1]);                

            }
        }
        //disk.print();
        prevTime = time;
        if(!disk.isEmpty()){
            let poll = disk.poll();
            time += poll;
            answer += time;
            pollCnt++;
            //console.log(`poll:${poll}`);
        } else {
            time++;
        }
        //console.log(`answer:${answer} / time:${time} / pollCnt:${pollCnt}`);

    }

    let sum = 0;
    jobs.forEach(function(item,index){
        sum += item[0];
    })
    answer = (answer - sum) / jobs.length;

    // 소수 점 이하의 수 버리기
    return Math.floor(answer);
}

class Heap {
    // Creates an empty binary heap.
    constructor(){
        this.data = [];
    }

    // Removes all the elements from the heap.
    clear(){
        this.data = [];
    }

    // Returns true if the heap contains the specified element.
    contains(element){
        // TO-DO
    }

    // Returns true if the binary heap is equal to another heap.
    equals(other){
        // TO-DO
    }

    // Executes the provided function once per element present in the heap in no particular order.
    forEach(callback){
        // TO-DO
    }

    // Checks if the heap is empty.
    isEmpty(){
        return this.data.length === 0;
    }

    // Retrieves but does not remove the root (minimum) element of the heap.
    peek(){
        return this.data[0] ? this.data[0] : null;
    }

    // Returns the number of elements in the heap.
    size(){
        return this.data.length;
    }

    // Returns an array containing all the elements in the heap in no particular order.
    toArray(){
        // TO-DO
    }

    // additional utilities
    
    swap(a, b){
        let temp = this.data[b];
        this.data[b] = this.data[a];
        this.data[a] = temp;
    }

    parentIndex(index){
        return Math.floor((index-1) / 2);
    }

    leftChildIndex(index){
        return index * 2 + 1;
    }

    rightChildIndex(index){
        return index * 2 + 2;
    }

    parent(index){
        return this.data[this.parentIndex(index)];
    }

    leftChild(index){
        return this.data[this.leftChildIndex(index)];
    }

    rightChild(index){
        return this.data[this.rightChildIndex(index)];
    }

    print(){
        // 0 : 2^0 - 1 ~ 2^1 - 2
        // 1 2 : 2^1 - 1 ~ 2^2 - 2
        // 3 4 5 6 : 2^2 - 1 ~ 2^3 - 2
        // ...
        let printVal;
        let curVal;
        let exponent = 0;
        
        while(2 ** exponent - 1 < this.size()){
            printVal = "";
            var start = 2 ** exponent - 1;
            var end = 2 ** (exponent + 1) - 1;

            for(let idx = start; idx < end; idx++){
                
                if(this.data[idx] != undefined){
                    curVal = this.data[idx];
                } else {
                    curVal = "' '";
                }
                
                if(idx == start){
                    printVal += curVal;
                } else {
                    printVal += ", " + curVal;
                }
            }
            console.log(`depth:${exponent} / ${printVal}`);
            exponent += 1;
        }
    }
}

class MinHeap extends Heap{
    
    bubbleUp(){
        let index = this.data.length - 1;

        while(this.parent(index) !== undefined && this.parent(index) > this.data[index]){
            //console.log(`swap ${this.data[index]} <-> ${this.data[this.parentIndex(index)]}`);
            this.swap(index, this.parentIndex(index));
            index = this.parentIndex(index);
        }
    }

    bubbleDown(){
        let index = 0;

        while(this.leftChild(index) !== undefined && 
             (this.leftChild(index) < this.data[index] || this.rightChild(index) < this.data[index])){

            let smallerIndex = this.leftChildIndex(index);

            if(this.rightChild(index) !== undefined && this.rightChild(index) < this.data[smallerIndex]){

                smallerIndex = this.rightChildIndex(index);
            }

            //console.log(`swap ${this.data[index]} <-> ${this.data[smallerIndex]}`);
            this.swap(index, smallerIndex);
            index = smallerIndex;
        }
    }

    add(item){
        this.data[this.data.length] = item;
        this.bubbleUp();
    }

    poll(){
        let item = this.data[0];
        this.data[0] = this.data[this.data.length - 1];
        this.data.pop();
        this.bubbleDown();

        return item;
    }

}

main();