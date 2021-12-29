# 프로그래머스
# 코딩테스트 연습 > 동적계획법(Dynamic Programming) > 정수 삼각형
# 사용 알고리즘 : X
# 시간 복잡도 : O(N^2)

def main():
    answer = []
    output = []
    
    # 입력
    answer.append(solution([[7], [3, 8], [8, 1, 0], [2, 7, 4, 4], [4, 5, 2, 6, 5]]))
    output.append(30)
    
    # 출력
    print('execution result')
    for iAnswer, iOutput in zip(answer, output):
        print('# answer:' + str(iAnswer) + ' / correct answer:' + str(iOutput))

"""
# 시간초과
def solution(triangle):
    answer = 0
    answerList = []
    
    def dp(depth, curSum, idx):
        curNum = triangle[depth - 1][idx]
        curSum += curNum
        
        #print('depth - 1:' + str(depth - 1) + ' / idx:' + str(idx) + ' / curSum:' + str(curSum))
        
        if(len(triangle) <= depth):
            answerList.append(curSum)    
            return
        
        dp(depth + 1, curSum, idx)
        dp(depth + 1, curSum, idx + 1)
        
    dp(1, 0, 0)
    
    answer = max(answerList)
       
    return answer
"""

def solution(triangle):
    answer = 0
    depth = 1 # triangle[depth]
    
    # 현재 depth 에 있는 숫자의 합을 이전 depth 에서 가져옴
    while depth < len(triangle):
        for idx in range(0, depth + 1):
            addNum = 0
            if(idx == 0):
                addNum = triangle[depth - 1][idx]
            elif(idx == depth):
                addNum = triangle[depth - 1][idx - 1]
            else:
                addNum = max(triangle[depth - 1][idx - 1], triangle[depth - 1][idx])
            
            # 다음 줄에 합산    
            #print('addNum:' + str(addNum) + ' / depth:' + str(depth) + ' / idx:' + str(idx))
            triangle[depth][idx] += addNum
        
        #for idx in range(0, depth + 1):
        #    print(str(triangle[idx]))
            
        depth += 1
    
    answer = max(triangle[len(triangle) - 1])
    return answer

main()