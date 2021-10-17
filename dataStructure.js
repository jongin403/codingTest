// 코딩 테스트용 자료구조 구현
/*
http://mauriciosantos.github.io/Buckets-JS/ 를 기반으로

주요 자료구조 및 메서드 위주로 구현
*/

function main(){
    const heap = new Heap();
    heap.print();
    
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
       this.push(elem);
    }

    // Removes all the elements from the stack.
    clear(){
        this.top = -1;
        this.data = [];
    }

    // Returns true if the stack contains the specified element.
    contains(elem, equalsFunction){
        // TO-DO
    }

    // Returns true if the stack is equal to another stack.
    equals(other, equalsFunction){
        return equalsFunction(this.data, other);
    }

    // Executes the provided function once per element present in the stack in LIFO order.
    forEach(callback){
        // TO-DO
    }

    // Checks if the stack is empty.
    isEmpty(){
        return this.data.length == 0;
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
            let popVal = this.data[this.top];
            this.data = this.data[0, --this.top];
            return popVal;
        }
    }

    // Pushes an element onto the top of the stack.
    push(elem){
        this.data[++this.top] = elem;
    }

    // Returns the number of elements in the stack.
    size(){
        // TO-DO
    }

    // Returns an array containing all the elements in the stack in LIFO order.
    toArray(){
        // TO-DO
    }

    // additional utilities

    // 스택에 있는 요소를 콘솔에 출력
    print(){
        let printElem = "";
        for(let idx = 0; idx < this.data.length; idx++){
            if(idx == 0){
                printElem += this.data[idx];
            } else {
                printElem += ", " + this.data[idx];
            }
        }
        console.log(`${printElem}`);
    }
}

class Heap {
    // Creates an empty binary heap.
    constructor(){
        //this.data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 0, 1];
        this.data = [];
    }

    // Adds the given element into the heap.
    add(element){
        // TO-DO
    }
    
    // Removes all the elements from the heap.
    clear(){
        // TO-DO
    }

    // Returns true if the heap contains the specified element.
    contains(element){
        // TO-DO
    }

    //

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