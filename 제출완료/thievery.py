# 프로그래머스
# 코딩테스트 연습 > 동적계획법(Dynamic Programming) > 도둑질
# 사용 알고리즘 : 
# 시간 복잡도 : O(N)

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

"""
# top-down 방식으로 풀 경우 재귀 제한 (1,000) 초과 : 1,000,000
def solution(money):
    answer = 0
    memoization = {} # key : idx / value : dp[idx]
    
    # idx 번째 집까지 털었을 경우 최대 값
    # 1. idx 0 선택   : idx <= len(money) - 2
    # 2. idx 0 선택 X : idx <= len(money) - 1
    def dp(idx, selZero):
        
        # 종료 조건
        if idx == 1:
            if selZero:
                memoization[idx] = money[0]
            else :
                memoization[idx] = money[1]
        
        if idx == 2:
            if selZero :
                memoization[idx] = money[0] + money[2]
            else :
                memoization[idx] = max(money[1], money[2])
        
        if(idx not in memoization):
            newDp = max(dp(idx - 1, selZero), dp(idx - 2, selZero) + money[idx])
            memoization[idx] = newDp
            
        return memoization[idx]

    
    yesSelzero = dp(len(money) - 2, True)
    memoization = {}
    noSelzero = dp(len(money) - 1, False)
    answer = max(yesSelzero, noSelzero)

    return answer
"""
"""
# bottom-up
# 시간 초과
def solution(money):
    answer = 0
    memoization = {}
    
    def dp(idx, selZero):
        
        # 종료 조건
        if idx == 1:
            if selZero:
                memoization[idx] = money[0]
            else :
                memoization[idx] = money[1]
        
        if idx == 2:
            if selZero :
                memoization[idx] = money[0] + money[2]
            else :
                memoization[idx] = max(money[1], money[2])
        
        # 다음 dp 구하기
        if(idx not in memoization):
            newDp = max(dp(idx - 1, selZero), dp(idx - 2, selZero) + money[idx])
            memoization[idx] = newDp
            
        return memoization[idx]

    # bottom-up 방식으로 0 번째 집 선택하는 경우 구하기
    for idx in range(1, len(money) - 1):
        dp(idx, True)
    
    yesSelzero = memoization[len(money) - 2]
    
    # bottom-up 방식으로 0 번째 집 선택하지 않는 경우 구하기
    memoization = {}
    for idx in range(1, len(money)):
        dp(idx, False)
    
    noSelzero = memoization[len(money) - 1]
    
    # 둘 중 큰 수 구하기
    answer = max(yesSelzero, noSelzero)
    return answer
"""

# bottom-up & 불필요 함수 제거
# 위의 방법에서 반복문을 사용할 경우 불필요하게 dp 함수를 호출하여 시간초과가 된다.
# dp 호출시 max 부분에서 dp 를 2번 더 호출 하기 때문으로 보인다.
# 여기서도 반복문을 한번 더 사용할 경우 O(2N) -> O(3N) 일부 케이스에서 시간 초과가 된다.
def solution(money):
    answer = 0
    memoization1 = {}
    memoization2 = {}
    
    # bottom-up 방식으로 0 번째 집 선택하는 경우 구하기
    for idx in range(1, len(money) - 1):
        if idx == 1:
            memoization1[idx] = money[0]
        elif idx == 2:
            memoization1[idx] = money[0] + money[2]
        else :
            # 다음 dp 구하기
            newDp = max(memoization1[idx - 1], memoization1[idx - 2] + money[idx])
            memoization1[idx] = newDp
    
    yesSelzero = memoization1[len(money) - 2]
    
    # bottom-up 방식으로 0 번째 집 선택하지 않는 경우 구하기
    for idx in range(1, len(money)):
        if idx == 1:
            memoization2[idx] = money[1]
        elif idx == 2:
            memoization2[idx] = max(money[1], money[2])
        else :
            # 다음 dp 구하기
            newDp = max(memoization2[idx - 1], memoization2[idx - 2] + money[idx])
            memoization2[idx] = newDp
    
    noSelzero = memoization2[len(money) - 1]
    
    # 둘 중 큰 수 구하기
    answer = max(yesSelzero, noSelzero)
    return answer

main()