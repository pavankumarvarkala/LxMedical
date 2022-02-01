const cred = require('../fixtures/cred.json')
Cypress.Commands.add('login', () => {
  cy.visit(cred.qaUrl);
  cy.get('input[name=email]').type(cred.email)
  cy.get('input[name=password]').type(cred.password)
  cy.get('button[type=submit]').click()
  cy.get('.max-w-xs > img').should('be.visible');
})
Cypress.Commands.add('logout', () => {
  cy.get('#headlessui-menu-button-1').should('be.visible').click();
  cy.xpath("//div[@role='menu']//div[text()='Sign Out']").should('be.visible').click();
  cy.get('.mt-3 > .mt-2 > div').should('have.text', 'Are you sure, you want to sign out?').and('be.visible');
  cy.get('.border > div').should('be.visible');
  cy.xpath("//button//div[text()='Confirm']").should('be.visible').click();
  cy.xpath("//div[text()='Sign In']").should('be.visible');
})

