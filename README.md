# TesteEcommerceCypress
Teste de Automação com Cypress criar cadastro do cliente no site do submarino e fazer busca de produtos


## Visão Geral
Este é um projeto de teste automatizado com Cypress para treinamento utilizei o site do submarino para teste o qual foi automatizado os seguintes elementos;
-Preenchimento do cadastro de cliente campos obrigatórios
-Busca de produtos exemplo pesquisa Laptop
-Colocar produto no carrinho de compra

## 1 Cenarios de testes Cadastrar cliente

Site https://cliente.submarino.com.br/minha-conta/cadastro?next=https://www.submarino.com.br/

Preenche o nome completo
  
Seleciona o gênero (no exemplo, "Masculino")
  
Preenche a data de nascimento
 
Preenche o CPF

Preenche o telefone

Preenche o e-mail

Clique para receber e-mails promocionais (opcional)

Preenche a senha

Clique para concordar em compartilhar dados com parceiros (opcional)

Submete o formulário


## 2 Cenarios de testes Pesquisar produto e colocar no carribho de compras

Site https://www.submarino.com.br/

Consultar cep

Preencher cep

Clicar em ok do cep

Pesquisar por laptop

Entrar na page do produto

Aceitar cookies

Selecionar Laptop

Aceitar coockie

Clicar em comprar
  
Escolher cor e voltagem
  
Aceitar coockie

Clicar em continuar escolher garantias

  

   



   


## Pré-requisitos
     Cypress esta inserido na package.json
         "scripts": {
         "test": "echo \"Error: no test specified\" && exit 1",
         "cypress:open": "cypress open"
  },
    Desta forma ele abre ao rodar o teste direto pelo terminal
  
Quando a interação com o reCAPTCHA é complexa e não pode ser automatizada de forma confiável, é possível realizar essa etapa manualmente durante os testes, desde que seja viável em seu processo de desenvolvimento e teste.

## Instalação

Descreva como os usuários podem instalar e configurar o seu projeto em seus próprios sistemas. Inclua comandos ou etapas específicas.

Exemplo:

1. Clone o repositório:

   ```shell
   git clone https://github.com/fabianonogueira1/TesteEcommerceCypress.git

      Instale as dependências:
     npm init
     node -v
     npm init -y
     npm install cypress

    Navegue até o diretório do projeto:

    cd seuprojeto

 

