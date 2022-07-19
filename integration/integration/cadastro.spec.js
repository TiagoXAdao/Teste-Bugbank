/// <reference types ="Cypress" />  
//comando acima é para leitura dos comandos cypress
describe('Cadastro de usuario', () => {
    before(() =>{
        cy.visit('https://bugbank.netlify.app/') //comando para acessar o site
    })

    it('Usuario',() => {
        cy.get('.ihdmxA').click() //botão para cadastro
        cy.get(':nth-child(2) > .input__default').type('tiago@boavista.com.br')//incluir email
        cy.get(':nth-child(3) > .input__default').type('Tiago Ximenes') //nome do usuario
        cy.get(':nth-child(4) > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default').type('1234')//senha do usuario
        cy.get(':nth-child(5) > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default').type('1234')//repetir a senha
        cy.get('.styles__ContainerFormRegister-sc-7fhc7g-0 > .style__ContainerButton-sc-1wsixal-0').click()// clicar no botão para cadastro
        
    })

    it.only('Logar', () => {
        cy.get('.style__ContainerFormLogin-sc-1wbjw6k-0 > :nth-child(1) > .input__default').type('tiago@boavista.com.br') // incluir email no campo para logar
        cy.get('.style__ContainerFormLogin-sc-1wbjw6k-0 > .login__password > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default').type('1234') //incluir senha
        cy.get('.otUnI').click() //botão para logar
        cy.get('.home__Footer-sc-1auj767-16 > .home__Text-sc-1auj767-9').should('contain', 'Obrigado por escolher nosso banco') //validar acesso pela frase de obrigado por escolher nosso banco
    })
})