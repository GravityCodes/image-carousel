import "./style.css";

const imageCarouselImgs = document.querySelectorAll(".image-carousel-img");
const leftArrow = document.querySelector("#left-arrow");
const rightArrow = document.querySelector("#right-arrow");
const navDots = document.querySelectorAll(".dot");
let activeImg = 0;

function forwardSlide() {
  imageCarouselImgs[activeImg].classList.remove("active");
  navDots[activeImg].classList.remove("selected");
  if (activeImg == 3) {
    activeImg = 0;
    imageCarouselImgs[activeImg].classList.add("active");
    navDots[activeImg].classList.add("selected");
    return;
  }
  activeImg++;
  imageCarouselImgs[activeImg].classList.add("active");
  navDots[activeImg].classList.add("selected");
}

function previousSlide() {
  imageCarouselImgs[activeImg].classList.remove("active");
  navDots[activeImg].classList.remove("selected");
  if (activeImg == 0) {
    activeImg = 3;
    imageCarouselImgs[activeImg].classList.add("active");
    navDots[activeImg].classList.add("selected");
    return;
  }
  activeImg--;
  imageCarouselImgs[activeImg].classList.add("active");
  navDots[activeImg].classList.add("selected");
}

navDots.forEach((dot) =>
  dot.addEventListener("click", () => {
    imageCarouselImgs[activeImg].classList.remove("active");
    navDots[activeImg].classList.remove("selected");

    activeImg = Number(dot.dataset.num);

    imageCarouselImgs[activeImg].classList.add("active");
    navDots[activeImg].classList.add("selected");
  }),
);

leftArrow.addEventListener("click", () => previousSlide());
rightArrow.addEventListener("click", () => forwardSlide());

setInterval(forwardSlide, 5000);
