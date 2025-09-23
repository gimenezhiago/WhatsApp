import ContactsDAO from '../model/dao/Contacts.dao.js';

const dao = new ContactsDAO();

export async function findAll(req, res) {
    try {
        const contacts = await dao.findAllContacts();
        return res.status(200).json(contacts);
    } catch (error) {
        console.error('Erro ao retornar contacts:', error);
        return res.status(500).json({ error: 'Erro ao retornar contacts' });
    }
}

export async function addContact(req, res) {
    try {
        const payload = req.body;

        if (!payload || Object.keys(payload).length === 0) {
        return res.status(400).json({ error: 'Body inválido.' });
        }

        const created = await dao.createContact(payload);
        console.log('Salvando contato:', payload, '=> created:', created);
        return res.status(201).json(created);
    } catch (error) {
        console.error('Erro ao criar contact:', error);
        const status = error?.status || 500;
        return res.status(status).json({ error: error?.message || 'Erro ao criar contact.' });
    }
}

export async function updateContact(req, res) {
    try {
        const { id } = req.params;
        if (!id) return res.status(400).json({ error: 'Parâmetro id é obrigatório.' });

        const rawBody = req.body ?? {};
        const forbidden = new Set(['id', 'created_at', 'createdAt']);

        const updates = {};
        Object.keys(rawBody).forEach((key) => {
        if (forbidden.has(key)) return;
        const val = rawBody[key];
        if (typeof val !== 'undefined') updates[key] = val;
        });

        if (Object.keys(updates).length === 0) {
        return res.status(400).json({ error: 'Nenhum campo válido para atualizar foi enviado.' });
        }

        const updated = await dao.updateContact(id, updates);

        if (!updated) {
        return res.status(404).json({ message: 'Contact não encontrado (ou nenhuma alteração aplicada).' });
        }

        return res.status(200).json({ message: 'Contact atualizado com sucesso.', updated });
    } catch (error) {
        console.error('updateContact error:', error);
        const status = error?.status || 500;
        return res.status(status).json({ error: error?.message || 'Erro ao atualizar contact.' });
    }
}

export async function deleteContact(req, res) {
    try {
        const { id } = req.params;
        if (!id) return res.status(400).json({ error: 'Parâmetro id é obrigatório.' });

        const deleted = await dao.deleteContact(id);
        const empty = !deleted || (Array.isArray(deleted) && deleted.length === 0);
        if (empty) return res.status(404).json({ message: 'Contact não encontrado.' });

        return res.status(200).json({ message: 'Contact deletado com sucesso.', deleted });
    } catch (error) {
        console.error('deleteContact error:', error);
        const status = error?.status || 500;
        return res.status(status).json({ error: error?.message || 'Erro ao deletar contact.' });
    }
}