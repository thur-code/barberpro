# BarberPro ✂️

**BarberPro** é uma API backend desenvolvida em **Node.js + TypeScript**, voltada para a gestão de barbearias. O projeto simula um **SaaS completo**, com autenticação, controle de usuários, agendamentos, serviços (cortes), assinaturas e métricas de uso.

O foco do projeto é demonstrar **boas práticas de arquitetura**, **organização de código**, **segurança** e **uso moderno do ecossistema Node.js**, sendo ideal como portfólio técnico para recrutadores.

---

## 🚀 Funcionalidades

- ✅ Autenticação de usuários (JWT)
- 👤 Cadastro e gerenciamento de usuários
- ✂️ Gestão de serviços/cortes
- 📅 Sistema de agendamentos
- 💳 Controle de assinatura (modelo SaaS)
- 📊 Contagem e métricas de cortes realizados
- 🔒 Segurança com hash de senha (Argon2)
- 🌐 API RESTful estruturada

---

## 🧠 Arquitetura

O projeto segue uma **arquitetura em camadas**, separando responsabilidades de forma clara:

```
src/
├── controllers/ → Camada HTTP (Express)
├── services/ → Regras de negócio
├── prisma/ → ORM e schema do banco
├── middlewares/ → Autenticação e validações
├── routes/ → Definição das rotas
└── server.ts → Bootstrap da aplicação
```


### Padrões aplicados
- Separation of Concerns (SoC)
- Service Layer
- Código fortemente tipado com TypeScript
- Organização por domínio (users, schedule, haircut, subscription)

---

## 🛠️ Tecnologias Utilizadas

- **Node.js**
- **TypeScript**
- **Express**
- **Prisma ORM**
- **SQLite** (via better-sqlite3)
- **JWT** (biblioteca `jose`)
- **Argon2** (hash de senhas)
- **CORS**
- **TSX** (execução e watch em dev)

---

## 🗄️ Banco de Dados

- ORM: **Prisma**
- Banco: **SQLite**
- Schema localizado em:

```
prisma/schema.prisma
```


O Prisma Client é gerado automaticamente e utilizado nos services para garantir segurança de tipos e produtividade.

---

## ⚙️ Configuração do Ambiente

### Pré-requisitos
- Node.js (v18+ recomendado)
- npm ou yarn

### Instalação

```bash
npm install
```

### Variáveis de Ambiente

Crie um arquivo .env na raiz do projeto com as seguintes variáveis (exemplo):

```
DATABASE_URL="file:./dev.db"
JWT_SECRET="sua_chave_secreta"
```

### ▶️ Executando o Projeto

Modo desenvolvimento (watch):

```bash
npm run start
```

A API será iniciada em ambiente de desenvolvimento com hot reload.

### 📌 Exemplos de Domínios Implementados

* Users
* Criação
* Autenticação
* Atualização
* Detalhamento
* Schedule
* Novo agendamento
* Listagem
* Finalização
* Haircut
* Criação
* Atualização
* Listagem
* Contagem
* Subscription
* Verificação de status
* Controle de acesso por plano

🔐 Segurança

* Senhas armazenadas com Argon2
* Autenticação baseada em JWT
* Middleware de proteção de rotas
* Separação clara entre dados sensíveis e públicos
