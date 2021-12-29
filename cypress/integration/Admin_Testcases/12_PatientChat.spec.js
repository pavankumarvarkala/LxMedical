///<reference types='cypress'/>
const cred=require('../../fixtures/cred.json')
import faker from 'faker'

 describe('Patient Chat module testcases',()=>{
 
    it('As a Admin the user should be navigated to the patient chat page of any patient by clicking on chats icon against that particular patient',()=>{
        cy.login(cred.email,cred.password)
        cy.url().should('contain','/patients')
        cy.get('.bg-white > .w-full').should('be.visible').type('pawankumar@yopmail.com')
        cy.wait(2000)
        cy.get('tr:nth-child(1) > td:nth-child(7) > div > div > svg > path').scrollIntoView().click({force:true})
        cy.url().should('contain','/chat')

    })
    it('At "Chats" page each label and field should have proper label and validations',()=>{
        cy.get('.font-bold').should('be.visible').should('have.text','Chat')
        cy.get('.flex-wrap > .h-6').should('be.visible')
        cy.get('.rounded-3xl').should('be.visible')
        cy.get('.w-full > .cursor-pointer').should('be.visible')
     })
     it('The user should able to see all the chats between the Admin and patients',()=>{
      cy.get('div:nth-child(1) > div > div > div > div.p-3.rounded-lg.relative.bg-lightChatGray').scrollIntoView().should('be.visible').should('contain','hi')
      cy.get('div.pb-6 > div > div > div > a > div').scrollIntoView().should('be.visible')

  })
     it('As a Admin the user should able to send message to the patients',()=>{
        cy.get('.w-full > .bg-white').should('be.visible').type('hi')
        cy.wait(2000)
        cy.get('.w-full > .cursor-pointer').should('be.visible').click()
        cy.wait(3000)
     })
     it('The message sent by Admin should be received by the Patients',()=>{
        cy.get('div.pb-6 > div > div > div > div.p-3.rounded-lg.relative.bg-primary.text-white').should('be.visible').should('contain','hi')
  })
  it('As a Admin the user can able to send the documents and images by clicking on attachments icon',()=>{
        cy.get('.opacity-0').attachFile('faf.jpg')
        cy.wait(2000)
        cy.get('.w-60 > img').should('be.visible')
        cy.get('.opacity-0').attachFile('file.pdf')
        cy.wait(2000)
        cy.get('.w-60 > :nth-child(1) > img').should('be.visible')


      })
      it('The Admin can see the full length image on a separate window by clicking on that particular image',()=>{
         cy.get('div:nth-child(14) > div > div > div > a > div').scrollIntoView().should('be.visible').click()
         cy.wait(3000)

      })
      it('The Admin can open the document in a separate window by clicking on the particular document',()=>{
         cy.get('#chatList > div.pb-6 > div > div > div > a > div').scrollIntoView().should('be.visible').click()
         cy.wait(3000)
         cy.logout()
      })

})