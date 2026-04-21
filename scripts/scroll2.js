// 위로 scripts
// 1. 초기 숨기기
// 2. 스크롤 특정 위치만큼 내리면 나타나기
// 3. 위로 클릭 시 위로 이동하기
// 4. 위로 이동하고 나면 다시 숨겨지기

const FixedTop = document.querySelector('#fixed_group .top');
const header = document.querySelector('header');

console.log(FixedTop,header, header.children[0] , header.children[1]);

FixedTop.style.display = 'none';

window.addEventListener('scroll',function(){     // ★ 스크롤 이벤트 할때 앞에 윈도우 써야함. 스크롤 이벤트는 하나의 스크롤 함수 안에서 여러가지 동작을 만들어야함.
    // 특정 위치만큼 내리면 '위로' 나타나기
    // scrollY 속성 : 얼만큼 스크롤을 움직이고 있는지 px 로 보여주는 속성
    console.log(window.scrollY);
    if(window.scrollY >= 200) FixedTop.style.display = 'block';
    else FixedTop.style.display = 'none'; // else 는 그 if 조건문의 반대
    
    //===============================header
    // 1. 특정 위치까지 스크롤을 내리면 header 고정시키고 디자인 변경하기
    // 2. 스크롤을 올리면 header 디자인 복구 , 고정 해제
    if(window.scrollY >= 200 ){
        console.log('200보다 큰 위치');
        // header.style.position = 'fixed'; body 기준이라 위치가 풀려버림.
        //header.style.position = 'sticky'; // 태그 구조상 부모 기준으로 고정
        //header.style.top = '0';
        header.classList.add('scroll');
    }
    else{
        //header.style.position = 'relative';
        header.classList.remove('scroll');
    }
});

// 위로 클릭 시 위로 이동하기
FixedTop.addEventListener('click',function(e){
    window.scrollTo(0,0);
    e.preventDefault();
});


