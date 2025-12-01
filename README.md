# Framework
- Conjunto de recursos e/ou ferramentas utilizado para corrigir algum determinado problema.
--------------------------------------------------------
# Node.js
- Ambiente Run time que roda o javascript (em um terminal ou servidor), btw crossplataform
- ### NPM é Node Package Manager
- ### NPX é Node Package Excuter
# Comandos
- ### npm init
  - ###### Cria o package.json para iniciar um projeto node
- ### npm i nome_pacote 
  - ###### Instala um pacote específico 
- ### npm install ou npm i 
  - ###### Instala todos os pacotes do package.json, respeitando o package-lock.json (limitando e atualizando), assim criando a pasta node_modules
- ### npx nome_pacote 
  - ###### Excuta um pacote
- ### npm run 
  - ###### Roda um script, "npm start" é o unico script que pode omitir o "run" 
- ### Através do script --watch é possível fazer com que o servidor rode reiniciando a cada alteração automáticamente.
--------------------------------------------------------
## Express
- É a ferramenta(framework) sendo utilizada para criar a backend(API)
--------------------------------------------------------
# HTTP - protocolo
- ### Utilizado na hora de interagir o front com o back, determinando as regras das resquisitions e responses utilizados na web, sendo os metodos os seguintes:
- #### Get: 
  - Utilizado para pegar informações do servidor e mandar para o "front", como a aba dos comentários, através do get os dados dos comentários são mandados para a visualização;
- #### Post: 
  - Utilizado para enviar dados novos ao servidor, mandando novas informações para o banco através do front, exemplos são formulários e logins;
- #### Put:
  - Utilizado para atualizar dados já cadastrados no servidor, sendo menos "afunilado", um exemplo é a atualizações no login;
- #### Patch: 
  - Utilizado para atualizar dados já cadastrado, porém "mais afunilado", sendo possível alterar apenas um dado de um registro inteiro, um exemplo é trocar apenas a senha do registro.
# Mudança do formato de importação/exportação de _require_ para _import_
- #### Adicionar no package.json o a propiedade _type_ com o tipo _"module"_.
--------------------------------------------------------
# Nomeação própia de commits para acompanhamento e gerenciamento
- #### Commit0 (_primeiroCommit_)
- #### Alt-_nomeAlteração/Atualização_ (Alterações e/ou Atualizações de dados)
- #### Add-_nomeAdiciodo/Criado_ (Arquivo, documento e/ou pasta criada e/ou adicionada)
--------------------------------------------------------
# Sintaxe básica de uma rota da API
- ### app._metodo_('/_endereçoRota_', (req, res) => { res._tipoResposta_ (_Resposta_)})
- #### Metodo
  - #### Post, Get, Put, Delete e etc.
- #### Endereço/Rota
  - #### Rota do "hosteamento", pode ser raiz (/) ou "algo a mais" (/algosla).
- #### Tipo de Resposta
  - #### Tipo dos dados que serão respondidos, sendo json, texto e coisa assim não sei mais.
- #### Resposta
  - #### A resposta dada com base no Tipo de Resposta.
--------------------------------------------------------
# Componentes
- Através dos componentes é possível criar as partes do layout sem a necessidade de repetir diversas vezes a mesma estrutura como no html, assim sendo possível manusear de fazeer manutenção de forma mais prática e rápida.
--------------------------------------------------------
# Padrão de projeto (Design Pattern)
- Uma forma de codificar e/ou organizar seus projetos que seja amplamente conhecida(mudialmente), sendo assim deixando muito mais fácil trabalhar em projeto diferentes com o mesmo padrão.
- #### MVC (Model View Controller)
  - É um padrão de organizar o código dividindo-o em 3 camadas, dando assim uma responsabilidade para cada uma.
  - #### 1° Camada 
    - Model -> Acesso ao Banco de dados (Cadastrar, Editar, Deletar e etc). Define as regras de negócio.
  - #### 2° Camada
    - View -> Apresentação e/ou interface do usuário, parte importante para o FrontEnd.
  - #### 3° Camada
    - Controller -> Entrada de Dados,Processamento de Dados e Saída de Dados.

# Prisma
- Utilização do ORM.
  - #### ORM (Object Relational Model)
  - Importante para a relação do banco com o projeto, "transformando" as tabelas em objetos dentro do javascript.
  - Facilita a execução dos comando no banco de dados.
  - # Instalação do Prisma
    - #### npm i prisma -D
    - #### npm i @prisma/client
  - # Inicializar o Prisma
    - #### npx prisma init
  - # Gerar o model do prisma a partir de um BD existente
    - #### npx prisma db pull
  - # Gerar o model do banco a partir de um model Prisma existente
    - #### npx prisma db push
  - # Gerar os arquivos necessários para usar o Prisma client no código.
    - #### npx prisma generate
  - # Gerar banco de dados online mais fácil através do prisma
    - #### npx prisma studio
# jsx 
- É a nomeação que se dá para a forma de colocar visualmente em sua página uma interface, ou seja o HTML misturado junto do JS React, usados nos componentes.
# Hooks
- Hooks são funções complementares/auxiliares que trazem funcionalidades de suas bibliotecas.
- Funções do React, sendo elas do core do React, assim sendo possível utiliza-las tanto no React Native quanto no React DOM.
- Todas começam com a palavra "use" e só funcionam depois da inicialização da função/componente e antes do return.

# Middlewares (Padrão de Projeto)
- É um padrão de projeto utilizado no express, organizando o código em funções, onde é executada em sequência(um fluxo de funções), sendo cada Middleware é uma função que ao terminar passa para próxima através do da função next do express, quando alguma função der uma resposta a sequência termina.


-------

- prova 9/12
- autenticacao e login de usuarios
    - como salvar a senha do usuario no BD de forma segura? salvar como hash (bcrypt)
    - autenticaçao (login), oq verificar e fazer no login?
    - JWT (Json Web Token)
- validação de dados (regras de negocio) com ZOD