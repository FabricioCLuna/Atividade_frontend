// cypress/pages/sortablePage.js

class SortablePage {
  acessarSite() {
    cy.visit('https://demoqa.com/');
  }

  acessarMenuInteractions() {
    cy.contains('Interactions').click();
  }

  acessarSubmenuSortable() {
    cy.contains('Sortable').click();
    cy.get('.vertical-list-container').should('be.visible');
  }

  ordenarElementos() {
    cy.get('.vertical-list-container > div')
    .contains('Six')
    .should('be.visible')
    .drag('.vertical-list-container > div:last-child', { force: true });
  }

  validarOrdemEsperada() {
    const ordemEsperada = ['One', 'Two', 'Three', 'Four', 'Five', 'Six'];
  cy.get('.vertical-list-container > div').each((item, index) => {
    cy.wrap(item).should('contain.text', ordemEsperada[index]);
    });
  }
}

export default new SortablePage();
