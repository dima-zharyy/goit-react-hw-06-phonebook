export const isContactInList = (contacts, data) => {
  return contacts.some(
    ({ name }) => name.toLocaleLowerCase() === data.name.toLocaleLowerCase()
  );
};
