//<reference types='cypress'/>
describe('dashboard testcases',  function() {
    beforeEach(function(){
        cy.visit('https://qa.rch.build-release.com/admin')
        cy.get('[label=email]').type('Rchadmin@yopmail.com')
        cy.get('[label=password]').type('Password@123')
        cy.get('[type=submit]').click()

    })


    it('As a Admin the user should be navigated to the dashboard page by clicking on the dashboard tab', function() {
        
    })
    it('At "Dashboard" page each label and field should have proper label and validations', function() {
       
        cy.contains("Total number of Patients")
        cy.contains("Total number of Providers")
        cy.contains("Total Appointments")
        cy.contains("Total Payments")
        cy.contains("Requested Appointments")
        cy.contains("Accepted Appointments")
        cy.contains("Completed Appointments")
        cy.contains("Cancelled Appointments")
        cy.contains("Total Cash Payments")
        cy.contains("Total POS Payments")
        cy.contains("Total Bill Me Later Payments")
        
    })
    it('As a Admin the user should navigated to the patients page by clicking on the view all button on the Total number of patients card', function() {
        cy.get('#root>div:nth-of-type(2)>div>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(1)>div:nth-of-type(2)>div').click({force:true})
       
    })
    it('As a Admin the user should navigated to the providers page by clicking on the view all button on the Total number of providers card', function() {
        cy.get('#root>div:nth-of-type(2)>div>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(2)>div:nth-of-type(2)>div').click({force:true})
    })
    it('As a Admin the user should navigated to the Appointments page by clicking on the view all button on the Total Appointments page card', function() {
        cy.get('#root>div:nth-of-type(2)>div>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(3)>div:nth-of-type(2)>div').click({force:true})
    })
    it('As a Admin the user should be navigated to the Appointments page by clicking on the view all button on the Total Payments page card', function() {
        cy.get('#root>div:nth-of-type(2)>div>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(4)>div:nth-of-type(2)>div').click({force:true})
    })
    it('As a Admin the user can see all the Requested Appointments by clicking on the view all button on the Requested Appointments page card', function() {
        cy.get('#root>div:nth-of-type(2)>div>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(5)>div:nth-of-type(2)>div').click({force:true})
    })
    it('As a Admin the user can see all the Accepted Appointments by clicking on the view all button on the Accepted Appointments page card', function() {
        cy.get('#root>div:nth-of-type(2)>div>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(6)>div:nth-of-type(2)>div').click({force:true})
    })
    it('As a Admin the user can see all the Completed Appointments by clicking on the view all button on the completed Appointment page card', function() {
        cy.get('#root>div:nth-of-type(2)>div>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(7)>div:nth-of-type(2)>div').click({force:true})
    })
    it('As a Admin the user can see all the Cancelled Appointments by clicking on the view all button on the Cancelled Appointments page card', function() {
        cy.get('#root>div:nth-of-type(2)>div>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(8)>div:nth-of-type(2)>div').click({force:true})
    })
    it('As a Admin the user can see the all the amount paid through cash payment by clicking on the view all button on the  Total Cash Payments card', function() {
        cy.get('#root>div:nth-of-type(2)>div>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(9)>div:nth-of-type(2)>div').click({force:true})
    })
    it('As a Admin the user can see the all the amount paid through POS payment by clicking on the view all button on the  Total POS Payments card', function() {
        cy.get(':nth-child(10) > .absolute > .text-sm').click({force:true})
    })
    it('As a Admin the user can see the all the amount paid through Bill Me Later payments by clicking on the view all button on the  Total Bill Me Later Payments card', function() {
        cy.get('#root>div:nth-of-type(2)>div>div:nth-of-type(2)>div>div:nth-of-type(2)>div:nth-of-type(11)>div:nth-of-type(2)>div').click({force:true})
    })
    
})    