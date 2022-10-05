
// GPA - Login

describe('GPA-LOGIN', () => {
    it('52404 - Validar Login Válido ', () => {
        //cy.visit - endereço da página a ser visitada
        cy.visit('https://gpa-frontend.hlg.quesaude.net/login');
        cy.get(':nth-child(1) > div > .c-iTJqHB').type('julio.husak@qsaude.com.br');
        cy.get(':nth-child(2) > div > .c-iTJqHB').type('Qsaude@123');
        

       });
    });

    

    