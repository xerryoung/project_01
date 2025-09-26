// 페이지 스크롤
const wrap = document.getElementsByClassName('sec-wrap')[0];
const sec = document.getElementsByClassName('sec');
let page = 0;
const lastPage = sec.length -1;

window.addEventListener('wheel',(e)=>{
    // e.preventDefault();
    if(e.deltaY > 0) {page++;}
        else if(e.deltaY < 0) {page--;}
    if(page < 0) {page=0;}
        else if(page > lastPage) {page=lastPage;}
    console.log(e.deltaY);
    wrap.style.top = page * -100 + 'vh';
});


// 다운로드 버튼
// 버튼 아이디: downloadBtn
// document.getElementById("downloadBtn").addEventListener('click',() => {
//     const link = document.createElement("a");
//     link.href = "./resume.pdf";
//     link.download = "resume";     // 다운로드 시 동일 이름으로 저장
//     link.click();
// });


// sec4 프로젝트 모달창
const modal = document.querySelector('.modal');
const openBtn = document.querySelector('.open');
const closeBtn = document.querySelector('.close');

openBtn.addEventListener('click',()=>{
    modal.style.display = 'flex';
    modal.style.justifyContent = 'right';
});
closeBtn.addEventListener('click',()=>{
    modal.style.display = 'none';
});
window.addEventListener('click',(e)=>{
    if(e.target === modal)
    modal.style.display = 'none';
});