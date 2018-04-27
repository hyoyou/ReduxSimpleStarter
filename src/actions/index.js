export function selectBook(book) {
  //console.log('A book has been selected:', book.title);
  /*
  selectBook is an ActionCreator, it needs to return an action
  (an object with a type property) Actions usually have 2 values, a type and a payload.
  Type describes the purpose of the action. Always UPPERCASE, usually string -- or a variable.
  Payload further describes, clarifies, the conditions of the actions being triggered. Optional.
  */
  return {
    type: 'BOOK_SELECTED',
    payload: book
  }
}
