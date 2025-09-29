import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import * as contactsController from './controller/contacts.controller.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.get('/API', (req, res) => res.json({ mensagem: 'API funcionando' }));

app.get('/contacts/all', contactsController.findAll);
app.post('/contacts/add', contactsController.addContact);
app.delete('/contacts/delete/:id', contactsController.deleteContact);
app.put('/contacts/update/:id', contactsController.updateContact);


app.listen(PORT, () => {
    console.log(`Servidor (contacts) rodando em http://localhost:${PORT}`);
});
