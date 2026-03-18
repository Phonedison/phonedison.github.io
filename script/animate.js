const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      const el = entry.target;

      //se for uma animação normal
      if (el.classList.contains("animate")) {
        if (entry.isIntersecting) {
          el.classList.add("enter");
          el.classList.remove("exit");
        } else {
          el.classList.remove("enter");
          el.classList.add("exit");
        }
      }
      //se for uma animação cascata
      if (el.classList.contains("software-skill")) {
        const items = el.querySelectorAll(".software-skill__item");

        items.forEach((item, index) => {
          item.style.transitionDelay = `${index * 0.1}s`;

          if (entry.isIntersecting) {
            item.classList.add("enter");
            item.classList.remove("exit");
          } else {
            item.classList.remove("enter");
            item.classList.add("exit");
          }
        });
      }
    });
  },
  {
    threshold: 0.2,
  },
);

//observa os elementos
document.querySelectorAll(".animate").forEach((el) => {
  observer.observe(el);
});

document.querySelectorAll(".software-skill").forEach((el) => {
  observer.observe(el);
});
