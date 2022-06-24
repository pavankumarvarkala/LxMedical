///<reference types='cypress'/>
import faker from 'faker'
describe('Patient management module test cases', ()=>{

    it('As a admin the user should be navigated on patients page by clicking on patients tab', ()=>{
        cy.login()
        cy.xpath('//nav/div[2]').should('be.visible').should('have.text','Patients').click()
        cy.url().should('contain','/patients')
    })
     
    it('At patients page each label and field should have proper label and validations',()=>{
        
        cy.xpath('//div[2]/div[1]/div[1]/div[1]').should('be.visible').should('have.text','Patients')
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
        cy.xpath('//div[5]/div[1]/div[1]/div[1]/div[1]/div[1]').should('be.visible').should('have.text','Add New Patient')

    })

    it('At Add New Patient page each label and field should have proper label and validations ', ()=>{
        cy.xpath('//div[5]/div[1]/div[1]/div[1]/div[1]/div[1]').should('be.visible').should('have.text','Add New Patient')
        cy.get('div.hidden>div:nth-child(1)>svg').should('be.visible')
        cy.get('div.hidden > div.mt-6 > div > form>div:nth-child(1)>div:nth-child(1)>label').should('be.visible').should('have.text','First Name')
        cy.get('div.hidden > div.mt-6 > div > form>div:nth-child(1)>div:nth-child(1)>div').should('be.visible').click()
        cy.get('div.hidden > div.mt-6 > div > form>div:nth-child(1)>div:nth-child(2)>div').should('be.visible').click()
        cy.wait(3000)
        cy.get('div.hidden > div.mt-6 > div > form>div:nth-child(1)>div:nth-child(1)>div.text-red-600').should('be.visible').should('have.text','Required')
        cy.wait(1000)
        cy.get('div.hidden > div.mt-6 > div > form>div:nth-child(1)>div:nth-child(2)>label').scrollIntoView().should('be.visible').should('have.text','Last Name')
        cy.get('div.hidden > div.mt-6 > div > form>div:nth-child(2)>div:nth-child(1)>div').should('be.visible').click()
        cy.wait(3000)
        cy.get('div.hidden > div.mt-6 > div > form>div:nth-child(1)>div:nth-child(2)>div.text-red-600').should('be.visible').should('have.text','Required')
        cy.wait(1000)
        cy.get('div.hidden > div.mt-6 > div > form>div:nth-child(2)>div:nth-child(1)>label').should('be.visible').should('have.text','Phone Number')
        cy.get('div.hidden > div.mt-6 > div > form>div:nth-child(2)>div:nth-child(2)>div').should('be.visible').click()
        cy.wait(3000)
        cy.get('div.hidden > div.mt-6 > div > form>div:nth-child(2)>div:nth-child(1)>div.text-red-600').should('be.visible').should('have.text','Required')
        cy.wait(1000)
        cy.get('div.hidden > div.mt-6 > div > form>div:nth-child(2)>div:nth-child(2)>label').should('be.visible').should('have.text','Email')
        cy.get('div.hidden > div.mt-6 > div > form>div:nth-child(6)>div:nth-child(1)>div').should('be.visible').click()
        cy.wait(3000)
        cy.get('div.hidden > div.mt-6 > div > form>div:nth-child(2)>div:nth-child(2)>div.text-red-600').should('be.visible').should('have.text','Required')
        cy.wait(1000)
        cy.get('div.hidden > div.mt-6 > div > form>div:nth-child(3)>div:nth-child(1)>label').should('be.visible').should('have.text','Date of Birth')
        cy.get('div.hidden > div.mt-6 > div > form>div:nth-child(3)>div:nth-child(2)>div:nth-child(1)').should('be.visible').should('have.text','Gender')
        cy.get('div.hidden > div.mt-6 > div > form>div:nth-child(3)>div:nth-child(2)>div:nth-child(2)').should('be.visible')
        cy.get('div.hidden > div.mt-6 > div > form>div:nth-child(5)').scrollIntoView().should('be.visible').should('have.text','Address')
        cy.get('div.hidden > div.mt-6 > div > form>div:nth-child(6)>div:nth-child(1)>label').scrollIntoView().should('be.visible').should('have.text','Address Line 1')
        cy.get('div.hidden > div.mt-6 > div > form>div:nth-child(6)>div:nth-child(1)>div').should('be.visible').click({force:true})
        cy.get('div.hidden > div.mt-6 > div > form>div:nth-child(6)>div:nth-child(2)>div').should('be.visible').click()
        cy.wait(3000)
        cy.get('div.hidden > div.mt-6 > div > form>div:nth-child(6)>div:nth-child(1)>div.text-red-600').should('be.visible').should('have.text','Required')
        cy.wait(1000)
        cy.get('div.hidden > div.mt-6 > div > form>div:nth-child(6)>div:nth-child(2)>label').should('be.visible').should('contain','Address Line 2')
        cy.get('div.hidden > div.mt-6 > div > form>div:nth-child(7)>div:nth-child(1)>label').should('be.visible').should('contain','Postal Code')
        cy.get('div.hidden > div.mt-6 > div > form>div:nth-child(7)>div:nth-child(1)>div').should('be.visible')
        cy.get('div.hidden > div.mt-6 > div > form>div:nth-child(7)>div:nth-child(2)>label').should('be.visible').should('contain','City')
        cy.get('div.hidden > div.mt-6 > div > form>div:nth-child(7)>div:nth-child(2)>div').should('be.visible')
        cy.get('div.hidden > div.mt-6 > div > form>div:nth-child(8)>div>label').should('be.visible').should('have.text','State')
        cy.get('div.hidden > div.mt-6 > div > form>div:nth-child(8)>div>div').should('be.visible')
        cy.get('div.hidden > div.mt-6 > div > form>div:nth-child(9)>button').should('be.visible').should('have.text','Continue')
        cy.get('div:nth-child(9) > div > div > div.hidden>div:nth-child(1)>svg').scrollIntoView().should('be.visible').click()

    })

    it('After filling the form with valid data and clicking on continue the patient should be added ', ()=>{
        const email = faker.name.firstName()+'@mailinator.com';
        const fname = faker.name.firstName()
        const lname = faker.name.firstName()
        const phone = faker.phone.phoneNumber('(###)-###-####');
        
        cy.xpath('//tr[1]/td[2]/div/p').invoke('text').then((text2)=>{
            
        cy.xpath('//tbody/tr[1]/td[7]/div[1]/*[1]').scrollIntoView().should('be.visible').click({force:true})
        cy.wait(4000)
        cy.xpath('//div[2]/div[2]/div[2]/div[2]/div[1]/div').invoke('text').then((text1)=>{
        
        cy.xpath('//div[@id="root"]/div[2]/div[1]/div[2]/div[1]/div[1]/*[1]').scrollIntoView().should('be.visible').click({force:true})
        cy.wait(4000)

        cy.get('[textid="add.patient"]').should('be.visible').should('have.text','Add New Patient').click()
        cy.get('div:nth-child(9) > div > div').should('be.visible')
        cy.get('div.hidden > div.mt-6 > div > form>div:nth-child(1)>div:nth-child(1)>div').should('be.visible').type(fname)
        cy.get('div.hidden > div.mt-6 > div > form>div:nth-child(1)>div:nth-child(2)>div').should('be.visible').type(lname)
        cy.get('div.hidden > div.mt-6 > div > form>div:nth-child(2)>div:nth-child(1)>div').should('be.visible').type(text1)
       
        })
        cy.wait(2000)
        cy.get('div.hidden > div.mt-6 > div > form>div:nth-child(2)>div:nth-child(2)>div').should('be.visible').click()
        cy.wait(2000)
        cy.get('div.hidden > div.mt-6 > div > form>div:nth-child(3)>div:nth-child(1)>div').should('be.visible').click()
        cy.wait(3000)
        cy.get('div.hidden > div.mt-6 > div > form>div:nth-child(2)>div:nth-child(1)>div.text-red-600').scrollIntoView().should('be.visible').should('have.text','An account already exists with this phone number')
        cy.wait(2000)
        cy.get('div.hidden > div.mt-6 > div > form>div:nth-child(2)>div:nth-child(2)>div:nth-child(2)').should('be.visible').type(text2)

         })
        cy.wait(2000)
        cy.get('div.hidden > div.mt-6 > div > form>div:nth-child(6)>div:nth-child(1)>div').should('be.visible').click()
        cy.wait(2000)
        cy.get('div.hidden > div.mt-6 > div > form>div:nth-child(2)>div:nth-child(2)>div.text-red-600').should('be.visible').should('have.text','An account already exists with this email')
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
            phone: phone
        });

    })

    it('The added patient should refelct under patients listing', () => {
        cy.readFile('cypress/fixtures/provider.json').then((provider) => {
        cy.get('[type=search]').should('be.visible').type(provider.email.toLowerCase())
        cy.get('tr:nth-child(1)>td:nth-child(2)').should('be.visible').should('have.text',provider.email.toLowerCase())
        cy.wait(4000)
        

        })
    })

    it('As a admin the user should be navigated to the Book Appointment page by clicking on Book button against patient ', ()=>{
        cy.get('tr:nth-child(1) > td:nth-child(5)>div>div').scrollIntoView().should('be.visible').click({force:true})
        cy.url().should('contain','/book_appointment')
        cy.wait(5000)
        cy.get('.w-8 > path').scrollIntoView().should('be.visible').click()
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
        cy.get('div.hidden>div:nth-child(2)>div:nth-child(2)>button').click()
        cy.wait(4000)
        cy.get('tr:nth-child(1)>td:nth-child(6)>button').scrollIntoView().should('be.visible').click({force:true})
        cy.wait(4000)
        cy.get('div.hidden>div:nth-child(2)>div:nth-child(2)>button').click()
        cy.wait(4000) 
        
     })

     it('As a Admin the user can change the membership of the patient by clicking on the membership plan under subscription', ()=>{
        cy.xpath('//tr[1]/td[4]/div/div/button').scrollIntoView().should('be.visible').click({force:true})
        cy.wait(5000)
        cy.xpath('//tr[1]/td[4]/div/div/div/div/div[2]').should('be.visible').should('have.text','standard').click()

        cy.wait(2000)
        cy.xpath('//div[1]/div[2]/div[3]/button').should('be.visible').should('have.text','Confirm').click()
        cy.contains('Patient Membership Changed Successfully')
        cy.wait(2000)

        cy.wait(5000)
        cy.xpath('//tr[1]/td[4]/div/div/button').scrollIntoView().should('be.visible').click({force:true})
        cy.wait(5000)
        cy.xpath('//tr[1]/td[4]/div/div/div/div/div[3]').should('be.visible').should('have.text','executive').click()

        cy.wait(2000)
        cy.xpath('//div[1]/div[2]/div[3]/button').should('be.visible').should('have.text','Confirm').click()
        cy.contains('Patient Membership Changed Successfully')
        cy.wait(2000)

        cy.xpath('//tr[1]/td[4]/div/div/button').scrollIntoView().should('be.visible').click({force:true})
        cy.wait(5000)
        cy.xpath('//tr[1]/td[4]/div/div/div/div/div[4]').should('be.visible').should('have.text','cypress').click()

        cy.wait(2000)
        cy.xpath('//div[1]/div[2]/div[3]/button').should('be.visible').should('have.text','Confirm').click()
        cy.contains('Patient Membership Changed Successfully')
        cy.wait(2000)
    })

    it('As a Admin the user can filter the patients based on their membeship plan using the filter button',()=>{
        cy.get('div.flex.flex-wrap:nth-child(2)>div:nth-child(2)').should('be.visible').click()
        cy.wait(3000)
        cy.get('div.py-1>div:nth-child(1)').should('be.visible').should('contain','basic').click()
        cy.wait(5000)
        cy.get('div.flex.flex-wrap:nth-child(2)>div:nth-child(2)>div:nth-child(3)').scrollIntoView().should('be.visible').click()
        cy.wait(3000)
        cy.get('div.py-1>div:nth-child(2)').should('be.visible').should('contain','standard').click()
        cy.wait(5000)
        cy.get('div.flex.flex-wrap:nth-child(2)>div:nth-child(2)>div:nth-child(3)').scrollIntoView().should('be.visible').click()
        cy.wait(3000)
        cy.get('div.py-1>div:nth-child(3)').should('be.visible').should('contain','executive').click()
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
        cy.get('.space-x-4 > .font-bold').should('be.visible').should('have.text','Patient Details')
        cy.get('.border-primary').should('be.visible').should('have.text','Address')
        cy.get('div.space-y-4:nth-child(1)>div:nth-child(1)>div:nth-child(1)>div:nth-child(1)').should('be.visible').should('have.text','Address Line 1')
        cy.get('div.space-y-4:nth-child(1)>div:nth-child(1)>div:nth-child(2)>div:nth-child(1)').should('be.visible').should('have.text','Address Line 2')
        cy.get('div.space-y-4:nth-child(1)>div:nth-child(2)>div:nth-child(1)>div:nth-child(1)').should('be.visible').should('have.text','Postal Code')
        cy.get('div.space-y-4:nth-child(1)>div:nth-child(2)>div:nth-child(2)>div:nth-child(1)').should('be.visible').should('have.text','City')
        cy.get('div.space-y-4:nth-child(1)>div:nth-child(3)>div:nth-child(1)>div:nth-child(1)').should('be.visible').should('have.text','State')        

    })
    it('As a admin the user should be navigated back to the patients page by clicking on back symbol on profile details page',()=>{
        cy.get('.h-6 > path').should('be.visible').click()
        cy.url().should('contain','/patients')
    })
    it('As a admin the user should able to search any patient by his name or email',()=>{
        
        cy.get('div.flex.flex-wrap:nth-child(2)>div:nth-child(2)>div:nth-child(1)>svg').scrollIntoView().should('be.visible').click()
        cy.wait(5000)
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
        cy.get('tr:nth-child(1)>td:nth-child(1)').should('be.visible').should('have.text',text1)
        cy.wait(2000)
        })

        cy.get('[type=search]').should('be.visible').clear()
        cy.wait(2000)  
        cy.logout();

    })
})