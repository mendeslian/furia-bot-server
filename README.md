# Furia Bot Server

## 📌 Sobre o Projeto

O **Furia Bot Server** é o backend que alimenta a aplicação web interativa Furia Bot, permitindo aos fãs da FURIA Esports conversar com um bot inteligente sobre CS2, estratégias, mapas e informações sobre o time. Este servidor foi desenvolvido para processar as consultas dos usuários e fornecer respostas rápidas e precisas sobre o universo da FURIA e do Counter-Strike.

## 🚀 Funcionalidades

- 🤖 **Processamento de Linguagem Natural**: Interpreta e responde às perguntas dos usuários
- 🔄 **API RESTful**: Endpoints para comunicação com o frontend
- 🛡️ **Segurança**: Implementação de rate limiting e autenticação
- 📊 **Logging**: Registro de interações para melhorias contínuas
- ⚡ **Performance**: Otimizado para respostas rápidas mesmo com alto tráfego

## 🛠️ Tecnologias Utilizadas

- Node.js
- Express.js
- CORS
- Rate Limiter
- Middleware de tratamento de erros

## ⚙️ Pré-requisitos

- Node.js (versão 14 ou superior)
- NPM ou Yarn

## 📦 Instalação

1. **Clone o repositório:**

```bash
git clone https://github.com/mendeslian/furia-bot-server.git
cd furia-bot-server
```

2. **Instale as dependências:**

```bash
npm install
# ou
yarn install
```

3. **Configure as variáveis de ambiente:**  
   Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:

```bash
PORT=3001
GEMINI_API_KEY=1234567890
# Adicione outras variáveis necessárias
```

4. **Inicie o servidor:**

```bash
npm start
# ou
yarn start
```

> O servidor estará disponível em `http://localhost:3001`

5. **Para ambiente de desenvolvimento:**

```bash
npm run dev
# ou
yarn dev
```

## 📁 Estrutura do Projeto

```
furia-bot-server/
├── src/
│   ├── controllers/    # Controladores da aplicação
│   ├── middlewares/    # Middlewares personalizados
│   │   ├── errorHandler.js
│   │   └── rateLimiter.js
│   ├── routes/         # Definição de rotas
│   │   └── routes.js
│   ├── utils/          # Utilitários
│   └── app.js          # Configuração do Express
├── .env
├── .gitignore
├── package.json
└── README.md
```

## 🔌 Endpoints da API

- `POST /chat/send`: Envia uma mensagem para o bot e recebe uma resposta

## 🔒 Segurança

O servidor implementa:

- Rate limiting para prevenir abusos
- Validação de entrada para evitar injeções
- CORS configurado para permitir apenas origens confiáveis
- Tratamento de erros centralizado

## 🤝 Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature:

```bash
git checkout -b feature/nova-feature
```

3. Faça commit das suas alterações:

```bash
git commit -m 'Adiciona nova feature'
```

4. Faça push para a branch:

```bash
git push origin feature/nova-feature
```

5. Abra um pull request

## 📄 Licença

Este projeto está licenciado sob a Licença MIT - consulte o arquivo `LICENSE.md` para mais detalhes.

## 📬 Contato

Lian Mendes – nailptm@gmail.com

<!-- Link do Projeto: [https://github.com/seu-usuario/furia-bot-web-app](https://github.com/seu-usuario/furia-bot-web-app) -->
