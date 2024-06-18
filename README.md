﻿# Inlamningsuppgift2


Detta projekt är en inlämningsuppgift i kursen Mjukvarutestning på Medieinstitutet. Projektet handlar om att skapa en enkel webbapplikation med inloggnings- och registreringsfunktioner, samt en sida för användare att byta lösenord på. För att säkerställa att funktionerna fungerar finns det enhetstester skriva med Jest, där database mockas med hjälp av Mock. Men även end-to-end tester med hjälp av Cypress.

Enhetstesterna hittas i filerna "userManager.test.js" samt "userDatabase.test.js". I "userManager.test.js" hittar man tester som testar inloggning med rätt användaruppgifter, inloggning med felaktiga uppgifter, registration av ny användare samt att man inte kan registrera en användare som redan finns. 

I "userDatabase.test.js" hittar man tester för att spara användare till databasen samt ladda ansvändare från databasen

Medan end-2-end testerna hittas under "cypress/e2e" där det finns tester som kontrollerar registrering av användare, att logga in som en användare samt ändring av lösenord för en inloggad användare.
