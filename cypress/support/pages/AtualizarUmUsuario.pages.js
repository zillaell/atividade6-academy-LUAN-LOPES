export default class AtualizarUsuarioPage {

    inputName = '#userName';
    inputEmail = '#userEmail';
    buttonEditar = '.sc-kpDqfm.cEXnaz';
    buttonSalvar = '.sc-kpDqfm.dGvNqp .sc-dAlyuH.jdAtLn';

    typeEmail(email) {
        cy.get(this.inputName).type(email);
    }
    typeNome(nome) {
        cy.get(this.inputEmail).type(nome);
    }
    clickEditar() {
        return cy.get(this.buttonEditar).click();
    }
    clickSalvar() {
        cy.get(this.buttonSalvar).click();
    }
    editar(email, nome) {
        this.typeEmail(email);
        this.typeNome(nome);
        this.clickEditar();
    }

    // ao tentar cadastrar um usuario com email já em uso
    //devo receber: 'Este e-mail já é utilizado por outro usuário.'
}

