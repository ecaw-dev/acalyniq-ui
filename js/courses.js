const ratingRang = document.querySelector("#rating-range");
const currentRating = document.querySelector(".current-rating");

currentRating.textContent = ratingRang.value;

ratingRang.addEventListener("input", () => {
    currentRating.textContent = ratingRang.value;
})