# 프로그래머스
# 코딩테스트 연습 > 스택/큐 > 주식가격
# 사용 알고리즘 : 
# 시간 복잡도 : 

def main():
    answer = []
    output = []
    
    # 입력
    answer.append(solution([1, 2, 3, 2, 3]))
    output.append([4, 3, 1, 1, 0])
    
    # 출력
    print('execution result')
    for iAnswer, iOutput in zip(answer, output):
        print('# answer:' + str(iAnswer) + ' / correct answer:' + str(iOutput))

def solution(prices):
    answer = prices
    return answer

main()