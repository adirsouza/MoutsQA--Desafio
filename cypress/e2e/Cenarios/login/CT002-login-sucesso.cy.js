describe('CT003 - Realizar Login com sucesso', () => {
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
  
    });
  });
  