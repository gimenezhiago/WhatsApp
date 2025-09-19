import ContactsDAO from "../model/dao/Contacts.dao";

const contactsDao = new ContactsDAO();

export async function getContacs(req, res){
    try {
        const Contacts = await contactsDao.findAllContacts()
        res.json(Contacts)
    } catch (error) {
        console.error('Erro ao buscar contatos:', err)
        res.status(500).json({ erro: 'Erro ao buscar contatos' })
    }
}

export async function getContactByName(req, res){
    try {
        const Contacts = await contactsDao.findContactByName(req.params.name)
        res.json(Contacts)
    } catch (error) {
        console.error('Erro ao buscar Contatos:', err)
        res.status(500).json({ erro: 'Erro ao buscar Contatos' })
    }
}

export async function createContact(req, res){
    try {
        const newContact = await contactsDao.createContact(req.body)
        res.status(201).json(newContact)
    } catch (error) {
        console.error('Erro ao criar Contato:', err)
        res.status(500).json({ erro: 'Erro ao criar Contato' })
    }
}
export async function deleteContact(req, res){
    try {
        const deletedContact = await contactsDao.deleteContact(req.params.id)
        res.json(deletedContact)
    } catch (error) {
        console.error('Erro ao deletar Contato:', err)
        res.status(500).json({ erro: 'Erro ao deletar Contato' })
    }
}
export async function updateContact(req, res){
    try {
        const updatedContact = await contactsDao.updateContact(req.params.id, req.body)
        res.json(updatedContact)
    } catch (error) {
        console.error('Erro ao atualizar Contato:', err)
        res.status(500).json({ erro: 'Erro ao atualizar Contato' })
    }
}