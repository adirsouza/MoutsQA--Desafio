/// <reference types="Cypress"/>

Cypress.Commands.add('login',(user,password)=>{
    cy.visit("https://front.serverest.dev")
    cy.get('[data-test="username"]').type(user)
    cy.get('[data-test="password"]').type(password)
    cy.get('[data-teste="login-button"]').click()
})