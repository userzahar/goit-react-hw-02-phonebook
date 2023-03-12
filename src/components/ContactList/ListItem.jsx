import { ItemStyled } from "./ListItemStyled";

export function LI({ contact, children}) {
    const {name, number } = contact;
    return <ItemStyled>
        <p>{name}</p>
        <span>:</span>
        <p>{number}</p>
        {children}
    </ItemStyled>
}


