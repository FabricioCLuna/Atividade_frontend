class WebTablesPage {
  acessarMenuWebTables() {
    cy.visit('https://demoqa.com/');
    cy.contains('Elements').click();
    cy.contains('Web Tables').click();
  }

  criarRegistro() {
    cy.get('#addNewRecordButton').click();
    cy.get('#firstName').type('Fabricio');
    cy.get('#lastName').type('Luna');
    cy.get('#userEmail').type('fabricio.luna@example.com');
    cy.get('#age').type('33');
    cy.get('#salary').type('5000');
    cy.get('#department').type('QA');
    cy.get('#submit').click();
  }

  editarRegistro() {
    cy.get('.action-buttons [title="Edit"]').first().click();
    cy.get('#firstName').clear().type('Fabricio Luna QA');
    cy.get('#age').type('38');
    cy.get('#submit').click();
  }

  deletarRegistroPorEmail(email) {
    // Espera até que o e-mail apareça na tabela
    cy.get('#delete-record-4> svg > path').should('contain', email);
  
    // Quando encontrar, deleta
    cy.contains('div.rt-tr-group', email)
      .find('[title="Delete"]')
      .click();
  }
  
  

  validarRegistroDeletado() {
    cy.get('.rt-tbody').should('not.contain', 'João Editado');
  }
}

module.exports = new WebTablesPage();
