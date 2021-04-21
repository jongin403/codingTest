// 프로그래머스
// 코딩테스트 연습 > 해시 > 베스트앨범
// 사용 알고리즘/자료구조 : 
// 시간 복잡도 : 

function main(){
    let answer = new Array();
    
    // 입력
    answer.push(solution(["classic", "pop", "classic", "classic", "pop"], [500, 600, 150, 800, 2500]));

    
    // 출력
    for(let i = 0; i < answer.length; i++){
        console.log(answer[i]);
    }
}

function solution(genres, plays) {
    let answer = [];

    let sumMap = new Map();
    
    // 장르별 배열
    let genresArray = {};


    for(let i = 0; i < genres.length; i++){
        // 장르 합
        if(sumMap.has(genres[i])){
            sumMap.set(genres[i], sumMap.get(genres[i]) + plays[i]);
        } else {
            sumMap.set(genres[i], plays[i]);
        }

        // 장르별 배열
        //genresArray[genres[i]].push(i);
        if(genresArray[genres[i]] === undefined){
            genresArray[genres[i]] = [];
        }
        genresArray[genres[i]].push(i);
        //console.log("장르명 : " + genres[i] + ", 인덱스 : " + genresArray[genres[i]]);
        
    }

    // Map 은 정렬이 되지 않아 순서대로 장르를 찾기 어렵다.
    // sumMap.sort();
    
    return answer;
}

main();