# 프로그래머스
# 코딩테스트 연습 > 힙(Heap) > 더 맵게
# 사용 알고리즘 : 
# 시간 복잡도 : 

import math

def main():
    answer = []
    
    # 입력
    #answer.append(solution([1, 2, 3, 9, 10, 12], 7)) # 2
    answer.append(solution([1, 2, 3, 9, 10, 12, 21, 32, 23, 21, 33, 17, 26, 37], 7000))
    
    # 출력
    for i in answer:
        print(i)


def solution(scoville, K):
    answer = 0
    sortedScoville = sorted(scoville)

    # K 보다 더 큰수가 있을 경우 필터링 한다.
    isFilter = K <= sortedScoville[len(sortedScoville)-1]
    if isFilter:
        sortedScoville = list(filter(lambda x: x < K, scoville))
    
    while(True):
        if K <= sortedScoville[0]:
            break
        if len(sortedScoville) < 2:
            if isFilter:
                answer += 1
            else :
                answer = -1
            break        

        # 음식 섞기
        #print("binaryInsert:", sortedScoville)
        firstFood = sortedScoville.pop(0) # O(1)
        secondFood = sortedScoville.pop(0)
        newFood = firstFood + secondFood * 2

        # 적절하게 insert 하기
        #print("newFood:", newFood)
        sortedScoville = binaryInsert(sortedScoville, newFood) # O(logN)
        
        # 반복
        answer += 1

    return answer

def binaryInsert(sortedScoville, newFood):
    startIdx = 0
    endIdx = len(sortedScoville) - 1
    
    #print("startIdx:", startIdx, "endIdx:", endIdx, "curIdx:", curIdx, "newFood:", newFood)
    
    
    if len(sortedScoville) < 1:
        # sortedScoville 이 비어있을 경우
        sortedScoville.insert(0, newFood)
    
    else:
        while(True):
            curIdx = math.floor((startIdx + endIdx) / 2)
            #print("startIdx:", startIdx, "endIdx:", endIdx, "curIdx:", curIdx, "newFood:", newFood)
            
            if newFood < sortedScoville[startIdx]:
                # sortedScoville 보다 작은 엘리먼트를 넣을 경우
                sortedScoville.insert(startIdx, newFood)
                break
            elif sortedScoville[endIdx] < newFood:
                # sortedScoville 보다 큰 엘리먼트를 넣을 경우        
                sortedScoville.insert(endIdx + 1, newFood)
                break
            elif newFood < sortedScoville[curIdx]:
                startIdx += 1
                endIdx = curIdx            
            elif sortedScoville[curIdx] < newFood:
                startIdx = curIdx
                endIdx -= 1
            elif sortedScoville[curIdx] == newFood:
                sortedScoville.insert(curIdx, newFood)
                break
            elif startIdx >= endIdx:
                sortedScoville.insert(prevIdx, newFood)
                break

            prevIdx = curIdx
       
    #print("binaryInsert:", sortedScoville)
    return sortedScoville

# 시간초과
def failedSolution(scoville, K):
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