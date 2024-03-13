# Phonebook Application

This is a simple React application for managing contacts in a phonebook.

## Features

- Add new contacts with a name and phone number.
- Display a list of contacts.
- Filter contacts by name.
- Responsive design for various screen sizes.

## Components

- **App**: The root component managing the state of contacts and filter.
- **ContactForm**: Component for adding new contacts.
- **ContactList**: Component for displaying the list of contacts.
- **Filter**: Component for filtering contacts by name.

## Technologies Used

- React
- Redux Toolkit
- React Redux
- Redux Persist
- CSS Modules

### Phonebook Contact Storage

In this updated version, the phonebook application now utilizes Redux Toolkit
along with Redux Persist for storing contacts in local storage.

- Redux Toolkit is used for managing the Redux state.
- Redux Persist is used to save an array of contacts to local storage.

The Redux state is structured as follows:

```javascript
{
  contacts: [],
  filter: ""
}
```

Redux Toolkit's `configureStore()` is used to create the Redux store. The state
is managed using `createSlice()` to define reducers for saving and deleting a
contact, as well as updating the filter.

React components are connected to the Redux logic using hooks provided by the
`react-redux` library.

Lifecycle methods in React are utilized for automatically saving contacts to
local storage when a contact is added or deleted. Upon loading the app,
contacts, if any, are retrieved from local storage and stored in the application
state.

Feel free to explore the code and use it as a reference for your own projects!
