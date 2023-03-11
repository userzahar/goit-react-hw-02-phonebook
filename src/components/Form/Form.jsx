import { nanoid } from "nanoid";

const { Component } = require("react");

export class Form extends Component {
    state = {
        name: '',
        number: ''
    }
    inputId = nanoid();
    inputIdNew = nanoid();
    handleChange = ({ target }) => {
        // console.log("🧧", target.value)
        this.setState({ [target.name]: target.value })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.createContacts({
            name: this.state.name,
            number: this.state.number
        })
        this.reset();
    }
    reset = () => {
        this.setState({
            name: '',
            number: ''
        })
    }
    render() {
        return <form onSubmit={this.handleSubmit}>
            <label htmlFor={this.inputId}>Name</label>
            <input
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                onChange={this.handleChange}
                value={this.state.name}
                id={this.inputId}
            />

            <label htmlFor={this.inputIdNew}>Number</label>
            <input
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
                onChange={this.handleChange}
                value={this.state.number}
                id={this.inputIdNew}
            />
            <button type='submit'>Add Contact</button>
        </form>

    }
}