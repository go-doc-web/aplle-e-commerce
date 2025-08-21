/* Slideshow */

import image1 from "../assets/slideshow/section-1-bg-1.jpg";
import image2 from "../assets/slideshow/section-1-bg-2.jpg";
import image3 from "../assets/slideshow/section-1-bg-3.jpg";
import image4 from "../assets/slideshow/section-1-bg-4.jpg";
import image5 from "../assets/slideshow/section-1-bg-5.jpg";

const images = [image1, image2, image3, image4, image5];
const slideShowDivs = (): void => {
  const slideShow: HTMLElement | null = document.querySelector(".slideshow");
  if (!slideShow) {
    console.error("Element with class 'slideshow' not found");
    return;
  }
  // for (let i: number = 1; i <= 5; i += 1) {
  //   const div: HTMLDivElement = document.createElement("div");
  //   div.style.backgroundImage = `url(${images[i - 1]})`;
  //   div.style.opacity = i === 1 ? "1" : "0";
  //   div.classList.add("slide");
  //   slideShow.appendChild(div);
  // }
  images.forEach((image, index) => {
    const div: HTMLDivElement = document.createElement("div");
    div.style.backgroundImage = `url(${image})`;
    div.style.opacity = index === 0 ? "1" : "0";
    div.classList.add("slide");
    slideShow.appendChild(div);
  });

  let currentSlide = 0;
  const slides: NodeListOf<HTMLDivElement> =
    slideShow.querySelectorAll(".slide");

  setInterval(() => {
    if (slides.length === 0) {
      console.error("Slides don't find");
      return;
    }
    slides[currentSlide].style.opacity = "0";

    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].style.opacity = "1";
  }, 3000);
};

/* End of Slideshow */

export default {
  slideShowDivs,
};
