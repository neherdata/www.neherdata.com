/// <reference types="cypress" />

describe("neherdata.com e2e", () => {
  context("Window", () => {
    beforeEach(() => {
      cy.visit("https://www.neherdata.com");
    });

    describe("Check Links", () => {
      it("ndstos-footer-link", () => {
        cy.get('[data-cy="ndstos-footer-link"]');
        cy.should("have.attr", "href", "https://tos.neherdata.com");
        cy.should("have.text", "Terms of Service");
      });
      it("ndsprivacy-footer-link", () => {
        cy.get('[data-cy="ndsprivacy-footer-link"]');
        cy.should("have.attr", "href", "https://privacy.neherdata.com");
        cy.should("have.text", "Privacy Policy");
      });
      it("ndssupport-footer-link", () => {
        cy.get('[data-cy="ndssupport-footer-link"]');
        cy.should("have.attr", "href", "https://support.neherdata.com");
        cy.should("have.text", "Support");
      });
    });

    it("charset utf-8 check", () => {
      cy.document().should("have.property", "charset").and("eq", "UTF-8");
    });

    it("title check", () => {
      cy.title().should("include", "Neher Data Systems");
    });
  });
});
