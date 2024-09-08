const INPUT_SELECT_OPTION = '#selectsilver'
const BTN_NEXT_SEND_QUOTE = '#nextsendquote'
const LBL_ALERTA = '#xLoaderPrice' 

// Caso de teste positivo
Cypress.Commands.add('dadosPriceOption', () => {
    cy.get(INPUT_SELECT_OPTION).click({ force: true });

    // botão para passar para a próxima etapa
    cy.get(BTN_NEXT_SEND_QUOTE).click();
});

// caso de teste negativo
Cypress.Commands.add('alertaPriceOption', () => {
    cy.get(LBL_ALERTA).should('be.visible')
});
