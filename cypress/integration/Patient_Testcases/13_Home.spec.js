///<reference types='cypress'/>
const cred=require('../../fixtures/cred.json')
 import faker from 'faker'

 describe('Home module testcases',()=>{
 
    it('As a Patient the user should be navigated to the home page after log in successfully',()=>{
        cy.patientlogin(cred.pemail,cred.ppassword)
         cy.url().should('contain','/home')
         
    })
    it('At Home page each label and field have proper lable and validations',()=>{
        cy.get('.flex-col > .flex').should('be.visible').should('contain','Greetings')      
        cy.get('.flex-col > .text-primary > div').should('be.visible').should('contain','How can we help')
        cy.get('[href="/appointments/book_appointment/Telemedicine"] > .bg-white').should('be.visible').should('contain','Telemedicine')      
        cy.get('[href="/appointments/book_appointment/In Home Urgent Care"] > .bg-white').should('be.visible').should('contain','In Home Urgent Care')      
        cy.get('[href="/appointments/book_appointment/In Home Covid Testing"] > .bg-white').should('be.visible').should('contain','In Home Covid Testing')      
        cy.get('[href="/appointments/book_appointment/In Home Wellness Infusions"] > .bg-white').should('be.visible').should('contain','In Home Wellness Infusions')      
        cy.get('[href="/appointments/book_appointment/In Home Wellness Aesthetics"] > .bg-white').should('be.visible').should('contain','In Home Wellness Aesthetics')      
     
    })
    it('As a Patient the user should be navigated to the Book appointment page by cliking on "Tele medicine" tab',()=>{
        cy.get('[href="/appointments/book_appointment/Telemedicine"] > .bg-white').should('be.visible').should('contain','Telemedicine').click()     
         cy.url().should('contain','/appointments')
         cy.wait(3000)
         cy.get('[href="/home"]').should('be.visible').should('have.text','Home').click()
         
    })
    it('As a Patient the user should be navigated to the Book appointment page by cliking on "In Home Urgent Care" tab',()=>{
        cy.get('[href="/appointments/book_appointment/In Home Urgent Care"] > .bg-white').should('be.visible').should('contain','In Home Urgent Care').click()     
        cy.url().should('contain','/appointments')
        cy.wait(3000)
        cy.get('[href="/home"]').should('be.visible').should('have.text','Home').click()
         
    })
    it('As a Patient the user should be navigated to the Book appointment page by cliking on "In Home Covid Testing" tab',()=>{
        cy.get('[href="/appointments/book_appointment/In Home Covid Testing"] > .bg-white').should('be.visible').should('contain','In Home Covid Testing').click()     
        cy.url().should('contain','/appointments')
        cy.wait(3000)
        cy.get('[href="/home"]').should('be.visible').should('have.text','Home').click()
    })
    it('As a Patient the user should be navigated to the Book appointment page by cliking on "In Home Wellness Infusions" tab',()=>{
        cy.get('[href="/appointments/book_appointment/In Home Wellness Infusions"] > .bg-white').should('be.visible').should('contain','In Home Wellness Infusions').click()     
        cy.url().should('contain','/appointments')
        cy.wait(3000)
        cy.get('[href="/home"]').should('be.visible').should('have.text','Home').click()
         
    })
    it('As a Patient the user should be navigated to the Book appointment page by cliking on "In Home Wellness Aesthetics" tab',()=>{
        cy.get('[href="/appointments/book_appointment/In Home Wellness Aesthetics"] > .bg-white').should('be.visible').should('contain','In Home Wellness Aesthetics').click()     
        cy.url().should('contain','/appointments')
        cy.wait(3000)
        cy.get('[href="/home"]').should('be.visible').should('have.text','Home').click()
    })
})