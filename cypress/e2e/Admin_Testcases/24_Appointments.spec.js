///<reference types='cypress'/>
const cred=require('../../fixtures/cred.json')

describe('Appointments Module Test cases',()=>{

    it('As a Admin the user should be navigated to the Appointment page by clicking on the Appointments tab.',()=>{
        cy.login()
        cy.url().should('contain','/dashboard')
        cy.get('.space-y-4 > :nth-child(4)').should('be.visible').should('have.text','Appointments').click()
        cy.url().should('contain','/appointments')
    })
    it('At "Appointments" page each label and field should have proper label and validations',()=>{
         cy.get('.-mx-4>div:nth-child(1)>div:nth-child(1)').should('be.visible').should('have.text','Appointments')
         cy.get('[textid="admin.unVerified_payments"]').should('be.visible').should('have.text','Unverified Payments')
         cy.get('[textid="admin.bml_payments"]').should('be.visible').should('have.text','Bill Me Later Requests')
         cy.get('[type=search]').should('be.visible')
         cy.get('[type=text]').should('be.visible')
         cy.get('.-mx-4>div:nth-child(2)>div:nth-child(2)>div:nth-child(3)').should('be.visible').should('have.text','Add Filter')
         cy.get('.mt-1:nth-child(2)').should('be.visible').should('have.text','Next')
         cy.get('table>thead>tr>th:nth-child(1)').should('be.visible').should('have.text','Test Name')
         cy.get('table>thead>tr>th:nth-child(2)').should('be.visible').should('have.text','Appointment ID')
         cy.get('table>thead>tr>th:nth-child(3)>div>div').should('be.visible').should('have.text','Requested For')
         cy.get('table>thead>tr>th:nth-child(4)').should('be.visible').should('have.text','Status')
         cy.get('table>thead>tr>th:nth-child(5)').should('be.visible').should('have.text','Patient account')
         cy.get('table>thead>tr>th:nth-child(6)').scrollIntoView().should('be.visible').should('have.text','Appointment for')
         cy.get('table>thead>tr>th:nth-child(7)').scrollIntoView().should('be.visible').should('have.text','Email')
         cy.get('table>thead>tr>th:nth-child(8)').scrollIntoView().should('be.visible').should('have.text','Action')

        })
        it('As a Admin the user should be navigated to the "unverified payments list" page by clicking on the "Unverified Payments" button',()=>{
         cy.get('[textid="admin.unVerified_payments"]').should('be.visible').should('have.text','Unverified Payments').click()
         cy.get('.-mx-4>div:nth-child(1)>div:nth-child(2)').should('be.visible').should('have.text','Unverified Payments List')
         cy.get('.-mx-4>div:nth-child(1)>div:nth-child(1)').should('be.visible').click()

        })

        it('As a Admin the user should be navigated to the "Appointment details" page by clicking on eye icon against that particular Appointment',()=>{
        cy.get('tbody>tr:nth-child(1)>td:nth-child(8)>div>svg').scrollIntoView().should('be.visible').click()
        cy.get('.space-x-4 > .font-semibold').should('be.visible').should('have.text','Appointment Details')
        cy.get('.w-7').should('be.visible').click()

       })

        it('As a Admin the user should be navigated to the "Bill me later requests list" page by clicking on the "Bill me later requests" button',()=>{
        cy.get('[textid="admin.bml_payments"]').should('be.visible').should('have.text','Bill Me Later Requests').click()
        cy.get('.-mx-4>div:nth-child(1)>div:nth-child(2)').should('be.visible').should('have.text','Bill Me Later Requests List')
        cy.get('.-mx-4>div:nth-child(1)>div:nth-child(1)').should('be.visible').click()
   
        })

        it('As a Admin the user can filter the Appointments based on the status of the Appointment like requested,accepted etc. by clicking on the filter button',()=>{
        cy.get('.-mx-4>div:nth-child(2)>div:nth-child(2)>div:nth-child(3)').should('be.visible').should('have.text','Add Filter').click()
        cy.wait(2000)
        cy.get('.py-1:nth-child(2)>div:nth-child(2)').should('be.visible').should('have.text','pending approval').click()
        cy.wait(3000)
        cy.get('div.flex.flex-wrap>.flex>div.py-1>svg').should('be.visible').click()
        cy.wait(3000)
        cy.get('.-mx-4>div:nth-child(2)>div:nth-child(2)>div:nth-child(3)').should('be.visible').should('have.text','Add Filter').click()
        cy.wait(2000)
        cy.get('.py-1:nth-child(2)>div:nth-child(3)').should('be.visible').should('have.text','awaiting time').click()
        cy.wait(3000)
        cy.get('div.flex.flex-wrap>.flex>div.py-1>svg').should('be.visible').click()
        cy.wait(3000)
        cy.get('.-mx-4>div:nth-child(2)>div:nth-child(2)>div:nth-child(3)').should('be.visible').should('have.text','Add Filter').click()
        cy.wait(2000)
        cy.get('.py-1:nth-child(2)>div:nth-child(4)').should('be.visible').should('have.text','scheduled').click()
        cy.wait(3000)
        cy.get('div.flex.flex-wrap>.flex>div.py-1>svg').should('be.visible').click()
        cy.wait(3000)
        cy.get('.-mx-4>div:nth-child(2)>div:nth-child(2)>div:nth-child(3)').should('be.visible').should('have.text','Add Filter').click()
        cy.wait(2000)
        cy.get('.py-1:nth-child(2)>div:nth-child(5)').should('be.visible').should('have.text','on the way').click()
        cy.wait(3000)
        cy.get('div.flex.flex-wrap>.flex>div.py-1>svg').should('be.visible').click()
        cy.wait(3000)
        cy.get('.-mx-4>div:nth-child(2)>div:nth-child(2)>div:nth-child(3)').should('be.visible').should('have.text','Add Filter').click()
        cy.wait(2000)
        cy.get('.py-1:nth-child(2)>div:nth-child(6)').should('be.visible').should('have.text','awaiting payment').click()
        cy.wait(3000)
        cy.get('div.flex.flex-wrap>.flex>div.py-1>svg').should('be.visible').click()
        cy.wait(3000)
        cy.get('.-mx-4>div:nth-child(2)>div:nth-child(2)>div:nth-child(3)').should('be.visible').should('have.text','Add Filter').click()
        cy.wait(2000)
        cy.get('.py-1:nth-child(2)>div:nth-child(7)').should('be.visible').should('have.text','paid').click()
        cy.wait(3000)
        cy.get('div.flex.flex-wrap>.flex>div.py-1>svg').should('be.visible').click()
        cy.wait(3000)
        cy.get('.-mx-4>div:nth-child(2)>div:nth-child(2)>div:nth-child(3)').should('be.visible').should('have.text','Add Filter').click()
        cy.wait(2000)
        cy.get('.py-1:nth-child(2)>div:nth-child(8)').should('be.visible').should('have.text','completed').click()
        cy.wait(3000)
        cy.get('div.flex.flex-wrap>.flex>div.py-1>svg').should('be.visible').click()
        cy.wait(3000)
        cy.get('.-mx-4>div:nth-child(2)>div:nth-child(2)>div:nth-child(3)').should('be.visible').should('have.text','Add Filter').click()
        cy.wait(2000)
        cy.get('.py-1:nth-child(2)>div:nth-child(9)').should('be.visible').should('have.text','cancelled').click()
        cy.wait(3000)
        cy.get('div.flex.flex-wrap>.flex>div.py-1>svg').should('be.visible').click()
        cy.wait(3000)
   
        })

        it('As a Admin the user can filter the appointment between particular dates by clicking on the calendar icon',()=>{
        cy.get('[type=text]').should('be.visible').click()
        cy.get('.react-datepicker__day--today').should('be.visible').click()
        cy.get('.react-datepicker__day--today').should('be.visible').click()
        cy.wait(2000)
        cy.get('div.flex.flex-wrap>.flex>svg').should('be.visible').click()
   
        })

        it('As a Admin the user can also filter the appointments based on the payment mode like cash,pos or bill me later etc.',()=>{
        cy.get('.-mx-4>div:nth-child(2)>div:nth-child(2)>div:nth-child(3)').should('be.visible').should('have.text','Add Filter').click()
        cy.get('.py-1:nth-child(1)>div:nth-child(2)').should('be.visible').should('have.text','CASH').click()
        cy.wait(2000)
        cy.get('.-mx-4>div:nth-child(2)>div:nth-child(2)>div:nth-child(3)>svg').should('be.visible').click()
        cy.wait(2000)
        cy.get('.-mx-4>div:nth-child(2)>div:nth-child(2)>div:nth-child(3)').should('be.visible').should('have.text','Add Filter').click()
        cy.get('.py-1:nth-child(1)>div:nth-child(3)').should('be.visible').should('have.text','POS').click()
        cy.wait(2000)
        cy.get('.-mx-4>div:nth-child(2)>div:nth-child(2)>div:nth-child(3)>svg').should('be.visible').click()
        cy.wait(2000)
        cy.get('.-mx-4>div:nth-child(2)>div:nth-child(2)>div:nth-child(3)').should('be.visible').should('have.text','Add Filter').click()
        cy.get('.py-1:nth-child(1)>div:nth-child(4)').should('be.visible').should('have.text','BML').click({force:true})
        cy.wait(2000)
        cy.get('.-mx-4>div:nth-child(2)>div:nth-child(2)>div:nth-child(3)>svg').should('be.visible').click()
        cy.wait(2000)
   
        })
        it('As a Admin the user can filter the appointments in Ascending or descending of appointment requested date by clicking on the filter on "Requested for" field of the table. ',()=>{
            cy.get('table>thead>tr>th:nth-child(3)>div>span>svg:nth-child(1)').should('be.visible').click()
            cy.wait(2000)
            cy.get('table>thead>tr>th:nth-child(3)>div>span>svg:nth-child(2)').should('be.visible').click()
            cy.wait(2000)
       
            })
        
        it('As a Admin the user can search any appointment with appointment id or patient name or provider name with the help of search bar',()=>{
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
        
        it('As a Admin the user can switch between pages using next and previous buttons.',()=>{
        cy.get('.mt-1:nth-child(2)').should('be.visible').should('have.text','Next').click()
        cy.wait(2000)
        cy.get('.mt-1:nth-child(1)').should('be.visible').should('have.text','Previous').click()
        cy.wait(2000)
        cy.logout()


        })
         
})