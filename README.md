# API Contact Me

> ### Projeto criado em setembro de 2022 na escola de programação Kenzie Academy Brasil.
----------
## Autenticação:
> ### Essa aplicação utiliza JSON Web Token (JWT) para lidar com a autenticação. O token é passado com cada solicitação usando o cabeçalho `Authorization` com esquema `Token`. O middleware de autenticação JWT trata da validação e autenticação do token. Verifique as seguintes fontes para saber mais sobre o [JWT](https://www.npmjs.com/package/jsonwebtoken).

---------

## Intenção do projeto:
---------
> ### A ideia do projeto é criar um site onde o usuário pode realizar todo o CRUD dos seus contatos pessoais, assim tendo um backup em um lugar de fácil acesso para caso perca os seus contatos.
----------

### Todas as rotas do usuário:
    POST /users/login
    POST /users
    GET /users/:id
    PATCH /users/:id
    DELETE /users/:id
### Todas as rotas dos contatos:
    POST /contacts
    PATCH /contacts/:contact_id
    DELETE /contacts/:contact_id
    GET /contacts/:contact_id
    GET /contacts/user
----------
> ### Deploy https://contact-me-ap.herokuapp.com/
----------
