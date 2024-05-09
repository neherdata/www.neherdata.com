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
      it("ndscontactus-footer-link", () => {
        cy.get('[data-cy="ndscontactus-footer-link"]');
        cy.should("have.attr", "href", "mailto:hello@neherdata.com");
        cy.should("have.text", "Contact Us");
      });
      it("tel-link", () => {
        cy.get('[data-cy="tel-link"]');
        cy.should("have.attr", "href", "tel:+17326143717");
      });
      it("fax-link", () => {
        cy.get('[data-cy="fax-link"]');
        cy.should("have.attr", "href", "fax:+17323387791");
      });

      // it("test all links", () => {
      //   cy.get("a:not([href*='mailto:'],[href*='tel:'],[href*='fax:'])").each((link) => {
      //     cy.request(link.prop("href"));
      //   });
      // });
    });

    it("charset utf-8 check", () => {
      cy.document().should("have.property", "charset").and("eq", "UTF-8");
    });

    it("title check", () => {
      cy.title().should("include", "Neher Data Systems");
    });
  });
});
