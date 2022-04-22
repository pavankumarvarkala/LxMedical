//<reference types='cypress'/>
const cred=require('../../fixtures/cred.json')
describe('bill me later request testcases',  function() {
    
    it('As a Admin the user should be able to see the bill me later request after clicking on appointment tab', function() {
        cy.login()
        cy.url().should('contain','/dashboard')
        cy.get('.space-y-4 > :nth-child(4)').should('be.visible').should('have.text','Appointments').click()
        cy.wait(4000)
        cy.url().should('contain','/appointments')  
        cy.get('[textid="admin.bml_payments"]').should('be.visible').should('have.text','Bill Me Later Requests').click()
        cy.wait(4000)

        
    })
    it('At "Bill me later Requests" page each label and field should have proper label and validations', function() {
       cy.get('.-mx-4>div:nth-child(1)>div:nth-child(2)').should('be.visible').should('have.text','Bill Me Later Requests List')
       cy.get('.-mx-4>div:nth-child(1)>div:nth-child(1)').should('be.visible')
       cy.get('[type=search]').should('be.visible')
       cy.get('table>thead>tr>th:nth-child(1)').should('be.visible').should('have.text','Test Name')
       cy.get('table>thead>tr>th:nth-child(2)').should('be.visible').should('have.text','Appointment ID')
       cy.get('table>thead>tr>th:nth-child(3)>div>div').should('be.visible').should('have.text','Appointment Date')
       cy.get('table>thead>tr>th:nth-child(4)').should('be.visible').should('have.text','Provider')
       cy.get('table>thead>tr>th:nth-child(5)').should('be.visible').should('have.text','Patient account')
       cy.get('table>thead>tr>th:nth-child(6)').scrollIntoView().should('be.visible').should('have.text','Payment Mode')
       cy.get('table>thead>tr>th:nth-child(7)').scrollIntoView().should('be.visible').should('have.text','Confirm Payment')
       cy.get('table>thead>tr>th:nth-child(8)').scrollIntoView().should('be.visible').should('have.text','Action')


    })
    it('As a Admin the user can search the request with appointment id or patient name or provider name', function() {
       
        cy.get('[type=search]').should('be.visible').type('LXMED021')
        cy.wait(2000)
        cy.get('[type=search]').should('be.visible').clear()
        cy.wait(2000)
        cy.get('[type=search]').should('be.visible').type('pvnkumar80@gmail.com')
        cy.wait(2000)
        cy.get('[type=search]').should('be.visible').clear()
        cy.wait(2000)
        cy.get('[type=search]').should('be.visible').type('Pavan Kumar')
        cy.wait(2000)
        cy.get('[type=search]').should('be.visible').clear()
        cy.wait(2000)
        cy.get('[type=search]').should('be.visible').type('Ramesh Kumar')
        cy.wait(2000)
        cy.get('[type=search]').should('be.visible').clear()
        cy.wait(2000)
        cy.get('[type=search]').should('be.visible').type('Lxmedical Provider')
        cy.wait(2000)
        cy.get('[type=search]').should('be.visible').clear()
        cy.wait(2000)


    })
    it('As a Admin the user can filter the BML Requests list in Ascending or descending of appointment requested date by clicking on the filter on "Appointment date" field of the table. ',()=>{
        cy.get('table>thead>tr>th:nth-child(3)>div>span>svg:nth-child(1)').should('be.visible').click()
        cy.wait(2000)
        cy.get('table>thead>tr>th:nth-child(3)>div>span>svg:nth-child(2)').should('be.visible').click()
        cy.wait(2000)
   
        })
    it('As a Admin the user should be navigated to the "Appointment details" page by clicking on eye icon against that particular BML Request.',()=>{
        cy.get('tbody>tr:nth-child(1)>td:nth-child(8)>div>svg').scrollIntoView().should('be.visible').click()
        cy.get('.space-x-4 > .font-semibold').should('be.visible').should('have.text','Appointment Details')
        cy.get('.w-7').should('be.visible').click()

       })
    it('As a Admin the user can accept or deny the Bill me later request  by clicking on the "Confirm/Deny" button against that particular request', function() {
        cy.get('tr:nth-child(1) > td:nth-child(7)>div>div').scrollIntoView().should('be.visible').should('have.text','Confirm / Deny').click()
        cy.wait(2000)
        cy.get('.ReactModal__Content>.hidden>.flex>div').should('be.visible').should('have.text','Confirmation')

    })
    it('By clicking on the "confirm/Deny" button a confirmation modal will open.', function() {
        cy.get('.ReactModal__Content>.hidden>.flex>div').should('be.visible').should('have.text','Confirmation')
        cy.get('.ReactModal__Content>.hidden>.flex>svg').should('be.visible')
        cy.get('.ReactModal__Content>.hidden>.mt-6>.flex>div').should('be.visible').should('have.text','Please Confirm Payment Status For - ')
        cy.get('.ReactModal__Content>.hidden>.mt-6>.py-4>.font-semibold').should('be.visible').should('have.text','Payment Details')
        cy.get('.hidden>.mt-6>.py-4>.text-sm>.mr-2>div:nth-child(1)').should('be.visible').should('have.text','Total Payable')
        cy.get('.hidden>.mt-6>:nth-child(3)>button:nth-child(1)').should('be.visible').should('have.text','Deny')
        cy.get('.hidden>.mt-6>:nth-child(3)>button:nth-child(2)').should('be.visible').should('have.text','Confirm')

    })

    it('By clicking on the Deny button the admin can reject the BML request', function() {
        cy.get('.hidden>.mt-6>:nth-child(3)>button:nth-child(1)').should('be.visible').should('have.text','Deny').click()
        cy.wait(3000)
    })
    it('By clicking on the Confirm button the admin can approve the BML request', function() {
        cy.get('tr:nth-child(1) > td:nth-child(7)>div>div').scrollIntoView().should('be.visible').should('have.text','Confirm / Deny').click()
        cy.wait(2000)
        cy.get('.ReactModal__Content>.hidden>.flex>div').should('be.visible').should('have.text','Confirmation')
        cy.get('.hidden>.mt-6>:nth-child(3)>button:nth-child(2)').should('be.visible').should('have.text','Confirm').click()
        cy.wait(3000)
        cy.logout()

    })
    
    
})
        


