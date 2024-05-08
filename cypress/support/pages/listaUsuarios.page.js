export default class ListaUsuariosPage{

    inputNomeOuEmail = '[placeholder = "E-mail ou nome"]';
    listaUsuarios = '.sc-bXCLTC.jykigL';
    campoNomeUm = '.sc-dAbbOL.lcgSvJ';
    campoEmailUm = '[data-test="userDataEmail"]';
    buttonExcluirUsuarioUm = '[data-test="userDataDelete"] [stroke="currentColor"]';
    ButtonVerDetalhesUm = '#userDataDetalhe [style="vertical-align: inherit;"]';
    buttonR = '.sc-eqUAAy.OPBKy';
    
    linkPaginaNovo = '[href="/users/novo"]';
    linkPaginaSobre  = '';

    typeEmail (email){
        cy.get(this.inputNomeOuEmail).type(email);
    }
    typeNome (nome){
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
    
    clickButtonDetalhes (){
        cy.get(this.ButtonVerDetalhesUm).click();
    }
}