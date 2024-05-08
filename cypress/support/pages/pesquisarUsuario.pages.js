import { faker } from '@faker-js/faker';
// const email = faker.internet.email()
// const nome = faker.person.fullName()

export default class PesquisarUsuarioPage {

    inputNomeOuEmail = 'input[placeholder="E-mail ou nome"]';
    campoNomeUm = '[data-test="userDataName"]';
    campoEmailUm = '[data-test="userDataEmail"]';
    ButtonVerDetalhesUm = '#userDataDetalhe [style="vertical-align: inherit;"]';
    buttonExcluirUsuarioUm = '[data-test="userDataDelete"] [stroke="currentColor"]';
    idUsuario = 'input.sc-dLMFU.Mcjyi'
    idDele= ''

    linkDetalhes = 'https://rarocrud-frontend-88984f6e4454.herokuapp.com/users/';

    // mockUsuario() {
    //     cy.request({
    //         method: 'POST',
    //         url: 'https://rarocrud-80bf38b38f1f.herokuapp.com/api/v1/users',
    //         body: {
    //             "name": nome,
    //             "email": email,
    //         },
    //     })}
    typeEmail(email){
            cy.get(this.inputNomeOuEmail).type(email);
        }
    typeNome(nome){
            cy.get(this.inputNomeOuEmail).type(nome);
        }
    getListaUsuarios (){
        return cy.get(this.listaUsuarios);
    }
    getCampoNomeUm (){
        return cy.get(this.campoNomeUm);
    }
    getCampoEmailUm (){
        return cy.get(this.campoEmailUm);
    }
    clickButtonDetalhes(){
            cy.get(this.ButtonVerDetalhesUm).click();
    }

    GetidUsuário(){
        return cy.get(this.idUsuario)
            .invoke(val).should('equal', idDele)
    }
}
