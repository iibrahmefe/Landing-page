const faqItemElements=document.querySelectorAll('.faq-item');

const toggleActive=(element)=>{
    element.classList.toggle("active");
}
    

faqItemElements.forEach(faqItem=>{
    faqItem.addEventListener('click', ()=> toggleActive(faqItem));
})