import { LI } from "./ListItem";

const { Component } = require("react");

export class ContactList extends Component {

    DataLI = () => {
        return
    }
    render() {
        console.log("✨ string", this.props.contacts)
        return <>
            <ul>
                <LI contactsList={this.props.contacts} filter={this.props.filter} />
            </ul>
        </>
    }
}