const cred = require('../fixtures/cred.json')
Cypress.Commands.add('login', () => {
  cy.visit(cred.qaUrl);
  cy.xpath("//input[@name='email']").clear().type(cred.email);
  cy.xpath("//input[@name='password']").clear().type(cred.password);
  cy.xpath("//button[@textid='submit']").click();
  cy.get('.max-w-xs > img').should('be.visible');
})
Cypress.Commands.add('logout', () => {
  cy.get('#headlessui-menu-button-1').should('be.visible').click();
  cy.xpath("//div[@role='menu']//div[text()='Sign Out']").should('be.visible').click();
  cy.get('.mt-3 > .mt-2 > div').should('have.text', 'Are you sure, you want to sign out ?').and('be.visible');
  cy.get('.border > div').should('be.visible');
  cy.xpath("//button//div[text()='Confirm']").should('be.visible').click();
  cy.xpath("//div[text()='Sign In']").should('be.visible');
})

