
Cypress.Commands.add("getotp", (Email) => {
    cy.visit('https://yopmail.com/en/')
    cy.get('input[type=text]').type(Email)
    cy.get('#refreshbut').click()
    cy.wait(3000)
    cy.get('#ifmail').then(($iframe) => {
        const doc = $iframe.contents()
        cy.wrap(doc.find('div:nth-child(1) > div > div:nth-child(2) > h1')).then(($span) => {
            // capture what num is right now
            const num1 = $span.text()
            cy.writeFile('cypress/integration/Patient_Testcases/text.txt', num1)
          })
        cy.wait(7000)
    })
})

 
 