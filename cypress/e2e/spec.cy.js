/// <reference types="Cypress" />
describe('First test', () => {
  it('Visit App url', () => {
    cy.visit("http://localhost:3000")
    cy.contains("Get Started").click()
  })
})

describe('second test', () => {
  it('Visit Home Page', () => {

    cy.visit("http://localhost:3000")


  })
})