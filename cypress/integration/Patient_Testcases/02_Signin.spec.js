///<reference types='cypress'/>
const cred = require('../../fixtures/cred.json')


describe('signin module test cases' ,()=>{

    it('As a patient the user should be navigated to the sign in page after clicking signin/signup button on landing page',()=>{
        cy.visit(cred.PatientUrl)
        cy.url().should('eq',cred.PatientUrl)
        cy.get('#root > div:nth-child(2) > div > div:nth-child(1) > div > div>div:nth-child(2)').should('be.visible').should('have.text','Sign In / Sign Up').click()
        cy.url().should('contain','/login')
        cy.get('[alt=logo]').should('be.visible')

    })
    it('At Sign In page each label and field should have proper label and validations',()=>{
        cy.get('.p-10 > :nth-child(1) > img').should('be.visible')
        cy.get('.p-10 > :nth-child(1)').should('be.visible').should('have.text','LX Medical')
        cy.get('.text-2xl').should('be.visible').should('have.text','Sign In')
        cy.get('.grid > :nth-child(1) > .text-sm > div').should('be.visible').should('have.text','Email')
        cy.get(':nth-child(2) > .text-sm > div').should('be.visible').should('have.text','Password')
        cy.get('.ml-2 > div').should('be.visible').should('have.text','Remember me')
        cy.get(':nth-child(1) > .flex > .h-4').should('be.visible').should('not.be.checked')
        cy.get('.justify-between > a > .text-primary').should('be.visible').should('have.text','Forgot Password?')
        cy.get('[href="/signup"] > .flex').should('be.visible').should('contain','Create')

    })
    it('As a patient the user should unable to login with no data',()=>{
        cy.get('.border-2').should('be.visible').should('have.text','Sign In').click()
        cy.get(':nth-child(1) > .text-red-600').should('be.visible').should('have.text','Required')
        cy.get(':nth-child(2) > .text-red-600').should('be.visible').should('have.text','Required')

        
    })
    it('As a Patient the user should unable to login with invalid credentials',()=>{
        cy.get(':nth-child(1) > .mt-1 > .appearance-none').should('be.visible').type('pp@mailinator.com')
        cy.get(':nth-child(2) > .mt-1 > .appearance-none').should('be.visible').type('password')
        cy.get('.border-2').should('be.visible').should('have.text','Sign In').click()
        cy.contains('Incorrect email or password')

    })

    it('As a patient the user should able to login with credentials',()=>{
        cy.get(':nth-child(1) > .mt-1 > .appearance-none').should('be.visible').clear().type(cred.pemail)
        cy.get(':nth-child(2) > .mt-1 > .appearance-none').should('be.visible').clear().type(cred.ppassword)
        cy.get('.border-2').should('be.visible').should('have.text','Sign In').click()
        cy.url().should('contain','/home')


    })

   

})