import { supabase } from "../../bd.js";

export default class ContactsDAO {
    constructor() {
        this.table = 'contatos';
    }

    async findAllContacts() {
        const { data, error } = await supabase
        .from(this.table)
        .select('*');

        if (error) throw error;
        return data;
    }

    // Para possivel melhoria futura. Não usado no momento. Mas, serve para pesquisar contatos por nome.
    async findContactByName(name) {
        const { data, error } = await supabase
        .from(this.table)
        .select('*')
        .eq('name', name)
        .single();

        if (error) throw error;
        return data;
    }

    // espera um objeto com as chaves que existem na tabela: { name, phone_number }
    async createContact(contact) {
        const { data, error } = await supabase
        .from(this.table)
        .insert(contact)
        .select()
        .single();

        console.log(data);
        if (error) throw error;
        return data;
    }

    async deleteContact(id) {
        const { data, error } = await supabase
        .from(this.table)
        .delete()
        .eq('id', id)
        .select()
        .single();

        if (error) throw error;
        return data;
    }

    async updateContact(id, contact) {
        const { data, error } = await supabase
        .from(this.table)
        .update(contact)
        .eq('id', id)
        .select()
        .single();

        if (error) throw error;
        return data;
    }
}
