///<reference types='cypress'/>

import faker from 'faker'
describe("Change password Testcases", () => {

    const old_password = "//input[@name='oldPassword']";
    const new_password = "//input[@name='newPassword']";
    const confirm_password = "//input[@name='confirmPassword']";

    it("As a Admin I should be able to navigate on change password screen", () => {
        cy.login();
        cy.xpath("//nav//div[text()='Settings']").should('be.visible').click();
        cy.url().should('include', '/password');
    })
    it("At Chnage Password page each page should have proper labels", () => {

        cy.get('.text-xl').should('be.visible').and('have.text', 'Change Password');
        cy.xpath("//label//div").eq(0).should('be.visible').and('have.text', 'Old Password');
        cy.xpath("//label//div").eq(1).should('be.visible').and('have.text', 'New Password');
        cy.xpath("//label//div").eq(2).should('be.visible').and('have.text', 'Confirm Password');
        cy.xpath("//button//div[text()='Update']").should('be.visible');
    })
    it('in empty field proper validation should appear', () => {
        //empty case
        cy.xpath("//button//div[text()='Update']").click();
        cy.contains("Old Password is required").should('be.visible');
        cy.contains("New Password is required").should('be.visible');
        cy.contains("New Password is required").should('be.visible');
    })

    it("wrong old password case should be handle proper", () => {
        // wrong old password case 
        const password = faker.name + "@123456";
        cy.xpath(old_password).type('123456@1235As');
        cy.xpath(new_password).type(password);
        cy.xpath(confirm_password).type(password);
        cy.xpath("//button//div[text()='Update']").click();
        cy.wait(2000);
    })

    it("password lenth validation should be proper", () => {
        // password length validations
        cy.xpath(old_password).clear().type('1231');
        cy.xpath(new_password).clear().type('sada');
        cy.xpath(confirm_password).clear().type('d');
        cy.xpath("//label//div").eq(2).click();
        cy.get('.text-red-600').eq(0).should('have.text', 'Password is too short - should be 8 chars minimum').and('be.visible');
        cy.get('.text-red-600').eq(1).should('have.text', 'Password should be atleast 8 characters and should contain combination of uppercase, lowercase & numbers').and('be.visible');
        cy.get('.text-red-600').eq(2).should('have.text', 'Both passwords need to be the same').and('be.visible');
    })

    it("As a Admin I should be able to change password and admin should be able to login with new password", () => {
        const cred = require('../../fixtures/cred.json')
        
        cy.xpath(old_password).clear().type(cred.password);
        cy.xpath(new_password).clear().type('Passcode@123');
        cy.xpath(confirm_password).clear().type('Passcode@123');
        cy.xpath("//button//div[text()='Update']").click();
        cy.xpath("//div[text()='Sign In']").should('be.visible');
        cy.contains('changed', { matchCase: false });
        cy.get(':nth-child(1) > .mt-1 > .appearance-none').type(cred.email)
        cy.get(':nth-child(2) > .mt-1 > .appearance-none').type('Passcode@123')
        cy.get('.mt-3 > .flex').click()
        cy.xpath("//nav//div[text()='Settings']").should('be.visible').click();
        cy.xpath(old_password).clear().type('Passcode@123');
        cy.xpath(new_password).clear().type(cred.password);
        cy.xpath(confirm_password).clear().type(cred.password);
        cy.xpath("//button//div[text()='Update']").click();
         
    })
})