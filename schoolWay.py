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
    
    # 출력
    print('execution result')
    for iAnswer, iOutput in zip(answer, output):
        print('# answer:' + str(iAnswer) + ' / correct answer:' + str(iOutput))

# 웅덩이가 없는 경우 경로 수 : (m-1) * (n-1)
# 웅덩이 위치가 x, y 인 경우 웅덩이를 거치는 경로 수 : (x-1) * (y-1) * (m-x) * (n-y)
def solution(m, n, puddles):
    answer = 0
    memoization = {} # (x, y) : 경로 수 key-value > dict 형 자료형
    
    # (0, 0) -> (x, y) 이동시 
    def dp(x, y):
        if((x, y) in memoization):
            return memoization[(x, y)]
        
        if(x == 0):
            memoization.update({(x, y) : 1})
        elif(y == 0):
            memoization.update({(x, y) : 1})
        else:
            newDp = dp(x - 1, y) + dp(x, y - 1)
            memoization.update({(x, y) : newDp})
            
        return memoization[(x, y)]
    
    totWay = dp(m - 1, n - 1)
    #print('totWay:' + str(totWay))
    
    for puddle in puddles:
        toPuddleWay = dp(puddle[0] - 1, puddle[1] - 1)
        toSchoolWay = dp(m - puddle[0], n - puddle[1])
        #print('toPuddleWay:' + str(toPuddleWay) + ' / toSchoolWay:' + str(toSchoolWay))
        
        curPuddleWay = toPuddleWay * toSchoolWay
        totWay -= curPuddleWay
    
    answer = totWay
    return answer

main()