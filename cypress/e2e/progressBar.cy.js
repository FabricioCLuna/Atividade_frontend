const progressBarPage = require('../pages/progressBarPage');

describe('Progress Bar - Widget DemoQA', () => {
  beforeEach(() => {
    cy.visit('https://demoqa.com');
  });

  it('Deve iniciar, parar antes dos 25% e validar, depois completar e resetar', () => {
    progressBarPage.acessarMenuWidgets();
    progressBarPage.acessarSubmenuProgressBar();

    // Inicia e para antes dos 25%
    progressBarPage.clicarStart();
    progressBarPage.esperarEAbrirAntesDos25();

    // Inicia novamente e deixa até 100%, então reseta
    progressBarPage.esperar100EPararEResetar();
  });
});
