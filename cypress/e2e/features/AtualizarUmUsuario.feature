# language: pt

Funcionalidade: Atualizar um usuário

Cenário: o usuário deve ser localizado através do id

Cenário: conseguir atualizar usuário com sucesso
  Dado que acessei a funcionalidade de atualizar usuario
  E escolho um usuário para editar
  Quando informar um novo nome
  E informar um novo e-mail
  E confirmar operação
  Então o usuário deverá ser atualizado

# Cenário: conseguir atualizar um usuário válido com 100 caracteres no nome
#   Dado que acessei a funcionalidade de atualizar usuario
#   Quando informar um novo nome com 100 caracteres
#   E informar um novo e-mail
#   E confirmar operação
#   Então o usuário deverá ser atualizado

# Cenário: conseguir atualizar um usuário válido com 60 caracteres no e-mail
#   Dado que acessei a funcionalidade de atualizar usuario
#   Quando informar um novo nome
#   E informar um novo e-mail com 60 caracteres
#   E confirmar operação
#   Então o usuário deverá ser atualizado

# ##### BAD REQUEST #############

# Cenário: não deve ser possível atualizar um usuário com mais de 100 caracteres no nome
#   Dado que acessei a funcionalidade de atualizar usuario
#   Quando informar um novo nome com mais de 100 caracteres
#   E informar um novo e-mail
#   E confirmar operação
#   Então  não deve ser possível atualizar o usuário

# # // não deve ser possível cadastrar um usuário com mais de 60 caracteres no email ////
# Cenário: não deve ser possível cadastrar um usuário com mais de 60 caracteres no email 
#   Dado que acessei a funcionalidade de atualizar usuario
#   Quando informar um novo nome
#   E informar um novo e-mail com mais de 60 caracteres
#   E confirmar operação
#   Então  não deve ser possível atualizar o usuário

# # // não deve ser possível cadastrar um usuário sem preencher o campo de email////
# Cenário: não deve ser possível cadastrar um usuário sem preencher o campo de email
#   Dado que acessei a funcionalidade de atualizar usuario
#   Quando informar um novo nome
#   E confirmar operação
#   Então  não deve ser possível atualizar o usuário

# # // não deve ser possível cadastrar um usuário sem preencher o campo de nome ////
# Cenário: não deve ser possível cadastrar um usuário sem preencher o campo de nome 
#   Dado que acessei a funcionalidade de atualizar usuario
#   Quando informar um novo e-mail
#   E confirmar operação
#   Então  não deve ser possível atualizar o usuário

# # // não deve ser possível cadastrar um usuário ao preencher o campo de email de formato inválido////
# Cenário: não deve ser possível cadastrar um usuário ao preencher o campo de email de formato inválido
#   Dado que acessei a funcionalidade de atualizar usuario
#   Quando informar um novo nome
#   E informar um novo e-mail de formato inválido
#   E confirmar operação
#   Então  não deve ser possível atualizar o usuário

# # // não deve ser possível cadastrar um usuário com o email já em uso ////
# Cenário: não deve ser possível cadastrar um usuário com o email já em uso
#   Dado que acessei a funcionalidade de cadastro
#   Quando informar um novo nome
#   E informar um novo e-mail já em uso
#   E confirmar operação
#   Então  não deve ser possível cadastrar o usuário

