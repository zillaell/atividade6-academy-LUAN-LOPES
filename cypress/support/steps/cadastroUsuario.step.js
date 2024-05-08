import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'
import { faker } from '@faker-js/faker';
import cadastroPage from '../pages/cadastro.pages';
const paginaCadastro = new cadastroPage

////// cadastro com sucesso ///////
Given('que acessei a funcionalidade de cadastro', () => {
    cy.visit('/novo');
});
When('informar um novo nome', () => {
    paginaCadastro.typeNome(faker.person.fullName());
});
When('informar um novo e-mail', () => {
    paginaCadastro.typeEmail(faker.internet.email());
});
When('confirmar operação', () => {
    cy.intercept('POST','https://rarocrud-80bf38b38f1f.herokuapp.com/api/v1/users')
    .as('postUsuario')
    paginaCadastro.clickButtonCadastrar();
});
Then('o usuário deverá ser cadastrado', () => {
    paginaCadastro.getUsuarioCadastrado();
});

//conseguir criar um usuário válido com 100 caracteres no nome//////
Given('que acessei a funcionalidade de cadastro',()=>{});
When('informar um novo nome com 100 caracteres',()=>{});
When('informar um novo e-mail',()=>{});
When('confirmar operação',()=>{});
Then('o usuário deverá ser cadastrado',()=>{});
//conseguir criar um usuário válido com 60 caracteres no e-mail/////
Given('que acessei a funcionalidade de cadastro',()=>{});
When('informar um novo nome',()=>{});
When('informar um novo e-mail com 60 caracteres',()=>{});
When('confirmar operação',()=>{});
Then('o usuário deverá ser cadastrado',()=>{});
///////////////////////// BAD REQUEST ///////////////////////////////////

// não deve ser possível cadastrar um usuário com mais de 100 caracteres no nome ////
Given('que acessei a funcionalidade de cadastro',()=>{});
When('informar um novo nome com mais de 100 caracteres',()=>{});
When('informar um novo e-mail',()=>{});
When('confirmar operação',()=>{});
Then('não deve ser possível cadastrar o usuário',()=>{
    cy.wait('@postUsuario');
});
// não deve ser possível cadastrar um usuário com mais de 60 caracteres no email ////
Given('que acessei a funcionalidade de cadastro',()=>{});
When('informar um novo nome',()=>{});
When('informar um novo e-mail com mais de 60 caracteres',()=>{});
When('confirmar operação',()=>{});
Then('não deve ser possível cadastrar o usuário',()=>{});
// não deve ser possível cadastrar um usuário sem preencher o campo de email////
Given('que acessei a funcionalidade de cadastro',()=>{});
When('informar um novo nome',()=>{});
When('confirmar operação',()=>{});
Then('não deve ser possível cadastrar o usuário',()=>{});
// não deve ser possível cadastrar um usuário sem preencher o campo de nome ////
Given('que acessei a funcionalidade de cadastro',()=>{});
When('informar um novo e-mail',()=>{});
When('confirmar operação',()=>{});
Then('não deve ser possível cadastrar o usuário',()=>{});
// não deve ser possível cadastrar um usuário ao preencher o campo de email de formato inválido////
Given('que acessei a funcionalidade de cadastro',()=>{});
When('informar um novo nome',()=>{});
When('informar um novo e-mail de formato inválido',()=>{});
When('confirmar operação',()=>{});
Then('não deve ser possível cadastrar o usuário',()=>{});
// não deve ser possível cadastrar um usuário com o email já em uso ////
Given('que acessei a funcionalidade de cadastro',()=>{});
When('informar um novo nome',()=>{});
When('informar um novo e-mail já em uso',()=>{});
When('confirmar operação',()=>{});
Then('não deve ser possível cadastrar o usuário',()=>{});
