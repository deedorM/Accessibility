describe("Accessibility Testing", () => {
  before(() => {
    cy.visit("/");
    cy.injectAxe();
  });

  it("Perform targeted accessibility checks for violations", () => {
    cy.checkA11y(undefined, {
      includedImpacts: ["critical"],
    });
  });
});