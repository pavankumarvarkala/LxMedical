///<reference types='cypress'/>

import faker from 'faker'
describe('Provider module testcases', () => {

    it('As a Admin I should be albe to navigate on invited provider listing page', () => {
        cy.login();
        cy.get('.space-y-4 > :nth-child(3)').should('be.visible').should('have.text','Providers').click();
        cy.url().should('include', '/providers');
        cy.get('div.space-x-4.flex > button:nth-child(1)').should('be.visible').should('have.text','Pending Invitations').click();
        cy.url().should('include', '/invitation');
     })
    it('At invited providers page each label and field should have proper label and proper validations', () => {
        cy.get('thead > tr > :nth-child(1) > div').should('be.visible').and('have.text', 'Email');
        cy.get('thead > tr > :nth-child(2) > div').should('be.visible').should('contain','Phone Number')
        cy.get('thead > tr > :nth-child(3) > div').should('be.visible').and('have.text', 'Invited On');
        cy.get('thead > tr > :nth-child(4) > div').should('be.visible').and('have.text', 'Status');
        cy.get('thead > tr > :nth-child(5) > div').should('be.visible').and('contain', 'Action');
        cy.xpath("//button[@textid='provider.invite']").should('be.visible').should('have.text','Invite Provider')
        cy.get('div.flex.flex-wrap>div:nth-child(1)>div').should('be.visible').and('contain', 'Invited Providers')
     })
     it('As a admin the user should be able to go the next page of the pending invitations list by clicking on next button', ()=>{
        cy.get('.mt-1:nth-child(2)').should('be.visible').should('have.text','Next').click()
    })

    it('As a admin the user should be able to go the previous page of the pending invitations list by clicking on previous button', ()=>{
        cy.get('.mt-1:nth-child(1)').should('be.visible').should('have.text','Previous').click()
    })

    it('As a Admin I should be albe to get a pop up window of invite provider by clicking on invite provider button', () => {
        cy.xpath("//button[@textid='provider.invite']").should('have.text','Invite Provider').click()
        cy.get('div.my-5.text-primary.text-base.font-bold').should('be.visible') 
        
    })
    it('At invited providers pop up window each label and field should have proper label and proper validations', () => {
        cy.get('.my-5').should('be.visible').should('have.text','Invite Provider')
        cy.get('.w-5').should('be.visible')
        cy.get('form>div:nth-child(1)>label').should('be.visible').and('have.text', 'Email')
        cy.get('form>div:nth-child(1)>div').should('be.visible')
        cy.get('form>div:nth-child(2)>label').should('be.visible').and('contain', 'Phone Number')
        cy.get('form>div:nth-child(2)>div').should('be.visible')
        cy.get('form>div:nth-child(3)>button:nth-child(1)').should('be.visible').and('have.text', 'Cancel')
        cy.get('form>div:nth-child(3)>button:nth-child(2)').should('be.visible').and('have.text', 'Invite')
        cy.get('form>div:nth-child(1)>div').clear().type('sdada@dada@asd.com');
        cy.get('#update-profile').click();
        cy.get('.text-red-600').should('be.visible').and('have.text', 'Email is not valid');
     })
    it('As a Admin I shoual be able to invite provider', () => {
        const email = faker.name.firstName()+'@mailinator.com';
        const phone = faker.phone.phoneNumber('(###)-###-####');
        cy.get('form>div:nth-child(1)>div>input').clear().type(email);
        cy.get('form>div:nth-child(2)>div>input').clear().type(phone); 
        cy.get('#update-profile').click();
        cy.writeFile('cypress/fixtures/provider.json', {
            email: email,
            phone:phone
        });
        cy.contains('Invitation sent successfully.');
    })
    it('As a Admin I should be able to see invited provider into the provider list', () => {
        cy.readFile('cypress/fixtures/provider.json').then((provider) => {
        cy.get(':nth-child(1) > :nth-child(1) > div > .text-gray-900').should('be.visible').and('have.text', provider.email.toLowerCase());
        })
    })
    it('As a admin the user should be able to search any prodvider with his name or email',()=>{
        cy.readFile('cypress/fixtures/provider.json').then((provider) =>{
        cy.get('[type=search]').should('be.visible').type(provider.email.toLowerCase())
        cy.wait(5000)
        cy.get('tr:nth-child(1)>td:nth-child(1)').should('be.visible').should('have.text',provider.email.toLowerCase())
        cy.wait(2000)
        cy.get('[type=search]').should('be.visible').clear().type(provider.phone)
        cy.get('tr:nth-child(1)>td:nth-child(2)').should('be.visible').should('contain',provider.phone)
        })

    })
    it('As a Admin I should be able to able to resend the invitation code.', () => {
        cy.xpath("//div[@textid='resend']").first().click();
        cy.contains("Invitation sent successfully.").should('be.visible')
        cy.logout();
    })
})