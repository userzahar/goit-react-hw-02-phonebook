import { Button } from "components/Button/Button";
import { LI } from "./ListItem";

const { Component } = require("react");

export class ContactList extends Component {

    filteredContacts(data) {
        const{contacts} = this.props
        if (!data.length) {
            return contacts;
        }
        return contacts.filter(({name}) => {
      return name.toLowerCase().indexOf(data.toLowerCase()) > -1;
  })
    }
    
    render() {

        const {filter} = this.props;
        return <ul>
                {this.filteredContacts(filter).map((contact) => {
                    return <LI key={contact.id} contact={contact}>
                            <Button text="Delete" clickHeandler={()=>this.props.delete(contact.id)}/>
                        </LI>
                })}
            </ul>
    }
}