const INPUT_MAKE = '#make'
const INPUT_ENGINE_PERFORMANCE = '#engineperformance'
const INPUT_DATE_OF_MANUFACTURE = '#dateofmanufacture'
const INPUT_NUMBER_OF_SEATS = '#numberofseats'
const INPUT_FUEL_TYPE = '#fuel'
const INPUT_LIST_PRICE = '#listprice'
const INPUT_LICENSE_PLATE_NUMBER = '#licenseplatenumber'
const INPUT_ANNUAL_MILEAGE = '#annualmileage'
const BTN_NEXT_INSURANT = '#nextenterinsurantdata'


// Caso de teste positivo
Cypress.Commands.add('dadosVehicle', () => {
    //nao apresenta na interface grafica do cypress os dados do usuário
    // preenchimento das abas
    cy.get(INPUT_MAKE).select(Cypress.env('vehicleData').make, {log: false});
    cy.get(INPUT_ENGINE_PERFORMANCE).type(Cypress.env('vehicleData').enginePerformance, {log: false});
    cy.get(INPUT_DATE_OF_MANUFACTURE).type(Cypress.env('vehicleData').dateOfManufacture, {log: false});
    cy.get(INPUT_LIST_PRICE).type(Cypress.env('vehicleData').listPrice, {log: false});
    cy.get(INPUT_LICENSE_PLATE_NUMBER).type(Cypress.env('vehicleData').licensePlateNumber, {log: false});
    cy.get(INPUT_ANNUAL_MILEAGE).type(Cypress.env('vehicleData').annualMileage, {log: false});
    cy.get(INPUT_NUMBER_OF_SEATS).select(Cypress.env('vehicleData').numberOfSeats.toString(), {log: false});
    cy.get(INPUT_FUEL_TYPE).select(Cypress.env('vehicleData').fuelType, {log: false});

    // botão para passar para a próxima etapa
    cy.get(BTN_NEXT_INSURANT).click();

});

// caso de teste negativo
Cypress.Commands.add('dadosVehicleIncompletos', () => {
    cy.get(BTN_NEXT_INSURANT).click();
});

