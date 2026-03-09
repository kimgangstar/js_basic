// var_let_const.js
// 객체(제어 목적 데이터) , 속성(객체 속성) , 메서드(객체 실행)
console.log(bowl); // 변수 정의되지 않음 undefined (error)
var bowl; // 빈 그릇 상태
console.log(bowl); // 변수 값 정의되지 않음 undefined
bowl = '밥'; // 한글이나 영어(문자) 대입 시 따옴표 필수 ('값') : 문자 데이터를 변수에 대입
console.log(bowl);
bowl = '콩'; // '밥' 기존 데이터 제거하고 '콩' 이라는 새로운 데이터 대입.
console.log(bowl); // console 객체의 메서드 log로 bowl 변수를 실행

console.log('-------------------------------------------------');

// 변수 a , b , c 대입 연습
/* 1. 변수 생성 */
var a;
var b;
var c;
console.log(a,b,c); // 값 정의 안됨 *3 undefinded
a = 1; //var 안 쓴 이유 > 위에서 이미 선언 하였으니까
console.log(a,b,c);
b = 2;
c = 3;
console.log(a,b,c); // 1 2 3
a = b; // b 변수 값을 a 변수에 대입한다. (a변수의 기존값 제거)
b = c; // c 변수 값을 b 변수에 대입한다. (b변수의 기존값 제거)
console.log(a,b,c); // 2 3 3

// let 과 var 의 차이점
// box1 , box2 
var box1; // 비어있음
let box2; // 비어있음 
console.log(box1,box2);
var box1 = 10; // 변수 중복 생성 시 에러 못 잡음.
console.log(box1);
// let box2 = 20; // 중복 선언 불가 (에러 발생)
box2 = 20; // 이미 생성 되었으므로 에러 발생 x 
console.log(box2);

// let , const 비교
// x , y

let x = -10; // 생성(let)과 대입(=)을 동시에 수행
const y = 5; // 상수 5를 생성 , 대입을 동시에 수행
console.log(x,y); 
x = 0; // x 좌표의 값 변경 (기존 값 제거)
// y = 7; // 상수를 변경하려고 하면 에러가 발생한다.

// 웹 사이트 가입 회원정보 변수
// 이름 , 나이 , 거주지 
let user_name = '김경민';
let user_age = '26';
let user_adress = '인천 부평구';
console.log(user_name+'은 '+user_age+'살이고 '+user_adress+'에 삽니다.'); // 변수에 담긴 데이터 사용 시 데이터 그대로 출력 x
console.log(`${user_name}은 ${user_age}살이고 ${user_adress}에 삽니다.`);
// + 는 연결 연산자 , 더하기 연산자 가능함. 숫자면 더하기 연산자 
console.log(user_name+'은 내년에 '+(user_age+1)+'살이 됩니다.');
user_age = 21; // 홍길동은 오늘 21살이 됐습니다.

console.log(user_name+'은 오늘 '+user_age+'살이 됐습니다.');
//쇼핑몰 상품 변수
// 상품명 : 후드 윈드브레이커
// 가격 : 53910
// 상품명 , 가격 , 수량 변수 생성

let item_name = '후드 윈드브레이커';
const item_price = 53910;
let item_quantity = 1;

// 후드 윈드브레이커 1개 가격은 53910원 입니다.
console.log(`${item_name} ${item_quantity}개 가격은 ${item_price}원 입니다.`); // console.log(`${객체}`);

// 주문수량 3개, 총 결제금액은 161730원 입니다.
item_quantity = 3;
console.log(`주문수량 ${item_quantity}개, 총 결제금액은 ${item_price * item_quantity}원 입니다.`);
// num 변수의 데이터 종류는 ?
console.log(`num변수의 데이터종류는 ${typeof(item_name)}`); // typeof 는 연산자가 무슨 타입인지 확인해주는 용도


