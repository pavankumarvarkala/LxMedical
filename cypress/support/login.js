import faker from 'faker'
const cred = require('../fixtures/cred.json')
Cypress.Commands.add('login', () => {
  cy.visit(cred.qaUrl);
  cy.get('input[name=email]').type(cred.email)
  cy.get('input[name=password]').type(cred.password)
  cy.get('button[type=submit]').click()
  cy.get('.max-w-xs > img').should('be.visible');
})
Cypress.Commands.add('logout', () => {
  cy.get('#headlessui-menu-button-1').should('be.visible').click();
  cy.wait(4000)
  cy.xpath("//div[@role='menu']//div[text()='Sign Out']").should('be.visible').click();
  cy.get('.mt-3 > .mt-2 > div').should('have.text', 'Are you sure, you want to sign out?').and('be.visible');
  cy.get('.border > div').should('be.visible');
  cy.xpath("//button//div[text()='Confirm']").should('be.visible').click();
  cy.wait(5000)
  // cy.xpath("//div[text()='Sign In']").should('be.visible');
})
Cypress.Commands.add('AddPatient', () => {
  const email = faker.name.firstName()+'@mailinator.com';
  const fname = faker.name.firstName()
  const pname = faker.name.firstName()
  const lname = faker.name.firstName()
  const phone = faker.phone.phoneNumber('(###)-###-####');

  //Clicking on "Add New Patient" button.
  cy.xpath('//div[contains(text(),"Add N")]').should('be.visible').should('have.text','Add New Patient').click()
  cy.wait(2000)

  //Verifying header of "Add New Patient" form.
  cy.xpath('//div[@class="font-bold text-black"]').should('be.visible').should('have.text','Add New Patient')

  cy.xpath('//input[@name="firstName"]').should('be.visible').type(fname)

  cy.xpath('//input[@name="lastName"]').should('be.visible').type(lname)

  // cy.xpath('//div[1]/div[1]/form[1]/div[2]/div[1]/div[1]/input[1]').should('be.visible').type(pname)

  //Entering "valid data" into "User ID" input field.
  cy.xpath('//*[text()="Generate ID"]').scrollIntoView().should('be.visible').should('contain','Generate ID').click()
  cy.wait(2000)

  //Selecting subscription from dropdown.
  cy.xpath('//div[1]/div[1]/form[1]/div[3]/div[1]/div').should('be.visible').click()
  cy.get('div.css-11unzgr>div:nth-child(2)').click()

  //Entering "valid data" into "Phone Number" input field.
  cy.xpath('//input[@name="phone"]').should('be.visible').clear().type(phone)
  cy.wait(2000)


  //Entering "valid data" into "Email" input field.
  cy.xpath('//input[@name="email"]').should('be.visible').clear().type(email)
  cy.wait(2000)

  //Entering "Valid" into "Date of Birth" input field.
  cy.xpath('//input[@name="dateOfBirth"]').should('be.visible').click()
  cy.get('.react-datepicker__year-select').select('1990')
  cy.wait(1000)
  cy.get('.react-datepicker__day--015').click()

  //Entering "Valid" into "Gender" input field.
  cy.xpath('//div[1]/div[1]/form[1]/div[5]/div/div').should('be.visible').click()
  cy.get('div.css-11unzgr>div:nth-child(1)').click()

  //Entering "Valid" into "Address-1" input field.
  cy.xpath('//input[@name="address1"]').should('be.visible').type('plot no 92')

  //Entering "Valid" into "Postal Code" input field.
  cy.xpath('//input[@name="postalCode"]').should('be.visible').type('544')
  cy.xpath('//input[@name="address2"]').should('be.visible').click({force:true})
  cy.wait(3000)

  //Changing the "City" from City input field.
  cy.xpath('//div[1]/div[1]/form[1]/div[9]/div[2]/div/div').should('be.visible').click()
  cy.wait(2000)
  cy.xpath('//*[@class=" css-yt9ioa-option"][contains(text(),"HILLBURN")]').scrollIntoView().click()
  cy.wait(2000)

  //Clicking on "Add Patient" button.
  cy.xpath('//button[@textid="add.patient.details"]').should('be.visible').should('have.text','Add Patient').click()
  cy.wait(1000)
  
  cy.contains('Successfully Registered.');
  cy.writeFile('cypress/fixtures/provider.json', {
      email: email,
      phone: phone,
      firstname: fname,
      lastname: lname
  });
})

Cypress.Commands.add('addfamilymembercharts', () => {
  const fname = faker.name.firstName()
  const lname = faker.name.firstName()    
  
  cy.xpath('//div[1]/form[1]/div[1]/div[1]/div[1]').should('be.visible').type(fname)

  cy.xpath('//div[1]/form[1]/div[1]/div[2]/div[1]').should('be.visible').type(lname)

  cy.xpath('//div[1]/form[1]/div[2]/div[1]/div[1]').should('be.visible').click()
  cy.get('.react-datepicker__year-select').select('1991')
  cy.get('.react-datepicker__day--012').should('be.visible').click()

  cy.xpath('//div[1]/form[1]/div[2]/div[2]/div[2]').should('be.visible').click()
  cy.get('.css-11unzgr>div:nth-child(2)').click()

  cy.xpath('//div[1]/form[1]/div[3]/div/div[2]').should('be.visible').click()
  cy.get('.css-11unzgr>div:nth-child(2)').click()

  cy.xpath('//div[1]/form[1]/div[4]/button').should('be.visible').should('have.text','Add Minor').click()
  cy.contains('Family Member Added successfully')
  cy.writeFile('cypress/fixtures/provider.json', {
    
    firstname: fname,
    lastname: lname
});
})

  Cypress.Commands.add('addfamilymember', () => {
        const fname = faker.name.firstName()
        const lname = faker.name.firstName()    
        
        cy.xpath('//div[1]/form[1]/div[1]/div[1]/div[1]/input[1]').should('be.visible').type(fname)

        cy.xpath('//div[1]/form[1]/div[1]/div[2]/div[1]').should('be.visible').type(lname)

        cy.xpath('//div[1]/form[1]/div[2]/div[1]/div[1]').should('be.visible').click()
        cy.get('.react-datepicker__year-select').select('1991')
        cy.get('.react-datepicker__day--012').should('be.visible').click()

        cy.xpath('//div[1]/form[1]/div[2]/div[2]/div[2]').should('be.visible').click()
        cy.get('.css-11unzgr>div:nth-child(2)').click()

        cy.xpath('//div[1]/form[1]/div[3]/div/div[2]').should('be.visible').click()
        cy.get('.css-11unzgr>div:nth-child(2)').click()
    
        cy.wait(2000)

        cy.xpath('//div[1]/form/div[4]/div/div').should('be.visible').type('Fever')
        
        cy.xpath('//div[1]/form[1]/div[6]/button').should('be.visible').should('have.text','Add Minor').click()

        cy.contains('Family Member Added successfully')
        cy.writeFile('cypress/fixtures/provider.json', {
          
          firstname: fname,
          lastname: lname
      });
  })
  Cypress.Commands.add('bookappointment', () => {
    cy.xpath('//tr[1]/td[5]/div[1]/div[1]').should('be.visible').should('have.text','Book').click()
    cy.wait(4000)
    cy.url().should('contain','/book_appointment')

    cy.xpath('//div[4]/div[1]/div[1]/div[1]/div[1]/input[1]').should('be.visible').should('not.be.checked').check({force:true})
    cy.xpath('//div[5]/div[1]/div[1]/div[1]/div[1]/input[1]').should('be.visible').should('not.be.checked').check({force:true}) 
    cy.xpath('//div[contains(text(),"Con")]').should('be.visible').should('have.text','Continue').click()
    
    cy.wait(4000)
    cy.xpath('//div[1]/div[1]/div[2]/div[2]/div/div/div/textarea').should('be.visible').type('Fever')
    cy.xpath('//input[@name="patients[0].image1"]').attachFile('image1.jpg')

    cy.wait(2000)
    cy.xpath('//input[@name="patients[0].image2"]').attachFile('image2.jpg')
    cy.wait(2000) 

    cy.xpath('//div[contains(text(),"Con")]').should('be.visible').should('have.text','Continue').click()
    cy.wait(4000)
    cy.xpath('//input[@type="text"]').should('be.visible').click()
    
    cy.get('.react-datepicker__day--today').click()
    cy.xpath('//input[@name="EVENING"]').should('be.visible').should('not.be.checked').check()
    cy.xpath('//input[@name="MORNING"]').should('be.visible').should('not.be.checked').check()

    cy.xpath('//button[@textid="book.appointment"]').should('be.visible').should('have.text','Book Appointment').click()
    cy.xpath('//div[1]/div[3]/button').should('be.visible').should('have.text','Continue').click()
    cy.contains('Appointment Added successfully ')
    cy.wait(4000)
    
 })

 Cypress.Commands.add('patientbookappointment', () => {

  cy.xpath('//div[4]/div[1]/div[1]/div[1]/div[1]/input[1]').should('be.visible').should('not.be.checked').check({force:true})
    cy.xpath('//div[5]/div[1]/div[1]/div[1]/div[1]/input[1]').should('be.visible').should('not.be.checked').check({force:true}) 
    cy.xpath('//div[contains(text(),"Con")]').should('be.visible').should('have.text','Continue').click()
    
    cy.wait(4000)
    cy.xpath('//div[1]/div[1]/div[2]/div[2]/div/div/div/textarea').should('be.visible').type('Fever')
    cy.xpath('//input[@name="patients[0].image1"]').attachFile('image1.jpg')

    cy.wait(2000)
    cy.xpath('//input[@name="patients[0].image2"]').attachFile('image2.jpg')
    cy.wait(2000) 

    cy.xpath('//div[contains(text(),"Con")]').should('be.visible').should('have.text','Continue').click()
    cy.wait(4000)
    cy.xpath('//input[@type="text"]').should('be.visible').click()
    
    cy.get('.react-datepicker__day--today').click()
    cy.xpath('//input[@name="EVENING"]').should('be.visible').should('not.be.checked').check()
    cy.xpath('//input[@name="MORNING"]').should('be.visible').should('not.be.checked').check()

    cy.xpath('//button[@textid="book.appointment"]').should('be.visible').should('have.text','Book Appointment').click()
    cy.xpath('//div[1]/div[3]/button').should('be.visible').should('have.text','Continue').click()
    cy.contains('Appointment Added successfully ')
    cy.wait(4000)

 })

 Cypress.Commands.add('addcard', () => {
  //Click on "Add Payment Card" button.
  cy.xpath('//div[contains(text(),"Add P")]').should('be.visible').should('contain','Add Payment Card').click()

  //Validate "Add Card Details" modal is present or not.
  cy.xpath('//div[1]/h3[1]/div[1]/div[1]').should('be.visible').should('contain','Add Card Details')

  //Enter Valid data into "Card Number" input field.
  cy.xpath('//div[1]/div[1]/form[1]/div[1]/div[1]/div').should('be.visible').type('5555555555554444')
  
  //Enter Valid data into "Card Holder" input field.
  cy.xpath('//div[1]/div[1]/form[1]/div[2]/div[1]/div/div').should('be.visible').type('pavan kumar')

  //Enter Valid data into "Expiry Date" input field.
  cy.xpath('//div[1]/div[1]/form[1]/div[2]/div[2]/div[1]/div[1]/div').should('be.visible').type('1123')

  //Enter Valid data into "CVV Details" input field.
  cy.xpath('//div[1]/div[1]/form[1]/div[2]/div[2]/div[1]/div[2]/div').should('be.visible').type('593')

  //Clicking on "Add Card" button.
  cy.xpath('//div[1]/div[1]/form[1]/div[4]/button[1]').should('be.visible').should('contain','Add Card').click()

  cy.contains('A New Card Has Been Added')
})
  
