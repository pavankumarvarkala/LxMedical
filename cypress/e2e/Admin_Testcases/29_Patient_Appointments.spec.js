///<reference types='cypress'/>
const cred=require('../../fixtures/cred.json')

describe('Patient Appointments Module Test cases',()=>{

    it('As a Admin the user should be navigated to the appointments tab of the particular patient by clicking on appointments tab under profile details.',()=>{
        cy.login(cred.email,cred.password)
        cy.url().should('contain','/dashboard')
        cy.get('.space-y-4 > :nth-child(2)').should('be.visible').should('have.text','Patients').click()
        cy.url().should('contain','/patients')
        cy.AddPatient()
        cy.readFile('cypress/fixtures/provider.json').then((provider) => {
        //search added patient    
        cy.get('[type=search]').should('be.visible').type(provider.email.toLowerCase())
        //Checking email is present in the list
        cy.get('tr:nth-child(1)>td:nth-child(2)').should('be.visible').should('have.text',provider.email.toLowerCase())
        cy.wait(4000)
        })
        cy.bookappointment()
        cy.wait(2000)
        cy.get('tr:nth-child(1) > td:nth-child(7) > div > svg:nth-child(1) > path:nth-child(1)').scrollIntoView().should('be.visible').click()
        cy.url().should('contain','/address')
        cy.get('nav.flex.flex-wrap>div:nth-child(3)>div').should('be.visible').should('contain','Appointments').click()
        cy.url().should('contain','/appointment')
    })
    it('At "Appointments" tab each label and field should have proper label and validations.',()=>{
         cy.get('.font-bold.text-xl').should('be.visible').should('contain','Total Appointments')
         cy.get('[textid="admin.book.appointment"]').should('be.visible').should('have.text','Book Appointment')

         cy.get('[type=search]').should('be.visible')
         cy.get('[type=text]').should('be.visible')

         cy.get('.-mx-4>div:nth-child(2)>div:nth-child(2)>div:nth-child(3)').should('be.visible').should('have.text','Add Filter')
         cy.get('table>thead>tr>th:nth-child(1)').should('be.visible').should('have.text','Test Name')
         cy.get('table>thead>tr>th:nth-child(2)').should('be.visible').should('have.text','Appointment ID')
         cy.get('table>thead>tr>th:nth-child(3)>div>div').should('be.visible').should('have.text','Requested For')
         cy.get('table>thead>tr>th:nth-child(4)').should('be.visible').should('have.text','Status')
         cy.get('table>thead>tr>th:nth-child(5)').scrollIntoView().should('be.visible').should('have.text','Appointment for')
         cy.get('table>thead>tr>th:nth-child(6)').scrollIntoView().should('be.visible').should('have.text','Email')
         cy.get('table>thead>tr>th:nth-child(7)').scrollIntoView().should('be.visible').should('have.text','Action')

        })

        it('As a Admin the user should be navigated to the "Book Appointment" page by clicking on the "Book Appointment" button.',()=>{
            cy.get('[textid="admin.book.appointment"]').should('be.visible').should('have.text','Book Appointment').click()
            cy.wait(4000)
            cy.get('.space-x-8 > .font-semibold').should('be.visible').should('have.text','Book Appointment')

            cy.patientbookappointment()
            // cy.get('.cursor-pointer > .w-8').should('be.visible').click()
            cy.wait(4000)

           })

        it('As a Admin the user should be navigated to the "Appointment details" page by clicking on eye icon against that particular Appointment',()=>{
        cy.get('tbody>tr:nth-child(1)>td:nth-child(7)>div>svg').scrollIntoView().should('be.visible').click()
        cy.get('.space-x-4 > .font-semibold').should('be.visible').should('have.text','Appointment Details')
        cy.get('.w-7').should('be.visible').click()
        cy.wait(4000)

       })

        it('As a Admin the user can filter the Appointments based on the status of the Appointment like requested,accepted etc. by clicking on the filter button',()=>{
        cy.get('.-mx-4>div:nth-child(2)>div:nth-child(2)>div:nth-child(3)').scrollIntoView().should('be.visible').should('have.text','Add Filter').click()
        cy.wait(2000)
        cy.get('.py-1:nth-child(2)>div:nth-child(2)').scrollIntoView().should('be.visible').should('have.text','pending approval').click()
        cy.wait(3000)
        cy.get('div.flex.flex-wrap>.flex>div.py-1>svg').scrollIntoView().should('be.visible').click()
        cy.wait(3000)
        cy.get('.-mx-4>div:nth-child(2)>div:nth-child(2)>div:nth-child(3)').scrollIntoView().should('be.visible').should('have.text','Add Filter').click()
        cy.wait(2000)
        cy.get('.py-1:nth-child(2)>div:nth-child(3)').scrollIntoView().should('be.visible').should('have.text','awaiting time').click()
        cy.wait(3000)
        cy.get('div.flex.flex-wrap>.flex>div.py-1>svg').scrollIntoView().should('be.visible').click()
        cy.wait(3000)
        cy.get('.-mx-4>div:nth-child(2)>div:nth-child(2)>div:nth-child(3)').scrollIntoView().should('be.visible').should('have.text','Add Filter').click()
        cy.wait(2000)
        cy.get('.py-1:nth-child(2)>div:nth-child(4)').scrollIntoView().should('be.visible').should('have.text','scheduled').click()
        cy.wait(3000)
        cy.get('div.flex.flex-wrap>.flex>div.py-1>svg').scrollIntoView().should('be.visible').click()
        cy.wait(3000)
        cy.get('.-mx-4>div:nth-child(2)>div:nth-child(2)>div:nth-child(3)').scrollIntoView().should('be.visible').should('have.text','Add Filter').click()
        cy.wait(2000)
        cy.get('.py-1:nth-child(2)>div:nth-child(5)').scrollIntoView().should('be.visible').should('have.text','on the way').click()
        cy.wait(3000)
        cy.get('div.flex.flex-wrap>.flex>div.py-1>svg').scrollIntoView().should('be.visible').click()
        cy.wait(3000)
        cy.get('.-mx-4>div:nth-child(2)>div:nth-child(2)>div:nth-child(3)').scrollIntoView().should('be.visible').should('have.text','Add Filter').click()
        cy.wait(2000)
        cy.get('.py-1:nth-child(2)>div:nth-child(6)').scrollIntoView().should('be.visible').should('have.text','awaiting payment').click()
        cy.wait(3000)
        cy.get('div.flex.flex-wrap>.flex>div.py-1>svg').scrollIntoView().should('be.visible').click()
        cy.wait(3000)
        cy.get('.-mx-4>div:nth-child(2)>div:nth-child(2)>div:nth-child(3)').scrollIntoView().should('be.visible').should('have.text','Add Filter').click()
        cy.wait(2000)
        cy.get('.py-1:nth-child(2)>div:nth-child(7)').scrollIntoView().should('be.visible').should('have.text','paid').click()
        cy.wait(3000)
        cy.get('div.flex.flex-wrap>.flex>div.py-1>svg').scrollIntoView().should('be.visible').click()
        cy.wait(3000)
        cy.get('.-mx-4>div:nth-child(2)>div:nth-child(2)>div:nth-child(3)').scrollIntoView().should('be.visible').should('have.text','Add Filter').click()
        cy.wait(2000)
        cy.get('.py-1:nth-child(2)>div:nth-child(8)').scrollIntoView().should('be.visible').should('have.text','completed').click()
        cy.wait(3000)
        cy.get('div.flex.flex-wrap>.flex>div.py-1>svg').scrollIntoView().should('be.visible').click()
        cy.wait(3000)
        cy.get('.-mx-4>div:nth-child(2)>div:nth-child(2)>div:nth-child(3)').scrollIntoView().should('be.visible').should('have.text','Add Filter').click()
        cy.wait(2000)
        cy.get('.py-1:nth-child(2)>div:nth-child(9)').scrollIntoView().should('be.visible').should('have.text','cancelled').click()
        cy.wait(3000)
        cy.get('div.flex.flex-wrap>.flex>div.py-1>svg').scrollIntoView().should('be.visible').click()
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
        cy.get('.-mx-4>div:nth-child(2)>div:nth-child(2)>div:nth-child(3)').scrollIntoView().should('be.visible').should('have.text','Add Filter').click()
        cy.get('.py-1:nth-child(1)>div:nth-child(2)').scrollIntoView().should('be.visible').should('have.text','CASH').click()
        cy.wait(2000)
        cy.get('.-mx-4>div:nth-child(2)>div:nth-child(2)>div:nth-child(3)>svg').scrollIntoView().should('be.visible').click()
        cy.wait(2000)

        cy.get('.-mx-4>div:nth-child(2)>div:nth-child(2)>div:nth-child(3)').scrollIntoView().should('be.visible').should('have.text','Add Filter').click()
        cy.get('.py-1:nth-child(1)>div:nth-child(3)').scrollIntoView().should('be.visible').should('have.text','Square POS').click()
        cy.wait(2000)
        cy.get('.-mx-4>div:nth-child(2)>div:nth-child(2)>div:nth-child(3)>svg').scrollIntoView().should('be.visible').click()
        cy.wait(2000)

        cy.get('.-mx-4>div:nth-child(2)>div:nth-child(2)>div:nth-child(3)').scrollIntoView().should('be.visible').should('have.text','Add Filter').click()
        cy.get('.py-1:nth-child(1)>div:nth-child(4)').scrollIntoView().should('be.visible').should('have.text','BML').click({force:true})
        cy.wait(2000)
        cy.get('.-mx-4>div:nth-child(2)>div:nth-child(2)>div:nth-child(3)>svg').scrollIntoView().should('be.visible').click()
        cy.wait(2000)

        cy.get('.-mx-4>div:nth-child(2)>div:nth-child(2)>div:nth-child(3)').scrollIntoView().should('be.visible').should('have.text','Add Filter').click()
        cy.get('.py-1:nth-child(1)>div:nth-child(5)').scrollIntoView().should('be.visible').should('have.text','ONLINE').click({force:true})
        cy.wait(2000)
        cy.get('.-mx-4>div:nth-child(2)>div:nth-child(2)>div:nth-child(3)>svg').scrollIntoView().should('be.visible').click()
        cy.wait(2000)

        cy.get('.-mx-4>div:nth-child(2)>div:nth-child(2)>div:nth-child(3)').scrollIntoView().should('be.visible').should('have.text','Add Filter').click()
        cy.get('.py-1:nth-child(1)>div:nth-child(6)').scrollIntoView().should('be.visible').should('have.text','CARD ON FILE').click({force:true})
        cy.wait(2000)
        cy.get('.-mx-4>div:nth-child(2)>div:nth-child(2)>div:nth-child(3)>svg').scrollIntoView().should('be.visible').click()
        cy.wait(2000)
   
        })
        it('As a Admin the user can filter the appointments in Ascending or descending of appointment requested date by clicking on the filter on "Requested for" field of the table. ',()=>{
            cy.get('table>thead>tr>th:nth-child(3)>div>span>svg:nth-child(1)').should('be.visible').click()
            cy.wait(2000)
            cy.get('table>thead>tr>th:nth-child(3)>div>span>svg:nth-child(2)').should('be.visible').click()
            cy.wait(2000)
       
            })
        
        it('As a Admin the user can search any appointment with appointment id or patient name or provider name with the help of search bar',()=>{
        cy.get('[type=search]').should('be.visible').type('LXMED02')
        cy.wait(2000)
        cy.get('[type=search]').should('be.visible').clear()
        cy.wait(2000)
        cy.get('[type=search]').should('be.visible').type('justin@yopmail.com')
        cy.wait(2000)
        cy.get('[type=search]').should('be.visible').clear()
        cy.wait(2000)
        cy.get('[type=search]').should('be.visible').type('A Bb')
        cy.wait(2000)
        cy.get('[type=search]').should('be.visible').clear()
        cy.wait(2000)
        cy.get('[type=search]').should('be.visible').type('Das Das')
        cy.wait(2000)
        cy.get('[type=search]').should('be.visible').clear()
        cy.wait(2000)
        cy.get('[type=search]').should('be.visible').type('Lxmedical Provider')
        cy.wait(2000)
        cy.get('[type=search]').should('be.visible').clear()
        cy.wait(2000)
   
        })
        
        it('As a Admin the user can switch between pages using next and previous buttons.',()=>{
        // cy.get('.mt-1:nth-child(2)').should('be.visible').should('have.text','Next').click()
        // cy.wait(2000)
        // cy.get('.mt-1:nth-child(1)').should('be.visible').should('have.text','Previous').click()
        // cy.wait(2000)
        cy.logout()


        })
         
})