describe('CT005 - Adicionar produto Carrinho', () => {
    beforeEach(() => {
      // Acessa a página de login diretamente, onde já existe uma conta
      cy.visit('https://front.serverest.dev/login');
    });
  
    it('Deve realizar login com sucesso ao inserir email e senha válidos', () => {
      // Passo 1: Preencher o campo de email com um email válido
      cy.get('input[type="email"]').type('souzatechconsult@gmail.com'); 
  
      // Passo 2: Preencher o campo de senha com a senha válida
      cy.get('input[type="password"]').type('senha123');
  
      // Passo 3: Clicar no botão "Entrar"
      cy.get('[data-testid="entrar"]').click();

      // passo 4: Clicar no produto para compra
      cy.get(':nth-child(1) > .card-body > div > [href="/minhaListaDeProdutos"] > [data-testid="adicionarNaLista"]').click();

      // Passo 5: Adicionar o produto no carrinho
      cy.get('[data-testid="adicionar carrinho"]').click();
  
    });
  });
  