import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'
import { faker } from '@faker-js/faker';
import listaUsuariosPage from '../pages/listaUsuarios.page.js';
const paginaListaUsuarios = new listaUsuariosPage
////// lista de usuarios esta sendo exibida //////

Given('que existe um usuário cadastrado',()=>{
    cy.request(
        method= 'POST',
        url= 'https://rarocrud-80bf38b38f1f.herokuapp.com/api/v1/users',
        body= {
            "name": faker.person.fullName(),
            "email": faker.internet.email(),
          }
    )
});
When('acesso a funcionalidade de listagem de usuários',()=>{
    cy.visit('');
});
Then('algum usuário cadastrado deverá estar na lista',()=>{
    paginaListaUsuarios.getListaUsuarios(); // deve existir a lista
    paginaListaUsuarios.getCampoNomeUm(); // nesta lista deve ter ao menos o 1° a ser cadastrado
    paginaListaUsuarios.getCampoEmailUm();// contendo nom e email 
});