///<reference types='cypress'/>
const cred=require('../../fixtures/cred.json')
import faker from 'faker'

 describe('Provider Services module testcases',()=>{
 //provider services Listing
    it('As a Admin the user should be navigated to the Provider services page by clicking "Patient Services" tab.',()=>{
        cy.login(cred.email,cred.password)
        cy.url().should('contain','/dashboard')
        cy.get('.space-y-4 > :nth-child(7)').should('be.visible').should('contain','Provider Services').click()
        cy.url().should('contain','/provider_services')

    })
    it('At Patient Services page each label and field should have proper label and validations',()=>{
        cy.get('.text-xl').should('be.visible').should('have.text','Provider Services List')
        cy.get('[type=search]').should('be.visible').invoke('attr','placeholder').should('contain','Search Services')
        cy.get('[textid="admin.dx.codes"]').should('be.visible').should('have.text','DX-Codes')
        cy.get('[textid="inactive.service"]').should('be.visible').should('have.text','Inactive Services')
        cy.get('[textid="add.service"]').should('be.visible').should('have.text','Add Service')
        cy.get('thead > tr > :nth-child(1)').should('be.visible').should('have.text','Service Name')
        cy.get('thead > tr > :nth-child(2)').should('be.visible').should('have.text','CPT Code')
        cy.get('thead > tr > :nth-child(3)').should('be.visible').should('have.text','Service Category')
        cy.get('thead > tr > :nth-child(4)').should('be.visible').should('have.text','Service Rate')
        cy.get('thead > tr > :nth-child(5)').should('be.visible').should('have.text','Status')
        cy.get('thead > tr > :nth-child(6)').scrollIntoView().should('be.visible').should('have.text','Action')
        cy.get('.mt-1:nth-child(2)').should('be.visible').should('have.text','Next')


    })
    //Add Service
    it('As a Admin the user should get add service pop up window by clicking on "Add Service" button',()=>{
        cy.get('[textid="add.service"]').should('be.visible').should('have.text','Add Service').click()
        cy.get('.ReactModal__Content').should('be.visible')
        cy.get('.hidden > .justify-between > .font-bold').should('be.visible').should('have.text','Add Service')



    })
    it('At Add Service pop up window each label and field should have proper label and validations',()=>{
        cy.get('.hidden > .justify-between > .font-bold').should('be.visible').should('have.text','Add Service')
        cy.get('div.hidden>div:nth-child(2)>form>div:nth-child(1)>div:nth-child(1)>div:nth-child(1)').should('be.visible').should('have.text','Service Category')
        cy.get('div.hidden>div:nth-child(2)>form>div:nth-child(1)>div:nth-child(2)>label').should('be.visible').should('have.text','CPT Code')
        cy.get('div.hidden>div:nth-child(2)>form>div:nth-child(1)>div:nth-child(1)>div:nth-child(2)').should('be.visible') 
        cy.get('div.hidden>div:nth-child(2)>form>div:nth-child(1)>div:nth-child(2)>div').should('be.visible')
        cy.get('div.hidden>div:nth-child(2)>form>div:nth-child(2)>div:nth-child(1)>label').should('be.visible').should('have.text','Service Name')
        cy.get('div.hidden>div:nth-child(2)>form>div:nth-child(2)>div:nth-child(2)>label').should('be.visible').should('have.text','Service Rate')
        cy.get('div.hidden>div:nth-child(2)>form>div:nth-child(2)>div:nth-child(1)>div').should('be.visible') 
        cy.get('div.hidden>div:nth-child(2)>form>div:nth-child(2)>div:nth-child(2)>div').should('be.visible')
        cy.get('div.hidden>div:nth-child(2)>form>button').should('be.visible').should('contain','Save Details').click()
        cy.wait(4000)
        cy.get(':nth-child(1) > :nth-child(1) > .text-red-600').should('be.visible').should('have.text','Required')
        cy.get(':nth-child(1) > :nth-child(2) > .text-red-600').should('be.visible').should('have.text','Required')
        cy.get(':nth-child(2) > :nth-child(1) > .text-red-600').should('be.visible').should('have.text','Required')
        cy.get(':nth-child(2) > :nth-child(2) > .text-red-600').should('be.visible').should('have.text','Required')


    })

    it('After filling Add services form and by clicking save details button the user should able to add the service',()=>{

        cy.get('div.hidden>div:nth-child(2)>form>div:nth-child(1)>div:nth-child(1)>div:nth-child(2)').should('be.visible').click()
        cy.get('.css-11unzgr>div:nth-child(1)').click() 
        cy.get('div.hidden>div:nth-child(2)>form>div:nth-child(1)>div:nth-child(2)>div:nth-child(2)').should('be.visible').type('35242')
        cy.get('div.hidden>div:nth-child(2)>form>div:nth-child(2)>div:nth-child(1)>div:nth-child(2)').should('be.visible').type('Rapid Test')
        cy.get('div.hidden>div:nth-child(2)>form>div:nth-child(2)>div:nth-child(2)>div:nth-child(2)').should('be.visible').type('199')
        cy.get('div.hidden>div:nth-child(2)>form>button').should('be.visible').should('contain','Save Details').click()
        cy.contains('Provider Service Added successfully')
        cy.wait(4000)

    })

    it('The added service should reflect instantly under services page',()=>{
        cy.get('tr:nth-child(1) > td:nth-child(1)').should('be.visible').should('have.text','Rapid Test')
        cy.get('tr:nth-child(1) > td:nth-child(2)').should('be.visible').should('have.text','35242')
        cy.get('tr:nth-child(1) > td:nth-child(3) > p').should('be.visible').should('have.text','IV Fluids')
        cy.get('tr:nth-child(1) > td:nth-child(4)').should('be.visible').should('have.text','$199')
        
    })
//Search service
    it('As a Admin the user can able to search a particular service through search box',()=>{
        cy.get('[type=search]').should('be.visible').type('Rapid Test')
        cy.wait(4000)
        cy.get('tr:nth-child(1) > td:nth-child(1)').should('be.visible').should('have.text','Rapid Test')
        cy.get('[type=search]').should('be.visible').clear()
        cy.wait(4000)


         

    })
//Edit service
    it('As a Admin the user should get Update service pop up window by clicking on edit icon against the particular service',()=>{
        cy.get('tr:nth-child(1) > td:nth-child(6)>div>span').scrollIntoView().should('be.visible').click()
        cy.wait(2000)
        cy.get('.hidden > .justify-between > .font-bold').should('be.visible').should('have.text','Update Service')



         

    })
    it('At Update Service pop up window each label and field should have proper label and validations',()=>{
        cy.get('.hidden > .justify-between > .font-bold').should('be.visible').should('have.text','Update Service')
        cy.get('div.hidden>div:nth-child(2)>form>div:nth-child(1)>div:nth-child(1)>div:nth-child(1)').should('be.visible').should('have.text','Service Category')
        cy.get('div.hidden>div:nth-child(2)>form>div:nth-child(1)>div:nth-child(2)>label').should('be.visible').should('have.text','CPT Code')
        cy.get('div.hidden>div:nth-child(2)>form>div:nth-child(1)>div:nth-child(1)>div:nth-child(2)').should('be.visible') 
        cy.get('div.hidden>div:nth-child(2)>form>div:nth-child(1)>div:nth-child(2)>div').should('be.visible')
        cy.get('div.hidden>div:nth-child(2)>form>div:nth-child(2)>div:nth-child(1)>label').should('be.visible').should('have.text','Service Name')
        cy.get('div.hidden>div:nth-child(2)>form>div:nth-child(2)>div:nth-child(2)>label').should('be.visible').should('have.text','Service Rate')
        cy.get('div.hidden>div:nth-child(2)>form>div:nth-child(2)>div:nth-child(1)>div').should('be.visible') 
        cy.get('div.hidden>div:nth-child(2)>form>div:nth-child(2)>div:nth-child(2)>div').should('be.visible')
        cy.get('div.hidden>div:nth-child(2)>form>button').should('be.visible').should('contain','Save Details')
        cy.wait(4000)

    })
    it('After doing necessary edits on the edit service form and by clicking save details button the user should able to update the service',()=>{
        cy.get('div.hidden>div:nth-child(2)>form>div:nth-child(1)>div:nth-child(1)>div:nth-child(2)').should('be.visible').click()
        cy.get('.css-11unzgr>div:nth-child(4)').click() 
        cy.get('div.hidden>div:nth-child(2)>form>div:nth-child(1)>div:nth-child(2)>div:nth-child(2)').should('be.visible').clear().type('54456')
        cy.get('div.hidden>div:nth-child(2)>form>div:nth-child(2)>div:nth-child(1)>div:nth-child(2)').should('be.visible').clear().type(' Covid Rapid Test')
        cy.get('div.hidden>div:nth-child(2)>form>div:nth-child(2)>div:nth-child(2)>div:nth-child(2)').should('be.visible').clear().type('299')
        cy.get('div.hidden>div:nth-child(2)>form>button').should('be.visible').should('contain','Save Details').click()
        cy.contains('Provider Service Updated successfully')
        cy.wait(4000)


    })
    it('The edited details should reflect instantly under services page',()=>{
        cy.get('tr:nth-child(1) > td:nth-child(1)').should('be.visible').should('contain','Covid Rapid Test')
        cy.get('tr:nth-child(1) > td:nth-child(2)').should('be.visible').should('have.text','54456')
        cy.get('tr:nth-child(1) > td:nth-child(3) > p').should('be.visible').should('have.text','POC Diagnostics')
        cy.get('tr:nth-child(1) > td:nth-child(4)').should('be.visible').should('have.text','$299')

    })
    it('As a Admin the user can able to switch between the  services pages by using next or previous buttons',()=>{
        cy.get('.mt-1:nth-child(2)').should('be.visible').scrollIntoView().should('have.text','Next').click()
        cy.wait(5000)
        cy.get('.mt-1:nth-child(1)').should('be.visible').scrollIntoView().should('have.text','Previous').click()

    })
    //Disable service
    it('As a Admin the user can disable any service with the help of toggle button against that particular service',()=>{
        cy.get('tr:nth-child(1)>td:nth-child(5)>button').scrollIntoView().should('be.visible').click()
        cy.wait(2000)
        cy.get('div.hidden>div:nth-child(2)>div:nth-child(2)>button').click()
        cy.wait(2000)
        cy.contains('Service Updated successfully')  
        cy.wait(4000)
    })

    it('The service disabled should be moved to the inactive services page.',()=>{
        cy.get('[textid="inactive.service"]').should('be.visible').should('have.text','Inactive Services').click()
        cy.wait(4000)
        cy.get('tr:nth-child(1) > td:nth-child(1)').should('be.visible').should('contain','Covid Rapid Test')
        cy.wait(2000)
        cy.get('div.flex.flex-wrap:nth-child(1)>div:nth-child(1)>svg').should('be.visible').click()
        cy.wait(4000)

    })
//Inactive services
    it('As a Admin the user should be navigated to the Provider inactive services page by clicking on the "inactive services" button.',()=>{
        cy.get('[textid="inactive.service"]').should('be.visible').should('have.text','Inactive Services').click()
        cy.wait(4000)
        cy.get('div.flex.flex-wrap:nth-child(1)>div:nth-child(1)>div').should('be.visible').should('have.text','Provider Inactive Services')
    })

    it('At Patient inactive Services page each label and field should have proper label and validations',()=>{
        cy.get('div.flex.flex-wrap:nth-child(1)>div:nth-child(1)>div').should('be.visible').should('have.text','Provider Inactive Services')
        cy.get('[type=search]').should('be.visible').invoke('attr','placeholder').should('contain','Search Services')
        cy.get('thead > tr > :nth-child(1)').should('be.visible').should('have.text','Service Name')
        cy.get('thead > tr > :nth-child(2)').should('be.visible').should('have.text','CPT Code')
        cy.get('thead > tr > :nth-child(3)').should('be.visible').should('have.text','Service Category')
        cy.get('thead > tr > :nth-child(4)').should('be.visible').should('have.text','Service Rate')
        cy.get('thead > tr > :nth-child(5)').should('be.visible').should('have.text','Status')
        cy.get('thead > tr > :nth-child(6)').scrollIntoView().should('be.visible').should('have.text','Action')

    })
//Search Inactive services
    it('As a Admin the user can able to search a particular inactive service through search box',()=>{
        cy.get('[type=search]').should('be.visible').type('Covid Rapid Test')
        cy.wait(2000)
        cy.get('tr:nth-child(1) > td:nth-child(1)').should('be.visible').should('contain','Covid Rapid Test')
        cy.wait(2000)
        cy.get('[type=search]').should('be.visible').clear()
        cy.wait(2000)

    })
//Delete Inactive service
    it('As a Admin the user can delete any active service by clicking on the delete icon against that service.',()=>{
        cy.get('tr:nth-child(1)>td:nth-child(6)>div>span').scrollIntoView().should('be.visible').click()
        cy.wait(2000)
        cy.get('div.hidden>div:nth-child(2)>div:nth-child(2)>button').click()
        cy.wait(4000)
        cy.get('div.flex.flex-wrap:nth-child(1)>div:nth-child(1)>svg').should('be.visible').click()
    })
//DX-Codes&Symptoms
    it('As a Admin the user should be navigated to the "DX-Codes&Symptoms" page by clicking on the "DX-Codes" button.',()=>{
        cy.get('[textid="admin.dx.codes"]').should('be.visible').should('have.text','DX-Codes').click()
        cy.wait(4000)
        cy.get('div.flex.flex-wrap:nth-child(1)>div:nth-child(1)>div').should('be.visible').should('have.text','DX-Codes & Symptoms')

    })

    it('At "DX-Codes&Symptoms" page each label and field should have proper label and validations',()=>{
        cy.get('div.flex.flex-wrap:nth-child(1)>div:nth-child(1)>div').should('be.visible').should('have.text','DX-Codes & Symptoms')
        cy.get('div.flex.flex-wrap:nth-child(1)>div:nth-child(1)>svg').should('be.visible')
        cy.get('[textid="admin.add.dx.codes"]').should('be.visible').should('have.text','Add DX-Code')
        cy.get('[type=search]').should('be.visible').invoke('attr','placeholder').should('contain','Search by DX-code or Symptoms...')
        cy.get('thead > tr > :nth-child(1)').should('be.visible').should('have.text','DX-Codes')
        cy.get('thead > tr > :nth-child(2)').should('be.visible').should('have.text','Symptoms')
        cy.get('thead > tr > :nth-child(3)').should('be.visible').should('have.text','Action')

    })

    //Add DX-Code
    it('As a Admin the user should get add DX-Code pop up window by clicking on "Add Service" button',()=>{
        cy.get('[textid="admin.add.dx.codes"]').should('be.visible').should('have.text','Add DX-Code').click()
        cy.get('.ReactModal__Content').should('be.visible')
        cy.get('.hidden > .justify-between > .font-bold').should('be.visible').should('have.text','Add Service')


    })

    it('At Add DX-Code pop up window each label and field should have proper label and validations',()=>{
        cy.get('.hidden > .justify-between > .font-bold').should('be.visible').should('have.text','Add Service')
        cy.get('div.hidden>div:nth-child(2)>form>div:nth-child(1)>div:nth-child(1)>div>label').should('be.visible').should('have.text','DX-Code')
        cy.get('div.hidden>div:nth-child(2)>form>div:nth-child(1)>div:nth-child(2)>div>label').should('be.visible').should('have.text','Symptom')
        cy.get('div.hidden>div:nth-child(2)>form>div:nth-child(1)>div:nth-child(1)>div>div').should('be.visible') 
        cy.get('div.hidden>div:nth-child(2)>form>div:nth-child(1)>div:nth-child(2)>div>div').should('be.visible')
        cy.get('div.hidden>div:nth-child(2)>form>button').should('be.visible').should('contain','Save Details').click()
        cy.wait(4000)
        cy.get(':nth-child(1) > :nth-child(1) > .text-red-600').should('be.visible').should('have.text','Required')
        cy.get(':nth-child(2) > :nth-child(1) > .text-red-600').should('be.visible').should('have.text','Required')


    })

    it('After filling Add DX-Code form and by clicking save details button the user should able to add the DX-Code',()=>{

        cy.get('div.hidden>div:nth-child(2)>form>div:nth-child(1)>div:nth-child(1)>div>div:nth-child(2)').should('be.visible').type('R10.2 Pelvic and perineal pain')
        cy.get('div.hidden>div:nth-child(2)>form>div:nth-child(1)>div:nth-child(2)>div>div:nth-child(2)').should('be.visible').type('Abdominal pain')
        cy.get('div.hidden>div:nth-child(2)>form>button').should('be.visible').should('contain','Save Details').click()
        cy.contains('DX Code Added successfully')
        cy.wait(4000)

    })

    it('The added DX-Code should reflect instantly under "DX-Codes&Symptoms" page',()=>{
        cy.get('[type=search]').should('be.visible').type('R10.2 Pelvic and perineal pain')
        cy.get('tr:nth-child(1) > td:nth-child(1)').should('be.visible').should('have.text','R10.2 Pelvic and perineal pain')
        cy.get('tr:nth-child(1) > td:nth-child(2)').should('be.visible').should('have.text','Abdominal pain')
        
    })
//Search DX-Code
    it('As a Admin the user can able to search a particular DX-Code or Symptom through search box',()=>{
        cy.get('[type=search]').should('be.visible').clear().type('R10.2 Pelvic and perineal pain')
        cy.wait(4000)
        cy.get('tr:nth-child(1) > td:nth-child(1)').should('be.visible').should('have.text','R10.2 Pelvic and perineal pain')
        cy.wait(2000)
        cy.get('[type=search]').should('be.visible').clear().type('Abdominal pain')
        cy.wait(4000)
        cy.get('tr:nth-child(1) > td:nth-child(2)').should('be.visible').should('have.text','Abdominal pain')
        cy.get('[type=search]').should('be.visible').clear()
        cy.wait(4000)
    })

    //Edit DX-Code
    it('As a Admin the user should get Update service pop up window by clicking on edit icon against the particular service',()=>{
        cy.get('tr:nth-child(1) > td:nth-child(3)>div>span:nth-child(1)').scrollIntoView().should('be.visible').click()
        cy.wait(2000)
        cy.get('.hidden > .justify-between > .font-bold').should('be.visible').should('have.text','Update Service')   

    })
    it('At Edit DX-Code pop up window each label and field should have proper label and validations',()=>{
        cy.get('.hidden > .justify-between > .font-bold').should('be.visible').should('have.text','Update Service')
        cy.get('div.hidden>div:nth-child(2)>form>div:nth-child(1)>div:nth-child(1)>div>label').should('be.visible').should('have.text','DX-Code')
        cy.get('div.hidden>div:nth-child(2)>form>div:nth-child(1)>div:nth-child(2)>div>label').should('be.visible').should('have.text','Symptom')
        cy.get('div.hidden>div:nth-child(2)>form>div:nth-child(1)>div:nth-child(1)>div>div').should('be.visible') 
        cy.get('div.hidden>div:nth-child(2)>form>div:nth-child(1)>div:nth-child(2)>div>div').should('be.visible')
        cy.get('div.hidden>div:nth-child(2)>form>button').should('be.visible').should('contain','Save Details')
        cy.wait(4000)

    })
    it('After doing necessary edits on the edit DX-Code form and by clicking save details button the user should able to update the DX-Code',()=>{
        cy.get('div.hidden>div:nth-child(2)>form>div:nth-child(1)>div:nth-child(1)>div>div').should('be.visible').clear().type('R10.32 Left lower quadrant pain')
        cy.get('div.hidden>div:nth-child(2)>form>div:nth-child(1)>div:nth-child(2)>div>div').should('be.visible').clear().type('Chest pain')
        cy.get('div.hidden>div:nth-child(2)>form>button').should('be.visible').should('contain','Save Details').click()
        cy.contains('DX Code Updated successfully')
        cy.wait(4000)


    })
    it('The edited details should reflect instantly under DX-Codes&Symptoms page',()=>{
        cy.get('[type=search]').should('be.visible').type('R10.32 Left lower quadrant pain')
        cy.wait(4000)
        cy.get('tr:nth-child(1) > td:nth-child(1)').should('be.visible').should('have.text','R10.32 Left lower quadrant pain')
        cy.get('tr:nth-child(1) > td:nth-child(2)').should('be.visible').should('have.text','Chest pain')

    })

    //Delete DX-Code
    it('As a Admin the user can delete any DX-Code by clicking on the delete icon against that DX-Code.',()=>{
        cy.get('tr:nth-child(1) > td:nth-child(3)>div>span:nth-child(2)').scrollIntoView().should('be.visible').click()
        cy.wait(2000)
        cy.get('div.hidden>div:nth-child(2)>div:nth-child(2)>button').click()
        cy.wait(4000)
    })

    it('As a Admin the user can able to switch between the  DX-Codes&Symptoms pages by using next or previous buttons',()=>{
        cy.get('[type=search]').should('be.visible').clear()
        cy.wait(4000)
        cy.get('.mt-1:nth-child(2)').should('be.visible').scrollIntoView().should('have.text','Next').click()
        cy.wait(5000)
        cy.get('.mt-1:nth-child(1)').should('be.visible').scrollIntoView().should('have.text','Previous').click()
        cy.logout()

    })
    

    

})