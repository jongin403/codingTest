// 코딩 테스트용 자료구조 구현

function main(){
    const heap = new MinHeap();
   
    heap.add(8);
    heap.print();
    heap.add(7);
    heap.print();
    heap.add(6);
    heap.print();
    heap.add(5);
    heap.print();
    heap.add(1);
    heap.print();
    heap.add(4);
    heap.print();
    heap.add(2);
    heap.print();
    heap.add(3);
    heap.print();
    heap.poll();
    heap.print();
    heap.poll();
    heap.print();
    heap.poll();
    heap.print();
    heap.poll();
    heap.print();
    heap.poll();
    heap.print();
    heap.poll();
    heap.print();
    heap.poll();
    heap.print();
    heap.poll();
    heap.print();
}

// ES6
class Stack {
    constructor(){
        this.top = -1;
        this.data = [];
        this.MAX_STACK_SIZE = 1 * 1024 * 1024;
    }
    
    isEmpty(){
        return this.data.length == 0;
    }

    push(val){
        if(this.MAX_STACK_SIZE <= this.data.length){
            console.log(`max stack size exceed error (MAX_STACK_SIZE:${this.MAX_STACK_SIZE})`);
            return undefined;
        } else {
            this.data[++this.top] = val;
        }
    }

    pop(){
        if(this.top < 0){
            return undefined;
        } else {
            let popVal = this.data[this.top];
            this.data = this.data[0, --this.top];
            return popVal;
        }
    }

    peek(){
        return this.data[this.data.length - 1];
    }

    clear(){
        this.top = -1;
        this.data = [];
    }

    print(){
        let printVal = "";
        for(let idx = 0; idx < this.data.length; idx++){
            if(idx == 0){
                printVal += this.data[idx];
            } else {
                printVal += ", " + this.data[idx];
            }
        }
        console.log(`${printVal}`);
    }
}

class Heap {
    constructor(){
        //this.data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 0, 1];
        this.data = [];
    }

    swap(index1, index2){
        let temp = this.data[index1];
        this.data[index1] = this.data[index2];
        this.data[index2] = temp;
    }

    parentIndex(index){
        return Math.floor((index - 1) / 2);
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

    peek(){
        return this.data[0];
    }

    size(){
        return this.data.length;
    }

    print(){
        // 0 : 2^0 - 1 ~ 2^1 - 2
        // 1 2 : 2^1 - 1 ~ 2^2 - 2
        // 3 4 5 6 : 2^2 - 1 ~ 2^3 - 2
        // ...
        let printVal;
        let curVal;
        let exponent = 0;
        
        while(2 ** exponent - 2 < this.size()){
            printVal = "";
            for(let idx = 2 ** exponent - 1; idx < 2 ** (exponent + 1) - 1; idx++){
                
                if(this.data[idx] != undefined){
                    curVal = this.data[idx];
                } else {
                    curVal = "' '";
                }
                
                if(idx == 2 ** exponent - 1){
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

    poll(){
        let item = this.data[0];
        this.data[0] = this.data[this.data.length - 1];
        this.data.pop();
        this.bubbleDown();

        return item;
    }
}

class MaxHeap {
}

class Queue {

}

// ES5

main();