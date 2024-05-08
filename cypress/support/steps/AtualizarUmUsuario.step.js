import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'
import { faker } from '@faker-js/faker';
import atualizarrUsuarioPage from '../pages/pesquisarUsuario.pages';
const paginaAtualizar = new atualizarrUsuarioPage
const email = faker.internet.email()
const nome = faker.person.fullName()
let id


Given('que acessei a funcionalidade de atualizar usuario',()=>{
        cy.request({
            method: 'POST',
            url: 'https://rarocrud-80bf38b38f1f.herokuapp.com/api/v1/users',
            body: {
                "name": nome,
                "email": email,
            },
        }).then((response)=>{
            expect(response.body).to.have.property('id');
            cy.log(response.body.id);
            const id = response.body.id;
            cy.wrap(id);
        });
    });
Given('escolho um usuário para editar',()=>{
    cy.visit('https://rarocrud-frontend-88984f6e4454.herokuapp.com/users/' + id);
})
When('informar um novo nome',()=>{});
When('informar um novo e-mail',()=>{});
When('confirmar operação',()=>{});
Then('o usuário deverá ser atualizado',()=>{});
