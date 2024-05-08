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
When('informar um novo nome com 100 caracteres',()=>{

});

//conseguir criar um usuário válido com 60 caracteres no e-mail/////
When('informar um novo e-mail com 60 caracteres',()=>{});

///////////////////////// BAD REQUEST ///////////////////////////////////
// não deve ser possível cadastrar um usuário com mais de 100 caracteres no nome ////
When('informar um novo nome com mais de 100 caracteres',()=>{});
Then('não deve ser possível cadastrar o usuário',()=>{
    cy.wait('@postUsuario');
});
// não deve ser possível cadastrar um usuário com mais de 60 caracteres no email ////
When('informar um novo e-mail com mais de 60 caracteres',()=>{});
// não deve ser possível cadastrar um usuário sem preencher o campo de email////
When('informar somente o novo nome',()=>{});
// não deve ser possível cadastrar um usuário sem preencher o campo de nome ////
When('informar somente o novo e-mail',()=>{});
// não deve ser possível cadastrar um usuário ao preencher o campo de email de formato inválido////
When('informar um novo e-mail de formato inválido',()=>{});
// não deve ser possível cadastrar um usuário com o email já em uso ////
When('informar um novo e-mail já em uso',()=>{});
