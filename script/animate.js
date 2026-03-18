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
      //se for uma animação para a classe software-skill
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

      //se for uma animação para a classe project-item
      if (el.classList.contains("animate-grid")) {
        const items = el.querySelectorAll(".project-item");

        items.forEach((item, index) => {
          const columns = 3;
          const row = Math.floor(index / columns);
          const col = index % columns;
          const delay = (row + col) * 120;

          item.style.transitionDelay = `${delay}ms`;

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

document.querySelectorAll(".animate-grid").forEach((el) => {
  observer.observe(el);
});
