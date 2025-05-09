
# 🧑‍💻 Projeto Lista de Usuários (Frontend + API Node.js)

Este projeto é uma aplicação simples de cadastro de usuários, com frontend em HTML/CSS/JavaScript puro e backend usando Node.js com o framework Express. A aplicação permite listar, adicionar e excluir usuários dinamicamente, armazenando-os temporariamente em memória (sem banco de dados).

---

## 🚀 Funcionalidades

- Listagem de usuários
- Cadastro de novo usuário via formulário
- Exclusão de usuários da lista
- Interface simples e responsiva
- Backend em Node.js servindo API REST e arquivos estáticos

---

## 🗂 Estrutura do Projeto

```
/public
  ├── index.html         # Página HTML principal
  ├── style.css          # Estilos da aplicação
  └── script.js          # Lógica do frontend (JS)
server.js                # Servidor Express (Node.js)
README.md                # Este arquivo
```

---

## 🛠️ Tecnologias Utilizadas

### Frontend:
- HTML5
- CSS3
- JavaScript Vanilla (puro)

### Backend:
- Node.js
- Express.js

---

## 📦 Como Executar o Projeto

### 1. Clonar o repositório
```bash
git clone https://github.com/seu-usuario/nome-do-repo.git
cd nome-do-repo
```

### 2. Instalar dependências
```bash
npm install
```

> O projeto não possui dependências externas além do Express.

### 3. Iniciar o servidor
```bash
node server.js
```

Ou, se estiver usando `nodemon` para desenvolvimento:
```bash
npx nodemon server.js
```

### 4. Acessar no navegador
Abra [http://localhost:3000](http://localhost:3000)

---

## 🔌 Endpoints da API

| Método | Rota            | Descrição                         |
|--------|------------------|-----------------------------------|
| GET    | `/usuarios`      | Retorna a lista de usuários       |
| POST   | `/usuarios`      | Adiciona um novo usuário          |
| DELETE | `/usuarios/:id`  | Remove um usuário pelo ID         |

---

## 📋 Exemplo de Corpo da Requisição (POST)

```json
{
  "nome": "Fulano"
}
```

---

## ⚠️ Observações

- A aplicação **não** persiste dados: ao reiniciar o servidor, os usuários cadastrados são perdidos.
- O ID do usuário é gerado com base no `Date.now()`.
- Os arquivos do frontend devem estar na pasta `public/`.

---

## 🎯 Melhorias Futuras (Sugestões)

- Integração com banco de dados (MongoDB, PostgreSQL, etc)
- Validação mais robusta de inputs
- Feedback visual (notificações de sucesso/erro)
- Separar rotas em arquivos próprios com Express Router
- Autenticação e autorização de usuários

---

## 👨‍💻 Autor

Feito por Juliana Sabioni – focando em aprimoramento de habilidades em frontend e backend com Node.js.
