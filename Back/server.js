import express from "express";
import * as controllerContacts from "./controller/contacts.controller.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

//Busca por contatos
app.get("/contacts", controllerContacts.getContacs);

//Pesquisa por nome
app.get("/contacts/:name", controllerContacts.getContactByName);

//Cria novo contato
app.post("/contacts/create", controllerContacts.createContact);

//Deleta contato
app.delete("/contacts/:id", controllerContacts.deleteContact);

//Atualiza contato
app.put("/contacts/:id", controllerContacts.updateContact);

app.get("/", (req, res) => {
    res.send("🚀 Servidor rodando com Express + Nodemon!");
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
