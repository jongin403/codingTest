// 프로그래머스
// 코딩테스트 연습 > 깊이/너비 우선 탐색(DFS/BFS) > 단어 변환
// 사용 알고리즘 : DFS
// 시간 복잡도 : 

// 다 방문했을 때
function main(){
    let answer = new Array();
    
    // 입력
    answer.push(solution("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"])); // 4
    answer.push(solution("hit", "cog", ["hot", "dot", "dog", "lot", "log"])); // 0
    answer.push(solution("hit", "aaa", ["hot", "dot", "aaa", "lot", "log"])); // 0 // 추가 케이스
    
    // 출력
    for(let i = 0; i < answer.length; i++){
        console.log(answer[i]);
    }
}

function solution(begin, target, words) {
    let answer = 0;
    

    // target 이 words 에 없는 경우
    if(!words.includes(target)){
        return answer;
    }

    // 방문여부 초기화
    const visited = new Array(words.length);
    visited.fill(false);
    
    /*
    let answers = []; // 정답 후보
    const dfs = function(begin, target, words, cnt){
        if(begin == target){
            answers.push(cnt);
            return;
        }

        for(let idx = 0; idx < words.length; idx++){
            if(visited[idx]){
                continue;
            }

            if(isChange(begin, words[idx])){
                visited[idx] = true;
                dfs(words[idx], target, words, cnt + 1);
                visited[idx] = false;
            }
        }
    };

    dfs(begin, target, words, 0);
    answer = Math.min(...answers);
    */

    const queue = [];
    let tempAnswer = 0;
    let nexts = []; // 더 깊은 단계의 노드 배열
    const bfs = function(begin, target, words){
        queue.push(begin);

        while(0 < queue.length){
            const word = queue.shift();
            
            if(words.includes(word)){
                visited[words.indexOf(word)] = true;
            }

            if(word === target){
                answer = tempAnswer;
                break;
            }

            for(let idx = 0; idx < words.length; idx++){
                if(isChange(word, words[idx]) && !visited[idx]){
                    nexts.push(words[idx]);
                }
            }

            if(queue.length < 1){
                //console.log(`nexts:${nexts}`);
                tempAnswer++;
                queue.push(...nexts);
                nexts = [];
            }
        }
    };

    bfs(begin, target, words);
    
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