# API Contact Me

> ### Projeto criado em setembro de 2022 na escola de programação Kenzie Academy Brasil.
----------
## Autenticação

Essa aplicação utiliza JSON Web Token (JWT) para lidar com a autenticação. O token é passado com cada solicitação usando o cabeçalho `Authorization` com esquema `Token`. O middleware de autenticação JWT trata da validação e autenticação do token. Verifique as seguintes fontes para saber mais sobre o [JWT](https://www.npmjs.com/package/jsonwebtoken).
----------
> ### Deploy https://api-capstone-petfinder.herokuapp.com/
----------

### Todas as rotas do usuário:
    POST /users/login
    POST /users
    GET /users
    GET /users/animals/:id
    PATCH /users/:id
    DELETE /users/:id
### Todas as rotas dos contatos:
    POST /animals
    PATCH /animals/:id
    DELETE /animals/:id
    GET /animals
    GET /animals/lost
    GET /animals/found