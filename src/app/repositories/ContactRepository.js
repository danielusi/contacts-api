const { uui, uuid } = require('uuidv4');

let contacts = [
  {
    id: uuid(),
    name: 'Daniel',
    email: 'daniel@mail.com',
    phone: '312302031',
    category_id: uuid(),
  },
];

class ContactReporsitory {
  findAll() {
    return new Promise((resolve) => resolve(contacts));
  }

  findById(id) {
    return new Promise((resolve) => resolve(
      contacts.find((contact) => contact.id === id),
    ));
  }

  findByEmail(email) {
    return new Promise((resolve) => resolve(
      contacts.find((contact) => contact.email === email),
    ));
  }

  delete(id) {
    return new Promise((resolve) => {
      contacts = contacts.filter((contact) => contact.id !== id);
      resolve();
    });
  }

  create({ name, email, phone, category_id }) {
    return new Promise((resolve) => {
      const newContact = {
        id: uuid(),
        name,
        email,
        phone,
        category_id
      };
      contacts.push(newContact);
      resolve(newContact);
    });
  }

  update(id, { name, email, phone, category_id }) {
    return new Promise((resolve) => {
      const updatedContact = {
        id: uuid(),
        name,
        email,
        phone,
        category_id
      };
      contacts = contacts.map((contact) => {
        contact.id === id ? updatedContact : contact
      });

      resolve(updatedContact)
    });
  }
};

module.exports = new ContactReporsitory();
