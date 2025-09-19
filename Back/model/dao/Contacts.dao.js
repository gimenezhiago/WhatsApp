import supabase from "../../bd.js";

export default class ContactsDAO {  
    constructor() {
        this.table = 'contacts';
    }

    async findAllContacts() {
        const { data, error } = await supabase
        .from(this.table)
        .select('*')

        if (error) throw error
        return data
    }

    async findContactByName(name) {
        const { data, error } = await supabase
        .from(this.table)
        .select('*')
        .eq('name', name)
        .single()

        if (error) throw error
        return data
    }
    async createContact(contact) {
        const { data, error } = await supabase
        .from(this.table)
        .insert(contact)
        .select()
        .single()

        if (error) throw error
        return data
    }
    async deleteContact(id) {
        const { data, error } = await supabase
        .from(this.table)
        .delete()
        .eq('id', id)
        .select()
        .single()

        if (error) throw error
        return data
    }

    async updateContact(id, contact) {
        const { data, error } = await supabase
        .from(this.table)
        .update(contact)
        .eq('id', id)
        .select()
        .single()

        if (error) throw error
        return data
    }
}