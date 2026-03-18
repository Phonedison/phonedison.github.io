const listItems = document.querySelectorAll(".navbar__list-item");
const background = document.querySelector(".navbar__list-item-background");

function moveBackground(element) {
  if (!element) return;

  // Pegamos as dimensões da LI diretamente
  const { offsetLeft, offsetWidth, offsetHeight, offsetTop } = element;

  background.style.left = `${offsetLeft}px`;
  background.style.top = `${offsetTop}px`;
  background.style.width = `${offsetWidth}px`;
  background.style.height = `${offsetHeight}px`;
}

// Inicializa no primeiro item
moveBackground(listItems[0]);

listItems.forEach((item) => {
  item.addEventListener("click", () => {
    moveBackground(item);
  });
});

window.addEventListener("resize", () => {
  // Encontra qual item está "ativo" ou volta para o primeiro
  const activeItem =
    document.querySelector(".navbar__list-item:focus-within") || listItems[0];
  moveBackground(activeItem);
});

const navbar = document.querySelector(".navbar__container");
const sections = document.querySelectorAll("section");

const options = {
  root: null, // usa a viewport
  threshold: 0.3,
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const theme = entry.target.getAttribute("data-theme");

      // Remove temas anteriores e adiciona o novo
      navbar.classList.remove("theme-light", "theme-dark");
      navbar.classList.add(`theme-${theme}`);
    }
  });
}, options);

sections.forEach((section) => observer.observe(section));
