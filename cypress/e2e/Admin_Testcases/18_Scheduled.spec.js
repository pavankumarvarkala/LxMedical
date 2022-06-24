///<reference types='cypress'/>
const cred=require('../../fixtures/cred.json')

describe('Scheduled Appointment Details Test cases',()=>{

    it('As a Admin the user should be navigated to the Appointment Details page of "Scheduled" appointment by clicking on the eye icon against that appointment',()=>{
        cy.login()
        cy.url().should('contain','/dashboard')
        cy.xpath('//nav/div[2]/div[2]').should('be.visible').should('have.text','Patients').click()

        cy.url().should('contain','/patients')
        cy.AddPatient()

        cy.readFile('cypress/fixtures/provider.json').then((provider) => {
        cy.xpath('//input[@type="search"]').should('be.visible').type(provider.email.toLowerCase())
        cy.xpath('//tr[1]/td[2]/div/p').should('be.visible').should('have.text',provider.email.toLowerCase())
        cy.wait(4000)
        })

        cy.bookappointment()
        cy.xpath('//input[@type="search"]').should('be.visible').clear()
        cy.wait(4000)

        cy.xpath('//nav/div[4]/div[2]').should('be.visible').should('have.text','Appointments').click()
        cy.url().should('contain','/appointments')
        cy.xpath('//div[contains(text(),"Ad")]').should('be.visible').should('have.text','Add Filter').click()

        cy.wait(3000)
        cy.xpath('//div[contains(text(),"pe")]').should('be.visible').should('have.text','pending approval').click()
        cy.wait(4000)

        cy.xpath('//tr[1]/td[4]/div/p').should('be.visible').should('have.text','pending approval')
        cy.xpath('//tr[1]/td[8]/div[1]/*[1]').scrollIntoView().should('be.visible').click()
        cy.wait(4000)
        cy.xpath('//span[contains(text(),"pendi")]').should('be.visible').should('have.text','pending approval')
        
        cy.xpath('//div[contains(text(),"Acc")]').should('be.visible').should('have.text','Accept').click()
        cy.wait(5000)
        cy.xpath('//span[contains(text(),"awa")]').should('be.visible').should('have.text','awaiting time')

        cy.xpath('//div[contains(text(),"As")]').should('be.visible').should('have.text','Assign Provider').click()
        cy.wait(5000)
        cy.xpath('//div[1]/div[2]/form/div[4]/div').should('be.visible').type('Priority customer')
        cy.wait(5000)
        
        cy.xpath('//div[1]/div[2]/form/div[1]/div[2]/div/div[1]').should('be.visible').click()
        cy.wait(3000)
        cy.get('.css-11unzgr>div:nth-child(1)').click()

        cy.xpath('//div[1]/div[2]/form/div[2]/div[1]/div[1]').should('be.visible').click()
        cy.wait(2000)
        cy.get('.react-datepicker__day--today').scrollIntoView().should('be.visible').click()

        cy.xpath('//div[1]/div[2]/form/div[2]/div[2]/div[1]').should('be.visible').click()
        cy.get('.rc-time-picker-panel-select:nth-child(1)>ul>li:nth-child(2)').scrollIntoView().should('be.visible').click()
        cy.get('.rc-time-picker-panel-select:nth-child(3)>ul>li:nth-child(1)').should('be.visible').click()

        cy.xpath('//div[1]/div[2]/form/div[5]/button').should('be.visible').should('have.text','Assign').click()
        cy.wait(5000)
        cy.xpath('//span[contains(text(),"sche")]').should('be.visible').should('have.text','scheduled')  
        
        
    })
    it('At "Appointment details" page each label and field should have proper label and validations',()=>{
        cy.xpath('//div[contains(text(),"Appointment D")]').should('be.visible').should('have.text','Appointment Details')
        cy.xpath('//div[1]/div[2]/div[1]/div[1]/div[1]/*[1]').should('be.visible')
        cy.xpath('//*[@id="root"]/div[2]/div/div[2]/div/div[2]/div[1]/div').should('be.visible')

        cy.xpath('//div[contains(text(),"Appointment I")]').should('have.text','Appointment ID')
        cy.xpath('//div[contains(text(),"Requested F")]').should('be.visible').should('have.text','Requested For')
        cy.xpath('//div[contains(text(),"St")]').should('be.visible').should('have.text','Status')

        cy.xpath('//div[contains(text(),"Service A")]').should('be.visible').should('have.text','Service Address')
        cy.xpath('//div[contains(text(),"Sc")]').should('be.visible').should('have.text','Scheduled On')
        cy.xpath('//div[2]/div[4]/div[1]').should('be.visible').should('have.text','Patients')

        cy.xpath('//div[contains(text(),"Services R")]').should('be.visible').should('have.text','Services Requested')
        cy.xpath('//div[contains(text(),"Provider D")]').should('be.visible').should('have.text','Provider Details')
        cy.xpath('//div[6]/div[2]/div/div').should('be.visible')

        cy.xpath('//button[@textid="cancel.appointment"]').should('have.text','Cancel Appointment')
        cy.xpath('//button[@textid="reschedule.appointment"]').should('have.text','Reschedule Appointment')
        cy.xpath('//button[@textid="change.provider"]').should('have.text','Change Provider')
 
    })
    it('The unique appointment id should be displayed',()=>{
        cy.xpath('//div[contains(text(),"Appointment I")]').should('have.text','Appointment ID')

    })
    it('The date requested by the patient should be displayed',()=>{
        cy.xpath('//div[contains(text(),"Requested F")]').should('be.visible').should('have.text','Requested For')

    })

    it('The Service Address where the patient requested the service should be displayed',()=>{
        cy.xpath('//div[contains(text(),"Service A")]').should('be.visible').should('have.text','Service Address')

    })

    it('As a Admin the user should be navigated to the medical history page of particular patient by clicking on the name card of that particular patient',()=>{
        cy.xpath('//div[4]/div[2]/div[1]/div[1]/div[1]/div[1]/*[2]').should('be.visible').click()
        cy.wait(4000)
        cy.url().should('contain','/medical_history')

        cy.xpath('//div[2]/div/nav/div[1]/div').should('be.visible').should('have.text','Medical History')
        cy.xpath('//div[@id="root"]/div[2]/div[1]/div[2]/div[1]/div[1]/*[1]').scrollIntoView().should('be.visible').click()
        cy.wait(4000)

        cy.url().should('contain','/appointments')

    })
    it('The list of services requested by the patient should be displayed',()=>{
        cy.xpath('//div[contains(text(),"Services R")]').should('be.visible').should('have.text','Services Requested')

    })
    it('The Appointment scheduled date and time should be displayed',()=>{
        cy.xpath('//div[contains(text(),"Sc")]').should('have.text','Scheduled On')

        cy.xpath('//div[3]/div[1]/span').should('be.visible')
        cy.wait(5000)
    
    })
    it('As a Admin the user should be navigated to the Profile details page of provider by clicking on name card of the provider',()=>{
        cy.xpath('//div[6]/div[2]/div/div').should('be.visible').click()
        cy.wait(5000)
        cy.url().should('contain','/providers')
        cy.xpath('//div[contains(text(),"Provider D")]').scrollIntoView().should('be.visible').should('have.text','Provider Details')
        cy.xpath('//div[@id="root"]/div[2]/div[1]/div[2]/div[1]/div[1]/*[1]').scrollIntoView().should('be.visible').click()
        cy.wait(5000)

        })
    it('As a Admin the user can chat with provider by clicking on chat icon against the provider',()=>{
        cy.xpath('//div[6]/div[2]/div/div/div[2]/img').should('be.visible').click()
        cy.wait(5000)
        cy.url().should('contain','/chat')

        cy.xpath('//div[2]/div[1]/div[2]/div[1]/div[1]').should('be.visible').should('have.text','Chat')
        cy.xpath('//div[2]/div[1]/div[2]/div[1]/*[1]').should('be.visible').click()
        cy.wait(5000)

 
        })
        
    it('As a Admin the user can should get appointment reschedule window by clicking on "reschedule Appointment" button',()=>{
        cy.xpath('//button[@textid="reschedule.appointment"]').should('have.text','Reschedule Appointment').click()
        cy.wait(5000)
        cy.xpath('//div[6]/div/div/div[1]/div[1]/div').should('be.visible').should('have.text','Reschedule Appointment')

    })
    it('At "Appointment Reschedule" page each label and field should have proper label and validations',()=>{
        cy.xpath('//div[6]/div/div/div[1]/div[1]/div').should('be.visible').should('have.text','Reschedule Appointment')
        cy.xpath('//div[1]/div[2]/form/div[1]/div[1]/label/div').should('be.visible').should('have.text','Appointment Date')
        cy.xpath('//div[1]/div[2]/form/div[1]/div[1]/div').should('be.visible')

        cy.xpath('//div[1]/div[2]/form/div[1]/div[2]/label').should('be.visible').should('have.text','Appointment Time')
        cy.xpath('//div[1]/div[2]/form/div[1]/div[2]/div').should('be.visible')
        cy.xpath('//div[1]/div[2]/form/div[2]/button').should('be.visible').should('have.text','Reschedule')
    })
    it('After Selecting Appointment date, Appointment time and by clicking on Rescheduled button the Appointment should be rescheduled',()=>{
        cy.xpath('//div[1]/div[2]/form/div[1]/div[1]/div').should('be.visible').click()
        cy.get('.react-datepicker__day--025').scrollIntoView().should('be.visible').click()
        cy.xpath('//div[1]/div[2]/form/div[1]/div[2]/div').should('be.visible').click()
        cy.get('.rc-time-picker-panel-select:nth-child(1)>ul>li:nth-child(2)').scrollIntoView().should('be.visible').click()
        cy.get('.rc-time-picker-panel-select:nth-child(3)>ul>li:nth-child(1)').should('be.visible').click()
        cy.xpath('//div[1]/div[2]/form/div[2]/button').should('be.visible').should('have.text','Reschedule').click({force:true})
    })
    it('The Rescheduled date and time should reflect instantly under appointment details',()=>{
        cy.xpath('//div[3]/div[1]/span').should('be.visible').should('contain','25 202')
         
    })
    it('As a Admin the user can change the provider assigned by clicking on the change provider button',()=>{
        cy.xpath('//button[@textid="change.provider"]').should('have.text','Change Provider').click()
        cy.wait(3000)
        cy.xpath('//div[7]/div/div/div[1]/div[1]/div').should('be.visible').should('have.text','Change Provider')

        cy.xpath('//div[1]/div[2]/form/div[1]/div[1]').should('be.visible').should('have.text','Select Provider')
        cy.xpath('//div[1]/div[2]/form/div[1]/div[2]').should('be.visible').click()
        cy.wait(3000)

        cy.get('.css-11unzgr>div:nth-child(2)').click()
        cy.xpath('//div[1]/div[2]/form/div[2]/label').should('be.visible').should('have.text','Add Comment For Provider')
        cy.xpath('//div[1]/div[2]/form/div[2]/div').should('be.visible').type('Value Customer')

        cy.xpath('//div[1]/div[2]/form/div[3]/button').should('be.visible').should('have.text','Assign').click()
        cy.wait(3000)
        
    })
    it('As a Admin the user can cancel the appointment after entering the cancellation reason by clicking on the cancel button',()=>{
        cy.xpath('//button[@textid="cancel.appointment"]').should('be.visible').should('have.text','Cancel Appointment').click()
        cy.wait(3000)
        cy.xpath('//div[3]/div/div/div[1]/div[1]/div').should('be.visible').should('have.text','Confirmation')

        cy.xpath('//div[3]/div[1]/div[1]/div[1]/div[1]/*[1]').should('be.visible')
        cy.xpath('//div[3]/div/div/div[1]/div[2]/div').should('be.visible').should('have.text','Are you sure, want to cancel this appointment.')
        cy.xpath('//div[1]/div[2]/form/div[1]/div/label/div').should('be.visible').should('have.text','Reason For Cancellation')

        cy.xpath('//div[1]/div[2]/form/div[1]/div/div/textarea').should('be.visible')
        cy.xpath('//div[1]/div[2]/form/div[1]/div/div/textarea').should('be.visible').type('Provider not available')
        cy.xpath('//div[1]/div[2]/form/div[2]/button').should('be.visible').should('have.text','Cancel Appointment').click()

        cy.wait(5000)
        cy.xpath('//span[contains(text(),"can")]').should('be.visible').should('have.text','cancelled')
        
        cy.logout()
    })
})