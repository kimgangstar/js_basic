// 여러개의 값을 변수에 저장할 수 있는 배열
// 특정 동일 주제에 묶여있는 2개 이상의 값 배열로 묶음.

// 배열을 사용안 한 경우
const month = `월`;
const tue = `화`;
console.log(month,tue);

// 배열을 사용한 경우
const yoil = [`월`,`화`,`수`,`목`,`금`,`토`,`일`]; 
console.log(yoil);
console.log(yoil[1]); // 배열 값 중 원하는 인덱스 출력
console.log(yoil.length); // yoil 객체의 길이속성. 7 이 나옴.

// 배열 기초1.
// 원하는 색상을 자유롭게 6개 배열로 저장하고 
// 그 중 좋아하는 색상만 인덱스로 골라 콘솔로그로 출력하기

const color = [`흰색`,`갈색`,`카키색`,`회색`,`파란색`,`검정색`]
console.log(color);
console.log(`제가 좋아하는 색은 ${color[3]}입니다.`);
console.log(color.length);

// 배열 생성법 2. 
// new Array() 내장함수 선언법

let wh = new Array(2); // 숫자 2 대입 (x) , 빈 배열 위치 2자리 삽입 (o)
console.log(wh);
wh[0] = 100;
wh[1] = 200;
console.log(wh);

// --------신발 쇼핑몰 색상 / 사이즈 배열

let colorsize = new Array(2);
/* colorsize[0] = prompt('pink , black 중 하나를 선택하세요.');
colorsize[1] = prompt('240 , 250 중 한 사이즈를 선택하세요.'); */
colorsize[0] = `pink`;
colorsize[1] = 250;
let order = `주문옵션 : 색상 : ${colorsize[0]} , 사이즈 ${colorsize[1]}`
console.log(order);

// ----------의류 쇼핑몰 선택옵션 배열로 만들기
// 사이즈 : s , m , l
// 색상 : 화이트 , 블랙 , 그레이
// 추가상품 : 양말 , 손수건

let option = new Array(3);
/* option[0] = prompt('사이즈를 선택하세요. ( s , m , l )');
option[1] = prompt('색상을 선택하세요. ( 화이트 , 블랙 , 그레이 )');
option[2] = prompt('추가상품을 선택하세요. ( 양말 , 손수건 )'); */
option[0] = 's';
option[1] ='화이트';
option[2] = '양말';
order = `주문옵션 : 사이즈 : ${option[0] } , 색상 : ${option[1]} , 추가상품 : ${option[2]}`;
console.log(order);

//------------------------------------------배열과 사용자 정의함수
// 날씨 소식앱
// 출력예시 1) 오늘은 맑음, 내일은 비 소식이 있습니다.
// 출력예시 1) 오늘은 흐림, 내일은 눈 소식이 있습니다.
// 출력예시 1) 오늘은 눈, 내일은 맑음 소식이 있습니다.
// 날씨 상태를 저장한 배열 , 함수 실행 시 마다 다른 데이터를 전달하는 매개변수
const weather = ['맑음','흐림','눈','비'];
function weatherFunc(today,tomorrow){
    let msg = `오늘은 ${today} , 내일은 ${tomorrow} 소식이 있습니다.`;
    console.log(msg);
}
weatherFunc(weather[0],weather[2]);
weatherFunc(weather[1],weather[2]);
weatherFunc(weather[2],weather[0]);

//------------------------------ 영화 좌석 예매
//일반 2명 좌석 선택 기준
//일반 1명당 표 가격은 10,000원 => 2명 20,000원
const price = 10000; //빈 좌석 2개 준비
let cgvSeat = new Array(2); // 일반 1명 만원 준비
/* cgvSeat[0] = prompt('선택 좌석은?'); */
cgvSeat[0] = 'j5';
cgvSeat[1] = 'j6';
cgvSeat[2] = 'j7';
function cgvFunc(first,second,price){
    let movie = `일반 2명 예약한 좌석은 ${first} ,${second} 이고 `;
    movie += `결제 가격은 ${price.toLocaleString('ko-kr')}원입니다.`;
    console.log(movie);
}
cgvFunc(cgvSeat[0],cgvSeat[1],price*cgvSeat.length);

// -------------------------------------------- 구구단 함수

/* 
function dan99(number1=0,number2=0){
    let dan = '';
    dan = `${number1}x${number2}=${number1*number2}`;
    console.log(dan);
}
dan99(10,8);
 */
dan99(1); //()안에 생성된 매개변수 자리에 대입해야하는 값 입력 위치
dan99(2); //()안에 생성된 매개변수 자리에 대입해야하는 값 입력 위치
dan99(3); //()안에 생성된 매개변수 자리에 대입해야하는 값 입력 위치
dan99(4); //()안에 생성된 매개변수 자리에 대입해야하는 값 입력 위치
dan99(5); //()안에 생성된 매개변수 자리에 대입해야하는 값 입력 위치
dan99(6); //()안에 생성된 매개변수 자리에 대입해야하는 값 입력 위치
dan99(7); //()안에 생성된 매개변수 자리에 대입해야하는 값 입력 위치
dan99(8); //()안에 생성된 매개변수 자리에 대입해야하는 값 입력 위치
dan99(9); //()안에 생성된 매개변수 자리에 대입해야하는 값 입력 위치
function dan99(num){ // num 매개변수를 생성 (호출 시 대입받는 값을 받는 위치)
    let dan = '';
    dan += `${num}x1=${num*1} `; // num 호출 시 대입받은 값을 최종 전달받는 위치
    dan += `${num}x2=${num*2} `;
    dan += `${num}x3=${num*3} `;
    dan += `${num}x4=${num*4} `;
    dan += `${num}x5=${num*5} `;
    dan += `${num}x6=${num*6} `;
    dan += `${num}x7=${num*7} `;
    dan += `${num}x8=${num*8} `;
    dan += `${num}x9=${num*9} `;
    console.log(dan);
}

