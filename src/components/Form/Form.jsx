import { Component } from "react";
export class Form extends Component {
    state = {
        name: ''
    }
    handleChange = e => {
        const { name, value } = e.currentTarget;
        this.setState({ [name]: value })
    }
    handleSubmit = e => {
        e.preventDefault();
        this.props.onSubmit(this.state);
        // this.reset();
    }
    reset = () => {
        this.setState({ name: '' })
    }

    render() {
        return <form onSubmit={this.handleSubmit}>
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
            <button>Add contact</button>
        </form >

    }
}