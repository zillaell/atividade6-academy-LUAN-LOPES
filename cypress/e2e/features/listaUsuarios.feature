# language: pt

Funcionalidade: Lista de usuários

Cenário: Encontrar ao menos um usuário já cadastrado na lista de usuários
  Dado que existe um usuário cadastrado
  Quando acesso a funcionalidade de listagem de usuários
  Então algum usuário cadastrado deverá estar na lista

