///<reference types='cypress'/>
Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })
const cred=require('../../fixtures/cred.json')
 import faker from 'faker'

describe('Account settings Module Test Cases',()=>{

 
    it('As a patient the user should be navigated to the account settings page by clicking on account settings tab',()=>{
        cy.patientlogin(cred.pemail,cred.ppassword)
        cy.url().should('contain','/home')
        cy.get('.justify-end > .flex').should('be.visible').click()
        cy.url().should('contain','/profile')
        cy.get('.space-y-8 > :nth-child(3)').should('be.visible').click()
        cy.url().should('contain','/settings')

    })
    it('At Account settings page each label and field should have proper label and validations',()=>{
        cy.get('.flex-wrap > :nth-child(1)').should('be.visible').should('have.text','Change Password')
        cy.get('.flex-wrap > :nth-child(2)').should('be.visible').should('have.text','Logout')

    })
    it('The user should geta a popup window to the change password page by clicking on change password tab',()=>{
        cy.get('.flex-wrap > :nth-child(1)').should('be.visible').should('have.text','Change Password').click()
 
    })
    it('At change password page each label and field should have proper label and validations',()=>{
        cy.get('.justify-between > .font-bold').should('be.visible').should('have.text','Change Password')
        cy.get('.hidden > .mt-6 > :nth-child(1) > .px-6 > .space-y-6 > :nth-child(1) > div.w-full > .text-sm > div').should('be.visible').should('have.text','Old Password')
        cy.get('.hidden > .mt-6 > :nth-child(1) > .px-6 > .space-y-6 > :nth-child(2) > div.w-full > .text-sm > div').should('be.visible').should('have.text','New Password')
        cy.get('.hidden > .mt-6 > :nth-child(1) > .px-6 > .space-y-6 > :nth-child(3) > div.w-full > .text-sm > div').should('be.visible').should('have.text','Confirm Password')
        cy.get('.hidden > .mt-6 > :nth-child(1) > .px-6 > .space-y-6 > .pt-5 > #update-password').should('be.visible').should('have.text','Change Password')

    })
    it('Error message should be displayed if clicked on continue by entering wrong data or with no data entered in change password page',()=>{
        cy.get('.hidden > .mt-6 > :nth-child(1) > .px-6 > .space-y-6 > .pt-5 > #update-password').should('be.visible').should('have.text','Change Password').click()
        cy.get(':nth-child(1) > div.w-full > .text-red-600').should('be.visible').should('have.text','Old Password is required')
        cy.get(':nth-child(2) > div.w-full > .text-red-600').should('be.visible').should('have.text','New Password is required')
        cy.get(':nth-child(3) > div.w-full > .text-red-600').should('be.visible').should('have.text','Confirm Password is required')
        cy.get('.hidden > .mt-6 > :nth-child(1) > .px-6 > .space-y-6 > :nth-child(1) > div.w-full > .relative > .appearance-none').should('be.visible').type('Pavan@123')
        cy.get('.hidden > .mt-6 > :nth-child(1) > .px-6 > .space-y-6 > :nth-child(2) > div.w-full > .relative > .appearance-none').should('be.visible').type('Password@123')
        cy.get('.hidden > .mt-6 > :nth-child(1) > .px-6 > .space-y-6 > :nth-child(3) > div.w-full > .relative > .appearance-none').should('be.visible').type('Password@123')
        cy.get('.hidden > .mt-6 > :nth-child(1) > .px-6 > .space-y-6 > .pt-5 > #update-password').should('be.visible').should('have.text','Change Password').click()
        cy.contains('Incorrect Old Password')
  
    })
    it('Error message should be displayed if current password and new password are same',()=>{
        cy.get('.hidden > .mt-6 > :nth-child(1) > .px-6 > .space-y-6 > :nth-child(1) > div.w-full > .relative > .appearance-none').should('be.visible').type('Password@123')
        cy.get('.hidden > .mt-6 > :nth-child(1) > .px-6 > .space-y-6 > :nth-child(2) > div.w-full > .relative > .appearance-none').should('be.visible').type('Password@123')
        cy.get('.hidden > .mt-6 > :nth-child(1) > .px-6 > .space-y-6 > :nth-child(3) > div.w-full > .relative > .appearance-none').should('be.visible').type('Password@123')
        cy.get('.hidden > .mt-6 > :nth-child(1) > .px-6 > .space-y-6 > .pt-5 > #update-password').should('be.visible').should('have.text','Change Password').click()
        cy.get('.text-red-600').should('be.visible').should('have.text','Old and new password can not be the same')

    })
    it('Error message should be displayed if both new password and retype password are not matching',()=>{
        cy.get('.hidden > .mt-6 > :nth-child(1) > .px-6 > .space-y-6 > :nth-child(1) > div.w-full > .relative > .appearance-none').should('be.visible').clear().type('Password@123')
        cy.get('.hidden > .mt-6 > :nth-child(1) > .px-6 > .space-y-6 > :nth-child(2) > div.w-full > .relative > .appearance-none').should('be.visible').clear().type('Password@1234')
        cy.get('.hidden > .mt-6 > :nth-child(1) > .px-6 > .space-y-6 > :nth-child(3) > div.w-full > .relative > .appearance-none').should('be.visible').clear().type('Password@12345')
        cy.get('.text-red-600').should('be.visible').should('have.text','Both passwords need to be the same')

    })
    it('The user should geta a popup window to the change password page by clicking on change password tab',()=>{
        cy.get('.hidden > .mt-6 > :nth-child(1) > .px-6 > .space-y-6 > :nth-child(1) > div.w-full > .relative > .appearance-none').should('be.visible').clear().type('Password@123')
        cy.get('.hidden > .mt-6 > :nth-child(1) > .px-6 > .space-y-6 > :nth-child(2) > div.w-full > .relative > .appearance-none').should('be.visible').clear().type('Password@1234')
        cy.get('.hidden > .mt-6 > :nth-child(1) > .px-6 > .space-y-6 > :nth-child(3) > div.w-full > .relative > .appearance-none').should('be.visible').clear().type('Password@1234')
        cy.get('.hidden > .mt-6 > :nth-child(1) > .px-6 > .space-y-6 > .pt-5 > #update-password').should('be.visible').should('have.text','Change Password').click()
        cy.contains('Password changed successfully')
        cy.patientlogin()
        cy.get('.justify-end > .flex').should('be.visible').click()
        cy.get('.space-y-8 > :nth-child(3)').should('be.visible').click()
        cy.get('.flex-wrap > :nth-child(1)').should('be.visible').should('have.text','Change Password').click()
        cy.get('.hidden > .mt-6 > :nth-child(1) > .px-6 > .space-y-6 > :nth-child(1) > div.w-full > .relative > .appearance-none').should('be.visible').type('Password@1234')
        cy.get('.hidden > .mt-6 > :nth-child(1) > .px-6 > .space-y-6 > :nth-child(2) > div.w-full > .relative > .appearance-none').should('be.visible').type('Password@123')
        cy.get('.hidden > .mt-6 > :nth-child(1) > .px-6 > .space-y-6 > :nth-child(3) > div.w-full > .relative > .appearance-none').should('be.visible').type('Password@123')
        cy.get('.hidden > .mt-6 > :nth-child(1) > .px-6 > .space-y-6 > .pt-5 > #update-password').should('be.visible').should('have.text','Change Password').click()
   
    })



    
})