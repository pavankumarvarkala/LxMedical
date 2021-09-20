///<reference types='cypress'/>

import faker from 'faker'
describe('Provider module testcases', () => {

    it('As a Admin I should be albe to navigate on invited provider listing page', () => {
        cy.login();
        cy.get('.space-y-4 > :nth-child(5)').should('be.visible').click();
        cy.url().should('include', '/invitation');
     })
    it('At invited providers page each label and field should have proper label and proper validations', () => {
        cy.get('thead > tr > :nth-child(1) > div').should('be.visible').and('have.text', 'Email/Phone');
        cy.get('tr > :nth-child(2) > div').should('be.visible').and('have.text', 'Invited On');
        cy.get('tr > :nth-child(3) > div').should('be.visible').and('have.text', 'Status');
        cy.get('tr > :nth-child(4) > div').should('be.visible').and('have.text', 'Action');
        cy.xpath("//button[@textid='provider.invite']").should('have.text','Invite Provider')
        cy.get('.flex-wrap > .flex').should('be.visible').and('have.text', 'Invite Provider')
     })
    it('As a Admin I should be albe to get a pop up window of invite provider by clicking on invite provider button', () => {
        cy.get('.flex-wrap > .flex').should('be.visible').and('have.text', 'Invite Provider').click()
        cy.get('div.my-5.text-primary.text-base.font-bold').should('be.visible') 
        
    })
    it('At invited providers pop up window each label and field should have proper label and proper validations', () => {
        cy.get('.my-5').should('be.visible').should('have.text','Invite Provider')
        cy.get('.w-5').should('be.visible')
        cy.xpath('//label').eq(0).should('be.visible').and('have.text', 'Phone')
        cy.xpath('//label').eq(1).should('be.visible').and('have.text', 'Email')
        cy.xpath('//label').eq(2).should('be.visible').and('have.text', 'Both')
        cy.xpath('//label').eq(3).should('be.visible').and('have.text', 'Email')
        cy.xpath("//input[@type='radio']").should('be.checked');
        cy.get('.appearance-none').clear().type('sdada@dada@asd.com');
        cy.get('#update-profile').click();
        cy.get('.text-red-600').should('be.visible').and('have.text', 'Please enter valid email');
     })
    it('As a Admin I shoual be able to invite provider', () => {
        const email = faker.name.firstName()+'@mailinator.com';
        cy.get('.appearance-none').clear().type(email);
        cy.get('#update-profile').click();
        cy.writeFile('cypress/fixtures/provider.json', {
            email: email
        });
        cy.contains('Invitation sent successfully.');
    })
    it('As a Admin I should be able to see invited provider into the provider list', () => {
        cy.readFile('cypress/fixtures/provider.json').then((provider) => {
            cy.get('.space-y-4 > .bg-white').click();
            cy.get(':nth-child(1) > :nth-child(1) > div > .text-gray-900').should('be.visible').and('have.text', provider.email.toLowerCase());
        })
    })
    it('As a Admin I should be able to able to resend the password', () => {
        cy.xpath("//div[@textid='resend']").first().click();
        cy.contains("Invitation sent successfully.").should('be.visible')
        cy.logout();
    })
})