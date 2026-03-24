const ssfHero = document.querySelector('.ssf_hero');
const nikeSlide = document.querySelector('.brand_slide');
console.log(ssfHero,nikeSlide);

const heroSwiper = new Swiper(ssfHero,{
    slidesPerView:3, //한번에 보이는 슬라이드 개수
    /*spaceBetween:10, 슬라이드 사이 여백*/
    navigation:{
        prevEl:'.ssf_hero .prev',
        nextEl:'.ssf_hero .next',
    },
    loop:true,
    
});

const nikeSwiper = new Swiper(nikeSlide,{
    slidesPerView:3,
    spaceBetween:10,
    navigation:{
        prevEl:'.brand_slide ~ .prev',
        nextEl:'.brand_slide ~ .next',
    },
})

