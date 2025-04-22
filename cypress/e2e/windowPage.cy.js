// cypress/e2e/windowPage.cy.js
import WindowPage from '../pages/windowPage';

const windowPage = new WindowPage();

describe('Teste de nova janela (Browser Windows)', () => {
  it('Deve abrir nova janela e validar mensagem', () => {
    cy.visit('https://demoqa.com/');

    windowPage.acessarMenu();
    windowPage.acessarSubmenuBrowserWindows();
    windowPage.stubNovaJanela(); // intercepta nova janela

    windowPage.clicarBotaoNovaJanela();
    windowPage.validarTextoNovaJanela();
  });
});