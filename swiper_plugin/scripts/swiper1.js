const wrap = document.querySelector('#wrap');
const web = document.querySelector('.web');
const graphic = document.querySelector('.graphic');
console.log(wrap,web,graphic);
const wrapSwiper = new Swiper (wrap,{
    mousewheel:true,
    speed:600,
    loop:true,
    direction: 'vertical',
/*     autoplay:{
        delay:3000,
    } */
})
const webSwiper = new Swiper (web,{
    loop:true,
    speed:800,
    effect:'fade',
    autoplay:{
        delay:200000,
    },
    pagination:{
        // 페이지 대상 html 연결 , 모양 , 동적옵션
        el:'.web + .page', // 부모선택자 1~2개는 작성해서 구분해주기
        type:'fraction', //'bullets'(기본) 'fraction'(1/6)
        dynamicBullets:true, // type이 bullets 일때만 가능함. 역동적이게 만들어줌
    },
})
const graphicSlide = new Swiper (graphic,{
    loop:true,
    nested:true,
    pagination:{
        el:'.project2 .group .page',
        type:'bullets',
    },
})