describe('Visit and assess on home page path', () => {
  it('Successfully Visited Home Page', () => {
    cy.visit('https://www.saucedemo.com')
    cy.url().should('include','saucedemo')
  })
})
