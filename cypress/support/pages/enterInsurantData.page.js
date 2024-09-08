const INPUT_FIRST_NAME = '#firstname'
const INPUT_LAST_NAME = '#lastname'
const INPUT_DATE_OF_BIRTH = '#birthdate'
const INPUT_COUNTRY = '#country'
const INPUT_ZIP_CODE = '#zipcode'
const INPUT_OCCUPATION = '#occupation'
const INPUT_HOBBIES = '#speeding'
const BTN_NEXT_PRODUCT = '#nextenterproductdata'



// Caso de teste positivo
Cypress.Commands.add('dadosInsurant', () => {
    //nao apresenta na interface grafica do cypress os dados do usuário
    // preenchimento das abas
    cy.get(INPUT_FIRST_NAME).type(Cypress.env('insurantData').firstName, {log: false});
    cy.get(INPUT_LAST_NAME).type(Cypress.env('insurantData').lastName, {log: false});
    cy.get(INPUT_DATE_OF_BIRTH).type(Cypress.env('insurantData').dateOfBirth, {log: false});
    cy.get(INPUT_COUNTRY).select(Cypress.env('insurantData').country, {log: false});
    cy.get(INPUT_ZIP_CODE).type(Cypress.env('insurantData').zipCode, {log: false});
    cy.get(INPUT_OCCUPATION).select(Cypress.env('insurantData').occupation, {log: false});    
    cy.get(INPUT_HOBBIES).should('be.visible').click({ force: true });

    // botão para passar para a próxima etapa
    cy.get(BTN_NEXT_PRODUCT).click();
})

// caso de teste negativo
Cypress.Commands.add('dadosInsurantIncompletos', () => {
    cy.get(BTN_NEXT_PRODUCT).click();
});