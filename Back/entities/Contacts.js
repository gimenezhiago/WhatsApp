class Contact {
    constructor({ id, contactId, name, phone_number, phoneNumber, created_at, createdAt } = {}) {
        this.ContactId = contactId || id || null;
        this.Name = name || null;
        this.PhoneNumber = (phoneNumber || phone_number || null);
        this.CreatedAt = createdAt || created_at || null;
    }
}

module.exports = Contact;
