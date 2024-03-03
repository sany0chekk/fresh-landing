const burger = document.querySelector(".header-burger"),
  burgerOpen = document.querySelector(".header-burger-open"),
  burgerClose = document.querySelector(".header-burger-close");

burgerOpen.addEventListener("click", () => {
  burger.classList.add("header-burger-active");
  document.body.style.overflow = "hidden";
});

burgerClose.addEventListener("click", () => {
  burger.classList.remove("header-burger-active");
  document.body.style.overflow = null;
});
