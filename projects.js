const projects = [
  {
    title: "Profil / CV-sida",
    desc: "En enkel profilsida byggd med HTML och CSS.",
    tag: "webb",
    link: "Home.html",
  },
  {
    title: "Kontaktform",
    desc: "Form med validering och feedback i JavaScript.",
    tag: "skola",
    link: "Kontakt.html",
  },
  {
    title: "Mini-app",
    desc: "Ett litet hobbyprojekt för att testa DOM och events.",
    tag: "fritid",
    link: "#",
  },
];

const grid = document.querySelector("#projectsGrid");
const filterButtons = document.querySelectorAll(".filter-btn");

function renderProjects(list) {
  if (!grid) return;

  grid.innerHTML = "";

  list.forEach((p) => {
    const card = document.createElement("article");
    card.className = "project-card";

    card.innerHTML = `
      <h3>${p.title}</h3>
      <p>${p.desc}</p>
      <span class="tag">${p.tag}</span>
      <a class="project-link" href="${p.link}">Öppna</a>
    `;

    grid.appendChild(card);
  });
}

function applyFilter(tag) {
  if (tag === "all") {
    renderProjects(projects);
    return;
  }
  const filtered = projects.filter((p) => p.tag === tag);
  renderProjects(filtered);
}

renderProjects(projects);

filterButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    applyFilter(btn.dataset.filter);
  });
});
