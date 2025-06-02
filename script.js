const stickyTexts = document.querySelectorAll(".sticky-text, .sticky-text2");

window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    stickyTexts.forEach((el) => el.classList.add("hidden"));
  } else {
    stickyTexts.forEach((el) => el.classList.remove("hidden"));
  }
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      } else {
        entry.target.classList.remove("visible");
      }
    });
  },
  {threshold: 0.2}
);

// Observe features, title-feature, off-tr, and sc-title
document
  .querySelectorAll(".feature, .title-feature, .off-tr, .sc-title")
  .forEach((el) => {
    observer.observe(el);
  });
