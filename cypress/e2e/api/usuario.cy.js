/// <reference types="Cypress"/>

 //add only 
 describe('API - Teste lista usuarios' , () => {

    // Add only 
    it('Deve realizar o Login com sucesso', () => {
        cy.request({
            method: 'POST',
            url: 'https://serverest.dev/usuarios',
            body:{
                "nome": "Fulano da Silva",
                "email": "beltrano@qa.com.br",
                "password": "teste",
                "administrador": "true"
              },
              failOnStatusCode: false 
        }).then((Response)=>{
            expect(Response.status).to.equal(400) 
            expect(Response.body.message).to.equal('Este email já está sendo usado')
        })
        

    });
});   