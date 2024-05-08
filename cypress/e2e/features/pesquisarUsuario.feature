# language: pt

Funcionalidade: Pesquisar usuário

Cenário: pesquisar usuário por email com sucesso
  Dado  que tenho um usuário cadastrado
  E que acessei a funcionalidade de pesquisar usuário
  Quando informar o e-mail do usuário cadastrado
  E confirmar operação
  Então devo encontrar o usuário cadastrado

Cenário: pesquisar usuário pelo Nome
  Dado que tenho um usuário cadastrado
  E que acessei a funcionalidade de pesquisar usuário
  Quando informar o nome do usuário cadastrado
  E confirmar operação
  Então devo encontrar o usuário cadastrado
# pesquisar pelo identificador unico (id)

Cenário: pesquisar usuário pelo identificador unico (id)
  Dado que tenho um usuário cadastrado
  E que acessei a funcionalidade de pesquisar usuário
  Quando informar o e-mail do usuário cadastrado
  E confirmar operação
  E acessar os detalhes
  Então devo encontrar o id do usuário cadastrado
# pesquisar pelo identificador unico (id) no link e conferir se é o usuario correto

Cenário: pesquisar pelo identificador unico (id) no link e conferir se é o usuario correto
  Dado que tenho um usuário cadastrado
  E que acessei a funcionalidade de pesquisar usuário
  Quando acesso o link de detalhes usando o id
  Então devo encontrar o usuário cadastrado

##### BAD REQUEST ######

# usuário não encontrado pelo email
Cenário:  não deve achar usuário ao pesquisar pelo email
  Dado  que acessei a funcionalidade de pesquisar usuário
  Quando informar um email inexistente na lista
  E confirmar operação
  Então não devo encontrar o usuário cadastrado

# usuário não encontrado pelo enome
Cenário:  não deve achar usuário ao pesquisar
  Dado  que acessei a funcionalidade de pesquisar usuário
  Quando informar um nome inexistente na lista
  E confirmar operação
  Então não devo encontrar o usuário cadastrado
  