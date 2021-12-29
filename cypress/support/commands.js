// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import 'cypress-file-upload';
Cypress.Commands.add('mailinator', (email,) => {

    cy.visit('https://www.mailinator.com/');
    cy.get('#addOverlay').type(email);
    cy.get('#go-to-public').click();
    cy.get('tr.ng-scope:nth-child(1)').click()
    cy.get('#html_msg_body').then(($iframe)=>{
        const doc=$iframe.contents().find('h1')
        cy.wrap(doc).invoke('val').then(val=>{
            cy.log(val)
            cy.writeFile('../../fixtures/profile.json', {
                otp:val,
            })
        })
        
    })
     
        })
      
Cypress.Commands.add('patientlogin', (email, password) => { 
    cy.visit('https://qa.rch.build-release.com')
    cy.get('#root > div:nth-child(2) > div > div:nth-child(1) > div > div>div:nth-child(2)').should('be.visible').should('have.text','Sign In / Sign Up').click()
    cy.url().should('contain','/login')
    cy.get(':nth-child(1) > .mt-1 > .appearance-none').type(email)
    cy.get(':nth-child(2) > .mt-1 > .appearance-none').type(password)
    cy.get('.border-2').click()  

 });

 Cypress.Commands.add('patientlogout', () => {
    cy.get('.p-1 > .h-7').click()
    cy.get('.space-y-8 > :nth-child(3)').should('be.visible').click()
    cy.url().should('contain','/settings')
    cy.get('.flex-wrap > :nth-child(2)').should('be.visible').click()
    cy.get('.hidden > :nth-child(2) > .mb-3 > .flex').should('be.visible').click()
  })