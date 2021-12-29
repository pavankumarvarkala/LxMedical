///<reference types='cypress'/>
const cred=require('../../fixtures/cred.json')
 import faker from 'faker'

 describe('chat module testcases',()=>{
 
    it('As a Patient the user should be navigated to the chats page by clicking on chats tab',()=>{
        cy.patientlogin(cred.pemail,cred.ppassword)
        cy.url().should('contain','/home')
        cy.get('[href="/chat"]').should('be.visible').should('have.text','Chat').click()
        cy.url().should('contain','/chat')
   
    })
    it('At "Chats" page each label and field should have proper label and validations',()=>{
        cy.get('.w-10').should('be.visible')
        cy.get('.w-full > .bg-white').should('be.visible')
        cy.get('.w-full > .cursor-pointer').should('be.visible')
     })
     it('The user should able to see all the chats between the user and the Admin',()=>{
        cy.get('div:nth-child(1) > div > div > div > div.p-3.rounded-lg.relative.bg-primary.text-white').scrollIntoView().should('be.visible').should('contain','hi')
        cy.get('div.pb-6 > div > div > div > a > div').scrollIntoView().should('be.visible')
 
    })
     it('As a Patient the user should able to send message to the Admin',()=>{
        cy.get('.w-full > .bg-white').should('be.visible').type('hi')
        cy.wait(2000)
        cy.get('.w-full > .cursor-pointer').should('be.visible').click()
        cy.wait(3000)
     })
     it('The message sent by patient should be received by the Admin',()=>{
        cy.get('div.pb-6 > div > div > div > div.p-3.rounded-lg.relative.bg-primary.text-white').should('be.visible').should('contain','hi')
  })
  it('As Patient the user can able to send the documents and images by clicking on attachments icon',()=>{
        cy.get('.opacity-0').attachFile('faf.jpg')
        cy.wait(2000)
        cy.get('.w-60 > img').should('be.visible')
        cy.get('.opacity-0').attachFile('file.pdf')
        cy.wait(2000)
        cy.get('.w-60 > :nth-child(1) > img').should('be.visible')


      })
      it('The patient can see the full length image on a separate window by clicking on that particular image',()=>{
         cy.get('div:nth-child(14) > div > div > div > a > div').scrollIntoView().should('be.visible').click()
         cy.wait(3000)

      })
      it('The patient can open the document in a separate window by clicking on the particular document',()=>{
         cy.get('div.pb-6 > div > div > div > a > div').scrollIntoView().should('be.visible').click()
         cy.wait(3000)

      })
})