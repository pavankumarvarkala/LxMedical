///<reference types='cypress'/>
const cred=require('../../fixtures/cred.json')

 describe('lx medical-chat functionality',()=>{

     it('As a Admin the user should be navigated to the "chat" page by clicking on the "Chat with LXMedical" tab.',()=>{
        cy.login()
        cy.url().should('contain','/dashboard')
        cy.get('.space-y-4 > :nth-child(5)').should('be.visible').should('have.text','Chat with LxMedical').click()
        cy.url().should('contain','/inbox')
 
 
     })
     it('At "Chat" page each label and field should have proper label and validations',()=>{
        cy.xpath('//*[@id="root"]/div[2]/div/div[2]/div/div[1]/div[1]/nav/a[1]/span[1]').should('be.visible').should('have.text','Patients')
        cy.xpath('//*[@id="root"]/div[2]/div/div[2]/div/div[1]/div[1]/nav/a[2]/span[1]').should('be.visible').should('have.text','Providers')
        cy.get('img.h-60').should('be.visible')

     })

     it('As a Admin the user can switch between the patient and provider chat tabs.',()=>{
        cy.xpath('//*[@id="root"]/div[2]/div/div[2]/div/div[1]/div[1]/nav/a[2]/span[1]').should('be.visible').should('have.text','Providers').click()
        cy.wait(3000)
        cy.xpath('//*[@id="root"]/div[2]/div/div[2]/div/div[1]/div[1]/nav/a[1]/span[1]').should('be.visible').should('have.text','Patients').click()
        cy.wait(3000)
     })

     it('By clicking on the Any patient the chat of that patient should be opened on the right side panel.',()=>{
        cy.get('.col-span-4>:nth-child(2)>div:nth-child(1)').should('be.visible').click()
        cy.wait(3000)
        cy.get('div.font-bold.text-lg').should('be.visible')
        cy.wait(3000)
     })

     it('As a Admin the user can send text,image and pdf files to the patient.',()=>{
        cy.get('.w-full > .bg-white').should('be.visible').type('hi')
        cy.wait(2000)
        cy.get('.w-full > .cursor-pointer').should('be.visible').click()
        cy.wait(3000)
        cy.get('div.pb-6 > div > div > div > div.p-3.rounded-lg.relative.bg-primary.text-white').should('be.visible').should('contain','hi')
        cy.get('.opacity-0').scrollIntoView().attachFile('faf.jpg')
        cy.wait(2000)
        cy.get('.opacity-0').attachFile('file.pdf')
        cy.wait(2000)
     })

     it('As a Admin the user can see the chats of all the patients in the list.',()=>{
        cy.get('.col-span-4>:nth-child(2)>div:nth-child(2)').should('be.visible').click()
        cy.wait(3000)
        cy.get('div.font-bold.text-lg').should('be.visible')
        cy.wait(3000)
        cy.get('.col-span-4>:nth-child(2)>div:nth-child(3)').should('be.visible').click()
        cy.wait(3000)
        cy.get('div.font-bold.text-lg').should('be.visible')
        cy.wait(3000)

  
    })

    it('By clicking on the Any provider the chat of that provider should be opened on the right side panel.',()=>{
        cy.xpath('//*[@id="root"]/div[2]/div/div[2]/div/div[1]/div[1]/nav/a[2]/span[1]').should('be.visible').should('have.text','Providers').click()
        cy.wait(3000)
        cy.get('.col-span-4>:nth-child(2)>div:nth-child(1)').should('be.visible').click()
        cy.wait(3000)
        cy.get('div.font-bold.text-lg').should('be.visible')
        cy.wait(3000)
     })

     it('As a Admin the user can send text,image and pdf files to the provider.',()=>{
        cy.get('.w-full > .bg-white').should('be.visible').type('hi')
        cy.wait(2000)
        cy.get('.w-full > .cursor-pointer').should('be.visible').click()
        cy.wait(3000)
        cy.get('.opacity-0').scrollIntoView().attachFile('faf.jpg')
        cy.wait(2000)
        cy.get('.opacity-0').attachFile('file.pdf')
        cy.wait(2000)
     })

     it('As a Admin the user can see the chats of all the providers in the list.',()=>{
        cy.get('.col-span-4>:nth-child(2)>div:nth-child(2)').should('be.visible').click()
        cy.wait(5000)
        cy.get('div.font-bold.text-lg').should('be.visible')
        cy.wait(3000)
        cy.get('.col-span-4>:nth-child(2)>div:nth-child(1)').should('be.visible').click()
        cy.wait(5000)
        cy.get('div.font-bold.text-lg').should('be.visible')
        cy.wait(10000)
        cy.logout()


  
    })

  
 })
         
         