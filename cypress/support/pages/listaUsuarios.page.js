export default class ListaUsuariosPage{

    inputNomeOuEmail = '[placeholder = "E-mail ou nome"]';
    listaUsuarios = '.sc-bXCLTC.jykigL';
    campoNomeUm = '.sc-dAbbOL.lcgSvJ';
    campoEmailUm = '[data-test="userDataEmail"]';
    buttonExcluirUsuarioUm = '[data-test="userDataDelete"] [stroke="currentColor"]';
    buttonVerDetalhesUm = '#userDataDetalhe [style="vertical-align: inherit;"]';
    buttonR = '.sc-eqUAAy.OPBKy';
    buttonProximo = '#paginacaoProximo';
    buttonAnterior = '#paginacaoVoltar';
    buttonCadastreNovo = 'Cadastre um novo usuário';
    usuarioNaoEncontrado = 'Ops! Não existe nenhum usuário para ser exibido.'
    
    linkPaginaNovo = '[href="/users/novo"]';
    numeroDaPagina = '#paginacaoAtual [style="vertical-align: inherit;"]'

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
        cy.get(this.buttonVerDetalhesUm).click();
    }
    msgCadastreNovo (){
        cy.contains(this.buttonCadastreNovo).click();
    }
    msgUsuNaoEncontrado (){
        cy.contains(this.usuarioNaoEncontrado);
    }
    clickProximo (){
        cy.get(this.buttonProximo).click();
    }
    mudançaDePagina (){
        cy.get(this.numeroDaPagina).invoke('val').should('equal', 2);
    }

    multiplosUsuários (){
        {
            "name" = faker.person.fullName();
            "email" = faker.internet.email();
        }
        {
            "name"= faker.person.fullName();
            "email"= faker.internet.email();
        }
        {
            "name" = faker.person.fullName();
            "email" = faker.internet.email();
        }
        {
            "name"= faker.person.fullName();
            "email"= faker.internet.email();
        }
        {
            "name" = faker.person.fullName();
            "email" = faker.internet.email();
        }
        {
            "name"= faker.person.fullName();
            "email"= faker.internet.email();
        }
        {
            "name" = faker.person.fullName();
            "email" = faker.internet.email();
        }
        {
            "name"= faker.person.fullName();
            "email"= faker.internet.email();
        }
    }
}