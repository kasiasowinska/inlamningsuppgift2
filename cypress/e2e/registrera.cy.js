describe('Registrera en ny användare', () => {
  it('Registrera en ny användare', () => {
    cy.visit('login.html');

    cy.get('#username').type('kasia');
    cy.get('#password').type('test');

    cy.get('#registerButton').click();

    cy.get('#registrationMessage').should('be.visible').and('contain', 'Användare registrerad');
  });
});