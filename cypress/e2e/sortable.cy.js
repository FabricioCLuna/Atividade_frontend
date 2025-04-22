import sortablePage from '../pages/sortablePage';

describe('Teste de ordenação com drag and drop', () => {
  it('Deve mover o "Six" para o fim da lista', () => {
    sortablePage.acessarSite();
    sortablePage.acessarMenuInteractions();
    sortablePage.acessarSubmenuSortable();
    sortablePage.ordenarElementos();
    sortablePage.validarOrdemEsperada();
  });
});
