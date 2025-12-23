const heroData = {
  name: "Delzar Kafashi",
  role: "Fullstackutvecklare",
  intro:
    "Jag bygger moderna och enkla webbsidor med fokus på struktur, design och användarupplevelse.",
  cta1: { text: "Se projekt", href: "Projekt.html" },
  cta2: { text: "Kontakta mig", href: "Kontakt.html" },
};

const hero = document.querySelector("#homeHero");

if (hero) {
    hero.innerHTML = `
    <div class="hero">
        <img class="hero-img" src="jag och mat 2.png" alt="Bild på Loqman" />

        <h1>${heroData.name}</h1>
        <p class="hero-role">${heroData.role}</p>
        <p class="hero-intro">${heroData.intro}</p>

        <div class="hero-actions">
        <a class="btn" href="${heroData.cta1.href}">${heroData.cta1.text}</a>
        <a class="btn btn-outline" href="${heroData.cta2.href}">${heroData.cta2.text}</a>
        </div>
    </div>
    `;

}
