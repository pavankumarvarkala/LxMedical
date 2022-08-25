///<reference types='cypress'/>
const cred=require('../../fixtures/cred.json')
import faker from 'faker'

describe('Book Appointment module testcases',()=>{
 
    it('As a Admin the user should be navigated to the "Select Service" page of Book appointment section by clicking on "Book" button against the paticular patient.',()=>{
        
        cy.login(cred.email,cred.password)
        cy.url().should('contain','/dashboard')
        //Click patient tab on the left side tray

        cy.xpath('//nav/div[2]/div[2]').should('be.visible').should('have.text','Patients').click()
        cy.url().should('contain','/patients')
        //Add new patient custom command
        cy.AddPatient()

        cy.readFile('cypress/fixtures/provider.json').then((provider) => {
        //search added patient    
        cy.get('[type=search]').should('be.visible').type(provider.email.toLowerCase())
        //Checking email is present in the list
        cy.get('tr:nth-child(1)>td:nth-child(2)').should('be.visible').should('have.text',provider.email.toLowerCase())
        cy.wait(4000)
        })

        //Click On Book Button against patient
        cy.xpath('//tr[1]/td[5]/div[1]/div[1]').should('be.visible').should('have.text','Book').click()
        cy.url().should('contain','/book_appointment')
    })
    it('At "Select Service" page each label and field should have proper label and validations',()=>{
        
        
        cy.xpath('//div[contains(text(),"Book")]').should('be.visible').should('have.text','Book Appointment')
        cy.get('.cursor-pointer > .w-8').should('be.visible')
        cy.xpath('//div[contains(text(),"Select Service")]').should('be.visible').should('have.text','Select Service')
        
        cy.xpath('//div[contains(text(),"Members")]').should('be.visible').should('have.text','Members receive 15% discount & $100 travel fee waived on invoice.')
        cy.xpath('//form[1]/div[1]/div[2]/div[1]/*[1]').should('be.visible')
        cy.xpath('//input[@type="search"]').should('be.visible').invoke('attr','placeholder').should('contain','Search a service...')

        cy.xpath('//div[contains(text(),"Tele")]').should('be.visible').should('have.text','Telemedicine Service')
        cy.xpath('//div[1]/div[1]/div[1]/div[1]/div[1]/input[1]').should('be.visible').should('not.be.checked')
        cy.xpath('//div[contains(text(),"Vital")]').should('be.visible').should('have.text','Vital Checkup')

        cy.xpath('//div[2]/div[1]/div[1]/div[1]/div[1]/input[1]').should('be.visible').should('not.be.checked')
        cy.xpath('//div[contains(text(),"Sutu")]').should('be.visible').should('have.text','Suture Removal')
        cy.xpath('//div[3]/div[1]/div[1]/div[1]/div[1]/input[1]').should('be.visible').should('not.be.checked')

        cy.xpath('//div[contains(text(),"Blood")]').scrollIntoView().should('be.visible').should('have.text','Blood draw Covid-19 Antibody ')
        cy.xpath('//div[4]/div[1]/div[1]/div[1]/div[1]/input[1]').should('be.visible').should('not.be.checked')
        cy.xpath('//div[contains(text(),"Vacc")]').should('be.visible').should('have.text','In-home Vaccination')
        
        cy.xpath('//div[5]/div[1]/div[1]/div[1]/div[1]/input[1]').should('be.visible').should('not.be.checked')
        cy.xpath('//div[contains(text(),"well")]').should('be.visible').should('have.text','In-Home health/wellness infusion')
        cy.xpath('//div[6]/div[1]/div[1]/div[1]/div[1]/input[1]').should('be.visible').should('not.be.checked')
        
        cy.xpath('//div[contains(text(),"Con")]').should('be.visible').should('have.text','Continue').click()


    })
    it('As a Admin the user can search any service from the search bar using the service name of that particular service',()=>{
        
        cy.xpath('//input[@type="search"]').should('be.visible').type('Suture')
        cy.wait(4000)
        cy.xpath('//div[contains(text(),"Sutu")]').should('be.visible').should('contain','Suture Removal')

        cy.xpath('//div[1]/div[1]/div[1]/div[1]/div[1]/input[1]').should('be.visible').should('not.be.checked').check()
        cy.xpath('//input[@type="search"]').should('be.visible').clear()
        cy.wait(4000)

        cy.xpath('//div[contains(text(),"Tele")]').scrollIntoView().should('be.visible').click()
        cy.contains('"Telemedicine Visit" service cannot be availed with any other services.')
        
    
    })

    it('After selcecting the required service/services and clicking on Clicking on "Continue" button, user should be navigated to the "Select Patient" page.',()=>{
        
        cy.xpath('//div[4]/div[1]/div[1]/div[1]/div[1]/input[1]').should('be.visible').should('not.be.checked').check({force:true})
        cy.xpath('//div[5]/div[1]/div[1]/div[1]/div[1]/input[1]').should('be.visible').should('not.be.checked').check({force:true})
        
        cy.wait(2000)
        cy.xpath('//div[contains(text(),"Con")]').should('be.visible').should('have.text','Continue').click()

        cy.wait(4000)
        cy.xpath('//span[contains(text(),"self")]').should('be.visible').should('have.text','self')
    
    })

    it('At "Select Patient" page each label and field should have proper label and validations',()=>{
        
        cy.xpath('//span[contains(text(),"self")]').should('be.visible').should('have.text','self')
        cy.xpath('//div[contains(text(),"Date")]').should('be.visible').should('have.text','Date of Birth')
        cy.xpath('//div[contains(text(),"Gender")]').should('be.visible').should('have.text','Gender')

        cy.xpath('//div[contains(text(),"Please")]').should('be.visible').should('have.text','Please describe your primary symptoms…')
        cy.xpath('//textarea[@label="primary.symptoms"]').should('be.visible')
        // cy.xpath('//input[@name="patients[0].image1"]').should('be.visible')

        // cy.xpath('//input[@name="patients[0].image2"]').should('be.visible')
        cy.xpath('//div[contains(text(),"Add A")]').should('be.visible').should('have.text','Add Another Family Member')
        cy.xpath('//div[contains(text(),"Con")]').should('be.visible').should('have.text','Continue').click()
        cy.wait(2000)
        cy.xpath('//span[contains(text(),"required")]').should('be.visible').should('have.text','Primary Symptoms are required')

    })

    it('As a Admin the user should can add another member by clicking on "Add Another Family Member" button on "Select Patient" page.',()=>{
        cy.xpath('//div[contains(text(),"Add A")]').should('be.visible').should('have.text','Add Another Family Member').click()
        cy.wait(4000)
        cy.xpath('//div[1]/h3[1]/div[1]/div[1]').should('be.visible').should('have.text','Add Minor & Symptoms')
        cy.addfamilymember()
        cy.wait(4000)

    })

    it('After Selecting patients,adding primary symptoms and clicking on "Continue" button, the user should be navigated to the "Date&Time" page.',()=>{
        
        cy.xpath('//form[1]/div[1]/div[2]/div[1]/div[1]').should('be.visible').click()
        cy.contains('You have selected Single Type of Service')

        cy.get('.cursor-pointer > .w-8').should('be.visible').click()
        cy.wait(4000)
        cy.xpath('//input[@type="search"]').should('be.visible').type('In-home covid')
        
        cy.wait(4000)
        cy.xpath('//div[1]/div[1]/div[1]/div[1]/div[1]/input[1]').should('be.visible').should('not.be.checked').check()
        cy.xpath('//div[2]/div[1]/div[1]/div[1]/div[1]/input[1]').should('be.visible').should('not.be.checked').check()
    
        cy.xpath('//div[contains(text(),"Con")]').should('be.visible').should('have.text','Continue').click()
        cy.wait(4000)
        cy.xpath('//div[1]/div[1]/div[2]/div[2]/div/div/div/textarea').should('be.visible').type('Fever')

        cy.xpath('//input[@name="patients[0].image1"]').attachFile('image1.jpg')
        cy.wait(2000)
        cy.xpath('//input[@name="patients[0].image2"]').attachFile('image2.jpg')

        cy.wait(2000)
        // cy.xpath('//form[1]/div[1]/div[2]/div[1]/div[1]').should('be.visible').click()
        cy.xpath('//div[2]/div[1]/div[2]/div[2]/div/div/div/textarea').should('be.visible').clear().type('puking')

        cy.xpath('//input[@name="patients[1].image1"]').attachFile('image3.jpg')
        cy.wait(2000)
        cy.xpath('//input[@name="patients[1].image2"]').attachFile('image4.jpg')

        cy.wait(2000)
        cy.xpath('//div[contains(text(),"Con")]').should('be.visible').should('have.text','Continue').click()
        cy.wait(4000)

        cy.xpath('//div[contains(text(),"Preferred A")]').should('be.visible').should('have.text','Preferred Appointment Date')

    })

    it('At "Date&Time" page each label and field should have proper label and validations',()=>{
        
        cy.xpath('//div[contains(text(),"Preferred A")]').should('be.visible').should('have.text','Preferred Appointment Date')
        cy.xpath('//input[@type="text"]').should('be.visible')
        cy.xpath('//div[contains(text(),"T")]').should('be.visible').should('have.text','Preferred Time Slot')
        
        cy.xpath('//input[@name="MORNING"]').should('be.visible').should('not.be.checked')
        cy.xpath('//label[@for="MORNING"]').should('be.visible').should('have.text','Morning')
        cy.xpath('//input[@name="AFTERNOON"]').should('be.visible').should('not.be.checked')

        cy.xpath('//label[@for="AFTERNOON"]').should('be.visible').should('have.text','Afternoon')
        cy.xpath('//input[@name="EVENING"]').should('be.visible').should('not.be.checked')
        cy.xpath('//label[@for="EVENING"]').should('be.visible').should('have.text','Evening')

        cy.xpath('//input[@name="ASAP"]').should('be.visible').should('not.be.checked')
        cy.xpath('//label[@for="ASAP"]').should('be.visible').should('have.text','ASAP')
        cy.xpath('//div[contains(text(),"Service A")]').should('be.visible').should('have.text','Service Address')

        cy.xpath('//div[2]/div[2]/div[1]/div[2]/*[1]').should('be.visible')
        cy.xpath('//div[contains(text(),"Ed")]').should('be.visible').should('have.text','Edit')
        cy.xpath('//button[@textid="book.appointment"]').should('be.visible').should('have.text','Book Appointment').click()

        cy.contains('Preferred Appointment Date is required.')
        cy.contains('Preferred Time Slot is required.')
        cy.xpath('//input[@name="ASAP"]').should('be.visible').should('not.be.checked').check()
        cy.wait(2000)

        cy.xpath('//input[@name="MORNING"]').should('be.visible').should('not.be.checked').should('be.disabled')
        cy.xpath('//input[@name="AFTERNOON"]').should('be.visible').should('not.be.checked').should('be.disabled')
        cy.xpath('//input[@name="EVENING"]').should('be.visible').should('not.be.checked').should('be.disabled')

        cy.xpath('//input[@name="ASAP"]').should('be.visible').uncheck()
        cy.wait(2000)
        cy.xpath('//input[@name="AFTERNOON"]').should('be.visible').should('not.be.checked').check()

        cy.xpath('//input[@name="EVENING"]').should('be.visible').should('not.be.checked').check()
        cy.xpath('//input[@name="MORNING"]').should('be.visible').should('not.be.checked').should('be.disabled')
        cy.xpath('//input[@name="ASAP"]').should('be.visible').should('not.be.checked').check()
        
        cy.wait(2000)
        cy.xpath('//input[@name="ASAP"]').should('be.visible').uncheck()
        cy.wait(2000)

    })

    it('As a Admin the user should be navigated to the service address edit page by clicking on edit symbol against the service address',()=>{
        cy.xpath('//div[contains(text(),"Ed")]').should('be.visible').should('have.text','Edit').click()
        cy.wait(4000)
        cy.xpath('//div[1]/h3[1]/div[1]/div').should('be.visible').should('have.text','Edit Address')
    
    })
    it('As a Admin the user can able to close the Edit service Address window by Clicking on the cross icon',()=>{
        cy.get('div.hidden>h3>div>svg').should('be.visible').click()
        cy.wait(2000)
        cy.xpath('//div[contains(text(),"Ed")]').should('be.visible').should('have.text','Edit').click()
        cy.wait(4000)
        cy.xpath('//div[1]/h3[1]/div[1]/div').should('be.visible').should('have.text','Edit Address')
    
    })
    it('At "Service Address" Edit window each label and field should have proper label and validations',()=>{
        
        cy.xpath('//div[1]/h3[1]/div[1]/div').should('be.visible').should('have.text','Edit Address')
        cy.get('div.hidden>h3>div>svg').should('be.visible')
        
        cy.xpath('//div[1]/form/div[1]/div/label').should('be.visible').should('have.text','Address Line 1')

        cy.xpath('//div[1]/form/div[1]/div/div').should('be.visible')

        cy.xpath('//div[1]/form/div[2]/div/label').should('be.visible').should('contain','Address Line 2')
        cy.xpath('//div[1]/form/div[2]/div/div').should('be.visible')

        cy.xpath('//div[1]/form/div[3]/div[1]/label').should('be.visible').should('have.text','Postal Code')
        cy.xpath('//div[1]/form/div[3]/div[1]/div').should('be.visible')
        cy.xpath('//div[1]/form/div[3]/div[2]/div/div/div[1]').should('be.visible').should('have.text','City')
        
        cy.xpath('//div[1]/form/div[3]/div[2]/div/div/div[2]').should('be.visible')
        cy.xpath('//div[1]/form/div[4]/div/label').should('be.visible').should('have.text','State')
        cy.xpath('//div[1]/form/div[4]/div/div').should('be.visible')
        
        cy.xpath('//div[1]/form[1]/div[5]').should('be.visible').should('contain','Save Address')
    })
    it('After editing the address and clicking on save address button the user should able to save the service address',()=>{
        cy.xpath('//div[1]/form/div[1]/div/div').should('be.visible').clear().type('plot no 75')

        cy.xpath('//div[1]/form/div[3]/div[1]/div').should('be.visible').clear().type('54456')

        cy.xpath('//div[1]/form/div[2]/div/div').should('be.visible').clear().type('park lane')
        
        cy.xpath('//div[1]/form/div[3]/div[2]/div/div/div[2]').should('be.visible').click()
        cy.wait(2000)
        cy.xpath('//*[@class=" css-yt9ioa-option"][contains(text(),"MUSCODA")]').scrollIntoView().click()
        
        cy.wait(2000)
        cy.xpath('//div[1]/form[1]/div[5]').should('be.visible').should('contain','Save Address').click()
        cy.wait(2000)

        cy.xpath('//div[2]/span').should('be.visible').should('contain','plot no 75')
        cy.xpath('//div[2]/span').should('be.visible').should('contain','park lane')
        cy.xpath('//div[2]/span').should('be.visible').should('contain','MUSCODA')


    })
    it('As a Admin the user can able select the appointment date by clicking on calendar icon against the preferred appointment date field.',()=>{
        cy.xpath('//input[@type="text"]').should('be.visible').click()
        cy.get('.react-datepicker__day--today').click()
    
    })
    it('As a Admin the user can able to select the appointment time by checking the check boxes in preferred time slot.',()=>{
        cy.xpath('//input[@name="EVENING"]').should('be.visible').should('not.be.checked').check()
        cy.xpath('//input[@name="MORNING"]').should('be.visible').should('not.be.checked').check()
    
    })

    it('After selecting "Preferred Date", "Preferred Time" and clicking on "Book Appointment" button the user should get the booking confirmation',()=>{
        cy.xpath('//button[@textid="book.appointment"]').should('be.visible').should('have.text','Book Appointment').click()
        cy.contains('Appointment Added successfully ')
        cy.wait(4000)
        cy.xpath('//div[1]/h3[1]/div[1]/div').should('be.visible').should('have.text','Confirmation')
        cy.get('div.hidden>h3>div>svg').should('be.visible')
    })

    it('By clicking on continue button booking confirmation page the user should be navigated to the patients page',()=>{
        cy.xpath('//div[1]/div[3]/button').should('be.visible').should('have.text','Continue').click()
        cy.wait(4000)
        cy.url().should('contain','/patients')

    })
    it('The booked appointment should refelect instantly under apointment page and also on patient side',()=>{
        cy.xpath('//div[contains(text(),"Appointments")]').should('be.visible').should('have.text','Appointments').click()
        cy.wait(4000)
        cy.xpath('//tr[1]/td[4]/div/p').should('be.visible').should('have.text','pending approval')
    })
    it('The primary symptoms and Service Address added by the patient should reflect on the appointment name card',()=>{
        cy.xpath('//tr[1]/td[8]/div[1]/*[1]').scrollIntoView().should('be.visible').click()
        cy.wait(4000)
        cy.xpath('//div[4]/div[2]/div[1]/div/div[2]/div[2]').should('be.visible').should('have.text','Fever')

        cy.xpath('//div[4]/div[2]/div[2]/div/div[2]/div[2]').should('be.visible').should('have.text','puking')
        cy.xpath('//div[2]/div[2]/span').should('be.visible').should('contain','MORNING | EVENING')
        cy.xpath('//div[3]/div/div/span').should('be.visible').should('contain','plot no 75')

        cy.xpath('//div[3]/div/div/span').should('be.visible').should('contain','54456')
        cy.logout()

    })

    
})