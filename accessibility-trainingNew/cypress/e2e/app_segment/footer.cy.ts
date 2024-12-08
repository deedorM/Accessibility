describe("Accessibility Testing", () => {
    // SETUP
    before(() => {
      cy.visit("/");
      cy.injectAxe();
    })
  
    it("Targetted Accessibility test - footer", () => {
      cy.checkA11y("footer");
    })

})
  