//<reference types='cypress'/>
describe('unverified payment testcases',  function() {
    beforeEach(function(){
        cy.visit('https://qa.rch.build-release.com/admin')
        cy.get('[label=email]').type('Rchadmin@yopmail.com')
        cy.get('[label=password]').type('Password@123')
        cy.get('[type=submit]').click()

    })


    it('As a Admin the user should be navigated to the Unverified payments page by clicking on the "Unverified Payments" button on the Appointment page', function() {
        cy.get('#root > div:nth-of-type(2) > div > div:nth-of-type(1) > nav > div:nth-of-type(4) > div:nth-of-type(2)').click()
        cy.get('[textid="admin.unVerified_payments"] > div').click()
        
    })
    it('At "Unverified Payments" page each label and field should have proper label and validations', function() {
        cy.get('#root > div:nth-of-type(2) > div > div:nth-of-type(1) > nav > div:nth-of-type(4) > div:nth-of-type(2)').click()
        cy.get('[textid="admin.unVerified_payments"] > div').click()
        cy.contains("Unverified Payments List")

    })
    it('As a Admin the user can search any unverified appointment By Appointment id,patient name or provider name', function() {
        cy.get('#root > div:nth-of-type(2) > div > div:nth-of-type(1) > nav > div:nth-of-type(4) > div:nth-of-type(2)').click()
        cy.get('[textid="admin.unVerified_payments"] > div').click()
        cy.get('.w-full[type=search]').type('vaccination')
        

    })
    it('As a Admin the user can filter the unverified appointments by using the filter on the top right corner of the list  by the payment mode cash or pos etc.', function() {
        cy.get('#root > div:nth-of-type(2) > div > div:nth-of-type(1) > nav > div:nth-of-type(4) > div:nth-of-type(2)').click()
        cy.get('[textid="admin.unVerified_payments"] > div').click()
        cy.get('#headlessui-menu-button-5').click()
        
        

    })
    it('As a Admin the user can verify payment of any appointment by clicking on the verify button against that appointment and user will get verification confirmation window', function() {
        cy.get('#root > div:nth-of-type(2) > div > div:nth-of-type(1) > nav > div:nth-of-type(4) > div:nth-of-type(2)').click()
        cy.get('[textid="admin.unVerified_payments"] > div').click()
        cy.get('table>tbody>tr:nth-child(1)>td:nth-child(7)').click()
    })

    it('As a Admin the user can click on the verify button on the confirmation to verify the payment', function() {
        cy.get('#root > div:nth-of-type(2) > div > div:nth-of-type(1) > nav > div:nth-of-type(4) > div:nth-of-type(2)').click()
        cy.get('[textid="admin.unVerified_payments"] > div').click()
        cy.get('table>tbody>tr:nth-child(1)>td:nth-child(7)').click()
        cy.get('html > body > div:nth-of-type(3) > div > div > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(3) > button').click()
    })
})