# 프로그래머스
# 코딩테스트 연습 > 동적계획법(Dynamic Programming) > 정수 삼각형
# 사용 알고리즘 : 
# 시간 복잡도 : 

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


def solution(triangle):
    answer = 0
    return answer

main()