describe("Cats page", () => {
  it("successfully loads", () => {
    cy.visit("/cats");
    cy.get(".ant-layout-content").contains("Cats");
  });

  it("successfully is loading 10 random cat images", () => {
    cy.get('[data-testid="cat-card"]').should("have.length", 10);
  });

  it("successfully is loading 10 more images", () => {
    cy.contains("Load more...").click();
    cy.get('[data-testid="cat-card"]').should("have.length", 20);
  });

  it("opens the selected image in modal and stores it's id to the url", () => {
    cy.get('[data-testid="cat-card"] ').first().click();
    cy.get(".ant-modal-root").should("exist");
    cy.get(".ant-modal-body").find("img").should("exist");

    cy.get(".ant-modal-title").then(($el) => {
      // selected random card id
      const catId = $el.get(0).innerText.split(":")[1].trim();

      cy.location().should((loc) => {
        expect(loc.href).to.include(catId);
      });
    });
  });

  it("favorites selected image", () => {
    cy.get(".ant-modal-body").find("img").should("exist");
    cy.contains("Add to favourites").click();
  });
});
