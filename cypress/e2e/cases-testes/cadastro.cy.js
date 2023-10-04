/// <reference types="cypress" />

describe('Cadastro no Submarino', () => {
  beforeEach(() => {
    cy.visit('https://cliente.submarino.com.br/minha-conta/cadastro?next=https://www.submarino.com.br/')
  })
  

  it('preenche o formulário de cadastro', () => {
    // Preenche o nome completo
    cy.get('[name="name"]').type('João Testador')

    // Seleciona o gênero (no exemplo, "Masculino")
    cy.get('[data-cy="labelFor__M"] > span').click()

    // Preenche a data de nascimento
    cy.get('[data-cy="formField__birthDate"]').type('25/10/1990')

    // Preenche o CPF
    cy.get('[data-cy="formField__cpf"]').type('123.456.789-00')

    // Preenche o telefone
    cy.get('[data-cy="formField__phone"]').type('(11)91234-5678')

    // Preenche o e-mail
    cy.get('[name="email"]').type('testemail@example.com')

    // Clique para receber e-mails promocionais (opcional)
    //cy.wait(5000);
    cy.get('[name="optIn"]').check()

    // Preenche a senha
    cy.get('#password-input').clear().type('j8G@.$-pL@2vwd6')
    //cy.get('[data-cy="formField__password"]').invoke('attr', 'type', 'password').type('j8G@.$-pL@2vwd6')

    // Clique para concordar em compartilhar dados com parceiros (opcional)
    cy.get('[name="shareData"]').check()

    // Submete o formulário
    cy.get('[type="submit"]').click()

     
  })


})
