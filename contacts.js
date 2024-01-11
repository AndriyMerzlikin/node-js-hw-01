const fs = require("fs/promises");
const path = require("path");
const nanoId = require("nanoid");

// contacts.js

/*
 * Розкоментуй і запиши значення
 * const contactsPath = ;
 */

const contactsPath = path.join(__dirname, "contacts.json");
// TODO: задокументувати кожну функцію
const listContacts = async () => {
  const data = await fs.readFile(contactsPath);
  return JSON.parse(data);
  // ...твій код. Повертає масив контактів.
};

const getContactById = async (contactId) => {
  const contacts = await listContacts();
  const result = contacts.find((item) => item.id === contactId);
  return result || null;
  // ...твій код. Повертає об'єкт контакту з таким id. Повертає null, якщо контакт з таким id не знайдений.
};

function removeContact(contactId) {
  // ...твій код. Повертає об'єкт видаленого контакту. Повертає null, якщо контакт з таким id не знайдений.
}

const addContact = async (name, email, phone) => {
  const contacts = await listContacts();
  const newContact = {
    id,
    name,
    email,
    phone,
  };
  contacts.push(newContact);
  await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
  return newContact;
  // ...твій код. Повертає об'єкт доданого контакту.
};

module.exports = { listContacts, getContactById, addContact };
