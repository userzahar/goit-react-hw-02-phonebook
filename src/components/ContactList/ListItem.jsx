const { Component } = require("react");

export class LI extends Component {

    render() {
        console.log("🚀 ~ this.props.contactsList:", this.props.contactsList)

        return <>
            {this.props.contactsList.filter(el => el.name.toLowerCase().indexOf(this.props.filter.toLowerCase()) !== -1).map(contact => {
                return <li key={contact.id}>{contact.name}: {contact.number}</li>
            })}
        </>
    }
}