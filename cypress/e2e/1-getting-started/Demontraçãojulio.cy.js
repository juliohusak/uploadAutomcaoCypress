import{slowCypressDown} from 'cypress-slow-down'

slowCypressDown ()

describe('Login e registro de usuários alura pic', () => {

  beforeEach (() => {
  cy.visit('https://alura-fotos.herokuapp.com');
})

  it('Verifica mensagens validação', () => {
        cy.contains('a','Register now').click();
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'Email is required!').should('be.visible');
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'User name is required!').should('be.visible');
        cy.contains('ap-vmessage', 'Password is required!').should('be.visible');
        cy.contains('ap-vmessage', 'Full name is required!').should('be.visible');
  })

  it('Verifica mensagens de email inválido', () => {
    cy.contains('a','Register now').click();
    cy.contains('button', 'Register').click();
    cy.get('input[formcontrolname="email"]').type('juliohusak');
    cy.contains('ap-vmessage', 'Invalid e-mail').should('be.visible');
  })

  it('Verifica Password com 8 digitos', () => {
    cy.contains('a','Register now').click();
    cy.contains('button', 'Register').click();
    cy.get('input[formcontrolname="password"]').type('123');
    cy.contains('button', 'Register').click();
    cy.contains('ap-vmessage', 'Mininum length is 8').should('be.visible');
  })

  it('Verifica FullName com mesmos de 8 digitos', () => {
    cy.contains('a','Register now').click();
    cy.contains('button', 'Register').click();
    cy.get('input[formcontrolname="fullName"]').type('Z');
    cy.contains('button', 'Register').click();
    cy.contains('ap-vmessage', 'Mininum length is 2').should('be.visible');
  })

  it('Verifica mensagens validação', () => {
    cy.contains('a','Register now').click();
    cy.contains('button', 'Register').click();
    cy.contains('ap-vmessage', 'Email is required').should('be.visible');
    cy.contains('button','Register').click();
    cy.contains('ap-vmessage', 'User name is required!').should('be.visible');
    cy.contains('ap-vmessage', 'Password is required!').should('be.visible');
    cy.contains('ap-vmessage', 'Full name is required!').should('be.visible');
  })

  it('Verifica mensagens de email inválido', () => {
    cy.contains('a','Register now').click();
    cy.contains('button', 'Register').click();
    cy.get('input[formcontrolname="email"]').type('husak');
    cy.contains('ap-vmessage', 'Invalid e-mail').should('be.visible');
  })


})

    
    