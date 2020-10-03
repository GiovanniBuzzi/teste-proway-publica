# Teste-Proway-Publica
> Sistema Web (Front/Api) para controle de pontos em jogos de basquete

[![NPM Version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Downloads Stats][npm-downloads]][npm-url]

O projeto tem uma página de autenticação onde é possível cadastrar usuários, entrando na aplicação usuários comums podem controlar seus pontos em jogos de basquete (quantidade marcada, adversário, partidas com mais pontos, menos pontos etc.) contra times ja cadastrados no sistema além disso é possível acompanhar os usuários com maiores pontuações. Cadastro de times só podem ser feitos por super usuários.

![](../header.png)

## Dependencias usadas no projeto

Api: Express, Sequelize, Sequelize-cli, Mysql2, jsonwebtoken, cors, dotenv-safe e nodemon.

Front: npx create-react-app . Axios, React-Router-Dom

## Necessário para aplicação

Windows (necessários NodeJS, yarn, mysql):

## Configuração do banco de dados

É necessário colocar os dados de acesso ao banco de dados MySQL instalado na sua maquina ou na nuvem.

_Para mais exemplos, consulte a [Wiki][wiki]._ 

## Fazendo as migrations do banco de dados

Após configurar o usuário do banco é ncessário criar o database e as tabelas através dos seguintes comandos:

```sh
yarn sequelize db:create
yarn sequelize db:migration
```

Caso aconteça algum erro no banco, devido a inserção de dados ou algo do genêro, para destruir as migrations execute o seguinte comando

```sh
yarn sequelize db:migration:undo
```
Para cada migration.

## Compilando a aplicação API

Após clonar o projeto e configurar o banco entrar na pasta api e executar o comando:

```sh
yarn dev
```
O comando está pré configurado pelo nodemon para executar o servidor a cada save.
A api ja está funcionando e ouvindo na porta 3334.

Agora que a api está sendo executada, existe uma rota /start para startar o banco de dados com valores default, essa rota pode ser executada pelo navegador ou por outros programas como isomnia ou postman... (é uma requisição get)
Como é uma rota apenas para iniciar o banco execute ela APENAS UMA vez, pois senão causara conflito no banco.

Agora entre na pasta front e execute o comando:

```sh
yarn install
```
Esse comando ficará responsavel por instalar as dependências do projeto.
Então ainda na pasta front basta executar o comando:

```sh
yarn start
```

Lembrando que a aplicação vai rodar na porta 3000 do seu localhost.

## Utilizando a aplicação

### Pagina de login

Para

## Meta

Seu Nome – [@SeuNome](https://twitter.com/...) – SeuEmail@exemplo.com

Distribuído sob a licença XYZ. Veja `LICENSE` para mais informações.

[https://github.com/yourname/github-link](https://github.com/othonalberto/)

## Contributing

1. Faça o _fork_ do projeto (<https://github.com/yourname/yourproject/fork>)
2. Crie uma _branch_ para sua modificação (`git checkout -b feature/fooBar`)
3. Faça o _commit_ (`git commit -am 'Add some fooBar'`)
4. _Push_ (`git push origin feature/fooBar`)
5. Crie um novo _Pull Request_

[npm-image]: https://img.shields.io/npm/v/datadog-metrics.svg?style=flat-square
[npm-url]: https://npmjs.org/package/datadog-metrics
[npm-downloads]: https://img.shields.io/npm/dm/datadog-metrics.svg?style=flat-square
[travis-image]: https://img.shields.io/travis/dbader/node-datadog-metrics/master.svg?style=flat-square
[travis-url]: https://travis-ci.org/dbader/node-datadog-metrics
[wiki]: https://github.com/seunome/seuprojeto/wiki
