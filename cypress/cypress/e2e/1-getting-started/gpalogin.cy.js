
// GPA - Login

import{slowCypressDown} from 'cypress-slow-down'

slowCypressDown (3000)


describe('GPA-LOGIN', () => {
    it('52404 - Validar Login Válido ', () => {
        //cy.visit - endereço da página a ser visitada
       cy.visit('https://ecommerce-pme-workspace.dev.quesaude.net/proposal/who-is-the-owner');
       // cy.get(':nth-child(1) > div > .c-jrhQYI').type('guilherme.silva@qsaude.com.br');
     //  cy.get(':nth-child(2) > div > .c-jrhQYI').type('Teste123*');
     //   cy.get('.c-byiRFR-fYYmIy-variant-rounded').click();
      //  cy.contains('.c-jRwJtO', 'Painel de Propostas').should('be.visible');

       });

       it('52404 - Validar Login Inválido ', () => {
        //cy.visit - endereço da página a ser visitada
        cy.visit('https://gpa-frontend.dev.quesaude.net/login');
        cy.get(':nth-child(1) > div > .c-jrhQYI').type('guilherme');
        cy.get(':nth-child(2) > div > .c-jrhQYI').type('12');
        cy.get('.c-byiRFR-fYYmIy-variant-rounded').click()
        cy.contains('p.c-hPWtUe', 'Insira um login válido.').should('be.visible');
        cy.contains('p.c-hPWtUe', 'A senha precisa ter no mínimo 8 caracteres.').should('be.visible');
        

       });
       
       it('52407 - Validar Link Esqueceu a senha?', () => {
        //cy.visit - endereço da página a ser visitada
        cy.visit('https://gpa-frontend.dev.quesaude.net/login');
        cy.contains('button', 'Esqueceu a senha?').click();
        cy.get('.c-jrhQYI').type('guilherme.silva@qsaude.com.br')
        cy.contains('button', 'Continuar').click();
        cy.contains('p.c-domFUb', 'Confirme o código de autenticação que enviamos para o seu e-mail.').should('be.visible');
        //cy.contains('p.c-hPWtUe', 'Insira um login válido.').should('be.visible');
        //cy.contains('p.c-hPWtUe', 'A senha precisa ter no mínimo 8 caracteres.').should('be.visible');
        

       });














    });

    

    