# 프로그래머스
# 코딩테스트 연습 > 힙(Heap) > 더 맵게
# 사용 알고리즘 : 힙큐(우선순위큐)
# 시간 복잡도 : 

import heapq

def main():
    answer = []
    
    # 입력
    answer.append(solution([1, 2, 3, 9, 10, 12], 7)) # 2
    
    # 출력
    for i in answer:
        print(i)


def solution(scoville, K):
    answer = 0
    idx = 0
    breakFlag = False

    heapq.heapify(scoville)
    #print(scoville)
    
    while scoville[0] < K:
        
        if 1 < len(scoville):
            smallest1 = heapq.heappop(scoville)
            smallest2 = heapq.heappop(scoville)

            newFood = smallest1 + smallest2 * 2

            heapq.heappush(scoville, newFood)
            idx += 1

            #print(smallest1, smallest2, newFood)
            #print(scoville)

        else:
            breakFlag = True
            answer = -1
            break

    if breakFlag == False:
        answer = idx
        
    return answer

main()