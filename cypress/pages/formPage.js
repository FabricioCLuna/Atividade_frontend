class FormPage {
  visit() {
    cy.visit('https://demoqa.com');
  }

  goToPracticeForm() {
    cy.contains('Forms').click();
    cy.contains('Practice Form').click();
  }

  fillFormRandomly() {
        cy.get('#firstName', { timeout: 10000 }).should('be.visible').type('João');
        cy.get('#lastName', { timeout: 10000 }).should('be.visible').type('Silva');
        cy.get('#userEmail').type(`teste${Date.now()}@email.com`);
        cy.get('#genterWrapper > .col-md-9 > :nth-child(1)').click(); // Male
        cy.get('#userNumber').type('9999999999');
        cy.get('#dateOfBirthInput').click();
        cy.get('.react-datepicker__year-select').select('1995');
        cy.get('.react-datepicker__month-select').select('May');
        cy.contains('.react-datepicker__day', '15').click();
        cy.get('.subjects-auto-complete__value-container').type("texto subject")
        cy.get('label[for="hobbies-checkbox-1"]').click(); // Sports
        cy.get('#uploadPicture').selectFile('cypress/fixtures/upload.txt');
        cy.get('#currentAddress').type('Rua Teste, 123 - Bairro Legal');
        cy.get('#state').click();
        cy.get('#react-select-3-input').type('NCR{enter}');
        
        cy.get('#city').click();
        cy.get('#react-select-4-input').type('Delhi{enter}');
        
     
    }

    submitForm() {
      cy.get('#submit').click();
    }
  
    verifyPopupVisible() {
      cy.get('#example-modal-sizes-title-lg').should('be.visible').and('contain', 'Thanks for submitting the form');
    }
  
    closePopup() {
      cy.get('#adplus-anchor').invoke('remove'); // Remova o elemento com id "overlay"
      cy.contains('Close').click();

      

    }
  }
  
  export default new FormPage();