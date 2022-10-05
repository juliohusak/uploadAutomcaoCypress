/// <reference types="cypress" />

context("Preenchendo os dados do titular", () => {
 
  //var faker = require("faker-br");

  describe("Sou eu mesmo", () => {

    it("Cadastro", () => {
                        //Visitar aba de cadastro 
                        cy.visit('https://ecommerce-workspace.hlg.quesaude.net/proposal/owner/who-is-the-owner')
                        //Vamos começar, quem será o titular do plano? 
                        //Selecionando a opção "Será eu mesmo"
                        cy.get('.chakra-stack > :nth-child(1)').click()
                        //Clicando no botão continuar
                        cy.screenshot()
                        cy.get('.css-3mh1jy > .chakra-button').click()
                        //Nome 
                        cy.get('.css-tuh9u2 > .css-w8yp2d > .chakra-input').type('Talissa Silva')
                        //Data de nascimento
                        cy.get(':nth-child(2) > .css-w8yp2d > .chakra-input').type('07092001')
                        //Gênero
                        cy.get(':nth-child(2) > .chakra-radio__control').click()
                        //Estado civil 
                        cy.get(':nth-child(4) > .css-w8yp2d > .chakra-select__wrapper > .chakra-select').select('Solteiro')
                        //CPF
                        cy.get(':nth-child(5) > .css-w8yp2d > .chakra-input').type('17596573878')
                        //RG
                        cy.get(':nth-child(6) > .css-w8yp2d').type('38332662x')
                        //Órgão emissor
                        cy.get(':nth-child(7) > .css-w8yp2d > .chakra-input').type('SSP')
                        //Nome da mãe
                        cy.get(':nth-child(10) > .css-w8yp2d > .chakra-input').type('Adriana Cunha')
                        cy.screenshot()
                        //Continuar
                        cy.get('.css-ewrk46').click()
                        //Telefone
                        cy.get(':nth-child(1) > .css-w8yp2d > .chakra-input').type('11977936600')
                        //E-mail
                        cy.get(':nth-child(2) > .css-w8yp2d > .chakra-input').type('talissaagtha@gmail.com')
                        cy.screenshot()

                        
                });
           });
      
      });