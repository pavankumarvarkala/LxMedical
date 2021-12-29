///<reference types='cypress'/>
describe('Patient management module test cases', ()=>{

    it('As a admin the user should be navigated on patients page by clicking on patients tab', ()=>{
        cy.login() 
        cy.get('.space-y-4 > :nth-child(3)').should('be.visible').should('have.text','Patients').click()
        cy.url().should('contain','/patients')
    })
     
    it('At patients page each label and field should have proper label and validations',()=>{
        cy.get('.font-bold').should('be.visible').should('have.text','Patients')
        cy.get('table>thead>tr>th:nth-child(1)').should('be.visible').should('have.text','Full Name')
        cy.get('table>thead>tr>th:nth-child(2)').should('be.visible').should('have.text','Email')
        cy.get('table>thead>tr>th:nth-child(3)').should('be.visible').should('have.text','Mobile Number')
        cy.get('table>thead>tr>th:nth-child(4)').should('be.visible').should('have.text','Joined On')
        cy.get('table>thead>tr>th:nth-child(5)').should('be.visible').should('have.text','Subscription')
        cy.get('table>thead>tr>th:nth-child(6)').scrollIntoView().should('be.visible').should('have.text','Appointment')
        cy.get('table>thead>tr>th:nth-child(7)').scrollIntoView().should('be.visible').should('have.text','Action')

    })
    it('As a admin the user should be navigated to the profile details page of any patient by clicking on eye symbol against that particular patient ', ()=>{
        cy.get('tr:nth-child(1) > td:nth-child(7) > div > svg:nth-child(1) > path:nth-child(2)').scrollIntoView().should('be.visible').click({force:true})
        
    })
    it('At profile deatils page of the patient each label and field should have proper label and validations',()=>{
        cy.get('.space-x-4 > .font-bold').should('be.visible').should('have.text','Patient Details')
        cy.get('.border-primary').should('be.visible').should('have.text','Address')
        cy.get('div.space-y-4:nth-child(1)>div:nth-child(1)>div:nth-child(1)>div:nth-child(1)').should('be.visible').should('have.text','Address Line 1')
        cy.get('div.space-y-4:nth-child(1)>div:nth-child(1)>div:nth-child(2)>div:nth-child(1)').should('be.visible').should('have.text','Address Line 2')
        cy.get('div.space-y-4:nth-child(1)>div:nth-child(2)>div:nth-child(1)>div:nth-child(1)').should('be.visible').should('have.text','Postal Code')
        cy.get('div.space-y-4:nth-child(1)>div:nth-child(2)>div:nth-child(2)>div:nth-child(1)').should('be.visible').should('have.text','City')
        cy.get('div.space-y-4:nth-child(1)>div:nth-child(3)>div:nth-child(1)>div:nth-child(1)').should('be.visible').should('have.text','State')        

    })
    it('As a admin the user should be navigated back to the patients page by clicking on back symbol on profile details page',()=>{
        cy.get('.h-6 > path').should('be.visible').click()
    })
    it('As a admin the user should able to search any patient by his name or email',()=>{
        cy.get('.bg-white > .w-full').should('be.visible').type('pawan')
        cy.wait(2000)
        cy.get('.bg-white > .w-full').clear()
        cy.get('.bg-white > .w-full').should('be.visible').type('pavann@mailinator.com')
        cy.wait(2000)
        cy.get('.bg-white > .w-full').clear()
        cy.logout()

    })
})