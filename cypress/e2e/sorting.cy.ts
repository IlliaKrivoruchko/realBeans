describe("Product Sorting", () => {
  beforeEach(() => {
    cy.enterStorePassword();
    cy.visit("/collections/all");
  });

  it("sorts products by price from low to high", () => {
    cy.get('select[name="sort_by"]')
      .eq(0)
      .select("price-ascending", { force: true });

    cy.get('select[name="sort_by"]')
      .eq(0)
      .should("have.value", "price-ascending");

    cy.get("body").should("contain.text", "Roasted Coffee Beans 5kg");
    cy.get("body").should("contain.text", "Blended coffee 5kg");
  });
});