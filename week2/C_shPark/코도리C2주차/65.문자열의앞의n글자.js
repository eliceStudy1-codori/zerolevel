/*문제 설명
문자열 my_string과 정수 n이 매개변수로 주어질 때, my_string의 앞의 n글자로 이루어진 문자열을 return 하는 solution 함수를 작성해 주세요.

제한사항
my_string은 숫자와 알파벳으로 이루어져 있습니다.
1 ≤ my_string의 길이 ≤ 1,000
1 ≤ n ≤ my_string의 길이
입출력 예
my_string	n	result
"ProgrammerS123"	11	"ProgrammerS"
"He110W0r1d"	5	"He110"*/
function solution(my_string, n) {
    return my_string.slice(0, n);//slice()함수로 [0]번째부터 [n-1]번째까지 표현합니다.
}