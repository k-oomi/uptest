
const navSlide = () => {
    const body = document.body;
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    const blackBg = document.getElementById('js-black-bg');

    burger.addEventListener('click', () => {
        //body
        body.classList.toggle('nav-open');
        //Toggle Nav
        nav.classList.toggle('nav-active');
        //Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {

                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.25}s`;
            }
        });
        //Burger Animation
        burger.classList.toggle('toggle');
    });
    blackBg.addEventListener('click', function() {
        body.classList.remove('nav-open');
        nav.classList.toggle('nav-active');
          //Animate Links
          navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {

                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.25}s`;
            }
        });
        burger.classList.toggle('toggle');
      });



}

navSlide();