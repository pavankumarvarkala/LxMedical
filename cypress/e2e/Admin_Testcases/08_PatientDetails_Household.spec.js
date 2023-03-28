///<reference types='cypress'/>
const cred=require('../../fixtures/cred.json')
 import faker from 'faker'

 describe('Testcases for "Household" tab in "Patient Details" page.',()=>{
     it('As a Admin the should be navigated to the "Household" section of a particular by clicking on "Household" tab on patient Details page of that particular patient.',()=>{
        cy.login(cred.email,cred.password)
        cy.url().should('contain','/dashboard')

        //Click patient tab on the left side tray
        cy.xpath('//*[text()="Patients"]').should('be.visible').should('have.text','Patients').click()
        cy.url().should('contain','/patients')

        //Add new patient custom command
        cy.AddPatient()
        cy.readFile('cypress/fixtures/provider.json').then((provider) => {
        
        //search added patient    
        cy.get('[type=search]').should('be.visible').type(provider.email.toLowerCase())
        
        //Checking email is present in the list
        cy.get('tr:nth-child(1)>td:nth-child(3)').should('be.visible').should('have.text',provider.email.toLowerCase())
        cy.wait(4000)
        })
        
        //Clicking on eye icon against patient 
        cy.get('tr:nth-child(1) > td:nth-child(8) > div > svg:nth-child(1) > path:nth-child(1)').scrollIntoView().should('be.visible').click()
        cy.url().should('contain','/address')

        //Click on Household tab in patient profile
        cy.xpath('//*[text()="Household"]').should('be.visible').should('contain','Household').click()
        cy.url().should('contain','/household')
    })

     it('At Household tab each label and field should have proper label and validations',()=>{

        //Verifing the label of "Add Famil Member" button.
        cy.xpath('//*[@textid="charts.addmember"]').should('be.visible').should('have.text','Add Family Member')

        //Verfing number of Household present.
        cy.xpath('//*[@class="font-medium"]').should('be.visible').should('have.text','1 Members')


        //Verfying that the self card is present.
        cy.xpath('//*[@class="col-span-4 sm:col-span-2"]').should('be.visible')

     
    })
  
    //Add New Member
    it('As a Admin the user should able to get a pop up window of "Add family member" by clicking on "Add Family Member" button on Household page',()=>{
        
        //Click on "Add Family Member" button.
        cy.xpath('//*[@textid="charts.addmember"]').should('be.visible').should('have.text','Add Family Member').click()

        //Verifying that the "Add Family Member" window is visible.
        cy.xpath('//div[@class="font-bold text-black"]').should('be.visible').should('have.text','Add Family Member')

 
    })



    it('At "Add family member" window each label and field have proper lable and validations',()=>{

        //Verfying the label of "Add New Member" button.
        cy.xpath('//*[@textid="add.new.member"]').should('be.visible').should('have.text','Add New Member')

        //Verfying the label of "Add Existing Member" button.
        cy.xpath('//*[textid="add.existing.member"]').should('be.visible').should('have.text','Add Existing Member')
        
        //Verifing that the cross icon is visible.
        cy.xpath('//*[@class="w-6 h-6 text-primary cursor-pointer"]').should('be.visible')


    })

    it('As a Admin the user should be navigated to the "Add New Member" form by clicking on "Add New Member" button on "Add Family Member" pop up window.',()=>{
        
        //Clicking on "Add New Member" button.
        cy.xpath('//*[@textid="add.new.member"]').should('be.visible').should('have.text','Add New Member')

        //Verifying that the "Add New Member" window is visible.
        cy.xpath('//div[@class="font-bold text-black"]').should('be.visible').should('have.text','Add Family Member')

    })

    it('At "Add New member" window each label and field have proper lable and validations',()=>{

        //Verfying if the cross icon is present.
        cy.get('h3>div>svg').should('be.visible')

        //verifying the label of "First Name" input field.
        cy.xpath('//label[@for="firstName"]').should('be.visible').should('contain','First Name')

        //verifying that the "First Name" input field is present.
        cy.xpath('//input[@name="firstName"]').should('be.visible').click()

        //verifying the label of "Last Name" input field.
        cy.xpath('//label[@for="lastName"]').should('be.visible').should('contain','Last Name')

        //verifying that the "Last Name" input field is present.
        cy.xpath('//input[@name="lastName"]').should('be.visible').click()
        cy.wait(3000)

        //Verifying the validation message for blank data for "First Name" input field.
        cy.xpath('//div[1]/div[1]/form[1]/div[1]/div[1]/div[2]').should('be.visible').should('have.text','Required')
        cy.wait(1000)

        //verifying the label of "User ID" input field.
        cy.xpath('//label[@for="userId"]').scrollIntoView().should('be.visible').should('contain','User ID')

        //verifying the label of "Generate ID" Link in "User ID" input field.
        cy.xpath('//*[contains(text(),"Gene")]').should('be.visible').should('contain','Generate ID')

        //verifying that the "User ID" input field is present.
        cy.xpath('//input[@name="userId"]').should('be.visible').click()
        cy.wait(3000)

        //Verifying the validation message for blank data for "Last Name" input field.
        cy.xpath('//div[1]/div[1]/form[1]/div[1]/div[2]/div[2]').should('be.visible').should('have.text','Required')
        cy.wait(1000)

        //verifying the label of "Relationship" Dropdown.
        cy.xpath('//label[@for="relationship"]').scrollIntoView().should('be.visible').should('contain','Subscription')
        
        //verifying that the "Relationship" Dropdown is present.
        cy.xpath('//div[1]/div[1]/form[1]/div[2]/div[2]/div').should('be.visible')

        //verifying the label of "Date of Birth" input field.
        cy.xpath('//label[@for="dateOfBirth"]').should('be.visible').should('contain','Date of Birth')

        //verifying that the "Date of Birth" input field is present.
        cy.xpath('//input[@name="dateOfBirth"]').should('be.visible')

        //verifying the label of "Gender" Dropdown.
        cy.xpath('//label[@for="gender"]').should('be.visible').should('contain','Gender')
        
        //verifying that the "Gender" Dropdown is present.
        cy.xpath('//div[1]/div[1]/form[1]/div[3]/div[2]/div/div').should('be.visible')

        //verifying the label of "Phone Number" input field.
        cy.xpath('//label[@for="phone"]').should('be.visible').should('have.text','Phone Number')

        //verifying that the "Phone Number" input field is present.
        cy.xpath('//input[@name="phone"]').should('be.visible').click()
        cy.wait(3000)

        //verifying the label of "Email" input field.
        cy.xpath('//label[@for="email"]').should('be.visible').should('have.text','Email')

        //verifying that the "Email" input field is present.
        cy.xpath('//input[@name="email"]').should('be.visible').click()

        //Verifying the validation message for blank data for "Phone Number" input field.
        cy.xpath('//div[contains(text(),"At")]').should('be.visible').should('have.text','At least one field is required(Email or Phone)')
        cy.wait(1000)

        //verifing the label of "Same as Account Address" checkbox.
        cy.xpath('//*[contains(text(),"Sa")]').should('be.visible').should('have.text','Same as account address')
        cy.wait(1000)

        //verifying that the "Same as Account Address" checkbox is present and is not checked.
        cy.get('//*[@name="sameAddress"]').should('be.visible').should('not.be.checked')

        //verifing the label of "Carry Account Subscription" checkbox.
        cy.xpath('//*[contains(text(),"Carr")]').should('be.visible').should('have.text','Carry Account Subscription')
        cy.wait(1000)

        //verifying that the "Same as Account Address" checkbox is present and is not checked.
        cy.get('//*[@name="sameSubscription"]').should('be.visible').should('not.be.checked')

        //Verifying the Header of "Address" section.
        cy.xpath('//div[@class="font-medium"][contains(text(),"A")]').scrollIntoView().should('be.visible').should('have.text','Address')

        //verifying the label of "Address Line 1" input field.
        cy.xpath('//label[@for="address1"]').scrollIntoView().should('be.visible').should('contain','Address Line 1')

        //verifying that the "Address Line 1" input field is present.
        cy.xpath('//input[@name="address1"]').should('be.visible').click()
        cy.wait(3000)

        //Verifying the validation message for blank data for "Email" input field.
        cy.xpath('//div[1]/div[1]/form[1]/div[4]/div[2]/div[2]').should('be.visible').should('have.text','At least one field is required(Email or Phone)')
        cy.wait(1000)

        //verifying the label of "Address Line 2" input field.
        cy.xpath('//label[@for="address2"]').should('be.visible').should('contain','Address Line 2')

        //verifying that the "Address Line 2" input field is present.
        cy.xpath('//input[@name="address2"]').should('be.visible').click({force:true})
        cy.wait(3000)

        //Verifying the validation message for blank data for "Address Line 1" input field.
        cy.xpath('//div[1]/div[1]/form[1]/div[8]/div[1]/div[2]').should('be.visible').should('have.text','Required')
        cy.wait(1000)

        //verifying the label of "Postal Code" input field.
        cy.xpath('//label[@for="postalCode"]').should('be.visible').should('contain','Postal Code')
        
        //verifying that the "Postal Code" input field is present.
        cy.xpath('//input[@name="postalCode"]').should('be.visible').click()

        //Clicking on "Add Family Member" button.
        cy.xpath('//button[@textid="add.minor"]').should('be.visible').should('have.text','Add Family Member').click()
        cy.wait(1000)

        //Verifying the validation message for blank data for "Postal Code" input field.
        cy.xpath('//div[1]/div[1]/form[1]/div[9]/div[1]/div[2]').should('be.visible').should('have.text','Required')
        cy.wait(1000)

        //Verifying the validation message for blank data for "City" input field.
        cy.xpath('//div[1]/div[1]/form[1]/div[9]/div[2]/div/div[2]').should('be.visible').should('have.text','Required')
        cy.wait(1000)

        //Verifying the validation message for blank data for "State" input field.
        cy.xpath('//div[1]/div[1]/form[1]/div[10]/div[1]/div[2]').should('be.visible').should('have.text','Required')
        cy.wait(1000)

        //verifying the label of "City" input field.
        cy.xpath('//label[@for="city"]').should('be.visible').should('contain','City')
        
        //verifying that the "City" input field is present.
        cy.xpath('//div[1]/div[1]/form[1]/div[9]/div[2]/div/div').should('be.visible')

        //verifying the label of "State" input field.
        cy.xpath('//label[@for="state"]').should('be.visible').should('contain','State')

        //verifying that the "State" input field is present.
        cy.xpath('//*[@name="state"]').should('be.visible')

        //verifying the label of "Add Family Member" button.
        cy.xpath('//button[@textid="add.minor"]').should('be.visible').should('have.text','Add Family Member')

        //Closing "Add New Member" form.
        cy.xpath('//*[@class="w-6 h-6 text-primary cursor-pointer"]').should('be.visible').click({force:true})
        cy.wait(3000)

        

    })
    it('By filling add family member form and cliking on add member button the family member should be added',()=>{
        
        const fname=faker.name.firstname();
        const lname = faker.name.firstName();
        const phone = faker.phone.phoneNumber('(###)-###-####');
        const email = faker.name.firstName()+'@yopmail.com';

        //Clicking on Back arrow on "Patient Details" page.
        cy.xpath('//*[@class="h-6 w-6 cursor-pointer"]').should('be.visible').click()
        cy.wait(3000)

        //Clearing search box on the patient page.    
        cy.get('[type=search]').should('be.visible').clear()

        //Getting an Existing "User ID" from patient list and saving into variable.
        cy.xpath('//tr[1]/td[2]/div/p').invoke('text').then((text1)=>{

        cy.readFile('cypress/fixtures/provider.json').then((provider) => {
        
        //search added patient    
        cy.get('[type=search]').should('be.visible').type(provider.email.toLowerCase())
        cy.wait(3000)

        //Checking email is present in the list
        cy.get('tr:nth-child(1)>td:nth-child(3)').should('be.visible').should('have.text',provider.email.toLowerCase())
        cy.wait(4000)
        })

        //Clicking on eye icon against patient 
        cy.get('tr:nth-child(1) > td:nth-child(8) > div > svg:nth-child(1) > path:nth-child(1)').scrollIntoView().should('be.visible').click()
        cy.wait(3000)
        cy.url().should('contain','/address')

        //Getting Email from Patient profile and saving into variable.
        cy.xpath('//div[2]/div[2]/div[1]/div[2]/div[1]/div').invoke('text').then((text3)=>{

        //Getting Phone Number from Patient profile and saving into variable.
        cy.xpath('//div[2]/div[2]/div[1]/div[2]/div[2]/div').invoke('text').then((text2)=>{

        //Click on Household tab in patient profile
        cy.xpath('//*[text()="Household"]').should('be.visible').should('contain','Household').click()
        cy.wait(3000)
        cy.url().should('contain','/household')

        //Click on "Add Family Member" button.
        cy.xpath('//*[@textid="charts.addmember"]').should('be.visible').should('have.text','Add Family Member').click()
        cy.wait(3000)

        //Verifying that the "Add Family Member" window is visible.
        cy.xpath('//div[@class="font-bold text-black"]').should('be.visible').should('have.text','Add Family Member')

        //Clicking on "Add New Member" button.
        cy.xpath('//*[@textid="add.new.member"]').should('be.visible').should('have.text','Add New Member')
        cy.wait(3000)

        //Verifying that the "Add New Member" window is visible.
        cy.xpath('//div[@class="font-bold text-black"]').should('be.visible').should('have.text','Add Family Member')

        
        //Validate "First Name" input field for "Minimum Characters".
        cy.xpath('//input[@name="firstName"]').should('be.visible').type('a')

        //Clicking inside the "Last Name" input field.
        cy.xpath('//input[@name="lastName"]').should('be.visible').click()
        cy.wait(3000)

        //Verifying the validation error for "Minimum Characters" for "First Name" input field.
        cy.xpath('//*[contains(text(),"First Name must")]').should('be.visible').should('have.text','First Name must be between 2 to 32 characters')
        cy.wait(3000)

        //Validate "First Name" input field for "Maximum Characters".
        cy.xpath('//input[@name="firstName"]').should('be.visible').clear().type('absghjnbghjnbvghjnbghjhgghh')
        cy.wait(2000)

        //Verifying the validation error for "Maximum Characters" for "First Name" input field.
        cy.xpath('//*[contains(text(),"Max")]').should('be.visible').should('have.text','Max Limit is 25 Characters')
        cy.wait(2000)

        //Validate "First Name" input field for "invalid data(Numbers)".
        cy.xpath('//input[@name="firstName"]').should('be.visible').clear().type('1234')
        cy.wait(2000)

        //Verifying the validation error for "invalid data(Numbers)" for "First Name" input field.
        cy.xpath('//*[contains(text(),"not ")]').should('be.visible').should('have.text','First Name is not valid')
        cy.wait(2000)

        //Validate "First Name" input field for "invalid data(Special Characters)".
        cy.xpath('//input[@name="firstName"]').should('be.visible').clear().type('@#$%^')
        cy.wait(2000)

        //Verifying the validation error for "invalid data(Special Characters)" for "First Name" input field.
        cy.xpath('//*[contains(text(),"not ")]').should('be.visible').should('have.text','First Name is not valid')
        cy.wait(2000)

        //Entering Valid Data into "First Name" input field.
        cy.xpath('//input[@name="firstName"]').should('be.visible').clear().type(fname)
        cy.wait(2000)

        //Validate "Last Name" input field for "Minimum Characters".
        cy.xpath('//input[@name="lastName"]').should('be.visible').type('a')
        cy.wait(2000)

        //Verifying the validation error for "Minimum Characters" for "Last Name" input field.
        cy.xpath('//*[contains(text(),"Last Name must")]').should('be.visible').should('have.text','Last Name must be between 2 to 32 characters')
        cy.wait(3000)

        //Validate "Last Name" input field for "Maximum Characters".
        cy.xpath('//input[@name="lastName"]').should('be.visible').clear().type('absghjnbghjnbvghjnbghjhgghh')
        cy.wait(2000)

        //Verifying the validation error for "Maximum Characters" for "Last Name" input field.
        cy.xpath('//*[contains(text(),"Max")]').should('be.visible').should('have.text','Max Limit is 25 Characters')
        cy.wait(2000)

        //Validate "Last Name" input field for "invalid data(Numbers)".
        cy.xpath('//input[@name="lastName"]').should('be.visible').clear().type('1234')
        cy.wait(2000)

        //Verifying the validation error for "invalid data(Numbers)" for "Last Name" input field.
        cy.xpath('//*[contains(text(),"not ")]').should('be.visible').should('have.text','Last Name is not valid')
        cy.wait(2000)

        //Validate "Last Name" input field for "invalid data(Special Characters)".
        cy.xpath('//input[@name="lastName"]').should('be.visible').clear().type('@#$%^')
        cy.wait(2000)

        //Verifying the validation error for "invalid data(Special Characters)" for "Last Name" input field.
        cy.xpath('//*[contains(text(),"not ")]').should('be.visible').should('have.text','Last Name is not valid')
        cy.wait(2000)

        //Entering Valid Data into "Last Name" input field.
        cy.xpath('//input[@name="lastName"]').should('be.visible').clear().type(lname)
        cy.wait(2000)

        //Validate "User ID" input field for "Minimum Characters".
        cy.xpath('//input[@name="userId"]').should('be.visible').type('a')
        cy.wait(2000)

        //Clicking inside the "Last Name" input field.
        cy.xpath('//input[@name="lastName"]').should('be.visible').click()
        cy.wait(2000)

        //Verifying the validation error for "Minimum Characters" for "User ID" input field.
        cy.xpath('//*[contains(text(),"Minimum ")]').should('be.visible').should('have.text','Minimum 5 character are required')
        cy.wait(3000)

        //Validate "User ID" input field for "Maximum Characters".
        cy.xpath('//input[@name="userId"]').should('be.visible').clear().type('asdfghgfdfghjhgfdfghhhhhhhhhhhjng')
        cy.wait(2000)

        //Verifying the validation error for "Maximum Characters" for "User ID" input field.
        cy.xpath('//*[contains(text(),"Maximum ")]').should('be.visible').should('have.text','Maximum 30 character are allowed')
        cy.wait(3000)

        //Validate "User ID" input field for "invalid data(Starting with Numbers)".
        cy.xpath('//input[@name="userId"]').should('be.visible').clear().type('1')
        cy.wait(2000)

        //Verifying the validation error for "invalid data(Starting with Numbers)" for "User ID" input field.
        cy.xpath('//*[contains(text(),"Can")]').should('be.visible').should('have.text','Can not start with numbers & special characters')
        cy.wait(3000)

        //Validate "User ID" input field for "invalid data(Starting with Special Characters)".
        cy.xpath('//input[@name="userId"]').should('be.visible').clear().type('-')
        cy.wait(2000)

        //Verifying the validation error for "invalid data(Starting with Special Characters)" for "User ID" input field.
        cy.xpath('//*[contains(text(),"Can")]').should('be.visible').should('have.text','Can not start with numbers & special characters')
        cy.wait(3000)

        //Validate "User ID" input field for "invalid data(invalid Special Characters allowed)".
        cy.xpath('//input[@name="userId"]').should('be.visible').clear().type('pavan@#%')
        cy.wait(2000)

        //Verifying the validation error for "invalid data(invalid Special Characters allowed)" for "User ID" input field.
        cy.xpath('//*[contains(text(),"Inva")]').should('be.visible').should('have.text','Invalid. Only hyphen(-) and underscore(_) is allowed')
        cy.wait(3000)

        //Validate "User ID" input field for "Existing Data".
        cy.xpath('//input[@name="userId"]').should('be.visible').clear().type(text1)
        cy.wait(2000)

        //Verifying the validation error for "Existing Data" for "User ID" input field.
        cy.xpath('//*[contains(text(),"alread")]').should('be.visible').should('have.text','UserId already is in use')
        cy.wait(3000)

        //Clicking on "Generate ID" Link in "User ID" input field.
        cy.xpath('//*[contains(text(),"Gene")]').should('be.visible').should('contain','Generate ID').click({force:true})
        cy.wait(2000)

        //Clicking on "Relationship" Dropdown.
        cy.xpath('//div[1]/div[1]/form[1]/div[2]/div[2]/div').should('be.visible').click()
        cy.wait(2000)

        //Clicking on "Parent" Relationship from the Dropdown.
        cy.get('.css-11unzgr>div:nth-child(1)').should('have.text','Parent').click()

        //Clicking on "Date of Birth" input field.
        cy.xpath('//input[@name="dateOfBirth"]').should('be.visible').click()

        //Selecting Year 1991 from calendar.
        cy.get('.react-datepicker__year-select').select('1991')

        //Selecting Date 12 from the calendar
        cy.get('.react-datepicker__day--012').should('be.visible').click()

        //Clicking on "Gender" Dropdown.
        cy.xpath('//div[1]/div[1]/form[1]/div[3]/div[2]/div/div').should('be.visible').click()

        //Click on Female Tab from the Dropdown.
        cy.get('.css-11unzgr>div:nth-child(2)').should('have.text','Female').click()

        //Entering Existing Data into "Phone Number" input field.
        cy.xpath('//input[@name="phone"]').should('be.visible').type(text2)
        cy.wait(3000)

        //Clicking inside "Email" input field.
        cy.xpath('//input[@name="email"]').should('be.visible').click()
        cy.wait(3000)

        //Verifying the "Warning Message" for "Existing Data" for "Phone Number" input field.
        cy.xpath('//*[contains(text(),"alread")]').should('be.visible').should('have.text','Phone number already exist')
        cy.wait(3000)

        //Entering Existing Data into "Email" input field.
        cy.xpath('//input[@name="email"]').should('be.visible').type(text3)

        //Verifying the "Warning Message" for "Existing Data" for "Email" input field.
        cy.xpath('//*[contains(text(),"Email already exist")]').should('be.visible').should('have.text','Email already exist')
        cy.wait(3000)

    })

    })
    
    })
        
       //Checking "Same as Account Address" checkbox.
       cy.get('//*[@name="sameAddress"]').should('be.visible').should('not.be.checked').check()
       cy.wait(3000)

       //Checking "Same as Account Address" checkbox.
       cy.get('//*[@name="sameSubscription"]').should('be.visible').should('not.be.checked').check()
       cy.wait(1000)

        cy.xpath('//div[1]/form[1]/div[4]/button').should('be.visible').should('have.text','Add Minor').click()
        cy.contains('Family Member Added successfully')
    })

    it('The added family member should refelect under charts section',()=>{
        cy.xpath('//span[contains(text(),"shiva")]').should('be.visible').should('have.text','shiva teja')
        cy.get('.h-screen>div:nth-child(2)>div:nth-child(2)>div>div:nth-child(2)>div:nth-child(2)>span').should('be.visible').should('have.text','Female')
     })
    //Edit Family Member
    it('As a Admin the user can edit the details of the family member by clicking on edit icon against the particular member',()=>{
        
        cy.get('.h-screen>div:nth-child(2)>div:nth-child(2)').should('be.visible')
        cy.get(':nth-child(2) > .bg-white > .justify-between > .flex > :nth-child(3)').should('be.visible').click()

    })
    it('At Edit family member window each label and field have proper lable and validations',()=>{
        cy.xpath('//div[1]/h3[1]/div[1]/div').should('be.visible').should('have.text','Edit Family Member')
        cy.get('div.hidden>h3>div>svg').should('be.visible')

        cy.xpath('//div[1]/form[1]/div[1]/div[1]/label').should('be.visible').should('have.text','First Name')
        cy.xpath('//div[1]/form[1]/div[1]/div[1]/div[1]').should('be.visible')

        cy.xpath('//div[1]/form[1]/div[1]/div[2]/label').should('be.visible').should('have.text','Last Name')
        cy.xpath('//div[1]/form[1]/div[1]/div[2]/div').should('be.visible')

        cy.xpath('//div[1]/form[1]/div[2]/div[1]/label').should('be.visible').should('have.text','Date of Birth')
        cy.xpath('//div[1]/form[1]/div[2]/div[1]/div').should('be.visible')

        cy.xpath('//div[1]/form[1]/div[2]/div[2]/div[1]').should('be.visible').should('have.text','Relationship')
        cy.xpath('//div[1]/form[1]/div[2]/div[2]/div[2]').should('be.visible')

        cy.xpath('//div[1]/form[1]/div[3]/div/div[1]').should('be.visible').should('have.text','Gender')
        cy.xpath('//div[1]/form[1]/div[3]/div/div[2]').should('be.visible')

        cy.xpath('//div[1]/form[1]/div[4]/button').should('be.visible').should('have.text','Save Details')

    })
    it('After editing the family member details the user can save details by clicking save details button',()=>{
        cy.xpath('//div[1]/form[1]/div[1]/div[1]/div[1]').should('be.visible').clear().type('Nanda')

        cy.xpath('//div[1]/form[1]/div[1]/div[2]/div[1]').should('be.visible').clear().type('Kishore')

        cy.xpath('//div[1]/form[1]/div[2]/div[1]/div[1]').should('be.visible').click()
        cy.get('.react-datepicker__day--010').scrollIntoView().should('be.visible').click()

        cy.xpath('//div[1]/form[1]/div[2]/div[2]/div[2]').should('be.visible').click()
        cy.get('.css-11unzgr>div:nth-child(1)').scrollIntoView().click()

        cy.xpath('//div[1]/form[1]/div[3]/div/div[2]').should('be.visible').click()
        cy.get('.css-11unzgr>div:nth-child(1)').scrollIntoView().click()

        cy.xpath('//div[1]/form[1]/div[4]/button').should('be.visible').should('have.text','Save Details').click()

        cy.contains('Family Member Updated Successfully')
        cy.wait(2000)
    })

    it('The edited details should be refelected under charts section',()=>{
        cy.get(':nth-child(2) > .bg-white > .justify-between > .text-base').should('be.visible').should('have.text','nanda kishore')
        cy.get('.h-screen>div:nth-child(2)>div:nth-child(2)>div>div:nth-child(2)>div:nth-child(2)>span').should('be.visible').should('have.text','Male')
 
    })
    //Delete Family Member
    it('As a Admin the user can able to delete a family member by clicking on delete icon on particular member',()=>{
        cy.get('.h-screen>div:nth-child(2)>div:nth-child(2)').should('be.visible')
        cy.get(':nth-child(2) > .bg-white > .justify-between > .flex > :nth-child(2)').should('be.visible').click()

    })

    it('At delete member confirmation window each label and field have proper lable and validations',()=>{
        cy.xpath('//div[1]/h3/div/div').should('be.visible').should('have.text','Confirmation')
        cy.get('div.hidden>h3>div>svg').should('be.visible')

        cy.xpath('//div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/span[1]').should('be.visible').should('have.text','nanda kishore')

        cy.xpath('//div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div').should('be.visible').should('have.text','son')

        cy.xpath('//div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div').should('be.visible').should('have.text','Date of Birth')
        cy.xpath('//div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div').should('be.visible').should('have.text','Gender')

        cy.xpath('//div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/span').should('be.visible').should('have.text','Male')
        cy.xpath('//div[1]/div[2]/div[1]/div[1]/div[1]/div[2]').should('be.visible').should('have.text','Are you sure, you want to remove this member?')

        cy.xpath('//div[1]/div[2]/div[1]/div[1]/div[1]/div[3]/button').should('be.visible').should('have.text','Remove')

    })

    it('By clicking on remove button on confirmation window the family member should be deleted',()=>{
        cy.xpath('//div[1]/div[2]/div[1]/div[1]/div[1]/div[3]/button').should('be.visible').should('have.text','Remove').click()
        cy.contains('Family Member Deleted Successfully')
  
    })

    it('The deleted member should not reflect under charts section',()=>{
        cy.get('.flex-wrap > .font-medium').should('be.visible').should('have.text','1 Members')
        cy.logout()        
    })


})