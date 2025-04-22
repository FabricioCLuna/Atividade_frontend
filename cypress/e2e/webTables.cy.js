const webTablesPage = require('../pages/webTablesPage');

describe('Web Tables - CRUD Testes', () => {
  beforeEach(() => {
    webTablesPage.acessarMenuWebTables();
  });

  it('Deve criar, editar e deletar um registro', () => {
    const email = 'fabricio.luna@example.com';
  
    webTablesPage.criarRegistro();
    webTablesPage.editarRegistro();
    webTablesPage.deletarRegistroPorEmail(email);
    webTablesPage.validarRegistroDeletado();
  });
});
