///<reference types ='cypress'/>
const cred=require('../../fixtures/cred.json')
import faker from 'faker'

describe('Patient Noifications module Test cases',()=>{
    it('Validate Navigate to Patient "Notifications" tab under patient profile details',()=>{
        cy.login()
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
    })







})