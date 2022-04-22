//<reference types='cypress'/>
const cred=require('../../fixtures/cred.json')
describe('unverified payment testcases',  function() {
    
    it('As a Admin the user should be navigated to the Unverified payments page by clicking on the "Unverified Payments" button on the Appointment page', function() {
        cy.login()
        cy.url().should('contain','/dashboard')
        cy.get('.space-y-4 > :nth-child(4)').should('be.visible').should('have.text','Appointments').click()
        cy.wait(4000)
        cy.url().should('contain','/appointments')  
        cy.get('[textid="admin.unVerified_payments"]').should('be.visible').should('have.text','Unverified Payments').click()
        cy.wait(4000)
        
    })
    it('At "Unverified Payments" page each label and field should have proper label and validations', function() {
        cy.get('.-mx-4>div:nth-child(1)>div:nth-child(2)').should('be.visible').should('have.text','Unverified Payments List')
       cy.get('.-mx-4>div:nth-child(1)>div:nth-child(1)').should('be.visible')
       cy.get('[type=search]').should('be.visible')
       cy.get('table>thead>tr>th:nth-child(1)').should('be.visible').should('have.text','Test Name')
       cy.get('table>thead>tr>th:nth-child(2)').should('be.visible').should('have.text','Appointment ID')
       cy.get('table>thead>tr>th:nth-child(3)>div>div').should('be.visible').should('have.text','Appointment Date')
       cy.get('table>thead>tr>th:nth-child(4)').should('be.visible').should('have.text','Provider')
       cy.get('table>thead>tr>th:nth-child(5)').should('be.visible').should('have.text','Patient account')
       cy.get('table>thead>tr>th:nth-child(6)').scrollIntoView().should('be.visible').should('have.text','Payment Mode')
       cy.get('table>thead>tr>th:nth-child(7)').scrollIntoView().should('be.visible').should('have.text','Verify Payment')
       cy.get('table>thead>tr>th:nth-child(8)').scrollIntoView().should('be.visible').should('have.text','Action')

    })
    it('As a Admin the user can search any unverified appointment By Appointment id,patient name or provider name', function() {
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
    it('As a Admin the user can filter the unverified appointments by using the filter on the top right corner of the list  by the payment mode cash or pos etc.', function() {
        cy.get('.-mx-4>div:nth-child(2)>div:nth-child(2)').should('be.visible').should('have.text','Add Filter').click()
        cy.wait(2000)
        cy.get('.py-1>div:nth-child(1)').should('be.visible').should('have.text','CASH').click()
        cy.wait(2000)
        cy.get('.-mx-4>div:nth-child(2)>div:nth-child(2)>div:nth-child(1)>svg').should('be.visible').click()
        cy.wait(2000)
        cy.get('.-mx-4>div:nth-child(2)>div:nth-child(2)').should('be.visible').should('have.text','Add Filter').click()
        cy.wait(2000)
        cy.get('.py-1>div:nth-child(2)').should('be.visible').should('have.text','POS').click()
        cy.wait(2000)
        cy.get('.-mx-4>div:nth-child(2)>div:nth-child(2)>div:nth-child(1)>svg').should('be.visible').click()
        cy.wait(2000)
    })

    it('As a Admin the user can filter the  unverified payments list in Ascending or descending of appointment requested date by clicking on the filter on "Appointment date" field of the table. ',()=>{
        cy.get('table>thead>tr>th:nth-child(3)>div>span>svg:nth-child(1)').should('be.visible').click()
        cy.wait(2000)
        cy.get('table>thead>tr>th:nth-child(3)>div>span>svg:nth-child(2)').should('be.visible').click()
        cy.wait(2000)
   
        })
    it('As a Admin the user should be navigated to the "Appointment details" page by clicking on eye icon against that particular Unverified request.',()=>{
        cy.get('tbody>tr:nth-child(1)>td:nth-child(8)>div>svg').scrollIntoView().should('be.visible').click()
        cy.get('.space-x-4 > .font-semibold').should('be.visible').should('have.text','Appointment Details')
        cy.get('.w-7').should('be.visible').click()

       })

    it('As a Admin the user can verify payment of any appointment by clicking on the verify button against that appointment and user will get verification confirmation window', function() {
        cy.get('tr:nth-child(1) > td:nth-child(7)>div>div').scrollIntoView().should('be.visible').should('have.text','Verify').click()
        cy.wait(2000)
        cy.get('.ReactModal__Content>.hidden>.flex>div').should('be.visible').should('have.text','Confirmation')
    })
    it('By clicking on the "Verify" button a confirmation modal will open.', function() {
        cy.get('.ReactModal__Content>.hidden>.flex>div').should('be.visible').should('have.text','Confirmation')
        cy.get('.ReactModal__Content>.hidden>.flex>svg').should('be.visible')
        cy.get('.ReactModal__Content>.hidden>.mt-6>.flex>div').should('be.visible').should('contain','Please Verify Payment For -  ')
        cy.get('.hidden>.mt-6>.py-4>.font-semibold').should('be.visible').should('have.text','Payment Details')
        cy.get('.hidden>.mt-6>.py-4>.text-sm>.flex:nth-child(4)>div:nth-child(1)').should('be.visible').should('have.text','Total Paid')
        cy.get('.hidden>.mt-6>:nth-child(3)>button').should('be.visible').should('have.text','Verify')

    })

    it('As a Admin the user can click on the verify button on the confirmation to verify the payment', function() {
        cy.get('.hidden>.mt-6>:nth-child(3)>button').should('be.visible').should('have.text','Verify').click()
        cy.contains('Payment Verified successfully ');
        cy.wait(2000)
        cy.logout()

    })
})