# 프로그래머스
# 코딩테스트 연습 > 동적계획법(Dynamic Programming) > 등굣길
# 사용 알고리즘 : 
# 시간 복잡도 : 

def main():
    answer = []
    output = []
    
    # 입력
    answer.append(solution(4, 3, [[2, 2]]))
    output.append(4)
    answer.append(solution(3, 3, [[2, 3]]))
    output.append(3)
    answer.append(solution(3, 3, [[1, 3], [3, 1], [2, 3]]))
    output.append(2)
    answer.append(solution(7, 4, [[2, 1], [2, 2], [2, 3], [4, 2], [4, 3], [4, 4], [6, 2], [6, 3]]))
    output.append(0)
    answer.append(solution(100, 100, []))
    output.append(690285631)
    
    # 출력
    print('execution result')
    for iAnswer, iOutput in zip(answer, output):
        print('# answer:' + str(iAnswer) + ' / correct answer:' + str(iOutput))

# 웅덩이가 없는 경우 경로 수 : (m-1) * (n-1)
# 웅덩이 위치가 x, y 인 경우 웅덩이를 거치는 경로 수 : (x-1) * (y-1) * (m-x) * (n-y)
"""
def solution(m, n, puddles):
    answer = 0
    memoization = {} # (x, y) : 경로 수 key-value > dict 형 자료형
    
    # (0, 0) -> (x, y) 이동시 
    def dp(x, y):
        if((x, y) in memoization):
            return memoization[(x, y)]
        
        if(x == 1):
            memoization.update({(x, y) : 1})
        elif(y == 1):
            memoization.update({(x, y) : 1})
        else:
            
            newDp = dp(x - 1, y) + dp(x, y - 1)
            memoization.update({(x, y) : newDp})
            
        return memoization[(x, y)]
    
    totWay = dp(m, n)
    #print('totWay:' + str(totWay))
    
    for puddle in puddles:
        x1 = puddle[0]
        y1 = puddle[1]
        toPuddleWay = dp(x1, y1)
        toSchoolWay = dp(m - x1 + 1, n - y1 + 1)
        #print('toPuddleWay:' + str(toPuddleWay) + ' / toSchoolWay:' + str(toSchoolWay))
        
        curPuddleWay = toPuddleWay * toSchoolWay
        totWay -= curPuddleWay
    
    answer = totWay % 1000000007
    return answer
"""
# 1. 거쳐서 갈 수 있으면 중복되는 경로가 있을 수 있어서 puddles 각각 빼면 안됨
# 2. x == 1, y == 1 인 인경우 중간에 puddles 가 있다면 1 이 아니라 0 으로 계산해야함

def solution(m, n, puddles):
    answer = 0
    memoization = {} # (x, y) : 경로 수 key-value > dict 형 자료형
    
    # (0, 0) -> (x, y) 이동시 
    def dp(x, y):
        # 이미 저장된 값일 경우
        if((x, y) in memoization):
            return memoization[(x, y)]
        
        # 웅덩이일 경우
        for puddle in puddles:
            if(puddle[0] == x and puddle[1] == y):
                memoization.update({(x, y) : 0})
                return memoization[(x, y)]
            
        if(x == 1 and y == 1):
            memoization.update({(x, y) : 1})
        elif(x == 1):
            memoization.update({(x, y) : dp(x, y - 1)})
        elif(y == 1):
            memoization.update({(x, y) : dp(x - 1, y)})
        else:
            newDp = dp(x - 1, y) + dp(x, y - 1)
            memoization.update({(x, y) : newDp % 1000000007})
            
        return memoization[(x, y)]
    
    totWay = dp(m, n)
    #print('totWay:' + str(totWay))
    #print('memoization:' + str(memoization))
    
    answer = totWay % 1000000007
    return answer

main()