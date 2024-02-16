
<!-- GETTING STARTED -->
## :rocket: Iniciando

Guia prático de como rodar o projeto localmente.

### Pré-requisitos

É necessário ter instalado no seu computador o [NodeJS](https://nodejs.org/en/) e também um banco de dados para fazer a conexão com a API. 
As configurações de conexão com o banco de dados podem ser alteradas facilmente no arquivo chamado "ormconfig.json" e também no arquivo "index.ts" do diretório "/shared/typeorm/index.ts". 
É importante ressaltar que nesse projeto foi utilizado o banco de dados [Postgresql](https://www.postgresql.org/).

### Instalação e Inicialização

1. Clone o repositório
   ```sh
   git clone https://github.com/lubpolita/taskManager.git
   ```
2. Entre no diretório principal 
   ```sh
   cd taskManager
   ```
3. Entre no diretório do backend 
   ```sh
   cd backend
   ```
4. Crie o banco de dados
   ```sh
   docker run --name postgres -e POSTGRES_PASSWORD=12345 -p 5432:5432 -d postgres
   ```
5. Instale as dependências
   ```sh
   npm install
   ```
6. Inicie a API
   ```sh
   npm run dev
   ```
