<p align = "center">
  <img src="https://raw.githubusercontent.com/fga-eps-mds/2020-1-Ziguen/develop/docs/imagens/logo.png"/>
</p>

[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)
[![Percentage of issues still open](http://isitmaintained.com/badge/open/fga-eps-mds/2020-1-Ziguen.svg)](http://isitmaintained.com/project/fga-eps-mds/2020-1-Ziguen "Percentage of issues still open")

## Padrão de contribuição
* Configuração do ambiente de desenvolvimento

* [Template criação de issues](https://github.com/fga-eps-mds/2020-1-Ziguen/tree/master/.github/issue_template)

* [Template criação de commit](https://github.com/fga-eps-mds/2020-1-Ziguen/blob/master/.github/commit_template/commit_policy.md)

* [Template criação de pull request](https://github.com/fga-eps-mds/2020-1-Ziguen/blob/master/.github/pull_request_template/pull_request_template.md)

## Como rodar o ziguen na minha maquina? 🤔🤔

## Configuração do ambiente de desenvolvimento


 1- [**Instalação do Docker e Docker-compose**](https://github.com/francisco1code/docs/blob/master/Docker-e-Docker-compose.md)

Verifique sua versão
  
    docker -v && docker-compose -v

2- Faça o clone do projeto

       git clone https://github.com/fga-eps-mds/2020-1-Ziguen.git
       
3- Crie uma conexao local do docker na sua máquina para que o docker do front e backend possam se comunicar.

        docker network create network-api

## Comandos

  1- Construir o container
        
     make build
  2- Subir o container

    make up

  3- Derrubar container
      
    make down
    
  4- Limpar volumes do docker-compose
  
    make down-volumes


## Sobre o ziguen
[Documentação](https://fga-eps-mds.github.io/2020-1-Ziguen/)

[Front-end](https://github.com/fga-eps-mds/2020.1-Ziguen-Front)

## Referências
 * [**Documentação Docker**](https://docs.docker.com/get-docker/)

 * [**Documentação Docker-compose**](https://docs.docker.com/compose/)
