// 프로그래머스
// 코딩테스트 연습 > 완전탐색 > 소수 찾기
// 사용 알고리즘 : 
// 시간 복잡도 : 

function main(){
    let answer = new Array();
    
    // 입력
    answer.push(solution("17")); // 3
    answer.push(solution("011")); // 2
    
    // 출력
    for(let i = 0; i < answer.length; i++){
        console.log(answer[i]);
    }
}

function solution(numbers) {
    let answer = 0;
    let numbersArr = numbers.split("");
    let stringNum = "";
    let resultNumber;
    let answerArr = [];
    
    let permutationArr = permutation(numbersArr, numbersArr.length);

    //console.log(`numbersArr:${numbersArr}`);
    //console.log(permutationArr);

    for(let idx = 0; idx < permutationArr.length; idx++){
        stringNum = "";
        for(let jdx = 0; jdx < permutationArr[idx].length; jdx++){
            //console.log(`${permutationArr[idx][jdx]}`);
            if(permutationArr[idx][jdx] === "1"){
                stringNum += numbersArr[jdx];
            } else {
                stringNum += "0";
            }
        }
        
        console.log(`stringNum:${stringNum}`);
        resultNumber = Number(stringNum);
        if(isPrime(resultNumber) && !answerArr.includes(resultNumber)){
            answerArr.push(resultNumber);
        }        
    }

    //console.log(`answerArr:${answerArr}`);
    answer = answerArr.length;

    return answer;
}

function permutation(arr, selectNumber){
    const results = [];
    if (selectNumber === 1){
        return arr.map((el) => [el]);
    }

    arr.forEach((fixed, index, origin) => {
        // index 에 해당하는 요소인 fixed 선택
        const rest = [...origin.slice(0, index), ...origin.slice(index+1)]
        const permutations = permutation(rest, selectNumber - 1);

        // 선택했던 fixed 뒤에 permutation 의 결과를 붙임
        const attached = permutations.map((el) => [fixed, ...el]);
        results.push(...attached);
    });

    return results;
}



function isPrime(number){
    let result = true;

    if(number < 2){
        return false;
    }

    for(let idx = 2; idx * idx <= number; idx++){
        if(number % idx == 0){
            result = false;
            break;
        }
    }

    return result;
}

main();