/// <reference types="cypress" />
       

describe("Sou eu mesmo", () => {
       
       it('Login', () => {
         
            cy.visit('https://ecommerce-workspace.hlg.quesaude.net/login')
             //CPF
            cy.get('.chakra-input').type('50812759800')
             //Enviar código
            cy.get(':nth-child(1) > .chakra-link > .chakra-text').click()
            //Visualizar 
            cy.get('.css-9k8tgg').should('contain','Digite o código de 6 dígitos que enviamos para')
            
          });

        });