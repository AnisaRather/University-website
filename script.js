// Making mobile navigation work
const btnNavEl = document.querySelector(".btn-mobile-nav");
const navigationEl = document.querySelector(".navigation");
btnNavEl.addEventListener("click", function () {
  navigationEl.classList.toggle("nav-open");
});
