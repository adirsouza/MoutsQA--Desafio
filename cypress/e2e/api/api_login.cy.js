/// <reference types="Cypress"/>

 //add only 
 describe('API - Teste Login' , () => {

    // Add only 
    it('Deve realizar o Login com sucesso', () => {
        cy.request({
            method: 'POST',
            url: 'https://serverest.dev/login',
            body:{
                    "email": "fulano@qa.com",
                    "password": "teste"
            }

        }).then((Response)=>{
            expect(Response.status).to.equal(200) 
            expect(Response.body.message).to.equal('Login realizado com sucesso')
        })

    });
        it('Deve realizar a senha', () => {
            cy.request({
                method: 'POST',
                url: 'https://serverest.dev/login',
                body:{
                        "email": "fulano@qa.com",
                        "password": "teste111"
                },
                failOnStatusCode: false
            }).then((Response)=>{
                expect(Response.status).to.equal(401) 
                expect(Response.body.message).to.equal('Email e/ou senha inválidos')
            })
    
        });
    });

 //});