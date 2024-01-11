const contacts = require("./contacts");

// index.js
const argv = require("yargs").argv;

// TODO: рефакторити
const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
      const allContacts = await contacts.listContacts();
      return console.log(allContacts);
      break;

    case "get":
      const oneContact = await getContactById(contactId);
      return console.log(oneContact);
      break;

    case "add":
      const newContact = await addContact((name, email, phone));
      return console.log(newContact);
      break;

    case "remove":
      // ... id
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
};

invokeAction(argv);
