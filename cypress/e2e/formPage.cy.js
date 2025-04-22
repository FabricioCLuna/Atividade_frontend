import formPage from '../pages/formPage';

describe('Formulário de prática - DemoQA', () => {
  it('Deve preencher e submeter o formulário com sucesso', () => {
    formPage.visit();
    formPage.goToPracticeForm();
    formPage.fillFormRandomly();
    formPage.submitForm();
    formPage.verifyPopupVisible();
    formPage.closePopup();
  });
});
