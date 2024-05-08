# language: pt

Funcionalidade: Lista de usuários

Cenário: Encontrar ao menos um usuário já cadastrado na lista de usuários
  Dado que existe um usuário cadastrado
  Quando acesso a funcionalidade de listagem de usuários
  Então algum usuário cadastrado deverá estar na lista

Cenário: caso não existam usuários cadastrados deve existir uma opção para cadastrar
  Dado que acesso o site
  Quando acesso a funcionalidade de listagem de usuários
  E não existir nenhum usuário cadastrado
  Então deve ser exibida mensagem de erro
  E deve existir uma opção para cadastrar um novo usuário

Cenário: mudança de página 1 para a 2
  Dado que acesso o site tendo vários usuários cadastrados
  Quando acesso a funcionalidade de listagem de usuários
  E estou numa paginação de número 1
  E clico no botão de Proximo
  Então devo mudar para a página seguinte

Cenário: mudança de página 2 para a 1
  Dado que acesso o site tendo vários usuários cadastrados
  Quando acesso a funcionalidade de listagem de usuários
  E estou numa paginação de número 2
  E clico no botão de Anterior 
  Então devo conseguir mudar para a página anterior

Cenário: não conseguir mudar para a página anterior estando na primeira
  Dado que acesso o site 
  Quando acesso a funcionalidade de listagem de usuários
  E estou numa paginação de número 1
  E clico no botão de Anterior
  Então não devo conseguir mudar para a página anterior

Cenário: não conseguir mudar para a próxima página tendo 6 ou menos usuários cadastrados
  Dado que acesso o site
  E existem menos de 6 usuários cadastrados
  Quando acesso a funcionalidade de listagem de usuários
  E estou numa paginação de número 1
  E clico no botão de Proximo
  Então não devo conseguir mudar para a página seguinte

Cenário: reset da página ao precionar o Rbutton
  Dado que acesso o site tendo vários usuários cadastrados
  Quando acesso a funcionalidade de listagem de usuários
  E estou numa paginação de número 2
  E clico no "Rbutton"
  Então devo resetar a pagina e voltar a para 1ª pagina atualizada


