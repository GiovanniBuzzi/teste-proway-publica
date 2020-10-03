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

NodeJS, yarn, Banco de dados MySQL

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

Opções para cadastro de usuários e logar na aplicação (O usuário maria (Login: maria, Password:maria) foi definido como root ganhando o privilégio de adicionar times ao banco)

### Main

Pagina main da aplicação que funciona como um menu.

### Header

Opção de logout e botão para voltar para pagina main da aplicação

### Games

O usuário pode acompanhar e adicionar novos jogos (validação para times existentes e não pode adicionar jogos contra o seu própio time)

### Records

Acompanhamento das suas estatisticas em relação a pontuação, e apresentação dos 5 jogos mais e menos pontuados mostrando os adversarios.

### Genreal Records

Acompanhamento dos recordes globais, mostrando apenas as melhores pontuações entre todos os usuários (apenas UM jogo por usuário)

### Teams

Pagina para acompanhar os times existentes, opção para adicionar times que aparece SOMENTE para super usuario (no caso a maria)

## Observações

Todo o sistema de sessão do front é controlado utilizando sessionStorage e localStorage, então usuários "maliciosos" podem acabar acessando paginas não devidas, porém todas requisições na api são autenticadas com token JWT, nesse caso mesmo mechendo no local/session storage o usuário acessa a página mas não há carregamento do back-end.

## Meta

Giovanni Bruno Buzzi – buzzi.giovanni@outlook.com

[https://github.com/GiovanniBuzzi/teste-proway-publica](https://github.com/GiovanniBuzzi)
