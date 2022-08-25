///<reference types='cypress'/>
const cred=require('../../fixtures/cred.json')
 
 describe('Patient Services module testcases',()=>{
 //patient services Listing
    it('As a Admin the user should be navigated to the Patient services page by clicking "Patient Services" tab.',()=>{
        cy.login(cred.email,cred.password)
        cy.url().should('contain','/dashboard')
        cy.get('.space-y-4 > :nth-child(6)').should('be.visible').should('contain','Patient Services').click()
        cy.url().should('contain','/services')

    })
    it('At Patient Services page each label and field should have proper label and validations',()=>{
        cy.get('.text-xl').should('be.visible').should('have.text','Patient Services List')
        cy.get('[type=search]').should('be.visible').invoke('attr','placeholder').should('contain','Search Services')
        cy.get('[textid="inactive.service"]').should('be.visible').should('have.text','Inactive Services')
        cy.get('[textid="add.service"]').should('be.visible').should('have.text','Add Service')
        cy.get('thead > tr > :nth-child(1)').should('be.visible').should('have.text','Service Name')
        cy.get('thead > tr > :nth-child(2)').should('be.visible').should('have.text','Service Description')
        cy.get('thead > tr > :nth-child(3)').should('be.visible').should('have.text','Service Category')
        cy.get('thead > tr > :nth-child(4)').should('be.visible').should('have.text','Service Type')
        cy.get('thead > tr > :nth-child(5)').should('be.visible').should('have.text','Service Rate')
        cy.get('thead > tr > :nth-child(6)').should('be.visible').should('have.text','Status')
        cy.get('thead > tr > :nth-child(7)').scrollIntoView().should('be.visible').should('have.text','Action')
        cy.get('.mt-1:nth-child(2)').should('be.visible').should('have.text','Next')


    })
    //Add Service
    it('As a Admin the user should get add service pop up window by clicking on "Add Service" button',()=>{
        cy.get('[textid="add.service"]').should('be.visible').should('have.text','Add Service').click()
        cy.xpath('//div[1]/h3/div/div').should('be.visible').should('have.text','Add Service')
        cy.get('div.hidden>h3>div>svg').should('be.visible')



    })
    it('At Add Service pop up window each label and field should have proper label and validations',()=>{
        cy.xpath('//div[1]/h3/div/div').should('be.visible').should('have.text','Add Service')
        cy.get('div.hidden>h3>div>svg').should('be.visible')

        cy.xpath('//div[1]/form[1]/div[1]/div[1]/label').should('be.visible').should('have.text','Service Name')
        cy.xpath('//div[1]/form[1]/div[1]/div[2]/label').should('be.visible').should('have.text','Service Rate')

        cy.xpath('//div[1]/form[1]/div[1]/div[1]/div[1]').should('be.visible') 
        cy.xpath('//div[1]/form[1]/div[1]/div[2]/div').should('be.visible')

        cy.xpath('//div[1]/form[1]/div[2]/div[1]/div[1]').should('be.visible').should('have.text','Service Type')
        cy.xpath('//div[1]/form[1]/div[2]/div[2]/div[1]').should('be.visible').should('have.text','Service Category')

        cy.xpath('//div[1]/form[1]/div[2]/div[1]/div[2]').should('be.visible') 
        cy.xpath('//div[1]/form[1]/div[2]/div[2]/div[2]').should('be.visible')

        cy.xpath('//div[1]/form[1]/div[3]/div/label').should('be.visible').should('have.text','Service Description')
        cy.xpath('//div[1]/form[1]/div[3]/div/div').should('be.visible') 

        cy.xpath('//div[1]/form[1]/button').should('be.visible').should('contain','Save Details').click()
        cy.wait(4000)

        cy.xpath('//div[1]/form[1]/div[1]/div[1]/div[2]').should('be.visible').should('have.text','Required')
        cy.xpath('//div[1]/form[1]/div[1]/div[2]/div[2]').should('have.text','Required')

        cy.xpath('//div[1]/form[1]/div[2]/div[1]/div[3]').should('be.visible').should('have.text','Required')
        cy.xpath('//div[1]/form[1]/div[2]/div[2]/div[3]').should('be.visible').should('have.text','Required')


    })

    it('After filling Add services form and by clicking save details button the user should able to add the service',()=>{
        cy.xpath('//div[1]/form[1]/div[1]/div[1]/div[1]').should('be.visible').type('Covid Vaccine')

        cy.xpath('//div[1]/form[1]/div[1]/div[2]/div[1]').should('be.visible').type('199')

        cy.xpath('//div[1]/form[1]/div[2]/div[1]/div[2]').should('be.visible').click()
        cy.get('.css-11unzgr>div:nth-child(1)').click()

        cy.xpath('//div[1]/form[1]/div[2]/div[2]/div[2]').should('be.visible').click()
        cy.get('.css-11unzgr>div:nth-child(1)').click()

        cy.xpath('//div[1]/form[1]/div[3]/div/div[1]').should('be.visible').type('Covid Vaccination Program')

        cy.xpath('//div[1]/form[1]/button').should('be.visible').should('contain','Save Details').click()
        cy.contains('Service Added successfully')
        cy.wait(4000)

    })

    it('The added service should reflect instantly under services page',()=>{
        cy.get('tr:nth-child(1) > td:nth-child(1)').should('be.visible').should('have.text','Covid Vaccine')
        cy.get('tr:nth-child(1) > td:nth-child(2)').should('be.visible').should('have.text','Covid Vaccination Program')
        cy.get('tr:nth-child(1) > td:nth-child(3) > p').should('be.visible').should('have.text','Telemedicine')
        cy.get('tr:nth-child(1) > td:nth-child(4) > p').should('be.visible').should('have.text','MULTIPLE')
        cy.get('tr:nth-child(1) > td:nth-child(5)').should('be.visible').should('have.text','$199')
        
    })
//Search service
    it('As a Admin the user can able to search a particular service through search box',()=>{
        cy.get('[type=search]').should('be.visible').type('Covid Vaccine')
        cy.wait(4000)
        cy.get('tr:nth-child(1) > td:nth-child(1)').should('be.visible').should('have.text','Covid Vaccine')
        cy.get('[type=search]').should('be.visible').clear()
        cy.wait(4000)


         

    })
//Edit service
    it('As a Admin the user should get Update service pop up window by clicking on edit icon against the particular service',()=>{
        cy.get('tr:nth-child(1) > td:nth-child(7)>div>span').scrollIntoView().should('be.visible').click()
        cy.xpath('//div[1]/h3/div/div').should('be.visible').should('have.text','Update Service')



         

    })
    it('At Update Service pop up window each label and field should have proper label and validations',()=>{
        cy.xpath('//div[1]/h3/div/div').should('be.visible').should('have.text','Update Service')
        cy.get('div.hidden>h3>div>svg').should('be.visible')

        cy.xpath('//div[1]/form[1]/div[1]/div[1]/label').should('be.visible').should('have.text','Service Name')
        cy.xpath('//div[1]/form[1]/div[1]/div[2]/label').should('be.visible').should('have.text','Service Rate')

        cy.xpath('//div[1]/form[1]/div[1]/div[1]/div[1]').should('be.visible') 
        cy.xpath('//div[1]/form[1]/div[1]/div[2]/div').should('be.visible')

        cy.xpath('//div[1]/form[1]/div[2]/div[1]/div[1]').should('be.visible').should('have.text','Service Type')
        cy.xpath('//div[1]/form[1]/div[2]/div[2]/div[1]').should('be.visible').should('have.text','Service Category')

        cy.xpath('//div[1]/form[1]/div[2]/div[1]/div[2]').should('be.visible') 
        cy.xpath('//div[1]/form[1]/div[2]/div[2]/div[2]').should('be.visible')

        cy.xpath('//div[1]/form[1]/div[3]/div/label').should('be.visible').should('have.text','Service Description')
        cy.xpath('//div[1]/form[1]/div[3]/div/div').should('be.visible') 

        cy.xpath('//div[1]/form[1]/button').should('be.visible').should('contain','Save Details')

    })
    it('After doing necessary edits on the edit service form and by clicking save details button the user should able to update the service',()=>{
        cy.xpath('//div[1]/form[1]/div[1]/div[1]/div[1]').should('be.visible').clear().type('Covid Vaccine Pfizer')

        cy.xpath('//div[1]/form[1]/div[1]/div[2]/div').should('be.visible').clear().type('299')

        cy.xpath('//div[1]/form[1]/div[2]/div[1]/div[2]').should('be.visible').click()
        cy.get('.css-11unzgr>div:nth-child(2)').click() 

        cy.xpath('//div[1]/form[1]/div[2]/div[2]/div[2]').should('be.visible').click()
        cy.get('.css-11unzgr>div:nth-child(3)').click() 

        cy.xpath('//div[1]/form[1]/div[3]/div/div').should('be.visible').clear().type('Covid Vaccination Program') 

        cy.xpath('//div[1]/form[1]/button').should('be.visible').should('contain','Save Details').click()
        cy.contains('Service Updated successfully')  
        cy.wait(4000)


    })
    it('The edited details should reflect instantly under services page',()=>{
        cy.get('tr:nth-child(1) > td:nth-child(1)').should('be.visible').should('have.text','Covid Vaccine Pfizer')
        cy.get('tr:nth-child(1) > td:nth-child(2)').should('be.visible').should('have.text','Covid Vaccination Program')
        cy.get('tr:nth-child(1) > td:nth-child(3) > p').should('be.visible').should('have.text','In Home Covid Testing')
        cy.get('tr:nth-child(1) > td:nth-child(4) > p').should('be.visible').should('have.text','SINGLE')
        cy.get('tr:nth-child(1) > td:nth-child(5)').should('be.visible').should('have.text','$299') 

    })
    it('As a Admin the user can able to switch between the  services pages by using next or previous buttons',()=>{
        cy.get('.mt-1:nth-child(2)').should('be.visible').scrollIntoView().should('have.text','Next').click()
        cy.wait(5000)
        cy.get('.mt-1:nth-child(1)').should('be.visible').scrollIntoView().should('have.text','Previous').click()

    })
    //Disable service
    it('As a Admin the user can disable any service with the help of toggle button against that particular service',()=>{
        cy.get('tr:nth-child(1)>td:nth-child(6)>button').scrollIntoView().should('be.visible').click()
        cy.wait(2000)
        cy.xpath('//div[1]/div[2]/button[1]').should('be.visible').should('have.text','Confirm').click()
        cy.wait(2000)
        cy.contains('Service Updated successfully')  
        cy.wait(4000)
    })

    it('The service disabled should be moved to the inactive services page.',()=>{
        cy.get('[textid="inactive.service"]').should('be.visible').should('have.text','Inactive Services').click()
        cy.wait(4000)
        cy.get('tr:nth-child(1) > td:nth-child(1)').should('be.visible').should('have.text','Covid Vaccine Pfizer')
        cy.wait(2000)
        cy.xpath('//div[2]/div[3]/div[1]/*[1]').scrollIntoView().should('be.visible').click()
        cy.wait(4000)

    })
//Inactive services
    it('As a Admin the user should be navigated to the Patient inactive services page by clicking on the "inactive services" button.',()=>{
        cy.get('[textid="inactive.service"]').should('be.visible').should('have.text','Inactive Services').click()
        cy.wait(4000)
        cy.xpath('//div[contains(text(),"Patient I")]').should('be.visible').should('have.text','Patient Inactive Services')
    })

    it('At Patient inactive Services page each label and field should have proper label and validations',()=>{
        cy.xpath('//div[contains(text(),"Patient I")]').should('be.visible').should('have.text','Patient Inactive Services')
        cy.get('[type=search]').should('be.visible').invoke('attr','placeholder').should('contain','Search Services')
        cy.get('thead > tr > :nth-child(1)').should('be.visible').should('have.text','Service Name')
        cy.get('thead > tr > :nth-child(2)').should('be.visible').should('have.text','Service Description')
        cy.get('thead > tr > :nth-child(3)').should('be.visible').should('have.text','Service Category')
        cy.get('thead > tr > :nth-child(4)').should('be.visible').should('have.text','Service Type')
        cy.get('thead > tr > :nth-child(5)').should('be.visible').should('have.text','Service Rate')
        cy.get('thead > tr > :nth-child(6)').should('be.visible').should('have.text','Status')
        cy.get('thead > tr > :nth-child(7)').scrollIntoView().should('be.visible').should('have.text','Action')

    })
//Search Inactive services
    it('As a Admin the user can able to search a particular inactive service through search box',()=>{
        cy.get('[type=search]').should('be.visible').type('Covid Vaccine')
        cy.wait(2000)
        cy.get('tr:nth-child(1) > td:nth-child(1)').should('be.visible').should('have.text','Covid Vaccine Pfizer')
        cy.wait(2000)
        cy.get('[type=search]').should('be.visible').clear()
        cy.wait(2000)

    })
//Enable Inactive services
    it('As a Admin the user can enable any service with the help of toggle button against that particular service',()=>{
        cy.get('tr:nth-child(1)>td:nth-child(6)>button').scrollIntoView().should('be.visible').click()
        cy.wait(2000)
        cy.xpath('//div[1]/div[2]/button[1]').should('be.visible').should('have.text','Confirm').click()
        cy.wait(2000)
        cy.contains('Service Updated successfully')  
        cy.wait(4000)
        cy.xpath('//div[2]/div[3]/div[1]/*[1]').scrollIntoView().should('be.visible').click()
        cy.wait(4000)
        cy.get('tr:nth-child(1)>td:nth-child(6)>button').scrollIntoView().should('be.visible').click()
        cy.wait(2000)
        cy.xpath('//div[1]/div[2]/button[1]').should('be.visible').should('have.text','Confirm').click()
        cy.wait(2000)
        cy.contains('Service Updated successfully')  
        cy.wait(4000)
        cy.get('[textid="inactive.service"]').should('be.visible').should('have.text','Inactive Services').click()
        cy.wait(4000) 

    })
//Delete Inactive service
    it('As a Admin the user can delete any active service by clicking on the delete icon against that service.',()=>{
        cy.get('tr:nth-child(1)>td:nth-child(7)>div>span').scrollIntoView().should('be.visible').click()
        cy.wait(2000)
        cy.xpath('//div[1]/div[2]/button[1]').click()
        cy.wait(4000)
        cy.logout()

        
    })

    

})