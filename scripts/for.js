// 반복문 for
// for (초기변수생성(i , j ,k ,m ,n )과초기값대입;조건식; 증감식){반복실행문}


// 자바스크립트 10번 반복 출력 (반복문 이용)
// DOM 요소 (li[index]) 20개라면 1~20 기준으로 생각해서 숫자데이터로 생각해야함.
for (let i=0; i<10 ;i++){
    console.log('자바스크립트');
}

// CSS 글자를 5번 반복
for(let k=0; k<5; k++){
    console.log('css');
}

for(let j=0; j<20; j++){
    console.log(`html${j+1}`);
}

//구구단 2단 반복 출력 "2x1=2"
function dan2(){
    let num = 2;
    let result = '';
    result += `${num}x1=${num*1}`;
    return result;
}

// 구구단 2단 1로 시작한 예시
const danResult = document.querySelectorAll('.dan .result');
console.log(danResult);
for(let i=1; i<10; i++){
    // dan2Result.textContent += result;
    let result =`2x${i}=${i*2}<br>`;
    danResult[0].innerHTML += result;
    result =`3x${i}=${i*3}<br>`;
    danResult[1].innerHTML += result;
    result =`4x${i}=${i*4}<br>`;
    danResult[2].innerHTML += result;
}


// 구구단 2단 0으로 시작한 예시
for(let i=0; i<9; i++){
    let result =`2x${i+1}=${(i+1)*2}`;
    console.log(result);
}


//자바스크립트 10번 반복 출력 (반복문 없을때)
console.log('자바스크립트');
console.log('자바스크립트');
console.log('자바스크립트');
console.log('자바스크립트');
console.log('자바스크립트');
console.log('자바스크립트');
console.log('자바스크립트');
console.log('자바스크립트');
console.log('자바스크립트');
console.log('자바스크립트');


//자바스크립트를 이용한 태그 생성
const target = document.querySelector('.target');
// 태그 생성 목적의 변수 (저장소) 생성
const ul = document.createElement('ul');
console.log(target,ul);
ul.innerHTML = '<li>STORE</li>'
ul.innerHTML = '<li>MAGAZINE</li>'
ul.innerHTML = '<li>OFFLINE</li>'
ul.innerHTML = '<li>CONTACT</li>'
console.log(ul);
target.appendChild(ul); //createElement로 생성한 태그 삽입 방법

/* target.innerHTML = '<ul>'
target.innerHTML += '<li>STORE</li>'
target.innerHTML += '<li>MAGAZINE</li>'
target.innerHTML += '<li>OFFLINE</li>'
target.innerHTML += '<li>CONTACT</li>'
target.innerHTML += '</ul>' */