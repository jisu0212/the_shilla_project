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