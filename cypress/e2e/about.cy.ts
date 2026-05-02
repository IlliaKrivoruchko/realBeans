describe("About Page", () => {
  beforeEach(() => {
    cy.enterStorePassword();
    cy.visit("/pages/about-page");
  });

  it("shows the RealBeans history paragraph", () => {
    cy.contains(
      "From a small Antwerp grocery to a European coffee staple, RealBeans honors tradition while innovating for the future. Our beans are roasted in-house, shipped from Antwerp or Stockholm, and loved across the continent."
    ).should("be.visible");
  });
});