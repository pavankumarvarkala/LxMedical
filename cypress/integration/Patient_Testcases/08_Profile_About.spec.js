///<reference types='cypress'/>
const cred=require('../../fixtures/cred.json')
 import faker from 'faker'

describe('About Module Test Cases',()=>{

 
    it('As a patient the user should be navigated to the about page by clicking on about tab',()=>{
        cy.patientlogin(cred.pemail,cred.ppassword)
        cy.url().should('contain','/home')
        cy.get('.justify-end > .flex').should('be.visible').click()
        cy.url().should('contain','/profile')
        cy.get('.space-y-8 > :nth-child(4)').should('be.visible').click()
        cy.url().should('contain','/about')
    })
    it('At About page each label and field should have proper label and validations',()=>{
        cy.get('.mb-7 > :nth-child(1)').should('be.visible').should('have.text','Privacy Policy')
        cy.get('.mb-7 > :nth-child(2)').should('be.visible').should('have.text','Terms & conditions')
        cy.get('.my-10 > :nth-child(2) > :nth-child(1)').should('be.visible').should('have.text','Disclosure of Out of Network')
        cy.get('.my-10 > :nth-child(2) > :nth-child(2)').should('be.visible').should('have.text','Patient Consent to Treatment')

    })
    it('By clicking on privacy tab the user should be able to get a pop up window of privacy tab where the content of privacy will be displayed',()=>{
        cy.get('.mb-7 > :nth-child(1)').should('be.visible').should('have.text','Privacy Policy').click()

    })

    it('At privacy policy pop up each label and field should have proper label and validations',()=>{
        cy.get('.hidden > .flex > .font-bold').should('be.visible').should('have.text','Privacy Policy')
        cy.get('.hidden > .mt-6 > iframe').should('be.visible')
        cy.get('.hidden > .flex > .w-6 > path').should('be.visible').click()

    })
    it('By clicking on terms&conditions tab the user should be able to get a pop up window where the content of terms&conditions will be displayed',()=>{
        cy.get('.mb-7 > :nth-child(2)').should('be.visible').should('have.text','Terms & conditions').click()

    })
    it('At Terms&conditions pop up each label and field should have proper label and validations',()=>{
        cy.get('.hidden > .flex > .font-bold').should('be.visible').should('have.text','Terms & conditions')
        cy.get('.hidden > .mt-6 > iframe').should('be.visible')
        cy.get('.hidden > .flex > .w-6 > path').should('be.visible').click()
    })
    it('By clicking on Disclosure of out of network tab the user should be able to get a pop up window where the content of disclosure of out of network will be displayed',()=>{
        cy.get('.my-10 > :nth-child(2) > :nth-child(1)').should('have.text','Disclosure of Out of Network').click()

    })
    it('At Disclosure of out of network pop up each label and field should have proper label and validations',()=>{
        cy.get('.hidden > .flex > .font-bold').should('be.visible').should('have.text','Disclosure of Out of Network')
        cy.get('.hidden > .mt-6 > iframe').should('be.visible')
        cy.get('.hidden > .flex > .w-6 > path').should('be.visible').click()
    })
    it('By clicking on patient consent to treatment tab the user should be able to get a pop up window where the content of patient consent to treatment will be displayed',()=>{
        cy.get('.my-10 > :nth-child(2) > :nth-child(2)').should('have.text','Patient Consent to Treatment').click()

    })
    it('At patient consent to treatment pop up each label and field should have proper label and validations',()=>{
        cy.get('.hidden > .flex > .font-bold').should('be.visible').should('have.text','Patient Consent to Treatment')
        cy.get('.hidden > .mt-6 > iframe').should('be.visible')
        cy.get('.hidden > .flex > .w-6 > path').should('be.visible').click()
        cy.plogout()
    })
})