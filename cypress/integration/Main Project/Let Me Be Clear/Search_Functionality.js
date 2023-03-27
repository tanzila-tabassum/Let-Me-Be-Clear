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
      cy.get('.hide-lg > [href="/us/en-us/speak-clearly.html"]').click()
      cy.wait(pause_2)
      cy.get('#select-box-target').click()
      cy.wait(pause)
      cy.get('[data-topic="abbvie-lmbc:english/going-to-your-doctor"]').click()
      cy.wait(pause)
      cy.scrollTo(0.005, 800)
      cy.wait(pause)
      cy.get('.input--search').type('Test').should('have.value', 'Test')
      cy.wait(pause)
      cy.get('.input--search').type('{enter}')
      cy.wait(pause)
      cy.get('.input--search').type('Psoriasis').should('have.value', 'Psoriasis')
      cy.wait(pause)
      cy.get('.input--search').type('{enter}')
      cy.wait(pause_2)
      cy.scrollTo(0.005, 800)
      cy.wait(pause)
      cy.get('.blog-controls__view-all').click()
      cy.wait(pause)
      cy.scrollTo(0.005, 800)
      cy.wait(pause)
      



    })
})