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

gsap.registerPlugin(ScrollTrigger);

gsap.from(".hero-title", {
  duration: 1,
  y: 50,
  opacity: 0,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".hero",
    start: "top 80%",
  },
});

gsap.from(".hero-descr", {
  duration: 1,
  y: 50,
  opacity: 0,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".hero",
    start: "top 80%",
  },
});

gsap.from(".hero-btn", {
  duration: 1,
  y: 50,
  opacity: 0,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".hero",
    start: "top 80%",
  },
});

gsap.from(".hero-list-img", {
  duration: 1,
  x: -100,
  opacity: 0,
  ease: "power3.out",
  stagger: 0.2,
  scrollTrigger: {
    trigger: ".hero",
    start: "top 80%",
  },
});

gsap.from(".benefits-title", {
  duration: 1,
  y: 50,
  opacity: 0,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".benefits",
    start: "top 80%",
  },
});

gsap.from(".benefits-list-icon", {
  duration: 1,
  x: -100,
  opacity: 0,
  ease: "power3.out",
  stagger: 0.2,
  scrollTrigger: {
    trigger: ".benefits",
    start: "top 80%",
  },
});

gsap.from(".benefits-list-descr", {
  duration: 1,
  x: 100,
  opacity: 0,
  ease: "power3.out",
  stagger: 0.2,
  scrollTrigger: {
    trigger: ".benefits",
    start: "top 80%",
  },
});

gsap.from(".benefits-img", {
  duration: 1,
  x: 100,
  opacity: 0,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".benefits",
    start: "top 80%",
  },
});

gsap.from(".fresh-title", {
  duration: 1,
  y: 50,
  opacity: 0,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".fresh",
    start: "top 80%",
  },
});

gsap.from(".fresh-descr", {
  duration: 1,
  y: 50,
  opacity: 0,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".fresh",
    start: "top 80%",
  },
});

gsap.from(".fresh-list-icon", {
  duration: 1,
  x: -100,
  opacity: 0,
  ease: "power3.out",
  stagger: 0.2,
  scrollTrigger: {
    trigger: ".fresh",
    start: "top 80%",
  },
});

gsap.from(".fresh-list-descr", {
  duration: 1,
  x: 100,
  opacity: 0,
  ease: "power3.out",
  stagger: 0.2,
  scrollTrigger: {
    trigger: ".fresh",
    start: "top 80%",
  },
});

gsap.from(".eat-title", {
  duration: 1,
  y: 50,
  opacity: 0,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".eat",
    start: "top 80%",
  },
});

gsap.from(".eat-list-icon", {
  duration: 1,
  x: -100,
  opacity: 0,
  ease: "power3.out",
  stagger: 0.2,
  scrollTrigger: {
    trigger: ".eat",
    start: "top 80%",
  },
});

gsap.from(".eat-list-descr", {
  duration: 1,
  x: 100,
  opacity: 0,
  ease: "power3.out",
  stagger: 0.2,
  scrollTrigger: {
    trigger: ".eat",
    start: "top 80%",
  },
});

// Join section animation
const joinIcon = document.querySelector(".join-icon");
const joinTitle = document.querySelector(".join-title");
const joinDescr = document.querySelector(".join-descr");
const joinBtn = document.querySelector(".join-btn");

gsap.from(joinIcon, {
  duration: 1,
  opacity: 0,
  scale: 0.5,
  ease: "power3.out",
  scrollTrigger: {
    trigger: joinIcon,
    start: "top bottom",
  },
});

gsap.from(joinTitle, {
  duration: 1,
  opacity: 0,
  y: 50,
  ease: "power3.out",
  scrollTrigger: {
    trigger: joinTitle,
    start: "top bottom",
  },
});

gsap.from(joinDescr, {
  duration: 1,
  opacity: 0,
  y: 50,
  ease: "power3.out",
  scrollTrigger: {
    trigger: joinDescr,
    start: "top bottom",
  },
});

gsap.from(joinBtn, {
  duration: 1,
  opacity: 0,
  y: 50,
  ease: "power3.out",
  scrollTrigger: {
    trigger: joinBtn,
    start: "top bottom",
  },
});

gsap.from(".footer-logo", {
  duration: 1,
  y: 50,
  opacity: 0,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".footer",
    start: "top 80%",
  },
});

gsap.from(".footer-social-icon", {
  duration: 1,
  y: 50,
  opacity: 0,
  ease: "power3.out",
  stagger: 0.2,
  scrollTrigger: {
    trigger: ".footer",
    start: "top 80%",
  },
});

// Header animation
const header = document.querySelector(".header");
const headerLogo = document.querySelector(".header-logo");
const headerNav = document.querySelector(".header-nav");
const headerNavItems = document.querySelectorAll(".header-nav-item");

gsap.set(headerNavItems, { opacity: 0, y: -50 });

gsap.from(headerLogo, {
  duration: 1,
  y: -50,
  opacity: 0,
  ease: "power3.out",
});

gsap.from(headerNav, {
  duration: 1,
  y: -50,
  opacity: 0,
  ease: "power3.out",
  onComplete: () => {
    headerNavItems.forEach((item, index) => {
      gsap.to(item, {
        duration: 0.5,
        opacity: 1,
        y: 0,
        ease: "power3.out",
        delay: index * 0.1,
      });
    });
  },
});

// Footer animation
const footerListItems = document.querySelectorAll(".footer-list-item");

gsap.set(footerListItems, { opacity: 0, y: 50 });

gsap.to(footerListItems, {
  duration: 0.5,
  opacity: 1,
  y: 0,
  ease: "power3.out",
  stagger: 0.1,
  scrollTrigger: {
    trigger: ".footer",
    start: "top bottom",
  },
});

// Fresh section animation
const freshImg = document.querySelector(".fresh-img");

gsap.from(freshImg, {
  duration: 1,
  opacity: 0,
  scale: 0.8,
  ease: "power3.out",
  scrollTrigger: {
    trigger: freshImg,
    start: "top bottom",
  },
});
