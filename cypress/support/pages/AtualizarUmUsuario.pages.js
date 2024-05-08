export default class AtualizarUsuarioPage {

    inputName = '#userName';
    inputEmail = '#userEmail';
    buttonEditar = '.sc-kpDqfm.cEXnaz';
    buttonSalvar = '.sc-kpDqfm.dGvNqp .sc-dAlyuH.jdAtLn';

    typeEmail(email) {
        cy.get(this.inputNomeOuEmail).type(email);
    }
    typeNome(nome) {
        cy.get(this.inputNomeOuEmail).type(nome);
    }
    clickButtonEditar(){
        cy.get(this.buttonEditar).click();
    }
    clickButtonSalvar(){
        cy.get(this.buttonSalvar).click();
    }

    // ao tentar cadastrar um usuario com email já em uso
    //devo receber: 'Este e-mail já é utilizado por outro usuário.'
}

