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
/* 버튼 클릭 시 숫자 증감 */
const minus = document.querySelector('.minus')
const plus = document.querySelector('.plus')
const room = document.querySelector('.room_num')
console.log(minus, plus, room)
var count=1;
        function increase(){
            count=count+1;
            room.innerHTML=count;
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