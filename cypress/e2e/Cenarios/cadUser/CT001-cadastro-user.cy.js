describe('CT001 - cadastro-user', () => {
    beforeEach(() => {
      // Antes de cada teste, visitamos a página inicial
      cy.visit('https://front.serverest.dev/login');
    });
  
    it('Deve Mostrar tela inicial, e clicar no Cadastr-se', () => {
      // Passo 1: Clicar no botão "Criar uma conta"
      cy.get('[data-testid="cadastrar"]').click();

      // Passo 2: Preencher o campo nome para que seja realizado o cadastro.
      cy.get('[data-testid="nome"]').type('adir souza');
  
      // Passo 3: Preencher o campo de email com um email não cadastrado 
      cy.get('input[type="email"]').type('souzatechconsult@gmail.com');  

      // Passo 4: Preencher o campo de senha
      cy.get('input[type="password"]').type('senha123');
  
      // Passo 5: Clicar no botão "Criar conta"
      cy.get('[data-testid="cadastrar"]').click();
  
    });
  });
  