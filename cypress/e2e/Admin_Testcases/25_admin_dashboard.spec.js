//<reference types='cypress'/>
const cred=require('../../fixtures/cred.json')
describe('dashboard testcases',  function() {
    

    it('As a Admin the user should be navigated to the dashboard page by clicking on the dashboard tab', function() {
        cy.login()
        cy.url().should('contain','/dashboard')
    })
    it('At "Dashboard" page each label and field should have proper label and validations', function() {
       
        cy.get('.-mx-4>div:nth-child(1)>div').should('be.visible').should('have.text','Dashboard')
        cy.get(':nth-child(2)>:nth-child(1)>.flex>div.flex>div.ml-2.text-sm').should('be.visible').should('have.text','Total number of Patients')
        cy.get(':nth-child(2)>:nth-child(1)>.absolute>div').should('be.visible').should('have.text','View all')
        cy.get(':nth-child(2)>:nth-child(2)>.flex>div.flex>div.ml-2.text-sm').should('be.visible').should('have.text','Total number of Providers')
        cy.get(':nth-child(2)>:nth-child(2)>.absolute>div').should('be.visible').should('have.text','View all')
        cy.get(':nth-child(2)>:nth-child(3)>.flex>div.flex>div.ml-2.text-sm').should('be.visible').should('have.text','Total Appointments')
        cy.get(':nth-child(2)>:nth-child(3)>.absolute>div').should('be.visible').should('have.text','View all')
        cy.get(':nth-child(2)>:nth-child(4)>.flex>div.flex>div.ml-2.text-sm').should('be.visible').should('have.text','Pending Approval Appointments')
        cy.get(':nth-child(2)>:nth-child(4)>.absolute>div').should('be.visible').should('have.text','View all')
        cy.get(':nth-child(2)>:nth-child(5)>.flex>div.flex>div.ml-2.text-sm').should('be.visible').should('have.text','Awaiting Time Appointments')
        cy.get(':nth-child(2)>:nth-child(5)>.absolute>div').should('be.visible').should('have.text','View all')
        cy.get(':nth-child(2)>:nth-child(6)>.flex>div.flex>div.ml-2.text-sm').should('be.visible').should('have.text','Completed Appointments')
        cy.get(':nth-child(2)>:nth-child(6)>.absolute>div').should('be.visible').should('have.text','View all')
        cy.get(':nth-child(2)>:nth-child(7)>.flex>div.flex>div.ml-2.text-sm').should('be.visible').should('have.text','Cancelled Appointments')
        cy.get(':nth-child(2)>:nth-child(7)>.absolute>div').should('be.visible').should('have.text','View all')
        cy.get(':nth-child(2)>:nth-child(8)>.flex>div.flex>div.ml-2.text-sm').should('be.visible').should('have.text','Total Cash Payments')
        cy.get(':nth-child(2)>:nth-child(8)>.absolute>div').should('be.visible').should('have.text','View all')
        cy.get(':nth-child(2)>:nth-child(9)>.flex>div.flex>div.ml-2.text-sm').should('be.visible').should('have.text','Total POS Payments')
        cy.get(':nth-child(2)>:nth-child(9)>.absolute>div').should('be.visible').should('have.text','View all')
        cy.get(':nth-child(2)>:nth-child(10)>.flex>div.flex>div.ml-2.text-sm').should('be.visible').should('have.text','Total Bill Me Later Payments')
        cy.get(':nth-child(2)>:nth-child(10)>.absolute>div').should('be.visible').should('have.text','View all')
        cy.get(':nth-child(2)>:nth-child(11)>.flex>div.flex>div.ml-2.text-sm').should('be.visible').should('have.text','Total Payments')
        cy.get(':nth-child(2)>:nth-child(11)>.absolute>div').should('be.visible').should('have.text','View all')
        

        
    })
    it('As a Admin the user should navigated to the patients page by clicking on the view all button on the Total number of patients card', function() {
        cy.get(':nth-child(2)>:nth-child(1)>.absolute>div').should('be.visible').should('have.text','View all').click()
        cy.wait(3000)
        cy.url().should('contain','/patients')


       
    })
    it('As a Admin the user should navigated to the providers page by clicking on the view all button on the Total number of providers card', function() {
        cy.get('.space-y-4 > :nth-child(1)').should('be.visible').should('have.text','Dashboard').click()
        cy.wait(3000)
        cy.get(':nth-child(2)>:nth-child(2)>.absolute>div').should('be.visible').should('have.text','View all').click()
        cy.wait(3000)
        cy.url().should('contain','/providers')
    })
    it('As a Admin the user should navigated to the Appointments page by clicking on the view all button on the Total Appointments page card', function() {
        cy.get('.space-y-4 > :nth-child(1)').should('be.visible').should('have.text','Dashboard').click()
        cy.wait(3000)
        cy.get(':nth-child(2)>:nth-child(3)>.absolute>div').should('be.visible').should('have.text','View all').click()
        cy.wait(3000)
        cy.url().should('contain','/appointments')    })
    
    it('As a Admin the user can see all the Requested Appointments by clicking on the view all button on the Pending Approval Appointments page card', function() {
        cy.get('.space-y-4 > :nth-child(1)').should('be.visible').should('have.text','Dashboard').click()
        cy.wait(3000)
        cy.get(':nth-child(2)>:nth-child(4)>.absolute>div').should('be.visible').should('have.text','View all').click()
        cy.wait(3000)
        cy.url().should('contain','/appointments')  
        cy.get('div.flex.flex-wrap>.flex>div.py-1>span').should('be.visible').should('have.text','pending approval')

      })
    it('As a Admin the user can see all the Accepted Appointments by clicking on the view all button on the Awaiting Time Appointments page card', function() {
        cy.get('.space-y-4 > :nth-child(1)').should('be.visible').should('have.text','Dashboard').click()
        cy.wait(3000)
        cy.get(':nth-child(2)>:nth-child(5)>.absolute>div').should('be.visible').should('have.text','View all').click()
        cy.wait(3000)
        cy.url().should('contain','/appointments')  
        cy.get('div.flex.flex-wrap>.flex>div.py-1>span').should('be.visible').should('have.text','awaiting time')
    
    })
    it('As a Admin the user can see all the Completed Appointments by clicking on the view all button on the completed Appointment page card', function() {
        cy.get('.space-y-4 > :nth-child(1)').should('be.visible').should('have.text','Dashboard').click()
        cy.wait(3000)
        cy.get(':nth-child(2)>:nth-child(6)>.absolute>div').should('be.visible').should('have.text','View all').click()
        cy.wait(3000)
        cy.url().should('contain','/appointments')  
        cy.get('div.flex.flex-wrap>.flex>div.py-1>span').should('be.visible').should('have.text','completed')  
    
    })
    it('As a Admin the user can see all the Cancelled Appointments by clicking on the view all button on the Cancelled Appointments page card', function() {
        cy.get('.space-y-4 > :nth-child(1)').should('be.visible').should('have.text','Dashboard').click()
        cy.wait(3000)
        cy.get(':nth-child(2)>:nth-child(7)>.absolute>div').should('be.visible').should('have.text','View all').click()
        cy.wait(3000)
        cy.url().should('contain','/appointments')  
        cy.get('div.flex.flex-wrap>.flex>div.py-1>span').should('be.visible').should('have.text','cancelled')  
    
    })
    it('As a Admin the user can see the all the amount paid through cash payment by clicking on the view all button on the  Total Cash Payments card', function() {
        cy.get('.space-y-4 > :nth-child(1)').should('be.visible').should('have.text','Dashboard').click()
        cy.wait(3000)
        cy.get(':nth-child(2)>:nth-child(8)>.absolute>div').should('be.visible').should('have.text','View all').click()
        cy.wait(3000)
        cy.url().should('contain','/appointments')  
        cy.get('div.flex.flex-wrap>.flex>div.py-1>span').should('be.visible').should('have.text','CASH')
    
    })
    it('As a Admin the user can see the all the amount paid through POS payment by clicking on the view all button on the  Total POS Payments card', function() {
        cy.get('.space-y-4 > :nth-child(1)').should('be.visible').should('have.text','Dashboard').click()
        cy.wait(3000)
        cy.get(':nth-child(2)>:nth-child(9)>.absolute>div').should('be.visible').should('have.text','View all').click()
        cy.wait(3000)
        cy.url().should('contain','/appointments')  
        cy.get('div.flex.flex-wrap>.flex>div.py-1>span').should('be.visible').should('have.text','POS')  
    
    })
    it('As a Admin the user can see the all the amount paid through Bill Me Later payments by clicking on the view all button on the  Total Bill Me Later Payments card', function() {
        cy.get('.space-y-4 > :nth-child(1)').should('be.visible').should('have.text','Dashboard').click()
        cy.wait(3000)
        cy.get(':nth-child(2)>:nth-child(10)>.absolute>div').should('be.visible').should('have.text','View all').click()
        cy.wait(3000)
        cy.url().should('contain','/appointments')  
        cy.get('div.flex.flex-wrap>.flex>div.py-1>span').should('be.visible').should('have.text','BML')   
    
    })

    it('As a Admin the user should be navigated to the Appointments page by clicking on the view all button on the Total Payments name card', function() {
        cy.get('.space-y-4 > :nth-child(1)').should('be.visible').should('have.text','Dashboard').click()
        cy.wait(3000)
        cy.get(':nth-child(2)>:nth-child(10)>.absolute>div').should('be.visible').should('have.text','View all').click()
        cy.wait(3000)
        cy.url().should('contain','/appointments')  
        cy.logout()


    })
    
})    