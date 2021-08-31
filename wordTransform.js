// 프로그래머스
// 코딩테스트 연습 > 깊이/너비 우선 탐색(DFS/BFS) > 단어 변환
// 사용 알고리즘 : 
// 시간 복잡도 : 

// 다 방문했을 때
function main(){
    let answer = new Array();
    
    // 입력
    answer.push(solution("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"]));
    answer.push(solution("hit", "cog", ["hot", "dot", "dog", "lot", "log"]));

    
    // 출력
    for(let i = 0; i < answer.length; i++){
        console.log(answer[i]);
    }
}

function solution(begin, target, words) {
    let answer = 0;
    let answers = []; // 정답 후보

    // 방문여부 초기화
    let visited = [];
    for(let idx = 0; idx < words.length; idx++){
        visited.push(false);
    }

    
    let curWord;

    function dfs(word, depth){
        
        for(let idx = 0; idx < words.length; idx++){
            curWord = words[idx];
            if(target === words[idx]){
                answer
                break;
            }
            if(isChange(curWord, words[idx]) && !visited[idx]){

            }
        }

        return depth;
    }

    for(let idx = 0; idx < words.length; idx++){
        if(isChange(start, words[idx])){
            answers.push(dfs(words[idx]), 1);
        }
    }

    // answers 중 최소값 찾기
    if(answers.length > 0){
        answer = Math.min(answers);
    }

    return answer;
}

// 한개의 알파벳만 차이나는지 여부
function isChange(word1, word2){
    let result = false;
    let diff = 0;

    for(let idx = 0; idx < word1.length; idx++){
        if(word1[idx] !== word2[idx]){
            diff++;
        }
    }
    if(diff === 1){
        result = true;
    }

    return result;
}

main();