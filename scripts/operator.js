// operator.js 
let greeting = '안녕'+'봄'; // 반복 데이터 변수
// let greeting : 변수 생성
// '안녕'+'봄' : 문자열 2개를 연결
// (=) : 우측의 값을 좌측 변수로 대입
console.log(greeting,' 잘 가'); // '잘 가'는 일회성 데이터
// console.log() : 객체.함수()
// console 출력되고 싶은 위치대상(객체)
// log 실행하고 싶은 함수 명령어
console.log(typeof(greeting)); // 변수의 데이터 타입은?
// greeting 변수의 데이터 타입을 typeof 함수로 확인하고
// console.log(); 로 출력한다.

let a = 1; // 숫자 가 대입 된 상태
let b = '1'; // 문자 가 대입 된 상태

// 프로그래밍을 깔끔하게 하기 위해서 
// 결과를 담는 변수
let total = a+b; // 1+'1' = 11
// 결과를 출력하는 함수
console.log(total);

let x ;
const y = '20';

console.log(x,y); // x는 값이 정의 안됨 . undifined = '20'
console.log(y+b); // 201
// y는 상수라 변경할 수 없다. 
x = '10'; // 정의 안됨 -> 문자 10 대입
console.log(x+y); // 1020
x= null; // x 변수의 값을 초기화한다. null == 0
console.log(x+y); // null20
console.log(x+a); // 1

console.log('-------------------------------------');

// .log(), .typeof()

// prompt() 질문 , 답변 창을 띄우는 함수 (prompt는 기본적으로 문자열로 인식을 함.)
// Number() : 괄호 안에 데이터를 숫자로 변환하는 함수
// 유치원생 대상 두 수를 더하는 문제 프로그램
const num1 = Number(prompt('첫번째 수를 입력하세요.'));
// const num1로 상수를 생성하고 
// prompt()로 질문하고 사용자에게 문자열 답변을 받고
// 그 답변을 Number() 문자열을 숫자로 변환하고
//  = 대입연산자로 num1에 대입
const num2 = Number(prompt('두번째 수를 입력하세요.'));
/* console.log(num1, typeof(num1)); */
//결과 담는 변수
/* const result = Number(num1) + Number(num2); */
const result = num1 + num2;
//결과 출력
console.log(result);
// 1+1의 정답은 2 입니다!
console.log(`${num1}+${num2}의 정답은 ${result} 입니다! `)
