
export function Button({ text, clickHeandler }) {
    return <button onClick={clickHeandler}>{text}</button>
}