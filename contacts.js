const contactsOperations = require('./contacts_');

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case 'list':
      const contacts = await contactsOperations.listContacts();
      console.table(contacts);
      break;

    case 'get':
      const contact = await contactsOperations.getContactById(id);
      if (!contact) {
        throw new Error(`Contact with id=${id} not found`);
      }
      console.log(contact);
      break;

    case 'add':
      const newContact = await contactsOperations.addContact(
        name,
        email,
        phone
      );
      console.log(newContact);
      break;

    case 'remove':
      const removeContact = await contactsOperations.removeContact(id);
      if (!removeContact) {
        throw new Error(`Contact with id=${id} not found`);
      }
      console.log(removeContact);
      break;

    case 'update':
      const updateContact = await contactsOperations.updateContact(
        id,
        name,
        email,
        phone
      );
      if (!updateContact) {
        throw new Error(`Contact with id=${id} not found`);
      }
      console.log(updateContact);
      break;

    default:
      console.warn('\x1B[31m Unknown action type!');
  }
};

module.exports = invokeAction;
