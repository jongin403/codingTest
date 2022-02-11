// 프로그래머스
// 코딩테스트 연습 > Summer/Winter Coding(~2018) > 영어 끝말잇기

function main(){
    let answer = new Array();
    
    // 입력
    answer.push(solution(3, ["tank", "kick", "know", "wheel", "land", "dream", "mother", "robot", "tank"])); // [3,3]
    answer.push(solution(5, ["hello", "observe", "effect", "take", "either", "recognize", "encourage", "ensure", "establish", "hang", "gather", "refer", "reference", "estimate", "executive"])); // [0,0]
    answer.push(solution(2, ["hello", "one", "even", "never", "now", "world", "draw"])); // [1,3]
    
    // 출력
    for(let i = 0; i < answer.length; i++){
        console.log(answer[i]);
    }
}

function solution(n, words) {
    let answer = [];

    // 앞에서부터 앞에 나왔었던 단어인지 체크해서 같으면 index 반환 없으면 -1
    const dup = function(words){
        let result = -1;
        let curWords = [];

        for(let idx = 0; idx < words.length; idx++){
            if(-1 < curWords.indexOf(words[idx])){
                result = idx;
                break;
            }
            curWords.push(words[idx]);
        }
        return result
    }

    // 앞에서부터 앞의 단어의 마지막과 첫 글자가 같은지 체크해서 같으면 index 반환 없으면 -1
    const lastFirstDiff = function(words){
        let result = -1;
        
        for(let idx = 1; idx < words.length; idx++){
            let prevLastWord = words[idx - 1].charAt(words[idx - 1].length -1);
            let curFirstWord = words[idx].charAt(0);
            //console.log(`${words[idx - 1]} / ${prevLastWord} / ${words[idx]} / ${curFirstWord}`)
            
            if(prevLastWord !== curFirstWord){
                result = idx;
                break;
            }
        }
        return result
    }

    let dupIndex = dup(words);
    let lastFirstDiffIndex = lastFirstDiff(words);
    //console.log(`dupIndex:${dupIndex} / lastFirstDiffIndex:${lastFirstDiffIndex}`);
    
    let resultIndex;

    if(dupIndex == -1 && lastFirstDiffIndex == -1){
        return [0,0];
    } else if(dupIndex != -1 && lastFirstDiffIndex != -1){
        resultIndex = Math.min(dupIndex, lastFirstDiffIndex);
    } else if(dupIndex == -1) {
        resultIndex = lastFirstDiffIndex;
    } else if (lastFirstDiffIndex == -1){
        resultIndex = dupIndex;
    } else {
        //
    }
    //console.log(`resultIndex:${resultIndex}`);
    
    
    answer.push((resultIndex + 1) % n == 0 ? n : (resultIndex + 1) % n);
    answer.push(Math.ceil((resultIndex + 1) / n));

    return answer;
}

main();