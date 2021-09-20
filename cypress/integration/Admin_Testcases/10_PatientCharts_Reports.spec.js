///<reference types='cypress'/>
const cred=require('../../fixtures/cred.json')
 import faker from 'faker'

 describe('Reports module testcases',()=>{
 
    it('As a Admin the user should navigated to the Reports page by clicking on "Reports" tab',()=>{
        cy.login(cred.email,cred.password)
        cy.url().should('contain','/patients')
        cy.get('.bg-white > .w-full').should('be.visible').type('pawankumar@yopmail.com')
        cy.wait(2000)
        cy.get('tr:nth-child(1) > td:nth-child(7) > div > svg:nth-child(1) > path:nth-child(1)').scrollIntoView().should('be.visible').click()
        cy.url().should('contain','/address')
        cy.get('.border-transparent').should('be.visible').should('contain','Charts').click()
        cy.url().should('contain','/charts')
        cy.get('.h-screen>div:nth-child(2)>div:nth-child(2)').should('be.visible').click()
        cy.url().should('contain','/medical_history')
        cy.get('.flex-grow > .border-b > .flex > .border-transparent').should('be.visible').should('contain','Reports').click()
        cy.url().should('contain','/reports')

    })
    it('At "Reports" page each label and field should have proper label and validations',()=>{
        cy.get('.font-bold').should('be.visible').should('contain','Showing 3 Reports')
        cy.get('.p-3').should('be.visible')
        cy.get(':nth-child(1) > a > .justify-between').should('be.visible')
        cy.get(':nth-child(1) > a > .justify-between > span.text-primary').should('be.visible').should('contain','COVID RT-PCR')
        cy.get(':nth-child(1) > a > .justify-between > .flex > .text-gray-600').should('be.visible').should('contain','Aug 18 2021')
        cy.get(':nth-child(1) > a > .justify-between > .flex > .bg-lightBlue').should('be.visible')
        cy.get(':nth-child(2) > a > .justify-between').should('be.visible')
        cy.get(':nth-child(2) > a > .justify-between > span.text-primary').should('be.visible').should('contain','COVID RT-PCR')
        cy.get(':nth-child(2) > a > .justify-between > .flex > .text-gray-600').should('be.visible').should('contain','Aug 18 2021')
        cy.get(':nth-child(2) > a > .justify-between > .flex > .bg-lightBlue').should('be.visible')
        cy.get(':nth-child(3) > a > .justify-between').should('be.visible')
        cy.get(':nth-child(3) > a > .justify-between > span.text-primary').should('be.visible').should('contain','COVID RT-PCR')
        cy.get(':nth-child(3) > a > .justify-between > .flex > .text-gray-600').should('be.visible').should('contain','Aug 18 2021')
        cy.get(':nth-child(3) > a > .justify-between > .flex > .bg-lightBlue').should('be.visible')
    })

    it('As a Admin the user should able to see all the reports uploaded by him for the particular patient',()=>{
        cy.get(':nth-child(1) > a > .justify-between').should('be.visible')
        cy.get(':nth-child(2) > a > .justify-between').should('be.visible')
        cy.get(':nth-child(3) > a > .justify-between').should('be.visible')


    })
    it('The user able view any report by clicking on that report',()=>{
        cy.get(':nth-child(1) > a > .justify-between').should('be.visible').click()
        
         cy.get(':nth-child(2) > a > .justify-between').should('be.visible').click()
         
        cy.get(':nth-child(3) > a > .justify-between').should('be.visible').click()
         
    })

})