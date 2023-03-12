import { ButtonStyled } from "./ButtonStyled"

export function Button({ text, clickHeandler }) {
    return <ButtonStyled onClick={clickHeandler}>{text}</ButtonStyled>
}