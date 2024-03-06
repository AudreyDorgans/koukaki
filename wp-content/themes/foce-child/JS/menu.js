const burger = document.querySelector('.main-navigation .burger');
const menuNavigation = document.querySelector('.menu-navigation');
const spanElements = document.querySelectorAll('.menu-navigation ul li span');

burger.addEventListener('click', () => {
  const isMenuActive = burger.classList.contains('active');

  burger.classList.toggle('active');
  menuNavigation.classList.toggle("inactif-menu", isMenuActive);
  menuNavigation.classList.toggle("actif-menu", !isMenuActive);

  spanElements.forEach(spanElement => {
    if (isMenuActive) {
 
        spanElement.classList.remove("anim-titre-menu-charge");
        spanElement.classList.add("anim-titre-menu-initial");

    } else {
      setTimeout(() => {
        spanElement.classList.remove("anim-titre-menu-initial");
        spanElement.classList.add("anim-titre-menu-charge");
      }, 2100); 
    
    }
  });
});


  





