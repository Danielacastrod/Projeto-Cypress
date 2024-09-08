const INPUT_EMAIL = '#email'
const INPUT_PHONE = '#phone'
const INPUT_USERNAME = '#username'
const INPUT_PASSWORD = '#password'
const INPUT_CONFIRM_PASSWORD = '#confirmpassword'
const BTN_SEND = '#sendemail'

Cypress.Commands.add('dadosSendQuote', () => {
    
    //nao apresenta na interface grafica do cypress os dados do usuário
    // preenchimento das abas
    cy.get(INPUT_EMAIL).type(Cypress.env('sendQuoteData').email, { log: false });
    cy.get(INPUT_PHONE).type(Cypress.env('sendQuoteData').phone, { log: false });
    cy.get(INPUT_USERNAME).type(Cypress.env('sendQuoteData').username, { log: false });
    cy.get(INPUT_PASSWORD).type(Cypress.env('sendQuoteData').password, { log: false });
    cy.get(INPUT_CONFIRM_PASSWORD).type(Cypress.env('sendQuoteData').confirmPassword, { log: false });

    // botão para passar para a próxima etapa
    cy.get(BTN_SEND).click();

});