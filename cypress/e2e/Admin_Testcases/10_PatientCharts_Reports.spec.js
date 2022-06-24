///<reference types='cypress'/>
const cred=require('../../fixtures/cred.json')
 import faker from 'faker'

 describe('Reports module testcases',()=>{
 
    it('As a Admin the user should navigated to the Reports page by clicking on "Reports" tab',()=>{
        cy.login(cred.email,cred.password)
        cy.url().should('contain','/dashboard')
        //Click patient tab on the left side tray
        cy.get('.space-y-4 > :nth-child(2)').should('be.visible').should('have.text','Patients').click()
        cy.url().should('contain','/patients')
        //Add new patient custom command
        cy.AddPatient()
        cy.readFile('cypress/fixtures/provider.json').then((provider) => {
        //search added patient    
        cy.get('[type=search]').should('be.visible').type(provider.email.toLowerCase())
        //Checking email is present in the list
        cy.get('tr:nth-child(1)>td:nth-child(2)').should('be.visible').should('have.text',provider.email.toLowerCase())
        cy.wait(4000)
        })
        //Click on eye icon against patient 
        cy.get('tr:nth-child(1) > td:nth-child(7) > div > svg:nth-child(1) > path:nth-child(1)').scrollIntoView().should('be.visible').click()
        cy.url().should('contain','/address')
        //Click on charts tab in patient profile
        cy.get('nav.flex.flex-wrap>div:nth-child(2)>div').should('be.visible').should('contain','Charts').click()
        cy.url().should('contain','/charts')
        //Click on Add Another member button
        cy.get('.flex-wrap > .flex').should('be.visible').should('have.text','Add Another Member').click()
        cy.addfamilymembercharts()
        //Click on the name card of family member added
        cy.get('.h-screen>div:nth-child(2)>div:nth-child(2)').should('be.visible').click()
        cy.url().should('contain','/medical_history')
        cy.get('div.py-4.pb-0>div>div:nth-child(2)>div>nav>div:nth-child(2)>').should('be.visible').should('contain','Reports').click()
        cy.url().should('contain','/reports')

    })
    it('At "Reports" page each label and field should have proper label and validations',()=>{
        cy.get('.font-bold').should('be.visible').should('contain','Showing 0 Reports')  
        cy.get('div.flex.items-center > div > div:nth-child(1) > div > input').should('be.visible').invoke('attr','placeholder').should('contain','Filter by Date Range..')
    })

    it('As a Admin the user should able to see all the reports uploaded by him for the particular patient',()=>{
        // cy.get(':nth-child(1) > a > .justify-between').should('be.visible')
        // cy.get(':nth-child(2) > a > .justify-between').should('be.visible')
        // cy.get(':nth-child(3) > a > .justify-between').should('be.visible')


    })
    it('The user able view any report by clicking on that report',()=>{
        // cy.get(':nth-child(1) > a > .justify-between').should('be.visible').click()
        
        //  cy.get(':nth-child(2) > a > .justify-between').should('be.visible').click()
         
        // cy.get(':nth-child(3) > a > .justify-between').should('be.visible').click()
        cy.logout()
    })

})