const { Component } = require("react");

export class ContactList extends Component {

    render() {
        console.log("✨ string", this.props.contacts)
        return <>
            <ul>{this.props.contacts.filter(el => el.name.toLowerCase().indexOf(this.props.filter.toLowerCase()) !== -1).map(contact => {
                return <li key={contact.id}>{contact.name}: {contact.number}</li>
            })} </ul>
        </>
    }
}