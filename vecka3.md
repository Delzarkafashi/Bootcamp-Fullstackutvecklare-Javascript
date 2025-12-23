## Syfte
Vecka 3 handlar om att börja använda JavaScript för att skapa enkel interaktivitet på webbplatsen.

Fokus ligger på grundläggande JavaScript-logik och hur JavaScript samverkar med HTML – inte på avancerad programmering eller komplex funktionalitet.

---

## Hur ska vi tänka denna vecka?
- JavaScript används för funktion, inte design
- Små tydliga funktioner istället för mycket kod
- En sak i taget – testa ofta
- Förstå vad koden gör, inte bara att den fungerar
- Koppla JavaScript till befintlig HTML-struktur

---

## Vad gör vi under veckan?
- Introduktion till JavaScript
- Kopplar JavaScript till HTML-filer
- Arbetar med variabler och enkla funktioner
- Lär oss hämta och ändra HTML-element (DOM)
- Skapar klickhändelser med JavaScript
- Lägger till enkel interaktivitet på webbplatsen

---

## Pseudokod – hur sidan är uppbyggd

JAVASCRIPT (script.js)
  DATA
    heroData (namn, roll, intro, två knappar)
    projects (lista med projekt: title, desc, tag, link)

HOME (index.html / Home.html)
  MAIN
    SECTION #homeHero (tom i HTML)

  NÄR SIDAN LADDAS
    hero = hämta #homeHero
    OM hero finns
      bygg HTML med heroData
      sätt hero.innerHTML = den byggda hero-layouten

PROJEKT (Projekt.html)
  MAIN
    DIV .filters
      knapp .filter-btn med data-filter="all"
      knapp .filter-btn med data-filter="webb"
      knapp .filter-btn med data-filter="skola"
      knapp .filter-btn med data-filter="fritid"
    SECTION #projectsGrid (tom i HTML)

  FUNKTION renderProjects(list)
    OM #projectsGrid inte finns → return
    töm grid (grid.innerHTML = "")
    FÖR VARJE projekt i list
      skapa element article.project-card
      fyll card med (title, desc, tag, länk)
      lägg till card i grid

  FUNKTION applyFilter(tag)
    OM tag är "all"
      renderProjects(alla projects)
    ANNARS
      filtered = projects där p.tag === tag
      renderProjects(filtered)

  NÄR SIDAN LADDAS
    renderProjects(projects)

  EVENTS
    FÖR VARJE knapp i .filter-btn
      vid klick
        läs btn.dataset.filter
        applyFilter(vald filter-tag)

---

## Vad ska vara klart efter vecka 2?
- Grundlayout med CSS Grid (header, main, footer)
- Header med Flex-meny + sticky-funktion
- Footer med 3 sektioner (plats, social, kontakt) + copyright längst ner
- Enhetligt färgtema och grundläggande typografi
- Samma header och footer på alla sidor
