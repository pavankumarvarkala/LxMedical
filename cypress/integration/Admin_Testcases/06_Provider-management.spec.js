///<reference types='cypress'/>
describe('provider management module test case', ()=>{

    it('As a admin the user should be navigated to the provides page by clicking on providers tab', ()=>{
        cy.login() 
        cy.get('.space-y-4 > :nth-child(5)').should('be.visible').and('have.text','Invitation').click()
        cy.url().should('contain','/invitation')
           
    })

    it('At invited providers page each label and field should have proper label and proper validations', ()=>{
        cy.get('.text-xl').should('be.visible').should('contain','Invited Providers')
        cy.get('table>thead>tr>th:nth-child(1)>div').should('be.visible').should('have.text','Email/Phone')
        cy.get('table>thead>tr>th:nth-child(2)>div').should('be.visible').should('have.text','Invited On')
        cy.get('table>thead>tr>th:nth-child(3)>div').should('be.visible').should('have.text','Status')
        cy.get('table>thead>tr>th:nth-child(4)>div').should('be.visible').should('have.text','Action')
        cy.get('[type=search]').invoke('attr','placeholder').should('contain','Search for phone or email.')
        cy.get('.text-xl').should('be.visible').should('contain','Providers')
        cy.get('.flex-wrap > .flex').should('be.visible').should('contain','Invite Provider')
        cy.get('.flex-1 > .ml-3').should('be.visible').should('have.text','Next')
     
    })

    it('As a admin the user should be able to go the next page of the providers list by clicking on next button', ()=>{
        cy.get('.flex-1 > .ml-3').should('be.visible').click()
    })

    it('As a admin the user should be able to go the previous page of the providers list by clicking on previous button', ()=>{
        cy.get('.px-4 > .flex-1 > :nth-child(1)').should('be.visible').click()
    })

    it('As a admin the user should be able to search any invited prodvider with his phone number or email',()=>{
        cy.get('[type=search]').should('be.visible').type('ricky@mailinator.com')
        cy.wait(5000)    
    })

    it ('As a admin the user should be navigated to the existing providers page by clicking providers tab', ()=>{
        cy.get('.space-y-4 > :nth-child(4)').should('be.visible').and('have.text','Providers').click()
        cy.url().should('contain','/providers')


    })

    it('At onboarded providers page each label and field should have proper labe and proper validations',()=>{
        cy.get('.font-bold').should('be.visible').should('have.text','Providers')
        cy.get('table>thead>tr>th:nth-child(1)').should('be.visible').should('have.text','Full Name')
        cy.get('table>thead>tr>th:nth-child(2)').should('be.visible').should('have.text','Email')
        cy.get('table>thead>tr>th:nth-child(3)').should('be.visible').should('have.text','Mobile Number')
        cy.get('table>thead>tr>th:nth-child(4)').should('be.visible').should('have.text','Joined On')
        cy.get('table>thead>tr>th:nth-child(5)').should('be.visible').should('have.text','Action')
        cy.get('[type=search]').invoke('attr' ,'placeholder').should('contain','Search for name or email.')
    })

    it('As a admin the user should be navigated to the profile details of any provider by clicking on eye button against that particular provider',()=>{
        cy.get('tr:nth-child(1) > td:nth-child(5) > div > svg:nth-child(1) > path:nth-child(1)').should('be.visible').click()
        cy.get('.py-8 > .font-bold').should('be.visible').should('contain','Provider Details')
        cy.get('.border-b-2').should('be.visible').should('contain','Address')
        cy.get('div.col-span-12.mt-4 > div.mt-4.space-y-4>div:nth-child(1)>div:nth-child(1)>div:nth-child(1)').should('be.visible').should('have.text','Address Line 1')
        cy.get('div.col-span-12.mt-4 > div.mt-4.space-y-4>div:nth-child(1)>div:nth-child(2)>div:nth-child(1)').should('be.visible').should('have.text','Address Line 2')
        cy.get('div.col-span-12.mt-4 > div.mt-4.space-y-4>div:nth-child(2)>div:nth-child(1)>div:nth-child(1)').should('be.visible').should('have.text','Postal Code')
        cy.get('div.col-span-12.mt-4 > div.mt-4.space-y-4>div:nth-child(2)>div:nth-child(2)>div:nth-child(1)').should('be.visible').should('have.text','City')
        cy.get('div.col-span-12.mt-4 > div.mt-4.space-y-4>div:nth-child(3)>div:nth-child(1)>div:nth-child(1)').should('be.visible').should('have.text','State')

    })

    it('As a admin the user should be navigted back to the onboarded providers page by clicking on back arrow on profile details page',()=>{
        cy.get('.py-8 > .h-6').should('be.visible').click()
    })

    it('As a admin the user should be able to search any onboarded prodvider with his name or email',()=>{
        cy.get('[type=search]').should('be.visible').type('ankit.jaiswal@crownstack.com')
        cy.wait(5000) 
        cy.get('[type=search]').clear()
        cy.wait(2000)
        cy.get('[type=search]').should('be.visible').type('Nishant Mishra')
        cy.wait(2000)
        cy.get('[type=search]').clear() 
        cy.logout()
        
    })

})