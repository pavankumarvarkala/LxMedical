///<reference types='cypress'/>
describe('providers test cases', ()=>{

    it('As a admin the user should be navigated to the provides page by clicking on providers tab', ()=>{
        cy.login() 
        cy.get('.space-y-4 > :nth-child(3)').should('be.visible').and('have.text','Providers').click()
        cy.url().should('contain','/providers')
           
    })

    it('At providers page each label and field should have proper label and proper validations', ()=>{
        cy.get('div.font-bold').should('be.visible').should('contain','Providers')
        cy.get('table>thead>tr>th:nth-child(1)>div').should('be.visible').should('have.text','Full Name')
        cy.get('table>thead>tr>th:nth-child(2)>div').should('be.visible').should('have.text','Email')
        cy.get('table>thead>tr>th:nth-child(3)>div').should('be.visible').should('have.text','Mobile Number')
        cy.get('table>thead>tr>th:nth-child(4)>div').should('be.visible').should('have.text','Provider Type')
        cy.get('table>thead>tr>th:nth-child(5)>div').should('be.visible').should('have.text','Joined On')
        cy.get('table>thead>tr>th:nth-child(6)>div').should('be.visible').should('have.text','Status')
        cy.get('table>thead>tr>th:nth-child(7)>div').should('be.visible').should('have.text','Action')
        cy.get('[type=search]').invoke('attr','placeholder').should('contain','Search for name or email.')
        cy.xpath('//div[contains(text(),"Ad")]').should('be.visible').should('contain','Add Filter')
        cy.xpath("//button[@textid='provider.invite']").should('be.visible').should('have.text','Invite Provider')
        cy.xpath("//button[@textid='admin.pending.invites']").should('be.visible').should('have.text','Pending Invitations')
        // cy.get('.mt-1:nth-child(2)').should('be.visible').should('have.text','Next')
     
    })

    it('As a admin the user should be able to go the next page of the providers list by clicking on next button', ()=>{
        // cy.get('.mt-1:nth-child(2)').should('be.visible').should('have.text','Next').click()
    })

    it('As a admin the user should be able to go the previous page of the providers list by clicking on previous button', ()=>{
        // cy.get('.mt-1:nth-child(1)').should('be.visible').should('have.text','Previous').click()
    })

    it('As a admin the user should be able to search any prodvider with his name or email',()=>{
        cy.xpath('//tr[1]/td[2]/div/p').invoke('text').then((text1)=>{
            cy.get('[type=search]').should('be.visible').type(text1)

        })
        cy.wait(5000)  
        cy.get('[type=search]').should('be.visible').clear()
        cy.wait(2000)          
    })

    it ('As a admin the user should be navigated to the pending invitations page by clicking on "Pending Invitations" button.', ()=>{
        cy.xpath("//button[@textid='admin.pending.invites']").scrollIntoView().should('be.visible').should('have.text','Pending Invitations').click({force:true})
        cy.wait(4000)
        cy.url().should('contain','/invitation')
        cy.wait(4000)
        cy.get('div.flex.flex-wrap>svg').should('be.visible').click()
        cy.wait(4000)
        cy.url().should('contain','/providers')
    })

    it('As a admin the user should be navigated to the profile details of any provider by clicking on eye button against that particular provider',()=>{
        cy.get('tr:nth-child(1) > td:nth-child(7) > div > svg:nth-child(1)').scrollIntoView().should('be.visible').click({force:true})
        cy.get('.py-8 > .font-bold').should('be.visible').should('contain','Provider Details')
        cy.get('.border-b-2').should('be.visible').should('contain','Address')
        cy.xpath('//div[contains(text(),"Line 1")]').should('be.visible').should('have.text','Address Line 1')
        cy.xpath('//div[contains(text(),"Line 2")]').should('be.visible').should('have.text','Address Line 2')
        cy.xpath('//div[contains(text(),"Po")]').should('be.visible').should('have.text','Postal Code')
        cy.xpath('//div[contains(text(),"Ci")]').should('be.visible').should('have.text','City')
        cy.xpath('//div[contains(text(),"St")]').should('be.visible').should('have.text','State')

    })

    it('As a admin the user should be navigted back to the providers page by clicking on back arrow on profile details page',()=>{
        cy.get('.py-8 > .h-6').should('be.visible').click()
        cy.url().should('contain','/providers')
    })

    it('As a Admin the user should get a pop up of invite provider by Clicking on the "Invite Provider" button.',()=>{
        cy.xpath("//button[@textid='provider.invite']").should('be.visible').should('have.text','Invite Provider').click()
        cy.wait(2000)
        cy.xpath('//*[@class="z-50 w-6 h-6 text-primary cursor-pointer"]').should('be.visible').click()

    })

    it('As a Admin the user can chat with provider by clicking on the chat icon against that provider',()=>{
        cy.get('tr:nth-child(1) > td:nth-child(7) > div>div>img').scrollIntoView().should('be.visible').click({force:true})
        cy.wait(2000)
        cy.get('div.flex.flex-wrap>svg').scrollIntoView().click()
        cy.wait(2000)
    })

    it('As a Admin the user can enable or disable any provider with the help of toggle icon under status',()=>{
        cy.get('tr:nth-child(1)>td:nth-child(6)>button').scrollIntoView().should('be.visible').click({force:true})
        cy.wait(2000)
        cy.xpath('//div[1]/div[2]/button[1]').click()
        cy.wait(2000)
        cy.get('tr:nth-child(1)>td:nth-child(6)>button').scrollIntoView().should('be.visible').click({force:true})
        cy.wait(2000)
        cy.xpath('//div[1]/div[2]/button[1]').click()
        cy.wait(2000)
     })

     it('As a Admin the user can change the view of the providers by using filter on full name which make the provider list in alphabetical order from a-z or Z-a',()=>{
        cy.get('table>thead>tr>th:nth-child(1)>span>svg:nth-child(1)').should('be.visible').click({force:true})
        cy.wait(2000)
        cy.get('table>thead>tr>th:nth-child(1)>span>svg:nth-child(2)').should('be.visible').click({force:true})
        cy.wait(2000)
     })


    it('As a admin the user can filter the providers based on the provider type like Md,Do etc.',()=>{
        cy.xpath('//div[contains(text(),"Add Filter")]').should('be.visible').click()
        cy.wait(2000)
        cy.get('div.py-1>div:nth-child(1)').should('be.visible').should('contain','md').click()
        cy.wait(2000)
        cy.get('div.flex.flex-wrap>div:nth-child(2)>div:nth-child(1)>svg').should('be.visible').click()
        cy.wait(2000)

        cy.xpath('//div[contains(text(),"Add Filter")]').should('be.visible').click()
        cy.wait(2000)
        cy.get('div.py-1>div:nth-child(2)').should('be.visible').should('contain','do').click()
        cy.wait(2000)
        cy.get('div.flex.flex-wrap>div:nth-child(2)>div:nth-child(1)>svg').should('be.visible').click()
        cy.wait(2000)

        cy.xpath('//div[contains(text(),"Add Filter")]').should('be.visible').click()
        cy.wait(2000)
        cy.get('div.py-1>div:nth-child(3)').should('be.visible').should('contain','pa-c').click()
        cy.wait(2000)
        cy.get('div.flex.flex-wrap>div:nth-child(2)>div:nth-child(1)>svg').should('be.visible').click()
        cy.wait(2000)

        cy.xpath('//div[contains(text(),"Add Filter")]').should('be.visible').click()
        cy.wait(2000)
        cy.get('div.py-1>div:nth-child(4)').should('be.visible').should('contain','np').click()
        cy.wait(2000)
        cy.get('div.flex.flex-wrap>div:nth-child(2)>div:nth-child(1)>svg').should('be.visible').click()
        cy.wait(2000)

        cy.xpath('//div[contains(text(),"Add Filter")]').should('be.visible').click()
        cy.wait(2000)
        cy.get('div.py-1>div:nth-child(5)').should('be.visible').should('contain','crna').click()
        cy.wait(2000)
        cy.get('div.flex.flex-wrap>div:nth-child(2)>div:nth-child(1)>svg').should('be.visible').click()
        cy.wait(2000)

        cy.xpath('//div[contains(text(),"Add Filter")]').should('be.visible').click()
        cy.wait(2000)
        cy.get('div.py-1>div:nth-child(6)').should('be.visible').should('contain','nurse').click()
        cy.wait(2000)
        cy.get('div.flex.flex-wrap>div:nth-child(2)>div:nth-child(1)>svg').should('be.visible').click()
        cy.wait(2000)

        cy.xpath('//div[contains(text(),"Add Filter")]').should('be.visible').click()
        cy.wait(2000)
        cy.get('div.py-1>div:nth-child(7)').should('be.visible').should('contain','paramedic').click()
        cy.wait(2000)
        cy.get('div.flex.flex-wrap>div:nth-child(2)>div:nth-child(1)>svg').should('be.visible').click()
        cy.wait(2000)

        cy.xpath('//div[contains(text(),"Add Filter")]').should('be.visible').click()
        cy.wait(2000)
        cy.get('div.py-1>div:nth-child(8)').should('be.visible').should('contain','emt').click()
        cy.wait(2000)
        cy.get('div.flex.flex-wrap>div:nth-child(2)>div:nth-child(1)>svg').should('be.visible').click()
        cy.wait(2000)
        
        cy.logout();

    })


})