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