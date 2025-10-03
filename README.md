# WhatsHub

**WhatsHub** é uma aplicação web que facilita o início de conversas no WhatsApp. Com ela, você pode gerar links personalizados para abrir conversas diretamente com qualquer número de telefone, incluindo uma mensagem opcional. Além disso, oferece uma agenda para salvar, editar, excluir e enviar mensagens para seus contatos, integrando-se ao gerador de links.

## Link da aplicação

- [Acesse aqui](LINK)
- Hospedada em: **SERVIÇO**

## Funcionalidades

- **Gerador de links para WhatsApp:** Crie links instantâneos para iniciar conversas com qualquer número.
- **Mensagem personalizada:** Adicione uma mensagem opcional ao link.
- **Agenda de contatos:** Salve, edite, exclua e envie mensagens para seus contatos.
- **Integração com Supabase:** Os contatos são armazenados de forma segura no Supabase.
- **Gerador de QR Code:** Gere um QR Code para compartilhar o link do WhatsApp facilmente.

## Tecnologias utilizadas

- [React JS](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [lucide-react](https://lucide.dev/)
- [styled-components](https://styled-components.com/)
- [supabase-js](https://supabase.com/)
- [Express](https://expressjs.com/)
- [cors](https://www.npmjs.com/package/cors)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [react-qr-code](https://github.com/rosskhanas/react-qr-code)

## Como executar localmente

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/seu-usuario/seu-repositorio.git
   ```

2. **Instale as dependências do backend:**
   ```bash
   cd WhatsApp/Back
   npm install
   ```

3. **Instale as dependências do frontend:**
   ```bash
   cd ../Front
   npm install
   ```

4. **Configure as variáveis de ambiente:**
   - Copie o arquivo `.env.example` para `.env` na pasta `Back` e preencha com suas informações.

5. **Inicie o servidor backend:**
   ```bash
   cd ../Back
   node server.js
   # ou, se preferir usar o nodemon para recarregar automaticamente:
   # npx nodemon server.js
   ```

6. **Inicie o frontend:**
   ```bash
   cd ../Front
   npm run dev
   ```

7. **Acesse a aplicação:**
   - Abra [http://localhost:5173](http://localhost:5173) no seu navegador (ou a porta configurada).


