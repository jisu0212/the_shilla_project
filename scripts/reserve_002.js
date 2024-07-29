const rule = document.querySelector('.rule_title')
const infoR = document.querySelector('.rule_info')
const caution = document.querySelector('.caution_title')
const cautionR = document.querySelector('.caution_info')
console.log(rule, infoR)
rule.addEventListener('click',()=>{
    infoR.classList.toggle('onR');
})
caution.addEventListener('click',()=>{
    cautionR.classList.toggle('onC');
})
/* bed 버튼 toggle */
const bed_btn = document.querySelectorAll('.bed_size')
bed_btn[0].classList.add('onB');
bed_btn[0].addEventListener('click',()=>{
    bed_btn[0].classList.add('onB');
    bed_btn[1].classList.remove('onB');
})
bed_btn[1].addEventListener('click',()=>{
    bed_btn[1].classList.add('onB');
    bed_btn[0].classList.remove('onB');
})