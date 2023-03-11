import { LI } from "./ListItem";

const { Component } = require("react");

export class ContactList extends Component {

    // deleteItem = (data) => {
    //     console.log('👛', data)
    //     this.props.contacts.filter(el => {
    //         el.name.toLowerCase().indexOf(data.name.toLowerCase()) === -1;
    //     })
    //     console.log("🎇", this.props.contacts)
    // }
    render() {
        return <>
            <ul>
                <LI contactsList={this.props.contacts} filter={this.props.filter} deleteItem={this.deleteItem} />
            </ul>
        </>
    }
}