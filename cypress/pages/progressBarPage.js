class ProgressBarPage {
    acessarMenuWidgets() {
      cy.contains('Widgets').scrollIntoView().click();
    }
  
    acessarSubmenuProgressBar() {
      cy.contains('Progress Bar').click();
    }
  
    clicarStart() {
      cy.get('#startStopButton').click();
    }
  
    esperarEAbrirAntesDos25() {
      cy.get('#progressBar')
        .invoke('text')
        .then((texto) => {
          const valor = parseInt(texto.replace('%', '').trim());
  
          if (valor >= 25) {
            // já passou de 25%
            cy.get('#startStopButton').click(); // parar
          } else {
            // aguarda até próximo de 25%
            cy.wait(2000); // ajustável conforme desempenho
            cy.get('#startStopButton').click();
          }
  
          // valida que está menor ou igual a 25
          cy.get('#progressBar')
            .invoke('text')
            .then((textoFinal) => {
              const final = parseInt(textoFinal.replace('%', '').trim());
              expect(final).to.be.lte(25);
            });
        });
    }
  
    esperar100EPararEResetar() {
        cy.get('#startStopButton').should('be.visible').click();
      
        // Aguarda até 100%
        cy.get('#progressBar', { timeout: 15000 }).should('have.text', '100%');
      
        // Aguarda brevemente para garantir que DOM foi atualizado
        cy.wait(1000);
      
        // Só clica se ainda estiver visível
        cy.get('body').then(($body) => {
          if ($body.find('#startStopButton').length) {
            cy.get('#startStopButton').click(); // pode estar em outro estado ou visível
          }
        });
      
        // Reseta
        cy.get('#resetButton').should('be.visible').click();
        cy.get('#progressBar').should('have.text', '0%');
      }
    }        
  
  module.exports = new ProgressBarPage();
  