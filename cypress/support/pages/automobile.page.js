const BTN_ACESSA_AUTOMOBILE = '#nav_automobile'
const BTN_SUCCESS = 'h2'


Cypress.Commands.add('acessarAutomobile', () => {
    cy.get(BTN_ACESSA_AUTOMOBILE).click()
})


Cypress.Commands.add('success', () => {
    //Elemento não carregado a Tempo
    // tempo de espera maior para o teste acompanhar o elemento h2
  cy.get(BTN_SUCCESS, { timeout: 10000 }).should('be.visible');
});

