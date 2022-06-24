///<reference types='cypress'/>
const cred=require('../../fixtures/cred.json')
 import faker from 'faker'

 describe('Notifications module testcases',()=>{
 
    it('As a Admin the user should be navigated to the notifications page by clicking on notifications tab',()=>{
        cy.login(cred.email,cred.password)
        cy.url().should('contain','/dashboard')
        cy.get('.space-y-4 > :nth-child(8)').should('be.visible').should('have.text','Notifications').click()
        cy.url().should('contain','/notification')

    })
    it('At "Notifications" page each label and field should have proper label and validations',()=>{
        cy.get('.font-bold').should('be.visible').should('contain','Notifications')  
        cy.get('.mt-7').should('be.visible')
    })

    it('The Admin the user can able to see all the notifications under notifications page',()=>{
        cy.get('.mt-7').should('be.visible')
        cy.get('.mt-7>div:nth-child(1)').should('be.visible')
        cy.get('.mt-7>div:nth-child(2)').should('be.visible')
        cy.logout()


    })
})