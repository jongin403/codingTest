// 코딩 테스트용 자료구조 구현

function main(){
    const stack = new Stack();
    
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
        
}

class Queue {

}

// ES5

main();