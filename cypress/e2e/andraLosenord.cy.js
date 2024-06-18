describe('Ändra lösenord på en inloggad användare', () => {
    it('Ändra lösenord på en inloggad användare', () => {
      cy.visit("dashboard.html");
  
      cy.get('#changePasswordLink').click();
  
      cy.get('#currentPassword').type('test');
      cy.get('#newPassword').type('password');
  
      cy.get('#changePasswordButton').click();
  
      cy.log('Lösenordet har ändrats');
    });
  });