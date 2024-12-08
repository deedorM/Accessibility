describe("Accessibility Testing", () => {
  // SETUP
  before(() => {
    cy.visit("/");
    cy.injectAxe();
  })

  it("Validates basic accessibility", () => {
    cy.checkA11y();
  })
})
