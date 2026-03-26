const best = document.querySelector('.best_swiper');
const season = document.querySelectorAll('.season_wrap .swiper');
const season_title = document.querySelectorAll('.season_wrap .tab_title a');
console.log(best,season,season_title);

const bestSwiper = new Swiper(best,{
    //반응형 스와이퍼 제작 시 모바일부터 계산하면서 시작
    slidesPerView:2, // mobile
    spaceBetween:20,
    // 반응형 옵션 breakpoints (사용자의 디바이스 너비 기준)
    // 반응형 너비 640 / 768 / 1024 (디자인에 따라 수정,추가 가능)
    breakpoints:{
        640:{}, //640이상일때
        768:{
            slidesPerView:3,
        }, //768이상일때
        1024:{
            slidesPerView:4,
            spaceBetween:30,
        }, //1024이상일때
    },
    navigation:{
        prevEl:'.best_wrap .contents .prev',
        nextEl:'.best_wrap .contents .next',
    },
    loop:true,
});

const nikeSwiper = new Swiper(season[0],{
    slidesPerView:4,
    spaceBetween:20,
});
const converseSwiper = new Swiper(season[1],{
    slidesPerView:4,
    spaceBetween:20,
});

//Tap 클릭 시 관련 내용 나오는 JS   
// 1. 컨버스 숨기기
season[1].style.display = 'none';
// 2. 컨버스 클릭 시 컨버스 보이고 나이키 숨기기 (active 활성화 변경)
season_title[1].addEventListener('click',function(e){
    e.preventDefault();
    season_title[1].classList.add('active');
    season_title[0].classList.remove('active');
    season[1].style.display = 'block';
    season[0].style.display = 'none';
})
// 3. 나이키 클릭 시 컨버스 숨기고 나이키 보이기 (activ 활성화 변경) html a href="javascript:void(0)" 쓰면 창 새로 안바뀜.
season_title[0].addEventListener('click',function(e){
    e.preventDefault();
    season_title[0].classList.add('active');
    season_title[1].classList.remove('active');
    season[1].style.display = 'none';
    season[0].style.display = 'block';
})

// a 변수를 클릭이벤트함수로 사용 시 a 의 다른 페이지 이동속성 (href ) 때문에 스크롤이 위로 올라가는 문제 해결법
// 1. html 해결법 : html a 주소에 a href="javascript:void(0)" 넣기
// js 해결법 : a태그.addEventLisner('클릭',function(){}); 명령기준
    // 1. 위 명령 function(매개변수) 입력
    // 2. 매개변수.preventDefault(); //a의 기본기능을 막는 역할
