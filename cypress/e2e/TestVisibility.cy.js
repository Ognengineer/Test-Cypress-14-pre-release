/// <reference types="cypress" />

describe("template spec", () => {
  it("Should pass after clicking on the last date calendar content should be hidden", () => {
    cy.visit("http://localhost:4200/");
    cy.get("mat-datepicker-toggle").should("be.visible").click();
    cy.get('[role="gridcell"]').last().should("be.visible").click();
    cy.wait(2000);
    cy.get("mat-datepicker-content").should("not.be.visible");
  });
});
