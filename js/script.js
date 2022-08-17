const hamburger  = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      closeElem = document.querySelector('.menu__close'),
      links = document.querySelectorAll('.menu__link');


hamburger.addEventListener('click', () => {
    menu.classList.add('active')
} );      
closeElem.addEventListener('click', () => {
    menu.classList.remove('active')
} );
// links.forEach((item)=>{
//  item.addEventListener('click', () => {
//     menu.classList.remove('active')
// } )
// } );

const counters = document.querySelectorAll('.percentages__ratings-counter'),
      lines = document.querySelectorAll('.percentages__ratings-oLine');

      counters.forEach((item,i)=>{
        lines[i].style.width = item.innerHTML;
      });


      