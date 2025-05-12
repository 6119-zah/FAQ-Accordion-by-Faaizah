document.addEventListener('DOMContentLoaded', () => {
   const plusIcons = document.querySelectorAll('.plus-icon');
 
   plusIcons.forEach((icon) => {
     icon.addEventListener('click', () => {
       // Go up to .faq-accordion-content
       const faqContent = icon.closest('.faq-accordion-content');
       const answer = faqContent.querySelector('.faq-answers');
 
       if (answer.classList.contains('open')) {
         answer.classList.remove('open');
       } else {
         answer.classList.add('open');
       }
     });
   });
 });
  const button = document.querySelector('plus-icon')
 document.addEventListener('click', ()=>{
    
 })

//  let images = [
//   'image/icon-plus.svg','image/icon-minus.svg'
//  ];
//  let i=0;

//  for(i=0, images.length, i++){
    
//  }





