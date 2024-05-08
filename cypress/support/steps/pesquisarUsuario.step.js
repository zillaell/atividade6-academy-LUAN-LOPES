import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'
import { faker } from '@faker-js/faker';
import PesquisarUsuarioPage from '../pages/pesquisarUsuario.pages';
const paginaPesquisar = new PesquisarUsuarioPage
const email = faker.internet.email()
const nome = faker.person.fullName()

// pesquisar usuário pelo email com sucesso//
Given('que tenho um usuário cadastrado',()=>{
    cy.request({
        method: 'POST',
        url: 'https://rarocrud-80bf38b38f1f.herokuapp.com/api/v1/users',
        body: {
            "name": nome,
            "email": email,
        },
    }).as('postUsuario').then((response)=>{
        expect(response.body).to.have.property('id');
        cy.log(response.body.id);
    })}
);
Given('que acessei a funcionalidade de pesquisar usuário',()=>{

    cy.visit('https://rarocrud-frontend-88984f6e4454.herokuapp.com/users');
});
When('informar o e-mail do usuário cadastrado',()=>{
    paginaPesquisar.typeEmail(email)
});
When('confirmar operação',()=>{
    cy.wait('@postUsuario');
});
Then('devo encontrar o usuário cadastrado',()=>{
    paginaPesquisar.getCampoEmailUm().invoke ('val').should('equal', email)
    paginaPesquisar.getCampoNomeUm()
   .invoke('val').should('equal', nome)
});
// pesquisar usuário pelo nome com sucesso//

// pesquisar pelo identificador unico (id)

// pesquisar pelo identificador unico (id) no link e conferir se é o usuario correto

//##### BAD REQUEST ######

// usuário não encontrado pelo email

// usuário não encontrado pelo enome
