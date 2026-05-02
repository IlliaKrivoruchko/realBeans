describe("Product Catalog", () => {
  beforeEach(() => {
    cy.enterStorePassword();
    cy.visit("/collections/all");
  });

  it("shows the correct items entered in Shopify", () => {
    cy.get("body").should("contain.text", "Blended coffee 5kg");
    cy.get("body").should("contain.text", "Roasted Coffee Beans 5kg");
  });
});