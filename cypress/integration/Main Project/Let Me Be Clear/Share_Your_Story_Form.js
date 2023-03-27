const pause_2 = Cypress.env('pause_2')
const pause = Cypress.env('pause')
const pause_1 = Cypress.env('pause_1')
describe('Let Me Be Clear Functionality', function() {
    it('Share Your Story Form', function() {
      cy.visit('https://www.let-me-be-clear.com') 
      Cypress.on('uncaught:exception', (err, runnable) => {
        return false
      })
      cy.viewport(1280, 800)
      cy.wait(pause_2)
      cy.get('#cookie-confirm').click()
      cy.wait(pause)
      cy.get('.hide-lg > [href="/us/en-us/share-your-story.html"]').click()
      cy.wait(pause_2)
      cy.get('#form-text-2064792732').type('Test User').should('have.value', 'Test User')
      cy.wait(pause)
      cy.get('#form-text-125044428').type('cypress.test.user09@gmail.com').should('have.value', 'cypress.test.user09@gmail.com')
      cy.wait(pause)
      cy.get('#your-story').type('Be honest. Please share your truth, and do not use this space for commercial intents.').should('have.value','Be honest. Please share your truth, and do not use this space for commercial intents.')
      cy.wait(pause)
      cy.get('#age').check()
      cy.wait(pause)
      cy.get('#agreed').check()
      cy.wait(pause)
      cy.get('#consent').check()
      cy.wait(pause)
      cy.get('#third-party').check()
      cy.wait(pause)
      cy.get('.share-form__submit').click()
     






    })
})
