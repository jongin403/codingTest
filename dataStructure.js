// 코딩 테스트용 자료구조 구현
/*
http://mauriciosantos.github.io/Buckets-JS/ 를 기반으로

주요 자료구조 및 메서드 위주로 구현


참고자료
https://velog.io/@longroadhome/자료구조-JS로-구현하는-HEAP
https://velog.io/@longroadhome/자료구조-JS로-구현하는-.큐-Queue
https://velog.io/@longroadhome/자료구조-JS로-구현하는-순열과-조합
*/

function main(){
    const heap = new Heap();
    
    heap.add(1);
    heap.add(2);
    heap.add(3);
    heap.add(4);
    heap.print();
    
    console.log(1 >> 1);
}

// ES6
class Stack {
    // Creates an empty Stack.
    constructor(){
        this.top = -1;
        this.data = [];
    }
    
    // Pushes an element onto the top of the stack.
    add(elem){
        this.data[++this.top] = elem;
    }

    // Removes all the elements from the stack.
    clear(){
        this.top = -1;
        this.data = [];
    }

    // Returns true if the stack contains the specified element.
    contains(elem, equalsFunction){
        let isContains = false;
        for(let idx = 0; idx < this.data.length; idx++){
            if(equalsFunction(elem, this.data[idx])){
                isContains = true;
                break;
            }
        }
        return isContains;
    }

    // Returns true if the stack is equal to another stack.
    equals(other, equalsFunction){
        // ex) equalsFunction
        // function(a, b){
        //     return a === b;
        // }

        let isEquals = true;

        if(this.data.length === other.length){
            return false;
        }

        for(let idx = 0; idx < this.data.length; idx++){
            if(equalsFunction(other[idx], this.data[idx])){
                isEquals = false;
                break;
            }
        }
        return isEquals;
    }

    // Executes the provided function once per element present in the stack in LIFO order.
    forEach(callback){
        // ex) callback
        // function(elem, index, arr){
        //     console.log(`arr[${index}]:${elem}`);
        // }

        for(let idx = 0; idx < this.data.length; idx++){
            callback(this.data[idx], idx, this.data);
        }
    }

    // Checks if the stack is empty.
    isEmpty(){
        return this.data.length === 0;
    }

    // Returns the element at the top of the stack without removing it.
    peek(){
        return this.data[this.data.length - 1];
    }

    // Removes the element at the top of the stack and returns it.
    pop(){
        if(this.top < 0){
            return undefined;
        } else {
            const val = this.data[this.top];
            this.data = this.data[0, --this.top];
            return val;
        }
    }

    // Pushes an element onto the top of the stack.
    push(elem){
        this.data[++this.top] = elem;
    }

    // Returns the number of elements in the stack.
    size(){
        return this.data.length;
    }

    // Returns an array containing all the elements in the stack in LIFO order.
    toArray(){
        const arr = [];
        for(let idx = 0; idx < this.data.length; idx++){
            arr[idx] = this.data[idx];
        }
        return arr;
    }

    // additional utilities

    // 
    toString(){
        let str = "";
        for(let idx = 0; idx < this.data.length; idx++){
            if(idx == 0){
                str += this.data[idx];
            } else {
                str += ", " + this.data[idx];
            }
        }
        return str;
    }

}

class Queue {
    constructor(){
        this.front = 0;
        this.rear = 0;
        this.data = [];
    }

    // Inserts the specified element into the end of the queue.
    add(elem){
        this.data[rear++] = elem;
    }

    // Removes all the elements from the queue.
    clear(){
        this.front = 0;
        this.rear = 0;
        this.data = [];
    }

    // Returns true if the queue contains the specified element.
    contains(elem, equalsFunction){
        let isContains = false;
        for(let idx = this.front; idx < this.rear; idx++){
            if(equalsFunction(elem, this.data[idx])){
                isContains = true;
                break;
            }
        }
        return isContains;
    }

    // Retrieves and removes the head of the queue.
    dequeue(){
        if(this.front !== this.rear){
            return this.data[this.front++];
        } else {
            return null;
        }
    }

    // Inserts the specified element into the end of the queue.
    enqueue(elem){
        this.data[this.rear++] = elem;
    }

    // Returns true if the queue is equal to another queue.
    equals(other, equalsFunction){
        // ex) equalsFunction
        // function(a, b){
        //     return a === b;
        // }

        let isEquals = true;

        if(this.data.length === other.length){
            return false;
        }

        for(let idx = this.front; idx < this.rear; idx++){
            if(equalsFunction(other[idx - this.front], this.data[idx])){
                isEquals = false;
                break;
            }
        }
        return isEquals;
    }

    // Executes the provided function once per each element present in the queue in FIFO order.
    forEach(callback){
        // ex) callback
        // function(elem, index, arr){
        //     console.log(`arr[${index}]:${elem}`);
        // }

        for(let idx = this.front; idx < this.rear; idx++){
            callback(this.data[idx], idx - this.front, this.data);
        }
    }

    // Checks if the queue is empty.
    isEmpty(){
        return this.front === this.rear;
    }

    // Retrieves, but does not remove, the head of the queue.
    peek(){
        return this.data[this.front];
    }
    
    // Returns the number of elements in the queue.
    size(){
        return this.rear - this.front;
    }

    // Returns an array containing all the elements in the queue in FIFO order.
    toArray(){
        const arr = [];
        for(let idx = this.front; idx < this.rear; idx++){
            arr[idx - this.front] = this.data[idx];
        }
        return arr;
    }

    // additional utilities

    // 
    toString(){
        let str = "";
        for(let idx = this.front; idx < this.rear; idx++){
            if(idx == this.front){
                str += this.data[idx];
            } else {
                str += ", " + this.data[idx];
            }
        }
        return str;
    }
}

class Heap {
    // Creates an empty binary heap.
    constructor(){
        this.data = [null]; // 계산의 편의성을 위해 0 번째 index 는 비움
        // leftChildIdx = parentIdx * 2
        // rightChildIdx = parentIdx * 2 + 1
    }

    // Removes all the elements from the heap.
    clear(){
        this.data = [null];
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
        return this.data.length === 1;
    }

    // Retrieves but does not remove the root (minimum) element of the heap.
    peek(){
        return this.data[1] ? this.data[1] : null;
    }

    // Returns the number of elements in the heap.
    size(){
        return this.data.length - 1;
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
            for(let idx = 2 ** exponent; idx < 2 ** (exponent + 1); idx++){
                
                if(this.data[idx] != undefined){
                    curVal = this.data[idx];
                } else {
                    curVal = "' '";
                }
                
                if(idx == 2 ** exponent){
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

// 참고 : https://nyang-in.tistory.com/153
class MinHeap extends Heap{

    bubbleUp(){
        let index = this.data.length - 1;

        while(this.parent(index) !== undefined && 
              this.parent(index) > this.data[index]){

            this.swap(index, this.parentIndex(index));
            index = this.parentIndex(index);
        }
    }

    bubbleDown(){
        let index = 0;

        while(this.leftChild(index) !== undefined &&
              (this.leftChild(index) < this.data[index] || 
               this.rightChild(index) < this.data[index])){

            let smallerIndex = this.leftChildIndex(index);

            if(this.rightChild(index) !== undefined && 
               this.rightChild(index) < this.data[smallerIndex]){

                smallerIndex = this.rightChildIndex(index);
            }

            this.swap(index, smallerIndex);
            index = smallerIndex;
        }
    }

    add(item){
        this.data[this.data.length] = item;
        this.bubbleUp();
    }

    /*
    // Adds the given element into the heap.
    add(element){
        // TO-DO
        this.data.push(element);
        let curIdx = this.data.length - 1;
        let parIdx = (curIdx / 2) >> 0;
        
        // * minHeap / maxHeap 에 따라 달라짐
        while(curIdx > 1 && this.data[parIdx] > this.data[curIdx]) {
            this.swap(parIdx, curIdx)
            curIdx = parIdx;
            parIdx = (curIdx / 2) >> 0;
        }
    }
    */
    
    poll(){
        let item = this.data[0];
        this.data[0] = this.data[this.data.length - 1];
        this.data.pop();
        this.bubbleDown();

        return item;
    }

    /*
    // Retrieves and removes the root (minimum) element of the heap.
    removeRoot(){
        // TO-DO
        // * minHeap / maxHeap 에 따라 달라짐
        const min = this.heap[1];	
        if(this.data.length <= 2) this.data = [ null ];
        else this.data[1] = this.heap.pop();   
        
        let curIdx = 1;
        let leftIdx = curIdx * 2;
        let rightIdx = curIdx * 2 + 1; 
        
        if(!this.data[leftIdx]) return min;
        if(!this.data[rightIdx]) {
            if(this.data[leftIdx] < this.data[curIdx]) {
                this.swap(leftIdx, curIdx);
            }
            return min;
        }

        while(this.data[leftIdx] < this.data[curIdx] || this.data[rightIdx] < this.data[curIdx]) {
            const minIdx = this.data[leftIdx] > this.data[rightIdx] ? rightIdx : leftIdx;
            this.swap(minIdx, curIdx);
            curIdx = minIdx;
            leftIdx = curIdx * 2;
            rightIdx = curIdx * 2 + 1;
        }

        return min;
    }
    */
}

class MaxHeap {
}


// ES5

main();