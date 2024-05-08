# language: pt

Funcionalidade: Cadastro de usuário

Cenário: Cadastro de usuário com sucesso
  Dado que acessei a funcionalidade de cadastro
  Quando informar um novo nome
  E informar um novo e-mail
  E confirmar operação
  Então o usuário deverá ser cadastrado



# //conseguir criar um usuário válido com 100 caracteres no nome//////
@100nome
Cenário: conseguir criar um usuário válido com 100 caracteres no nome
 Dado que acessei a funcionalidade de cadastro
  Quando informar um novo nome com 100 caracteres
  E informar um novo e-mail
  E confirmar operação
  Então o usuário deverá ser cadastrado

# //conseguir criar um usuário válido com 60 caracteres no e-mail/////
@60email
Cenário: conseguir criar um usuário válido com 60 caracteres no e-mail
  Dado que acessei a funcionalidade de cadastro
  Quando informar um novo nome
  E informar um novo e-mail com 60 caracteres
  E confirmar operação
  Então o usuário deverá ser cadastrado

# ///////////////////////// BAD REQUEST ///////////////////////////////////

# // não deve ser possível cadastrar um usuário com mais de 100 caracteres no nome ////
@bad100nome
Cenário: não deve ser possível cadastrar um usuário com mais de 100 caracteres no nome
  Dado que acessei a funcionalidade de cadastro
  Quando informar um novo nome com mais de 100 caracteres
  E informar um novo e-mail
  E confirmar operação
  Então  não deve ser possível cadastrar o usuário

# // não deve ser possível cadastrar um usuário com mais de 60 caracteres no email ////
@bad60email
Cenário: não deve ser possível cadastrar um usuário com mais de 60 caracteres no email 
  Dado que acessei a funcionalidade de cadastro
  Quando informar um novo nome
  E informar um novo e-mail com mais de 60 caracteres
  E confirmar operação
  Então  não deve ser possível cadastrar o usuário

# // não deve ser possível cadastrar um usuário sem preencher o campo de email////
@faltaEmail
Cenário: não deve ser possível cadastrar um usuário sem preencher o campo de email
  Dado que acessei a funcionalidade de cadastro
  Quando informar somente o novo nome
  E confirmar operação
  Então  não deve ser possível cadastrar o usuário

# // não deve ser possível cadastrar um usuário sem preencher o campo de nome ////
@faltaNome
Cenário: não deve ser possível cadastrar um usuário sem preencher o campo de nome 
  Dado que acessei a funcionalidade de cadastro
  Quando informar somente o novo e-mail
  E confirmar operação
  Então  não deve ser possível cadastrar o usuário

# // não deve ser possível cadastrar um usuário ao preencher o campo de email de formato inválido////
@invalEmail
Cenário: não deve ser possível cadastrar um usuário ao preencher o campo de email de formato inválido
  Dado que acessei a funcionalidade de cadastro
  Quando informar um novo nome
  E informar um novo e-mail de formato inválido
  E confirmar operação
  Então  não deve ser possível cadastrar o usuário

# // não deve ser possível cadastrar um usuário com o email já em uso ////
Cenário: não deve ser possível cadastrar um usuário com o email já em uso
  Dado que acessei a funcionalidade de cadastro
  Quando informar um novo nome
  E informar um novo e-mail já em uso
  E confirmar operação
  Então  não deve ser possível cadastrar o usuário