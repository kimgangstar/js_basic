// query .js
// tag : header , nav , ul , li , a
// class : gnb , lnb

// 변수 태그 5개 클래스 2개
const header = document.querySelector('header');
const nav = document.querySelector('nav');
const ul = document.querySelectorAll('ul');
const li = document.querySelectorAll('.gnb > li');
const li2 = document.querySelectorAll('.gnb > li li');
const a = document.querySelectorAll('a');
const gnbA = document.querySelectorAll('.gnb > li > a');
const lnbA = document.querySelectorAll('.lnb > li > a');
const gnb = document.querySelector('nav .gnb')
const lnb = document.querySelector('li:first-child .lnb')
const lnbCls = document.querySelector('.lnb')
const gnbCls = document.querySelector('.gnb')

// 콘솔 오류 조기확인
console.log(lnbA,gnbA,header,nav,ul[0],ul[1],li[1],li2[1],a[0],gnb,lnb,lnbCls,gnbCls);

//--------------------------------함수 기초 활용
// function 함수명(매개변수){반복실행명령어} 함수호출();
// 1. 할인율 계산기
// (100 - 할인율) / 100
// (100-5) / 100 = 0.95
// 판매가 * 0.95

//변수
let disCount = '';


//disCiuntfunc(24990);
//disCiuntfunc(85100);
console.log(disCountfunc(24900));
alert(disCountfunc(85100));


function disCountfunc(price){
    disCount = ` 5% 할인 = ${price * 0.95}원`;
    disCount += `\n 10% 할인 = ${price * 0.9}원`;
    disCount += `\n 20% 할인 = ${price * 0.8}원`;
    disCount += `\n 30% 할인 = ${price * 0.7}원`;
    // console.log(disCount);
    return disCount; // 함수 밖으로 disCount 값만 내보낸다 . (함수를 호출할때)
    // 함수의 결과값을 다양한 함수로 실행할 수 있어야 하기 때문에 함수 내부에서 실행함수를 정하는 것이 아닌
    // 리턴으로 값만 내보내고 함수 밖에서 실행함수를 정한다. 
}

