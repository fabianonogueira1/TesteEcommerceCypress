/// <reference types="cypress" />

describe('buscar produto', () => {
    it('Buscar produto', () => {
      cy.visit('https://www.submarino.com.br/')
      //Consultar cep
      cy.get('.cep__Text-sc-16vxobs-3 > strong')
      //Preencher cep
      cy.get('.src__InputUI-sc-znzia4-0').type('03581-000')
      //Clicar em ok do cep
      cy.get('.src__Text-sc-154pg0p-0').click()
      //Pesquisar por laptop
      cy.get('input[name=conteudo]').type('laptop')
      // Entrar na page do produto
      cy.get('input[name="conteudo"]').type('{enter}')
      //Aceitar cookies
      cy.get('.lgpd-message-box__Button-sc-1q1hr31-3').click();
      //Selecionar Laptop
      cy.get(':nth-child(6) > .old__Wrapper-sc-1hrr2l5-0 > .inStockCard__Wrapper-sc-8xyl4s-0 > .inStockCard__Link-sc-8xyl4s-1').click()
      //Aceitar coockie
      cy.get('.lgpd-message-box__Button-sc-1q1hr31-3').click()
      //Clicar em comprar
      cy.get('.src__ButtonUI-sc-1cpjf6b-3').click()
      //Escolher cor e voltagem
      cy.get('.gAcdqR > .src__BuyButtonText-sc-ybis5x-2').click()
      //Aceitar coockie
      cy.get('.lgpd-message-box__Button-sc-1q1hr31-3').click()
      //Clicar em continuar escolher garantias
      cy.get('.continue-button__Button-sc-1j23ixj-0').click()
      cy.screenshot('busca-laptop');
      
    
  })

  })
  

   
