///<reference types='cypress'/>
const cred = require('../../fixtures/cred.json')

describe('Sign Out Module Test Cases',()=>{

    it('As a Patient the user should able to log out by clicking on log out tab under account setting tab',()=>{
        cy.visit(cred.PatientUrl)
        cy.get('.bg-white > .mx-auto > .w-44').should('be.visible').click()
        cy.url().should('contain','/login')
        cy.get(':nth-child(1) > .mt-1 > .appearance-none').should('be.visible').clear().type(cred.pemail)
        cy.get(':nth-child(2) > .mt-1 > .appearance-none').should('be.visible').clear().type(cred.ppassword)
        cy.get('.border-2').should('be.visible').should('have.text','Sign In').click()
        cy.url().should('contain','/home')
        cy.get('.justify-end > .flex').should('be.visible').click()
        cy.url().should('contain','/profile')
        cy.get('.space-y-8 > :nth-child(3)').should('be.visible').should('have.text','Account Settings').click()
        cy.url().should('contain','/settings')

    })
    it('By clicking on log out the user should able  to get  log out confirmation pop up',()=>{
        cy.get('.flex-wrap > :nth-child(2)').should('be.visible').should('have.text','Logout').click()
        cy.get('.justify-between > .font-bold').should('be.visible').should('have.text','Confirmation')
        cy.get('.hidden > :nth-child(2) > .items-center.mt-6 > .flex').should('be.visible').should('contain','Are you sure')
        cy.get('.hidden > :nth-child(2) > .mb-3 > .flex').should('be.visible').should('have.text','Logout')
    })
    it('By clicking on cross symbol on the log out confirmation pop out should disappear',()=>{
        cy.get('.hidden > .justify-between > .w-6 > path').should('be.visible').click()
        cy.url().should('contain','/settings')

    })
    it('By clicking on logout button the user should be able to log out of the site',()=>{
        cy.get('.flex-wrap > :nth-child(2)').should('be.visible').should('have.text','Logout').click()
        cy.get('.justify-between > .font-bold').should('be.visible').should('have.text','Confirmation')
        cy.get('.hidden > :nth-child(2) > .mb-3 > .flex').should('be.visible').should('have.text','Logout').click()
        cy.url().should('contain','/login')

    })
  
})