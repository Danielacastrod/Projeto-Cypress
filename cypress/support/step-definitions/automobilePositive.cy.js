import { Given, When, And, Then } from 'cypress-cucumber-preprocessor/steps'

// Definições para todos os passos da automação
Given('que acesso o portal Tricentis', () => {
    cy.visit('/');
})

When('acesso a categoria Automobile', () => {
    cy.acessarAutomobile();
})

And('envio os dados do formulário Enter Vehicle Data', () => {
    cy.dadosVehicle();
})

And('envio os dados do formulário Enter Insurant Data', () => {
    cy.dadosInsurant();
})

And('envio os dados do formulário Enter Product Data', () => {
    cy.dadosProduct();
})

And('envio os dados da tabela Select Price Option', () => {
    cy.dadosPriceOption();
})

And('envio os dados da tabela Send Quote', () => {
    cy.dadosSendQuote();
})

Then('deve aparecer uma mensagem de confirmação de envio', () => {
    cy.success();
})


