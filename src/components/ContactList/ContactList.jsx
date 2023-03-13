import { Button } from "components/Button/Button";
import { LI } from "./ListItem";
import { ListStyled } from "./StyledContactList";
const { Component } = require("react");

export function ContactList ({filterList}) {
        return <ListStyled>
            {filterList().map((contact) => (
                <LI key={contact.id} contact={contact}>
                    <Button text="Delete" clickHeandler={()=>this.props.delete(contact.id)}/>
                </LI>)
                )}
            </ListStyled>
    }
