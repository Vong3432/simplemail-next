// app.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test
describe("API UI Client", () => {
  let url = "https://simplemail-nodejs.herokuapp.com/send-email";

  it("should navigate to the demo page", () => {
    // Start from the index page
    cy.visit("http://localhost:3000/");

    // Find a link with an href attribute containing "about" and click it
    cy.get("#btnViewDemo").click();

    // The new url should include "/about"
    cy.url().should("include", "/demo");

    // The new page should contain an #DemoHanding
    cy.get("#DemoHeading").should("be.visible");
  });

  it("[Basic]: should not run when fields are empty", () => {
    // given
    cy.get("#apiUiClientForm");
    cy.get("#apiUiClientForm").should("be.visible");

    cy.get("#apiUiClientForm").get("#email").should("be.visible");
    cy.get("#apiUiClientForm").get("#from").should("be.visible");
    cy.get("#apiUiClientForm").get("#subject").should("be.visible");
    cy.get("#apiUiClientForm").get("#text").should("be.visible");
    cy.get("#apiUiClientForm").get("#smtp_user").should("be.visible");
    cy.get("#apiUiClientForm").get("#smtp_pass").should("be.visible");

    cy.get("#apiUiClientForm").get("#btnRunTest").should("be.visible");

    // when
    cy.get("#apiUiClientForm").get("#email").clear();
    cy.get("#apiUiClientForm").get("#from").clear();
    cy.get("#apiUiClientForm").get("#subject").clear();
    cy.get("#apiUiClientForm").get("#text").clear();
    cy.get("#apiUiClientForm").get("#smtp_user").clear();
    cy.get("#apiUiClientForm").get("#smtp_pass").clear();

    cy.get("#apiUiClientForm").get("#btnRunTest").click();

    // then
    cy.get("#apiUiClientForm").get("#loadingSpinner").should("not.exist");
  });

  it("[Basic]: should run when fields are filled", () => {
    // given
    cy.get("#apiUiClientForm");
    cy.get("#apiUiClientForm").should("be.visible");

    cy.get("#apiUiClientForm").get("#email").should("be.visible");
    cy.get("#apiUiClientForm").get("#from").should("be.visible");
    cy.get("#apiUiClientForm").get("#subject").should("be.visible");
    cy.get("#apiUiClientForm").get("#text").should("be.visible");
    cy.get("#apiUiClientForm").get("#smtp_user").should("be.visible");
    cy.get("#apiUiClientForm").get("#smtp_pass").should("be.visible");

    cy.get("#apiUiClientForm").get("#btnRunTest").should("be.visible");

    const value = "waehu13"

    // when
    cy.get("#apiUiClientForm").get("#email").type(value);
    cy.get("#apiUiClientForm").get("#from").type(value);
    cy.get("#apiUiClientForm").get("#subject").type(value);
    cy.get("#apiUiClientForm").get("#text").type(value);
    cy.get("#apiUiClientForm").get("#smtp_user").type(value);
    cy.get("#apiUiClientForm").get("#smtp_pass").type(value);

    cy.get("#apiUiClientForm").get("#btnRunTest").click();


    // then
    cy.request({
      method: "POST",
      url: url,
      headers: {
        "content-type" : "application/json"
      },
      body: {
        "email": value,
        "from": value,
        "subject": value,
        "text": value,
        "smtp_user": value,
        "smtp_pass": value,
      },
      log: true,
    }).then((response) => {
      expect(response.status).to.eq(201);
      expect(response.body).to.have.property("msg", "Success");
    });
  });
});
