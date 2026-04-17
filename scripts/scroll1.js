const topA = document.querySelector('.popup .top');
const cateTitle = document.querySelectorAll('.category_title a');
const cateContents =document.querySelectorAll('.category_contents section');

console.log(topA,cateTitle,cateContents);

topA.addEventListener('click',function(e){
    e.preventDefault();
    // 객체.함수();
    //window.scrollTo(x좌표,y좌표); 
    window.scrollTo(0,0);
})

// 반품 안내 클릭 시 이동
/* cateTitle[3].addEventListener('click',function(e){
    e.preventDefault();
    window.scrollTo(0,cateContents[3].offsetTop-100);
    activeFunc(cateTitle[3]); */
    /* console.log(cateContents[3].offsetTop); */
    // scrollTo y좌표 수치값은 최상단(0) 또는 header의 높이 위치 정도일 때 숫자로 작성한다. 그 이상 큰 값은 객체.속성을 활용해야한다.
    // offsetTop 은 그 위치의 상단으로 이동시켜주는 속성이다. -100을 쓴 이유는 그 위치로 이동하면 너무 붙어있기 때문에 좀 갭을 둔 것.
/* }) */
/* cateTitle[2].addEventListener('click',function(e){
    e.preventDefault();
    window.scrollTo(0,cateContents[2].offsetTop-100);
    activeFunc(cateTitle[2]);
}) */
/* cateTitle[1].addEventListener('click',function(e){
    e.preventDefault();
    window.scrollTo(0,cateContents[1].offsetTop-100);
    activeFunc(cateTitle[1]);
}) */
/* cateTitle[0].addEventListener('click',function(e){
    e.preventDefault();
    window.scrollTo(0,cateContents[0].offsetTop-100);
    activeFunc(cateTitle[0]);
}) */

//위 함수를 반복문으로 만들면?
for(let title of cateTitle){ // for 문을 사용하여 반복문을 만들면 cateTitle안에 노드들이 개별로 잡힘.
    title.addEventListener('click',function(e){
        e.preventDefault();
        activeFunc(title);
        //↓ 클릭한 제목에 관련한 내용으로 스크롤 이동하기
        //객체속성매개변수.currentTarget.dataset.데이터속성이름
        const i = e.currentTarget.dataset.index; // e는 a의 속성이다.
        window.scrollTo(0,cateContents[i].offsetTop-100);
    })
}



// active 적용/해제 함수
function activeFunc(target){ //매번 달라지는 매개변수 이름을 붙이고 target을 리턴으로 부른다.
    for(let i of cateTitle) i.classList.remove('active'); //모든 카테 타이틀을 i에 담아서 모든 active를 지우겠다.
    return target.classList.add('active'); // 매개변수에 액티브 클래스를 추가한다.
}
