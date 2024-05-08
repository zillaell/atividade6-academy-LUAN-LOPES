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

// Aparecer uma opção para cadastrar caso não haja nenhum cadastrardo

Given('que acesso o site',()=>{
    cy.visit('');
});
When('não existir nenhum usuário cadastrado',()=>{
    cy.intercept(
        method= 'GET',
        url= 'https://rarocrud-80bf38b38f1f.herokuapp.com/api/v1/users',
        body= {}
    ).as('mockadaLista');
});
Then('deve ser exibida mensagem de erro',()=>{
    cy.wait('@mockadaLista');
    paginaListaUsuarios.msgUsuNaoEncontrado();
});
Then('deve existir uma opção para cadastrar um novo usuário',()=>{
    paginaListaUsuarios.msgCadastreNovo();
    cy.url('').should('equal','https://rarocrud-frontend-88984f6e4454.herokuapp.com/users/novo');
});

// Mudança de página 1 para a 2
Given('que acesso o site tendo vários usuários cadastrados',()=>{
    cy.intercept(
        method= 'GET',
        url= 'https://rarocrud-80bf38b38f1f.herokuapp.com/api/v1/users',
        body= paginaListaUsuarios.multiplosUsuários()
    ).as('mockadaLista2');
});
When('estou numa paginação de número 1',()=>{
    cy.wait('@mockadaLista2');
    cy.visit('');


});
When('clico no botão de Proximo',()=>{
    paginaListaUsuarios.clickProximo ();
});
Then('devo mudar para a página seguinte',()=>{
    paginaListaUsuarios.mudançaDePagina ();
});
// mudança de página 2 para a 1
When('estou numa paginação de número 2',()=>{

});
When('clico no botão de Anterior',()=>{

});
Then('devo conseguir mudar para a página anterior',()=>{

});
// não conseguir mudar para págin anteror estando na primeira
Then('não devo conseguir mudar para a página anterior',()=>{

});
//não conseguir mudar para a próxima página tendo 6 ou menos usuários cadastrados
When('existem menos de 6 usuários cadastrados',()=>{

});
Then('não devo conseguir mudar para a página seguinte',()=>{

});
// reset da página ao precionar o Rbutton
When('clico no "Rbutton"',()=>{

});
Then('devo resetar a pagina e voltar a para 1ª pagina atualizada',()=>{

});
