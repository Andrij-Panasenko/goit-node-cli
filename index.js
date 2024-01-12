const { program } = require("commander");
const contacts = require("./contacts.js");

program
  .option("-a, --action <type>, chose action")
  .option("-i, --id <type>, enter user id")
  .option("-n, --name <type>, enter user name")
  .option("-p --phone <type>, enter user phone")
  .option("-e, --email <type>, enter user email");

program.parse();

const options = program.opts();

// // TODO: рефакторити
const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
      const allContacts = await contacts.listContact();
      console.log("🚀 ~ invokeAction ~ allContacts:", allContacts)
      break;

    case "get":
      const requestedContact = await contacts.getContactById(id);
      console.log("🚀 ~ invokeAction ~ requestedContact:", requestedContact)
      break;

    case "add":
      const addedContact = await contacts.addContact({ name, email, phone });
      console.log("🚀 ~ invokeAction ~ addedContact:", addedContact)
      break;

    case "remove":
      const removerContact = await contacts.removeContact(id);
      console.log("🚀 ~ invokeAction ~ removerContact:", removerContact)
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
};

invokeAction(options);
