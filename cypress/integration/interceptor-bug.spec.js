/// <reference types="cypress" />

describe('example to-do app', () => {
    beforeEach(() => {
      cy.intercept("GET", "https://example.cypress.io/**", {fixture: "example.html"})
    })

    it('Should show test', () => {
      cy.intercept("GET", "https://example.cypress.io/**", {fixture: "example2.html"})

      cy.visit('https://example.cypress.io/todo')
      cy.contains("Interceptor 2").should('be.visible')
    })

    it('Should show test', () => {
      cy.intercept("GET", "https://example.cypress.io/**", {body: "<html lang='en'>Interceptor 3</html>"})

      cy.visit('https://example.cypress.io/todo')
      cy.contains("Interceptor 3").should('be.visible')
    })
})
