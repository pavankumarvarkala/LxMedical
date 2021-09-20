///<reference types='cypress'/>
const cred=require('../../fixtures/cred.json')
 import faker from 'faker'

 describe('Charts Module Test Cases',()=>{

    it('As a patient the user user should be navigated to the charts page by clicking on charts tab',()=>{
        cy.patientlogin(cred.pemail,cred.ppassword)
        cy.get('[href="/charts"]').should('be.visible').should('have.text','Charts').click()
        cy.url().should('contain','/charts')
    })

    it('At Charts page each label and field should have proper label and validations',()=>{
      cy.get('.font-medium > .inline').should('be.visible').should('have.text','Members')
      cy.get('.flex-wrap > .flex').should('be.visible').should('have.text','Add Another Member')
      cy.get(':nth-child(1) > .bg-white > .justify-between > .text-base').should('be.visible')
      cy.get('.h-screen>div:nth-child(2)>div:nth-child(1)').should('be.visible')
      cy.get(':nth-child(1) > .bg-white > .justify-between > .flex > .font-medium').should('be.visible').should('have.text','self')
      cy.get(':nth-child(1) > .bg-white > .justify-between > .flex > .px-1 > .w-4 > path').should('be.visible')
      cy.get('.h-screen>div:nth-child(2)>div:nth-child(1)>div>div:nth-child(2)>div:nth-child(1)>div').should('be.visible').should('have.text','Date of Birth')
      cy.get('.h-screen>div:nth-child(2)>div:nth-child(1)>div>div:nth-child(2)>div:nth-child(2)>div').should('be.visible').should('have.text','Gender')
   
  })

 })