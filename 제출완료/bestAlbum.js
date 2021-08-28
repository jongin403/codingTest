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

    
    // 노래 배열 만들기
    const songs = getSongs(genres, plays);
    
    // 장르별 총 합을 표시
    const genreSum = getGenreSum(songs);

    // 장르별 순서로 정렬
    const sortedGenre = sortGenreSum(genreSum);

    sortedGenre.forEach(function(item, index, array){
        answer.push(item.index1);
        if(-1 < item.index2){
            answer.push(item.index2);
        }
    });
    
    return answer;
}

function getSongs(genres, plays){
    let songs = [];
    let song;
    for(let idx = 0; idx < genres.length; idx++){
        song = {
            idx       : idx
          , genreName : genres[idx]
          , play      : plays[idx]
        }

        songs.push(song);
        //console.log(`idx:`,song.idx,`  genreName:`,song.genreName,`  play:`,song.play)
    }

    return songs
}

function getGenreSum(songs){
    let genreSum = [];
    let song;
    let genre;
    for(let idx = 0; idx < songs.length; idx++){
        song = songs[idx];
        genre = {
            genreName : song.genreName
          , play      : song.play
          , index1    : -1
          , index2    : -1
        }

        let genreIdx = genreSum.findIndex(item => item.genreName == song.genreName);

        if(genreIdx > -1){
            // 해당 장르의 index1, index2 의 play 
            let index1 = genreSum[genreIdx].index1;
            let index2 = genreSum[genreIdx].index2;

            if(songs[index1].play < song.play){
                // 신규 1등 / 1등 -> 2등
                genreSum[genreIdx].index2 = index1;
                genreSum[genreIdx].index1 = idx;
            } else if(-1 < index2) {
                // 2등이 있는 경우
                if(songs[index2].play < song.play){
                    // 신규 2등
                    genreSum[genreIdx].index2 = idx;
                }
            } else {
                // 신규 2등
                genreSum[genreIdx].index2 = idx;
            }

            // 총합 더해주기
            genreSum[genreIdx].play += song.play;
        } else {
            // 신규 1등
            genre.index1 = idx;
            genreSum.push(genre);            
        }
    }

    genreSum.forEach(function(item, index, array){
        //console.log(`index:${index} item:${item.genreName} / ${item.play}`);
    });

    return genreSum
}

function sortGenreSum(genreSum){
    genreSum.sort((a, b) => b.play - a.play);
    
    genreSum.forEach(function(item, index, array){
        //console.log(`index:${index}`);
        //console.log(`item:${item.genreName} / ${item.play} / ${item.index1} / ${item.index2}`);
    });
    
    return genreSum;
}

main();