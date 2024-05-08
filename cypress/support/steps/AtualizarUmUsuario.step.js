import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'
import { faker } from '@faker-js/faker';
import atualizarrUsuarioPage from '../pages/pesquisarUsuario.pages';
const paginaAtualizar = new atualizarrUsuarioPage
const email = faker.internet.email()
const nome = faker.person.fullName()
var id

//conseguir atualizar usuário com sucesso

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
            var id = response.body.id;
            cy.wrap(id).as('idRoubado');
        });
    });
Given('escolho um usuário para editar',()=>{
    cy.get('@idRoubado').then((id)=>{
        cy.visit('https://rarocrud-frontend-88984f6e4454.herokuapp.com/users/' + id);
        paginaAtualizar.editar
        paginaAtualizar.typeNome
        paginaAtualizar.typeEmail
    });
})
When('informar um novo nome',()=>{
    cy.visit('https://rarocrud-frontend-88984f6e4454.herokuapp.com/users/' + id);
    paginaAtualizar.clickEditar
    paginaAtualizar.typeNome
});
When('informar um novo e-mail',()=>{
    paginaAtualizar.typeEmail
});
When('confirmar operação',()=>{
    paginaAtualizar.clickButtonSalvar
});
Then('o usuário deverá ser atualizado',()=>{
    p
});

//conseguir atualizar um usuário válido com 100 caracteres no nome

'informar um novo nome com 100 caracteres'

//conseguir atualizar um usuário válido com 60 caracteres no e-mail


//##### BAD REQUEST #############

//não deve ser possível atualizar um usuário com mais de 100 caracteres no nome


// não deve ser possível cadastrar um usuário com mais de 60 caracteres no email ////


// não deve ser possível cadastrar um usuário sem preencher o campo de email////


// não deve ser possível cadastrar um usuário sem preencher o campo de nome ////


// não deve ser possível cadastrar um usuário ao preencher o campo de email de formato inválido////


// não deve ser possível cadastrar um usuário com o email já em uso ////


