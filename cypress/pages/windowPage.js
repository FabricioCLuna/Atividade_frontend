// cypress/pages/windowPage.js
export default class WindowPage {
  acessarMenu() {
    cy.contains('Alerts, Frame & Windows').click();
  }

  acessarSubmenuBrowserWindows() {
    cy.contains('Browser Windows').click();
  }

  stubNovaJanela() {
    cy.window().then((win) => {
      cy.stub(win, 'open').callsFake((url) => {
        // Adiciona a URL base caso venha como "/sample"
        const fullUrl = url.startsWith('http') ? url : `https://demoqa.com${url}`;
        cy.visit(fullUrl);
      }).as('novaJanela');
    });
  }

  clicarBotaoNovaJanela() {
    cy.get('#windowButton').click();
  }

  validarTextoNovaJanela() {
    cy.contains('This is a sample page').should('be.visible');
    cy.go('back'); // volta para a tela anterior
  }
}