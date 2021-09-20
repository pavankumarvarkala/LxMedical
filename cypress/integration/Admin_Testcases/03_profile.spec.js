///<reference types='cypress'/>

import faker from 'faker'
describe('Profile module testcases', () => {

    const first_name = "//input[@name='firstName']";
    const last_name = "//input[@name='lastName']";
    const mobile_num = "//input[@name='phone']";

    it("As a Admin I should be able to navigate on Admin Profile", () => {

        cy.login();
        cy.get('#headlessui-menu-button-1').click();
        cy.xpath("//div[@role='menuitem']//div[text()='Profile']").should('be.visible').click();
        cy.url().should('include', '/admin/profile')

    })
    it("At Profile page each label should be proper", () => {
        cy.get('.text-xl').should('be.visible').and('have.text', 'Profile Details');
        cy.xpath("//label//div").eq(0).should('have.text', 'First Name').and('be.visible');
        cy.xpath("//label//div").eq(1).should('have.text', 'Last Name').and('be.visible');
        cy.xpath("//label//div").eq(2).should('have.text', 'Email').and('be.visible');
        cy.xpath("//label//div").eq(3).should('have.text', 'Phone Number').and('be.visible');
    })
    it("At Profile page each field should have proper validations", () => {
        cy.get('.ml-2').click();
        cy.xpath(first_name).clear();
        cy.xpath(last_name).clear();
        cy.xpath(mobile_num).clear();
        cy.get('.flex-1').click();
        cy.get('.text-red-600 ').eq(0).contains('First Name is required')
        cy.get('.text-red-600 ').eq(1).contains('Last Name is required')
        cy.get('.text-red-600 ').eq(2).contains('Phone number required')
    })
    it("As a Admin I should be able to update my profile details except email", () => {

        const phone = '8279556458';

         
        cy.xpath(first_name).clear().type('LXMedical')
        cy.xpath(last_name).clear().type('Admin');
        cy.xpath(mobile_num).clear().type(phone); 
        cy.get('#update-profile').click();
        cy.contains("Profile updated sucessfully");
        cy.logout();
    })
    /*
    it("As a Admin I should be able to update my profile image", () => {
        cy.get('.ml-2').click({ force: true });
        //  cy.get('.opacity-0').attachFile('faf.jpg');
        cy.get('.w-28 > img').attachFile('faf.jpg');
        cy.get('#update-profile').click();
        cy.contains("Profile updated sucessfully");
    })
    */

})