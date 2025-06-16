/* Auth Slider */

const slides = document.querySelectorAll(".form-slide");
const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");
const submitBtn = document.querySelector(".submit-btn");

let currentSlide = 0;

nextBtn.addEventListener("click", () => {
    currentSlide++;
    if (currentSlide > slides.length - 1) {
        currentSlide = 0;
    }
    slides.forEach((slide, index) => {
        if (index === currentSlide) {
            slide.classList.add("active");
        } else {
            slide.classList.remove("active");
        }
    });

    if (currentSlide === slides.length - 1) {
        submitBtn.classList.add("active")
        nextBtn.style.display = "none";
        prevBtn.classList.add("active")
        nextBtn.attributes.disabled.value = "true";
    } else {
        submitBtn.classList.remove("active")
        nextBtn.style.display = "block";
        prevBtn.classList.remove("active")
        nextBtn.attributes.disabled.value = "false";
    }
});

prevBtn.addEventListener("click", () => {
    currentSlide--;
    if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    }
    slides.forEach((slide, index) => {
        if (index === currentSlide) {
            slide.classList.add("active");
        } else {
            slide.classList.remove("active");
        }
    });
    if (currentSlide === 0) {
        submitBtn.classList.remove("active");
        nextBtn.style.display = "block";
        prevBtn.classList.remove("active");
        submitBtn.attributes.disabled.value = "true";
        prevBtn.attributes.disabled.value = "true";

    } else {
        submitBtn.classList.add("active");
        nextBtn.style.display = "none";
        prevBtn.classList.add("active");
        submitBtn.attributes.disabled.value = "false";
        prevBtn.attributes.disabled.value = "false";
    }
});