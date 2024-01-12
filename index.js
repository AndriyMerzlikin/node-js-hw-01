const contacts = require("./contacts");
const { program } = require("commander");

// index.js
// const yargs = require("yargs");
// const { hideBin } = require("yargs/helpers");
// TODO: рефакторити
const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
      const allContacts = await contacts.listContacts();
      return console.log(allContacts);
      break;

    case "get":
      const oneContact = await getContactById(id);
      return console.log(oneContact);
      break;

    case "add":
      const newContact = await addContact(name, email, phone);
      return console.log(newContact);
      break;

    case "remove":
      const deleteContact = await removeContact(id);
      return console.log(deleteContact);
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
};

program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

program.parse();
const options = program.opts();
invokeAction(options);

// const arr = hideBin(process.argv);
// const { argv } = yargs(arr);
// invokeAction(argv);
