///<reference types='cypress'/>

const cred = require('../../fixtures/cred.json')
describe('Profile Module Test Cases',()=>{

it('As a patient the user should able to see his profile details by clicking on profile icon',()=>{
    cy.patientlogin(cred.pemail,cred.ppassword)
    cy.url().should('contain','/home')
    cy.get('.justify-end > .flex').should('be.visible').click()
    cy.url().should('contain','/profile')

})
it('At profile page each label and field should have proper label and validations',()=>{
    cy.get('.justify-start > img').should('be.visible')
    cy.get('.justify-start > .m-auto').should('be.visible').should('have.text','LX MEDICAL')
    cy.get('[href="/appointments"]').should('be.visible').should('have.text','Appointments')
    cy.get('.justify-start > .hidden > :nth-child(3)').should('be.visible').should('have.text','Charts')
    cy.get('.justify-start > .hidden > :nth-child(4)').should('be.visible').should('have.text','Chat')
    cy.get('.justify-end > .text-primary').should('be.visible')
    cy.get('#root>div>div>div>div.flex>div:nth-child(3)>svg:nth-child(2)').should('be.visible')
    cy.get('.h-7').should('be.visible')
    cy.get('.justify-end > .flex > .m-auto').should('be.visible')
    cy.get('.px-4 > :nth-child(1) > img').should('be.visible')
    cy.get('.px-4 > .font-bold').should('be.visible')
    cy.get('.shadow-corner').should('be.visible').should('contain','Personal Information')
    cy.get('.space-y-8 > :nth-child(2)').should('be.visible').should('contain','Manage Membership Plan')
    cy.get('.space-y-8 > :nth-child(3)').should('be.visible').should('contain','Account Settings')
    cy.get('.space-y-8 > :nth-child(4)').should('be.visible').should('contain','About')
    cy.get('.space-y-4 > :nth-child(1)').should('be.visible').should('have.text','Personal Information')
    cy.get('.space-y-4 > :nth-child(2) > .text-gray-400').should('be.visible').should('have.text','Full Name')
    cy.get(':nth-child(3) > .text-gray-400').should('be.visible').should('have.text','Email Address')
    cy.get(':nth-child(4) > .text-gray-400').should('be.visible').should('have.text','Phone Number')
    cy.get(':nth-child(5) > .text-gray-400').should('be.visible').should('have.text','Date of Birth')
    cy.get(':nth-child(6) > .text-gray-400').should('be.visible').should('have.text','Gender')
    cy.get('.space-y-2 > .font-bold').should('be.visible').should('have.text','Address')
    cy.get(':nth-child(8) > .flex').should('be.visible').should('contain','Edit Details')
    cy.patientlogout()


})

})