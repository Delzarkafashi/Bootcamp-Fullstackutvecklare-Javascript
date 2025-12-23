## Syfte

Vecka 4 handlar om att lära sig versionshantering med Git och hur man använder GitHub för att spara, följa och dela sitt arbete.

Fokus ligger på att förstå arbetsflödet:
- hur kod sparas i versioner
- hur ändringar dokumenteras
- hur man arbetar strukturerat i ett projekt  

Detta är ingen fördjupning i avancerade Git-funktioner.  
Detta är en grundläggande genomgång som ingår i kursen för att säkerställa att alla deltagare har samma basförståelse. Därför går vi igenom alla viktiga moment redan nu, så att dessa verktyg känns naturliga att använda i framtida projekt och inte behöver introduceras senare.

---

## Hur ska vi tänka denna vecka?
- Git används för att spara och följa förändringar i koden
- Commits ska göras ofta och innehålla tydliga meddelanden
- Små ändringar är bättre än stora
- Förstå vad varje commit innehåller
- Arbeta strukturerat så att projektet är lätt att samarbeta kring
- GitHub används som backup och samarbetsyta

---

## Vad gör vi under veckan?
- Introduktion till Git och versionshantering
- Installerar och konfigurerar Git
- Skapar lokalt Git-repository
- Lär oss grundläggande Git-kommandon
- Skapar och använder GitHub-repository
- Kopplar CV-projektet till GitHub
- Arbetar strukturerat med commits under veckan

---

## Pseudokod – hur arbetet med Git är uppbyggt

PROJEKT (CV-sidan)
  repo = lokalt projekt + GitHub-repo

START
  git init (om inte redan gjort)
  git remote add origin <repo-url>
  git branch -M main

ARBETSCYKEL (varje gång du jobbar)
  1) git pull
     - hämta senaste versionen från GitHub

  2) Gör ändringar i koden
     - t.ex. HTML/CSS/JS, struktur, text, bilder

  3) git status
     - se vad som har ändrats

  4) git add .
     - lägg till ändringar för commit

  5) git commit -m "tydligt meddelande"
     - spara en ny version lokalt

  6) git push
     - ladda upp versionen till GitHub

OM NÅGOT GÅR FEL
  - git log (se tidigare commits)
  - git restore <fil> (ångra ändringar i en fil)
  - git restore --staged <fil> (ta bort från staging)
