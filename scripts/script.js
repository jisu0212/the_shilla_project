/* header-background */
const head = document.querySelector('header')
window.addEventListener('scroll',function(){
    if(window.pageYOffset < 100){
        head.style.backgroundColor = 'rgba(0,0,0,0)'
        head.style.transition = 'background-color 0.3s'
    }
    if(window.pageYOffset >= 100){
        head.style.backgroundColor = 'rgba(0,0,0,0.7)'
        head.style.transition = 'background-color 0.3s'
    }
})
/* 버튼 클릭 시 숫자 증감(객실)) */
const minusR = document.querySelector('.minusR')
const plusR = document.querySelector('.plusR')
const room_num = document.querySelector('.room_num')
var countR=1;
function increaseR(){
    countR=countR+1;
    room_num.innerHTML=countR;
    if(countR>3){
        alert("한 번에 최대 3개의 객실 예약이 가능합니다.");
        counterR=3;
    }
    }
function decreaseR(){
    countR=countR-1;
    room_num.innerHTML=countR;
    if(countR<1){
        alert("최소 1개의 객실은 예약 하셔야합니다.");
        countR=1;
    }
    }
/* 버튼 클릭 시 숫자 증감(성인) */
const minusA = document.querySelector('.minusA')
const plusA = document.querySelector('.plusA')
const adult_num = document.querySelector('.adult_num')
var countA=1;
function increaseA(){
    countA=countA+1;
    adult_num.innerHTML=countA;
    if(countA>4){
        alert("한 객실 당 4명까지 이용 가능합니다.");
        counterA=4;
    }
    }
function decreaseA(){
    countA=countA-1;
    adult_num.innerHTML=countA;
    if(countA<1){
        alert("최소 1명은 예약하셔야 합니다.");
        countA=1;
    }
    }
/* 버튼 클릭 시 숫자 증감(어린이) */
const minusC = document.querySelector('.minusC')
const plusC = document.querySelector('.plusC')
const child_num = document.querySelector('.child_num')
var countC=0;
function increaseC(){
    countC=countC+1;
    child_num.innerHTML=countC;
    if(countC>4){
        alert("한 객실 당 4명까지 이용 가능합니다.");
        counterC=4;
    }
    }
function decreaseC(){
    countC=countC-1;
    child_num.innerHTML=countC;
    }
/* 버튼 클릭 시 숫자 증감(유아) */
const minusB = document.querySelector('.minusB')
const plusB = document.querySelector('.plusB')
const baby_num = document.querySelector('.baby_num')
var countB=0;
function increaseB(){
    countB=countB+1;
    baby_num.innerHTML=countB;
    if(countB>4){
        alert("한 객실 당 4명까지 이용 가능합니다.");
        counterB=4;
    }
    }
function decreaseB(){
    countB=countB-1;
    baby_num.innerHTML=countB;
    }
/* 호텔 선택 팝업 */
const pop = document.querySelector('.pop')
const hotel = document.querySelector('.hotel')
const ok = document.querySelector('.ok')
pop.style.display = 'none'
hotel.addEventListener('click',()=>{
    pop.style.display = 'block'
    document.body.style.overflow = 'hidden';
})
ok.addEventListener('click',()=>{
    pop.style.display = 'none'
    document.body.style.overflow = '';
})
/* 팝업 속 호텔 클릭 시 */
const ht_btn = document.querySelectorAll('.choice a')
for(let i=0; i<ht_btn.length; i++){
    ht_btn[i].addEventListener('click',()=>{

    })
}