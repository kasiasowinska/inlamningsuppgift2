describe('Logga in som en användare', () => {
  it('Logga in som Kasia', () => {
    cy.visit('login.html');

    cy.get('#loginUsername').type('kasia');
    cy.get('#loginPassword').type('test');

    cy.get('#loginButton').click();

    cy.url().should('include', '/dashboard');
    cy.contains('Välkommen till sidan för inloggade användare').should('be.visible');
  });
});