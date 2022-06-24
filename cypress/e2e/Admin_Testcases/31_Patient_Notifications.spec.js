///<reference types='cypress'/>

const cred=require('../../fixtures/cred.json')
 import faker from 'faker'

 describe('Patient Notifications module testcases',()=>{
 
    it('As a Admin the user should be "Patient Notifications" section of any patient by clicking on "Notifications" tab under patients details page.',()=>{
        cy.login(cred.email,cred.password)
        cy.url().should('contain','/dashboard')
        //Click patient tab on the left side tray
        cy.xpath('//nav/div[2]/div[2]').should('be.visible').should('have.text','Patients').click()

        cy.url().should('contain','/patients')
        //Add new patient custom command
        cy.AddPatient()

        cy.readFile('cypress/fixtures/provider.json').then((provider) => {
        //search added patient    
        cy.xpath('//input[@type="search"]').should('be.visible').type(provider.email.toLowerCase())

        //Checking email is present in the list
        cy.xpath('//tr[1]/td[2]').should('be.visible').should('have.text',provider.email.toLowerCase())
        cy.wait(4000)
        })

        //Click on eye icon against patient 
        cy.xpath('//tr[1]/td[7]/div[1]/*[1]').scrollIntoView().should('be.visible').click()
        cy.url().should('contain','/address')

        //Click on Notifications tab in patient profile
        cy.xpath('//div[3]/div[1]/nav[1]/div[4]/div[1]').should('be.visible').should('contain','Notifications').click()
        cy.url().should('contain','/notification')

    })

    it('At "Patient Notifications" page each label and field should have proper label and validations',()=>{
        //validating all fields and labels
        cy.xpath('//div[contains(text(),"E")]').should('be.visible').should('contain','Email Notifications')
        cy.xpath('//div[4]/div/div[1]/button').should('be.visible').should('be.enabled')
        cy.xpath('//div[contains(text(),"T")]').should('be.visible').should('contain','Text Notifications')

        cy.xpath('//div[4]/div/div[2]/button').should('be.visible').should('be.enabled')

    })

    it('As a Admin the user can switch ON/OFF the Email Notifications using the toggle button against it.',()=>{
        //Validating toggle button against email notifications
        cy.xpath('//div[4]/div/div[1]/button').should('be.visible').should('be.enabled').click()
        cy.contains('Notifications Setting Changed')
        cy.xpath('//div[4]/div/div[1]/button').should('be.visible').click()
        cy.contains('Notifications Setting Changed')
        cy.xpath('//div[4]/div/div[1]/button').should('be.visible').should('be.enabled')

    })

    it('As a Admin the user can switch ON/OFF the Text Notifications using the toggle button against it.',()=>{
        //Validating toggle button against Text notifications
        cy.xpath('//div[4]/div/div[2]/button').should('be.visible').should('be.enabled').click()
        cy.contains('Notifications Setting Changed')
        cy.xpath('//div[4]/div/div[2]/button').should('be.visible').click()
        cy.contains('Notifications Setting Changed')
        cy.xpath('//div[4]/div/div[2]/button').should('be.visible').should('be.enabled')

    })
})