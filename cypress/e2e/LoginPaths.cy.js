describe('Login paths', () => {
    beforeEach(() => { 
      cy.visit('https://www.saucedemo.com')
      cy.url().should('include','saucedemo')
      cy.get('#password').type('secret_sauce')
    })
    it('Logs in a standard User', () => {
      cy.get('#user-name').type('standard_user')
      cy.contains('Login').click()
      cy.url().should('include','inventory')
      cy.contains('Sauce Labs Backpack').click()
      cy.url().should('include','.html?id=4')
      cy.get('.inventory_details_img').should('have.attr','src',"/static/media/sauce-backpack-1200x1500.0a0b85a3.jpg")
    })
    
    /* Added more test cases to cover further functionalities of the login website. I am used in my manual testing to covering a lot of scenarios. 
    it('Tries to login a Locked Out User', () => {
      cy.get('#user-name').type('locked_out_user')
      cy.contains('Login').click()
      cy.get('[data-test="error"]').should('exist')
    .contains(/Locked Out/i)
    })
    it('Logs in a problem User', () => {
      cy.get('#user-name').type('problem_user')
      cy.contains('Login').click()
      cy.contains('Sauce Labs Backpack').click()
      cy.get('.inventory_details_img').not('have.attr','src',"/static/media/sauce-backpack-1200x1500.0a0b85a3.jpg")
    })
    it('Tries to log in a Performance Glitch User', () => {
      cy.get('#user-name').type('performance_glitch_user')
      cy.contains('Login').click()
      cy.contains('Sauce Labs Backpack').click()
      cy.get('.inventory_details_img').should('have.attr','src',"/static/media/sauce-backpack-1200x1500.0a0b85a3.jpg")
    })
*/
  })