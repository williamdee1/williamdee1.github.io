const dotsContainer = document.querySelector('.slider-dots');
const dots = [...document.querySelectorAll('.slider-dot')];
const sliderContainer = document.querySelector('.slider-container');

dotsContainer.addEventListener('click', e => {
  if (!e.target.classList.contains('slider-dot')) return;

  dots.forEach(dot => dot.classList.remove('active'));
  e.target.classList.add('active');

  const index = dots.indexOf(e.target);
  sliderContainer.style.transform = `translateX(-${index * 50}%)`;
});

// Automatic Slider
let slideIndex = 0;
const automaticSlide = () => {
  dots.forEach(dot => dot.classList.remove('active'));
  slideIndex++;
  if (slideIndex > 2) {
    slideIndex = 0;
  }
  dots[slideIndex].classList.add('active');
  sliderContainer.style.transform = `translateX(-${slideIndex * 50}%)`;
};

let slideTimer = setInterval(automaticSlide, 5000);

sliderContainer.addEventListener('mouseover', () => {
  clearInterval(slideTimer);
});

sliderContainer.addEventListener('mouseout', () => {
  slideTimer = setInterval(automaticSlide, 5000);
});
