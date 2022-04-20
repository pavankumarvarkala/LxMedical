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
  cy.xpath("//div[@role='menu']//div[text()='Sign Out']").should('be.visible').click();
  cy.get('.mt-3 > .mt-2 > div').should('have.text', 'Are you sure, you want to sign out?').and('be.visible');
  cy.get('.border > div').should('be.visible');
  cy.xpath("//button//div[text()='Confirm']").should('be.visible').click();
  cy.wait(5000)
  cy.xpath("//div[text()='Sign In']").should('be.visible');
})
Cypress.Commands.add('AddPatient', () => {
  const email = faker.name.firstName()+'@mailinator.com';
  const fname = faker.name.firstName()
  const lname = faker.name.firstName()
  const phone = faker.phone.phoneNumber('(###)-###-####');
  cy.get('[textid="add.patient"]').should('be.visible').should('have.text','Add New Patient').click()
  cy.get('div:nth-child(9) > div > div').should('be.visible')
  cy.get('div.hidden > div.mt-6 > div > form>div:nth-child(1)>div:nth-child(1)>div').should('be.visible').type(fname)
  cy.get('div.hidden > div.mt-6 > div > form>div:nth-child(1)>div:nth-child(2)>div').should('be.visible').type(lname)
  cy.wait(2000)
  cy.get('div.hidden > div.mt-6 > div > form>div:nth-child(2)>div:nth-child(1)>div:nth-child(2)').should('be.visible').clear().type(phone)
  cy.get('div.hidden > div.mt-6 > div > form>div:nth-child(2)>div:nth-child(2)>div:nth-child(2)').should('be.visible').clear().type(email)
  cy.get('div.hidden > div.mt-6 > div > form>div:nth-child(3)>div:nth-child(1)>div').should('be.visible').click()
  cy.get('.react-datepicker__year-select').select('1990')
  cy.wait(1000)
  cy.get('.react-datepicker__day--015').click()
  cy.get('div.hidden > div.mt-6 > div > form>div:nth-child(3)>div:nth-child(2)>div:nth-child(2)').should('be.visible').click()
  cy.get('div.css-11unzgr>div:nth-child(1)').click()
  cy.get('div.hidden > div.mt-6 > div > form>div:nth-child(6)>div:nth-child(1)>div:nth-child(2)').should('be.visible').type('plot no 92')
  cy.get('div.hidden > div.mt-6 > div > form>div:nth-child(7)>div:nth-child(1)>div').should('be.visible').type('544')
  cy.get('div.hidden > div.mt-6 > div > form>div:nth-child(6)>div:nth-child(1)>div').should('be.visible').click()
  cy.get('div.hidden > div.mt-6 > div > form>div:nth-child(9)>button').should('be.visible').should('have.text','Continue').click()
  cy.wait(2000)
  cy.contains('Successfully Registered.');
  cy.writeFile('cypress/fixtures/provider.json', {
      email: email,
      phone: phone,
      firstname: fname,
      lastname: lname
  });
})
  Cypress.Commands.add('addfamilymember', () => {
        const fname = faker.name.firstName()
        const lname = faker.name.firstName()    
        
        cy.get('.hidden > .mt-6 > .px-4 > :nth-child(1) > :nth-child(1) > .relative > .appearance-none').should('be.visible').type(fname)
        cy.get('.hidden > .mt-6 > .px-4 > :nth-child(1) > :nth-child(2) > .relative > .appearance-none').should('be.visible').type(lname)
        cy.get('.hidden > .mt-6 > .px-4 > :nth-child(2) > div.w-full > .relative > .react-datepicker-wrapper > .react-datepicker__input-container > .appearance-none').should('be.visible').click()
        cy.get('.react-datepicker__year-select').select('1991')
        cy.get('.react-datepicker__day--012').should('be.visible').click()
        cy.get('.hidden > .mt-6 > .px-4 > :nth-child(2) > :nth-child(2) > .font-bold > .css-yk16xz-control').should('be.visible').click()
        cy.get('.css-11unzgr>div:nth-child(2)').click()
        cy.get('.hidden > .mt-6 > .px-4 > :nth-child(3) > :nth-child(1) > .font-bold > .css-yk16xz-control > .css-1hwfws3').should('be.visible').click()
        cy.get('.css-11unzgr>div:nth-child(2)').click()
        cy.get('.hidden > .mt-6 > .px-4 > .pt-4 > .flex').should('be.visible').should('have.text','Add Member').click()
        cy.contains('Family Member Added successfully')
        cy.writeFile('cypress/fixtures/provider.json', {
          
          firstname: fname,
          lastname: lname
      });
  })
  Cypress.Commands.add('bookappointment', () => {
    cy.get('tr:nth-child(1)>td:nth-child(5)>div>div').should('be.visible').should('have.text','Book').click()
    cy.url().should('contain','/book_appointment')
    cy.get('.my-4>div:nth-child(2)>div>form>div>div:nth-child(1)>div:nth-child(1)>div>div').click()
    cy.get('.react-datepicker__day--today').click()
    cy.get('.my-4>div:nth-child(2)>div>form>div>div:nth-child(1)>div:nth-child(2)>div:nth-child(2)>div>input').should('be.visible').check()
    cy.get('.my-4>div:nth-child(2)>div>form>div>div:nth-child(3)').click()
    cy.get('form>.px-8>div:nth-child(3)>div:nth-child(2)>div:nth-child(2)>div>div').type('Fever')
    cy.get('.my-8 > .flex').should('be.visible').should('have.text','Continue').click()
    cy.get('form>div>div:nth-child(2)>div:nth-child(3)>div:nth-child(3)').click()
    cy.get('form>div>div>div>[type=button]').should('be.visible').should('have.text','Continue').click()
    cy.wait(2000)
    cy.contains('Appointment Added successfully')
    cy.xpath('/html/body/div[7]/div/div/div[1]/div[2]/div[3]/button').should('be.visible').should('have.text','Continue').click()
  })
  
