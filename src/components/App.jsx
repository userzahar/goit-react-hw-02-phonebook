import { Component } from "react";
import { Contacts } from "./Contacts/Contacts";
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [],
    name: ''
  }
  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: { value, id: nanoid() } })
  }
  handleSubmit = e => {
    e.preventDefault();
    this.setState(prevState => ({
      contacts: [this.state.name, ...prevState.contacts]
    }))
    this.setState({ name: '' })
  }
  renderNameList = () => {
    return this.state.contacts.map(con => {
      console.log("mm", con)
      return <li key={con.id}>{con.value}</li>
    })
  }

  render() {
    return <> <form onSubmit={this.handleSubmit}>
      <h1>Phonebook</h1>
      <label>
        Name
        <input type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={this.handleChange}
        />

      </label>
      <label>Number
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button>Add contact</button>
    </form >
      <Contacts list={this.renderNameList} />
    </>
  }
}
