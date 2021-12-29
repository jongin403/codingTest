# 프로그래머스
# 코딩테스트 연습 > 스택/큐 > 주식가격
# 사용 알고리즘 : 
# 시간 복잡도 : 

def main():
    answer = []
    
    # 입력
    answer.append(solution([1, 2, 3, 2, 3])) # [4, 3, 1, 1, 0]
    
    # 출력
    #for i in answer:
        #print(solution(i))
    

# stack 에 넣고 
def solution(prices):
    plen = len(prices)
    resultList = [] 
    idx = 0
   
    for idx in range(0, plen):
        #print("idx:",idx)
        isAppended = False
        for jdx in range(idx, plen):
            if prices[idx] > prices[jdx]:
                isAppended = True
                resultList.append(jdx - idx)
                break
            
        if isAppended == False:
            resultList.append(plen - 1 - idx)

        #print("현재 resultList:", resultList)

    answer = resultList
    return answer

main()