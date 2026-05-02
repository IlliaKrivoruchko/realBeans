describe("Product Detail Pages", () => {
  beforeEach(() => {
    cy.enterStorePassword();
  });

  it("shows correct product details", () => {
    cy.visit("/products/blended-coffee-5kg");

    cy.get("body").should("contain.text", "Blended coffee 5kg");
    cy.get("body").should("contain.text", "RealBeans coffee, ready to brew.");
    cy.get("body").should("contain.text", "$55.00");

    cy.get("img")
      .should("have.length.greaterThan", 0);
  });
});