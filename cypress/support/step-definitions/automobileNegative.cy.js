import { Given, When, And, Then } from 'cypress-cucumber-preprocessor/steps';

// Definições para todos os passos da automação
Given('que acesso o portal Tricentis', () => {
    cy.visit('/');
})

When('acesso a categoria Automobile', () => {
    cy.acessarAutomobile();
});

And('envio os dados incompletos do formulário Enter Vehicle Data', () => {
    cy.dadosVehicleIncompletos(); 
});

And('envio os dados incompletos do formulário Enter Insurant Data', () => {
    cy.dadosInsurantIncompletos(); 
});

And('envio os dados incompletos do formulário Enter Product Data', () => {
    cy.dadosProductIncompletos(); 
});

Then('deve aparecer uma mensagem pedindo para completar os passos anteriores', () => {
   cy.alertaPriceOption(); 
});
