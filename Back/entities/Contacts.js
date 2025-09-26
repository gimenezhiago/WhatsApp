class Contact {
    constructor({ id, contactId, name, phone_number, phoneNumber, created_at, createdAt } = {}) {
        this.contactId = contactId || id || null;
        this.name = name || null;
        this.phoneNumber = phoneNumber || phone_number || null;
        this.createdAt = createdAt || created_at || null;
    }
}

module.exports = Contact;
