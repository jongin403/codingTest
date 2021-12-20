# 프로그래머스
# 코딩테스트 연습 > 동적계획법(Dynamic Programming) > 도둑질
# 사용 알고리즘 : 
# 시간 복잡도 : 

def main():
    answer = []
    output = []
    
    # 입력
    answer.append(solution([1, 2, 3, 1]))
    output.append(4)
    
    # 출력
    print('execution result')
    for iAnswer, iOutput in zip(answer, output):
        print('# answer:' + str(iAnswer) + ' / correct answer:' + str(iOutput))

def solution(money):
    answer = 0
    memoization = [] # memoization[idx] = dp[idx]
    
    # idx 번째 집까지 털었을 경우 최대 값
    def dp(idx):
        # 종료 조건
        if len(money) <= idx:
            return
        
        if(not memoization[idx]):
            newDp = max(dp[idx - 1], dp[idx - 2] + money[idx])
            memoization[idx] = newDp
            
        return memoization[idx]

    answer = dp(len(money) - 1)        
    
    return answer

main()