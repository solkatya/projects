const header = document.querySelector('.header-botton');
const main = document.querySelector('.main');
const headerHeight = header.offsetHeight;
console.log(headerHeight)
const mainHeight = main.offsetHeight;
console.log(mainHeight)

window.addEventListener('scroll',() => {
    let scrollDistance = window.scrollY;
    console.log(scrollDistance);

    if(scrollDistance >= mainHeight + headerHeight){
        header.classList.add('header--fixed');
        main.style.marginTop = `${headerHeight}px`;
    }
    else{
        header.classList.remove('header--fixed');
        main.style.marginTop = null;
    }
})



  ///1
  const btnUp = {
    el: document.querySelector('.btn-up'),
    show (){
        this.el.classList.remove('btn-up_hide')
    },
    hide(){
        this.el.classList.add('btn-up_hide')
    },
    addEventListener(){
        window.addEventListener('scroll', () => {
            const scrollY = window.scrollY || document.documentElement.scrollTop
            scrollY > 400 ? this.show() : this.hide()
        })
        document.querySelector('.btn-up').onclick = () => {
            window.screenY({
                top: 0,
                left: 0,
                behavior: 'smooth'
            })
        }
    }
}
btnUp.addEventListener();
//2
window.onscroll = function () {
    const scrolled = window.pageYOffset || document.documentElement.scrollTop;
    if (scrolled > 400 ){
        document.getElementById('btn-up_hide').style.display = 'flex'
    } else {
        document.getElementById ('btn-up_hide').style.display = 'none'
    }
    document.querySelector('.btn-up').onclick = () => {
        window.screenY({
            top: 0,
            left: 0,
            behavior: 'smooth'
        })
    }
}

//3
/*document.addEventListener("DOMContentLoaded", function () {
    const backToTop = document.getElementById("back-to-top");
   
    // Показать/скрыть кнопку при прокрутке страницы
    window.addEventListener("scroll", function () {
      if (window.pageYOffset &gt 300) {
        backToTop.style.display = "block"
      } else {
        backToTop.style.display = "none"
      }
    });
   
    // Плавная прокрутка при клике на кнопку
    backToTop.addEventListener("click", function (event) {
      event.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" })
    })
  })*/