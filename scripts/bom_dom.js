function calc(num2){
    let num1 = 2;
    let total = num1 + num2;
    console.log(`total = ${total}`);
}
calc(5);
calc(7);
calc('1');

// 1400px 4 - 20px
// 1024px 3 - 20px
// 420px 2 - 20px

function calc2(num2,num3){
    let num1 = 20;
    let total = (num2 - num1) / num3;
    console.log(`width = ${total.toFixed(1)} px`); // toFixed(소수점 수) 소수점을 ()수만큼만 나오게 명령하는 함수 (문자열로 처리)
}
calc2(1400,4);
calc2(1024,3);
calc2(420,2);

// BOM 내장함수 종류
// window.함수(); // window는 최상위 객체라 생략 가능하다.
// let bom1 = alert('경고 메세지'); // 경고메세지 출력 내장함수
/* 
document.write('메세지1');
document.write('메세지<br>2'); */
/* document.write('<h1>메세지3<h1>'); */

//DOM(document object model)
// 변수생성 -> 변수 활용 연산자 또는 함수 진행
// DOM 변수생성 -> 나머지 순서 동일
const h1Tag = document.getElementsByTagName('h1');

console.log(h1Tag);
// js에 의해 동적으로 변경되는 결과에 따라 스타일변동을 위해 자바스크립트 안에서도 css를 작성할 수 있다.
//DOM객체.style.속성 = '값';
//DOM객체.style = '속성:값';
h1Tag[0].style.backgroundColor = '#ff0';
h1Tag[0].style.border = '1px solid #000';   

// class DOM 선택
const titleCls = document.getElementsByClassName('title');
console.log(titleCls);

titleCls[1].style.borderBottom = '3px solid #000';
titleCls[0].style.color = 'red';
titleCls[0].style.backgroundColor = '#333';
titleCls[0].style.padding = '20px';


// ID DOM 선택

const txtId = document.getElementById('txt');
console.log(txtId);

txtId.style.backgroundColor = '#477cdc';
txtId.style.color = '#fff';
txtId.style.fontSize = '1.5rem';
txtId.style.fontWeight = '600';
txtId.style.textAlign = 'center';
txtId.style.borderRadius = '50px';
txtId.style.width = '250px';
txtId.style.padding = '20px 10px';

// ES6 ver. DOM
// title 클래스 잡기

const titleClsQ = document.querySelector('.title');
console.log(titleClsQ);

// h1 tag 잡기

const h1TagQ = document.querySelector('.box h2');
console.log(h1TagQ);

// id 잡기
const idQ = document.querySelector('#txt');
console.log(idQ); //null , undifiend 시 오류
idQ.style.color = '#ffffff';

// All 키워드 활용 클래스 여러개 잡기
const titleAll = document.querySelectorAll('.box .title');
console.log(titleAll);
titleAll[0].style.backgroundColor = 'red';


// 스타벅스 카테고리 / 테마 메뉴 js 만들기
// 특정 목표 달성을 위한 절차적 순서 흐름 계획
//초기 모습 -> 사용자의 동적 움직임에 따라 변화되는 모습
// HTML , CSS 준비된걸 기준으로 작성
//1. 테마 내용 숨기기 
//2. 테마 제목 클릭 
//3. 카테고리 내용 숨기고 , 테마 내용 보이기 
//4. 카테고리 제목 클릭 
//5. 카테고리 내용 보이기 , 테마 내용 숨기기 

//1. 테마 내용 숨기기
// 숨기기 (동작) 실행하려면 테마내용(요소) 필요
// 변수
const theme = document.querySelector('.theme');
const themeTitle = document.querySelector('.tab_title a:nth-child(2)');
const category = document.querySelector('.category')
const categoryTitle = document.querySelector('.tab_title a:nth-child(1)');
// 변수 테스트 (에러 조기 확인)
console.log(theme,themeTitle,categoryTitle,category);

// 실행
theme.style.display = 'none';

//2. 테마 제목 클릭 
themeTitle.addEventListener('click',themeShow);
//3. 카테고리 내용 숨기고 , 테마 내용 보이기
function themeShow(){
    category.style.display = 'none';
    theme.style.display = 'block';
    themeTitle.style.backgroundColor = '#006633';
    themeTitle.style.color = '#fff';
    categoryTitle.style.backgroundColor = '#f5f5f5';
    categoryTitle.style.color = '#000';
}
//4. 카테고리 제목 클릭 
categoryTitle.addEventListener('click',categoryShow);
//5. 카테고리 내용 보이기 , 테마 내용 숨기기 
function categoryShow(){
    category.style.display = 'block';
    theme.style.display = 'none';
    themeTitle.style.backgroundColor = '#f5f5f5';
    themeTitle.style.color = '#000';
    categoryTitle.style.backgroundColor = '#006633';
    categoryTitle.style.color = '#fff';
}

