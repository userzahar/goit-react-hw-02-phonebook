import { Button } from "components/Button/Button";
import { LI } from "./ListItem";
import { ListStyled } from "./StyledContactList";
const { Component } = require("react");

export class ContactList extends Component {
    filteredContacts(data) {
        const{contacts} = this.props
        if (!data.length) {
            return contacts;
        }
        return contacts.filter(({name}) => {
      return name.toLowerCase().indexOf(data.toLowerCase()) > -1;
  })}
    render() {
        const {filter} = this.props;
        return <ListStyled>
            {this.filteredContacts(filter).map((contact) => (
                <LI key={contact.id} contact={contact}>
                    <Button text="Delete" clickHeandler={()=>this.props.delete(contact.id)}/>
                </LI>)
                )}
            </ListStyled>
    }
}