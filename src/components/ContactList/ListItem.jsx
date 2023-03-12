const { Component } = require("react");

export function LI({ contact, children}) {
    const {name, number } = contact;
    return <li>
        <p>{name}</p>
        <span>:</span>
        <p>{number}</p>
        {children}
    </li>
}


