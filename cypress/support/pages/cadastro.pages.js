export default class CadastroPage{
    
    inputNome = '#name';
    inputEmail = '#email';
    buttonR = '.sc-eqUAAy OPBKy';
    buttonVoltar= '[href= "/users"]';
    buttonCadastrar = '.sc-dAlyuH.jdAtLn';

    msgUsuarioCadastrado = 'Usuário salvo com sucesso!';
    linkPaginaUsuarios = '';
    
    typeNome (nome){
        cy.get(this.inputNome).type(nome);
    }
    typeEmail (email){
        cy.get(this.inputEmail).type(email);
    }
    clickButtonCadastrar (){
        cy.get(this.buttonCadastrar).click();
    }
    getListaUsuarios (){
        return cy.get(this.buttonCadastrar);
    }
    getUsuarioCadastrado (){
        return cy.contains(this.msgUsuarioCadastrado);
    }
    // cadastrar(email,nome){
    //     this.typeEmail(email);
    //     this.typeNome(nome);
    //     this.clickButtonCadastrar();
    // }
}