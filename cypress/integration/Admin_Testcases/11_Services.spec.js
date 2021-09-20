///<reference types='cypress'/>
const cred=require('../../fixtures/cred.json')
 
 describe('Services module testcases',()=>{
 
    it('As a Admin the user should be navigated to the services page by clicking "Services" tab.',()=>{
        cy.login(cred.email,cred.password)
        cy.url().should('contain','/patients')
        cy.get('.space-y-4 > :nth-child(2)').should('be.visible').should('contain','Services').click()
        cy.url().should('contain','/services')

    })
    it('At Services page each label and field should have proper label and validations',()=>{
        cy.get('.text-xl').should('be.visible').should('have.text','Services List')
        cy.get('form > .bg-white').should('be.visible') 
        cy.get('.bg-white > .w-full').should('be.visible')
        cy.get('.ml-2 > .text-primary').should('be.visible')
        cy.get('.flex-wrap > .flex').should('be.visible').should('have.text','Add Service')
        cy.get('thead > tr > .text-left').should('be.visible').should('have.text','Service Name')
        cy.get('thead > tr > :nth-child(2)').should('be.visible').should('have.text','Service Description')
        cy.get('thead > tr > :nth-child(3)').should('be.visible').should('have.text','Service Category')
        cy.get('thead > tr > :nth-child(4)').should('be.visible').should('have.text','Service Type')
        cy.get('thead > tr > :nth-child(5)').should('be.visible').should('have.text','Service Rate')
        cy.get('thead > tr > :nth-child(6)').scrollIntoView().should('be.visible').should('have.text','Action')

    })
    it('As a Admin the user should get add service pop up window by clicking on "Add Service" button',()=>{
        cy.get('.flex-wrap > .flex').should('be.visible').should('have.text','Add Service').click()
  

    })
    it('At Add Service pop up window each label and field should have proper label and validations',()=>{
        cy.get('.hidden > .justify-between > .font-bold').should('be.visible').should('have.text','Add Service')
        cy.get('div:nth-child(1)>div:nth-child(2)>form>div:nth-child(1)>div:nth-child(1)>label').should('be.visible').should('have.text','Service Name')
        cy.get('div:nth-child(1)>div:nth-child(2)>form>div:nth-child(1)>div:nth-child(2)>label').should('be.visible').should('have.text','Service Rate')
        cy.get('div:nth-child(1)>div:nth-child(2)>form>div:nth-child(1)>div:nth-child(1)>div').should('be.visible') 
        cy.get('div:nth-child(1)>div:nth-child(2)>form>div:nth-child(1)>div:nth-child(2)>div').should('be.visible')
        cy.get('div:nth-child(1)>div:nth-child(2)>form>div:nth-child(2)>div:nth-child(1)>div:nth-child(1)').should('be.visible').should('have.text','Service Type')
        cy.get('div:nth-child(1)>div:nth-child(2)>form>div:nth-child(2)>div:nth-child(2)>div:nth-child(1)').should('be.visible').should('have.text','Service Category')
        cy.get('div:nth-child(1)>div:nth-child(2)>form>div:nth-child(2)>div:nth-child(1)>div:nth-child(2)').should('be.visible') 
        cy.get('div:nth-child(1)>div:nth-child(2)>form>div:nth-child(2)>div:nth-child(2)>div:nth-child(2)').should('be.visible')
        cy.get('div:nth-child(1)>div:nth-child(2)>form>div:nth-child(3)>div>label').should('be.visible').should('have.text','Service Description')
        cy.get('div:nth-child(1)>div:nth-child(2)>form>div:nth-child(3)>div>div').should('be.visible') 
        cy.get('.hidden > .mt-6 > .px-4 > .flex').should('be.visible').should('have.text','Save Details').click()
        cy.get(':nth-child(1) > :nth-child(1) > .text-red-600').should('be.visible').should('have.text','Required')
        cy.get(':nth-child(2) > .text-red-600').should('be.visible').should('have.text','Required')
        cy.get(':nth-child(2) > :nth-child(1) > .text-red-600').should('be.visible').should('have.text','Required')

    })

    it('After filling Add services form and by clicking save details button the user should able to add the service',()=>{
        cy.get('.hidden > .mt-6 > .px-4 > :nth-child(1) > :nth-child(1) > .relative > .appearance-none').should('be.visible').type('Covid Vaccine')
        cy.get('.hidden > .mt-6 > .px-4 > :nth-child(1) > :nth-child(2) > .relative > .appearance-none').should('be.visible').type('$199')
        cy.get('div:nth-child(1)>div:nth-child(2)>form>div:nth-child(2)>div:nth-child(1)>div:nth-child(2)').should('be.visible').click()
        cy.get('.css-11unzgr>div:nth-child(1)').click() 
        cy.get('div:nth-child(1)>div:nth-child(2)>form>div:nth-child(2)>div:nth-child(2)>div:nth-child(2)').should('be.visible').click()
        cy.get('.css-11unzgr>div:nth-child(1)').click() 
        cy.get('.hidden > .mt-6 > .px-4 > :nth-child(3) > div.w-full > .mt-1 > .resize-y').should('be.visible').type('Covid Vaccination Program') 
        cy.get('.hidden > .mt-6 > .px-4 > .flex').should('be.visible').should('have.text','Save Details').click()
        cy.contains('Service Added successfully')

    })

    it('The added service should reflect instantly under services page',()=>{
        cy.get(':nth-child(1) > .text-left > div > .text-gray-900').should('be.visible').should('have.text','Covid Vaccine')
        cy.get('tr:nth-child(1) > td:nth-child(2)').should('be.visible').should('have.text','Covid Vaccination Program')
        cy.get('tr:nth-child(1) > td:nth-child(3) > p').should('be.visible').should('have.text','Telemedicine')
        cy.get('tr:nth-child(1) > td:nth-child(4) > p').should('be.visible').should('have.text','MULTIPLE')
        cy.get('tr:nth-child(1) > td:nth-child(5)').should('be.visible').should('have.text','$199')
        
    })
    it('As a Admin the user should get edit service pop up window by clicking on edit icon against the particular service',()=>{
        cy.get('tr:nth-child(1) > td:nth-child(6)>div').scrollIntoView().should('be.visible').click()
         

    })
    it('At Edit Service pop up window each label and field should have proper label and validations',()=>{
        cy.get('div:nth-child(1)>div:nth-child(2)>form>div:nth-child(1)>div:nth-child(1)>label').should('be.visible').should('have.text','Service Name')
        cy.get('div:nth-child(1)>div:nth-child(2)>form>div:nth-child(1)>div:nth-child(2)>label').should('be.visible').should('have.text','Service Rate')
        cy.get('div:nth-child(1)>div:nth-child(2)>form>div:nth-child(1)>div:nth-child(1)>div').should('be.visible') 
        cy.get('div:nth-child(1)>div:nth-child(2)>form>div:nth-child(1)>div:nth-child(2)>div').should('be.visible')
        cy.get('div:nth-child(1)>div:nth-child(2)>form>div:nth-child(2)>div:nth-child(1)>div:nth-child(1)').should('be.visible').should('have.text','Service Type')
        cy.get('div:nth-child(1)>div:nth-child(2)>form>div:nth-child(2)>div:nth-child(2)>div:nth-child(1)').should('be.visible').should('have.text','Service Category')
        cy.get('div:nth-child(1)>div:nth-child(2)>form>div:nth-child(2)>div:nth-child(1)>div:nth-child(2)').should('be.visible') 
        cy.get('div:nth-child(1)>div:nth-child(2)>form>div:nth-child(2)>div:nth-child(2)>div:nth-child(2)').should('be.visible')
        cy.get('div:nth-child(1)>div:nth-child(2)>form>div:nth-child(3)>div>label').should('be.visible').should('have.text','Service Description')
        cy.get('div:nth-child(1)>div:nth-child(2)>form>div:nth-child(3)>div>div').should('be.visible') 
        cy.get('.hidden > .mt-6 > .px-4 > .flex').should('be.visible').should('have.text','Save Details')  

    })
    it('After doing necessary edits on the edit service form and by clicking save details button the user should able to update the service',()=>{
        cy.get('.hidden > .mt-6 > .px-4 > :nth-child(1) > :nth-child(1) > .relative > .appearance-none').should('be.visible').clear().type('Covid Vaccine Pfizer')
        cy.get('.hidden > .mt-6 > .px-4 > :nth-child(1) > :nth-child(2) > .relative > .appearance-none').should('be.visible').clear().type('$299')
        cy.get('div:nth-child(1)>div:nth-child(2)>form>div:nth-child(2)>div:nth-child(1)>div:nth-child(2)').should('be.visible').click()
        cy.get('.css-11unzgr>div:nth-child(2)').click() 
        cy.get('div:nth-child(1)>div:nth-child(2)>form>div:nth-child(2)>div:nth-child(2)>div:nth-child(2)').should('be.visible').click()
        cy.get('.css-11unzgr>div:nth-child(3)').click() 
        cy.get('.hidden > .mt-6 > .px-4 > :nth-child(3) > div.w-full > .mt-1 > .resize-y').should('be.visible').clear().type('New Covid Vaccination Program') 
        cy.get('.hidden > .mt-6 > .px-4 > .flex').should('be.visible').should('have.text','Save Details').click()
        cy.contains('Service Updated successfully')  

    })
    it('The edited details should reflect instantly under services page',()=>{
        cy.get(':nth-child(1) > .text-left > div > .text-gray-900').should('be.visible').should('have.text','Covid Vaccine Pfizer')
        cy.get('tr:nth-child(1) > td:nth-child(2)').should('be.visible').should('have.text','New Covid Vaccination Program')
        cy.get('tr:nth-child(1) > td:nth-child(3) > p').should('be.visible').should('have.text','In Home Covid Testing')
        cy.get('tr:nth-child(1) > td:nth-child(4) > p').should('be.visible').should('have.text','SINGLE')
        cy.get('tr:nth-child(1) > td:nth-child(5)').should('be.visible').should('have.text','$299') 

    })
    it('As a Admin the user can able to switch between the  services pages by using next or previous buttons',()=>{
        cy.get('.flex-1 > .ml-3').should('be.visible').should('be.visible').should('have.text','Next').click()
        cy.wait(2000)
        cy.get('.px-4 > .flex-1 > :nth-child(1)').should('be.visible').should('have.text','Previous').click()          

    })
    it('As a Admin the user can able to search a particular service through search box',()=>{
        cy.get('.bg-white > .w-full').should('be.visible').type('Executive Physical')
        cy.wait(2000)
        cy.get(':nth-child(1) > .text-left > div > .text-gray-900').should('be.visible').should('have.text','Executive Physical')
        cy.get('tr:nth-child(1) > td:nth-child(2)').should('be.visible').should('contain','Identify risk factors and prevent future illness')
        cy.get('tr:nth-child(1) > td:nth-child(3) > p').should('be.visible').should('have.text','In Home Urgent Care')
        cy.get('tr:nth-child(1) > td:nth-child(4) > p').should('be.visible').should('have.text','SINGLE')
        cy.get('tr:nth-child(1) > td:nth-child(5)').should('be.visible').should('have.text','$1800') 
        cy.logout()
    })
    

})