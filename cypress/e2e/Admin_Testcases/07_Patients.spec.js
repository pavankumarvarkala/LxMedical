///<reference types='cypress'/>
import faker from 'faker'
describe('Patient management module test cases', ()=>{

    it('As a admin the user should be navigated on patients page by clicking on patients tab', ()=>{
        cy.login()
        cy.xpath('//nav/div[2]').should('be.visible').should('have.text','Patients').click()
        cy.url().should('contain','/patients')
    })
     
    it('At patients page each label and field should have proper label and validations',()=>{
        
        cy.xpath('//div[1]/div[4]/div[1]').should('be.visible').should('have.text','Patients')
        cy.xpath('//div[contains(text(),"Fu")]').should('be.visible').should('have.text','Full Name')
        cy.xpath('//div[contains(text(),"Em")]').should('be.visible').should('have.text','Email')

        cy.xpath('//div[contains(text(),"J")]').should('be.visible').should('have.text','Joined On')
        cy.xpath('//div[contains(text(),"Su")]').should('be.visible').should('have.text','Subscription')
        cy.xpath('//th[5]/div[1]').scrollIntoView().should('be.visible').should('have.text','Appointment')

        cy.xpath('//div[contains(text(),"St")]').scrollIntoView().should('be.visible').should('have.text','Status')
        cy.xpath('//div[contains(text(),"Ac")]').scrollIntoView().should('be.visible').should('have.text','Action')
        cy.xpath('//div[contains(text(),"Add N")]').should('be.visible').should('have.text','Add New Patient')

        cy.xpath('//div[contains(text(),"Add F")]').should('be.visible').should('have.text','Add Filter')

    })
    it('As a Admin the user will get the add patient form by clicking on the "Add new patient" button ', ()=>{
        cy.xpath('//div[contains(text(),"Add N")]').should('be.visible').should('have.text','Add New Patient').click()
        cy.wait(2000)
        cy.xpath('//div[1]/h3[1]/div[1]/div[1]').should('be.visible').should('have.text','Add New Patient')

    })

    it('At Add New Patient page each label and field should have proper label and validations ', ()=>{
        //verifying if "Add New Patient" modal is present.
        cy.xpath('//div[1]/h3[1]/div[1]/div[1]').should('be.visible').should('have.text','Add New Patient')
        cy.get('div.hidden>h3>div>svg').should('be.visible')

        //verifying the label of "First Name" input field.
        cy.xpath('//div[1]/div[1]/form[1]/div[1]/div[1]/label[1]/div[1]').should('be.visible').should('have.text','First Name')

        //verifying that the "First Name" input field is present.
        cy.xpath('//div[1]/div[1]/form[1]/div[1]/div[1]/div[1]/input[1]').should('be.visible')

        //verifying that the "Last Name" input field is present.
        cy.xpath('//div[1]/div[1]/form[1]/div[1]/div[2]/div[1]/input[1]').should('be.visible').click()
        cy.wait(3000)

        //Verifying the validation message for blank data for "First Name" input field.
        cy.xpath('//div[1]/div[1]/form[1]/div[1]/div[1]/div[2]').should('be.visible').should('have.text','Required')
        cy.wait(1000)

        //verifying the label of "Last Name" input field.
        cy.xpath('//div[1]/div[1]/form[1]/div[1]/div[2]/label[1]/div[1]').scrollIntoView().should('be.visible').should('have.text','Last Name')

        //verifying that the "Preferred Name" input field is present.
        cy.xpath('//div[1]/div[1]/form[1]/div[2]/div[1]/div[1]/input[1]').should('be.visible').click()
        cy.wait(3000)

        //Verifying the validation message for blank data for "Last Name" input field.
        cy.xpath('//div[1]/div[1]/form[1]/div[1]/div[2]/div[2]').should('be.visible').should('have.text','Required')
        cy.wait(1000)
        
        //verifying the label of "Preferred Name" input field.
        cy.xpath('//div[1]/div[1]/form[1]/div[2]/div[1]/label[1]/div[1]').scrollIntoView().should('be.visible').should('have.text','Preferred Name (Optional)')

        //verifying the label of "Subscription" Dropdown.
        cy.xpath('//div[1]/div[1]/form[1]/div[2]/div[2]/div[1]').scrollIntoView().should('be.visible').should('have.text','Subscription')
        
        //verifying that the "Subscription" Dropdown is present.
        cy.xpath('//div[1]/div[1]/form[1]/div[2]/div[2]/div[2]').should('be.visible')

        //verifying the label of "Phone Number" input field.
        cy.xpath('//div[1]/div[1]/form[1]/div[4]/div[1]/label[1]/div[1]').should('be.visible').should('have.text','Phone Number')

        //verifying that the "Phone Number" input field is present.
        cy.xpath('//div[1]/div[1]/form[1]/div[4]/div[1]/div[1]').should('be.visible').click()
        cy.wait(3000)

        //verifying that the "Email" input field is present.
        cy.xpath('//div[1]/div[1]/form[1]/div[4]/div[2]/div[1]').should('be.visible').click()

        //Verifying the validation message for blank data for "Phone Number" input field.
        cy.xpath('//div[1]/div[1]/form[1]/div[4]/div[1]/div[2]').should('be.visible').should('have.text','Required')
        cy.wait(1000)

        //verifying the label of "Email" input field.
        cy.xpath('//div[1]/div[1]/form[1]/div[4]/div[2]/label[1]/div[1]').should('be.visible').should('have.text','Email')

        //verifying that the "Address Line 1" input field is present.
        cy.xpath('//div[1]/div[1]/form[1]/div[8]/div[1]/div[1]').should('be.visible').click()
        cy.wait(3000)

        //Verifying the validation message for blank data for "Email" input field.
        cy.xpath('//div[1]/div[1]/form[1]/div[4]/div[2]/div[2]').should('be.visible').should('have.text','Required')
        cy.wait(1000)

        //verifying the label of "Date of Birth" input field.
        cy.xpath('//div[1]/div[1]/form[1]/div[5]/div[1]/label[1]/div[1]').should('be.visible').should('have.text','Date of Birth')

        //verifying that the "Date of Birth" input field is present.
        cy.xpath('//div[1]/div[1]/form[1]/div[5]/div[1]/div[1]').should('be.visible')

        //verifying the label of "Gender" Dropdown.
        cy.xpath('//div[1]/div[1]/form[1]/div[5]/div[2]/div[1]').should('be.visible').should('have.text','Gender')
        
        //verifying that the "Gender" Dropdown is present.
        cy.xpath('//div[1]/div[1]/form[1]/div[5]/div[2]/div[2]').should('be.visible')

        //Verifying the Header of "Address" section.
        cy.xpath('//div[1]/div[1]/form[1]/div[7]/div[1]').scrollIntoView().should('be.visible').should('have.text','Address')

        //verifying the label of "Address Line 1" input field.
        cy.xpath('//div[1]/div[1]/form[1]/div[8]/div[1]/label[1]/div[1]').scrollIntoView().should('be.visible').should('have.text','Address Line 1')

        //verifying that the "Address Line 2" input field is present.
        cy.xpath('//div[1]/div[1]/form[1]/div[8]/div[2]/div').should('be.visible').click({force:true})
        cy.wait(3000)

        //Verifying the validation message for blank data for "Address Line 1" input field.
        cy.xpath('//div[1]/div[1]/form[1]/div[8]/div[1]/div[2]').should('be.visible').should('have.text','Required')
        cy.wait(1000)

        //verifying the label of "Address Line 2" input field.
        cy.xpath('//div[1]/div[1]/form[1]/div[8]/div[2]/label[1]/div[1]').should('be.visible').should('contain','Address Line 2')

        //verifying the label of "Postal Code" input field.
        cy.xpath('//div[1]/div[1]/form[1]/div[9]/div[1]/label[1]/div[1]').should('be.visible').should('contain','Postal Code')
        
        //verifying that the "Postal Code" input field is present.
        cy.xpath('//div[1]/div[1]/form[1]/div[9]/div[1]/div').should('be.visible').click()

        //verifying the label of "City" input field.
        cy.xpath('//div[1]/div[1]/form[1]/div[9]/div[2]/div/div[1]').should('be.visible').should('contain','City')
        
        //verifying that the "City" input field is present.
        cy.xpath('//div[1]/div[1]/form[1]/div[9]/div[2]/div/div[2]').should('be.visible')

        //verifying the label of "State" input field.
        cy.xpath('//div[1]/div[1]/form[1]/div[10]/div/label').should('be.visible').should('have.text','State')

        //verifying that the "State" input field is present.
        cy.xpath('//div[1]/div[1]/form[1]/div[10]/div/div').should('be.visible')

        //verifying the label of "Continue" button.
        cy.xpath('//div[1]/div[1]/form[1]/div[11]/button[1]').should('be.visible').should('have.text','Continue')

        //Closing "Add New Patient" form.
        cy.get('div.hidden>h3>div>svg').scrollIntoView().should('be.visible').click()

    })

    it('After filling the form with valid data and clicking on continue the patient should be added ', ()=>{
        const email = faker.name.firstName()+'@yopmail.com';
        const fname = faker.name.firstName()
        const lname = faker.name.firstName()
        const pname = faker.name.firstName()

        const phone = faker.phone.phoneNumber('(###)-###-####');
        
        //Getting an Existing "Email" from patient list and saving into variable.
        cy.xpath('//tr[1]/td[2]/div/p').invoke('text').then((text2)=>{
        
        //Click on Eye icon icon first patient in the list.
        cy.xpath('//tbody/tr[1]/td[7]/div[1]/*[1]').scrollIntoView().should('be.visible').click({force:true})
        cy.wait(4000)

        //Getting Phone Number from Patient profile and saving into variable.
        cy.xpath('//div[2]/div[2]/div[2]/div[2]/div[1]/div').invoke('text').then((text1)=>{
        
        //Clicking on Back arrow to get back to patient listing.
        cy.xpath('//div[@id="root"]/div[2]/div[1]/div[2]/div[1]/div[1]/*[1]').scrollIntoView().should('be.visible').click({force:true})
        cy.wait(4000)

        //Click on "Add New Patient" button.
        cy.xpath('//div[contains(text(),"Add N")]').should('be.visible').should('have.text','Add New Patient').click()
        
        //verifying if "Add New Patient" modal is present.
        cy.xpath('//div[1]/h3[1]/div[1]/div[1]').should('be.visible').should('have.text','Add New Patient')
        cy.get('div.hidden>h3>div>svg').should('be.visible')

        //Entering valid data into "First Name" input field.
        cy.xpath('//div[1]/div[1]/form[1]/div[1]/div[1]/div[1]/input[1]').should('be.visible').type(fname)
        
        //Entering valid data into "Last Name" input field.
        cy.xpath('//div[1]/div[1]/form[1]/div[1]/div[2]/div[1]/input[1]').should('be.visible').type(lname)

        //Entering valid data into "Preferred Name" input field.
        cy.xpath('//div[1]/div[1]/form[1]/div[2]/div[1]/div[1]/input[1]').should('be.visible').type(pname)

        //Selecting subscription from dropdown.
        cy.xpath('//div[1]/div[1]/form[1]/div[2]/div[2]/div[2]').click()
        cy.get('div.css-11unzgr>div:nth-child(2)').click()

        //Entering "Existing Data" into "Phone Number" input field.
        cy.xpath('//div[1]/div[1]/form[1]/div[4]/div[1]/div[1]').should('be.visible').type(text1)
        cy.wait(4000)

        })

        //Entering "Existing Data" into "Email" input field.
        cy.xpath('//div[1]/div[1]/form[1]/div[4]/div[2]/div[1]').should('be.visible').type(text2)

        //Verifying the validation message for "Existing Data" for "Phone Number" input field.
        cy.xpath('//div[1]/div[1]/form[1]/div[4]/div[1]/div[2]').should('be.visible').should('have.text','An account already exists with this phone number')
        cy.wait(4000)

        //Entering "Valid" into "Date of Birth" input field.
        cy.xpath('//div[1]/div[1]/form[1]/div[5]/div[1]/div[1]/div[1]/div[1]/input[1]').should('be.visible').click()
        cy.get('.react-datepicker__year-select').select('1990')
        cy.wait(1000)
        cy.get('.react-datepicker__day--015').click()

        //Verifying the validation message for "Existing Data" for "Email" input field.
        cy.xpath('//div[1]/div[1]/form[1]/div[4]/div[2]/div[2]').should('be.visible').should('have.text','An account already exists with this email')
        cy.wait(1000)

        //Entering "Valid" into "Gender" input field.
        cy.xpath('//div[1]/div[1]/form[1]/div[5]/div[2]/div[2]/div[1]').should('be.visible').click()
        cy.get('div.css-11unzgr>div:nth-child(1)').click()

        //Entering "Valid" into "Address-1" input field.
        cy.xpath('//div[1]/div[1]/form[1]/div[8]/div[1]/div[1]/input[1]').should('be.visible').type('plot no 92')

        //Entering "Valid" into "Postal Code" input field.
        cy.xpath('//div[1]/div[1]/form[1]/div[9]/div[1]/div[1]/input[1]').should('be.visible').type('544')
        cy.xpath('//div[1]/div[1]/form[1]/div[8]/div[2]/div[1]/input[1]').should('be.visible').click()
        cy.wait(3000)

        //Changing the "City" from City input field.
        cy.xpath('//div[1]/div[1]/form[1]/div[9]/div[2]/div/div[2]').should('be.visible').click()
        cy.wait(2000)
        cy.xpath('//*[@class=" css-yt9ioa-option"][contains(text(),"HILLBURN")]').scrollIntoView().click()

        //Entering "valid data" into "Phone Number" input field.
        cy.xpath('//div[1]/div[1]/form[1]/div[4]/div[1]/div[1]').should('be.visible').clear().type(phone)

        //Entering "valid data" into "Email" input field.
        cy.xpath('//div[1]/div[1]/form[1]/div[4]/div[2]/div[1]').should('be.visible').clear().type(email)

        //Clicking on "Continue" button.
        cy.xpath('//div[1]/div[1]/form[1]/div[11]/button[1]').should('be.visible').should('have.text','Continue').click()


         })
        
        //Checking if "patient" is added or not
        cy.contains('Successfully Registered.');

        //Writing Email,Phone and Preferred name to a json file.
        cy.writeFile('cypress/fixtures/provider.json', {
            email: email,
            phone: phone,
            preferredName :pname
            
        });

    })

    it('The added patient should refelct under patients listing', () => {

        //Reading Data from the json file.
        cy.readFile('cypress/fixtures/provider.json').then((provider) => {
    
        //Searching the patient Added with Email.
        cy.get('[type=search]').should('be.visible').type(provider.email.toLowerCase())

        //Verifying that the patient is added with the Email we have given.
        cy.get('tr:nth-child(1)>td:nth-child(2)').should('be.visible').should('have.text',provider.email.toLowerCase())
        cy.wait(4000)

        //Verifying that the preferred name is reflecting or not.
        cy.xpath('//tr[1]/td[1]/div/p').should('be.visible').should('contain',provider.preferredName.toLowerCase())

        //Verifying that the "Subscription" selected is reflecting or not.
        cy.xpath('//tr[1]/td[4]/div').should('be.visible').should('contain','EXECUTIVE')
        cy.wait(3000)


        

        })
    })

    it('As a admin the user should be navigated to the Book Appointment page by clicking on Book button against patient ', ()=>{
        cy.get('[type=search]').should('be.visible').clear()
        cy.wait(4000)
        cy.get('tr:nth-child(1) > td:nth-child(5)>div>div').scrollIntoView().should('be.visible').click({force:true})
        cy.url().should('contain','/book_appointment')
        cy.wait(5000)
        cy.get('.w-8 > path').scrollIntoView().should('be.visible').click({force:true})
        cy.wait(5000)

    })

    it('As a Admin the user can chat with patient by clicking on the chat icon against that patient', ()=>{
        cy.get('tr:nth-child(1) > td:nth-child(7) > div >div>img').scrollIntoView().should('be.visible').click({force:true})
        cy.url().should('contain','/chat')
        cy.wait(5000)
        cy.get('.flex-wrap > .h-6 > path').should('be.visible').click()
        cy.wait(5000)

    })

    it('As a Admin the user can enable or disable any patient with the help of toggle icon under status',()=>{
        cy.get('tr:nth-child(1)>td:nth-child(6)>button').scrollIntoView().should('be.visible').click({force:true})
        cy.wait(4000)
        cy.xpath('//div[1]/div[2]/button[1]').click()
        cy.wait(4000)
        cy.get('tr:nth-child(1)>td:nth-child(6)>button').scrollIntoView().should('be.visible').click({force:true})
        cy.wait(4000)
        cy.xpath('//div[1]/div[2]/button[1]').click()
        cy.wait(4000) 
        
     })

     it('As a Admin the user can change the membership of the patient by clicking on the membership plan under subscription', ()=>{
        cy.xpath('//tbody/tr[1]/td[4]/div[1]/div[1]/button[1]/*[1]').scrollIntoView().should('be.visible').click({force:true})
        cy.wait(5000)
        cy.xpath('//div[1]/div[1]/div[1]/div[2]').should('be.visible').should('have.text','standard').click()

        cy.wait(2000)
        cy.xpath('//div[1]/div[3]/button').should('be.visible').should('have.text','Confirm').click()
        cy.contains('Patient Membership Changed Successfully')
        cy.wait(2000)

        cy.wait(5000)
        cy.xpath('//tr[1]/td[4]/div/div/button').scrollIntoView().should('be.visible').click({force:true})
        cy.wait(5000)
        cy.xpath('//div[1]/div[1]/div[1]/div[3]').should('be.visible').should('have.text','executive').click()

        cy.wait(2000)
        cy.xpath('//div[1]/div[3]/button').should('be.visible').should('have.text','Confirm').click()
        cy.contains('Patient Membership Changed Successfully')
        cy.wait(2000)

        cy.xpath('//tr[1]/td[4]/div/div/button').scrollIntoView().should('be.visible').click({force:true})
        cy.wait(5000)
        cy.xpath('//div[1]/div[1]/div[1]/div[4]').should('be.visible').should('have.text','cypress').click()

        cy.wait(2000)
        cy.xpath('//div[1]/div[3]/button').should('be.visible').should('have.text','Confirm').click()
        cy.contains('Patient Membership Changed Successfully')
        cy.wait(2000)
    })

    it('As a Admin the user can filter the patients based on their membeship plan using the filter button',()=>{
        cy.xpath('//div[contains(text(),"Add Filter")]').should('be.visible').click()
        cy.wait(3000)
        cy.get('div.py-1>div:nth-child(1)').scrollIntoView().should('be.visible').should('contain','basic').click()
        cy.wait(5000)

        cy.xpath('//div[contains(text(),"Add Filter")]').should('be.visible').click()
        cy.wait(3000)
        cy.get('div.py-1>div:nth-child(2)').scrollIntoView().should('be.visible').should('contain','standard').click()
        cy.wait(5000)

        cy.xpath('//div[contains(text(),"Add Filter")]').should('be.visible').click()
        cy.wait(3000)
        cy.get('div.py-1>div:nth-child(3)').scrollIntoView().should('be.visible').should('contain','executive').click()
        cy.wait(5000)

        cy.xpath('//div[contains(text(),"Add Filter")]').should('be.visible').click()
        cy.wait(3000)
        cy.get('div.py-1>div:nth-child(4)').scrollIntoView().should('be.visible').should('contain','cypress').click()
        cy.wait(5000)
        
        

    })

    it('As a Admin the user can change the view of the patients listing by using filter on full name which make the patients list in alphabetical order from a-z or Z-a',()=>{
        cy.get('table>thead>tr>th:nth-child(1)>span>svg:nth-child(1)').should('be.visible').click({force:true})
        cy.wait(2000)
        cy.get('table>thead>tr>th:nth-child(1)>span>svg:nth-child(2)').should('be.visible').click({force:true})
        cy.wait(2000)
     })

    it('As a admin the user should be navigated to the profile details page of any patient by clicking on eye symbol against that particular patient ', ()=>{
        cy.xpath('//tbody/tr[1]/td[7]/div[1]/*[1]').scrollIntoView().should('be.visible').click({force:true})
        
    })
    it('At profile deatils page of the patient each label and field should have proper label and validations',()=>{
        cy.get('.space-x-4 > .font-bold').scrollIntoView().should('be.visible').should('have.text','Patient Details')
        cy.get('.border-primary').should('be.visible').should('have.text','Address')
        cy.xpath('//div[contains(text(),"Line 1")]').should('be.visible').should('have.text','Address Line 1')
        cy.xpath('//div[contains(text(),"Line 2")]').should('be.visible').should('have.text','Address Line 2')
        cy.xpath('//div[contains(text(),"Po")]').should('be.visible').should('have.text','Postal Code')
        cy.xpath('//div[contains(text(),"Ci")]').should('be.visible').should('have.text','City')
        cy.xpath('//div[contains(text(),"St")]').should('be.visible').should('have.text','State')        

    })
    it('As a admin the user should be navigated back to the patients page by clicking on back symbol on profile details page',()=>{
        cy.get('.h-6 > path').scrollIntoView().should('be.visible').click()
        cy.wait(5000)
        cy.url().should('contain','/patients')
    })
    it('As a admin the user should able to search any patient by his name or email',()=>{
        
        
        cy.xpath('//tr[1]/td[1]/div/p').invoke('text').then((text1)=>{

        cy.xpath('//tr[1]/td[2]/div/p').invoke('text').then((text2)=>{

        cy.get('[type=search]').should('be.visible').clear()
        cy.get('[type=search]').should('be.visible').type(text2)
        cy.wait(5000)
        cy.get('tr:nth-child(1)>td:nth-child(2)').should('be.visible').should('have.text',text2)
         
        })

        cy.wait(2000)
        cy.get('[type=search]').should('be.visible').clear().type(text1)
        cy.wait(2000)
        // cy.get('tr:nth-child(1)>td:nth-child(1)').should('be.visible').should('have.text',text1)
        cy.wait(2000)
        })

        cy.get('[type=search]').should('be.visible').clear()
        cy.wait(2000)  
        cy.logout();

    })
})