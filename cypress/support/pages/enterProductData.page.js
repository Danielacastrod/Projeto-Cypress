const INPUT_START_DATE = '#startdate'
const INPUT_INSURANCE_SUM = '#insurancesum'
const INPUT_MERIT_RATING = '#meritrating'
const INPUT_DAMAGE_INSURANCE = '#damageinsurance'
const INPUT_OPTIONAL_PRODUCTS = '#EuroProtection'
const INPUT_COURTESY_CAR = '#courtesycar'
const BTN_NEXT_PRICE_OPTION = '#nextselectpriceoption'


// Caso de teste positivo
Cypress.Commands.add('dadosProduct', () => {
    //nao apresenta na interface grafica do cypress os dados do usuário
    // preenchimento das abas
    cy.get(INPUT_START_DATE).type(Cypress.env('productData').startDate, { log: false });
    cy.get(INPUT_INSURANCE_SUM).select(Cypress.env('productData').insuranceSum, { log: false });
    cy.get(INPUT_MERIT_RATING).select(Cypress.env('productData').meritRating, { log: false });
    cy.get(INPUT_DAMAGE_INSURANCE).select(Cypress.env('productData').damageInsurance, { log: false });
    cy.get(INPUT_COURTESY_CAR).select(Cypress.env('productData').courtesyCar, { log: false });
    cy.get(INPUT_OPTIONAL_PRODUCTS).should('be.visible').click({ force: true });

    // botão para passar para a próxima etapa
    cy.get(BTN_NEXT_PRICE_OPTION).click();
})

// caso de teste negativo
Cypress.Commands.add('dadosProductIncompletos', () => {
    cy.get(BTN_NEXT_PRICE_OPTION).click();
});