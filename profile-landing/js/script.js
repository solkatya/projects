document.addEventListener('DOMContentLoaded', function () {
    const mobileMenu = document.querySelector('.mobile-menu');
    const menu = document.querySelector('.menu');

    if (mobileMenu && menu) {
        mobileMenu.addEventListener('click', function () {
            this.classList.toggle('active');
            menu.classList.toggle('open');
        });
    } else {
        console.warn('Не найден элемент .mobile-menu или .menu');
    }
});




  
  


