const { Component } = require("react");

export class LI extends Component {
    handleDeleteButon = ({ target }) => {
        console.dir(target.parentElement.children[0].textContent)

        this.props.deleteItem({ name: target.parentElement.children[0].textContent });
    }

    render() {
        console.log("🚀 ~ this.props.contactsList:", this.props.contactsList)
        return <>
            {this.props.contactsList.filter(el => el.name.toLowerCase().indexOf(this.props.filter.toLowerCase()) !== -1).map(contact => {
                return <li key={contact.id}>
                    <p>{contact.name}</p><span>:</span><p>{contact.number}</p>
                    <button type="button" onClick={this.handleDeleteButon}>Delete</button>
                </li>
            })}
        </>
    }
}