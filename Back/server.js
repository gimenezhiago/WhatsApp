<<<<<<< Updated upstream
import express from "express";
import * as controllerContacts from "./controller/contacts.controller.js";
=======
// server.contacts.js
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import * as contactsController from './controller/contacts.controller.js';

dotenv.config();
>>>>>>> Stashed changes

const app = express();
app.use(cors());
app.use(express.json());

<<<<<<< Updated upstream
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
=======
const PORT = process.env.PORT || 3000;

app.get('/API', (req, res) => res.json({ mensagem: 'API funcionando' }));

app.get('/contacts/all', contactsController.findAll);
app.post('/contacts/add', contactsController.addContact);
app.put('/contacts/delete/:id', contactsController.deleteContact);
app.put('/contacts/update/:id', contactsController.updateContact);
>>>>>>> Stashed changes

app.listen(PORT, () => {
    console.log(`Servidor (contacts) rodando em http://localhost:${PORT}`);
});
