// 증감연산자 ++ , --
let x = 5; // x 변수 생성 -> 숫자 5를 x로 대입
/* let y = ++x; */ // y 변수 생성 -> 1 증가한 x를 대입
let y = x++; // y변수 생성 -> x를 대입하고 나중에 x 를 1 증가
console.log(x,y); // 

let a=1;
let b=2;
let c=3;
let d=4;
// 변수만 생성 값이 정의 안된 상태. (undifined)
console.log(`a=${a},b=${b},c=${c},d=${d}`); //a=1,b=5 템플릿 문자열
/* ++ , -- */
//-----------------------------증감연산자결과
let num1 = 10;
let num2 = 20;
let num3 = 30;
let num4 = 40;

num1++; //대입연산자가 없으면 증감연산자 앞뒤 의미없음.
num2--;
num3++;
num4--;
// 1.11 2.19 3.31 4.39
num1 = ++num2; // 전위 (앞에 증감 전위 뒤에 연산 후위
num2 = num1++; // 후위
// 1.21 2.20 3.31 4.39
num3 = num1+num2;
num4 = ++num3;
// 1.21 2.20 3.42 4.42
num1 = ++num3 + 10;
num2 = --num4 + 1;
// 1.53 2.42 3.43 4.41
console.log();

//---------------------------증감연산자 + 질문답변함수

// let num = Number(prompt('구입 수량을 입력하세요.'))
let num = Number('1');
let plus = ++num;
let result = `1+1 행사로 총 구입수량은 ${plus}개 입니다.`
console.log(result);

// ---------------------복합 대입 연산자 ----------------
// 증감연산자는 1 증감 처리 시 사용
// 복합대입연산자는 1 이상 큰 숫자를 - , * , / , % 등에 활용
// 복합대입연산자는 새로운값이 아닌 기존값을 활용해서 추가대입
// 키 140 -> 145
let height = 140;
// height = height + 5; 밑에 식과 뜻 동일
height += 5; // 기존 140에 +5를 더해서 대입

console.log(height);

// 빼기 복합
height = 10;
/* height = height - 5; */
height -= 5;
console.log(height);

// 곱하기 복합
height = 20;
/* height = height * 2; */
height *= 2;
console.log(height);

// 나누기 복합
height = 50;
height /= 10;
console.log(height);

// 나머지 복합
height = 10;
height %= 5;
console.log(height);

//------------------------복합대입연산자 예제
// 용돈 기입장 앱
// 기존에 지갑에 있는 돈 + 이번달에 받은 용돈 = 결과
let wallat = 10000;
/* let month = Number(prompt('이번달 용돈 얼마 받았나요?')); */
let month = Number(100000);
wallat += month;
let total = `받은 용돈을 더한 총 용돈은 ${wallat}원 입니다.`;
console.log(total);

// 지갑 10000 원 준비
// 편의점에서 물건을 구입할 때 지갑의 돈이 나가는 상황
// 삼각김밥 2000원 , 아이스크림 3000 , 과자 4000 , 남은 돈
let money = 10000;
let kimbab = 2000;
let ice = 3000;
let sneck = 4000;
total = kimbab+sneck+ice;
money -= total
result = `총 구입비는 ${total.toLocaleString('ko-kr')}원 , 남은 돈은 ${money.toLocaleString('ko-kr')}원`;
console.log(result);
