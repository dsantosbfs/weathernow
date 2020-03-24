# WeatherNow

Este projeto foi gerado com [Angular CLI](https://github.com/angular/angular-cli) version 8.1.2.
Neste projeto você encontrará o aplicativo de tempo no diretório /src/app
e a lib de componentes no diretório /projects/weather-lib

## Scripts

  build:dev: Build da aplicação para ambiente de desenvolvimento
  build:lib: Build da lib de componentes
  build:prod: Build da aplicação para ambiente de produção
  build:storybook: Build do Storybook
  e2e: Testes de integração (Não implementados)
  lint: Validação de linters na aplicação e na lib de componentes
  lint:fix: Corrige automaticamente alguns problemas de lint
  lint:sass: Validação de lint para Scss
  ng: Alias para o comando ng do Angular Cli
  pack:lib: Cria o package da lib de componentes
  start: Inicia o servidor local
  storybook: Inicia o storybook
  test: Roda a suite de testes unitários da aplicação e da lib de componentes
  test:app: Roda a suite de testes unitários para a aplicação
  test:lib: Roda a suite de teste unitários para a lib de componentes
  update:lib: Atualiza o pacote da lib de componentes na aplicação

## Pré requisitos

Você precisa ter os seguintes itens instalados em sua maquina para rodar este projeto

  Angular Cli: https://cli.angular.io/
  npm: https://www.npmjs.com/

## Configurando a API do Open Weather

Será necessário incluir a api key do Open Weather https://openweathermap.org/api nos environments da aplicação, para isso edite os arquivos no diretório /src/environments/environment.prod.ts e /src/environments/environment.ts adicionando a sua api key como demonstrado na linha abaixo:

    export const environment = {
      apiUrl: 'https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5',
      clientId: 'YOUR_OPEN_WEATHER_API_KEY,
      production: false,
    };

## Instalando dependências

Acesse a raiz do projeto e rode o comando `npm i`, após o termino da instalação rode o comando `npm run update:lib`.
Assim que os comandos acima forem devidamente implementados basta rodar o comando `npm run start` e acessar a url http://localhost:4200 para visualizar a aplicação

## Cache da aplicação

Para testar o cache da aplicação será necessário rodar o build de produção com o comando `npm run build:prod` acessar o diretório /dist/weathernow. Dentro desse diretório rodar o comando `npx https-server`.
Como o cache foi implementado via service worker, é necessário acessar a aplicação por https para que o SW seja iniciado e configurado no browser.

## Ajuda

Qualquer dúvida estou a disposição para auxiliar nas etapas de configuração de build do projeto. dsantosbfs@gmail.com
