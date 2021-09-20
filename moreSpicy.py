# 프로그래머스
# 코딩테스트 연습 > 힙(Heap) > 더 맵게
# 사용 알고리즘 : 
# 시간 복잡도 : 

def main():
    answer = []
    
    # 입력
    answer.append(solution([1, 2, 3, 9, 10, 12], 7)) # 2
    
    # 출력
    for i in answer:
        print(i)

# 시간초과
def solution(scoville, K):
    answer = 0
    sortedScoville = sorted(scoville)

    while(True):
        #print("sortedScoville:", sortedScoville)

        # 종료 조건
        # 조건을 만족해서 종료
        if K <= sortedScoville[0]:
            break
        # 조건을 만족하지 못하지만 더 이상 진행이 불가해서 종료
        if len(sortedScoville) < 2:
            answer = -1
            break        

        # 음식 섞기
        firstFood = sortedScoville.pop(0)
        secondFood = sortedScoville.pop(0)
        newFood = firstFood + secondFood * 2
        sortedScoville.insert(0, newFood)
        
        # 반복
        answer += 1
        sortedScoville.sort()

    return answer

main()