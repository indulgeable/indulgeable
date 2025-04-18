// toTOP 버튼
const toTopEl = document.querySelector("#to-top");






//to-top button 클릭했을 때 스크롤이 0으로 이동
/*
    구글 검색 : scrollToPulgin cdn
    외부라이브러리 연결
    :html->head에 연결
 */

    toTopEl.addEventListener("click",function(){
        gsap.to(window,0.7,{
            scrollTo:0
        });
    });