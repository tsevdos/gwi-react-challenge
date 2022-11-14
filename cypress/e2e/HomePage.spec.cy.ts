describe("Home page", () => {
  it("successfully loads", () => {
    cy.visit("/");
    cy.get(".ant-layout-content").contains("GWI Engineering Challenge");
    cy.get(".ant-layout-content").contains("CatLover");
    cy.get(".ant-layout-content").contains("App details");
  });

  it("has correct header section and links", () => {
    cy.get(".ant-layout-header").find("a").should("have.length", 4);
    cy.get(".ant-layout-header").find("a").eq(0).contains("GWI CatLover").should("have.attr", "href", "/");
    cy.get(".ant-layout-header").find("a").eq(1).contains("Cats").should("have.attr", "href", "/cats");
    cy.get(".ant-layout-header").find("a").eq(2).contains("Breeds").should("have.attr", "href", "/breeds");
    cy.get(".ant-layout-header").find("a").eq(3).contains("Favourites").should("have.attr", "href", "/favourites");
  });

  it("has correct footer", () => {
    cy.get(".ant-layout-content").contains("Made with ❤️ in Athens, Greece.");
  });
});
