let isChecked = false;

document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('themeToggle');
    if (button) {
        button.addEventListener('click', () => {
            isChecked = !isChecked;
            handleChange(isChecked);
        });
    }
});

function handleChange(isChecked) {
    if (isChecked) {
        document.body.classList.add('dark');
    } else {
        document.body.classList.remove('dark');
    }
}


document.addEventListener("DOMContentLoaded", function() {
    let currentSlide = 0;
    const slides = document.querySelectorAll('.project-content');
    const totalSlides = slides.length;

    function moveSlide(step) {
      currentSlide += step;

      if (currentSlide < 0) {
        currentSlide = totalSlides - 1; 
      } else if (currentSlide >= totalSlides) {
        currentSlide = 0; 
      }

      document.querySelector('.project-content-wrapper').style.transform = `translateX(-${currentSlide * (slides[0].offsetWidth + 20)}px)`;
    }

    document.querySelector('.prev').addEventListener('click', () => moveSlide(-1));
    document.querySelector('.next').addEventListener('click', () => moveSlide(1));
  });