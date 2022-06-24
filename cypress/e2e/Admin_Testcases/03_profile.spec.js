///<reference types='cypress'/>

import faker from 'faker'
describe('Profile module testcases', () => {

    const first_name = "//input[@name='firstName']";
    const last_name = "//input[@name='lastName']";
    const mobile_num = "//input[@name='phone']";

    it("As a Admin I should be able to navigate on Admin Profile", () => {

        cy.login();
        cy.url().should('contain','/dashboard')
        cy.get('span.hidden').click();
        cy.get(".ml-3>div:nth-child(2)>div:nth-child(1)").should('be.visible').should('have.text','Profile').click();
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

        const phone =faker.phone.phoneNumber('##########')

         
        cy.xpath(first_name).clear().type('LXMedical')
        cy.xpath(last_name).clear().type('Admin');
        cy.xpath(mobile_num).clear().type(phone); 
        cy.get('#update-profile').click();
        cy.contains("Profile updated sucessfully");
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

    it("As a Admin the user should able to log out by cliking on logout link via profile icon", () => {
        cy.get('span.hidden').click();
        cy.get(".ml-3>div:nth-child(2)>div:nth-child(2)").should('be.visible').should('have.text','Sign Out').click();

    })
    it("By clicking on log out the user should able to get log out confirmation pop up.", () => {
        cy.get(".mt-3>.mt-2").should('be.visible').should('have.text','Are you sure, you want to sign out?')
        cy.get("svg.h-6.w-6").should('be.visible')
        cy.get(".mt-5>button:nth-child(2)").should('be.visible').should('have.text','Cancel')
        cy.get(".mt-5>button:nth-child(1)").should('be.visible').should('have.text','Confirm')

    })

    it("By clicking on on cancel button the log out confirmation pop out should be closed.", () => {
        cy.get(".mt-5>button:nth-child(2)").should('be.visible').should('have.text','Cancel').click()
        cy.wait(2000)
        cy.get('span.hidden').click();
        cy.get(".ml-3>div:nth-child(2)>div:nth-child(2)").should('be.visible').should('have.text','Sign Out').click();
        cy.wait(2000)

    })

    it("By clicking on confirm button the user should be able to log out of the site.", () => {
        cy.get(".mt-5>button:nth-child(1)").should('be.visible').should('have.text','Confirm').click()
        cy.wait(2000)


    })

})