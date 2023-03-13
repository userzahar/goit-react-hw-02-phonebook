import { Button } from "components/Button/Button";
import { LI } from "./ListItem";
import { ListStyled } from "./StyledContactList";

export function ContactList({ filterList, deleteItem }) {
    console.log("✨",filterList)
        return <ListStyled>
            {filterList().map((contact) => (
                <LI key={contact.id} contact={contact}>
                    <Button text="Delete" clickHeandler={()=>deleteItem(contact.id)}/>
                </LI>)
                )}
            </ListStyled>
    }
