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